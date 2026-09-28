import type { IconName } from '../components/ui/Icon'
import type { DestinationCode } from '../data/destinations'
import type { PhotoId, VideoId } from '../data/media'
import type { GradeCode } from '../data/pricing'
import type { ProductSlug } from '../data/contact'

export type Locale = 'en' | 'de' | 'pl' | 'uk'

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

/** One export document or compliance scheme, with its current standing. */
export interface ComplianceDocument {
  icon: IconName
  title: string
  body: string
  /** Short chip, e.g. "Issued per shipment" — never a bare claim of holding it. */
  status: string
}

/** A metric shown as a number + unit, so the figure carries the sentence. */
export interface Metric {
  value: string
  unit: string
  label: string
  detail: string
}

export interface LeadTime {
  destination: string
  days: string
  mode: string
}

/** An anonymised past shipment, quoted as evidence rather than a promise. */
export interface ShipmentCase {
  volume: string
  spec: string
  destination: string
  terms: string
  days: string
}

export interface FaqItem {
  question: string
  answer: string
}

/** How a grade is presented: the code comes from the price list, the rest is copy. */
export interface GradeText {
  /** Trade name printed beside the code, e.g. "Select". */
  name: string
  /** One line for the picker. */
  summary: string
  /** What the face of the board looks like in this grade. */
  traits: string[]
}

/**
 * Copy for one parquet format. Sizes, prices and construction figures are not
 * here — they come from `src/data/pricing.ts`, so they cannot drift between
 * languages.
 */
export interface ProductText {
  name: string
  /** Short form for the format picker and chips, e.g. "Chevron". */
  shortName: string
  kicker: string
  category: string
  tagline: string
  shortDescription: string
  description: string[]
  advantages: string[]
  specs: SpecGroupText[]
}

export interface MediaText {
  alt: string
  caption: string
}

/**
 * Every translatable string on the site. Each locale file satisfies this
 * interface, so a missing translation is a type error rather than a blank page.
 */
export interface Dictionary {
  locale: Locale
  htmlLang: string
  /** Full language name, shown in the language menu. */
  label: string
  /** Two-letter code shown in the header toggle. */
  short: string
  /** Prices and measurements use a decimal comma (52,50 € · 3,2 mm). */
  decimalComma: boolean

  meta: {
    homeTitle: string
    homeDescription: string
    notFoundTitle: string
    notFoundDescription: string
  }

  nav: { key: string; label: string; href: string }[]

  common: {
    requestQuote: string
    /** Header CTA. Must stay short — the top bar has eight nav items beside it. */
    quoteShort: string
    viewProducts: string
    viewProduct: string
    priceFrom: string
    skipToContent: string
    openMenu: string
    closeMenu: string
    language: string
    home: string
    products: string
    perSquareMetre: string
    priceUnit: string
    openImage: string
    closeViewer: string
    previousImage: string
    nextImage: string
    viewFullSize: string
    playVideo: string
    pauseVideo: string
    video: string
    mm: string
    logoSub: string
    whatsapp: string
    whatsappCta: string
  }

  /** Messages the WhatsApp chat opens with. */
  whatsapp: {
    general: string
    /** "…{product}, grade {grade}, {size} — {price} per m²…" */
    selection: string
  }

  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    lead: string
    insetCaption: string
    /** Label over the lowest price on the sheet. */
    priceBadge: string
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

  /** The format / grade / size picker that opens the home page. */
  catalog: {
    eyebrow: string
    title: string
    lead: string
    footnote: string
    formatStep: string
    gradeStep: string
    sizeStep: string
    priceLabel: string
    priceNote: string
    specs: { thickness: string; wearLayer: string; width: string; length: string }
    randomLengths: string
    fixedLengths: string
    details: string
  }

  priceList: {
    eyebrow: string
    title: string
    lead: string
    size: string
    footnote: string
  }

  grades: Record<GradeCode, GradeText>

  process: {
    eyebrow: string
    title: string
    lead: string
    steps: (LabelledText & { icon: IconName })[]
    callout: LabelledText & { action: string }
    capacityTitle: string
    capacityLead: string
    capacity: Metric[]
    capacityNote: string
  }

  /**
   * EUDR and the export document set. This is the first filter an EU importer
   * applies, so it sits directly under the catalogue.
   */
  compliance: {
    eyebrow: string
    title: string
    lead: string
    eudr: {
      badge: string
      title: string
      body: string
      points: string[]
      note: string
    }
    documentsTitle: string
    documents: ComplianceDocument[]
    disclaimer: string
  }

  faq: {
    eyebrow: string
    title: string
    lead: string
    items: FaqItem[]
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
    /** Points at the chevron page, which holds the range of finishes. */
    action: string
  }

  exportSection: {
    eyebrow: string
    title: string
    lead: string
    points: (LabelledText & { icon: IconName })[]
    /** Heading for the shipping map. */
    panelTitle: string
    /** "…Delivery terms available: {terms}." */
    panelBody: string
    cta: string
    /** Destination country names, keyed to `src/data/destinations.ts`. */
    countries: Record<DestinationCode, string>
    /** Marker for the site the routes start from. */
    originLabel: string
    /** Reference ring label, e.g. "{km} km". */
    ringLabel: string
    /** Caveat about the rings being straight-line, not road, distance. */
    mapNote: string
    loadsTitle: string
    loadsLead: string
    loads: Metric[]
    leadTimesTitle: string
    leadTimesLead: string
    leadTimes: LeadTime[]
    leadTimeColumns: { destination: string; days: string; mode: string }
    leadTimeNote: string
    casesTitle: string
    casesLead: string
    cases: ShipmentCase[]
    caseLabels: { volume: string; spec: string; destination: string; terms: string; days: string }
  }

  contact: {
    eyebrow: string
    title: string
    lead: string
    labels: {
      email: string
      phone: string
      whatsapp: string
      production: string
      hours: string
      languages: string
    }
    values: {
      address: string
      hours: string
      languages: string
    }
    whatsappTitle: string
    whatsappBody: string
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
    grade: string
    gradeAny: string
    dimensions: string
    dimensionsPlaceholder: string
    volume: string
    volumePlaceholder: string
    finish: string
    finishOptions: { any: string; unfinished: string; oiled: string; lacquered: string }
    destination: string
    destinationPlaceholder: string
    incoterms: string
    incotermsAny: string
    message: string
    messagePlaceholder: string
    submit: string
    sending: string
    required: string
    privacy: string
    /** Company is optional, so it has no error message. */
    errors: {
      name: string
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
      grade: string
      dimensions: string
      volume: string
      finish: string
      destination: string
      incoterms: string
      notSpecified: string
    }
  }

  productPage: {
    aboutTitle: string
    configureTitle: string
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
    seePriceList: string
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
  photos: Record<PhotoId, MediaText>
  videos: Record<VideoId, MediaText>
  finishes: { id: PhotoId; name: string; tone: string }[]
}
