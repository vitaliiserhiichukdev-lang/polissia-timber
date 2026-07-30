/**
 * Product catalogue — the source of truth for cards, detail pages, spec
 * tables, price tables and the quote form dropdown.
 *
 * Data provenance:
 *  - Oak grades I–IV and their tolerances come from the company's written
 *    specification for edged oak sawn timber (public/specifications/document_1.jpg).
 *  - Oak sections, lengths and prices come from the company price list
 *    (public/specifications/document_2.jpg). `list` is the printed price and
 *    `current` the revised handwritten price where one is given.
 *  - Fields marked `TO CONFIRM` are placeholders for pine and parquet, which
 *    have no written specification yet. Replace them with real figures.
 */

/** Prices in the source price list are per cubic metre. */
export const PRICE_UNIT = 'EUR / m³'

export interface ParquetFinish {
  id: number
  name: string
  image: string
  tone: string
}

export interface GalleryItem {
  src: string
  alt: string
  caption?: string
}

export interface KeyFact {
  label: string
  value: string
}

export interface GradePrice {
  grade: string
  list: number
  current: number | null
  note?: string
}

export interface PriceGroup {
  section: string
  lengths: number[]
  prices: GradePrice[]
}

export interface Grade {
  code: string
  name: string
  image: string
  allowances: string[]
}

export interface GradeBand {
  widths: string
  grades: Grade[]
}

export interface SpecGroup {
  group: string
  items: KeyFact[]
}

export interface Product {
  slug: string
  name: string
  kicker: string
  category: string
  species: string
  tagline: string
  cardImage: string
  cardImageAlt: string
  heroImage: string
  heroImageAlt: string
  shortDescription: string
  description: string[]
  keyFacts: KeyFact[]
  priceFrom: number | null
  priceNote: string
  sizesSummary: string
  gradesSummary: string
  advantages: string[]
  priceGroups: PriceGroup[]
  gradeBands: GradeBand[]
  notPermitted: string[]
  specs: SpecGroup[]
  gallery: GalleryItem[]
  finishes?: ParquetFinish[]
}

export const parquetFinishes: ParquetFinish[] = [
  { id: 1, name: 'Smoked Cognac', image: '/parquet/parquet_type_1.jpg', tone: 'Warm mid brown' },
  { id: 2, name: 'Tobacco', image: '/parquet/parquet_type_2.jpg', tone: 'Golden brown' },
  { id: 3, name: 'Grey Truffle', image: '/parquet/parquet_type_3.jpg', tone: 'Grey-brown' },
  { id: 4, name: 'Honey Oak', image: '/parquet/parquet_type_4.jpg', tone: 'Natural warm' },
  { id: 5, name: 'Dark Espresso', image: '/parquet/parquet_type_5.jpg', tone: 'Deep brown' },
  { id: 6, name: 'Sand Greige', image: '/parquet/parquet_type_6.jpg', tone: 'Light neutral' },
  { id: 7, name: 'Silver Dune', image: '/parquet/parquet_type_7.jpg', tone: 'Cool beige' },
  { id: 8, name: 'Natural Oak', image: '/parquet/parquet_type_8.jpg', tone: 'Untinted oak' },
  { id: 9, name: 'White Oiled', image: '/parquet/parquet_type_9.jpg', tone: 'Whitewashed' },
  { id: 10, name: 'Ash Grey', image: '/parquet/parquet_type_10.jpg', tone: 'Soft grey' },
  { id: 11, name: 'Walnut Shadow', image: '/parquet/parquet_type_11.jpg', tone: 'Mid dark brown' },
  { id: 12, name: 'Chocolate', image: '/parquet/parquet_type_12.jpg', tone: 'Dark cocoa' },
]

