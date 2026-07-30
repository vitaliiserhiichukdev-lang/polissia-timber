import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'
import { useI18n } from '../i18n/useI18n'

export default function NotFound() {
  const { t, products } = useI18n()

  useSeo({
    title: t.meta.notFoundTitle,
    description: t.meta.notFoundDescription,
    path: '/404',
  })

  return (
    <section className="flex min-h-[70svh] items-center py-section">
      <div className="container-page max-w-prose text-center">
        <p className="eyebrow justify-center">{t.notFound.eyebrow}</p>
        <h1 className="mt-5 text-h2 text-ink-900">{t.notFound.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lead text-muted">{t.notFound.lead}</p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-oak">
            {t.notFound.backHome}
            <span className="btn-icon">
              <Icon name="arrowRight" size={18} />
            </span>
          </Link>
          <Link to="/#contact" className="btn btn-outline">
            {t.notFound.contactCta}
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link to={`/products/${product.slug}`} className="chip hover:border-oak-500">
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
