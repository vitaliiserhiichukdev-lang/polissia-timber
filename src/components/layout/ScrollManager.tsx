import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Router-level scroll behaviour: hash links scroll to their section, plain
 * navigations start at the top. The frame delay lets the incoming page mount
 * before we look for the target element.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key])

  return null
}
