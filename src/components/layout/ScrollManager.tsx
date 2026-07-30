import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

/** Give up after ~1.5s at 60fps if the target never appears. */
const MAX_FRAMES = 90

/**
 * Router-level scroll behaviour:
 *  - hash links scroll to their section, smoothly within a page and instantly
 *    when the jump also changes page;
 *  - forward navigation starts at the top;
 *  - back / forward restores where you were.
 *
 * The retry loop matters: page transitions use `AnimatePresence mode="wait"`,
 * so when you jump from a product page to `/#gallery` the incoming page only
 * mounts after the outgoing one has animated out. A single
 * requestAnimationFrame would look for `#gallery` before it exists and fall
 * back to scrolling to the top.
 *
 * The vertical offset comes from one place — `scroll-padding-top` on `html` —
 * so sections always land just below the sticky header.
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const navigationType = useNavigationType()
  const previousPathname = useRef(pathname)
  const positions = useRef(new Map<string, number>())

  // We restore scroll ourselves; stop the browser from also trying.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
  }, [])

  // Remember where the visitor was on this history entry.
  useEffect(() => {
    const save = () => positions.current.set(key, window.scrollY)
    window.addEventListener('scroll', save, { passive: true })
    return () => {
      save()
      window.removeEventListener('scroll', save)
    }
  }, [key])

  useEffect(() => {
    const changedPage = previousPathname.current !== pathname
    previousPathname.current = pathname

    let frame = 0

    if (!hash) {
      const restored = navigationType === 'POP' ? (positions.current.get(key) ?? 0) : 0
      frame = requestAnimationFrame(() =>
        window.scrollTo({ top: restored, left: 0, behavior: 'instant' }),
      )
      return () => cancelAnimationFrame(frame)
    }

    const id = decodeURIComponent(hash.slice(1))
    let frames = 0

    const findAndScroll = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({
          // Crossing pages can mean thousands of pixels — animating that is
          // slow and disorienting, so only scroll smoothly within a page.
          behavior: changedPage ? 'instant' : 'smooth',
          block: 'start',
        })
        return
      }
      if (++frames < MAX_FRAMES) frame = requestAnimationFrame(findAndScroll)
    }

    frame = requestAnimationFrame(findAndScroll)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, key, navigationType])

  return null
}
