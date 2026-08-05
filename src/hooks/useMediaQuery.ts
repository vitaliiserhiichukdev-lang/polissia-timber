import { useEffect, useState } from 'react'

/**
 * Subscribes to a media query. Used to keep scroll-linked effects off phones,
 * where a full-height hero means they would run immediately — and where the
 * resulting composited layer changes how text is antialiased.
 *
 * Starts `false` during prerendering, where there is no viewport to measure,
 * and re-reads on mount. That order matters: the server and the first client
 * render must agree, or React throws the prerendered markup away.
 */
export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const list = window.matchMedia(query)
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches)

    setMatches(list.matches)
    list.addEventListener('change', onChange)
    return () => list.removeEventListener('change', onChange)
  }, [query])

  return matches
}
