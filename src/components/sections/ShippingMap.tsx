import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Link from '../ui/LocaleLink'
import Icon from '../ui/Icon'
import { brand } from '../../data/contact'
import { destinations, origin, ringsKm, type DestinationCode } from '../../data/destinations'
import { fill } from '../../i18n/content'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

const easeExpo = [0.16, 1, 0.3, 1] as const

/**
 * Equirectangular projection, with longitude squeezed by cos(50°) — the latitude
 * that runs through the yard and most of the destinations. Without that squeeze
 * Europe comes out comically wide; with it, distances near 50°N are close enough
 * to true that the reference rings mean something.
 */
const LAT0 = 50
const SCALE = 37
const KM_PER_DEGREE = 111
const xOf = (lon: number) => (lon + 8) * Math.cos((LAT0 * Math.PI) / 180) * SCALE
const yOf = (lat: number) => (61 - lat) * SCALE
const radiusOf = (km: number) => (km / KM_PER_DEGREE) * SCALE

/** Length the scale bar represents. */
const SCALE_BAR_KM = 1000

/** Origin pulse: one cycle, two rings offset by half of it. */
const ORIGIN_PULSE_CYCLE = 3
const ORIGIN_PULSES = [0, ORIGIN_PULSE_CYCLE / 2]

/**
 * Fraction of each cycle the cargo spends moving. It rests on the marker for the
 * remainder, which is what makes the arrival pulse legible: the ball lands, the
 * rings break out of the country, and only then does it start over. Travelling
 * for the whole cycle left the pulse to fire in the instant before the dot
 * teleported back to the yard, so it was easy to miss entirely.
 */
const TRAVEL = 0.78

/** Cycle length per route, shared by the cargo dot and its arrival rings. */
const RUN_SECONDS = destinations.map((_, i) => 7 + (i % 6) * 1.6)

/** Two rings, the second smaller and softer, so the pulse has some depth. */
const ARRIVAL_FROM = 6
const ARRIVAL_RINGS = [
  { to: 30, peak: 0.95, lead: 0, width: 2 },
  { to: 18, peak: 0.5, lead: 0.035, width: 1.2 },
]

const points = destinations.map((d) => ({ ...d, x: xOf(d.lon), y: yOf(d.lat) }))
const originPoint = { x: xOf(origin.lon), y: yOf(origin.lat) }

/** Frame the projected points, leaving room for the labels around them. */
const VIEW = (() => {
  const xs = [...points.map((p) => p.x), originPoint.x]
  const ys = [...points.map((p) => p.y), originPoint.y]
  const padX = 78
  const padY = 46
  const minX = Math.min(...xs) - padX
  const minY = Math.min(...ys) - padY
  return {
    x: minX,
    y: minY,
    w: Math.max(...xs) + padX - minX,
    h: Math.max(...ys) + padY - minY,
  }
})()

/**
 * A gentle upward bow, so the routes read as routes rather than a starburst of
 * straight lines. The rise scales with distance, which also keeps the long haul
 * to Madrid from cutting straight through half the other markers.
 */
const routePath = (x: number, y: number) => {
  const length = Math.hypot(x - originPoint.x, y - originPoint.y)
  const midX = (originPoint.x + x) / 2
  const midY = (originPoint.y + y) / 2 - length * 0.16
  return `M ${originPoint.x} ${originPoint.y} Q ${midX} ${midY} ${x} ${y}`
}

