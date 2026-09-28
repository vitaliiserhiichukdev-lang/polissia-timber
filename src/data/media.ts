import type { ProductSlug } from './contact'

/**
 * Language-neutral media registry: every photograph and video in /public with
 * its intrinsic size. Alt text and captions live in the locale dictionaries
 * (src/i18n) and are matched to these entries by id.
 *
 * All of it is our own material — the showroom, fitted floors and the
 * production line — so every format is shown as it is actually made.
 */

export type PhotoId =
  | 'showroom'
  | 'interiorPlank'
  | 'chevronInterior'
  | 'plankSelect'
  | 'herringboneShowroom'
  | 'plankFinishingLinePoster'
  | 'plankShortBoardsPoster'
  | 'chevronBlanksPoster'
  | 'plankTonedLinePoster'
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

export type VideoId = 'plankFinishingLine' | 'plankShortBoards' | 'chevronBlanks' | 'plankTonedLine'

export interface Photo {
  id: PhotoId
  src: string
  width: number
  height: number
  /**
   * `object-position` when the frame is cropped into a cell of another shape.
   * Most of these are portrait phone shots, and the subject — the floor — sits
   * in the lower half, so a centred crop would show the ceiling.
   */
  position?: string
}

export interface Video {
  id: VideoId
  src: string
  /** Frame shown before playback, and wherever a still is needed. */
  poster: PhotoId
  width: number
  height: number
}

const photo = (
  id: PhotoId,
  src: string,
  width: number,
  height: number,
  position?: string,
): Photo => ({ id, src, width, height, position })

export const photos: Record<PhotoId, Photo> = {
  showroom: photo('showroom', '/media/showroom.jpg', 960, 1280, '50% 58%'),
  interiorPlank: photo('interiorPlank', '/media/interior-plank.jpg', 960, 1280, '50% 72%'),
  chevronInterior: photo('chevronInterior', '/media/chevron-interior.jpg', 960, 1280, '50% 78%'),
  plankSelect: photo('plankSelect', '/media/plank-select.jpg', 1280, 720),
  herringboneShowroom: photo('herringboneShowroom', '/media/herringbone-showroom.jpg', 540, 345),
  plankFinishingLinePoster: photo(
    'plankFinishingLinePoster',
    '/media/posters/plank-finishing-line.jpg',
    464,
    848,
  ),
  plankShortBoardsPoster: photo(
    'plankShortBoardsPoster',
    '/media/posters/plank-short-boards.jpg',
    464,
    848,
    '50% 70%',
  ),
  chevronBlanksPoster: photo('chevronBlanksPoster', '/media/posters/chevron-blanks.jpg', 480, 848),
  plankTonedLinePoster: photo(
    'plankTonedLinePoster',
    '/media/posters/plank-toned-line.jpg',
    464,
    848,
  ),
  parquet1: photo('parquet1', '/parquet/parquet_type_1.jpg', 1280, 1145),
  parquet2: photo('parquet2', '/parquet/parquet_type_2.jpg', 1280, 1122),
  parquet3: photo('parquet3', '/parquet/parquet_type_3.jpg', 1280, 1140),
  parquet4: photo('parquet4', '/parquet/parquet_type_4.jpg', 1280, 1141),
  parquet5: photo('parquet5', '/parquet/parquet_type_5.jpg', 1280, 1140),
  parquet6: photo('parquet6', '/parquet/parquet_type_6.jpg', 1280, 1128),
  parquet7: photo('parquet7', '/parquet/parquet_type_7.jpg', 1280, 1175),
  parquet8: photo('parquet8', '/parquet/parquet_type_8.jpg', 1280, 1130),
  parquet9: photo('parquet9', '/parquet/parquet_type_9.jpg', 1280, 1063),
  parquet10: photo('parquet10', '/parquet/parquet_type_10.jpg', 1280, 1121),
  parquet11: photo('parquet11', '/parquet/parquet_type_11.jpg', 1280, 1162),
  parquet12: photo('parquet12', '/parquet/parquet_type_12.jpg', 1280, 1111),
}

/**
 * Production-line clips, re-encoded for the web: H.264, no audio track (they
 * only ever play muted) and the index at the front of the file so playback
 * starts before the download finishes.
 */
export const videos: Record<VideoId, Video> = {
  plankFinishingLine: {
    id: 'plankFinishingLine',
    src: '/media/video/plank-finishing-line.mp4',
    poster: 'plankFinishingLinePoster',
    width: 464,
    height: 848,
  },
  plankShortBoards: {
    id: 'plankShortBoards',
    src: '/media/video/plank-short-boards.mp4',
    poster: 'plankShortBoardsPoster',
    width: 464,
    height: 848,
  },
  chevronBlanks: {
    id: 'chevronBlanks',
    src: '/media/video/chevron-blanks.mp4',
    poster: 'chevronBlanksPoster',
    width: 480,
    height: 848,
  },
  plankTonedLine: {
    id: 'plankTonedLine',
    src: '/media/video/plank-toned-line.mp4',
    poster: 'plankTonedLinePoster',
    width: 464,
    height: 848,
  },
}

export type MediaRef = { kind: 'photo'; id: PhotoId } | { kind: 'video'; id: VideoId }

const still = (id: PhotoId): MediaRef => ({ kind: 'photo', id })
const clip = (id: VideoId): MediaRef => ({ kind: 'video', id })

/**
 * What illustrates each format. `media` is the product gallery and the picker's
 * viewer, in order: a video leads wherever the format has one, because the
 * machined profile reads better moving than in a still.
 */
export const productMedia: Record<
  ProductSlug,
  { card: PhotoId; media: MediaRef[]; hasFinishes: boolean }
> = {
  'oak-chevron-parquet': {
    card: 'chevronInterior',
    media: [clip('chevronBlanks'), still('chevronInterior'), still('showroom')],
    hasFinishes: true,
  },
  'oak-plank-flooring': {
    card: 'plankSelect',
    media: [
      clip('plankFinishingLine'),
      still('plankSelect'),
      still('interiorPlank'),
      clip('plankTonedLine'),
      clip('plankShortBoards'),
    ],
    hasFinishes: false,
  },
  'oak-herringbone-parquet': {
    card: 'herringboneShowroom',
    media: [still('herringboneShowroom'), still('showroom')],
    hasFinishes: false,
  },
}

/**
 * The home-page gallery, in mosaic order — see `BANDS` in GallerySection. The
 * first band holds the three tall interior shots; the wide cells of the other
 * two need the landscape frames, which is why `plankSelect` and
 * `herringboneShowroom` sit where they do.
 */
export const galleryTiles: MediaRef[] = [
  still('showroom'),
  still('chevronInterior'),
  still('interiorPlank'),
  still('plankSelect'),
  clip('chevronBlanks'),
  clip('plankFinishingLine'),
  clip('plankTonedLine'),
  still('herringboneShowroom'),
]

export const heroPhoto: PhotoId = 'showroom'
export const heroInsetPhoto: PhotoId = 'chevronInterior'

/** Media for the four production steps, in order. */
export const processMedia: MediaRef[] = [
  still('plankSelect'),
  clip('chevronBlanks'),
  clip('plankFinishingLine'),
  clip('plankShortBoards'),
]
