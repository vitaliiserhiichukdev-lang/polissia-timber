import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import type { GradeBand } from '../../data/products'
import { cn } from '../../lib/cn'

interface GradeGuideProps {
  bands: GradeBand[]
  notPermitted: string[]
}

/**
 * Grading rules from the written specification. Width bands are tabs, because
 * the same grade number allows different defects at 150/170 mm and at 230 mm.
 */
export default function GradeGuide({ bands, notPermitted }: GradeGuideProps) {
  const [active, setActive] = useState(0)
  const band = bands[active]

  if (!band) return null

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Width band">
        {bands.map((item, i) => (
          <button
            key={item.widths}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition duration-300',
              active === i
                ? 'border-transparent bg-ink-900 text-inverse shadow-soft'
                : 'border-line-strong text-muted hover:border-oak-500 hover:text-oak-600',
            )}
          >
            {item.widths}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={band.widths}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {band.grades.map((grade) => (
            <li key={grade.code} className="card-surface flex flex-col overflow-hidden">
              <div className="relative">
                <img
                  src={grade.image}
                  alt={`${grade.name} oak board surface`}
                  width={691}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="h-36 w-full object-cover"
                />
                <span className="absolute top-3 left-3 grid size-9 place-items-center rounded-full bg-ink-900/85 font-display text-sm text-inverse backdrop-blur">
                  {grade.code}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-display text-lg text-ink-900">{grade.name}</h4>
                <p className="mt-1 text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                  Permitted
                </p>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                  {grade.allowances.map((allowance) => (
                    <li key={allowance} className="flex gap-2">
                      <span className="mt-1.5 text-oak-500">
                        <Icon name="check" size={13} />
                      </span>
                      {allowance}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {notPermitted.length > 0 && (
        <Reveal className="rounded-3xl border border-line bg-sand-50 p-6">
          <h4 className="text-xs font-semibold tracking-[0.14em] text-oak-700 uppercase">
            Not permitted in any grade
          </h4>
          <ul className="mt-4 flex flex-wrap gap-2">
            {notPermitted.map((defect) => (
              <li key={defect} className="chip border-line-strong bg-white">
                <Icon name="minus" size={13} />
                {defect}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  )
}
