import { useEffect } from 'react'
import { brand } from '../data/contact'

const setMeta = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value)
}

interface SeoOptions {
  title: string
  description: string
  path?: string
  image?: string
}

/**
 * Keeps title, description, canonical URL and social tags in sync with the
 * route. Deliberately small: a two-route SPA does not need a head manager.
 */
export default function useSeo({ title, description, path = '/', image }: SeoOptions) {
  useEffect(() => {
    const url = `${brand.site}${path}`

    document.title = title
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[name="twitter:title"]', 'content', title)

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:description"]', 'content', description)

    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:url"]', 'content', url)

    if (image) {
      const absolute = `${brand.site}${image}`
      setMeta('meta[property="og:image"]', 'content', absolute)
      setMeta('meta[name="twitter:image"]', 'content', absolute)
    }
  }, [title, description, path, image])
}
