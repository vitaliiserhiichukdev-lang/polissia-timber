/**
 * Language-neutral company facts: brand name, contact channels, delivery terms.
 *
 * Translated text — address wording, office hours, spoken languages — lives in
 * the locale dictionaries, not here.
 */

export const brand = {
  name: 'Polissia Timber',
  /**
   * TO CONFIRM — the registered entity name, exactly as in the register.
   *
   * Held equal to the trading name on purpose: this goes into the footer
   * copyright and into `Organization` / `AggregateOffer` structured data, where
   * Google reads it as the company's official name. Asserting a legal form the
   * business may not have — "LLC" when it is a sole trader — is a claim about
   * registration, so the neutral value stands until the real one is supplied.
   */
  legalName: 'Polissia Timber',
  email: 'export@polissiatimber.com',
  /** Grouped for reading; `phoneHref` is the dialable form for `tel:`. */
  phone: '+380 99 130 74 07',
  phoneHref: '+380991307407',
  site: 'https://polissiatimber.com',
  incoterms: ['EXW', 'FCA', 'CPT', 'DAP'],
} as const

export type ProductSlug = 'oak-edged-boards' | 'pine-construction-timber' | 'oak-parquet-boards'

export const productSlugs: ProductSlug[] = [
  'oak-edged-boards',
  'pine-construction-timber',
  'oak-parquet-boards',
]
