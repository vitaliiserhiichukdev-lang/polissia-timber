import { Link } from 'react-router-dom'
import Logo from './Logo'
import Icon from '../ui/Icon'
import { brand } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'

const headingClass =
  'mb-4 font-sans text-[0.72rem] font-semibold tracking-[0.16em] text-oak-400 uppercase'
const itemClass =
  'inline-flex items-center gap-2 text-inverse-muted transition-colors duration-300 hover:text-white'

export default function Footer() {
  const { t, products } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink-900 pt-16 text-inverse-muted md:pt-22">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-oak-500/55 to-transparent"
      />

      <div className="container-page grid gap-10 pb-12 sm:grid-cols-2 md:gap-14 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))] lg:pb-16">
        <div className="flex max-w-sm flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <Logo inverse />
          <p className="text-sm leading-relaxed">{t.footer.claim}</p>
          <ul className="flex flex-wrap gap-2">
            {brand.incoterms.map((term) => (
              <li key={term} className="chip chip-dark">
                {term}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={t.footer.products}>
          <h2 className={headingClass}>{t.footer.products}</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`} className={itemClass}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.company}>
          <h2 className={headingClass}>{t.footer.company}</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {t.nav.map((link) => (
              <li key={link.key}>
                <Link to={link.href} className={itemClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>{t.footer.exportOffice}</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href={`mailto:${brand.email}`} className={itemClass}>
                <Icon name="mail" size={16} />
                {brand.email}
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phoneHref}`} className={itemClass}>
                <Icon name="phone" size={16} />
                {brand.phone}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon name="pin" size={16} />
              {t.contact.values.address}
            </li>
            <li className="inline-flex items-center gap-2">
              <Icon name="clock" size={16} />
              {t.contact.values.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-line-inverse py-6 text-xs">
        <p>
          © {year} {brand.legalName}. {t.footer.rights}
        </p>
        <p className="inline-flex items-center gap-2">
          <Icon name="globe" size={15} />
          {t.contact.values.languages}
        </p>
      </div>
    </footer>
  )
}
