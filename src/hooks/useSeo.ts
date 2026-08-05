import { useEffect } from 'react'
import { pageHead } from '../seo/pageHead'
import { useI18n } from '../i18n/useI18n'

const JSON_LD_ID = 'page-jsonld'

/**
 * Applies the page's head to the live DOM.
 *
 * The tags come from `pageHead`, which the prerender step reads too — so a
 * client-side route change produces exactly the head the crawler was served.
 * Tags are created when missing rather than only updated, because in dev there
 * is no prerendered head to patch.
 *
 * @param path Locale-independent path, e.g. `/products/oak-edged-boards`.
 */
export default function useSeo(path: string) {
  const { locale } = useI18n()

  useEffect(() => {
    const head = pageHead(locale, path)

    document.title = head.title
    document.documentElement.lang = head.lang

    for (const { tag, selector, attrs } of head.tags) {
      let element = document.head.querySelector(selector)
      if (!element) {
        element = document.createElement(tag)
        document.head.appendChild(element)
      }
      for (const [name, value] of Object.entries(attrs)) element.setAttribute(name, value)
    }

    // One block holding every schema for the route. Replacing it wholesale is
    // simpler than reconciling entries, and stops a stale Product schema
    // surviving a navigation back to the home page.
    document.getElementById(JSON_LD_ID)?.remove()
    if (head.jsonLd.length > 0) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = JSON_LD_ID
      script.textContent = JSON.stringify(head.jsonLd)
      document.head.appendChild(script)
    }
  }, [locale, path])
}
