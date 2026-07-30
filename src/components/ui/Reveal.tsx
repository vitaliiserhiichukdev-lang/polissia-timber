import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

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
  const MotionTag = motion[as]

  if (reduceMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offsets[variant] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
