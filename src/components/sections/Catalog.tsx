import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import ProductCard from '../product/ProductCard'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { products } from '../../data/products'

export default function Catalog() {
  return (
    <section id="products" className="scroll-mt-24 bg-sand-50 py-section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Product catalogue"
          title="Three product lines, one standard"
          lead="Oak edged boards are our main direction. Alongside them we supply pine construction materials and natural oak parquet — all produced, graded and packed by us."
          actions={
            <Link to="/#contact" className="btn btn-outline btn-sm">
              Request the full price list
              <span className="btn-icon">
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <Icon name="ruler" size={16} className="text-oak-500" />
            Non-standard sections, lengths or grade mixes are produced to order — send us your
            specification and we will confirm feasibility and price.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
