import type { Dictionary } from './types'
import { brand } from '../data/contact'
import { formatEuro, highestPrice, priceFrom } from '../data/pricing'

const from = formatEuro(priceFrom, false)
const top = formatEuro(highestPrice('oak-chevron-parquet'), false)

export const en: Dictionary = {
  locale: 'en',
  htmlLang: 'en',
  label: 'English',
  short: 'EN',
  decimalComma: false,

  meta: {
    homeTitle: `${brand.name} — Engineered Oak Parquet from Ukraine`,
    homeDescription: `Ukrainian producer and exporter of engineered oak parquet: plank, chevron and herringbone in grades A-B and C, 14 mm with a 3.2 mm oak wear layer. Price list from ${from} per m², delivery across Europe.`,
    notFoundTitle: `Page not found | ${brand.name}`,
    notFoundDescription: 'The page you were looking for does not exist.',
  },

  nav: [
    { key: 'products', label: 'Parquet', href: '/#products' },
    { key: 'compliance', label: 'Compliance', href: '/#compliance' },
    { key: 'about', label: 'About', href: '/#about' },
    { key: 'production', label: 'Production', href: '/#production' },
    { key: 'gallery', label: 'Gallery', href: '/#gallery' },
    { key: 'export', label: 'Export', href: '/#export' },
    { key: 'faq', label: 'FAQ', href: '/#faq' },
    { key: 'contact', label: 'Contact', href: '/#contact' },
  ],

  common: {
    requestQuote: 'Request a quote',
    quoteShort: 'Get a quote',
    viewProducts: 'Choose parquet',
    viewProduct: 'View format',
    priceFrom: 'from',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    home: 'Home',
    products: 'Parquet',
    perSquareMetre: '/ m²',
    priceUnit: 'EUR / m²',
    openImage: 'Open image',
    closeViewer: 'Close image viewer',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    viewFullSize: 'View full size',
    playVideo: 'Play video',
    pauseVideo: 'Pause video',
    video: 'Video',
    mm: 'mm',
    logoSub: 'Oak parquet · Export',
    whatsapp: 'WhatsApp',
    whatsappCta: 'Message us on WhatsApp',
  },

  whatsapp: {
    general:
      'Hello! I am interested in your oak parquet. Could you send me the current price list and availability?',
    selection:
      'Hello! I am interested in {product}, grade {grade}, {size} — {price} per m² on your price list. Please confirm availability and delivery to: ',
  },

  hero: {
    eyebrow: 'Ukraine · Parquet producer & exporter',
    titleLead: 'Engineered oak parquet',
    titleAccent: 'plank, chevron, herringbone',
    lead: 'European oak on a 14 mm board with a 3.2 mm wear layer, graded A-B or C and priced openly per square metre. Produced, finished and packed by us, delivered across Europe.',
    insetCaption: 'Chevron, fitted',
    priceBadge: 'Price list from',
    imageAlt: 'Showroom wall of oak chevron and herringbone parquet panels',
  },

  stats: [
    { value: '3', label: 'Formats', detail: 'Plank, chevron and herringbone.' },
    { value: '2', label: 'Grades', detail: 'A-B Select and C Rustic, priced separately.' },
    { value: '3.2 mm', label: 'Oak wear layer', detail: 'On a 14 mm board, thick enough to sand and refinish.' },
    { value: '12', label: 'Finishes', detail: 'Chevron tones from whitewashed to espresso.' },
  ],

  about: {
    eyebrow: 'About the company',
    title: 'A Ukrainian parquet producer built for European buyers',
    lead: 'We make engineered oak flooring in three formats and two grades — and control the whole route from the oak lamella to the loaded truck.',
    action: 'See how we produce',
    quote:
      '“We value long-term partnerships and guarantee high product quality on every order.”',
    highlights: [
      {
        title: 'Production and export under one roof',
        body: 'We produce the boards, finish them and ship them ourselves. That means one point of responsibility for your order — not a chain of intermediaries between the factory and your warehouse.',
      },
      {
        title: 'Graded board by board',
        body: 'Every board is graded A-B or C before it is packed, so a repeat order in the same grade gives the same floor — batch after batch, site after site.',
      },
      {
        title: 'Export-ready to European requirements',
        body: 'Packed by format and grade in cartons on pallets, marked and documented, so a consignment clears and unloads without surprises.',
      },
    ],
    tags: ['Own production', 'Open price list', 'Export documentation'],
  },

  catalog: {
    eyebrow: 'Parquet range',
    title: 'Choose format, grade and size',
    lead: 'Three formats in two grades, all on the same 14 mm engineered board. Pick a combination to see its price per square metre, its sizes and footage from our line — then send it to us as a quote or a WhatsApp message.',
    footnote:
      'Other widths, lengths, finishes and grade mixes are produced to order — send your specification and we will confirm feasibility and price.',
    formatStep: 'Format',
    gradeStep: 'Grade',
    sizeStep: 'Size',
    priceLabel: 'Price',
    priceNote: 'Per m², from the current price list. The final price is confirmed on the offer.',
    specs: { thickness: 'Thickness', wearLayer: 'Wear layer', width: 'Width', length: 'Length' },
    randomLengths: 'random lengths',
    fixedLengths: 'block lengths',
    details: 'All about {product}',
  },

  priceList: {
    eyebrow: 'Price list',
    title: 'Every format and grade at a glance',
    lead: 'The full sheet, line for line, in euro per square metre. Every board is 14 mm with a 3.2 mm oak wear layer.',
    size: 'Size',
    footnote:
      'Prices are per square metre and indicative: the final figure depends on volume, finish and delivery terms, and is confirmed on the offer.',
  },

  // TO CONFIRM — grade descriptions are the usual trade reading of A-B and C;
  // replace them with the company's own grading rules once written down.
  grades: {
    AB: {
      name: 'Select',
      summary: 'Calm, even grain for a clean, uniform floor.',
      traits: [
        'Uniform colour with little variation between boards',
        'Small sound knots only, and few of them',
        'Minimal sapwood',
        'Suits modern and minimalist interiors',
      ],
    },
    C: {
      name: 'Rustic',
      summary: 'Lively grain, knots and colour play — the most natural look.',
      traits: [
        'Pronounced grain and natural colour variation',
        'Larger sound knots and filled cracks',
        'Sapwood accepted',
        'A characterful floor at a lower price',
      ],
    },
  },

  /**
   * REVIEW BEFORE PUBLISHING. This block makes regulatory statements. Every
   * line must be confirmed by the company — an EUDR or certification claim the
   * exporter cannot substantiate blocks the buyer's customs clearance and is a
   * liability for both sides. Documents whose status is still `TBC` are hidden
   * automatically; see `src/data/pending.ts`.
   */
  compliance: {
    eyebrow: 'Compliance and documentation',
    title: 'EUDR-ready: geolocation data and DDS reference per consignment',
    lead: 'Since the EU Deforestation Regulation applies, an importer cannot place wood flooring on the EU market without plot-level origin data and a Due Diligence Statement. We prepare that pack with the shipment, not after you ask for it.',
    eudr: {
      badge: 'EUDR',
      title: 'What you receive with every consignment',
      body: 'Regulation (EU) 2023/1115 makes the importer responsible for proving the oak is deforestation-free and legally harvested. That proof has to come from the supplier, so we assemble it as part of the order rather than treating it as paperwork at the end.',
      points: [
        'Geolocation coordinates of the harvesting plots for the batch',
        'Species, volume and country of harvest for the batch, matching the packing list',
        'Legality evidence for the harvest, traceable from the log to the pallet',
        'Due Diligence Statement reference for your EU TRACES submission',
      ],
      note: 'Send the specification and destination and we will confirm the exact document set for your import route before you order.',
    },
    documentsTitle: 'Export document set',
    documents: [
      {
        icon: 'box',
        title: 'ISPM-15 heat treatment',
        body: 'Marking for the wooden pallets and dunnage the cartons ship on.',
        status: 'Issued per shipment',
      },
      {
        icon: 'globe',
        title: 'EUR.1 / origin declaration',
        body: 'Preferential origin proof under the EU–Ukraine agreement, so the goods clear at the preferential rate.',
        status: 'Issued per shipment',
      },
      {
        icon: 'stack',
        title: 'Packing list and specification',
        body: 'Format, size, grade and square metres per pallet, matching the carton labels, so goods-in can check a delivery against the invoice.',
        status: 'With every load',
      },
      {
        // TO CONFIRM — do not publish until the certificate number is on file.
        icon: 'leaf',
        title: 'FSC / PEFC chain of custody',
        body: 'Certified material on request, quoted separately from uncertified stock.',
        status: 'TBC',
      },
    ],
    disclaimer:
      'Document requirements differ by member state and import route. Nothing here replaces your own due diligence — we supply the evidence, you file the statement.',
  },

  process: {
    eyebrow: 'Quality and production',
    title: 'Four controlled stages, from lamella to pallet',
    lead: 'Every board passes the same line and the same checks before it is packed. The frames and clips below are from our own production.',
    steps: [
      {
        icon: 'oak',
        title: 'Oak top layer',
        body: 'Oak lamellas are selected by grain and colour and bonded as a 3.2 mm wear layer onto a stable base, making a 14 mm engineered board.',
      },
      {
        icon: 'factory',
        title: 'Cutting and profiling',
        body: 'Boards are cut to format — random-length planks, square-ended herringbone blocks, chevron blanks with angled ends — and profiled so the joints close tight.',
      },
      {
        icon: 'layers',
        title: 'Surface finishing',
        body: 'Sanding, brushing and a natural or toned finish on the roller line, so every board in an order carries the same surface.',
      },
      {
        icon: 'box',
        title: 'Grading and packing',
        body: 'Each board is graded A-B or C, then packed in cartons by format and grade, palletised and marked for fast goods-in.',
      },
    ],
    callout: {
      title: 'An open price list, not “price on request”',
      body: 'Every format, size and grade has a published price per square metre. What you see in the picker is the line you will be quoted.',
      action: 'See the price list',
    },
    capacityTitle: 'Production capacity',
    capacityLead:
      'The figures worth checking before you commit a season of projects to a supplier.',
    // TO CONFIRM — production must supply these before launch. Metrics left at
    // `TBC` do not render.
    capacity: [
      {
        value: 'TBC',
        unit: 'm² / month',
        label: 'Parquet output',
        detail: 'Across all three formats and both grades.',
      },
      {
        value: 'TBC',
        unit: 'm² / shift',
        label: 'Finishing line',
        detail: 'Boards sanded and finished per shift.',
      },
      {
        value: '3',
        unit: 'formats',
        label: 'Plank, chevron, herringbone',
        detail: 'All on one 14 mm engineered construction.',
      },
      {
        value: '2',
        unit: 'grades',
        label: 'A-B and C',
        detail: 'Graded board by board before packing.',
      },
    ],
    capacityNote:
      'Every board is graded before packing, so a repeat order in the same grade gives the same floor.',
  },

  advantages: {
    eyebrow: 'Our advantages',
    title: 'Why European buyers work with us',
    lead: 'Everything below is a working promise we are measured on: quality, construction, logistics and price.',
    items: [
      {
        icon: 'oak',
        title: 'European oak, Ukrainian production',
        body: 'Dense, slow-grown oak with an even grain for the wear layer — the material that gives a floor its looks and its lifespan.',
      },
      {
        icon: 'shield',
        title: 'Engineered for stability',
        body: 'A 14 mm board with a 3.2 mm oak wear layer: it moves less than solid oak with the seasons, and the top layer is thick enough to sand and refinish.',
      },
      {
        icon: 'layers',
        title: 'Three formats, one construction',
        body: 'Plank, chevron and herringbone share the same board build, so formats can meet in one project without a step at the threshold.',
      },
      {
        icon: 'truck',
        title: 'Reliable logistics',
        body: 'Timely delivery throughout Europe by full truck or container, with packing and export paperwork prepared before dispatch.',
      },
      {
        icon: 'tag',
        title: 'Transparent pricing',
        body: 'A published price per square metre for every format, size and grade — direct from the producer, with no reseller margin.',
      },
      {
        icon: 'partners',
        title: 'Individual approach',
        body: 'Widths, lengths, finishes and packing adapted to your project. We value long-term partnerships and treat every order as part of one.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'Our parquet, photographed and filmed',
    lead: 'The showroom, fitted floors and our own finishing line — photos and short clips from production, not a stock library.',
    action: 'See all twelve chevron finishes',
  },

  exportSection: {
    eyebrow: 'Export and delivery',
    title: 'Built around European supply chains',
    lead: 'Competitive prices and timely delivery throughout Europe, with stable volumes you can plan production around.',
    points: [
      {
        icon: 'truck',
        title: 'European delivery',
        body: 'Competitive prices and timely delivery throughout Europe — road freight for EU destinations, containers for onward overseas shipment.',
      },
      {
        icon: 'stack',
        title: 'Stable supply chains',
        body: 'Stable volumes backed by our own production, with agreed monthly quantities for contract customers.',
      },
      {
        icon: 'globe',
        title: 'International cooperation',
        body: 'Documentation, grading language and packing prepared for international trade, with communication in English, German and Polish.',
      },
      {
        icon: 'partners',
        title: 'Long-term partnerships',
        body: 'We value long-term partnerships and guarantee high product quality, professional service and reliable execution of every order.',
      },
    ],
    panelTitle: 'Destinations we ship to',
    panelBody: 'Full-truck and container loads across the EU. Delivery terms available: {terms}.',
    cta: 'Discuss a delivery',
    countries: {
      PL: 'Poland',
      DE: 'Germany',
      CZ: 'Czechia',
      SK: 'Slovakia',
      AT: 'Austria',
      HU: 'Hungary',
      RO: 'Romania',
      IT: 'Italy',
      NL: 'Netherlands',
      BE: 'Belgium',
      FR: 'France',
      ES: 'Spain',
      LT: 'Lithuania',
      LV: 'Latvia',
      EE: 'Estonia',
      DK: 'Denmark',
    },
    originLabel: 'Production',
    ringLabel: '{km} km',
    mapNote:
      'Rings are straight-line distance from production, not road distance — they show reach, not a quote. Ask for a lead time to your exact address and we will confirm it.',
    loadsTitle: 'What fits in a load',
    loadsLead:
      'Freight is charged by the load, not the square metre, so the cheapest order is usually a full one.',
    // TO CONFIRM — square metres per load depend on pallet format. Hidden while `TBC`.
    loads: [
      {
        value: 'TBC',
        unit: 'm²',
        label: 'Full truck',
        detail: 'Standard 13.6 m curtainsider of palletised cartons — the usual EU road shipment.',
      },
      {
        value: 'TBC',
        unit: 'm²',
        label: "40 ft container",
        detail: 'For onward sea freight or destinations beyond road range.',
      },
      {
        // TO CONFIRM — commercial decision, not a measurement.
        value: 'TBC',
        unit: 'm²',
        label: 'Minimum order',
        detail: 'Below a full load we consolidate with another shipment to the same direction.',
      },
    ],
    leadTimesTitle: 'Lead times and Incoterms',
    leadTimesLead:
      'Counted from confirmed order and cleared payment terms to unloading at your address.',
    // TO CONFIRM — route-specific; hidden until logistics confirms each figure.
    leadTimes: [
      { destination: 'Poland', days: 'TBC', mode: 'Road, full truck' },
      { destination: 'Germany', days: 'TBC', mode: 'Road, full truck' },
      { destination: 'Czechia / Slovakia', days: 'TBC', mode: 'Road, full truck' },
      { destination: 'Italy', days: 'TBC', mode: 'Road, full truck' },
      { destination: 'Netherlands / Belgium', days: 'TBC', mode: 'Road, full truck' },
      { destination: 'Overseas', days: 'TBC', mode: "Sea, 40 ft container" },
    ],
    leadTimeColumns: { destination: 'Destination', days: 'Transit', mode: 'Mode' },
    leadTimeNote:
      'Border crossing and customs clearance are included in the figures above. Delivery terms available: EXW, FCA, CPT and DAP — DAP puts the goods at your gate with duties handled.',
    casesTitle: 'Recent shipments',
    casesLead: 'Anonymised, but real: the formats, volumes and routes we actually load.',
    // TO CONFIRM — populate from dispatch records. Hidden while set to `TBC`.
    cases: [
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'DAP', days: 'TBC' },
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'FCA', days: 'TBC' },
      { volume: 'TBC', spec: 'TBC', destination: 'TBC', terms: 'CPT', days: 'TBC' },
    ],
    caseLabels: {
      volume: 'Volume',
      spec: 'Specification',
      destination: 'Destination',
      terms: 'Terms',
      days: 'Transit',
    },
  },

  faq: {
    eyebrow: 'Questions buyers ask',
    title: 'Grades, sizes, prices and delivery',
    lead: 'The answers we give on the phone, written down. If something you need is missing, ask and we will add it.',
    items: [
      {
        question: 'What is the difference between grades A-B and C?',
        answer:
          'A-B (Select) is the calmer grade: even colour, small sound knots and minimal sapwood. C (Rustic) is the lively one: pronounced grain, larger sound knots, filled cracks and sapwood are accepted. Both are the same board — 14 mm with a 3.2 mm oak wear layer — priced separately, so you choose the look, not a different product.',
      },
      {
        question: 'Which formats and sizes do you produce?',
        answer:
          'Plank in 125 × 600–1 400, 145 × 800–1 600 and 195 × 1 700–2 500 mm, in random lengths; chevron and herringbone 125 mm wide, in 500, 600 and 700 mm blocks. Every format is 14 mm thick with a 3.2 mm oak wear layer.',
      },
      {
        question: 'How is the board built?',
        answer:
          'It is engineered (multi-layer) oak: a 3.2 mm European oak wear layer bonded to a stable base, 14 mm overall. The top layer is thick enough to sand and refinish, and the layered build moves less than solid oak as humidity changes.',
      },
      {
        question: 'How are prices quoted?',
        answer: `Per square metre, by format, size and grade — from ${from}/m² for C-grade plank at 125 mm to ${top}/m² for A-B chevron. The final figure depends on volume, finish and delivery terms, and is confirmed on the offer.`,
      },
      {
        question: 'Can you produce other sizes, finishes or grade mixes?',
        answer:
          'Yes. Other widths and lengths, oiled or lacquered, natural or toned finishes and grade mixes are produced to order — send the specification and we confirm feasibility and price before you commit.',
      },
      {
        question: 'Do you provide EUDR geolocation data and a DDS reference?',
        answer:
          'Yes. Each consignment ships with the harvesting plot coordinates, species, volume and country of harvest, legality evidence for the harvest, and the Due Diligence Statement reference you need for your EU submission. Confirm your import route with us and we will state the exact document set before you order.',
      },
      {
        question: 'Which Incoterms do you work with?',
        answer:
          'EXW, FCA, CPT and DAP. DAP is the usual choice for EU buyers who want the goods at their gate without arranging freight; FCA suits buyers with their own carrier.',
      },
      {
        question: 'How is the parquet packed?',
        answer:
          'In cartons by format and grade, on pallets, shrink-wrapped and marked with format, size, grade and square metres — and listed the same way on the packing list, so goods-in can check a delivery against the invoice in minutes.',
      },
      {
        question: 'Do you send samples before an order?',
        answer:
          'Yes. We send samples of the grade and finish before order confirmation, so you can check the board against your own standard before committing to a load.',
      },
      {
        question: 'Can I order on WhatsApp?',
        answer:
          'Yes. Send the format, grade, size and quantity — or simply a photo of the floor plan — and we reply with a quote. The picker on this page pre-fills the message for you.',
      },
      {
        question: 'What languages do you work in?',
        answer:
          'English, German, Polish and Ukrainian, for both correspondence and documentation.',
      },
      {
        question: 'What is your minimum order quantity?',
        // TO CONFIRM — commercial decision. Hidden until answered.
        answer: 'TBC',
      },
      {
        question: 'What is the lead time to Germany or Poland?',
        // TO CONFIRM — see exportSection.leadTimes. Hidden until answered.
        answer: 'TBC',
      },
    ],
  },

  contact: {
    eyebrow: 'Request a quote',
    title: 'Tell us what you need',
    lead: 'Send the formats, grades and quantities you need. If you are not sure yet, describe the project and we will propose the most economical specification.',
    labels: {
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      production: 'Production & export',
      hours: 'Office hours',
      languages: 'We speak',
    },
    values: {
      address: 'Bronnyky, Bohdana Khmelnytskoho St., Rivne district, Rivne region, Ukraine',
      hours: 'Mon–Fri, 08:00–18:00 EET',
      languages: 'English, German, Polish, Ukrainian',
    },
    whatsappTitle: 'Faster on WhatsApp',
    whatsappBody:
      'Send the format, grade and quantity — or just a photo of the floor plan — and we reply with a quote and availability.',
    noteBefore: 'Prefer email? Write directly to ',
    noteAfter: ' and attach your specification — we reply in English, German or Polish.',
  },

  form: {
    name: 'Name *',
    namePlaceholder: 'Jan Kowalski',
    company: 'Company',
    companyPlaceholder: 'Parkiet Sp. z o.o.',
    country: 'Country',
    countryPlaceholder: 'Poland',
    email: 'Email *',
    emailPlaceholder: 'purchasing@company.eu',
    phone: 'Phone',
    phonePlaceholder: '+48 000 000 000',
    product: 'Format',
    productPlaceholder: 'Select a format…',
    productMixed: 'Several formats',
    grade: 'Grade',
    gradeAny: 'Any / advise me',
    dimensions: 'Size (w × l × th)',
    dimensionsPlaceholder: '125 × 600–1 400 × 14/3.2 mm',
    volume: 'Quantity',
    volumePlaceholder: 'e.g. 250 m²',
    finish: 'Finish',
    finishOptions: {
      any: 'Any / advise me',
      unfinished: 'Unfinished',
      oiled: 'Oiled',
      lacquered: 'Lacquered',
    },
    destination: 'Destination',
    destinationPlaceholder: 'City or port, e.g. Hamburg',
    incoterms: 'Delivery terms',
    incotermsAny: 'Not decided yet',
    message: 'Message *',
    messagePlaceholder: 'Anything else that affects the quote — tone, packing, schedule…',
    submit: 'Send request',
    sending: 'Sending…',
    required: 'Fields marked * are required.',
    privacy: 'We use your details only to answer this enquiry.',
    errors: {
      name: 'Please tell us your name.',
      email: 'Enter a valid email address.',
      message: 'A few words about your requirement, please.',
    },
    sentTitle: 'Enquiry received',
    sentBody:
      'Thank you — our export team will come back to you with a quotation and current availability.',
    mailTitle: 'Your email is ready to send',
    mailBody:
      'We opened a pre-filled message in your mail client. If nothing appeared, write to us directly at {email}.',
    sendAnother: 'Send another enquiry',
    failed: 'Something went wrong sending the form. Please write to {email}.',
    mailSubject: 'Quote request — {product}',
    mailFields: {
      name: 'Name',
      company: 'Company',
      country: 'Country',
      email: 'Email',
      phone: 'Phone',
      product: 'Format',
      grade: 'Grade',
      dimensions: 'Dimensions',
      volume: 'Quantity',
      finish: 'Finish',
      destination: 'Destination',
      incoterms: 'Delivery terms',
      notSpecified: 'Not specified',
    },
  },

  productPage: {
    aboutTitle: 'About this format',
    configureTitle: 'Choose grade and size',
    specsEyebrow: 'Technical characteristics',
    specsTitle: 'Specification',
    specsLead:
      'Confirmed per order — send your requirement and we will state the exact figures on the offer.',
    pricesEyebrow: 'Price list',
    pricesTitle: 'Prices by size and grade',
    pricesLead: 'Straight from our price sheet, in euro per square metre.',
    gradesEyebrow: 'Grades',
    gradesTitle: 'A-B or C: what changes',
    gradesLead:
      'The same board in two grades. The grade decides how calm or lively the face is — and the price.',
    finishesEyebrow: 'Finishes',
    finishesTitle: 'Twelve production tones',
    finishesLead:
      'Each finish is applied to the same chevron oak board, so you can mix tones across a project without changing supplier or format.',
    inquiryEyebrow: 'Enquiry',
    inquiryTitle: 'Request a quote for {product}',
    inquiryLead:
      'Tell us the grade, size and quantity you need. We reply with availability, price and delivery time for your destination.',
    relatedEyebrow: 'Also produced',
    relatedTitle: 'Other formats',
    seePriceList: 'See the full price list',
  },

  footer: {
    products: 'Parquet',
    company: 'Company',
    exportOffice: 'Export office',
    claim: 'Engineered oak parquet from Ukraine for the European market.',
    rights: 'All rights reserved.',
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'This page has been sawn off',
    lead: 'The page you were looking for does not exist. Our products, however, are all still here.',
    backHome: 'Back to home',
    contactCta: 'Contact the export team',
  },

  products: {
    'oak-chevron-parquet': {
      name: 'Oak Chevron Parquet',
      shortName: 'Chevron',
      kicker: 'French herringbone',
      category: 'Engineered parquet',
      tagline: 'Blocks with angled ends that meet in one continuous V — the classic French pattern.',
      shortDescription:
        'Engineered oak chevron, 125 mm wide in 500, 600 and 700 mm blocks, in grades A-B and C and twelve finishes.',
      description: [
        'Chevron blocks are cut with angled ends, so the pattern runs as one continuous V with a straight seam down the middle — the floor of Parisian apartments, and the most architectural of our three formats.',
        'Each block is 125 mm wide, in 500, 600 or 700 mm lengths, on our 14 mm engineered construction with a 3.2 mm European oak wear layer. It is the same build as our plank and herringbone, so formats can meet at a threshold without a step.',
        'Twelve production finishes are available, from whitewashed and greige tones through natural oak and honey to walnut, chocolate and dark espresso.',
      ],
      advantages: [
        'Angled ends machined for tight, repeatable joints',
        'Three block lengths to scale the pattern to the room',
        'Twelve production finishes, custom tones on request',
        'The same 14 mm build as our plank and herringbone',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Species', value: 'European oak' },
            { label: 'Pattern', value: 'Chevron (French herringbone)' },
            { label: 'Construction', value: 'Engineered, 14 mm with a 3.2 mm oak wear layer' },
            { label: 'Origin', value: 'Ukraine' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Width', value: '125 mm' },
            { label: 'Block lengths', value: '500 / 600 / 700 mm' },
            { label: 'Grades', value: 'A-B Select, C Rustic' },
            // TO CONFIRM — surface options
            { label: 'Surface', value: 'Oiled or lacquered, brushed on request' },
          ],
        },
        {
          group: 'Delivery',
          items: [
            { label: 'Packaging', value: 'Cartons on pallets, shrink wrapped' },
            { label: 'Sold by', value: 'Square metre' },
            { label: 'Sampling', value: 'Grade and finish samples before order confirmation' },
            { label: 'Terms', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },

    'oak-plank-flooring': {
      name: 'Oak Plank Flooring',
      shortName: 'Plank',
      kicker: 'Three widths',
      category: 'Engineered flooring',
      tagline: 'Long, calm boards in 125, 145 and 195 mm — the most versatile oak floor.',
      shortDescription:
        'Engineered oak plank in three widths and random lengths up to 2 500 mm, in grades A-B and C.',
      description: [
        'Plank is the floor that suits almost any room: long boards laid in staggered rows, with the grain running the length of the space. We produce it in three widths — 125, 145 and 195 mm — so the scale of the board can follow the scale of the room.',
        'Lengths are random within each width — 600–1 400 mm at 125, 800–1 600 mm at 145 and 1 700–2 500 mm at 195 mm — which keeps the joints from lining up and makes the floor read as natural wood rather than tiles.',
        'Every plank is 14 mm engineered oak with a 3.2 mm wear layer, finished natural or toned on our own line and graded A-B or C board by board.',
      ],
      advantages: [
        'Three widths, from a classic 125 mm to a wide 195 mm board',
        'Random lengths up to 2 500 mm for a natural, staggered floor',
        'Natural or toned finishes applied on our own line',
        'The same 14 mm build as our chevron and herringbone',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Species', value: 'European oak' },
            { label: 'Format', value: 'Plank, laid in staggered rows' },
            { label: 'Construction', value: 'Engineered, 14 mm with a 3.2 mm oak wear layer' },
            { label: 'Origin', value: 'Ukraine' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Widths', value: '125 / 145 / 195 mm' },
            { label: 'Lengths', value: '600–1 400 / 800–1 600 / 1 700–2 500 mm' },
            { label: 'Grades', value: 'A-B Select, C Rustic' },
            // TO CONFIRM — surface options
            { label: 'Surface', value: 'Natural or toned, oiled or lacquered' },
          ],
        },
        {
          group: 'Delivery',
          items: [
            { label: 'Packaging', value: 'Cartons on pallets, shrink wrapped' },
            { label: 'Sold by', value: 'Square metre' },
            { label: 'Sampling', value: 'Grade and finish samples before order confirmation' },
            { label: 'Terms', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },

    'oak-herringbone-parquet': {
      name: 'Oak Herringbone Parquet',
      shortName: 'Herringbone',
      kicker: 'English herringbone',
      category: 'Engineered parquet',
      tagline: 'Square-ended blocks laid in a zigzag — the classic English pattern.',
      shortDescription:
        'Engineered oak herringbone, 125 mm wide in 500, 600 and 700 mm blocks, in grades A-B and C.',
      description: [
        'Herringbone blocks have square ends: each one butts against the side of its neighbour, so the pattern steps in a zigzag instead of meeting in a straight seam. It is the classic English floor, and it hides the joints of a busy room better than any other layout.',
        'Blocks are 125 mm wide, in 500, 600 or 700 mm lengths, on our 14 mm engineered construction with a 3.2 mm European oak wear layer — the same build as our plank and chevron.',
        'At the same size and grade, herringbone is priced below chevron — the most economical way to a patterned floor in our range.',
      ],
      advantages: [
        'Square-ended blocks for a traditional zigzag layout',
        'Three block lengths to scale the pattern to the room',
        'The most economical patterned floor in our range',
        'The same 14 mm build as our plank and chevron',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Species', value: 'European oak' },
            { label: 'Pattern', value: 'Herringbone (English)' },
            { label: 'Construction', value: 'Engineered, 14 mm with a 3.2 mm oak wear layer' },
            { label: 'Origin', value: 'Ukraine' },
          ],
        },
        {
          group: 'Format',
          items: [
            { label: 'Width', value: '125 mm' },
            { label: 'Block lengths', value: '500 / 600 / 700 mm' },
            { label: 'Grades', value: 'A-B Select, C Rustic' },
            // TO CONFIRM — surface options
            { label: 'Surface', value: 'Oiled or lacquered, brushed on request' },
          ],
        },
        {
          group: 'Delivery',
          items: [
            { label: 'Packaging', value: 'Cartons on pallets, shrink wrapped' },
            { label: 'Sold by', value: 'Square metre' },
            { label: 'Sampling', value: 'Grade and finish samples before order confirmation' },
            { label: 'Terms', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
    },
  },

  photos: {
    showroom: {
      alt: 'Showroom wall of oak chevron and herringbone parquet panels',
      caption: 'Showroom — chevron and herringbone',
    },
    interiorPlank: {
      alt: 'Wide oak plank floor leading into a bedroom laid in chevron',
      caption: 'Plank and chevron, fitted',
    },
    chevronInterior: {
      alt: 'Natural oak chevron parquet fitted in a hallway under a staircase',
      caption: 'Chevron, natural oak',
    },
    plankSelect: {
      alt: 'Light A-B grade oak planks stacked on a pallet',
      caption: 'Plank — grade A-B Select',
    },
    herringboneShowroom: {
      alt: 'Two oak herringbone parquet panels in the showroom',
      caption: 'Herringbone — showroom panels',
    },
    plankFinishingLinePoster: {
      alt: 'Oak planks on the rollers of the finishing line',
      caption: 'Plank on the finishing line',
    },
    plankShortBoardsPoster: {
      alt: 'Oak boards leaving the finishing machine',
      caption: 'Boards leaving the finishing line',
    },
    chevronBlanksPoster: {
      alt: 'Stacked chevron blanks with angled ends',
      caption: 'Chevron blanks, cut and profiled',
    },
    plankTonedLinePoster: {
      alt: 'Grey-toned oak planks on the roller line',
      caption: 'Toned plank on the line',
    },
    parquet1: {
      alt: 'Chevron oak parquet in a smoked cognac finish',
      caption: 'Parquet — Smoked Cognac',
    },
    parquet2: {
      alt: 'Chevron oak parquet in a golden tobacco finish',
      caption: 'Parquet — Tobacco',
    },
    parquet3: {
      alt: 'Chevron oak parquet in a grey truffle finish',
      caption: 'Parquet — Grey Truffle',
    },
    parquet4: {
      alt: 'Chevron oak parquet in a natural honey finish',
      caption: 'Parquet — Honey Oak',
    },
    parquet5: {
      alt: 'Chevron oak parquet in a dark espresso finish',
      caption: 'Parquet — Dark Espresso',
    },
    parquet6: {
      alt: 'Chevron oak parquet in a light sand greige finish',
      caption: 'Parquet — Sand Greige',
    },
    parquet7: {
      alt: 'Chevron oak parquet in a cool silver dune finish',
      caption: 'Parquet — Silver Dune',
    },
    parquet8: {
      alt: 'Chevron oak parquet in an untinted natural oak finish',
      caption: 'Parquet — Natural Oak',
    },
    parquet9: {
      alt: 'Chevron oak parquet in a whitewashed oiled finish',
      caption: 'Parquet — White Oiled',
    },
    parquet10: {
      alt: 'Chevron oak parquet in a soft ash grey finish',
      caption: 'Parquet — Ash Grey',
    },
    parquet11: {
      alt: 'Chevron oak parquet in a walnut shadow finish',
      caption: 'Parquet — Walnut Shadow',
    },
    parquet12: {
      alt: 'Chevron oak parquet in a dark chocolate finish',
      caption: 'Parquet — Chocolate',
    },
  },

  videos: {
    plankFinishingLine: {
      alt: 'Video: oak planks moving along the finishing line',
      caption: 'Plank on the finishing line',
    },
    plankShortBoards: {
      alt: 'Video: oak boards coming out of the finishing machine',
      caption: 'Boards leaving the finishing line',
    },
    chevronBlanks: {
      alt: 'Video: chevron blanks with angled ends, stacked after profiling',
      caption: 'Chevron blanks, cut and profiled',
    },
    plankTonedLine: {
      alt: 'Video: grey-toned oak planks on the roller line',
      caption: 'Toned plank on the line',
    },
  },

  finishes: [
    { id: 'parquet1', name: 'Smoked Cognac', tone: 'Warm mid brown' },
    { id: 'parquet2', name: 'Tobacco', tone: 'Golden brown' },
    { id: 'parquet3', name: 'Grey Truffle', tone: 'Grey-brown' },
    { id: 'parquet4', name: 'Honey Oak', tone: 'Natural warm' },
    { id: 'parquet5', name: 'Dark Espresso', tone: 'Deep brown' },
    { id: 'parquet6', name: 'Sand Greige', tone: 'Light neutral' },
    { id: 'parquet7', name: 'Silver Dune', tone: 'Cool beige' },
    { id: 'parquet8', name: 'Natural Oak', tone: 'Untinted oak' },
    { id: 'parquet9', name: 'White Oiled', tone: 'Whitewashed' },
    { id: 'parquet10', name: 'Ash Grey', tone: 'Soft grey' },
    { id: 'parquet11', name: 'Walnut Shadow', tone: 'Mid dark brown' },
    { id: 'parquet12', name: 'Chocolate', tone: 'Dark cocoa' },
  ],
}
