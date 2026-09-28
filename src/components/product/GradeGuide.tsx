import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { gradeCodes, gradeDisplay } from '../../data/pricing'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedProduct } from '../../i18n/content'

interface GradeGuideProps {
  product: ResolvedProduct
}

/**
 * The two grades side by side: what the face looks like in each, and what each
 * size costs in it — the trade-off a buyer is actually making.
 */
export default function GradeGuide({ product }: GradeGuideProps) {
  const { t, formatPrice } = useI18n()

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {gradeCodes.map((code, i) => {
        const grade = t.grades[code]
        return (
          <Reveal key={code} delay={i * 0.08} className="h-full">
            <article className="card-surface flex h-full flex-col p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.14em] text-oak-600 uppercase">
                    {grade.name}
                  </p>
                  <h3 className="mt-2 font-display text-5xl leading-none text-ink-900">
                    {gradeDisplay[code]}
                  </h3>
                </div>
                <span className="rounded-full bg-ink-900 px-3.5 py-1.5 text-xs font-semibold text-inverse tabular-nums">
                  {t.common.priceFrom} {formatPrice(Math.min(...product.sizes.map((s) => s.prices[code])))}
                </span>
              </div>

              <p className="mt-5 text-muted">{grade.summary}</p>

              <ul className="mt-5 flex flex-col gap-2.5 text-sm text-ink-800">
                {grade.traits.map((trait) => (
                  <li key={trait} className="flex gap-2.5">
                    <span className="mt-1 shrink-0 text-oak-500">
                      <Icon name="check" size={14} />
                    </span>
                    {trait}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <dl className="divide-y divide-line border-t border-line pt-1 text-sm">
                  {product.sizes.map((size) => (
                    <div key={size.key} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-muted tabular-nums">{size.label}</dt>
                      <dd className="font-semibold whitespace-nowrap text-ink-900 tabular-nums">
                        {formatPrice(size.prices[code])}
                        <span className="ml-1 font-normal text-muted">{t.common.perSquareMetre}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
