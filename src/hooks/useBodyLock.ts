import { useEffect } from 'react'

/** Freezes background scrolling while a drawer or lightbox is open. */
export default function useBodyLock(active: boolean) {
  useEffect(() => {
    if (!active) return
    document.body.classList.add('is-locked')
    return () => document.body.classList.remove('is-locked')
  }, [active])
}
