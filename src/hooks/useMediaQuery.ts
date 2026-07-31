import { useEffect, useState } from 'react'

/**
 * Subscribes to a media query. Used to keep scroll-linked effects off phones,
 * where a full-height hero means they would run immediately — and where the
 * resulting composited layer changes how text is antialiased.
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    setMatches(list.matches)
    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }, [query])

  return matches
}
