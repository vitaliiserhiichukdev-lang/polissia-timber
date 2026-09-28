import { useState } from 'react'
import { motion } from 'framer-motion'
import AutoVideo from '../ui/AutoVideo'
import Lightbox from '../ui/Lightbox'
import Icon from '../ui/Icon'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedMedia, ResolvedPhoto } from '../../i18n/content'
import { cn } from '../../lib/cn'

interface ProductGalleryProps {
  /** Photos and clips of one format. Key the component by format to reset it. */
  media: ResolvedMedia[]
  name: string
  className?: string
}

/**
 * Lead frame plus thumbnails; a clip plays in place while it is on screen, and
 * either kind opens full size in the lightbox.
 *
 * The frame is portrait because the material is: the clips are 9:16 phone
 * footage and most photographs 3:4. A landscape photo is letterboxed over a
 * blurred copy of itself instead of being cropped to a sliver.
 */
export default function ProductGallery({ media, name, className }: ProductGalleryProps) {
  const { t } = useI18n()
  const [selected, setSelected] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const active = media[selected] ?? media[0]
  if (!active) return null

  const still = (item: ResolvedMedia): ResolvedPhoto => (item.kind === 'video' ? item.poster : item)
  const landscape = active.kind === 'photo' && active.width > active.height

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="relative aspect-4/5 overflow-hidden rounded-4xl border border-line bg-ink-800 shadow-mid">
        {active.kind === 'video' ? (
          <AutoVideo key={active.id} video={active} className="size-full" />
        ) : (
          <motion.div
            key={active.id}
            className="size-full"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {landscape && (
              <img
                src={active.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 size-full scale-110 object-cover opacity-60 blur-2xl"
              />
            )}
            <img
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              decoding="async"
              className={cn('relative size-full', landscape ? 'object-contain' : 'object-cover')}
              style={!landscape && active.position ? { objectPosition: active.position } : undefined}
            />
          </motion.div>
        )}

        <span className="pointer-events-none absolute top-4 left-4 z-10 flex max-w-[calc(100%-5rem)] items-center gap-1.5 rounded-full border border-white/15 bg-ink-900/75 px-3 py-1.5 text-xs font-medium text-inverse backdrop-blur-sm">
          {active.kind === 'video' && <Icon name="play" size={12} />}
          <span className="truncate">{active.caption}</span>
        </span>

        <button
          type="button"
          onClick={() => setLightboxIndex(selected)}
          aria-label={`${t.common.viewFullSize}: ${name} — ${active.caption}`}
          title={t.common.viewFullSize}
          className="absolute top-3 right-3 z-10 grid size-10 place-items-center rounded-full border border-white/25 bg-ink-900/70 text-inverse backdrop-blur transition duration-300 hover:bg-oak-600"
        >
          <Icon name="plus" size={16} />
        </button>
      </div>

      {media.length > 1 && (
        <ul className="flex flex-wrap gap-2.5">
          {media.map((item, i) => {
            const thumb = still(item)
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={i === selected}
                  aria-label={item.kind === 'video' ? `${t.common.video}: ${item.caption}` : item.caption}
                  title={item.caption}
                  className={cn(
                    'relative block overflow-hidden rounded-xl border-2 transition duration-300',
                    i === selected
                      ? 'border-oak-500 shadow-soft'
                      : 'border-transparent opacity-70 hover:opacity-100',
                  )}
                >
                  <img
                    src={thumb.src}
                    alt=""
                    width={144}
                    height={144}
                    loading="lazy"
                    decoding="async"
                    className="size-16 object-cover sm:size-18"
                    style={thumb.position ? { objectPosition: thumb.position } : undefined}
                  />
                  {item.kind === 'video' && (
                    <span className="absolute inset-0 grid place-items-center bg-ink-900/25 text-white">
                      <span className="grid size-7 place-items-center rounded-full bg-ink-900/70 backdrop-blur-sm">
                        <Icon name="play" size={12} />
                      </span>
                    </span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}

      <Lightbox
        images={media}
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
