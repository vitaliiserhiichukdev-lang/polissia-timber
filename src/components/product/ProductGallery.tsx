import { useState } from 'react'
import { motion } from 'framer-motion'
import Lightbox from '../ui/Lightbox'
import Icon from '../ui/Icon'
import type { GalleryItem } from '../../data/products'
import { cn } from '../../lib/cn'

interface ProductGalleryProps {
  images: GalleryItem[]
  name: string
}

/** Large lead image with a thumbnail rail; both open the lightbox. */
export default function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const active = images[selected]

  if (!active) return null

  return (
    <div className="flex flex-col gap-4">
      <button
        type="button"
        onClick={() => setLightboxIndex(selected)}
        className="group relative block overflow-hidden rounded-4xl border border-line bg-sand-100"
        aria-label={`Open larger image of ${name}`}
      >
        <motion.img
          key={active.src}
          src={active.src}
          alt={active.alt}
          width={1280}
          height={960}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-4/3 w-full object-cover"
        />
        <span className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-ink-900/80 px-3.5 py-2 text-xs font-medium text-inverse opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <Icon name="plus" size={14} />
          View full size
        </span>
        {active.caption && (
          <span className="absolute top-4 left-4 chip chip-dark backdrop-blur">
            {active.caption}
          </span>
        )}
      </button>

      <ul className="no-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
        {images.map((image, i) => (
          <li key={image.src} className="shrink-0">
            <button
              type="button"
              onClick={() => setSelected(i)}
              aria-current={i === selected}
              className={cn(
                'block overflow-hidden rounded-xl border-2 transition duration-300',
                i === selected
                  ? 'border-oak-500 shadow-soft'
                  : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <img
                src={image.src}
                alt={image.caption ?? image.alt}
                width={160}
                height={120}
                loading="lazy"
                decoding="async"
                className="size-20 object-cover"
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
