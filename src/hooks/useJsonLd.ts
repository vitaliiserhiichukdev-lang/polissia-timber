import { useEffect } from 'react'

/** Injects a JSON-LD block for the current route and removes it on unmount. */
export default function useJsonLd(data: Record<string, unknown> | null, id: string) {
  useEffect(() => {
    if (!data) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [data, id])
}
