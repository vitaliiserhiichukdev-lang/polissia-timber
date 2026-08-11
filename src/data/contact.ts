/**
 * Language-neutral company facts: brand name, contact channels, delivery terms.
 *
 * The contact block is still a PLACEHOLDER — replace the e-mail, phone and
 * domain with the real ones before going live. Translated text (address
 * wording, office hours, spoken languages) lives in the locale dictionaries.
 */

export const brand = {
  name: 'Polissia Timber',
  legalName: 'Polissia Timber LLC',
  // TO CONFIRM — placeholder contact block
  email: 'export@polissiatimber.com',
  phone: '+380 44 000 00 00',
  phoneHref: '+380440000000',
  site: 'https://polissiatimber.com',
  incoterms: ['EXW', 'FCA', 'CPT', 'DAP'],
} as const

export type ProductSlug = 'oak-edged-boards' | 'pine-construction-timber' | 'oak-parquet-boards'

export const productSlugs: ProductSlug[] = [
  'oak-edged-boards',
  'pine-construction-timber',
  'oak-parquet-boards',
]
