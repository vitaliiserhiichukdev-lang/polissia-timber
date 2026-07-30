/**
 * Language-neutral media registry: every photograph in /public with its
 * intrinsic size and category. Alt text and captions live in the locale
 * dictionaries (src/i18n) and are matched to these entries by id.
 *
 * The scans in /public/specifications are deliberately absent: they are the
 * internal source of the grading rules and price list (transcribed into
 * src/i18n and src/data/pricing.ts), not products to show a customer.
 */

export type PhotoId =
  | 'oakGradeA'
  | 'oakGradeB'
  | 'oakGradeC'
  | 'oakEdge'
  | 'machined'
  | 'pinePacks'
  | 'pineBundles'
  | 'pineBeams'
  | 'pineYard'
  | 'parquet1'
  | 'parquet2'
  | 'parquet3'
  | 'parquet4'
  | 'parquet5'
  | 'parquet6'
  | 'parquet7'
  | 'parquet8'
  | 'parquet9'
  | 'parquet10'
  | 'parquet11'
  | 'parquet12'

export type PhotoCategory = 'oak' | 'pine' | 'parquet'

export interface Photo {
  id: PhotoId
  src: string
  width: number
  height: number
  category: PhotoCategory
}

const photo = (
  id: PhotoId,
  src: string,
  width: number,
  height: number,
  category: PhotoCategory,
): Photo => ({ id, src, width, height, category })

export const photos: Record<PhotoId, Photo> = {
  oakGradeA: photo('oakGradeA', '/board/sortA.jpg', 691, 1280, 'oak'),
  oakGradeB: photo('oakGradeB', '/board/sortC.jpg', 676, 1280, 'oak'),
  oakGradeC: photo('oakGradeC', '/board/sortB.jpg', 594, 1280, 'oak'),
  oakEdge: photo('oakEdge', '/additional_image/oak_edged_board.jpg', 1052, 812, 'oak'),
  machined: photo('machined', '/additional_image/oak_edged_board_2.jpg', 960, 1280, 'parquet'),
  pinePacks: photo('pinePacks', '/building_materials/pine_tree_1.jpg', 1280, 960, 'pine'),
  pineBundles: photo('pineBundles', '/building_materials/pine_tree_2.jpg', 1280, 960, 'pine'),
  pineBeams: photo('pineBeams', '/building_materials/pine_tree_3.jpg', 960, 1280, 'pine'),
  pineYard: photo('pineYard', '/building_materials/pine_tree_4.jpg', 960, 1280, 'pine'),
  parquet1: photo('parquet1', '/parquet/parquet_type_1.jpg', 1280, 1145, 'parquet'),
  parquet2: photo('parquet2', '/parquet/parquet_type_2.jpg', 1280, 1122, 'parquet'),
  parquet3: photo('parquet3', '/parquet/parquet_type_3.jpg', 1280, 1140, 'parquet'),
  parquet4: photo('parquet4', '/parquet/parquet_type_4.jpg', 1280, 1141, 'parquet'),
  parquet5: photo('parquet5', '/parquet/parquet_type_5.jpg', 1280, 1140, 'parquet'),
  parquet6: photo('parquet6', '/parquet/parquet_type_6.jpg', 1280, 1128, 'parquet'),
  parquet7: photo('parquet7', '/parquet/parquet_type_7.jpg', 1280, 1175, 'parquet'),
  parquet8: photo('parquet8', '/parquet/parquet_type_8.jpg', 1280, 1130, 'parquet'),
  parquet9: photo('parquet9', '/parquet/parquet_type_9.jpg', 1280, 1063, 'parquet'),
  parquet10: photo('parquet10', '/parquet/parquet_type_10.jpg', 1280, 1121, 'parquet'),
  parquet11: photo('parquet11', '/parquet/parquet_type_11.jpg', 1280, 1162, 'parquet'),
  parquet12: photo('parquet12', '/parquet/parquet_type_12.jpg', 1280, 1111, 'parquet'),
}

/** Gallery order on the home page. */
export const galleryOrder: PhotoId[] = [
  'oakGradeA',
  'oakGradeB',
  'oakGradeC',
  'oakEdge',
  'machined',
  'pinePacks',
  'pineBundles',
  'pineBeams',
  'pineYard',
  'parquet1',
  'parquet2',
  'parquet3',
  'parquet4',
  'parquet5',
  'parquet6',
  'parquet7',
  'parquet8',
  'parquet9',
  'parquet10',
  'parquet11',
  'parquet12',
]

export const heroPhoto = photos.pinePacks
export const heroInsetPhoto = photos.oakGradeA

/** Photos used by the five production steps, in order. */
export const processPhotos: PhotoId[] = [
  'pineBeams',
  'pineBundles',
  'pinePacks',
  'pineYard',
  'machined',
]

export const parquetFinishPhotos: PhotoId[] = [
  'parquet1',
  'parquet2',
  'parquet3',
  'parquet4',
  'parquet5',
  'parquet6',
  'parquet7',
  'parquet8',
  'parquet9',
  'parquet10',
  'parquet11',
  'parquet12',
]
