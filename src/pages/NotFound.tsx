import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'
import { company } from '../data/company'
import { products } from '../data/products'

export default function NotFound() {
  useSeo({
    title: `Page not found | ${company.name}`,
    description: 'The page you were looking for does not exist.',
    path: '/404',
  })

  return (
    <section className="flex min-h-[70svh] items-center py-section">
      <div className="container-page max-w-prose text-center">
        <p className="eyebrow justify-center">Error 404</p>
        <h1 className="mt-5 text-h2 text-ink-900">This page has been sawn off</h1>
        <p className="mx-auto mt-5 max-w-xl text-lead text-muted">
          The page you were looking for does not exist. Our products, however, are all still here.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn btn-oak">
            Back to home
            <span className="btn-icon">
              <Icon name="arrowRight" size={18} />
            </span>
          </Link>
          <Link to="/#contact" className="btn btn-outline">
            Contact the export team
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
