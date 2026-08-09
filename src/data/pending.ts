/**
 * Sentinel for a figure the company has not confirmed yet.
 *
 * Capacity, lead times, shipment history and held certificates are commercial
 * claims. A plausible-looking guess on an export site is worse than a gap: the
 * buyer plans against it, and an EU importer who cannot substantiate a
 * compliance claim cannot clear the consignment.
 *
 * So anything still marked `TBC` is filtered out before render — the copy and
 * layout are finished and waiting, the block simply stays hidden until a real
 * value replaces the sentinel. Search `TBC` to find everything outstanding.
 */
export const PENDING = 'TBC'

export const isPending = (value: string): boolean => value.trim() === PENDING

/** Keeps only the entries whose flagged fields have real values. */
export const confirmed = <T>(items: T[], fields: (item: T) => string[]): T[] =>
  items.filter((item) => !fields(item).some(isPending))
