/**
 * Every photograph in /public, grouped for the gallery section.
 * Intrinsic width/height are recorded so the browser can reserve layout space
 * and the masonry grid does not shift while images load.
 */

export type GalleryCategory = 'oak' | 'pine' | 'parquet' | 'production'

export interface GalleryPhoto {
  src: string
  alt: string
  caption: string
  category: GalleryCategory
  width: number
  height: number
}

export const galleryFilters: { id: 'all' | GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All photos' },
  { id: 'oak', label: 'Oak boards' },
  { id: 'pine', label: 'Pine timber' },
  { id: 'parquet', label: 'Parquet' },
  { id: 'production', label: 'Production' },
]

export const galleryImages: GalleryPhoto[] = [
  {
    src: '/board/sortA.jpg',
    alt: 'Grade I oak edged boards with clean, even grain',
    caption: 'Oak edged boards — Grade I',
    category: 'oak',
    width: 691,
    height: 1280,
  },
  {
    src: '/board/sortC.jpg',
    alt: 'Grade II oak edged boards with small sound knots',
    caption: 'Oak edged boards — Grade II',
    category: 'oak',
    width: 676,
    height: 1280,
  },
  {
    src: '/board/sortB.jpg',
    alt: 'Grade III oak edged boards showing knots and sapwood',
    caption: 'Oak edged boards — Grade III',
    category: 'oak',
    width: 594,
    height: 1280,
  },
  {
    src: '/additional_image/oak_edged_board.jpg',
    alt: 'Edge detail of a planed oak board, 30 mm thick',
    caption: 'Edge detail — 30 mm oak',
    category: 'oak',
    width: 1052,
    height: 812,
  },
  {
    src: '/additional_image/oak_edged_board_2.jpg',
    alt: 'Machined oak and pine boards stacked before packing',
    caption: 'Machined boards before packing',
    category: 'production',
    width: 960,
    height: 1280,
  },
  {
    src: '/building_materials/pine_tree_1.jpg',
    alt: 'Strapped pine board packs stacked in the yard',
    caption: 'Pine board packs, ready to load',
    category: 'pine',
    width: 1280,
    height: 960,
  },
  {
    src: '/building_materials/pine_tree_2.jpg',
    alt: 'Pine battens and boards bundled for export',
    caption: 'Bundled pine sections',
    category: 'pine',
    width: 1280,
    height: 960,
  },
  {
    src: '/building_materials/pine_tree_3.jpg',
    alt: 'Squared pine beams and boards stacked at the sawmill',
    caption: 'Squared pine beams',
    category: 'pine',
    width: 960,
    height: 1280,
  },
  {
    src: '/building_materials/pine_tree_4.jpg',
    alt: 'Large stacks of pine timber in the export yard',
    caption: 'Yard stock — pine timber',
    category: 'production',
    width: 960,
    height: 1280,
  },
  {
    src: '/parquet/parquet_type_1.jpg',
    alt: 'Chevron oak parquet in a smoked cognac finish',
    caption: 'Parquet — Smoked Cognac',
    category: 'parquet',
    width: 1280,
    height: 1145,
  },
  {
    src: '/parquet/parquet_type_2.jpg',
    alt: 'Chevron oak parquet in a golden tobacco finish',
    caption: 'Parquet — Tobacco',
    category: 'parquet',
    width: 1280,
    height: 1122,
  },
  {
    src: '/parquet/parquet_type_3.jpg',
    alt: 'Chevron oak parquet in a grey truffle finish',
    caption: 'Parquet — Grey Truffle',
    category: 'parquet',
    width: 1280,
    height: 1140,
  },
  {
    src: '/parquet/parquet_type_4.jpg',
    alt: 'Chevron oak parquet in a natural honey finish',
    caption: 'Parquet — Honey Oak',
    category: 'parquet',
    width: 1280,
    height: 1141,
  },
  {
    src: '/parquet/parquet_type_5.jpg',
    alt: 'Chevron oak parquet in a dark espresso finish',
    caption: 'Parquet — Dark Espresso',
    category: 'parquet',
    width: 1280,
    height: 1140,
  },
  {
    src: '/parquet/parquet_type_6.jpg',
    alt: 'Chevron oak parquet in a light sand greige finish',
    caption: 'Parquet — Sand Greige',
    category: 'parquet',
    width: 1280,
    height: 1128,
  },
  {
    src: '/parquet/parquet_type_7.jpg',
    alt: 'Chevron oak parquet in a cool silver dune finish',
    caption: 'Parquet — Silver Dune',
    category: 'parquet',
    width: 1280,
    height: 1175,
  },
  {
    src: '/parquet/parquet_type_8.jpg',
    alt: 'Chevron oak parquet in an untinted natural oak finish',
    caption: 'Parquet — Natural Oak',
    category: 'parquet',
    width: 1280,
    height: 1130,
  },
  {
    src: '/parquet/parquet_type_9.jpg',
    alt: 'Chevron oak parquet in a whitewashed oiled finish',
    caption: 'Parquet — White Oiled',
    category: 'parquet',
    width: 1280,
    height: 1063,
  },
  {
    src: '/parquet/parquet_type_10.jpg',
    alt: 'Chevron oak parquet in a soft ash grey finish',
    caption: 'Parquet — Ash Grey',
    category: 'parquet',
    width: 1280,
    height: 1121,
  },
  {
    src: '/parquet/parquet_type_11.jpg',
    alt: 'Chevron oak parquet in a walnut shadow finish',
    caption: 'Parquet — Walnut Shadow',
    category: 'parquet',
    width: 1280,
    height: 1162,
  },
  {
    src: '/parquet/parquet_type_12.jpg',
    alt: 'Chevron oak parquet in a dark chocolate finish',
    caption: 'Parquet — Chocolate',
    category: 'parquet',
    width: 1280,
    height: 1111,
  },
  {
    src: '/specifications/document_2.jpg',
    alt: 'Oak price list showing sections, lengths and grade prices',
    caption: 'Price list — section by grade',
    category: 'production',
    width: 960,
    height: 1280,
  },
  {
    src: '/specifications/document_1.jpg',
    alt: 'Written grading specification for edged oak sawn timber',
    caption: 'Written grading specification',
    category: 'production',
    width: 590,
    height: 1280,
  },
]
