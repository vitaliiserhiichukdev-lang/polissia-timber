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
    { key: 'about', label: 'About', href: '/#about' },
    { key: 'products', label: 'Products', href: '/#products' },
    { key: 'production', label: 'Production', href: '/#production' },
    { key: 'gallery', label: 'Gallery', href: '/#gallery' },
    { key: 'export', label: 'Export', href: '/#export' },
    { key: 'contact', label: 'Contact', href: '/#contact' },
  ],

  common: {
    requestQuote: 'Request a quote',
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
    scrollLabel: 'Scroll to the about section',
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
    lead: 'Boards by grade, pine sections in the yard and twelve parquet finishes — photographed in our own yard and workshop, not bought from a stock library.',
    filterLabel: 'Filter gallery by category',
    filters: {
      all: 'All photos',
      oak: 'Oak boards',
      pine: 'Pine timber',
      parquet: 'Parquet',
    },
    count: '{shown} of {total} photos',
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
    // TO CONFIRM — indicative destination list
    markets: [
      'Poland',
      'Germany',
      'Czechia',
      'Slovakia',
      'Austria',
      'Hungary',
      'Romania',
      'Italy',
      'Netherlands',
      'Belgium',
      'France',
      'Spain',
      'Lithuania',
      'Latvia',
      'Estonia',
      'Denmark',
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
      address: 'Kyiv region, Ukraine',
      hours: 'Mon–Fri, 08:00–18:00 EET',
      languages: 'English, German, Polish, Ukrainian',
    },
    noteBefore: 'Prefer email? Write directly to ',
    noteAfter: ' and attach your specification — we reply in English, German or Polish.',
  },

  form: {
    name: 'Name *',
    namePlaceholder: 'Jan Kowalski',
    company: 'Company *',
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
    volume: 'Required volume',
    volumePlaceholder: 'e.g. 40 m³ per month, grade II, 230 × 30 mm',
    message: 'Message *',
    messagePlaceholder: 'Sections, grades, moisture, delivery terms and destination…',
    submit: 'Send request',
    sending: 'Sending…',
    required: 'Fields marked * are required.',
    privacy: 'We use your details only to answer this enquiry.',
    errors: {
      name: 'Please tell us your name.',
      company: 'Company name helps us quote correctly.',
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
      volume: 'Volume',
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