export const products: Product[] = [
  {
    slug: 'oak-edged-boards',
    name: 'Oak Edged Boards',
    kicker: 'Flagship product',
    category: 'Edged sawn timber',
    species: 'European oak (Quercus robur)',
    tagline: 'Graded oak sawn timber in five fixed sections, priced by grade.',
    cardImage: '/board/sortA.jpg',
    cardImageAlt: 'Grade I oak edged boards laid side by side, clean even grain',
    heroImage: '/additional_image/oak_edged_board.jpg',
    heroImageAlt: 'Close-up of a planed oak edged board showing thickness and clean edge',
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
    priceFrom: 400,
    priceNote:
      'From €400 / m³ (80 × 30 mm, mixed grade). Grade I in 230 mm from €1 800 / m³.',
    sizesSummary: '30 × 80–230 mm, lengths 320–2 450 mm',
    gradesSummary: 'Grades I–IV and mixed-grade packs',
    advantages: [
      'Five fixed sections in stock rotation — repeat orders arrive identical',
      'Grade tolerances documented in writing, not agreed by phone',
      'Grade-based price list, so you pay only for the quality you need',
      'Packed and marked by grade for fast goods-in inspection',
    ],
    priceGroups: [
      {
        section: '230 × 30 mm',
        lengths: [2050, 2250, 2350, 2450],
        prices: [
          { grade: 'I', list: 1800, current: 2650 },
          { grade: 'II', list: 1550, current: 2300 },
          { grade: 'III', list: 850, current: 1800 },
          { grade: 'IV', list: 650, current: null, note: 'On request' },
        ],
      },
      {
        section: '170 × 30 mm',
        lengths: [1040, 1240, 1440, 1640],
        prices: [
          { grade: 'I', list: 1000, current: 1350 },
          { grade: 'II', list: 850, current: 1200 },
          { grade: 'III', list: 700, current: 1050 },
        ],
      },
      {
        section: '150 × 30 mm',
        lengths: [740, 840, 1040, 1240, 1440],
        prices: [
          { grade: 'I', list: 950, current: 1300 },
          { grade: 'II', list: 780, current: 1130 },
          { grade: 'III', list: 650, current: 1000 },
        ],
      },
      {
        section: '115 × 30 mm',
        lengths: [630, 830, 1030, 1230],
        prices: [{ grade: 'Mixed', list: 500, current: 800 }],
      },
      {
        section: '80 × 30 mm',
        lengths: [320, 420, 520, 620],
        prices: [{ grade: 'Mixed', list: 400, current: 700 }],
      },
    ],
    gradeBands: [
      {
        widths: 'Widths 150 and 170 mm',
        grades: [
          {
            code: 'I',
            name: 'Grade I',
            image: '/board/sortA.jpg',
            allowances: ['Live knots up to 3–5 mm'],
          },
          {
            code: 'II',
            name: 'Grade II',
            image: '/board/sortC.jpg',
            allowances: [
              'Live knots up to 25 mm',
              'Black knots up to 15 mm, no closer than 10 mm to the edge',
              'Sapwood 20 mm, without breaking through to one face',
            ],
          },
          {
            code: 'III',
            name: 'Grade III',
            image: '/board/sortB.jpg',
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
          {
            code: 'I',
            name: 'Grade I',
            image: '/board/sortA.jpg',
            allowances: ['Live knots up to 5 mm'],
          },
          {
            code: 'II',
            name: 'Grade II',
            image: '/board/sortC.jpg',
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
            image: '/board/sortB.jpg',
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
            image: '/board/sortB.jpg',
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
    gallery: [
      { src: '/board/sortA.jpg', alt: 'Grade I oak edged boards — clean face, minimal knots', caption: 'Grade I' },
      { src: '/board/sortC.jpg', alt: 'Grade II oak edged boards with small sound knots', caption: 'Grade II' },
      { src: '/board/sortB.jpg', alt: 'Grade III oak edged boards with larger knots and sapwood', caption: 'Grade III' },
      {
        src: '/additional_image/oak_edged_board.jpg',
        alt: 'Oak edged board edge detail, 30 mm thickness',
        caption: 'Edge detail — 30 mm',
      },
      {
        src: '/additional_image/oak_edged_board_2.jpg',
        alt: 'Finished oak and pine boards prepared for shipment',
        caption: 'Machined boards',
      },
      {
        src: '/specifications/document_2.jpg',
        alt: 'Oak price list by section and grade',
        caption: 'Price list',
      },
      {
        src: '/specifications/document_1.jpg',
        alt: 'Written grading specification for oak edged timber',
        caption: 'Grading specification',
      },
    ],
  },

  {
    slug: 'pine-construction-timber',
    name: 'Pine Construction Timber',
    kicker: 'Volume supply',
    category: 'Construction timber',
    species: 'Scots pine (Pinus sylvestris)',
    tagline: 'Boards, battens and beams for residential, commercial and industrial building.',
    cardImage: '/building_materials/pine_tree_1.jpg',
    cardImageAlt: 'Bundled pine boards stacked in the export yard',
    heroImage: '/building_materials/pine_tree_3.jpg',
    heroImageAlt: 'Squared pine beams and boards stacked at the sawmill',
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
    priceFrom: null,
    priceNote: 'Price on request — quoted per cubic metre against your section list.',
    sizesSummary: 'Sections and lengths produced to order',
    gradesSummary: 'Construction quality, sorted on request',
    advantages: [
      'Sections cut to your drawing instead of a fixed catalogue',
      'Stable large-volume supply for multi-phase construction projects',
      'Uniform bundles that load efficiently and unload fast',
      'Suitable for structure, formwork, crating and interior finishing',
    ],
    priceGroups: [],
    gradeBands: [],
    notPermitted: [],
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
    gallery: [
      {
        src: '/building_materials/pine_tree_1.jpg',
        alt: 'Pine board packs strapped and stacked for dispatch',
        caption: 'Board packs',
      },
      {
        src: '/building_materials/pine_tree_2.jpg',
        alt: 'Pine battens and boards bundled in the yard',
        caption: 'Bundled sections',
      },
      {
        src: '/building_materials/pine_tree_3.jpg',
        alt: 'Squared pine beams stacked at the sawmill',
        caption: 'Squared beams',
      },
      {
        src: '/building_materials/pine_tree_4.jpg',
        alt: 'Large pine timber stacks in the export yard',
        caption: 'Yard stock',
      },
    ],
  },

  {
    slug: 'oak-parquet-boards',
    name: 'Natural Wood Parquet Boards',
    kicker: '12 finishes',
    category: 'Flooring',
    species: 'European oak',
    tagline: 'Chevron oak parquet that combines elegant appearance with a long service life.',
    cardImage: '/parquet/parquet_type_4.jpg',
    cardImageAlt: 'Chevron oak parquet in a natural honey finish',
    heroImage: '/parquet/parquet_type_8.jpg',
    heroImageAlt: 'Natural oak chevron parquet boards forming a chevron pattern',
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
    priceFrom: null,
    priceNote: 'Price on request — quoted per square metre by finish and format.',
    sizesSummary: 'Chevron format, dimensions to specification',
    gradesSummary: 'Select and rustic grades, 12 finishes',
    advantages: [
      'Twelve production finishes from whitewashed to dark espresso',
      'Chevron format machined for tight, repeatable joints',
      'Made from our own graded oak — one supplier from log to floor',
      'Hard-wearing and repairable, built for long service life',
    ],
    priceGroups: [],
    gradeBands: [],
    notPermitted: [],
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
        // TO CONFIRM — confirm construction, thickness and wear layer
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
    gallery: parquetFinishes.map((finish) => ({
      src: finish.image,
      alt: `Chevron oak parquet in ${finish.name} finish — ${finish.tone.toLowerCase()}`,
      caption: finish.name,
    })),
    finishes: parquetFinishes,
  },
]

export const getProduct = (slug: string | undefined): Product | undefined =>
  products.find((product) => product.slug === slug)

export const productOptions = products.map(({ slug, name }) => ({ value: slug, label: name }))

/** 1 800 → "1 800" (thin space, the European convention for timber price lists). */
export const formatPrice = (value: number): string =>
  value.toLocaleString('en-GB').replace(/,/g, ' ')
