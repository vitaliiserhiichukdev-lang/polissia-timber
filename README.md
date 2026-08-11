# Polissia Timber — bilingual export website

Premium B2B site for a Ukrainian timber producer and exporter: oak edged boards,
pine construction timber and natural oak parquet. React 19 + TypeScript + Vite,
styled with Tailwind CSS v4, animated with Framer Motion.

```bash
yarn install
yarn dev          # http://localhost:5173
yarn build        # typecheck → client build → SSR build → prerender to static HTML
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

**All three steps are required — `vite build` alone is not a deployable site.** On
its own it emits one page whose root is still the literal `<!--app-html-->`
placeholder, with no `sitemap.xml` and no `404.html`, while `public/robots.txt`
goes on advertising a sitemap that would 404. Use `yarn dev` for local work and
`yarn build` for anything that ships.

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

- `legalName` in `src/data/contact.ts` — the registered entity name and form.
  It appears in the footer copyright and in the `Organization` / `AggregateOffer`
  JSON-LD, so it should match the register.
- The address wording in the `contact.values` block of each dictionary — it is
  currently only "Kyiv region, Ukraine".
- Pine dimensions and parquet construction/thickness (no written spec supplied).
- Moisture regime for oak; the indicative list of export destinations.
- The domain is `polissiatimber.com`, set in `brand.site` and `public/robots.txt`.
  Transactional mail is sent from the `send.` subdomain so its SPF/DKIM cannot
  collide with the Zoho records on the apex — see `server/quote.ts`.

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

Home page order is deliberate: `Catalog` comes first, then `Compliance`. Products
lead because a visitor has to know what is sold before EUDR means anything, and
compliance follows immediately because it is the filter that decides whether a
shipment is possible at all. `nav` in each dictionary mirrors this order — keep
them in step.

**Never use Framer Motion's `whileInView` prop here.** It does not fire for
elements that mount during the `AnimatePresence mode="wait"` page transition in
`App.tsx`, so switching language or returning from a product page left content
stranded at its hidden start state — permanently, for the gallery. Use `useInView`
with a ref on a **plain container** element instead: per-tile `useInView` on a
`motion.figure` also failed (its effect saw no node and its dependency array gave
it no reason to retry), which is why the gallery drives all seven tiles from one
observer on the mosaic wrapper.

**The header row is width-constrained.** Eight nav items, four languages and a CTA
have to coexist inside an 80rem container; German and Ukrainian labels run ~30%
longer than English, and the row used to overflow and drag the whole bar sideways.
What keeps it fitting: no strapline on the header logo, no phone number in the top
row (it is in the drawer, footer and contact block), a dropdown language menu
rather than a segmented control, `common.quoteShort` for the CTA, and a nav that
is the only flexible zone and may scroll rather than push the actions off-screen.
Adding a nav item or a long label means re-checking this at 1280px.

**The gallery is a curated seven, not the library.** `galleryTileIds` in
`src/data/media.ts` picks them and the order *is* the composition — the two widest
mosaic cells need the landscape frames. The photographs range from 691×1280
portrait to 1280×960 landscape, so the cell owns the shape: a fixed height per
band plus `object-cover`, which is what stopped the old masonry layout coming out
ragged. Parquet is excluded on purpose (studio shots on white crop to empty
backdrop, and they have a proper grid on the parquet page, which the section links
to). Swapping a photo needs no layout change; adding an eighth means giving a band
a fourth `count`.

**The shipping map is projected, not drawn.** `src/data/destinations.ts` holds
lat/long; `ShippingMap.tsx` projects them equirectangularly with longitude
squeezed by cos(50°), so markers land in their true relative positions and the
reference rings mean something. Adding a country is a data edit — the only
hand-tuned part is `anchor`/`dy`, which keeps labels off each other (Vienna and
Bratislava are 60 km apart, so four of the sixteen are marked but not labelled;
the country list beside the map names all of them). Distances are straight-line,
which the caption says.

**Motion.** `Reveal` animates individual items; `SectionReveal` lifts a whole
section as it scrolls in; gallery tiles wipe up via `clip-path`; map routes draw
via `pathLength` with SMIL `animateMotion` cargo along them.

The FAQ accordion is the exception — pure CSS on a native `<details>`, animated
with `::details-content` (see `.faq-item` in `index.css`). React state would have
had to unmount the answer to animate it out, and the answers must stay in the
prerendered HTML for the FAQPage schema. This way the element also keeps keyboard
support and correct semantics for free, and browsers without `::details-content`
just snap open. `interpolate-size` is scoped to the item, not `:root`, so keyword
interpolation cannot alter height transitions elsewhere; the reduced-motion block
has to name the pseudo-element explicitly, because the `*` wildcard misses it.

Because of that spread, the `<noscript>` block in `index.html` has to undo three
different serialisations — Framer Motion writes an inline style for faded HTML, a
`clip-path` for the gallery, and inside SVG an `opacity` **attribute** rather than
a style, plus a zero-length `stroke-dasharray` for `pathLength`. Miss one and that
piece is invisible without JS. Verified with `javaScriptEnabled: false`. `SectionReveal` is transform-only on purpose — most of
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

`vercel.json` sets the build command, `outputDirectory`, `trailingSlash: false`
and two header rules:

- **`X-Robots-Tag: noindex, nofollow` on `*.vercel.app`.** Without it, preview
  deployments get crawled and split ranking signals across duplicate copies of
  every page. Matched with a `has` host condition so the production domain is
  unaffected.
- **A one-year immutable `Cache-Control` on `/assets/*`**, which is safe because
  Vite fingerprints those filenames.

**Do not add comments to `vercel.json`.** It is strict JSON *and* Vercel validates
it against a closed schema — a `comment` key fails the build outright with
`should NOT have additional property`. Explanations belong here instead.

Images in `public/` are served as-is (JPEG, ≤1280 px, ~100–200 kB each) with
`loading="lazy"`, `decoding="async"` and intrinsic dimensions set to avoid
layout shift. Generating WebP/AVIF variants is the next optimisation step if
Lighthouse asks for it.
