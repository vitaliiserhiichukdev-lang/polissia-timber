import { brand, productSlugs, type ProductSlug } from '../data/contact'
import {
  galleryTileIds,
  parquetFinishPhotos,
  photos,
  processPhotos,
  type PhotoCategory,
  type PhotoId,
} from '../data/media'
import { formatNumber, oakPriceFrom, oakPriceGroups, type GradeCode } from '../data/pricing'
import type { Dictionary, KeyFact, ProductText, SpecGroupText } from './types'
import type { IconName } from '../components/ui/Icon'

/** A photo with its localised alt text and caption resolved. */
export interface ResolvedPhoto {
  id: PhotoId
  src: string
  width: number
  height: number
  category: PhotoCategory
  alt: string
  caption: string
}

export interface ResolvedGradePrice {
  code: GradeCode
  label: string
  /** null → quoted on request. */
  price: number | null
}

export interface ResolvedPriceGroup {
  section: string
  lengths: string[]
  prices: ResolvedGradePrice[]
}

export interface ResolvedGrade {
  code: GradeCode
  name: string
  allowances: string[]
  photo: ResolvedPhoto
}

export interface ResolvedGradeBand {
  widths: string
  grades: ResolvedGrade[]
}

export interface ResolvedProduct {
  slug: ProductSlug
  name: string
  kicker: string
  category: string
  species: string
  tagline: string
  shortDescription: string
  description: string[]
  keyFacts: KeyFact[]
  specs: SpecGroupText[]
  advantages: string[]
  sizesSummary: string
  gradesSummary: string
  priceNote: string
  priceFrom: number | null
  cardPhoto: ResolvedPhoto
  heroPhoto: ResolvedPhoto
  gallery: ResolvedPhoto[]
  priceGroups: ResolvedPriceGroup[]
  gradeBands: ResolvedGradeBand[]
  notPermitted: string[]
  finishes: { photo: ResolvedPhoto; name: string; tone: string }[]
}

export interface ResolvedProcessStep {
  step: string
  icon: IconName
  title: string
  body: string
  photo: ResolvedPhoto
}

/** Everything a component needs for one locale: strings plus resolved media. */
export interface Content {
  t: Dictionary
  products: ResolvedProduct[]
  productBySlug: Record<ProductSlug, ResolvedProduct>
  /**
   * Every photo with its localised text, keyed by id. Sections that want one
   * specific picture read `photo.oakEdge` — previously they searched the gallery
   * array and asserted a hit, which broke silently the moment that array became
   * a curated subset.
   */
  photo: Record<PhotoId, ResolvedPhoto>
  /** The curated home-page gallery, in mosaic order. */
  galleryTiles: ResolvedPhoto[]
  processSteps: ResolvedProcessStep[]
  heroPhoto: ResolvedPhoto
  heroInsetPhoto: ResolvedPhoto
  productOptions: { value: string; label: string }[]
}

/** Which photos illustrate each product; language-neutral, so it lives here. */
const productMedia: Record<
  ProductSlug,
  { card: PhotoId; hero: PhotoId; gallery: PhotoId[]; hasPrices: boolean; hasFinishes: boolean }
> = {
  'oak-edged-boards': {
    card: 'oakGradeA',
    hero: 'oakEdge',
    gallery: ['oakGradeA', 'oakGradeB', 'oakGradeC', 'oakEdge', 'machined'],
    hasPrices: true,
    hasFinishes: false,
  },
  'pine-construction-timber': {
    card: 'pinePacks',
    hero: 'pineBeams',
    gallery: ['pinePacks', 'pineBundles', 'pineBeams', 'pineYard'],
    hasPrices: false,
    hasFinishes: false,
  },
  'oak-parquet-boards': {
    card: 'parquet4',
    hero: 'parquet8',
    gallery: parquetFinishPhotos,
    hasPrices: false,
    hasFinishes: true,
  },
}

/** Sample board photographed for each grade. */
const gradePhoto: Record<GradeCode, PhotoId> = {
  I: 'oakGradeA',
  II: 'oakGradeB',
  III: 'oakGradeC',
  IV: 'oakGradeC',
  mixed: 'oakGradeB',
}

const cache = new Map<string, Content>()

export function buildContent(t: Dictionary): Content {
  const cached = cache.get(t.locale)
  if (cached) return cached

  const resolvePhoto = (id: PhotoId): ResolvedPhoto => ({ ...photos[id], ...t.photos[id] })

  const gradeLabel = (code: GradeCode) =>
    code === 'mixed'
      ? t.productPage.mixedGrade
      : t.productPage.gradeLabel.replace('{code}', code)

  const priceGroups: ResolvedPriceGroup[] = oakPriceGroups.map((group) => ({
    section: `${group.width} × ${group.thickness} ${t.common.mm}`,
    lengths: group.lengths.map((length) => `${formatNumber(length)} ${t.common.mm}`),
    prices: group.prices.map((price) => ({
      code: price.grade,
      label: gradeLabel(price.grade),
      price: price.price,
    })),
  }))

  const buildProduct = (slug: ProductSlug): ResolvedProduct => {
    const text: ProductText = t.products[slug]
    const media = productMedia[slug]

    return {
      slug,
      ...text,
      priceFrom: media.hasPrices ? oakPriceFrom : null,
      cardPhoto: resolvePhoto(media.card),
      heroPhoto: resolvePhoto(media.hero),
      gallery: media.gallery.map(resolvePhoto),
      priceGroups: media.hasPrices ? priceGroups : [],
      gradeBands: text.gradeBands.map((band) => ({
        widths: band.widths,
        grades: band.grades.map((grade) => ({
          ...grade,
          photo: resolvePhoto(gradePhoto[grade.code]),
        })),
      })),
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
    galleryTiles: galleryTileIds.map(resolvePhoto),
    processSteps: t.process.steps.map((step, i) => ({
      ...step,
      step: `0${i + 1}`,
      photo: resolvePhoto(processPhotos[i] ?? 'pinePacks'),
    })),
    heroPhoto: { ...resolvePhoto('pinePacks'), alt: t.hero.imageAlt },
    heroInsetPhoto: resolvePhoto('oakGradeA'),
    productOptions: products.map((product) => ({ value: product.slug, label: product.name })),
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
