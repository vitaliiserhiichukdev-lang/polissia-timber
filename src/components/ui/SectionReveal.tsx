import { useRef, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  /** Distance the block travels, in px. Larger reads as heavier. */
  distance?: number
}

/**
 * Section-level entrance: the whole block rises into place as it scrolls in,
 * while the individual items inside it keep their own staggered fades.
 *
 * Two deliberate choices:
 *
 * - **Transform only, no opacity.** Most content here already sits inside a
 *   `Reveal` that fades it in. Fading the parent as well multiplies the two and
 *   the section arrives looking sluggish and washed out.
 * - **Wraps the container, never the `<section>`.** A transform makes an element
 *   the containing block for `position: fixed` descendants, which would break
 *   the gallery lightbox. The lightbox is a sibling of the container, so keeping
 *   the transform inside is what makes this safe.
 * - **`useInView`, not `whileInView`** — see the note in `Reveal`; the prop does
 *   not fire for elements mounted during a page transition.
 */
export default function SectionReveal({
  children,
  className,
  distance = 40,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  // Fires early: a tall section would otherwise be half-read before it moves.
  const inView = useInView(ref, { once: true, amount: 0.05 })

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: distance }}
      animate={{ y: inView ? 0 : distance }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
