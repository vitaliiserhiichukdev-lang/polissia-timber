import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { buildContent } from './content'
import {
  dictionaries,
  LocaleContext,
  LOCALE_STORAGE_KEY,
  type LocaleContextValue,
} from './useI18n'
import type { Locale } from './types'

const isLocale = (value: string | null): value is Locale => value === 'en' || value === 'uk'

/** Stored choice wins; otherwise Ukrainian browsers get Ukrainian, everyone else English. */
const detectLocale = (): Locale => {
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (isLocale(stored)) return stored

  const preferred = window.navigator.languages ?? [window.navigator.language]
  return preferred.some((lang) => lang?.toLowerCase().startsWith('uk')) ? 'uk' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next)
  }, [])

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
