import { useRef } from 'react'
import Link from '../ui/LocaleLink'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from '../ui/Icon'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { whatsappHref } from '../../data/contact'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useI18n } from '../../i18n/useI18n'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

const easeExpo = [0.16, 1, 0.3, 1] as const

/**
 * Copy on the left, the showroom on the right.
 *
 * The photography is portrait — phone shots of a showroom wall and fitted
 * floors — so it is framed as a tall panel instead of being stretched across
 * the viewport, where a 960 px frame would be cropped to a strip and blown up
 * to twice its size.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = usePrefersReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { t, heroPhoto, heroInsetPhoto, priceFrom, formatPrice } = useI18n()

  // Scroll-linked drift is a desktop-only flourish: on a phone it would start
  // on the first swipe and leave the panel on a composited layer mid-transform.
  const parallax = isDesktop && !reduceMotion

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const insetY = useTransform(scrollYProgress, [0, 1], [0, -70])

  return (
    <section
      ref={sectionRef}
      // -mt-header pulls the hero under the sticky header, which is transparent here.
      className="relative isolate -mt-header overflow-hidden bg-ink-900 pt-[calc(var(--spacing-header)+2.5rem)] pb-14 md:pb-20 lg:min-h-svh"
      aria-labelledby="hero-title"
    >
      <span aria-hidden="true" className="grain-layer-dark -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_85%_30%,rgba(180,129,62,0.18)_0%,rgba(20,18,15,0)_70%)]"
      />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
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
            className="mt-5 text-h1 text-inverse lg:text-[4.25rem]"
          >
            {t.hero.titleLead}
            <span className="block text-oak-400 italic">{t.hero.titleAccent}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="mt-7 max-w-xl text-lead text-inverse-muted"
          >
            {t.hero.lead}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link to="/#products" className="btn btn-oak">
              {t.common.viewProducts}
              <span className="btn-icon">
                <Icon name="arrowRight" size={18} />
              </span>
            </Link>
            <a
              href={whatsappHref(t.whatsapp.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={19} />
              {t.common.whatsapp}
            </a>
            <Link to="/#contact" className="btn btn-glass">
              {t.common.requestQuote}
            </Link>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            transition={{ duration: 0.8, ease: easeExpo }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line-inverse pt-8 sm:grid-cols-4"
          >
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl leading-none text-oak-400 md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2">
                  <span className="block text-sm font-medium text-inverse">{stat.label}</span>
                  <span className="mt-1 block text-xs leading-snug text-inverse-muted">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: easeExpo }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-white/10 shadow-lift lg:aspect-auto lg:h-[min(78svh,46rem)]">
            <motion.img
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width={heroPhoto.width}
              height={heroPhoto.height}
              fetchPriority="high"
              decoding="async"
              className="size-full scale-[1.08] object-cover"
              style={{
                objectPosition: heroPhoto.position,
                ...(parallax ? { y: photoY } : {}),
              }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent"
            />

            {/* Price anchor, straight off the sheet: the cheapest line. */}
            <div className="absolute right-4 bottom-4 rounded-2xl border border-white/15 bg-ink-900/80 px-4 py-3 text-right backdrop-blur-md">
              <span className="block text-[0.7rem] font-semibold tracking-[0.14em] text-oak-400 uppercase">
                {t.hero.priceBadge}
              </span>
              <span className="font-display text-2xl text-inverse tabular-nums">
                {formatPrice(priceFrom)}
                <span className="ml-1 font-sans text-xs text-inverse-muted">
                  {t.common.perSquareMetre}
                </span>
              </span>
            </div>
          </div>

          <motion.figure
            className="absolute -bottom-6 -left-4 hidden w-40 overflow-hidden rounded-2xl border border-white/15 bg-ink-800 shadow-lift sm:block lg:-left-10 xl:w-48"
            style={parallax ? { y: insetY } : undefined}
          >
            <img
              src={heroInsetPhoto.src}
              alt={heroInsetPhoto.alt}
              width={heroInsetPhoto.width}
              height={heroInsetPhoto.height}
              loading="lazy"
              decoding="async"
              className="h-44 w-full object-cover xl:h-52"
              style={{ objectPosition: heroInsetPhoto.position }}
            />
            <figcaption className="px-3.5 py-2.5 text-xs text-inverse-muted">
              {t.hero.insetCaption}
            </figcaption>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  )
}
