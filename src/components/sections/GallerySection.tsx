import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../ui/Lightbox'
import Icon from '../ui/Icon'
import { fill } from '../../i18n/content'
import { useI18n } from '../../i18n/useI18n'
import type { PhotoCategory } from '../../data/media'
import { cn } from '../../lib/cn'

type Filter = 'all' | PhotoCategory

const filterOrder: Filter[] = ['all', 'oak', 'pine', 'parquet']

export default function GallerySection() {
  const { t, gallery } = useI18n()
  const [filter, setFilter] = useState<Filter>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? gallery : gallery.filter((photo) => photo.category === filter)),
    [filter, gallery],
  )

  return (
    <section id="gallery" className="bg-sand-50 py-section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          lead={t.gallery.lead}
          actions={
            <span className="text-sm text-muted">
              {fill(t.gallery.count, {
                shown: String(visible.length),
                total: String(gallery.length),
              })}
            </span>
          }
        />

        <div
          className="no-scrollbar -mx-gutter mb-8 flex gap-2 overflow-x-auto px-gutter pb-1"
          role="tablist"
          aria-label={t.gallery.filterLabel}
        >
          {filterOrder.map((id) => {
            const active = filter === id
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setFilter(id)
                  setLightboxIndex(null)
                }}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition duration-300',
                  active
                    ? 'border-transparent bg-ink-900 text-inverse shadow-soft'
                    : 'border-line-strong bg-transparent text-muted hover:border-oak-500 hover:text-oak-600',
                )}
              >
                {t.gallery.filters[id]}
              </button>
            )
          })}
        </div>

        {/* Masonry via CSS columns — keeps the natural aspect ratios intact */}
        <motion.div layout className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {visible.map((photo, i) => (
              <motion.figure
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(i * 0.02, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-sand-100 text-left"
                  aria-label={`${t.common.openImage}: ${photo.caption}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                    className="w-full transition-transform duration-[900ms] ease-expo group-hover:scale-[1.06]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  />
                  <span className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 opacity-0 transition-all duration-400 ease-expo group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-2">
                    <span className="text-xs font-medium text-inverse">{photo.caption}</span>
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
