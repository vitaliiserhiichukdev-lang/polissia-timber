import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '../ui/Icon'
import { localizePath, locales, stripLocale } from '../../i18n/routing'
import { LOCALE_STORAGE_KEY, useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

/**
 * Language menu.
 *
 * A dropdown rather than the segmented control this used to be: four locales
 * side by side cost ~160px in a header row that already has eight nav items,
 * and that overflow is what pushed the whole bar sideways.
 *
 * The entries stay real links, so a crawler can follow them to the other
 * language versions and a visitor can bookmark one.
 */
export default function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { locale, dictionaries, t } = useI18n()
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const basePath = stripLocale(pathname)

  // Close on navigation — including hash-only links, which leave pathname alone.
  useEffect(() => setOpen(false), [pathname, hash])

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${t.common.language}: ${dictionaries[locale].label}`}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border py-1.5 pr-2 pl-2.5 text-xs font-semibold tracking-[0.06em] transition duration-300',
          inverse
            ? 'border-white/25 bg-white/5 text-inverse hover:bg-white/12'
            : 'border-line-strong bg-white/60 text-ink-800 hover:border-oak-500 hover:text-oak-600',
        )}
      >
        <Icon name="globe" size={15} />
        {dictionaries[locale].short}
        <span
          aria-hidden="true"
          className={cn('transition-transform duration-300', open && 'rotate-180')}
        >
          <Icon name="chevronDown" size={14} />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full right-0 z-50 mt-2 min-w-44 origin-top-right overflow-hidden rounded-2xl border border-line bg-paper py-1.5 shadow-lift"
          >
            {locales.map((option) => {
              const active = option === locale
              return (
                <li key={option}>
                  <Link
                    to={`${localizePath(option, basePath)}${hash}`}
                    lang={dictionaries[option].htmlLang}
                    hrefLang={dictionaries[option].htmlLang}
                    aria-current={active ? 'true' : undefined}
                    onClick={() => {
                      window.localStorage.setItem(LOCALE_STORAGE_KEY, option)
                      setOpen(false)
                    }}
                    className={cn(
                      'flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors duration-200',
                      active
                        ? 'font-semibold text-oak-600'
                        : 'text-ink-800 hover:bg-sand-100 hover:text-oak-600',
                    )}
                  >
                    {dictionaries[option].label}
                    <span className="text-[0.7rem] font-semibold tracking-[0.08em] text-muted">
                      {dictionaries[option].short}
                    </span>
                  </Link>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
