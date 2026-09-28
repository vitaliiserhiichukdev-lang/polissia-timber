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
  /**
   * WhatsApp account, in the form wa.me expects: country code and number,
   * digits only. TO CONFIRM — currently the office phone.
   */
  whatsapp: '380991307407',
  site: 'https://polissiatimber.com',
  incoterms: ['EXW', 'FCA', 'CPT', 'DAP'],
} as const

/** A wa.me link, optionally opening the chat with a pre-filled message. */
export const whatsappHref = (text?: string): string =>
  `https://wa.me/${brand.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

/**
 * One product page per parquet format. The order is the order of the catalogue,
 * the footer and the format picker.
 */
export type ProductSlug = 'oak-chevron-parquet' | 'oak-plank-flooring' | 'oak-herringbone-parquet'

export const productSlugs: ProductSlug[] = [
  'oak-chevron-parquet',
  'oak-plank-flooring',
  'oak-herringbone-parquet',
]
