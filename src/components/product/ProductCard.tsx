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

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t } = useI18n()

  const rows = [
    { label: t.catalog.cardLabels.woodType, value: product.species },
    { label: t.catalog.cardLabels.sizes, value: product.sizesSummary },
    { label: t.catalog.cardLabels.grade, value: product.gradesSummary },
  ]

  return (
    <Reveal delay={index * 0.1} className="h-full">
      <article className="card-surface card-hover group flex h-full flex-col overflow-hidden">
        <Link
          to={`/products/${product.slug}`}
          className="relative block overflow-hidden"
          tabIndex={-1}
          aria-hidden="true"
        >
          <img
            src={product.cardPhoto.src}
            alt={product.cardPhoto.alt}
            width={product.cardPhoto.width}
            height={product.cardPhoto.height}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className="aspect-4/3 w-full object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-105"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-ink-900/25"
          />
          <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-ink-900/75 px-3 py-1.5 text-xs font-medium text-inverse backdrop-blur-sm">
            {product.kicker}
          </span>
          <span className="absolute bottom-4 left-4 text-xs font-semibold tracking-[0.14em] text-inverse uppercase drop-shadow">
            {product.category}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="text-h4 text-ink-900">
            <Link to={`/products/${product.slug}`} className="transition-colors hover:text-oak-600">
              {product.name}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{product.shortDescription}</p>

          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            {rows.map((row) => (
              <div key={row.label} className="flex gap-4 py-2.5">
                <dt className="w-30 shrink-0 text-xs font-semibold tracking-[0.08em] text-muted uppercase">
                  {row.label}
                </dt>
                <dd className="text-ink-800">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="block text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                {product.priceFrom ? t.common.priceFrom : t.common.pricing}
              </span>
              {product.priceFrom ? (
                <span className="font-display text-3xl text-ink-900">
                  €{formatNumber(product.priceFrom)}
                  <span className="ml-1 text-sm text-muted">{t.common.perCubicMetre}</span>
                </span>
              ) : (
                <span className="font-display text-2xl text-ink-900">{t.common.onRequest}</span>
              )}
            </div>
            <span className="text-xs text-muted">
              {product.priceFrom ? t.common.gradeBased : t.common.quotedPerSpecification}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-1">
            <Link to={`/products/${product.slug}`} className="btn btn-sm flex-1">
              {t.common.viewDetails}
              <span className="btn-icon">
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
            <Link to={`/products/${product.slug}#inquiry`} className="btn btn-sm btn-outline flex-1">
              {t.common.requestQuote}
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
