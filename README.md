# Polissia Timber — bilingual export website

Premium B2B site for a Ukrainian timber producer and exporter: oak edged boards,
pine construction timber and natural oak parquet. React 19 + TypeScript + Vite,
styled with Tailwind CSS v4, animated with Framer Motion.

```bash
yarn install
yarn dev          # http://localhost:5173
yarn build        # tsc --noEmit && vite build
yarn typecheck
yarn lint
```

## Language switching (EN / UA)

The site is fully bilingual with an `EN | UA` toggle in the header. There is one
URL per page (no `/uk/` prefix): the locale is client state, stored in
`localStorage` under `polissia.locale`, and on a first visit it follows the
browser language (Ukrainian browsers get Ukrainian, everyone else English).
`<html lang>` is updated on every switch.

```
src/i18n/
  types.ts            Dictionary interface — the contract both locales satisfy
  en.ts               English copy
  uk.ts               Ukrainian copy
  content.ts          merges dictionary + media + prices into render-ready models
  useI18n.ts          context, hook, locale list
  LocaleProvider.tsx  provider: detection, persistence, <html lang>
```

Components never hold copy. They call `useI18n()` and read `t.*` (strings) plus
the resolved models (`products`, `gallery`, `processSteps`, …).

**Adding a language:** add `src/i18n/xx.ts` implementing `Dictionary`, then
register it in `dictionaries` and `locales` in `useI18n.ts`. Because
`Dictionary` is a strict interface, a missing translation is a type error rather
than a blank page.

**Editing copy:** change `en.ts` / `uk.ts` only. Prices, image paths and slugs
are language-neutral and live in `src/data/`, so they cannot drift between
locales.

## Data

Language-neutral facts are separated from copy:

| File | Contents |
| --- | --- |
| `src/data/pricing.ts` | oak price list: sections, lengths, grade prices |
| `src/data/media.ts` | photo registry (path, intrinsic size, category) |
| `src/data/contact.ts` | brand name, email, phone, Incoterms, product slugs |

Provenance of the product data:

- **Grades I–IV and their tolerances** (live/black knots, sapwood, ingrown bark,
  and the defects excluded from every grade) are transcribed from the company's
  written specification — `public/specifications/document_1.jpg`.
- **Sections, lengths and prices** come from the company price list —
  `public/specifications/document_2.jpg`. `list` is the printed price; `current`
  is the revised handwritten price where the sheet gives one. Grade IV in 230 mm
  is struck through on the sheet, so it renders as "on request".
- Prices are treated as **EUR per m³** (the usual unit for sawn timber; the
  sheet itself states no unit — confirm before publishing).

### Placeholders to replace

Search for `TO CONFIRM`:

- Brand name, e-mail, phone and address in `src/data/contact.ts` and the
  `contact.values` block of each dictionary.
- Pine dimensions and parquet construction/thickness (no written spec supplied).
- Moisture regime for oak; the indicative list of export destinations.
- `https://polissia-timber.com` in `index.html`, `public/sitemap.xml`,
  `public/robots.txt` and `brand.site`.

## Structure

```
src/
  components/
    layout/    Header, Footer, Logo, LanguageSwitcher, ScrollManager
    sections/  Hero, About, Catalog, Process, Advantages, Gallery, Export, Contact
    product/   ProductCard, ProductGallery, SpecTable, PriceTable, GradeGuide, QuoteForm
    ui/        Icon, Reveal, SectionHeader, Lightbox
  pages/       Home, ProductPage, NotFound
  hooks/       useSeo, useJsonLd, useBodyLock
  index.css    design tokens (@theme) + component classes (.btn, .card-surface, .field…)
```

Routes: `/` and `/products/:slug` (`oak-edged-boards`,
`pine-construction-timber`, `oak-parquet-boards`).

## Design system

All tokens live in the `@theme` block of `src/index.css` and are available as
Tailwind utilities: `bg-ink-900`, `text-oak-600`, `bg-sand-50`, `font-display`,
`text-h1`, `shadow-lift`, `py-section`, `max-w-page`, `ease-expo`. Recurring
patterns are component classes in the same file (`.btn`, `.btn-oak`, `.chip`,
`.card-surface`, `.field`, `.eyebrow`).

Motion is centralised in `components/ui/Reveal.tsx` and honours
`prefers-reduced-motion`; the hero parallax, the production progress rail and
the page transitions all disable themselves when it is set.

## Quote form

Enquiries are the point of the site, so delivery does not depend on the
visitor's mail client:

```
QuoteForm (client)  →  POST /api/quote  →  server/quote.ts  →  Resend  →  inbox
```

- **`src/components/product/QuoteForm.tsx`** validates input, then posts JSON to
  `VITE_CONTACT_ENDPOINT`. With that variable unset it falls back to composing a
  pre-filled e-mail — handy locally, not something to ship.
- **`server/quote.ts`** holds the whole server side: validation, bot filtering
  and the Resend call. It is written against the Web `Request`/`Response` API,
  so the platform adapters are three lines each —
  `netlify/functions/quote.mts` and `api/quote.ts` (Vercel). Cloudflare Pages
  works the same way via `functions/api/quote.ts` re-exporting `onRequestPost`.
- The customer's address becomes `reply_to`, so replying from the inbox answers
  them directly, and the mail is sent **from your own domain** — no third party
  in the delivery path and nothing stored outside your mailbox.

### Setup

1. Create a Resend account, verify the sending domain and issue an API key.
2. Set the variables on the hosting platform (see `.env.example`):

   | Variable | Scope | Purpose |
   | --- | --- | --- |
   | `VITE_CONTACT_ENDPOINT` | build | `/api/quote` |
   | `RESEND_API_KEY` | function | Resend key — never prefix with `VITE_` |
   | `QUOTE_TO` | function | inbox that receives enquiries |
   | `QUOTE_FROM` | function | verified sender, e.g. `Polissia Timber <website@…>` |
   | `ALLOWED_ORIGIN` | function | rejects posts from other sites |

3. Deploy. `netlify.toml` / `vercel.json` are included — keep the one matching
   your host and delete the other.

Locally: `netlify dev` or `vercel dev` serves the function alongside Vite. Plain
`yarn dev` has no function, so the form uses the e-mail fallback.

### Spam handling

No captcha. Two checks, both enforced **server-side** because the client can be
bypassed:

- a honeypot field, clipped from view and out of the tab order, that only bots
  fill in;
- the time between the form mounting and being submitted; under 2.5 s is a bot.

Either one makes the endpoint answer `200` and quietly drop the message — an
error response would just tell a bot what to fix. Payload fields are length
capped and HTML-escaped before they reach the e-mail.

## SEO

Per-route `<title>`, description, canonical and Open Graph tags via `useSeo`, in
the active language. `Organization` JSON-LD in `index.html`, `Product` JSON-LD
injected per product page. `public/sitemap.xml` and `public/robots.txt` are
static — update the domain before launch.

## Deployment

Static build in `dist/` plus one serverless function. The app is a single-page
app, so the host must rewrite unknown paths to `/index.html` for `/products/*`
to survive a hard reload — while leaving `/api/*` to the function. Both included
config files do exactly that; on nginx it is `try_files ... /index.html` with an
`/api/` location excluded.

Images in `public/` are served as-is (JPEG, ≤1280 px, ~100–200 kB each) with
`loading="lazy"`, `decoding="async"` and intrinsic dimensions set to avoid
layout shift. Generating WebP/AVIF variants is the next optimisation step if
Lighthouse asks for it.
