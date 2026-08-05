import { useCallback, useEffect, useMemo, useRef, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { buildContent } from './content'
import { dictionaries, LocaleContext, LOCALE_STORAGE_KEY, type LocaleContextValue } from './useI18n'
import { defaultLocale, localeFromPath, localizePath, locales, stripLocale } from './routing'
import type { Locale } from './types'

const isLocale = (value: string | null): value is Locale => locales.includes(value as Locale)

/**
 * The URL owns the language — see `routing.ts` for why. This provider only
 * reads it, so prerendered HTML and the first client render always agree.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const locale = localeFromPath(pathname)

  /** Switching language keeps the visitor on the same page and section. */
  const setLocale = useCallback(
    (next: Locale) => {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
      navigate(`${localizePath(next, stripLocale(pathname))}${hash}`)
    },
    [navigate, pathname, hash],
  )

  /**
   * Send a returning visitor back to the language they picked last time — but
   * only from the bare root, and only after mount. Redirecting on a deep link
   * would fight the URL the visitor actually asked for, and redirecting during
   * render would make the prerendered page flicker through the wrong language.
   */
  const redirected = useRef(false)
  useEffect(() => {
    if (redirected.current || pathname !== '/') return
    redirected.current = true

    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (isLocale(stored) && stored !== defaultLocale) {
      navigate(`${localizePath(stored, '/')}${hash}`, { replace: true })
    }
  }, [pathname, hash, navigate])

  useEffect(() => {
    document.documentElement.lang = dictionaries[locale].htmlLang
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      ...buildContent(dictionaries[locale]),
      locale,
      setLocale,
      dictionaries,
    }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
