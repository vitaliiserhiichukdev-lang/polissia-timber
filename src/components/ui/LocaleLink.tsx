import { Link, type LinkProps } from 'react-router-dom'
import { localizePath } from '../../i18n/routing'
import { useI18n } from '../../i18n/useI18n'

interface LocaleLinkProps extends Omit<LinkProps, 'to'> {
  /** Locale-independent path, e.g. `/products/oak-edged-boards` or `/#contact`. */
  to: string
}

/**
 * `<Link>` that keeps the visitor inside the current language.
 *
 * Components pass the canonical path and this adds the locale prefix, so no
 * call site has to know how locale URLs are shaped.
 */
export default function LocaleLink({ to, ...rest }: LocaleLinkProps) {
  const { locale } = useI18n()
  return <Link to={localizePath(locale, to)} {...rest} />
}
