type ClassValue = string | number | false | null | undefined

/** Minimal class-name joiner — the only thing we need from a `clsx`-style lib. */
export const cn = (...classes: ClassValue[]): string =>
  classes.filter(Boolean).join(' ')
