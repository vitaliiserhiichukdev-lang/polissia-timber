import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Icon from '../ui/Icon'
import { company, stats } from '../../data/company'

const HERO_IMAGE = '/building_materials/pine_tree_1.jpg'
const INSET_IMAGE = '/board/sortA.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Background drifts slower than the page; content lifts and fades out.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink-900 pt-32 pb-12 md:min-h-svh md:pb-16"
      aria-labelledby="hero-title"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={reduceMotion ? undefined : { y: bgY, scale: bgScale }}
      >
        <img
          src={HERO_IMAGE}
          alt="Packs of Ukrainian sawn timber stacked in the export yard at dawn"
          width={1280}
          height={960}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
      </motion.div>

      {/* Legibility scrim — warm, not grey */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_20%_10%,rgba(20,18,15,0)_0%,rgba(20,18,15,0.55)_70%)]"
      />
      <span aria-hidden="true" className="grain-layer-dark -z-10" />

      <motion.div
        className="container-page relative"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow eyebrow-inverse"
          >
            {company.country} · Producer &amp; exporter
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-h1 text-inverse"
          >
            Premium Ukrainian Timber
            <span className="block text-oak-400 italic">for European Markets</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-2xl text-lead text-inverse-muted"
          >
            We produce and export high-quality timber to European countries: oak edged boards
            graded to a written specification, pine construction materials and natural oak
            parquet. Quality controlled at every stage, packed and documented ready for export.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/#contact" className="btn btn-oak">
              Request a quote
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
            <Link to="/#products" className="btn btn-glass">
              View products
              <span className="btn-icon">
                <Icon name="arrowUpRight" size={18} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats + inset product image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid gap-6 border-t border-line-inverse pt-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl leading-none text-oak-400">{stat.value}</dt>
                <dd className="mt-2">
                  <span className="block text-sm font-medium text-inverse">{stat.label}</span>
                  <span className="mt-1 block text-xs leading-snug text-inverse-muted">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <figure className="hidden w-56 shrink-0 overflow-hidden rounded-2xl border border-white/15 shadow-lift xl:block">
            <img
              src={INSET_IMAGE}
              alt="Grade I oak edged boards, clean face with even grain"
              width={691}
              height={1280}
              loading="lazy"
              decoding="async"
              className="h-40 w-full object-cover"
            />
            <figcaption className="bg-ink-800/90 px-4 py-3 text-xs text-inverse-muted backdrop-blur">
              Oak edged board · Grade I · 30 mm
            </figcaption>
          </figure>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute right-gutter bottom-8 hidden size-12 place-items-center rounded-full border border-white/25 text-inverse transition-colors duration-300 hover:bg-white/10 md:grid"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon name="chevronDown" size={20} />
      </motion.a>
    </section>
  )
}
