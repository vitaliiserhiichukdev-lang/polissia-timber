import Reveal from '../ui/Reveal'
import { PRICE_UNIT, formatPrice, type PriceGroup } from '../../data/products'

interface PriceTableProps {
  groups: PriceGroup[]
}

/**
 * Renders the company price list: one card per section, since in the source
 * list price depends on section and grade — not on length.
 */
export default function PriceTable({ groups }: PriceTableProps) {
  if (groups.length === 0) return null

  return (
    <div className="flex flex-col gap-5">
      {groups.map((group, i) => (
        <Reveal key={group.section} delay={i * 0.06}>
          <div className="card-surface overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-sand-50 px-5 py-4">
              <h3 className="font-display text-xl text-ink-900">{group.section}</h3>
              <span className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                {PRICE_UNIT}
              </span>
            </div>

            <div className="px-5 py-4">
              <p className="text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                Available lengths
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.lengths.map((length) => (
                  <li key={length} className="chip tabular-nums">
                    {formatPrice(length)} mm
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[26rem] border-t border-line text-sm">
                <caption className="sr-only">
                  Prices for {group.section} by grade, in {PRICE_UNIT}
                </caption>
                <thead>
                  <tr className="text-left text-xs tracking-[0.1em] text-muted uppercase">
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Grade
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      List price
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Current price
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {group.prices.map((row) => (
                    <tr key={row.grade} className="transition-colors hover:bg-sand-50">
                      <th scope="row" className="px-5 py-3.5 text-left font-medium text-ink-900">
                        {row.grade === 'Mixed' ? 'Mixed grade' : `Grade ${row.grade}`}
                      </th>
                      <td className="px-5 py-3.5 tabular-nums text-muted">
                        € {formatPrice(row.list)}
                      </td>
                      <td className="px-5 py-3.5 tabular-nums">
                        {row.current ? (
                          <span className="font-semibold text-ink-900">
                            € {formatPrice(row.current)}
                          </span>
                        ) : (
                          <span className="chip">{row.note ?? 'On request'}</span>
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

      <p className="text-xs leading-relaxed text-muted">
        Prices are per cubic metre, indicative and quoted per batch — “list price” is the printed
        price list, “current price” the latest revision where one has been issued. Final price
        depends on volume, moisture regime and delivery terms; confirm on enquiry.
      </p>
    </div>
  )
}
