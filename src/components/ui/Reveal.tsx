import { useCallback, useRef, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

type Variant = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'

const offsets: Record<Variant, { x?: number; y?: number; scale?: number }> = {
  up: { y: 34 },
  down: { y: -24 },
  left: { x: 40 },
  right: { x: -40 },
  fade: {},
  scale: { scale: 0.96 },
}

interface RevealProps {
  children: ReactNode
  variant?: Variant
  delay?: number
  duration?: number
  amount?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'p' | 'span' | 'h2' | 'h3' | 'figure'
}

/**
 * Scroll-reveal wrapper used across the site — one place to tune the entrance
 * feel, and one place that honours `prefers-reduced-motion`.
 *
 * Driven by `useInView` rather than the `whileInView` prop, deliberately.
 * `whileInView` never fires for elements that mount *during* an
 * `AnimatePresence mode="wait"` page transition: switching language or coming
 * back from a product page left revealed content stuck at its hidden start
 * state, and no amount of scrolling brought it back. `useInView` owns its own
 * observer and is unaffected.
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.75,
  amount = 0.25,
  className,
  as = 'div',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { once: true, amount })
  const MotionTag = motion[as]

  // A callback ref, because `motion[as]` is a union of components and its `ref`
  // prop is therefore an intersection of element types that no single RefObject
  // satisfies. A function taking the base HTMLElement is assignable to all of
  // them, and it lands before effects run, so `useInView` still sees the node.
  const attach = useCallback((node: HTMLElement | null) => {
    ref.current = node
  }, [])

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const hidden = { opacity: 0, ...offsets[variant] }

  return (
    <MotionTag
      ref={attach}
      className={className}
      initial={hidden}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : hidden}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
