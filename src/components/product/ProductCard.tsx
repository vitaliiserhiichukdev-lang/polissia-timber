import Link from '../ui/LocaleLink'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { formatNumber } from '../../data/pricing'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedProduct } from '../../i18n/content'

interface ProductCardProps {
  product: ResolvedProduct
  index?: number
}

/**
 * One of the three product lines, as a dark editorial panel.
 *
 * This is the block that has to answer "what do you actually sell" within a
 * screen of the hero, so it carries the deciding facts rather than a teaser:
 * species, sections, grades and a price anchor, all above the fold of the card.
 *
 * Dark panels on the light page — the inverse of every other card here — because
 * they need to read as the primary object on the page, not as three more tiles.
 * Layout is flex with `mt-auto` on the price block so the three panels align
 * their prices and buttons however long the German or Ukrainian copy runs.
 */
export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t } = useI18n()

  const rows = [
    { label: t.catalog.cardLabels.woodType, value: product.species },
    { label: t.catalog.cardLabels.sizes, value: product.sizesSummary },
    { label: t.catalog.cardLabels.grade, value: product.gradesSummary },
  ]

  const href = `/products/${product.slug}`

  return (
    <Reveal delay={index * 0.12} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-4xl bg-ink-900 text-inverse shadow-mid transition-shadow duration-500 hover:shadow-lift">
        {/* Oak rule that draws itself across the top on hover. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 h-0.5 origin-left scale-x-0 bg-oak-500 transition-transform duration-700 ease-expo group-hover:scale-x-100"
        />

        <Link to={href} className="relative block h-56 overflow-hidden" tabIndex={-1} aria-hidden="true">
          <img
            src={product.cardPhoto.src}
            alt={product.cardPhoto.alt}
            width={product.cardPhoto.width}
            height={product.cardPhoto.height}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="size-full object-cover transition-transform duration-[1100ms] ease-expo group-hover:scale-[1.07]"
          />
          {/* Blends the photo into the panel so the two read as one object. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-ink-900/10"
          />
          {/* Its own dark backdrop rather than `chip-dark`: that variant is a
              translucent white, which disappears on the parquet shot's near-white
              top edge. This has to hold on any photo. */}
          <span className="chip absolute top-4 left-4 border-white/15 bg-ink-900/75 text-inverse backdrop-blur-sm">
            {product.kicker}
          </span>
          <span
            aria-hidden="true"
            className="absolute right-5 bottom-2 font-display text-6xl leading-none text-white/12 tabular-nums"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <span className="text-xs font-semibold tracking-[0.16em] text-oak-400 uppercase">
            {product.category}
          </span>
          <h3 className="mt-3 font-display text-2xl leading-tight">
            <Link to={href} className="transition-colors duration-300 hover:text-oak-400">
              {product.name}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-inverse-muted">
            {product.shortDescription}
          </p>

          <dl className="mt-6 divide-y divide-line-inverse border-y border-line-inverse text-sm">
            {rows.map((row) => (
              <div key={row.label} className="flex gap-4 py-2.5">
                <dt className="w-28 shrink-0 text-xs font-semibold tracking-[0.08em] text-inverse-muted uppercase">
                  {row.label}
                </dt>
                <dd className="min-w-0 text-inverse">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto pt-6">
            {/* Fixed height: the grade note beside the price wraps to two lines
                for one product and three for another, which otherwise leaves the
                three price figures sitting a few pixels apart. */}
            <div className="flex min-h-14 flex-wrap items-end justify-between gap-3">
              <div>
                <span className="block text-xs font-semibold tracking-[0.12em] text-inverse-muted uppercase">
                  {product.priceFrom ? t.common.priceFrom : t.common.pricing}
                </span>
                {product.priceFrom ? (
                  <span className="font-display text-3xl text-inverse tabular-nums">
                    €{formatNumber(product.priceFrom)}
                    <span className="ml-1 font-sans text-sm text-inverse-muted">
                      {t.common.perCubicMetre}
                    </span>
                  </span>
                ) : (
                  <span className="font-display text-2xl text-inverse">{t.common.onRequest}</span>
                )}
              </div>
              <span className="max-w-36 text-right text-xs leading-snug text-inverse-muted">
                {product.priceFrom ? t.common.gradeBased : t.common.quotedPerSpecification}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link to={href} className="btn btn-oak btn-sm flex-1">
                {t.common.viewDetails}
                <span className="btn-icon">
                  <Icon name="arrowRight" size={16} />
                </span>
              </Link>
              <Link to={`${href}#inquiry`} className="btn btn-glass btn-sm flex-1">
                {t.common.requestQuote}
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
