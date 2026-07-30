import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { cn } from '../../lib/cn'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  actions?: ReactNode
  align?: 'left' | 'center'
  inverse?: boolean
  id?: string
}

/** Eyebrow + heading + lead, with optional actions aligned right on desktop. */
export default function SectionHeader({
  eyebrow,
  title,
  lead,
  actions,
  align = 'left',
  inverse = false,
  id,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'mb-10 flex gap-6 md:mb-16 md:gap-16',
        centered
          ? 'flex-col items-center text-center'
          : 'flex-col items-start md:flex-row md:items-end md:justify-between',
      )}
    >
      <div className={cn('flex max-w-3xl flex-col gap-4', centered && 'items-center')}>
        {eyebrow && (
          <Reveal as="p" variant="fade" className={cn('eyebrow', inverse && 'eyebrow-inverse')}>
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h2" delay={0.05}>
          <span id={id} className={cn('block text-h2', inverse ? 'text-inverse' : 'text-ink-900')}>
            {title}
          </span>
        </Reveal>
        {lead && (
          <Reveal as="p" delay={0.12}>
            <span
              className={cn(
                'block max-w-2xl text-lead',
                inverse ? 'text-inverse-muted' : 'text-muted',
              )}
            >
              {lead}
            </span>
          </Reveal>
        )}
      </div>
      {actions && (
        <Reveal delay={0.18} className="shrink-0 pb-1">
          {actions}
        </Reveal>
      )}
    </div>
  )
}
