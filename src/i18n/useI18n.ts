import { createContext, useContext } from 'react'
import { de } from './de'
import { en } from './en'
import { pl } from './pl'
import { uk } from './uk'
import type { Content } from './content'
import type { Dictionary, Locale } from './types'

export const dictionaries: Record<Locale, Dictionary> = { en, de, pl, uk }

/** Remembers a deliberate language choice; see `LocaleProvider`. */
export const LOCALE_STORAGE_KEY = 'polissia.locale'

export interface LocaleContextValue extends Content {
  locale: Locale
  setLocale: (locale: Locale) => void
  dictionaries: Record<Locale, Dictionary>
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

/** Strings, resolved media and the locale setter. */
export function useI18n(): LocaleContextValue {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useI18n must be used inside <LocaleProvider>')
  return context
}
