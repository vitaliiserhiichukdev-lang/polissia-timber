import { brand, productSlugs, type ProductSlug } from '../data/contact'
import { buildContent } from '../i18n/content'
import { defaultLocale, localizePath, locales } from '../i18n/routing'
import { dictionaries } from '../i18n/useI18n'
import type { Dictionary, Locale } from '../i18n/types'
import { answeredFaq } from './faq'

/**
 * One description of every page's head, consumed twice: `useSeo` applies it to
 * the live DOM, and the prerender step serialises it into the static HTML. A
 * single source means the crawler and the client can never disagree about a
 * canonical URL or a title.
 */

export interface HeadTag {
  tag: 'meta' | 'link'
  /** Identifies the element, so a repeat render updates it in place. */
  selector: string
  attrs: Record<string, string>
}

export interface PageHead {
  title: string
  lang: string
  tags: HeadTag[]
  jsonLd: Record<string, unknown>[]
}

/** Open Graph wants a territory, not a bare language code. */
const ogLocales: Record<Locale, string> = {
  en: 'en_GB',
  de: 'de_DE',
  pl: 'pl_PL',
  uk: 'uk_UA',
}

const absolute = (path: string): string => `${brand.site}${path}`

const isProductSlug = (value: string): value is ProductSlug =>
  productSlugs.includes(value as ProductSlug)

/** Turns a pathname into the logical route key the head is built from. */
export function routeKey(path: string): { kind: 'home' | 'product' | 'notFound'; slug?: ProductSlug } {
  if (path === '/' || path === '') return { kind: 'home' }

  const match = /^\/products\/([^/]+)\/?$/.exec(path)
  if (match && isProductSlug(match[1])) return { kind: 'product', slug: match[1] }

  return { kind: 'notFound' }
}

function organization(t: Dictionary): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.name,
    legalName: brand.legalName,
    url: brand.site,
    logo: absolute('/favicon.svg'),
    description: t.meta.homeDescription,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
      addressLocality: t.contact.values.address,
    },
    email: brand.email,
    telephone: brand.phoneHref,
    areaServed: t.exportSection.markets,
    knowsLanguage: locales,
  }
}

function faqPage(t: Dictionary): Record<string, unknown> | null {
  const items = answeredFaq(t)
  if (items.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

interface PageFacts {
  title: string
  description: string
  image?: string
  noindex?: boolean
  jsonLd: Record<string, unknown>[]
}

function facts(locale: Locale, path: string): PageFacts {
  const t = dictionaries[locale]
  const route = routeKey(path)

  if (route.kind === 'home') {
    return {
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      image: '/additional_image/oak_edged_board.jpg',
      jsonLd: [organization(t), faqPage(t)].filter(
        (entry): entry is Record<string, unknown> => entry !== null,
      ),
    }
  }

  if (route.kind === 'product' && route.slug) {
    const product = buildContent(t).productBySlug[route.slug]
    const productPath = localizePath(locale, `/products/${route.slug}`)

    return {
      title: `${product.name} — ${product.species} | ${brand.name}`,
      description: product.shortDescription,
      image: product.cardPhoto.src,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.shortDescription,
          category: product.category,
          material: product.species,
          countryOfOrigin: 'UA',
          image: absolute(product.cardPhoto.src),
          brand: { '@type': 'Brand', name: brand.name },
          ...(product.priceFrom
            ? {
                offers: {
                  '@type': 'AggregateOffer',
                  priceCurrency: 'EUR',
                  lowPrice: product.priceFrom,
                  availability: 'https://schema.org/InStock',
                  seller: { '@type': 'Organization', name: brand.legalName },
                },
              }
            : {}),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: t.common.home,
              item: absolute(localizePath(locale, '/')),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: t.common.products,
              item: `${absolute(localizePath(locale, '/'))}#products`,
            },
            { '@type': 'ListItem', position: 3, name: product.name, item: absolute(productPath) },
          ],
        },
      ],
    }
  }

  return {
    title: t.meta.notFoundTitle,
    description: t.meta.notFoundDescription,
    noindex: true,
    jsonLd: [],
  }
}

/**
 * The head for a locale-independent path, e.g. `('uk', '/products/oak-parquet-boards')`.
 */
export function pageHead(locale: Locale, path: string): PageHead {
  const t = dictionaries[locale]
  const { title, description, image, noindex, jsonLd } = facts(locale, path)
  const canonical = absolute(localizePath(locale, path))

  const tags: HeadTag[] = [
    { tag: 'meta', selector: 'meta[name="description"]', attrs: { name: 'description', content: description } },
    { tag: 'link', selector: 'link[rel="canonical"]', attrs: { rel: 'canonical', href: canonical } },
    {
      tag: 'meta',
      selector: 'meta[name="robots"]',
      attrs: { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow' },
    },

    { tag: 'meta', selector: 'meta[property="og:type"]', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', selector: 'meta[property="og:site_name"]', attrs: { property: 'og:site_name', content: brand.name } },
    { tag: 'meta', selector: 'meta[property="og:locale"]', attrs: { property: 'og:locale', content: ogLocales[locale] } },
    { tag: 'meta', selector: 'meta[property="og:title"]', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', selector: 'meta[property="og:description"]', attrs: { property: 'og:description', content: description } },
    { tag: 'meta', selector: 'meta[property="og:url"]', attrs: { property: 'og:url', content: canonical } },
    { tag: 'meta', selector: 'meta[name="twitter:card"]', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', selector: 'meta[name="twitter:title"]', attrs: { name: 'twitter:title', content: title } },
    { tag: 'meta', selector: 'meta[name="twitter:description"]', attrs: { name: 'twitter:description', content: description } },
  ]

  if (image) {
    tags.push(
      { tag: 'meta', selector: 'meta[property="og:image"]', attrs: { property: 'og:image', content: absolute(image) } },
      { tag: 'meta', selector: 'meta[name="twitter:image"]', attrs: { name: 'twitter:image', content: absolute(image) } },
    )
  }

  // hreflang only earns its keep because each locale has its own URL; a locale
  // held in state would point every alternate at the same page.
  for (const alternate of locales) {
    const code = dictionaries[alternate].htmlLang
    tags.push({
      tag: 'link',
      selector: `link[rel="alternate"][hreflang="${code}"]`,
      attrs: { rel: 'alternate', hreflang: code, href: absolute(localizePath(alternate, path)) },
    })
  }
  tags.push({
    tag: 'link',
    selector: 'link[rel="alternate"][hreflang="x-default"]',
    attrs: {
      rel: 'alternate',
      hreflang: 'x-default',
      href: absolute(localizePath(defaultLocale, path)),
    },
  })

  return { title, lang: t.htmlLang, tags, jsonLd }
}
