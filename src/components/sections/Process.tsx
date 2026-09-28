import { useState } from 'react'
import Link from '../ui/LocaleLink'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import Lightbox from '../ui/Lightbox'
import SectionReveal from '../ui/SectionReveal'
import { confirmed } from '../../data/pending'
import { useI18n } from '../../i18n/useI18n'

/**
 * Production as four steps, each shown with a frame from our own line.
 *
 * Portrait cards, because the footage is portrait phone video. The clips do
 * not autoplay here — four at once would be the heaviest thing on the page —
 * so each card shows its poster and opens the clip full size on demand.
 */
export default function Process() {
  const { t, processSteps } = useI18n()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  // Throughput figures production has not confirmed stay hidden, not guessed.
  const capacity = confirmed(t.process.capacity, (metric) => [metric.value])
  const media = processSteps.map((step) => step.media)

  return (
    <section id="production" className="grain relative bg-ink-900 py-section text-inverse">
      <span aria-hidden="true" className="grain-layer-dark" />

      <SectionReveal className="container-page relative">
        <SectionHeader
          inverse
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          lead={t.process.lead}
        />

        <ol className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const still = step.media.kind === 'video' ? step.media.poster : step.media
            return (
              <Reveal as="li" key={step.step} delay={i * 0.08} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`${step.media.kind === 'video' ? t.common.playVideo : t.common.openImage}: ${step.media.caption}`}
                  className="group relative block aspect-3/4 overflow-hidden rounded-3xl border border-white/10 text-left"
                >
                  <img
                    src={still.src}
                    alt={step.media.alt}
                    width={still.width}
                    height={still.height}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-105"
                    style={still.position ? { objectPosition: still.position } : undefined}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-transparent to-ink-900/40"
                  />
                  <span className="absolute top-4 left-4 grid size-10 place-items-center rounded-full border border-white/20 bg-ink-900/70 text-oak-400 backdrop-blur">
                    <Icon name={step.icon} size={18} />
                  </span>
                  <span className="absolute top-4 right-4 font-display text-sm tracking-[0.2em] text-oak-200">
                    {step.step}
                  </span>
                  <span className="absolute right-4 bottom-4 grid size-10 place-items-center rounded-full border border-white/25 bg-white/10 text-inverse backdrop-blur transition duration-300 group-hover:border-transparent group-hover:bg-oak-600">
                    <Icon name={step.media.kind === 'video' ? 'play' : 'plus'} size={16} />
                  </span>
                </button>

                <h3 className="mt-5 text-h4 text-inverse">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-inverse-muted">{step.body}</p>
              </Reveal>
            )
          })}
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
            <Link to="/#prices" className="btn btn-glass shrink-0">
              {t.process.callout.action}
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
          </div>
        </Reveal>
      </SectionReveal>

      <Lightbox
        images={media}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
