import Reveal from '../ui/Reveal'
import { formatNumber } from '../../data/pricing'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedPriceGroup } from '../../i18n/content'

interface PriceTableProps {
  groups: ResolvedPriceGroup[]
}

/**
 * The company price list: one card per section, because in the source list the
 * price depends on section and grade — not on length.
 */
export default function PriceTable({ groups }: PriceTableProps) {
  const { t } = useI18n()

  if (groups.length === 0) return null

  return (
    <div className="flex flex-col gap-5">
      {groups.map((group, i) => (
        <Reveal key={group.section} delay={i * 0.06}>
          <div className="card-surface overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-sand-50 px-5 py-4">
              <h3 className="font-display text-xl text-ink-900">{group.section}</h3>
              <span className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                {t.common.priceUnit}
              </span>
            </div>

            <div className="px-5 py-4">
              <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                {t.productPage.availableLengths}
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.lengths.map((length) => (
                  <li key={length} className="chip tabular-nums">
                    {length}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-t border-line text-sm">
                <caption className="sr-only">
                  {group.section} — {t.productPage.pricesTitle} ({t.common.priceUnit})
                </caption>
                <thead>
                  <tr className="text-left text-xs tracking-[0.1em] text-muted uppercase">
                    <th scope="col" className="px-5 py-3 font-semibold">
                      {t.productPage.gradeColumn}
                    </th>
                    <th scope="col" className="px-5 py-3 text-right font-semibold">
                      {t.productPage.priceColumn}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {group.prices.map((row) => (
                    <tr key={row.code} className="transition-colors hover:bg-sand-50">
                      <th scope="row" className="px-5 py-3.5 text-left font-medium text-ink-900">
                        {row.label}
                      </th>
                      <td className="px-5 py-3.5 text-right tabular-nums">
                        {row.price === null ? (
                          <span className="chip">{t.common.onRequest}</span>
                        ) : (
                          <span className="font-semibold text-ink-900">
                            € {formatNumber(row.price)}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      ))}

      <p className="max-w-3xl text-xs leading-relaxed text-muted">{t.productPage.priceFootnote}</p>
    </div>
  )
}
