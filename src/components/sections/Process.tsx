import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import { processSteps } from '../../data/company'

export default function Process() {
  const trackRef = useRef<HTMLOListElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 65%', 'end 60%'],
  })
  // Spring keeps the progress rail from twitching on fast scrolls.
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 })

  return (
    <section id="production" className="grain relative scroll-mt-24 bg-ink-900 py-section text-inverse">
      <span aria-hidden="true" className="grain-layer-dark" />

      <div className="container-page relative">
        <SectionHeader
          inverse
          eyebrow="Quality and production"
          title="Five controlled stages, from log to loading"
          lead="We carefully control every stage of production — from raw material selection to packaging and delivery. Each step below has a defined check before material moves on."
        />

        <ol ref={trackRef} className="relative flex flex-col gap-14 md:gap-20">
          {/* Progress rail */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[19px] hidden w-px bg-white/12 md:block"
          >
            <motion.span
              className="block h-full w-px origin-top bg-oak-500"
              style={reduceMotion ? { transform: 'scaleY(1)' } : { scaleY: progress }}
            />
          </span>

          {processSteps.map((step, i) => (
            <li key={step.step} className="relative md:pl-16">
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 hidden size-10 place-items-center rounded-full border border-white/20 bg-ink-800 text-oak-400 md:grid"
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
                    src={step.image}
                    alt={step.imageAlt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    decoding="async"
                    className="aspect-16/10 w-full object-cover transition-transform duration-[900ms] ease-expo hover:scale-105"
                  />
                </figure>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal
          delay={0.1}
          className="mt-16 rounded-3xl border border-white/12 bg-white/4 p-6 md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-h4 text-inverse">Written specifications, not verbal promises</h3>
              <p className="mt-3 text-sm text-inverse-muted">
                Our oak grading rules define exactly what each grade allows — knot size and type,
                sapwood, ingrown bark — and what is never accepted: pith, steam damage, woodworm,
                micro-cracks, end cracks and double sapwood.
              </p>
            </div>
            <Link to="/products/oak-edged-boards#grades" className="btn btn-glass shrink-0">
              Read the grading rules
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
