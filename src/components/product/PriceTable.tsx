import Link from '../ui/LocaleLink'
import Reveal from '../ui/Reveal'
import FormatPattern from './FormatPattern'
import { gradeCodes, gradeDisplay } from '../../data/pricing'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedProduct } from '../../i18n/content'

interface PriceTableProps {
  products: ResolvedProduct[]
  /** Link each format's heading to its page — on for the home page. */
  linkFormats?: boolean
}

/**
 * The price sheet as one table: a row group per format, a row per size, a
 * column per grade. It mirrors the company's own list line for line, so a
 * buyer can check a quote against it without translating between layouts.
 */
export default function PriceTable({ products, linkFormats = false }: PriceTableProps) {
  const { t, formatPrice } = useI18n()

  if (products.length === 0) return null

  return (
    <Reveal>
      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <caption className="sr-only">
              {t.priceList.title} ({t.common.priceUnit})
            </caption>
            <thead>
              <tr className="border-b border-line text-left text-xs tracking-[0.1em] text-muted uppercase">
                <th scope="col" className="px-4 py-3.5 font-semibold md:px-6">
                  {t.priceList.size}
                </th>
                {gradeCodes.map((code) => (
                  <th key={code} scope="col" className="px-4 py-3.5 text-right font-semibold md:px-6">
                    <span className="block font-display text-base tracking-normal text-ink-900 normal-case">
                      {gradeDisplay[code]}
                    </span>
                    {t.grades[code].name}
                  </th>
                ))}
              </tr>
            </thead>

            {products.map((product) => (
              <tbody key={product.slug} className="divide-y divide-line border-b border-line last:border-0">
                <tr className="bg-sand-50">
                  <th scope="colgroup" colSpan={gradeCodes.length + 1} className="px-4 py-3 text-left md:px-6">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <FormatPattern slug={product.slug} size={22} className="shrink-0 text-oak-600" />
                      {linkFormats ? (
                        <Link
                          to={`/products/${product.slug}`}
                          className="font-display text-lg text-ink-900 transition-colors hover:text-oak-600"
                        >
                          {product.name}
                        </Link>
                      ) : (
                        <span className="font-display text-lg text-ink-900">{product.name}</span>
                      )}
                      <span className="text-xs font-normal text-muted">
                        {product.keyFacts[0].value} · {t.catalog.specs.wearLayer.toLowerCase()}{' '}
                        {product.keyFacts[1].value}
                      </span>
                    </span>
                  </th>
                </tr>
                {product.sizes.map((size) => (
                  <tr key={size.key} className="transition-colors hover:bg-sand-50/60">
                    <th scope="row" className="px-4 py-3.5 text-left font-medium text-ink-900 md:px-6">
                      <span className="tabular-nums">{size.label}</span>
                      <span className="block text-xs font-normal text-muted">{size.lengthNote}</span>
                    </th>
                    {gradeCodes.map((code) => (
                      <td key={code} className="px-4 py-3.5 text-right tabular-nums md:px-6">
                        <span className="font-semibold whitespace-nowrap text-ink-900">
                          {formatPrice(size.prices[code])}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted">{t.priceList.footnote}</p>
    </Reveal>
  )
}
