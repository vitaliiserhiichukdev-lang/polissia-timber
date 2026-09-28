import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Icon from './Icon'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { useI18n } from '../../i18n/useI18n'
import type { ResolvedVideo } from '../../i18n/content'
import { cn } from '../../lib/cn'

interface AutoVideoProps {
  /** Key the component by `video.id` when swapping clips, so the pause state resets. */
  video: ResolvedVideo
  className?: string
}

/**
 * A silent production clip that plays while it is on screen.
 *
 * - `preload="none"` and playback driven by visibility: nothing is downloaded
 *   until the clip scrolls into view, and it stops when it leaves, so a page
 *   with several clips costs one at a time.
 * - Muted is set on the element as well as the prop. React renders `muted` as
 *   a property, not an attribute, so the prerendered markup has none — and a
 *   browser will refuse to autoplay a clip it thinks has sound.
 * - A visible pause control, because moving content that runs longer than five
 *   seconds has to be stoppable (WCAG 2.2.2). With reduced motion the clip
 *   starts paused and waits for that button.
 */
export default function AutoVideo({ video, className }: AutoVideoProps) {
  const { t } = useI18n()
  const reduceMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)
  const inView = useInView(ref, { amount: 0.35 })
  const [paused, setPaused] = useState(false)
  const [playing, setPlaying] = useState(false)

  const wantsPlay = inView && !paused && !reduceMotion

  useEffect(() => {
    const element = ref.current
    if (!element) return
    element.muted = true
    if (wantsPlay) {
      // Rejects when the browser blocks autoplay (e.g. data-saver). The
      // poster stays up and the play button still works, so nothing to do.
      element.play().catch(() => undefined)
    } else {
      element.pause()
    }
  }, [wantsPlay, video.src])

  const toggle = () => {
    const element = ref.current
    if (!element) return
    if (element.paused) {
      setPaused(false)
      element.muted = true
      element.play().catch(() => undefined)
    } else {
      setPaused(true)
      element.pause()
    }
  }

  return (
    <div className={cn('relative overflow-hidden bg-ink-800', className)}>
      <video
        ref={ref}
        src={video.src}
        poster={video.poster.src}
        width={video.width}
        height={video.height}
        muted
        loop
        playsInline
        preload="none"
        aria-label={video.alt}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="size-full object-cover"
        style={video.position ? { objectPosition: video.position } : undefined}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? t.common.pauseVideo : t.common.playVideo}
        className="absolute right-3 bottom-3 z-10 grid size-10 place-items-center rounded-full border border-white/25 bg-ink-900/70 text-inverse backdrop-blur transition duration-300 hover:bg-oak-600"
      >
        <Icon name={playing ? 'pause' : 'play'} size={16} />
      </button>
    </div>
  )
}
