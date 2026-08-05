import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

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
 */
export default function SectionReveal({
  children,
  className,
  distance = 40,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ y: distance }}
      whileInView={{ y: 0 }}
      // Fires early: a tall section would otherwise be half-read before it moves.
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
