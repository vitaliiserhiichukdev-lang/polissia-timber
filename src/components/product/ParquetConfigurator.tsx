import { useId, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from '../ui/LocaleLink'
import Icon from '../ui/Icon'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import FormatPattern from './FormatPattern'
import type { QuotePreset } from './QuoteForm'
import { whatsappHref, type ProductSlug } from '../../data/contact'
import { gradeCodes, gradeDisplay, type GradeCode } from '../../data/pricing'
import { fill, type ResolvedProduct } from '../../i18n/content'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

interface ParquetConfiguratorProps {
  product: ResolvedProduct
  /**
   * Shows the format step and hands the choice up — the home page swaps the
   * media viewer beside it. Product pages omit it: the format is the page.
   */
  onProductChange?: (slug: ProductSlug) => void
  /** Where "Request a quote" leads: the contact section or the page's own form. */
  quoteTo: string
  /** Link through to the format's own page. */
  showDetails?: boolean
  className?: string
}

/** Selectable tile: a visually hidden native radio inside its label. */
const optionClass =
  'relative flex cursor-pointer rounded-2xl border border-line-strong bg-white transition duration-300 ' +
  'hover:border-oak-400 has-[:checked]:border-oak-500 has-[:checked]:bg-sand-50 has-[:checked]:shadow-soft ' +
  'has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-oak-500'

function Step({ index, label, children }: { index: number; label: string; children: ReactNode }) {
  return (
    <fieldset className="min-w-0">
      <legend className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
        <span className="grid size-6 place-items-center rounded-full bg-ink-900 font-display text-[0.7rem] tracking-normal text-inverse">
          {index}
        </span>
        {label}
      </legend>
      <div className="mt-3">{children}</div>
    </fieldset>
  )
}

/**
 * Format → grade → size → price, with the two ways to act on it.
 *
 * Every figure comes from the price list, so what the buyer sees here is the
 * line they will be quoted. Choices are real radio inputs: arrow keys move
 * within a group, and the whole picker works without a pointer.
 */
export default function ParquetConfigurator({
  product,
  onProductChange,
  quoteTo,
  showDetails = false,
  className,
}: ParquetConfiguratorProps) {
  const { t, products, formatPrice, gradeName } = useI18n()
  const id = useId()
  const [grade, setGrade] = useState<GradeCode>('AB')
  const [sizeIndex, setSizeIndex] = useState(0)

  // Formats have different numbers of sizes; keep the index valid across a switch.
  const size = product.sizes[Math.min(sizeIndex, product.sizes.length - 1)]
  const price = size.prices[grade]
  const spec = t.catalog.specs

  const preset: QuotePreset = { product: product.slug, grade, dimensions: size.spec }
  const whatsappText = fill(t.whatsapp.selection, {
    product: product.name,
    grade: gradeName(grade),
    size: size.spec,
    price: formatPrice(price),
  })

  let step = 0

  return (
    <div className={cn('card-surface flex flex-col gap-7 p-5 text-body md:p-7', className)}>
      {onProductChange && (
        <Step index={++step} label={t.catalog.formatStep}>
          <div className="grid grid-cols-3 gap-2.5">
            {products.map((item) => (
              <label
                key={item.slug}
                className={cn(optionClass, 'flex-col items-center gap-2 px-2 py-4 text-center')}
              >
                <input
                  type="radio"
                  name={`${id}-format`}
                  value={item.slug}
                  checked={item.slug === product.slug}
                  onChange={() => onProductChange(item.slug)}
                  className="sr-only"
                />
                <FormatPattern slug={item.slug} size={34} className="text-oak-600" />
                <span className="text-sm leading-tight font-semibold text-ink-900">
                  {item.shortName}
                </span>
                <span className="text-[0.7rem] leading-tight text-muted tabular-nums">
                  {t.common.priceFrom} {formatPrice(item.priceFrom)}
                </span>
              </label>
            ))}
          </div>
        </Step>
      )}

      <Step index={++step} label={t.catalog.gradeStep}>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {gradeCodes.map((code) => (
            <label key={code} className={cn(optionClass, 'flex-col gap-1.5 p-4')}>
              <input
                type="radio"
                name={`${id}-grade`}
                value={code}
                checked={code === grade}
                onChange={() => setGrade(code)}
                className="sr-only"
              />
              <span className="flex items-baseline justify-between gap-3">
                <span className="font-display text-2xl leading-none text-ink-900">
                  {gradeDisplay[code]}
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] text-oak-600 uppercase">
                  {t.grades[code].name}
                </span>
              </span>
              <span className="text-sm leading-snug text-muted">{t.grades[code].summary}</span>
              <span className="mt-1 text-sm font-semibold text-ink-900 tabular-nums">
                {formatPrice(size.prices[code])}
                <span className="ml-1 font-normal text-muted">{t.common.perSquareMetre}</span>
              </span>
            </label>
          ))}
        </div>
      </Step>

      <Step index={++step} label={t.catalog.sizeStep}>
        {product.sizes.length > 1 ? (
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((item, i) => (
              <label key={item.key} className={cn(optionClass, 'flex-col px-4 py-2.5')}>
                <input
                  type="radio"
                  name={`${id}-size`}
                  value={item.key}
                  checked={item.key === size.key}
                  onChange={() => setSizeIndex(i)}
                  className="sr-only"
                />
                <span className="text-sm font-semibold text-ink-900 tabular-nums">{item.label}</span>
              </label>
            ))}
          </div>
        ) : (
          <p className="text-sm font-semibold text-ink-900 tabular-nums">{size.label}</p>
        )}
      </Step>

      <div className="rounded-3xl bg-ink-900 p-5 text-inverse md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-oak-400 uppercase">
              {t.catalog.priceLabel} · {product.shortName} · {gradeDisplay[grade]}
            </p>
            <p className="mt-2 flex items-baseline gap-2" aria-live="polite">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={price}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-5xl leading-none text-inverse tabular-nums"
                >
                  {formatPrice(price)}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-inverse-muted">{t.common.perSquareMetre}</span>
            </p>
          </div>
          <p className="max-w-52 text-xs leading-snug text-inverse-muted">{t.catalog.priceNote}</p>
        </div>

        <dl className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-line-inverse pt-4 text-sm sm:grid-cols-4">
          {[
            { label: spec.thickness, value: product.keyFacts[0].value },
            { label: spec.wearLayer, value: product.keyFacts[1].value },
            { label: spec.width, value: `${size.width} ${t.common.mm}` },
            { label: spec.length, value: size.lengthLabel, note: size.lengthNote },
          ].map((row) => (
            <div key={row.label} className="min-w-0">
              <dt className="text-[0.7rem] font-semibold tracking-[0.1em] text-inverse-muted uppercase">
                {row.label}
              </dt>
              <dd className="mt-0.5 text-inverse tabular-nums">
                {row.value}
                {row.note && (
                  <span className="block text-xs text-inverse-muted">{row.note}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link to={quoteTo} state={{ quote: preset }} className="btn btn-oak btn-sm flex-1">
            {t.common.requestQuote}
            <span className="btn-icon">
              <Icon name="arrowRight" size={16} />
            </span>
          </Link>
          <a
            href={whatsappHref(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm flex-1"
          >
            <WhatsAppIcon size={17} />
            {t.common.whatsapp}
          </a>
        </div>
      </div>

      {showDetails && (
        <Link to={`/products/${product.slug}`} className="link-arrow self-start text-sm">
          {fill(t.catalog.details, { product: product.name })}
          <Icon name="arrowRight" size={16} />
        </Link>
      )}
    </div>
  )
}
