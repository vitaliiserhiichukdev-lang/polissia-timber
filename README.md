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

`QuoteForm` validates client-side and then:

- `POST`s JSON to `VITE_CONTACT_ENDPOINT` when that variable is set, or
- opens a pre-filled e-mail in the visitor's mail client when it is not,

so the site is usable with no backend deployed. To wire a real endpoint:

```bash
echo 'VITE_CONTACT_ENDPOINT=https://your-form-endpoint' > .env.local
```

## SEO

Per-route `<title>`, description, canonical and Open Graph tags via `useSeo`, in
the active language. `Organization` JSON-LD in `index.html`, `Product` JSON-LD
injected per product page. `public/sitemap.xml` and `public/robots.txt` are
static — update the domain before launch.

## Deployment

Static build in `dist/`. The app is a single-page app, so the host must rewrite
unknown paths to `/index.html` (Netlify `_redirects`, Vercel rewrites, or
`try_files ... /index.html` on nginx) for `/products/*` to survive a hard reload.

Images in `public/` are served as-is (JPEG, ≤1280 px, ~100–200 kB each) with
`loading="lazy"`, `decoding="async"` and intrinsic dimensions set to avoid
layout shift. Generating WebP/AVIF variants is the next optimisation step if
Lighthouse asks for it.
