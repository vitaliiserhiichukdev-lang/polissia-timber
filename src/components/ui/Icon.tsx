import type { ReactElement, SVGProps } from 'react'

/**
 * Inline icon set. One component so icons ship with the JS bundle and inherit
 * `currentColor` — no sprite request, no icon dependency.
 */
const paths = {
  arrowRight: <path d="M4 12h15m0 0-6-6m6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7m0 0h-7m7 0v7" />,
  arrowLeft: <path d="M20 12H5m0 0 6-6m-6 6 6 6" />,
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5L15.5 11l4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4 6.2 2 2 0 0 1 6 4z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.5 2" />
    </>
  ),
  // Acorn — the oak mark used for material quality
  oak: (
    <>
      <path d="M12 3.8c-2.7 0-4.9 1.7-4.9 3.5 0 .7.5 1.2 1.1 1.2h7.6c.6 0 1.1-.5 1.1-1.2 0-1.8-2.2-3.5-4.9-3.5Z" />
      <path d="M7.5 8.5c.2 5.4 2 9.4 4.5 11.4 2.5-2 4.3-6 4.5-11.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21s7-3 7-9V6l-7-3-7 3v6c0 6 7 9 7 9Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  stack: (
    <>
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  tag: (
    <>
      <path d="M12.5 3H20a1 1 0 0 1 1 1v7.5a2 2 0 0 1-.6 1.4l-7 7a2 2 0 0 1-2.8 0l-6-6a2 2 0 0 1 0-2.8l7-7A2 2 0 0 1 12.5 3Z" />
      <circle cx="16.5" cy="7.5" r="1.4" />
    </>
  ),
  // Two people — partnership / individual approach
  partners: (
    <>
      <circle cx="9" cy="8" r="3.1" />
      <path d="M3 20c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6" />
      <path d="M16.2 5.4a3.1 3.1 0 0 1 0 5.2" />
      <path d="M17.8 14.9c2 .9 3.2 2.7 3.2 5.1" />
    </>
  ),
  ruler: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="1.5" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  leaf: (
    <>
      <path d="M4.6 19.4C3 12.9 7 5.4 19.5 4.5c1 11.5-6.6 16-15 14.9Z" />
      <path d="M4.6 19.4 14 10" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20V10l5 3V10l5 3V9l8 4v7z" />
      <path d="M7 20v-3M12 20v-3M17 20v-3" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
    </>
  ),
  quote: (
    <path d="M9 6c-3 1.5-4.5 4-4.5 7.5A4.5 4.5 0 0 0 9 18M19 6c-3 1.5-4.5 4-4.5 7.5A4.5 4.5 0 0 0 19 18" />
  ),
} satisfies Record<string, ReactElement>

export type IconName = keyof typeof paths

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'stroke'> {
  name: IconName
  size?: number
  /** Stroke width — icons are drawn on a 24px grid. */
  stroke?: number
}

export default function Icon({ name, size = 20, stroke = 1.6, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
