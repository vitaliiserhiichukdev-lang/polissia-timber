import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import useBodyLock from '../../hooks/useBodyLock'
import { useI18n } from '../../i18n/useI18n'

export interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

interface LightboxProps {
  images: LightboxImage[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

const controlClass =
  'grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 ' +
  'text-inverse transition duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20'

/**
 * Full-screen image viewer, controlled by the parent (`index === null` closes).
 * Arrow keys navigate, Escape closes, backdrop click closes.
 */
export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const { t } = useI18n()
  const isOpen = index !== null
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<Element | null>(null)

  useBodyLock(isOpen)

  const step = useCallback(
    (direction: number) => {
      if (index === null) return
      onNavigate((index + direction + images.length) % images.length)
    },
    [index, images.length, onNavigate],
  )

  useEffect(() => {
    if (!isOpen) return

    lastFocused.current = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      if (lastFocused.current instanceof HTMLElement) lastFocused.current.focus()
    }
  }, [isOpen, onClose, step])

  const image = index === null ? null : images[index]

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col bg-[#0e0c0a]/95 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={image.caption ?? image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <div className="flex items-center justify-between px-gutter py-4">
            <span className="text-xs font-semibold tracking-[0.14em] text-inverse-muted">
              {(index ?? 0) + 1} / {images.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              className={controlClass}
              onClick={onClose}
              aria-label={t.common.closeViewer}
            >
              <Icon name="close" size={22} />
            </button>
          </div>

          <div
            className="flex min-h-0 flex-1 items-center justify-center gap-3 px-3 pb-6 sm:gap-6 sm:px-8"
            onClick={(event) => {
              if (event.target === event.currentTarget) onClose()
            }}
          >
            <button
              type="button"
              className={controlClass}
              onClick={() => step(-1)}
              aria-label={t.common.previousImage}
            >
              <Icon name="chevronLeft" size={24} />
            </button>

            <motion.figure
              key={image.src}
              className="flex min-w-0 flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="max-h-[74vh] w-auto rounded-2xl object-contain shadow-[0_30px_90px_rgba(0,0,0,0.6)]"
              />
              {(image.caption ?? image.alt) && (
                <figcaption className="text-center text-sm text-inverse-muted">
                  {image.caption ?? image.alt}
                </figcaption>
              )}
            </motion.figure>

            <button
              type="button"
              className={controlClass}
              onClick={() => step(1)}
              aria-label={t.common.nextImage}
            >
              <Icon name="chevronRight" size={24} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}