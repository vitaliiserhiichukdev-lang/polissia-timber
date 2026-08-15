import type { Dictionary } from './types'
import { brand } from '../data/contact'

export const en: Dictionary = {
  locale: 'en',
  htmlLang: 'en',
  label: 'English',
  short: 'EN',

  meta: {
    homeTitle: `${brand.name} — Premium Ukrainian Timber for European Markets`,
    homeDescription:
      'Ukrainian producer and exporter of premium timber: oak edged boards in grades I–IV, pine construction materials and natural oak parquet. Stable large-volume supply and delivery throughout Europe.',
    notFoundTitle: `Page not found | ${brand.name}`,
    notFoundDescription: 'The page you were looking for does not exist.',
  },

  nav: [
    { key: 'products', label: 'Products', href: '/#products' },
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
    viewProducts: 'View products',
    viewDetails: 'View details',
    viewProduct: 'View product',
    onRequest: 'On request',
    priceFrom: 'Price from',
    pricing: 'Pricing',
    quotedPerSpecification: 'Quoted per specification',
    gradeBased: 'Grade-based, EUR / m³',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    home: 'Home',
    products: 'Products',
    perCubicMetre: '/ m³',
    priceUnit: 'EUR / m³',
    openImage: 'Open image',
    closeViewer: 'Close image viewer',
    previousImage: 'Previous image',
    nextImage: 'Next image',
    viewFullSize: 'View full size',
    mm: 'mm',
    logoSub: 'Ukrainian timber · Export',
  },

  hero: {
    eyebrow: 'Ukraine · Producer & exporter',
    titleLead: 'Premium Ukrainian Timber',
    titleAccent: 'for European Markets',
    lead: 'We produce and export high-quality timber to European countries: oak edged boards graded to a written specification, pine construction materials and natural oak parquet. Quality controlled at every stage, packed and documented ready for export.',
    insetCaption: 'Oak edged board · Grade I · 30 mm',
    scrollLabel: 'Scroll to the products section',
    imageAlt: 'Packs of Ukrainian sawn timber stacked in the export yard',
  },

  stats: [
    {
      value: '4',
      label: 'Graded quality classes',
      detail: 'Grades I–IV assessed against our written oak specification.',
    },
    {
      value: '5',
      label: 'Standard oak sections',
      detail: 'Widths from 80 to 230 mm, all in 30 mm thickness.',
    },
    {
      value: '12',
      label: 'Parquet finishes',
      detail: 'Chevron oak parquet, from whitewashed to dark espresso.',
    },
    {
      value: 'EU',
      label: 'Delivery coverage',
      detail: 'Regular full-truck and container shipments across Europe.',
    },
  ],

  about: {
    eyebrow: 'About the company',
    title: 'A Ukrainian producer built for European buyers',
    lead: 'We offer a wide range of natural wood products manufactured according to modern quality standards and international market requirements — and we control the whole route from log to loaded truck.',
    action: 'See how we produce',
    quote:
      '“We value long-term partnerships and guarantee high product quality on every order.”',
    highlights: [
      {
        title: 'Production and export under one roof',
        body: 'We specialise in the production and export of high-quality timber to European countries, covering the full path from log intake to a loaded truck. That means one point of responsibility for your order — not a chain of intermediaries.',
      },
      {
        title: 'Controlled at every stage',
        body: 'Every stage of production is carefully controlled — from raw material selection through sawing, drying and grading to packaging and delivery. Each batch is checked against a written specification before it leaves the yard.',
      },
      {
        title: 'Export-ready to European requirements',
        body: 'All products undergo quality control, comply with European requirements and are prepared for export: sorted by grade, strapped, marked and documented so they clear and unload without surprises.',
      },
    ],
    tags: ['Own production', 'Written specifications', 'Export documentation'],
  },

  catalog: {
    eyebrow: 'Product catalogue',
    title: 'Three product lines, one standard',
    lead: 'Oak edged boards are our main direction. Alongside them we supply pine construction materials and natural oak parquet — all produced, graded and packed by us.',
    action: 'Request the full price list',
    footnote:
      'Non-standard sections, lengths or grade mixes are produced to order — send us your specification and we will confirm feasibility and price.',
    cardLabels: {
      woodType: 'Wood type',
      sizes: 'Available sizes',
      grade: 'Grade',
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
    lead: 'Since the EU Deforestation Regulation applies, an importer cannot place timber on the EU market without plot-level origin data and a Due Diligence Statement. We prepare that pack with the shipment, not after you ask for it.',
    eudr: {
      badge: 'EUDR',
      title: 'What you receive with every consignment',
      body: 'Regulation (EU) 2023/1115 makes the importer responsible for proving the timber is deforestation-free and legally harvested. That proof has to come from the supplier, so we assemble it as part of the order rather than treating it as paperwork at the end.',
      points: [
        'Geolocation coordinates of the harvesting plots for the batch',
        'Species, volume and country of harvest per pack, matching the packing list',
        'Legality evidence for the harvest, traceable from the log to the pack',
        'Due Diligence Statement reference for your EU TRACES submission',
      ],
      note: 'Send the specification and destination and we will confirm the exact document set for your import route before you order.',
    },
    documentsTitle: 'Export document set',
    documents: [
      {
        icon: 'shield',
        title: 'Phytosanitary certificate',
        body: 'Issued by the state phytosanitary service for each consignment of sawn timber leaving Ukraine.',
        status: 'Issued per shipment',
      },
      {
        icon: 'box',
        title: 'ISPM-15 heat treatment',
        body: 'Marking for wood packaging, dunnage and pallets used to secure the load.',
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
        body: 'Volume, section and grade per pack, matching the marking on the strapping, so goods-in can check a delivery against the invoice.',
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
    title: 'Five controlled stages, from log to loading',
    lead: 'We carefully control every stage of production — from raw material selection to packaging and delivery. Each step below has a defined check before material moves on.',
    steps: [
      {
        icon: 'oak',
        title: 'Raw material selection',
        body: 'Logs are selected by species, diameter and soundness before they reach the saw line. Material with pith defects, insect damage or steam damage is rejected at intake — the cheapest place to remove a defect.',
      },
      {
        icon: 'factory',
        title: 'Sawing and manufacturing',
        body: 'Edged boards are cut to fixed sections — 30 mm thickness in widths from 80 to 230 mm — with clean parallel edges and square ends. Pine construction sections are cut to the dimensions each project asks for.',
      },
      {
        icon: 'shield',
        title: 'Drying and quality control',
        body: 'Boards are stacked for controlled drying, then graded piece by piece against our written specification: knot size and type, sapwood, ingrown bark, cracks. Pith, woodworm, steam damage and end cracks are accepted in no grade.',
      },
      {
        icon: 'box',
        title: 'Packaging',
        body: 'Each grade is packed separately into uniform bundles, strapped, edge-protected and marked with size, grade and volume, so the receiving warehouse can check a delivery in minutes.',
      },
      {
        icon: 'truck',
        title: 'Export and delivery',
        body: 'We load full trucks and containers with complete export documentation, and keep you updated from dispatch to unloading anywhere in Europe.',
      },
    ],
    callout: {
      title: 'Written specifications, not verbal promises',
      body: 'Our oak grading rules define exactly what each grade allows — knot size and type, sapwood, ingrown bark — and what is never accepted: pith, steam damage, woodworm, micro-cracks, end cracks and double sapwood.',
      action: 'Read the grading rules',
    },
    capacityTitle: 'Production capacity',
    capacityLead:
      'The figures worth checking before you commit a season of production to a supplier.',
    // TO CONFIRM — production must supply these before launch. Metrics left at
    // `TBC` do not render, so the block simply stays hidden until then.
    capacity: [
      {
        value: 'TBC',
        unit: 'm³ / month',
        label: 'Sawn oak output',
        detail: 'Edged boards at 30 mm across all five standard sections.',
      },
      {
        value: 'TBC',
        unit: 'm³ / shift',
        label: 'Saw line throughput',
        detail: 'Log intake to edged, trimmed board.',
      },
      {
        value: 'TBC',
        unit: 'chambers',
        label: 'Drying capacity',
        detail: 'Kiln chambers in operation, with the volume per charge.',
      },
      {
        value: 'TBC',
        unit: 'm³ / charge',
        label: 'Kiln load',
        detail: 'Volume dried per cycle, which sets the batch size we can hold to one moisture regime.',
      },
      {
        value: '5',
        unit: 'sections',
        label: 'Standard oak sections',
        detail: 'Widths 80, 115, 150, 170 and 230 mm — held in rotation, not cut to order.',
      },
      {
        value: '4',
        unit: 'grades',
        label: 'Graded classes',
        detail: 'Grades I–IV assessed piece by piece against the written specification.',
      },
    ],
    capacityNote:
      'Every piece is graded against the written specification before packing, so a repeat order at the same grade gives the same yield in your workshop.',
  },

  advantages: {
    eyebrow: 'Our advantages',
    title: 'Why European buyers work with us',
    lead: 'Everything below is a working promise we are measured on: quality, volume, logistics and price.',
    items: [
      {
        icon: 'oak',
        title: 'Premium Ukrainian wood',
        body: 'Slow-grown Ukrainian oak and pine with dense, even grain — the raw material behind the strength, durability and natural beauty our customers buy us for.',
      },
      {
        icon: 'shield',
        title: 'European quality standards',
        body: 'Products are manufactured to modern quality standards and international market requirements, and graded against a documented specification with defined tolerances.',
      },
      {
        icon: 'stack',
        title: 'Large-volume production',
        body: 'Stable large-volume supplies with repeatable grading, so you can plan a season of production around us instead of chasing spot lots.',
      },
      {
        icon: 'truck',
        title: 'Reliable logistics',
        body: 'Timely delivery throughout Europe by full truck or container, with packaging and export paperwork prepared before dispatch.',
      },
      {
        icon: 'tag',
        title: 'Competitive pricing',
        body: 'Direct-from-producer pricing with transparent grade-based price lists — no reseller margin between the sawmill and your warehouse.',
      },
      {
        icon: 'partners',
        title: 'Individual customer approach',
        body: 'Sizes, grades and packing adapted to your specification. We value long-term partnerships and treat every order as part of one.',
      },
    ],
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'Our timber, photographed as it ships',
    lead: 'Seven pictures rather than a contact sheet: the edge of a graded board, the packs it leaves the yard in, the stock behind a repeat order. Shot in our own yard and workshop, not bought from a stock library.',
    action: 'See all twelve parquet finishes',
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
        body: 'Stable large-volume supplies backed by our own production, with agreed monthly volumes for contract customers.',
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
    originLabel: 'Our yard',
    ringLabel: '{km} km',
    mapNote:
      'Rings are straight-line distance from the yard, not road distance — they show reach, not a quote. Ask for a lead time to your exact address and we will confirm it.',
    loadsTitle: 'What fits in a load',
    loadsLead:
      'Freight is charged by the load, not the cubic metre, so the cheapest order is usually a full one.',
    loads: [
      {
        value: '22–24',
        unit: 'm³',
        label: 'Full truck',
        detail: 'Standard 13.6 m curtainsider of strapped packs — the usual EU road shipment.',
      },
      {
        value: '25–28',
        unit: 'm³',
        label: "40 ft container",
        detail: 'For onward sea freight or destinations beyond road range.',
      },
      {
        // TO CONFIRM — commercial decision, not a measurement.
        value: 'TBC',
        unit: 'm³',
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
    casesLead: 'Anonymised, but real: the sections, volumes and routes we actually load.',
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
    title: 'Grades, volumes, documents and delivery',
    lead: 'The answers we give on the phone, written down. If something you need is missing, ask and we will add it.',
    items: [
      {
        question: 'What is the difference between grades I–IV?',
        answer:
          'Grade is set by what the board is allowed to show, and the limits are in writing. Grade I permits live knots up to 3–5 mm and nothing else; Grade II adds live knots to 25–35 mm, black knots to 15–25 mm and up to 20–25 mm of sapwood; Grade III widens that to live knots up to 35 mm on narrow sections and 70 mm at 230 mm width, plus ingrown bark; Grade IV, produced at 230 mm, allows live knots to 120 mm. Pith, steam damage, woodworm, micro-cracks, end cracks and double sapwood are accepted in no grade at all.',
      },
      {
        question: 'Which sections and lengths do you produce?',
        answer:
          'Oak edged boards are sawn at a fixed 30 mm thickness in five widths — 80, 115, 150, 170 and 230 mm — with fixed lengths per section covering 320 to 2 450 mm. Pine construction timber is cut to your section list instead of a fixed catalogue.',
      },
      {
        question: 'Can you produce non-standard sections or grade mixes?',
        answer:
          'Yes. Non-standard sections, lengths and grade mixes are produced to order — send the specification and we confirm feasibility and price before you commit.',
      },
      {
        question: 'What moisture content do you supply?',
        answer:
          'Kiln dried or air dried, specified per order. Tell us the target regime and the tolerance you work to and we will confirm it on the offer, because the moisture regime affects both the price and the batch size we can hold to one specification.',
      },
      {
        question: 'Do you provide EUDR geolocation data and a DDS reference?',
        answer:
          'Yes. Each consignment ships with the harvesting plot coordinates, species, volume and country of harvest per pack, legality evidence for the harvest, and the Due Diligence Statement reference you need for your EU submission. Confirm your import route with us and we will state the exact document set before you order.',
      },
      {
        question: 'Which Incoterms do you work with?',
        answer:
          'EXW, FCA, CPT and DAP. DAP is the usual choice for EU buyers who want the goods at their gate without arranging freight; FCA suits buyers with their own carrier.',
      },
      {
        question: 'How is the timber packed and marked?',
        answer:
          'Each grade is packed separately into uniform strapped packs with edge protection, marked with section, grade and volume, and listed the same way on the packing list — so goods-in can check a delivery against the invoice in minutes rather than restacking it.',
      },
      {
        question: 'How are prices quoted and how long do they hold?',
        answer:
          'Per cubic metre, by section and grade — our published oak price list runs from €700/m³ for mixed-grade 80 × 30 mm to €2 650/m³ for Grade I at 230 mm. The final figure depends on volume, moisture regime and delivery terms, and is confirmed per batch on the offer.',
      },
      {
        question: 'Do you send samples before an order?',
        answer:
          'Yes. For parquet we send finish samples before order confirmation, and for sawn timber we can send graded sample boards so you can check our grading against your own standard before committing to a load.',
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
    lead: 'Send your sections, grades and volumes. If you are not sure yet, describe the application and we will propose the most economical specification.',
    labels: {
      email: 'Email',
      phone: 'Phone',
      production: 'Production & export',
      hours: 'Office hours',
      languages: 'We speak',
    },
    values: {
      address: 'Bronnyky, Bohdana Khmelnytskoho St., Rivne district, Rivne region, Ukraine',
      hours: 'Mon–Fri, 08:00–18:00 EET',
      languages: 'English, German, Polish, Ukrainian',
    },
    noteBefore: 'Prefer email? Write directly to ',
    noteAfter: ' and attach your specification — we reply in English, German or Polish.',
  },

  form: {
    name: 'Name *',
    namePlaceholder: 'Jan Kowalski',
    company: 'Company',
    companyPlaceholder: 'Drewno Sp. z o.o.',
    country: 'Country',
    countryPlaceholder: 'Poland',
    email: 'Email *',
    emailPlaceholder: 'purchasing@company.eu',
    phone: 'Phone',
    phonePlaceholder: '+48 000 000 000',
    product: 'Product',
    productPlaceholder: 'Select a product…',
    productMixed: 'Mixed / several products',
    grade: 'Grade',
    gradeAny: 'Any / advise me',
    dimensions: 'Dimensions (th × w × l)',
    dimensionsPlaceholder: '30 × 230 × 2 050 mm',
    volume: 'Volume per month',
    volumePlaceholder: 'e.g. 40 m³',
    moisture: 'Moisture',
    moistureOptions: {
      any: 'Any / advise me',
      kd: 'Kiln dried (KD)',
      ad: 'Air dried (AD)',
      fresh: 'Fresh sawn',
    },
    destination: 'Destination',
    destinationPlaceholder: 'City or port, e.g. Hamburg',
    incoterms: 'Delivery terms',
    incotermsAny: 'Not decided yet',
    message: 'Message *',
    messagePlaceholder: 'Anything else that affects the quote — tolerances, packing, schedule…',
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
      product: 'Product',
      grade: 'Grade',
      dimensions: 'Dimensions',
      volume: 'Volume / month',
      moisture: 'Moisture',
      destination: 'Destination',
      incoterms: 'Delivery terms',
      notSpecified: 'Not specified',
    },
  },

  productPage: {
    aboutTitle: 'About this product',
    specsEyebrow: 'Technical characteristics',
    specsTitle: 'Specification',
    specsLead:
      'Confirmed per order — send your requirement and we will state the exact figures on the offer.',
    pricesEyebrow: 'Price list',
    pricesTitle: 'Prices by section and grade',
    pricesLead:
      'Our published price list. Sections are fixed; lengths within each section are available as listed.',
    gradesEyebrow: 'Grading',
    gradesTitle: 'What each grade allows',
    gradesLead:
      'Taken directly from our written specification for edged oak sawn timber. Tolerances differ between the narrow and wide width bands.',
    finishesEyebrow: 'Finishes',
    finishesTitle: 'Twelve production tones',
    finishesLead:
      'Each finish is applied to the same chevron oak board, so you can mix tones across a project without changing supplier or format.',
    inquiryEyebrow: 'Enquiry',
    inquiryTitle: 'Request a quote for {product}',
    inquiryLead:
      'Tell us the sections, grades and volume you need. We reply with availability, price and delivery time for your destination.',
    relatedEyebrow: 'Also produced',
    relatedTitle: 'Other product lines',
    priceInformation: 'Price information',
    seePriceList: 'See price list',
    permitted: 'Permitted',
    notPermitted: 'Not permitted in any grade',
    availableLengths: 'Available lengths',
    priceColumn: 'Price',
    gradeColumn: 'Grade',
    gradeLabel: 'Grade {code}',
    mixedGrade: 'Mixed grade',
    priceFootnote:
      'Prices are per cubic metre and indicative: the final figure depends on volume, moisture regime and delivery terms, and is confirmed per batch on the offer.',
  },

  footer: {
    products: 'Products',
    company: 'Company',
    exportOffice: 'Export office',
    claim: 'High-quality Ukrainian timber for the European market.',
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
    'oak-edged-boards': {
      name: 'Oak Edged Boards',
      kicker: 'Flagship product',
      category: 'Edged sawn timber',
      species: 'European oak (Quercus robur)',
      tagline: 'Graded oak sawn timber in five fixed sections, priced by grade.',
      shortDescription:
        'Our main product direction: oak edged boards known for exceptional strength, durability and natural beauty — graded I to IV against a written specification.',
      description: [
        'Oak edged boards are the backbone of our production. Every board is sawn to a fixed 30 mm thickness in one of five widths — 80, 115, 150, 170 or 230 mm — with parallel edges, square ends and a defined length range for each section.',
        'Grading is not a matter of opinion. Each piece is assessed against written tolerances for live and black knots, sapwood, ingrown bark and cracks, and the limits differ between the narrow (150/170 mm) and wide (230 mm) width bands. Pith, woodworm damage, steam damage, micro-cracks, end cracks and double sapwood are accepted in no grade.',
        'The result is a product you can buy repeatedly with confidence: the same grade delivers the same yield in your workshop, batch after batch.',
      ],
      keyFacts: [
        { label: 'Thickness', value: '30 mm' },
        { label: 'Widths', value: '80 / 115 / 150 / 170 / 230 mm' },
        { label: 'Lengths', value: '320 – 2 450 mm' },
        { label: 'Grades', value: 'I, II, III, IV' },
      ],
      priceNote: 'From €700 / m³ (80 × 30 mm, mixed grade). Grade I in 230 mm from €2 650 / m³.',
      sizesSummary: '30 × 80–230 mm, lengths 320–2 450 mm',
      gradesSummary: 'Grades I–IV and mixed-grade packs',
      advantages: [
        'Five fixed sections in stock rotation — repeat orders arrive identical',
        'Grade tolerances documented in writing, not agreed by phone',
        'Grade-based price list, so you pay only for the quality you need',
        'Packed and marked by grade for fast goods-in inspection',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Species', value: 'European oak (Quercus robur)' },
            { label: 'Product type', value: 'Edged sawn timber, planed on request' },
            { label: 'Origin', value: 'Ukraine' },
            { label: 'Grading', value: 'Grades I–IV to company specification' },
          ],
        },
        {
          group: 'Dimensions',
          items: [
            { label: 'Thickness', value: '30 mm' },
            { label: 'Widths', value: '80, 115, 150, 170, 230 mm' },
            { label: 'Length range', value: '320 – 2 450 mm, fixed lengths per section' },
            { label: 'Edges / ends', value: 'Edged both sides, ends trimmed square' },
          ],
        },
        {
          group: 'Delivery',
          items: [
            // TO CONFIRM — moisture regime
            { label: 'Moisture content', value: 'Kiln dried or air dried — specify on enquiry' },
            { label: 'Packaging', value: 'Strapped packs, sorted by section and grade' },
            { label: 'Marking', value: 'Section, grade and volume per pack' },
            { label: 'Terms', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [
        {
          widths: 'Widths 150 and 170 mm',
          grades: [
            { code: 'I', name: 'Grade I', allowances: ['Live knots up to 3–5 mm'] },
            {
              code: 'II',
              name: 'Grade II',
              allowances: [
                'Live knots up to 25 mm',
                'Black knots up to 15 mm, no closer than 10 mm to the edge',
                'Sapwood 20 mm, without breaking through to one face',
              ],
            },
            {
              code: 'III',
              name: 'Grade III',
              allowances: [
                'Live knots up to 35 mm',
                'Black knots up to 25 mm, no closer than 10 mm to the edge',
                'Ingrown bark up to 3 × 50 mm',
                'Sapwood 35 mm on one face, 10 mm breaking through on the other',
              ],
            },
          ],
        },
        {
          widths: 'Width 230 mm',
          grades: [
            { code: 'I', name: 'Grade I', allowances: ['Live knots up to 5 mm'] },
            {
              code: 'II',
              name: 'Grade II',
              allowances: [
                'Live knots 30–35 mm',
                'Black knots up to 25 mm, no closer than 10 mm to the edge',
                'Sapwood 25 mm, without breaking through to one face',
                'Ingrown bark up to 50 mm',
              ],
            },
            {
              code: 'III',
              name: 'Grade III',
              allowances: [
                'Live knots up to 70 mm',
                'Black knots up to 40 mm, no closer than 10 mm to the edge',
                'Ingrown bark up to 3 × 80 mm',
                'Sapwood 10 mm on the face side, 30 mm on the reverse',
              ],
            },
            {
              code: 'IV',
              name: 'Grade IV',
              allowances: [
                'Live knots up to 120 mm, no closer than 10 mm to the edge',
                'Ingrown bark up to 5 × 100 mm',
                'Sapwood 20 mm on the face side, unrestricted on the reverse',
              ],
            },
          ],
        },
      ],
      notPermitted: [
        'Pith / heart centre',
        'Steam damage',
        'Woodworm damage',
        'Micro-cracks',
        'End cracks',
        'Double sapwood',
      ],
    },

    'pine-construction-timber': {
      name: 'Pine Construction Timber',
      kicker: 'Volume supply',
      category: 'Construction timber',
      species: 'Scots pine (Pinus sylvestris)',
      tagline: 'Boards, battens and beams for residential, commercial and industrial building.',
      shortDescription:
        'Pine construction materials for residential, commercial and industrial construction — cut to your sections and supplied in large, repeatable volumes.',
      description: [
        'We supply pine timber materials for construction and finishing: edged boards, battens, rafters and squared beams. Sections are produced to your specification rather than forced into a fixed catalogue, which makes pine our most flexible product line.',
        'Pine works hard and behaves predictably: light, straightforward to fix and cut on site, and stable once dried. It is the natural choice for framing, formwork, roof structures, joists, crating and interior finishing.',
        'Because pine moves in volume, it is where our production scale shows. Bundles are strapped uniformly and cut to consistent lengths so a truck loads full — which keeps the freight cost per cubic metre down.',
      ],
      keyFacts: [
        { label: 'Products', value: 'Boards, battens, beams' },
        { label: 'Sections', value: 'Cut to specification' },
        { label: 'Lengths', value: 'Up to 6 000 mm' }, // TO CONFIRM
        { label: 'Supply', value: 'Full-truck volumes' },
      ],
      priceNote: 'Price on request — quoted per cubic metre against your section list.',
      sizesSummary: 'Sections and lengths produced to order',
      gradesSummary: 'Construction quality, sorted on request',
      advantages: [
        'Sections cut to your drawing instead of a fixed catalogue',
        'Stable large-volume supply for multi-phase construction projects',
        'Uniform bundles that load efficiently and unload fast',
        'Suitable for structure, formwork, crating and interior finishing',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Species', value: 'Scots pine (Pinus sylvestris)' },
            { label: 'Product type', value: 'Edged boards, battens, squared beams' },
            { label: 'Origin', value: 'Ukraine' },
            { label: 'Applications', value: 'Framing, roofing, formwork, finishing, packaging' },
          ],
        },
        {
          // TO CONFIRM — indicative ranges, confirm with production
          group: 'Dimensions',
          items: [
            { label: 'Board thickness', value: '25 – 50 mm' },
            { label: 'Board width', value: '100 – 200 mm' },
            { label: 'Beam sections', value: '50 × 50 to 150 × 150 mm' },
            { label: 'Lengths', value: '3 000 – 6 000 mm' },
          ],
        },
        {
          group: 'Delivery',
          items: [
            { label: 'Moisture content', value: 'Fresh sawn or dried — specify on enquiry' },
            { label: 'Packaging', value: 'Strapped bundles, edge protected' },
            { label: 'Loading', value: 'Full truck or 40 ft container' },
            { label: 'Terms', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [],
      notPermitted: [],
    },

    'oak-parquet-boards': {
      name: 'Natural Wood Parquet Boards',
      kicker: '12 finishes',
      category: 'Flooring',
      species: 'European oak',
      tagline: 'Chevron oak parquet that combines elegant appearance with a long service life.',
      shortDescription:
        'Natural wood parquet boards combining elegant appearance, reliability and long service life — chevron format oak in twelve finishes.',
      description: [
        'Our parquet boards are made from the same oak we saw and grade ourselves, machined to chevron format so the finished floor reads as one continuous pattern rather than a field of separate planks.',
        'Twelve finishes are produced, from whitewashed and greige tones through natural oak and honey to walnut, chocolate and dark espresso. The same board therefore serves a bright Scandinavian interior or a dark, formal one without changing supplier.',
        'Parquet is where oak earns its reputation: hard-wearing under traffic, repairable rather than disposable, and better looking after a decade than most floors are on day one.',
      ],
      keyFacts: [
        { label: 'Pattern', value: 'Chevron' },
        { label: 'Species', value: 'European oak' },
        { label: 'Finishes', value: '12 standard tones' },
        { label: 'Format', value: 'To specification' },
      ],
      priceNote: 'Price on request — quoted per square metre by finish and format.',
      sizesSummary: 'Chevron format, dimensions to specification',
      gradesSummary: 'Select and rustic grades, 12 finishes',
      advantages: [
        'Twelve production finishes from whitewashed to dark espresso',
        'Chevron format machined for tight, repeatable joints',
        'Made from our own graded oak — one supplier from log to floor',
        'Hard-wearing and repairable, built for long service life',
      ],
      specs: [
        {
          group: 'Material',
          items: [
            { label: 'Species', value: 'European oak' },
            { label: 'Pattern', value: 'Chevron (French herringbone)' },
            { label: 'Finishes', value: '12 standard tones, custom tones on request' },
            { label: 'Origin', value: 'Ukraine' },
          ],
        },
        {
          // TO CONFIRM — construction, thickness and wear layer
          group: 'Format',
          items: [
            { label: 'Construction', value: 'Solid or engineered — specify on enquiry' },
            { label: 'Thickness', value: 'To specification' },
            { label: 'Width / length', value: 'To specification' },
            { label: 'Surface', value: 'Oiled or lacquered, brushed on request' },
          ],
        },
        {
          group: 'Delivery',
          items: [
            { label: 'Packaging', value: 'Cartons on pallets, shrink wrapped' },
            { label: 'Sold by', value: 'Square metre' },
            { label: 'Sampling', value: 'Finish samples sent before order confirmation' },
            { label: 'Terms', value: 'EXW / FCA / CPT / DAP' },
          ],
        },
      ],
      gradeBands: [],
      notPermitted: [],
    },
  },

  photos: {
    oakGradeA: {
      alt: 'Grade I oak edged boards with clean, even grain',
      caption: 'Oak edged boards — Grade I',
    },
    oakGradeB: {
      alt: 'Grade II oak edged boards with small sound knots',
      caption: 'Oak edged boards — Grade II',
    },
    oakGradeC: {
      alt: 'Grade III oak edged boards showing knots and sapwood',
      caption: 'Oak edged boards — Grade III',
    },
    oakEdge: {
      alt: 'Edge detail of a planed oak board, 30 mm thick',
      caption: 'Edge detail — 30 mm oak',
    },
    machined: {
      alt: 'Machined oak and pine boards stacked before packing',
      caption: 'Machined boards before packing',
    },
    pinePacks: {
      alt: 'Strapped pine board packs stacked in the yard',
      caption: 'Pine board packs, ready to load',
    },
    pineBundles: {
      alt: 'Pine battens and boards bundled for export',
      caption: 'Bundled pine sections',
    },
    pineBeams: {
      alt: 'Squared pine beams and boards stacked at the sawmill',
      caption: 'Squared pine beams',
    },
    pineYard: {
      alt: 'Large stacks of pine timber in the export yard',
      caption: 'Yard stock — pine timber',
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
