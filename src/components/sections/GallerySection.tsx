import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../ui/Lightbox'
import Icon from '../ui/Icon'
import { galleryFilters, galleryImages, type GalleryCategory } from '../../data/gallery'
import { cn } from '../../lib/cn'

type Filter = 'all' | GalleryCategory

export default function GallerySection() {
  const [filter, setFilter] = useState<Filter>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? galleryImages : galleryImages.filter((i) => i.category === filter)),
    [filter],
  )

  return (
    <section id="gallery" className="scroll-mt-24 bg-sand-50 py-section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Gallery"
          title="Our timber, photographed as it ships"
          lead="Boards by grade, pine sections in the yard, twelve parquet finishes and the specification documents behind the grading — no stock photography."
          actions={
            <span className="text-sm text-muted">
              {visible.length} of {galleryImages.length} photos
            </span>
          }
        />

        {/* Filters */}
        <div
          className="no-scrollbar -mx-gutter mb-8 flex gap-2 overflow-x-auto px-gutter pb-1"
          role="tablist"
          aria-label="Filter gallery by category"
        >
          {galleryFilters.map((item) => {
            const active = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item.id)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition duration-300',
                  active
                    ? 'border-transparent bg-ink-900 text-inverse shadow-soft'
                    : 'border-line-strong bg-transparent text-muted hover:border-oak-500 hover:text-oak-600',
                )}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {/* Masonry via CSS columns — keeps the natural aspect ratios intact */}
        <motion.div layout className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {visible.map((image, i) => (
              <motion.figure
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.2), ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-sand-100 text-left"
                  aria-label={`Open image: ${image.caption}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full transition-transform duration-[900ms] ease-expo group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  />
                  <span className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 opacity-0 transition-all duration-400 ease-expo group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
                    <span className="text-xs font-medium text-inverse">{image.caption}</span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/15 text-inverse backdrop-blur">
                      <Icon name="plus" size={14} />
                    </span>
                  </span>
                </button>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        images={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