export default function ShippingMap() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState<DestinationCode | null>(null)

  const countryName = (code: DestinationCode) => t.exportSection.countries[code]

  return (
    <div
      ref={ref}
      className="grain relative overflow-hidden rounded-4xl border border-line bg-ink-900 text-inverse"
    >
      <span aria-hidden="true" className="grain-layer-dark" />

      <div className="relative grid gap-8 p-6 md:p-9 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12">
        <figure className="m-0 -mx-2 sm:mx-0">
          <svg
            viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
            className="h-auto w-full overflow-visible"
            role="img"
            aria-labelledby="ship-map-title ship-map-desc"
          >
            <title id="ship-map-title">{t.exportSection.panelTitle}</title>
            <desc id="ship-map-desc">
              {destinations.map((d) => countryName(d.code)).join(', ')}
            </desc>

            {/*
              Reference rings, unlabelled. Labelling each one put text across the
              routes, and the outermost ring's label fell outside the frame
              entirely — the scale bar below carries the magnitude instead, which
              is the conventional way round and always fits.
            */}
            <g aria-hidden="true">
              {ringsKm.map((km, i) => (
                <motion.circle
                  key={km}
                  cx={originPoint.x}
                  cy={originPoint.y}
                  r={radiusOf(km)}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeDasharray="4 12"
                  className="text-white/12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.12, ease: easeExpo }}
                />
              ))}
            </g>

            {/* Scale bar, bottom-right: bottom-left is where the Madrid marker
                and its label sit, and the two collided there. */}
            <motion.g
              aria-hidden="true"
              transform={`translate(${VIEW.x + VIEW.w - 26 - radiusOf(SCALE_BAR_KM)} ${VIEW.y + VIEW.h - 26})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeExpo }}
            >
              <line
                x1={0}
                y1={0}
                x2={radiusOf(SCALE_BAR_KM)}
                y2={0}
                stroke="currentColor"
                strokeWidth={1.5}
                className="text-white/35"
              />
              {[0, radiusOf(SCALE_BAR_KM)].map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1={-5}
                  x2={x}
                  y2={5}
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="text-white/35"
                />
              ))}
              <text
                x={radiusOf(SCALE_BAR_KM) / 2}
                y={-12}
                textAnchor="middle"
                className="fill-white/45 text-[14px] tracking-[0.12em]"
              >
                {fill(t.exportSection.ringLabel, { km: String(SCALE_BAR_KM) })}
              </text>
            </motion.g>

            {/* Routes */}
            <g fill="none" strokeLinecap="round">
              {points.map((point, i) => {
                const path = routePath(point.x, point.y)
                const isActive = active === point.code
                const dur = `${RUN_SECONDS[i]}s`
                return (
                  <g key={point.code}>
                    <motion.path
                      d={path}
                      stroke="currentColor"
                      className={cn(
                        'transition-colors duration-300',
                        isActive ? 'text-oak-400' : 'text-oak-500/40',
                      )}
                      strokeWidth={isActive ? 2.6 : 1.4}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: inView ? 1 : 0 }}
                      transition={{ duration: 1.1, delay: 0.25 + i * 0.07, ease: easeExpo }}
                    />
                    {/*
                      Cargo travelling the route. Declarative SMIL, so it costs no
                      React renders, and it only mounts once the map is in view.

                      No `begin` offset: an un-started `animateMotion` leaves its
                      circle at SVG (0,0), so staggered starts parked a cluster of
                      stray dots in the top-left corner for the first few seconds.
                      They all leave at once instead and desynchronise for good,
                      because each route runs at its own duration.
                    */}
                    {!reduceMotion && inView && (
                      <>
                        <circle r={3.6} className="fill-oak-200">
                          {/* `keyPoints` holds the dot on the marker for the last
                              stretch of the cycle instead of running the whole
                              way and looping instantly. */}
                          <animateMotion
                            path={path}
                            dur={dur}
                            calcMode="linear"
                            keyPoints={`0;1;1`}
                            keyTimes={`0;${TRAVEL};1`}
                            repeatCount="indefinite"
                          />
                          {/* Fades out where it rests and back in at the yard, so
                              the loop is never a visible jump across the map. */}
                          <animate
                            attributeName="opacity"
                            values="0;1;1;0"
                            keyTimes={`0;0.05;${TRAVEL + 0.06};1`}
                            dur={dur}
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/*
                          Arrival pulse, timed off the same clock as the cargo:
                          both animations share a duration and a start, so they sit
                          on one SVG timeline and cannot drift apart — no event
                          listening, and it stays in step indefinitely. The rings
                          begin exactly at `TRAVEL`, the moment the dot lands.
                        */}
                        {ARRIVAL_RINGS.map((ring) => {
                          const start = TRAVEL + ring.lead
                          return (
                            <circle
                              key={ring.to}
                              cx={point.x}
                              cy={point.y}
                              r={ARRIVAL_FROM}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={ring.width}
                              opacity={0}
                              className="text-oak-200"
                            >
                              <animate
                                attributeName="r"
                                values={`${ARRIVAL_FROM};${ARRIVAL_FROM};${ring.to}`}
                                keyTimes={`0;${start};1`}
                                dur={dur}
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="opacity"
                                values={`0;0;${ring.peak};0`}
                                keyTimes={`0;${start};${start + 0.05};1`}
                                dur={dur}
                                repeatCount="indefinite"
                              />
                            </circle>
                          )
                        })}
                      </>
                    )}
                  </g>
                )
              })}
            </g>

            {/* Destination markers — every country gets one. */}
            <g>
              {points.map((point, i) => {
                const isActive = active === point.code
                return (
                  <motion.g
                    key={point.code}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.4 }}
                    transition={{ duration: 0.5, delay: 0.75 + i * 0.07, ease: easeExpo }}
                    style={{ transformOrigin: `${point.x}px ${point.y}px` }}
                    onMouseEnter={() => setActive(point.code)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Generous transparent hit area — the visible dot is 5px. */}
                    <circle cx={point.x} cy={point.y} r={20} fill="transparent" />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isActive ? 8 : 5}
                      className={cn(
                        'transition-all duration-300',
                        isActive ? 'fill-oak-200' : 'fill-oak-400',
                      )}
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={isActive ? 15 : 11}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      className={cn(
                        'transition-all duration-300',
                        isActive ? 'text-oak-200/80' : 'text-oak-400/25',
                      )}
                    />
                    {point.labelled && (
                      <text
                        x={point.x + (point.anchor === 'end' ? -18 : 18)}
                        y={point.y + (point.dy ?? -16)}
                        textAnchor={point.anchor === 'end' ? 'end' : 'start'}
                        className={cn(
                          'hidden text-[15px] font-medium transition-colors duration-300 sm:block',
                          isActive ? 'fill-white' : 'fill-white/70',
                        )}
                      >
                        {countryName(point.code)}
                      </text>
                    )}
                    <title>{countryName(point.code)}</title>
                  </motion.g>
                )
              })}
            </g>

            {/* Origin */}
            <g aria-hidden="true">
              {/*
                The radius is animated, not `scale`. Framer sets its own
                `transform-box: fill-box` on SVG motion components and overrides
                an explicit px `transform-origin`, so a scaled ring is at the
                mercy of that default; `r` has no origin to get wrong.

                `initial` matters just as much: without it the ring rendered at
                full radius and full opacity and simply sat there until its
                delayed first cycle began — which is the single stray flash that
                appeared at the yard.
              */}
              {!reduceMotion &&
                ORIGIN_PULSES.map((delay) => (
                  <motion.circle
                    key={delay}
                    cx={originPoint.x}
                    cy={originPoint.y}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-oak-400"
                    initial={{ r: 10, opacity: 0 }}
                    animate={
                      inView
                        ? { r: [10, 22, 36], opacity: [0, 0.55, 0] }
                        : { r: 10, opacity: 0 }
                    }
                    transition={{
                      duration: ORIGIN_PULSE_CYCLE,
                      times: [0, 0.35, 1],
                      repeat: Infinity,
                      delay,
                      ease: 'easeOut',
                    }}
                  />
                ))}
              <motion.circle
                cx={originPoint.x}
                cy={originPoint.y}
                className="fill-white"
                initial={{ r: 0 }}
                animate={{ r: inView ? 7 : 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeExpo }}
              />
              <text
                x={originPoint.x}
                y={originPoint.y + 32}
                textAnchor="end"
                className="hidden fill-white text-[15px] font-semibold sm:block"
              >
                {t.exportSection.originLabel}
              </text>
            </g>
          </svg>
        </figure>

        <div>
          <h3 className="text-h4 text-inverse">{t.exportSection.panelTitle}</h3>
          <p className="mt-3 text-sm text-inverse-muted">
            {fill(t.exportSection.panelBody, { terms: brand.incoterms.join(', ') })}
          </p>

          {/* The real content: every destination as text. Hovering a country
              lights up its route, which is what ties the list to the map. */}
          <ul className="mt-6 flex flex-wrap gap-2">
            {destinations.map((d) => (
              <li
                key={d.code}
                onMouseEnter={() => setActive(d.code)}
                onMouseLeave={() => setActive(null)}
                className={cn(
                  'chip chip-dark cursor-default transition-colors duration-300',
                  active === d.code && 'border-oak-400/60 bg-oak-600/25 text-white',
                )}
              >
                {countryName(d.code)}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs leading-relaxed text-inverse-muted">
            {t.exportSection.mapNote}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link to="/#contact" className="btn btn-oak">
              {t.exportSection.cta}
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
            <a href={`mailto:${brand.email}`} className="btn btn-glass">
              <Icon name="mail" size={17} />
              {brand.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
