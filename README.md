# Polissia Timber — bilingual export website

Premium B2B site for a Ukrainian timber producer and exporter: oak edged boards,
pine construction timber and natural oak parquet. React 19 + TypeScript + Vite,
styled with Tailwind CSS v4, animated with Framer Motion.

```bash
yarn install
yarn dev          # http://localhost:5173
yarn build        # typecheck → client build → SSR build → prerender to static HTML
yarn build:spa    # client build only, no prerendering
yarn typecheck
yarn lint
```

## Rendering: prerendered, not client-rendered

`yarn build` writes a real HTML file for every route, so the first response
contains the whole page. This is the difference between being indexable and not:
Google will execute JavaScript eventually, but Bing and the AI answer engines
largely do not, and a client-rendered SPA serves them an empty
`<div id="root">`.

```
vite build                              → dist/ (client bundle + assets)
vite build --ssr src/entry-server.tsx   → .ssr-build/ (throwaway)
node scripts/prerender.mjs              → dist/**/index.html, 404.html, sitemap.xml
```

`src/entry-server.tsx` owns the route list (`targets`) and the sitemap.
`scripts/prerender.mjs` splices each render into the `<!--app-head-->` and
`<!--app-html-->` slots in `index.html`. The client then **hydrates** that markup
(`src/main.tsx`) instead of repainting.

Two constraints follow, and breaking either is easy:

- **No `window` / `document` outside effects or event handlers.** The first
  client render must match the prerendered HTML, so anything measuring the
  viewport starts from a neutral value — see `hooks/useMediaQuery.ts`.
- **`sitemap.xml` is generated, not stored.** It is built from the same `targets`
  list that emits the HTML, so it cannot advertise a URL that was never written.

## Languages (EN / DE / PL / UA)

Each locale has its own URL: English at the root, the rest under a prefix — `/de`,
`/pl`, `/uk` and e.g. `/de/products/oak-edged-boards`. The locale is read from the
path, never from state: a language with no URL cannot be indexed, and `hreflang`
has nothing to point at. `localStorage` (`polissia.locale`) only remembers a
deliberate choice, to redirect a returning visitor who lands on the bare root.

German and Polish are the volume markets; Ukrainian is for domestic use. Sixteen
pages are prerendered — four routes × four languages.

```
src/i18n/
  types.ts            Dictionary interface — the contract both locales satisfy
  en.ts               English copy
  uk.ts               Ukrainian copy
  content.ts          merges dictionary + media + prices into render-ready models
  routing.ts          locale ⇄ URL: localizePath, localeFromPath, stripLocale
  useI18n.ts          context and hook
  LocaleProvider.tsx  reads locale from the URL, sets <html lang>
```

Internal links go through `components/ui/LocaleLink.tsx`, which takes the
canonical path (`/products/x`, `/#contact`) and adds the prefix. Import that as
`Link` rather than pulling `Link` from `react-router-dom`, or the link will drop
the visitor back into English.

Components never hold copy. They call `useI18n()` and read `t.*` (strings) plus
the resolved models (`products`, `gallery`, `processSteps`, …).

**Adding a language** — four steps, nothing else:

1. Add the code to `Locale` in `types.ts` and to `locales` in `routing.ts`.
2. Add `src/i18n/xx.ts` implementing `Dictionary`, and register it in
   `dictionaries` in `useI18n.ts`.
3. Add the Open Graph territory to `ogLocales` in `src/seo/pageHead.ts`.
4. Keep the eight `nav` labels short — see the header note under *Structure*.

Routes, `hreflang`, the sitemap and the prerender target list are all derived from
`locales`. Because `Dictionary` is a strict interface, a missing translation is a
type error rather than a blank page.

> **Have `de.ts` and `pl.ts` reviewed by a native speaker in the trade before
> publishing.** The grading and drying vocabulary is load-bearing — Festast /
> Schwarzast / Splintholz, sęk zdrowy / sęk czarny / biel — and a mistranslated
> tolerance is a commercial dispute, not a typo. Both files carry this warning at
> the top.

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

**`TBC` — unconfirmed figures that are hidden until filled in.** Capacity, lead
times, shipment history and held certificates are commercial claims: a
plausible-looking guess is worse than a gap, because the buyer plans against it
and an unsubstantiated compliance claim stops the consignment at customs. So
`src/data/pending.ts` filters any entry still set to `TBC` out of the render —
the copy and layout are finished and waiting behind it.

Currently hidden, and what it takes to reveal each:

