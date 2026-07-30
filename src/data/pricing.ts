/**
 * Oak price list, transcribed from the company's own sheet
 * (public/specifications/document_2.jpg).
 *
 * `list` is the printed price, `current` the revised handwritten price where
 * one is given. Sections, lengths and grade numerals are language-neutral, so
 * this file is shared by both locales; only the "mixed grade" label and the
 * units are translated.
 */

export type GradeCode = 'I' | 'II' | 'III' | 'IV' | 'mixed'

export interface GradePrice {
  grade: GradeCode
  list: number
  current: number | null
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
      { grade: 'I', list: 1800, current: 2650 },
      { grade: 'II', list: 1550, current: 2300 },
      { grade: 'III', list: 850, current: 1800 },
      // Grade IV is struck through on the source sheet — quoted on request.
      { grade: 'IV', list: 650, current: null },
    ],
  },
  {
    width: 170,
    thickness: 30,
    lengths: [1040, 1240, 1440, 1640],
    prices: [
      { grade: 'I', list: 1000, current: 1350 },
      { grade: 'II', list: 850, current: 1200 },
      { grade: 'III', list: 700, current: 1050 },
    ],
  },
  {
    width: 150,
    thickness: 30,
    lengths: [740, 840, 1040, 1240, 1440],
    prices: [
      { grade: 'I', list: 950, current: 1300 },
      { grade: 'II', list: 780, current: 1130 },
      { grade: 'III', list: 650, current: 1000 },
    ],
  },
  {
    width: 115,
    thickness: 30,
    lengths: [630, 830, 1030, 1230],
    prices: [{ grade: 'mixed', list: 500, current: 800 }],
  },
  {
    width: 80,
    thickness: 30,
    lengths: [320, 420, 520, 620],
    prices: [{ grade: 'mixed', list: 400, current: 700 }],
  },
]

/** Lowest published oak price, used for the "from €…" figures. */
export const oakPriceFrom = 400

/** 1800 → "1 800" (thin space, the convention on European price lists). */
export const formatNumber = (value: number): string =>
  value.toLocaleString('en-GB').replace(/,/g, ' ')
