import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import { company } from '../../data/company'
import { productOptions } from '../../data/products'
import { cn } from '../../lib/cn'

/**
 * Optional JSON endpoint (form service or own API). Without it the form opens a
 * pre-filled email in the visitor's mail client, so the site is useful with no
 * backend deployed.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

interface QuoteFormProps {
  /** Pre-selects a product — used on product detail pages. */
  defaultProduct?: string
  compact?: boolean
}

type Status = 'idle' | 'sending' | 'sent' | 'mail' | 'error'

interface FormState {
  name: string
  company: string
  country: string
  email: string
  phone: string
  product: string
  volume: string
  message: string
}

const emptyForm = (defaultProduct: string): FormState => ({
  name: '',
  company: '',
  country: '',
  email: '',
  phone: '',
  product: defaultProduct,
  volume: '',
  message: '',
})

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function QuoteForm({ defaultProduct = '', compact = false }: QuoteFormProps) {
  const [form, setForm] = useState<FormState>(emptyForm(defaultProduct))
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormState) => (event: { target: { value: string } }) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.company.trim()) next.company = 'Company name helps us quote correctly.'
    if (!EMAIL_PATTERN.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A few words about your requirement, please.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const composeMail = () => {
    const productLabel =
      productOptions.find((option) => option.value === form.product)?.label ?? 'Not specified'
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country || '—'}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || '—'}`,
      `Product: ${productLabel}`,
      `Volume: ${form.volume || '—'}`,
      '',
      form.message,
    ].join('\n')

    return `mailto:${company.email}?subject=${encodeURIComponent(
      `Quote request — ${productLabel}`,
    )}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    if (!ENDPOINT) {
      window.location.href = composeMail()
      setStatus('mail')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
      setForm(emptyForm(defaultProduct))
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'mail') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="card-surface flex flex-col items-start gap-4 p-8"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-forest-700 text-white">
          <Icon name="check" size={24} />
        </span>
        <h3 className="text-h4 text-ink-900">
          {status === 'sent' ? 'Enquiry received' : 'Your email is ready to send'}
        </h3>
        <p className="text-sm text-muted">
          {status === 'sent'
            ? 'Thank you — our export team will come back to you with a quotation and current availability.'
            : `We opened a pre-filled message in your mail client. If nothing appeared, write to us directly at ${company.email}.`}
        </p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>
          Send another enquiry
        </button>
      </motion.div>
    )
  }

  const fieldWrap = 'flex flex-col gap-1.5'
  const labelClass = 'text-xs font-semibold tracking-[0.1em] text-muted uppercase'
  const errorClass = 'text-xs text-[#b4442f]'

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn('card-surface p-6 md:p-8', compact && 'md:p-7')}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-name">
            Name *
          </label>
          <input
            id="qf-name"
            className={cn('field', errors.name && 'field-error')}
            value={form.name}
            onChange={update('name')}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            placeholder="Jan Kowalski"
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-company">
            Company *
          </label>
          <input
            id="qf-company"
            className={cn('field', errors.company && 'field-error')}
            value={form.company}
            onChange={update('company')}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            placeholder="Drewno Sp. z o.o."
          />
          {errors.company && <p className={errorClass}>{errors.company}</p>}
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-country">
            Country
          </label>
          <input
            id="qf-country"
            className="field"
            value={form.country}
            onChange={update('country')}
            autoComplete="country-name"
            placeholder="Poland"
          />
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-email">
            Email *
          </label>
          <input
            id="qf-email"
            type="email"
            className={cn('field', errors.email && 'field-error')}
            value={form.email}
            onChange={update('email')}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            placeholder="purchasing@company.eu"
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-phone">
            Phone
          </label>
          <input
            id="qf-phone"
            type="tel"
            className="field"
            value={form.phone}
            onChange={update('phone')}
            autoComplete="tel"
            placeholder="+48 000 000 000"
          />
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-product">
            Product
          </label>
          <select
            id="qf-product"
            className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23635a4e%22 stroke-width=%221.6%22 stroke-linecap=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px_18px] bg-[position:right_0.9rem_center] bg-no-repeat pr-10"
            value={form.product}
            onChange={update('product')}
          >
            <option value="">Select a product…</option>
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            <option value="mixed">Mixed / several products</option>
          </select>
        </div>

        <div className={cn(fieldWrap, 'sm:col-span-2')}>
          <label className={labelClass} htmlFor="qf-volume">
            Required volume
          </label>
          <input
            id="qf-volume"
            className="field"
            value={form.volume}
            onChange={update('volume')}
            placeholder="e.g. 40 m³ per month, grade II, 230 × 30 mm"
          />
        </div>

        <div className={cn(fieldWrap, 'sm:col-span-2')}>
          <label className={labelClass} htmlFor="qf-message">
            Message *
          </label>
          <textarea
            id="qf-message"
            rows={compact ? 4 : 5}
            className={cn('field resize-y', errors.message && 'field-error')}
            value={form.message}
            onChange={update('message')}
            aria-invalid={Boolean(errors.message)}
            placeholder="Sections, grades, moisture, delivery terms and destination…"
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 rounded-xl border border-[#b4442f]/30 bg-[#b4442f]/8 px-4 py-3 text-sm text-[#8f351f]">
          Something went wrong sending the form. Please write to{' '}
          <a href={`mailto:${company.email}`} className="underline">
            {company.email}
          </a>
          .
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-oak" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send request'}
          <span className="btn-icon">
            <Icon name="arrowRight" size={18} />
          </span>
        </button>
        <p className="text-xs text-muted">
          Fields marked * are required. We use your details only to answer this enquiry.
        </p>
      </div>
    </form>
  )
}
