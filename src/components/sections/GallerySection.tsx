import { useRef, useState } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import Link from '../ui/LocaleLink'
import SectionHeader from '../ui/SectionHeader'
import SectionReveal from '../ui/SectionReveal'
import Lightbox from '../ui/Lightbox'
import Icon from '../ui/Icon'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedPhoto } from '../../i18n/content'
import { cn } from '../../lib/cn'

const easeExpo = [0.16, 1, 0.3, 1] as const

/**
 * Mosaic bands.
 *
 * The photographs have wildly different proportions — a graded board is 691×1280
 * portrait, a yard shot 1280×960 landscape. The masonry column layout this
 * replaces kept every intrinsic ratio, so the grid came out ragged and the
 * section read as an accident. Here the *cell* owns the shape: a fixed height per
 * band plus `object-cover`, so a portrait and a landscape photo sit in the same
 * rectangle and the composition holds whatever gets swapped in.
 *
 * Widths are deliberately uneven — 1.45fr against 1fr, mirrored in the last band
 * — so it reads as an edit rather than a spreadsheet.
 */
const BANDS = [
  { count: 2, cols: 'lg:grid-cols-[1.45fr_1fr]', height: 'h-[18rem] sm:h-[22rem] lg:h-[25rem]' },
  { count: 3, cols: 'sm:grid-cols-3', height: 'h-[13rem] sm:h-[14rem] lg:h-[17rem]' },
  { count: 2, cols: 'lg:grid-cols-[1fr_1.45fr]', height: 'h-[16rem] sm:h-[18rem] lg:h-[20rem]' },
]

interface TileProps {
  photo: ResolvedPhoto
  /** Position in the whole gallery, for the printed index. */
  index: number
  total: number
  /** Stagger inside the band. */
  delay: number
  heightClass: string
  progress: MotionValue<number>
  /** Whether the mosaic has scrolled into view; owned by the parent. */
  revealed: boolean
  openLabel: string
  onOpen: () => void
}

function GalleryTile({
  photo,
  index,
  total,
  delay,
  heightClass,
  progress,
  revealed,
  openLabel,
  onOpen,
}: TileProps) {
  const reduceMotion = useReducedMotion()
  const inView = revealed

  // Slow counter-drift as the band crosses the viewport: neighbouring tiles move
  // opposite ways, which is what stops a row of rectangles feeling like a table.
  // The image is 12% taller than its cell, so ±3.5% never exposes an edge.
  const drift = useTransform(
    progress,
    [0, 1],
    index % 2 === 0 ? ['3.5%', '-3.5%'] : ['-3.5%', '3.5%'],
  )

  const clipped = 'inset(0% 0% 100% 0%)'
  const open = 'inset(0% 0% 0% 0%)'

  return (
    <motion.figure
      className={cn(
        'relative m-0 overflow-hidden rounded-3xl border border-line bg-sand-100',
        heightClass,
      )}
      // Wipes up rather than fading, so the crop is revealed like a print.
      initial={reduceMotion ? undefined : { clipPath: clipped }}
      animate={reduceMotion ? undefined : { clipPath: inView ? open : clipped }}
      transition={{ duration: 1.05, delay, ease: easeExpo }}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`${openLabel}: ${photo.caption}`}
        className="group absolute inset-0 block w-full cursor-pointer text-left"
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-[6%] block"
          style={reduceMotion ? undefined : { y: drift }}
        >
          <motion.img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
            // Settles out of a slight over-scale as the wipe finishes.
            initial={reduceMotion ? undefined : { scale: 1.14 }}
            animate={reduceMotion ? undefined : { scale: inView ? 1 : 1.14 }}
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            transition={{ duration: 1.4, delay, ease: easeExpo }}
          />
        </motion.span>

        {/* Weighted to the bottom third rather than a straight gradient: the
            caption has to stay legible over a pale yard shot as well as a dark
            board, without hazing over the whole photograph. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,15,0.92)_0%,rgba(20,18,15,0.55)_24%,rgba(20,18,15,0)_58%)]"
        />

        {/* Always legible, not hover-only: a touch screen has no hover, and a
            buyer should not have to guess what they are looking at. */}
        <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
          <span className="min-w-0">
            <span className="block font-display text-[0.7rem] tracking-[0.22em] text-oak-200 tabular-nums">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className="mt-1.5 block text-sm font-medium text-inverse">{photo.caption}</span>
            <span
              aria-hidden="true"
              className="mt-2.5 block h-px w-8 bg-oak-500 transition-all duration-500 ease-expo group-hover:w-16"
            />
          </span>

          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-inverse backdrop-blur transition duration-400 group-hover:border-transparent group-hover:bg-oak-600">
            <Icon name="plus" size={16} />
          </span>
        </figcaption>
      </button>
    </motion.figure>
  )
}

export default function GallerySection() {
  const { t, galleryTiles } = useI18n()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const mosaicRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: mosaicRef,
    offset: ['start end', 'end start'],
  })

  /**
   * One observer for the whole mosaic, with the tiles staggering off it — rather
   * than an observer per tile.
   *
   * Per-tile `useInView` on the `motion.figure` never fired: its effect finds no
   * node on the first pass and its dependency array gives it no reason to run
   * again, so every tile stayed clipped to nothing. On a plain container ref it
   * is reliable, and one observer for seven tiles is less work anyway.
   */
  const revealed = useInView(mosaicRef, { once: true, amount: 0.12 })

  // Slicing rather than hardcoding keeps this working if the selection in
  // `media.ts` gets shorter; a band left with nothing drops out.
  let cursor = 0
  const bands = BANDS.map((band) => {
    const items = galleryTiles.slice(cursor, cursor + band.count)
    cursor += band.count
    return { ...band, items, offset: cursor - items.length }
  }).filter((band) => band.items.length > 0)

  return (
    <section id="gallery" className="bg-sand-50 py-section">
      <SectionReveal className="container-page">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          lead={t.gallery.lead}
          actions={
            <Link to="/products/oak-parquet-boards#finishes" className="link-arrow">
              {t.gallery.action}
              <Icon name="arrowRight" size={17} />
            </Link>
          }
        />

        <div ref={mosaicRef} className="flex flex-col gap-4 md:gap-5">
          {bands.map((band) => (
            <div key={band.offset} className={cn('grid gap-4 md:gap-5', band.cols)}>
              {band.items.map((photo, itemIndex) => (
                <GalleryTile
                  key={photo.id}
                  photo={photo}
                  index={band.offset + itemIndex}
                  total={galleryTiles.length}
                  delay={(band.offset + itemIndex) * 0.09}
                  heightClass={band.height}
                  progress={scrollYProgress}
                  revealed={revealed}
                  openLabel={t.common.openImage}
                  onOpen={() => setLightboxIndex(band.offset + itemIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </SectionReveal>

      <Lightbox
        images={galleryTiles}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
