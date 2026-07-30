import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '../ui/Lightbox'
import Icon from '../ui/Icon'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedPhoto } from '../../i18n/content'
import { cn } from '../../lib/cn'

interface ProductGalleryProps {
  images: ResolvedPhoto[]
  name: string
}

/** Large lead image with a thumbnail grid; both open the lightbox. */
export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const { t } = useI18n()
  const [selected, setSelected] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Switching product (or locale) resets the selection to the lead image.
  useEffect(() => setSelected(0), [images])

  const active = images[selected]
  if (!active) return null

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setLightboxIndex(selected)}
        className="group relative block overflow-hidden rounded-4xl border border-line bg-sand-100"
        aria-label={`${t.common.openImage}: ${name}`}
      >
        <motion.img
          key={active.src}
          src={active.src}
          alt={active.alt}
          width={active.width}
          height={active.height}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-4/3 w-full object-cover"
        />
        <span className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-ink-900/80 px-3.5 py-2 text-xs font-medium text-inverse opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <Icon name="plus" size={14} />
          {t.common.viewFullSize}
        </span>
        <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-ink-900/75 px-3 py-1.5 text-xs font-medium text-inverse backdrop-blur-sm">
          {active.caption}
        </span>
      </button>

      <ul className="flex flex-wrap gap-3">
        {images.map((image, i) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-current={i === selected}
              title={image.caption}
              className={cn(
                'block overflow-hidden rounded-xl border-2 transition duration-300',
                i === selected
                  ? 'border-oak-500 shadow-soft'
                  : 'border-transparent opacity-65 hover:opacity-100',
              )}
            >
              <img
                src={image.src}
                alt=""
                width={160}
                height={120}
                loading="lazy"
                decoding="async"
                className="size-18 object-cover"
              />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => {
          setLightboxIndex(index)
          setSelected(index)
        }}
      />
    </div>
  )
}
