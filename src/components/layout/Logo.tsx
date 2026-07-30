import { brand } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

interface LogoProps {
  inverse?: boolean
  compact?: boolean
}

/** Brand mark + wordmark. `inverse` for use on dark backgrounds. */
export default function Logo({ inverse = false, compact = false }: LogoProps) {
  const { t } = useI18n()

  return (
    <span className={cn('group inline-flex items-center gap-3', inverse ? 'text-inverse' : 'text-ink-900')}>
      <span
        className={cn(
          'grid size-11 place-items-center rounded-xl border transition duration-400',
          'group-hover:border-transparent group-hover:bg-oak-600 group-hover:text-white',
          inverse
            ? 'border-white/15 bg-white/8 text-oak-400'
            : 'border-line bg-sand-100 text-oak-600',
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 40 40" width="26" height="26" fill="none">
          <path
            d="M6 30 20 12l14 18"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 22 20 4l14 18"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.45"
          />
          <path d="M11 35h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-display text-xl font-semibold tracking-tight">{brand.name}</span>
        {!compact && (
          // Hidden on the narrowest screens: the Ukrainian strapline is long
          // enough to push the header row past the viewport.
          <span
            className={cn(
              'hidden text-tiny font-semibold tracking-[0.14em] uppercase sm:block',
              inverse ? 'text-inverse-muted' : 'text-muted',
            )}
          >
            {t.common.logoSub}
          </span>
        )}
      </span>
    </span>
  )
}
