/**
 * Oak price list, transcribed from the company's own sheet
 * (public/specifications/document_2.jpg).
 *
 * `price` is the current quote — the revised handwritten figure where the sheet
 * gives one, otherwise the printed one. `supersededPrice` keeps the original
 * printed figure for reference; it is not shown on the site.
 *
 * Sections, lengths and grade numerals are language-neutral, so this file is
 * shared by both locales; only the "mixed grade" label and the units are
 * translated.
 */

export type GradeCode = 'I' | 'II' | 'III' | 'IV' | 'mixed'

export interface GradePrice {
  grade: GradeCode
  /** Current price per m³, or null when the sheet no longer quotes the grade. */
  price: number | null
  /** Printed figure the current price replaced — kept as provenance only. */
  supersededPrice?: number
}

export interface PriceGroup {
  /** Section label, e.g. "230 × 30 mm" — rendered with a translated unit. */
  width: number
  thickness: number
  lengths: number[]
  prices: GradePrice[]
}

export const oakPriceGroups: PriceGroup[] = [
  {
    width: 230,
    thickness: 30,
    lengths: [2050, 2250, 2350, 2450],
    prices: [
      { grade: 'I', price: 2650, supersededPrice: 1800 },
      { grade: 'II', price: 2300, supersededPrice: 1550 },
      { grade: 'III', price: 1800, supersededPrice: 850 },
      // Grade IV is struck through on the source sheet — quoted on request.
      { grade: 'IV', price: null, supersededPrice: 650 },
    ],
  },
  {
    width: 170,
    thickness: 30,
    lengths: [1040, 1240, 1440, 1640],
    prices: [
      { grade: 'I', price: 1350, supersededPrice: 1000 },
      { grade: 'II', price: 1200, supersededPrice: 850 },
      { grade: 'III', price: 1050, supersededPrice: 700 },
    ],
  },
  {
    width: 150,
    thickness: 30,
    lengths: [740, 840, 1040, 1240, 1440],
    prices: [
      { grade: 'I', price: 1300, supersededPrice: 950 },
      { grade: 'II', price: 1130, supersededPrice: 780 },
      { grade: 'III', price: 1000, supersededPrice: 650 },
    ],
  },
  {
    width: 115,
    thickness: 30,
    lengths: [630, 830, 1030, 1230],
    prices: [{ grade: 'mixed', price: 800, supersededPrice: 500 }],
  },
  {
    width: 80,
    thickness: 30,
    lengths: [320, 420, 520, 620],
    prices: [{ grade: 'mixed', price: 700, supersededPrice: 400 }],
  },
]

/** Lowest published oak price, used for the "from €…" figures. */
export const oakPriceFrom = 700

/** 1800 → "1 800" (thin space, the convention on European price lists). */
export const formatNumber = (value: number): string =>
  value.toLocaleString('en-GB').replace(/,/g, ' ')
