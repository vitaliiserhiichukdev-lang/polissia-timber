import Reveal from '../ui/Reveal'
import type { SpecGroup } from '../../data/products'

interface SpecTableProps {
  groups: SpecGroup[]
}

/** Technical characteristics, grouped (Material / Dimensions / Delivery). */
export default function SpecTable({ groups }: SpecTableProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {groups.map((group, i) => (
        <Reveal key={group.group} delay={i * 0.08} className="h-full">
          <div className="card-surface h-full p-6">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-oak-600 uppercase">
              {group.group}
            </h3>
            <dl className="mt-4 flex flex-col divide-y divide-line">
              {group.items.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0">
                  <dt className="text-xs text-muted">{item.label}</dt>
                  <dd className="text-sm font-medium text-ink-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