| Where | Needs |
| --- | --- |
| `process.capacity` | monthly output, shift throughput, kiln count and charge volume |
| `exportSection.loads` | minimum order quantity |
| `exportSection.leadTimes` | transit days per destination |
| `exportSection.cases` | three real shipments from dispatch records |
| `compliance.documents` | FSC/PEFC certificate number, or delete the entry |
| `faq.items` | answers to the MOQ and lead-time questions |

**`TO CONFIRM` — published values that need checking:**

- Brand name, e-mail, phone and address in `src/data/contact.ts` and the
  `contact.values` block of each dictionary.
- Pine dimensions and parquet construction/thickness (no written spec supplied).
- Moisture regime for oak; the indicative list of export destinations.
- `https://polissia-timber.com` in `brand.site` and `public/robots.txt`.

**The compliance section states regulatory facts** (EUDR data provided per
consignment, phytosanitary, ISPM-15, EUR.1). It carries a review notice in both
dictionaries and must be signed off by the company before launch — see
`compliance` in `en.ts` / `uk.ts`.

## Structure

```
src/
  components/
    layout/    Header, Footer, Logo, LanguageSwitcher, ScrollManager
    sections/  Hero, Compliance, About, Catalog, Process, Advantages,
               Gallery, Export, Faq, Contact
    product/   ProductCard, ProductGallery, SpecTable, PriceTable, GradeGuide, QuoteForm
    ui/        Icon, Reveal, SectionReveal, SectionHeader, Lightbox, LocaleLink
  pages/       Home, ProductPage, NotFound
  seo/         pageHead.ts (single source for head + JSON-LD), faq.ts
  hooks/       useSeo, useMediaQuery, useBodyLock
  entry-server.tsx  build-time render + route list + sitemap
  index.css    design tokens (@theme) + component classes (.btn, .card-surface, .field…)
```

Routes: `/` and `/products/:slug` (`oak-edged-boards`,
`pine-construction-timber`, `oak-parquet-boards`), each mirrored under `/uk`.

Home page order is deliberate: `Compliance` sits directly under the hero because
an EU buyer cannot act on price or grade until the EUDR question is answered.

**The header row is width-constrained.** Eight nav items, four languages and a CTA
have to coexist inside an 80rem container; German and Ukrainian labels run ~30%
longer than English, and the row used to overflow and drag the whole bar sideways.
What keeps it fitting: no strapline on the header logo, no phone number in the top
row (it is in the drawer, footer and contact block), a dropdown language menu
rather than a segmented control, `common.quoteShort` for the CTA, and a nav that
is the only flexible zone and may scroll rather than push the actions off-screen.
Adding a nav item or a long label means re-checking this at 1280px.

**Motion.** `Reveal` animates individual items; `SectionReveal` lifts a whole
section as it scrolls in. `SectionReveal` is transform-only on purpose — most of
its content is already inside a `Reveal` that fades, and fading the parent too
multiplies the two — and it wraps `.container-page`, never the `<section>`, because
a transform would become the containing block for the `position: fixed` lightbox.
Both honour `prefers-reduced-motion`.

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

`src/seo/pageHead.ts` is the single source for every head tag and schema, keyed
by `(locale, path)`. It is read twice — by `useSeo` for the live DOM and by
`entry-server.tsx` at build time — so the crawler and the client can never
disagree about a canonical URL or a title.

Per page: `<title>`, description, canonical, `robots`, Open Graph, Twitter card,
and `hreflang` alternates for every locale plus `x-default`. JSON-LD is
`Organization` + `FAQPage` on the home page and `Product` + `BreadcrumbList` on
each product page; the 404 is `noindex`.

`FAQPage` is generated from the same filtered list the accordion renders
(`src/seo/faq.ts`), so structured data can never advertise a question the page
does not answer.

Still to do off-site, and no code can substitute for it: verify the domain in
Google Search Console, submit `sitemap.xml`, and request indexing.

## Deployment

Static build in `dist/`, one directory per route. Because every path is a real
file, **no SPA catch-all rewrite is needed** — and adding one would shadow the
prerendered pages with the home page. Point the host at `dist/` and let the
filesystem resolve; use `404.html` for unknown paths.

`vercel.json` sets the build command, long-lived caching for hashed assets, and
`X-Robots-Tag: noindex` on `*.vercel.app`. That last rule matters: without it
preview deployments get crawled and split ranking signals across duplicate
copies of every page.

Images in `public/` are served as-is (JPEG, ≤1280 px, ~100–200 kB each) with
`loading="lazy"`, `decoding="async"` and intrinsic dimensions set to avoid
layout shift. Generating WebP/AVIF variants is the next optimisation step if
Lighthouse asks for it.
