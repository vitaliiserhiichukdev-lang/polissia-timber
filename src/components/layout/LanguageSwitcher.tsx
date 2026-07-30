import { locales, useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

/** Segmented EN / UA toggle — two locales, so no dropdown needed. */
export default function LanguageSwitcher({ inverse = false }: { inverse?: boolean }) {
  const { locale, setLocale, dictionaries, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={cn(
        'flex items-center gap-0.5 rounded-full border p-0.5',
        inverse ? 'border-white/25 bg-white/5' : 'border-line-strong bg-white/60',
      )}
    >
      {locales.map((option) => {
        const active = option === locale
        return (
          <button
            key={option}
            type="button"
            lang={dictionaries[option].htmlLang}
            onClick={() => setLocale(option)}
            aria-pressed={active}
            title={dictionaries[option].label}
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-semibold tracking-[0.06em] transition duration-300',
              active
                ? inverse
                  ? 'bg-white text-ink-900'
                  : 'bg-ink-900 text-inverse'
                : inverse
                  ? 'text-inverse/70 hover:text-white'
                  : 'text-muted hover:text-oak-600',
            )}
          >
            {dictionaries[option].short}
          </button>
        )
      })}
    </div>
  )
}
