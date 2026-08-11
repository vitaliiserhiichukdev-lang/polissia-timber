/**
 * Quote-request handler: validates the payload, filters bots and sends the
 * enquiry through Resend. Written against the Web `Request`/`Response` API so
 * the same code runs on Netlify Functions, Vercel and Cloudflare — see the thin
 * adapters in `netlify/functions/` and `api/`.
 *
 * Environment (set on the hosting platform, never in the client bundle):
 *   RESEND_API_KEY   required — https://resend.com/api-keys
 *   QUOTE_TO         inbox that receives enquiries
 *   QUOTE_FROM       verified sender, e.g. "Polissia Timber <website@…>"
 *   ALLOWED_ORIGIN   optional — reject posts from other sites
 */

declare const process: { env: Record<string, string | undefined> }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Upper bounds keep a hostile payload from turning into a huge email.
 *
 * Every field the form collects must appear here *and* in `rows` below —
 * otherwise it is accepted, answered with 200 and silently thrown away. The
 * specification fields are the whole point of the RFQ: without them the sales
 * team is back to a round of emails asking what grade and section were wanted.
 */
const LIMITS = {
  name: 120,
  company: 160,
  country: 80,
  email: 200,
  phone: 60,
  product: 80,
  grade: 40,
  dimensions: 200,
  volume: 200,
  moisture: 40,
  destination: 160,
  incoterms: 20,
  message: 4000,
} as const

type Field = keyof typeof LIMITS

interface QuotePayload extends Partial<Record<Field, string>> {
  locale?: string
  /** Honeypot: humans never see this field, bots fill everything. */
  honeypot?: string
  /** Milliseconds between the form mounting and being submitted. */
  elapsedMs?: number
}

/** Bots submit instantly; a real enquiry takes longer than this to type. */
const MIN_FILL_MS = 2500

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char,
  )

const clean = (value: unknown, field: Field): string =>
  typeof value === 'string' ? value.trim().slice(0, LIMITS[field]) : ''

/**
 * The form posts machine values — a product slug, a grade numeral, a moisture
 * code. Left as they are, the email reads "oak-edged-boards" and "kd". These
 * maps turn them back into something a person can act on.
 *
 * Deliberately English regardless of the visitor's language: one inbox, one
 * reading language, and the enquiry's own language is stated on its own row.
 */
const PRODUCTS: Record<string, string> = {
  'oak-edged-boards': 'Oak edged boards',
  'pine-construction-timber': 'Pine construction timber',
  'oak-parquet-boards': 'Natural wood parquet boards',
  mixed: 'Mixed / several products',
}

const GRADES: Record<string, string> = {
  I: 'Grade I',
  II: 'Grade II',
  III: 'Grade III',
  IV: 'Grade IV',
  mixed: 'Mixed grade',
}

const MOISTURE: Record<string, string> = {
  kd: 'Kiln dried (KD)',
  ad: 'Air dried (AD)',
  fresh: 'Fresh sawn',
}

const LANGUAGES: Record<string, string> = {
  en: 'English',
  de: 'German',
  pl: 'Polish',
  uk: 'Ukrainian',
}

/** Falls back to the raw value so an unmapped code is visible, never swallowed. */
const label = (map: Record<string, string>, value: string, fallback = '—') =>
  value ? (map[value] ?? value) : fallback

export async function handleQuote(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const allowedOrigin = process.env.ALLOWED_ORIGIN
  const origin = request.headers.get('origin')
  if (allowedOrigin && origin && origin !== allowedOrigin) {
    return json({ error: 'Forbidden' }, 403)
  }

  let payload: QuotePayload
  try {
    payload = (await request.json()) as QuotePayload
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  // Bots get a 200 with nothing sent: an error would tell them what to fix.
  const trapped =
    (typeof payload.honeypot === 'string' && payload.honeypot.trim() !== '') ||
    (typeof payload.elapsedMs === 'number' && payload.elapsedMs < MIN_FILL_MS)
  if (trapped) {
    return json({ ok: true })
  }

  const form = {
    name: clean(payload.name, 'name'),
    company: clean(payload.company, 'company'),
    country: clean(payload.country, 'country'),
    email: clean(payload.email, 'email'),
    phone: clean(payload.phone, 'phone'),
    product: clean(payload.product, 'product'),
    grade: clean(payload.grade, 'grade'),
    dimensions: clean(payload.dimensions, 'dimensions'),
    volume: clean(payload.volume, 'volume'),
    moisture: clean(payload.moisture, 'moisture'),
    destination: clean(payload.destination, 'destination'),
    incoterms: clean(payload.incoterms, 'incoterms'),
    message: clean(payload.message, 'message'),
  }

  // Mirrors the client-side rules, because the client can be bypassed.
  const invalid: Field[] = []
  if (!form.name) invalid.push('name')
  // Company intentionally not required — see the note in QuoteForm's validate().
  if (!EMAIL_PATTERN.test(form.email)) invalid.push('email')
  if (form.message.length < 10) invalid.push('message')
  if (invalid.length > 0) {
    return json({ error: 'Validation failed', fields: invalid }, 422)
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Configuration error, not the visitor's fault — surfaced as a 5xx so the
    // form shows its "write to us directly" message instead of blaming input.
    return json({ error: 'Mail transport is not configured' }, 500)
  }

  const to = process.env.QUOTE_TO ?? 'export@polissiatimber.com'
  const from = process.env.QUOTE_FROM ?? 'Polissia Timber <website@send.polissiatimber.com>'

  const productName = label(PRODUCTS, form.product, 'Not specified')

  /** Company is optional, so the subject line falls back to the person. */
  const requester = form.company || form.name

  const rows: [string, string][] = [
    ['Name', form.name],
    ['Company', form.company || '—'],
    ['Country', form.country || '—'],
    ['Email', form.email],
    ['Phone', form.phone || '—'],
    ['Product', productName],
    ['Grade', label(GRADES, form.grade)],
    ['Dimensions', form.dimensions || '—'],
    ['Volume / month', form.volume || '—'],
    ['Moisture', label(MOISTURE, form.moisture)],
    ['Destination', form.destination || '—'],
    ['Delivery terms', form.incoterms || '—'],
    ['Language', label(LANGUAGES, payload.locale ?? '', 'Unknown')],
  ]

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    form.message,
  ].join('\n')

  const html = `<div style="font:15px/1.6 -apple-system,Segoe UI,Roboto,sans-serif;color:#241f19">
  <h2 style="font-size:18px;margin:0 0 16px">Quote request — ${escapeHtml(requester)}</h2>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px">
    ${rows
      .map(
        ([label, value]) =>
          `<tr><td style="padding:4px 16px 4px 0;color:#635a4e">${label}</td><td style="padding:4px 0;font-weight:600">${escapeHtml(value)}</td></tr>`,
      )
      .join('')}
  </table>
  <div style="white-space:pre-wrap;padding:16px;background:#f6f1e8;border-radius:12px">${escapeHtml(form.message)}</div>
</div>`

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      // So hitting "Reply" in the inbox answers the customer, not the website.
      reply_to: form.email,
      subject: `Quote request — ${productName} · ${requester}`,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    console.error('Resend rejected the message', response.status, detail)
    return json({ error: 'Mail provider rejected the message' }, 502)
  }

  return json({ ok: true })
}
