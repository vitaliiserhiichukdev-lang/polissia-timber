import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * `useReducedMotion`, held at `false` until the page has hydrated.
 *
 * Framer's hook reads the media query during the very first client render, but
 * the prerender cannot know it, so for a visitor with reduced motion on the two
 * renders disagree. Where that changes structure (the map's pulse rings) React
 * throws away the whole prerendered tree; where it only changes attributes,
 * React keeps the server's — and the server's say `opacity: 0`, so the content
 * stayed invisible for good. Deferring the preference by one commit keeps the
 * hydration render identical to the HTML; components then settle to their
 * reduced state immediately after.
 */
export default function usePrefersReducedMotion(): boolean {
  const prefersReduced = useReducedMotion()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => setHydrated(true), [])

  return hydrated && prefersReduced === true
}
