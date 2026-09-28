import type { ProductSlug } from '../../data/contact'

interface FormatPatternProps {
  slug: ProductSlug
  size?: number
  className?: string
}

/** A herringbone block: a 4 × 12 rectangle turned ±45° about its centre. */
const Block = ({ x, y, turn }: { x: number; y: number; turn: 45 | -45 }) => (
  <rect x={x - 2} y={y - 6} width={4} height={12} rx={0.6} transform={`rotate(${turn} ${x} ${y})`} />
)

/**
 * The laying pattern of each format as a small line drawing, so the three
 * options in the picker can be told apart before the label is read:
 * staggered rows for plank, a continuous V with a centre seam for chevron,
 * interlocking blocks for herringbone.
 */
export default function FormatPattern({ slug, size = 40, className }: FormatPatternProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {slug === 'oak-plank-flooring' && (
        <>
          <rect x={4} y={5} width={32} height={30} rx={1.5} />
          <path d="M4 12.5h32M4 20h32M4 27.5h32" />
          <path d="M22 5v7.5M12 12.5V20M29 20v7.5M17 27.5V35" />
        </>
      )}

      {slug === 'oak-chevron-parquet' && (
        <>
          <path d="M20 4v32" />
          <path d="M5 13l15-8 15 8M5 21l15-8 15 8M5 29l15-8 15 8M5 37l15-8 15 8" />
        </>
      )}

      {slug === 'oak-herringbone-parquet' && (
        <>
          {/* The right column sits half a block lower: each block butts
              against the side of its neighbour instead of meeting it in a
              seam, which is what separates herringbone from chevron. */}
          <Block x={14.5} y={6} turn={45} />
          <Block x={25.5} y={11.5} turn={-45} />
          <Block x={14.5} y={17} turn={45} />
          <Block x={25.5} y={22.5} turn={-45} />
          <Block x={14.5} y={28} turn={45} />
          <Block x={25.5} y={33.5} turn={-45} />
        </>
      )}
    </svg>
  )
}
