import { brand, productSlugs, type ProductSlug } from '../data/contact'
import {
  galleryTiles,
  heroInsetPhoto,
  heroPhoto,
  photos,
  processMedia,
  productMedia,
  videos,
  type MediaRef,
  type PhotoId,
  type VideoId,
} from '../data/media'
import {
  construction,
  formatDecimal,
  formatEuro,
  formatNumber,
  gradeDisplay,
  lowestPrice,
  priceFrom,
  priceList,
  type GradeCode,
  type SizeOption,
} from '../data/pricing'
import type { Dictionary, KeyFact, ProductText } from './types'
import type { IconName } from '../components/ui/Icon'

/** A photo with its localised alt text and caption resolved. */
export interface ResolvedPhoto {
  kind: 'photo'
  id: PhotoId
  src: string
  width: number
  height: number
  position?: string
  alt: string
  caption: string
}

/** A video with its localised text and its poster frame resolved. */
export interface ResolvedVideo {
  kind: 'video'
  id: VideoId
  src: string
  poster: ResolvedPhoto
  width: number
  height: number
  position?: string
  alt: string
  caption: string
}

export type ResolvedMedia = ResolvedPhoto | ResolvedVideo

/** One orderable size of a format, with its labels in the current language. */
export interface ResolvedSize extends SizeOption {
  /** Stable key for React and form values, e.g. "125". */
  key: string
  /** "125 × 600–1 400 mm" */
  label: string
  /** "600–1 400 mm" */
  lengthLabel: string
  /** "random lengths" / "fixed lengths" */
  lengthNote: string
  /** Full line as the price sheet writes it: "125 × 600–1 400 × 14/3.2 mm". */
  spec: string
}

export interface ResolvedProduct extends ProductText {
  slug: ProductSlug
  keyFacts: KeyFact[]
  sizes: ResolvedSize[]
  priceFrom: number
  cardPhoto: ResolvedPhoto
  /** Gallery and picker viewer, in order: photos and videos. */
  media: ResolvedMedia[]
  finishes: { photo: ResolvedPhoto; name: string; tone: string }[]
}

export interface ResolvedProcessStep {
  step: string
  icon: IconName
  title: string
  body: string
  media: ResolvedMedia
}

/** Everything a component needs for one locale: strings plus resolved media. */
export interface Content {
  t: Dictionary
  products: ResolvedProduct[]
  productBySlug: Record<ProductSlug, ResolvedProduct>
  /**
   * Every photo with its localised text, keyed by id. Sections that want one
   * specific picture read `photo.showroom` rather than searching an array.
   */
  photo: Record<PhotoId, ResolvedPhoto>
  /** The curated home-page gallery, in mosaic order. */
  galleryTiles: ResolvedMedia[]
  processSteps: ResolvedProcessStep[]
  heroPhoto: ResolvedPhoto
  heroInsetPhoto: ResolvedPhoto
  productOptions: { value: string; label: string }[]
  /** Cheapest line on the price list. */
  priceFrom: number
  /** 52.5 → "€52.50" / "52,50 €". */
  formatPrice: (value: number) => string
  /** "AB" → "A-B Select". */
  gradeName: (code: GradeCode) => string
}

const cache = new Map<string, Content>()

export function buildContent(t: Dictionary): Content {
  const cached = cache.get(t.locale)
  if (cached) return cached

  const mm = t.common.mm
  const decimal = (value: number) => formatDecimal(value, t.decimalComma)
  const formatPrice = (value: number) => formatEuro(value, t.decimalComma)

  const resolvePhoto = (id: PhotoId): ResolvedPhoto => ({
    kind: 'photo',
    ...photos[id],
    ...t.photos[id],
  })

  const resolveVideo = (id: VideoId): ResolvedVideo => {
    const video = videos[id]
    const poster = resolvePhoto(video.poster)
    return {
      kind: 'video',
      id,
      src: video.src,
      poster,
      width: video.width,
      height: video.height,
      position: poster.position,
      ...t.videos[id],
    }
  }

  const resolveMedia = (ref: MediaRef): ResolvedMedia =>
    ref.kind === 'photo' ? resolvePhoto(ref.id) : resolveVideo(ref.id)

  const lengthText = (size: SizeOption) =>
    size.lengthKind === 'range'
      ? size.lengths.map(formatNumber).join('–')
      : size.lengths.map(formatNumber).join(' / ')

  const resolveSize = (size: SizeOption): ResolvedSize => ({
    ...size,
    key: String(size.width),
    label: `${size.width} × ${lengthText(size)} ${mm}`,
    lengthLabel: `${lengthText(size)} ${mm}`,
    lengthNote: size.lengthKind === 'range' ? t.catalog.randomLengths : t.catalog.fixedLengths,
    spec: `${size.width} × ${lengthText(size)} × ${construction.thickness}/${decimal(construction.wearLayer)} ${mm}`,
  })

  /** One size prints as it is; several collapse to the overall range. */
  const overallLength = (sizes: ResolvedSize[]) => {
    if (sizes.length === 1) return sizes[0].lengthLabel
    const all = sizes.flatMap((size) => size.lengths)
    return `${formatNumber(Math.min(...all))}–${formatNumber(Math.max(...all))} ${mm}`
  }

  const buildProduct = (slug: ProductSlug): ResolvedProduct => {
    const media = productMedia[slug]
    const sizes = priceList[slug].map(resolveSize)
    const spec = t.catalog.specs

    return {
      slug,
      ...t.products[slug],
      keyFacts: [
        { label: spec.thickness, value: `${construction.thickness} ${mm}` },
        { label: spec.wearLayer, value: `${decimal(construction.wearLayer)} ${mm}` },
        { label: spec.width, value: `${sizes.map((size) => size.width).join(' / ')} ${mm}` },
        { label: spec.length, value: overallLength(sizes) },
      ],
      sizes,
      priceFrom: lowestPrice(slug),
      cardPhoto: resolvePhoto(media.card),
      media: media.media.map(resolveMedia),
      finishes: media.hasFinishes
        ? t.finishes.map((finish) => ({
            photo: resolvePhoto(finish.id),
            name: finish.name,
            tone: finish.tone,
          }))
        : [],
    }
  }

  const products = productSlugs.map(buildProduct)

  const content: Content = {
    t,
    products,
    productBySlug: Object.fromEntries(products.map((p) => [p.slug, p])) as Record<
      ProductSlug,
      ResolvedProduct
    >,
    photo: Object.fromEntries(
      (Object.keys(photos) as PhotoId[]).map((id) => [id, resolvePhoto(id)]),
    ) as Record<PhotoId, ResolvedPhoto>,
    galleryTiles: galleryTiles.map(resolveMedia),
    processSteps: t.process.steps.map((step, i) => ({
      ...step,
      step: `0${i + 1}`,
      media: resolveMedia(processMedia[i] ?? { kind: 'photo', id: 'plankSelect' }),
    })),
    heroPhoto: { ...resolvePhoto(heroPhoto), alt: t.hero.imageAlt },
    heroInsetPhoto: resolvePhoto(heroInsetPhoto),
    productOptions: products.map((product) => ({ value: product.slug, label: product.name })),
    priceFrom,
    formatPrice,
    gradeName: (code) => `${gradeDisplay[code]} ${t.grades[code].name}`,
  }

  cache.set(t.locale, content)
  return content
}

/** Replaces {token} placeholders in dictionary strings. */
export const fill = (template: string, values: Record<string, string>): string =>
  Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  )

export { brand, formatNumber }
