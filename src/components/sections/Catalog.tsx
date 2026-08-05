import Link from '../ui/LocaleLink'
import SectionHeader from '../ui/SectionHeader'
import ProductCard from '../product/ProductCard'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionReveal from '../ui/SectionReveal'
import { useI18n } from '../../i18n/useI18n'

export default function Catalog() {
  const { t, products } = useI18n()

  return (
    <section id="products" className="bg-sand-50 py-section">
      <SectionReveal className="container-page">
        <SectionHeader
          eyebrow={t.catalog.eyebrow}
          title={t.catalog.title}
          lead={t.catalog.lead}
          actions={
            <Link to="/#contact" className="btn btn-outline btn-sm">
              {t.catalog.action}
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
          <p className="flex items-start gap-2 text-sm text-muted">
            <Icon name="ruler" size={16} className="mt-1 shrink-0 text-oak-500" />
            {t.catalog.footnote}
          </p>
        </Reveal>
      </SectionReveal>
    </section>
  )
}
