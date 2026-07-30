import type { IconName } from '../components/ui/Icon'
import type { PhotoCategory, PhotoId } from '../data/media'
import type { GradeCode } from '../data/pricing'
import type { ProductSlug } from '../data/contact'

export type Locale = 'en' | 'uk'

export interface LabelledText {
  title: string
  body: string
}

export interface KeyFact {
  label: string
  value: string
}

export interface SpecGroupText {
  group: string
  items: KeyFact[]
}

export interface GradeText {
  code: GradeCode
  name: string
  allowances: string[]
}

export interface GradeBandText {
  widths: string
  grades: GradeText[]
}

export interface ProductText {
  name: string
  kicker: string
  category: string
  species: string
  tagline: string
  shortDescription: string
  description: string[]
  keyFacts: KeyFact[]
  priceNote: string
  sizesSummary: string
  gradesSummary: string
  advantages: string[]
  specs: SpecGroupText[]
  gradeBands: GradeBandText[]
  notPermitted: string[]
}

export interface PhotoText {
  alt: string
  caption: string
}

/**
 * Every translatable string on the site. `en.ts` and `uk.ts` both satisfy this
 * interface, so a missing translation is a type error rather than a blank page.
 */
export interface Dictionary {
  locale: Locale
  htmlLang: string
  /** Full language name, shown in the language menu. */
  label: string
  /** Two-letter code shown in the header toggle. */
  short: string

  meta: {
    homeTitle: string
    homeDescription: string
    notFoundTitle: string
    notFoundDescription: string
  }

  nav: { key: string; label: string; href: string }[]

  common: {
    requestQuote: string
    viewProducts: string
    viewDetails: string
    viewProduct: string
    onRequest: string
    priceFrom: string
    pricing: string
    quotedPerSpecification: string
    gradeBased: string
    skipToContent: string
    openMenu: string
    closeMenu: string
    language: string
    home: string
    products: string
    perCubicMetre: string
    priceUnit: string
    openImage: string
    closeViewer: string
    previousImage: string
    nextImage: string
    viewFullSize: string
    mm: string
    logoSub: string
  }

  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    lead: string
    insetCaption: string
    scrollLabel: string
    imageAlt: string
  }

  stats: { value: string; label: string; detail: string }[]

  about: {
    eyebrow: string
    title: string
    lead: string
    action: string
    quote: string
    highlights: LabelledText[]
    tags: string[]
  }

  catalog: {
    eyebrow: string
    title: string
    lead: string
    action: string
    footnote: string
    cardLabels: {
      woodType: string
      sizes: string
      grade: string
    }
  }

  process: {
    eyebrow: string
    title: string
    lead: string
    steps: (LabelledText & { icon: IconName })[]
    callout: LabelledText & { action: string }
  }

  advantages: {
    eyebrow: string
    title: string
    lead: string
    items: (LabelledText & { icon: IconName })[]
  }

  gallery: {
    eyebrow: string
    title: string
    lead: string
    filterLabel: string
    filters: Record<'all' | PhotoCategory, string>
    /** e.g. "{shown} of {total} photos" */
    count: string
  }

  exportSection: {
    eyebrow: string
    title: string
    lead: string
    points: (LabelledText & { icon: IconName })[]
    panelTitle: string
    /** "…Delivery terms available: {terms}." */
    panelBody: string
    cta: string
    markets: string[]
  }

  contact: {
    eyebrow: string
    title: string
    lead: string
    labels: {
      email: string
      phone: string
      production: string
      hours: string
      languages: string
    }
    values: {
      address: string
      hours: string
      languages: string
    }
    /** "Prefer email? Write directly to {email} …" — split around the address. */
    noteBefore: string
    noteAfter: string
  }

  form: {
    name: string
    namePlaceholder: string
    company: string
    companyPlaceholder: string
    country: string
    countryPlaceholder: string
    email: string
    emailPlaceholder: string
    phone: string
    phonePlaceholder: string
    product: string
    productPlaceholder: string
    productMixed: string
    volume: string
    volumePlaceholder: string
    message: string
    messagePlaceholder: string
    submit: string
    sending: string
    required: string
    privacy: string
    errors: {
      name: string
      company: string
      email: string
      message: string
    }
    sentTitle: string
    sentBody: string
    mailTitle: string
    /** "…we opened a pre-filled message… write to {email}." */
    mailBody: string
    sendAnother: string
    failed: string
    mailSubject: string
    mailFields: {
      name: string
      company: string
      country: string
      email: string
      phone: string
      product: string
      volume: string
      notSpecified: string
    }
  }

  productPage: {
    aboutTitle: string
    specsEyebrow: string
    specsTitle: string
    specsLead: string
    pricesEyebrow: string
    pricesTitle: string
    pricesLead: string
    gradesEyebrow: string
    gradesTitle: string
    gradesLead: string
    finishesEyebrow: string
    finishesTitle: string
    finishesLead: string
    inquiryEyebrow: string
    inquiryTitle: string
    inquiryLead: string
    relatedEyebrow: string
    relatedTitle: string
    priceInformation: string
    seePriceList: string
    permitted: string
    notPermitted: string
    availableLengths: string
    listPrice: string
    currentPrice: string
    gradeColumn: string
    gradeLabel: string
    mixedGrade: string
    priceFootnote: string
  }

  footer: {
    products: string
    company: string
    exportOffice: string
    claim: string
    rights: string
  }

  notFound: {
    eyebrow: string
    title: string
    lead: string
    backHome: string
    contactCta: string
  }

  products: Record<ProductSlug, ProductText>
  photos: Record<PhotoId, PhotoText>
  finishes: { id: PhotoId; name: string; tone: string }[]
}
