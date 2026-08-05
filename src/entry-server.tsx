import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { LocaleProvider } from './i18n/LocaleProvider'
import { brand, productSlugs } from './data/contact'
import { dictionaries } from './i18n/useI18n'
import { defaultLocale, localizePath, locales } from './i18n/routing'
import { pageHead, type HeadTag } from './seo/pageHead'
import type { Locale } from './i18n/types'

/**
 * Build-time rendering entry.
 *
 * The site is a static brochure with no per-request data, so it is prerendered
 * once per route at build time rather than server-rendered. That answers the
 * one thing a client-rendered SPA cannot: the crawler — and any AI answer
 * engine, which will not run JavaScript at all — receives the full page in the
 * first response instead of an empty `<div id="root">`.
 */

/** Every URL the build should emit, with the logical path it renders. */
export interface PrerenderTarget {
  /** URL as served, e.g. `/uk/products/oak-edged-boards`. */
  url: string
  locale: Locale
  /** Locale-independent path the head is keyed off. */
  path: string
}

export const targets: PrerenderTarget[] = locales.flatMap((locale) => [
  { url: localizePath(locale, '/') || '/', locale, path: '/' },
  ...productSlugs.map((slug) => ({
    url: localizePath(locale, `/products/${slug}`),
    locale,
    path: `/products/${slug}`,
  })),
])

/** Rendered to `404.html` so the host can serve a styled page, not bare text. */
export const notFoundTarget: PrerenderTarget = {
  url: '/404',
  locale: defaultLocale,
  path: '/404',
}

const escapeAttr = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const escapeText = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const serialiseTag = ({ tag, attrs }: HeadTag): string => {
  const pairs = Object.entries(attrs)
    .map(([name, value]) => `${name}="${escapeAttr(value)}"`)
    .join(' ')
  return `<${tag} ${pairs} />`
}

export interface RenderResult {
  /** Markup for `<div id="root">`. */
  html: string
  /** Tags to splice into `<head>`. */
  head: string
  /** Replaces the template's `<title>`. */
  title: string
  /** Value for the `lang` attribute on `<html>`. */
  lang: string
}

/**
 * Sitemap built from the same `targets` list that produces the HTML, so the two
 * cannot drift — a sitemap advertising a URL that was never emitted (or missing
 * one that was) is a silent indexing failure.
 */
export function sitemap(): string {
  const priorities: Record<string, number> = { '/': 1.0, uk: 0.7 }

  const entries = targets.map((target) => {
    const alternates = locales
      .map((alternate) => {
        const code = dictionaries[alternate].htmlLang
        const href = `${brand.site}${localizePath(alternate, target.path)}`
        return `    <xhtml:link rel="alternate" hreflang="${code}" href="${href}" />`
      })
      .concat(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${brand.site}${localizePath(defaultLocale, target.path)}" />`,
      )
      .join('\n')

    const isHome = target.path === '/'
    const priority =
      target.locale === defaultLocale
        ? isHome
          ? priorities['/']
          : 0.9
        : isHome
          ? priorities.uk
          : 0.6

    return [
      '  <url>',
      `    <loc>${brand.site}${target.url}</loc>`,
      alternates,
      '    <changefreq>monthly</changefreq>',
      `    <priority>${priority.toFixed(1)}</priority>`,
      '  </url>',
    ].join('\n')
  })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n')
}

/**
 * React 19 emits its own resource hints — a preload for the hero image it saw
 * `fetchPriority="high"` on, for instance — and `renderToString` flushes them
 * to the front of the markup. On the client the same hints are placed in
 * `<head>`, so leaving them inside `#root` is a guaranteed hydration mismatch
 * that throws the whole prerendered tree away.
 *
 * Lifting them into `<head>` fixes the mismatch and is where they belong: each
 * page then preloads its own hero image instead of one hardcoded in the
 * template.
 */
const LINK_TAG = /<link\b[^>]*>/g

export function render(target: PrerenderTarget): RenderResult {
  const rendered = renderToString(
    <StrictMode>
      <StaticRouter location={target.url}>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </StaticRouter>
    </StrictMode>,
  )

  const hoisted = rendered.match(LINK_TAG) ?? []
  const html = rendered.replace(LINK_TAG, '')

  const head = pageHead(target.locale, target.path)
  const parts = [...head.tags.map(serialiseTag), ...hoisted]

  if (head.jsonLd.length > 0) {
    // An unescaped `</script>` inside the JSON would close the block early.
    const json = JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')
    parts.push(`<script type="application/ld+json" id="page-jsonld">${json}</script>`)
  }

  return {
    html,
    head: parts.join('\n    '),
    title: escapeText(head.title),
    lang: head.lang,
  }
}
