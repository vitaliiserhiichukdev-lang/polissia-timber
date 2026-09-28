import type { ProductSlug } from './contact'

/**
 * Parquet price list, transcribed from the company sheet
 * (docs/price-list-2026-09.jpg).
 *
 * Every line on the sheet is the same build — 14 mm overall with a 3.2 mm oak
 * wear layer — so construction is stated once and each format only varies by
 * width, length and grade. Prices are EUR per square metre, the unit parquet is
 * sold in; the sheet itself prints only "€" (TO CONFIRM).
 *
 * Sizes, grade codes and prices are language-neutral, so this file is shared by
 * every locale; grade names and units are translated in the dictionaries.
 */

export type GradeCode = 'AB' | 'C'

export const gradeCodes: GradeCode[] = ['AB', 'C']

/** How the code is printed: the sheet writes the upper grade as "A-B". */
export const gradeDisplay: Record<GradeCode, string> = { AB: 'A-B', C: 'C' }

export const construction = {
  /** Overall board thickness, mm. */
  thickness: 14,
  /** Oak top layer, mm. */
  wearLayer: 3.2,
} as const

export interface SizeOption {
  width: number
  /**
   * `range`: random lengths between the two figures (planks).
   * `fixed`: the block lengths produced (chevron and herringbone).
   */
  lengths: number[]
  lengthKind: 'range' | 'fixed'
  /** EUR per m². */
  prices: Record<GradeCode, number>
}

export const priceList: Record<ProductSlug, SizeOption[]> = {
  'oak-chevron-parquet': [
    { width: 125, lengths: [500, 600, 700], lengthKind: 'fixed', prices: { AB: 53, C: 50 } },
  ],
  'oak-plank-flooring': [
    { width: 125, lengths: [600, 1400], lengthKind: 'range', prices: { AB: 42.5, C: 38 } },
    { width: 145, lengths: [800, 1600], lengthKind: 'range', prices: { AB: 44.5, C: 39 } },
    { width: 195, lengths: [1700, 2500], lengthKind: 'range', prices: { AB: 52.5, C: 40 } },
  ],
  'oak-herringbone-parquet': [
    { width: 125, lengths: [500, 600, 700], lengthKind: 'fixed', prices: { AB: 43.5, C: 39 } },
  ],
}

const pricesOf = (sizes: SizeOption[]): number[] =>
  sizes.flatMap((size) => gradeCodes.map((grade) => size.prices[grade]))

/** Cheapest line of one format — the "from" figure on its card. */
export const lowestPrice = (slug: ProductSlug): number => Math.min(...pricesOf(priceList[slug]))

/** Most expensive line of one format — the `highPrice` of its structured data. */
export const highestPrice = (slug: ProductSlug): number => Math.max(...pricesOf(priceList[slug]))

/** Cheapest line on the whole sheet. */
export const priceFrom = Math.min(...Object.values(priceList).flatMap(pricesOf))

/** 1800 → "1 800" (thin space, the convention on European price lists). */
export const formatNumber = (value: number): string =>
  value.toLocaleString('en-GB').replace(/,/g, ' ')

/**
 * 3.2 → "3.2" or "3,2". Hand-rolled rather than `Intl`, because the prerender
 * (Node's ICU) and the visitor's browser can disagree on separators, and any
 * difference is a hydration mismatch.
 */
export const formatDecimal = (value: number, decimalComma: boolean): string => {
  const text = String(value)
  return decimalComma ? text.replace('.', ',') : text
}

/** 52.5 → "€52.50" in English, "52,50 €" elsewhere (no-break space). */
export const formatEuro = (value: number, decimalComma: boolean): string => {
  const amount = value.toFixed(2)
  return decimalComma ? `${amount.replace('.', ',')} €` : `€${amount}`
}
