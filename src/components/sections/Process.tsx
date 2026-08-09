import { useRef } from 'react'
import Link from '../ui/LocaleLink'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import { confirmed } from '../../data/pending'
import { useI18n } from '../../i18n/useI18n'

export default function Process() {
  const trackRef = useRef<HTMLOListElement>(null)
  const reduceMotion = useReducedMotion()
  const { t, processSteps } = useI18n()
  // Photographs of a sawmill are not an argument; throughput figures are. Any
  // metric production has not confirmed stays hidden rather than being guessed.
  const capacity = confirmed(t.process.capacity, (metric) => [metric.value])

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 65%', 'end 60%'],
  })
  // Spring keeps the progress rail from twitching on fast scrolls.
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  return (
    <section
      id="production"
      className="grain relative bg-ink-900 py-section text-inverse"
    >
      <span aria-hidden="true" className="grain-layer-dark" />

      <SectionReveal className="container-page relative">
        <SectionHeader
          inverse
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          lead={t.process.lead}
        />

        <ol ref={trackRef} className="relative flex flex-col gap-14 md:gap-20">
          {/* Progress rail */}
          <span
            aria-hidden="true"
            className="absolute top-6 bottom-6 left-[19px] hidden w-px bg-white/12 md:block"
          >
            <motion.span
              className="block h-full w-px origin-top bg-oak-500"
              style={reduceMotion ? { transform: 'scaleY(1)' } : { scaleY: progress }}
            />
          </span>

          {processSteps.map((step, i) => (
            <li key={step.step} className="relative md:pl-16">
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 hidden size-10 place-items-center rounded-full border border-white/20 bg-ink-800 text-oak-400 md:grid"
              >
                <Icon name={step.icon} size={18} />
              </span>

              <Reveal
                delay={0.05}
                className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-12 ${
                  i % 2 === 1 ? 'lg:[&>figure]:order-first' : ''
                }`}
              >
                <div>
                  <span className="font-display text-sm tracking-[0.2em] text-oak-500">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-h3 text-inverse">{step.title}</h3>
                  <p className="mt-4 max-w-xl text-inverse-muted">{step.body}</p>
                </div>

                <figure className="overflow-hidden rounded-3xl border border-white/10">
                  <img
                    src={step.photo.src}
                    alt={step.photo.alt}
                    width={step.photo.width}
                    height={step.photo.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-16/10 w-full object-cover transition-transform duration-[900ms] ease-expo hover:scale-105"
                  />
                </figure>
              </Reveal>
            </li>
          ))}
        </ol>

        {capacity.length > 0 && (
          <div className="mt-20 border-t border-line-inverse pt-12">
            <Reveal>
              <h3 className="text-h3 text-inverse">{t.process.capacityTitle}</h3>
              <p className="mt-4 max-w-2xl text-inverse-muted">{t.process.capacityLead}</p>
            </Reveal>

            <dl className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {capacity.map((metric, i) => (
                <Reveal key={metric.label} delay={(i % 3) * 0.06}>
                  <dt className="font-display text-4xl leading-none text-oak-400 tabular-nums">
                    {metric.value}
                    <span className="ml-1.5 font-sans text-sm font-medium tracking-normal text-inverse-muted">
                      {metric.unit}
                    </span>
                  </dt>
                  <dd className="mt-2.5">
                    <span className="block text-sm font-medium text-inverse">{metric.label}</span>
                    <span className="mt-1 block text-xs leading-snug text-inverse-muted">
                      {metric.detail}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.12}>
              <p className="mt-9 max-w-2xl text-sm text-inverse-muted">{t.process.capacityNote}</p>
            </Reveal>
          </div>
        )}

        <Reveal delay={0.1} className="mt-16 rounded-3xl border border-white/12 bg-white/4 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-h4 text-inverse">{t.process.callout.title}</h3>
              <p className="mt-3 text-sm text-inverse-muted">{t.process.callout.body}</p>
            </div>
            <Link to="/products/oak-edged-boards#grades" className="btn btn-glass shrink-0">
              {t.process.callout.action}
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
          </div>
        </Reveal>
      </SectionReveal>
    </section>
  )
}
