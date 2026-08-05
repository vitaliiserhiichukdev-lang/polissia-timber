import { useRef } from 'react'
import Link from '../ui/LocaleLink'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Icon from '../ui/Icon'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useI18n } from '../../i18n/useI18n'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const easeExpo = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { t, heroPhoto, heroInsetPhoto } = useI18n()

  /**
   * Scroll-linked parallax is a desktop-only flourish. On a phone the hero
   * fills the viewport, so the fade starts on the very first swipe and leaves
   * the headline sitting on a composited layer at fractional opacity — which
   * mobile browsers render with different antialiasing, so the text reads as a
   * slightly wrong colour. Keeping the layer flat on small screens fixes it.
   */
  const parallax = isDesktop && !reduceMotion

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  // Background drifts slower than the page; content lifts and fades out.
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      ref={sectionRef}
      // -mt-header pulls the hero under the sticky header so the image runs edge to edge.
      className="relative isolate -mt-header flex min-h-[94svh] items-end overflow-hidden bg-ink-900 pt-40 pb-12 md:min-h-svh md:pb-16"
      aria-labelledby="hero-title"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={parallax ? { y: bgY, scale: bgScale } : undefined}
      >
        <img
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          width={heroPhoto.width}
          height={heroPhoto.height}
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
      </motion.div>

      {/* Legibility scrim — warm, not grey */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-900 via-ink-900/72 to-ink-900/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_85%_at_15%_5%,rgba(20,18,15,0)_0%,rgba(20,18,15,0.5)_75%)]"
      />
      <span aria-hidden="true" className="grain-layer-dark -z-10" />

      <motion.div
        className="container-page relative"
        style={parallax ? { y: contentY, opacity: contentOpacity } : undefined}
      >
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: easeExpo }}
            className="eyebrow eyebrow-inverse"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            transition={{ duration: 0.9, ease: easeExpo }}
            className="mt-5 text-h1 text-inverse"
          >
            {t.hero.titleLead}
            <span className="block text-oak-400 italic">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="mt-7 max-w-2xl text-lead text-inverse-muted"
          >
            {t.hero.lead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link to="/#contact" className="btn btn-oak">
              {t.common.requestQuote}
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
            <Link to="/#products" className="btn btn-glass">
              {t.common.viewProducts}
              <span className="btn-icon">
                <Icon name="arrowUpRight" size={18} />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats + inset product photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: easeExpo }}
          className="mt-14 grid gap-6 border-t border-line-inverse pt-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {t.stats.map((stat) => (
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
              src={heroInsetPhoto.src}
              alt={heroInsetPhoto.alt}
              width={heroInsetPhoto.width}
              height={heroInsetPhoto.height}
              loading="lazy"
              decoding="async"
              className="h-36 w-full object-cover"
            />
            <figcaption className="bg-ink-800/90 px-4 py-3 text-xs text-inverse-muted backdrop-blur">
              {t.hero.insetCaption}
            </figcaption>
          </figure>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#products"
        aria-label={t.hero.scrollLabel}
        className="absolute right-gutter bottom-8 hidden size-12 place-items-center rounded-full border border-white/25 text-inverse transition-colors duration-300 hover:bg-white/10 md:grid"
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon name="chevronDown" size={20} />
      </motion.a>
    </section>
  )
}
