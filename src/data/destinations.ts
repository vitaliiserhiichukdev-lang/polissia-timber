/**
 * Where shipments go, as coordinates rather than a picture.
 *
 * The map component projects these, so the markers sit in their true relative
 * positions instead of being placed by eye — which also means adding a country
 * is a data change, not a redraw.
 *
 * Country names are translated and live in the locale dictionaries, keyed by the
 * codes below.
 */

export type DestinationCode =
  | 'PL'
  | 'DE'
  | 'CZ'
  | 'SK'
  | 'AT'
  | 'HU'
  | 'RO'
  | 'IT'
  | 'NL'
  | 'BE'
  | 'FR'
  | 'ES'
  | 'LT'
  | 'LV'
  | 'EE'
  | 'DK'

export interface Destination {
  code: DestinationCode
  /** Representative city — it only decides where the marker lands. */
  city: string
  lat: number
  lon: number
  /**
   * Whether the marker gets a name on the map. Every destination is marked and
   * gets a route; only the text is withheld, because Vienna and Bratislava are
   * 60 km apart and Antwerp and Rotterdam closer still — labelling all sixteen
   * would leave names sitting on top of each other. The withheld ones are named
   * in the country list beside the map.
   */
  labelled: boolean
  /** Label side, hand-tuned against its neighbours. */
  anchor?: 'start' | 'end'
  /** Label offset from the marker, in projected units. */
  dy?: number
}

/**
 * The yard shipments leave from: Bronnyky, Rivne district, Rivne region.
 *
 * Not a cosmetic detail — every route on the map is drawn from here and the
 * reference rings measure distance from it. The previous value pointed at Kyiv,
 * some 300 km east, which overstated the haul to every western destination.
 */
export const origin = { lat: 50.7063, lon: 26.0983 }

export const destinations: Destination[] = [
  { code: 'PL', city: 'Warsaw', lat: 52.23, lon: 21.01, labelled: true, anchor: 'start', dy: -16 },
  { code: 'LT', city: 'Vilnius', lat: 54.69, lon: 25.28, labelled: true, anchor: 'start', dy: -16 },
  { code: 'LV', city: 'Riga', lat: 56.95, lon: 24.11, labelled: false },
  { code: 'EE', city: 'Tallinn', lat: 59.44, lon: 24.75, labelled: false },
  { code: 'DK', city: 'Copenhagen', lat: 55.68, lon: 12.57, labelled: true, anchor: 'end', dy: -16 },
  { code: 'DE', city: 'Berlin', lat: 52.52, lon: 13.4, labelled: true, anchor: 'end', dy: 26 },
  { code: 'NL', city: 'Rotterdam', lat: 51.92, lon: 4.48, labelled: true, anchor: 'start', dy: -16 },
  { code: 'BE', city: 'Antwerp', lat: 51.22, lon: 4.4, labelled: false },
  { code: 'CZ', city: 'Prague', lat: 50.08, lon: 14.44, labelled: true, anchor: 'end', dy: -16 },
  { code: 'AT', city: 'Vienna', lat: 48.21, lon: 16.37, labelled: true, anchor: 'end', dy: 28 },
  { code: 'SK', city: 'Bratislava', lat: 48.15, lon: 17.11, labelled: false },
  { code: 'HU', city: 'Budapest', lat: 47.5, lon: 19.04, labelled: true, anchor: 'start', dy: 24 },
  { code: 'RO', city: 'Bucharest', lat: 44.43, lon: 26.1, labelled: true, anchor: 'start', dy: 22 },
  { code: 'IT', city: 'Milan', lat: 45.46, lon: 9.19, labelled: true, anchor: 'end', dy: 26 },
  { code: 'FR', city: 'Paris', lat: 48.86, lon: 2.35, labelled: true, anchor: 'start', dy: -16 },
  { code: 'ES', city: 'Madrid', lat: 40.42, lon: -3.7, labelled: true, anchor: 'start', dy: 26 },
]

/** Straight-line radii from the yard, drawn as reference rings. */
export const ringsKm = [1000, 2000, 3000]
