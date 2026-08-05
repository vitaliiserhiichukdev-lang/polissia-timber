import type { Locale } from './types'

/**
 * URL-based locales.
 *
 * The default locale is served from the root, so every existing link keeps
 * working; each additional locale lives under a path prefix (`/uk/...`). This
 * is what makes a language separately crawlable and `hreflang` meaningful — a
 * locale held only in React state or localStorage has no URL for Google to
 * index, so the translation earns nothing in search.
 *
 * Adding German or Polish later is: write the dictionary, add the code here.
 */

/** Order of the language menu, and of the prerendered URL set. */
export const locales: Locale[] = ['en', 'de', 'pl', 'uk']

/** Served from `/` rather than `/<code>/`. */
export const defaultLocale: Locale = 'en'

const prefixOf = (locale: Locale): string => (locale === defaultLocale ? '' : `/${locale}`)

/** `/products/x` → `/uk/products/x`, `/#about` → `/uk#about`, `/` → `/uk`. */
export function localizePath(locale: Locale, path: string): string {
  const prefix = prefixOf(locale)
  if (!prefix) return path
  if (path === '/') return prefix
  // A root-relative hash link must not gain a slash: `/uk#about`, not `/uk/#about`.
  if (path.startsWith('/#')) return `${prefix}${path.slice(1)}`
  return `${prefix}${path}`
}

/** The locale a pathname belongs to; unprefixed paths are the default locale. */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1] as Locale
  return segment !== defaultLocale && locales.includes(segment) ? segment : defaultLocale
}

/** Drops the prefix: `/uk/products/x` → `/products/x`, `/uk` → `/`. */
export function stripLocale(pathname: string): string {
  const prefix = prefixOf(localeFromPath(pathname))
  if (!prefix) return pathname || '/'
  return pathname.slice(prefix.length) || '/'
}
