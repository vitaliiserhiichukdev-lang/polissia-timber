import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import SectionReveal from '../ui/SectionReveal'
import ProductGallery from '../product/ProductGallery'
import ParquetConfigurator from '../product/ParquetConfigurator'
import PriceTable from '../product/PriceTable'
import type { ProductSlug } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'

/**
 * The range, as a picker rather than a row of cards: choose a format, a grade
 * and a size, and the price, the specification and the footage of that format
 * follow. The full price sheet sits underneath for anyone who would rather
 * read the whole list at once.
 */
export default function Catalog() {
  const { t, products, productBySlug } = useI18n()
  const [slug, setSlug] = useState<ProductSlug>(products[0].slug)
  const product = productBySlug[slug]

  return (
    <section id="products" className="bg-sand-50 py-section">
      <SectionReveal className="container-page">
        <SectionHeader eyebrow={t.catalog.eyebrow} title={t.catalog.title} lead={t.catalog.lead} />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <Reveal variant="right" className="lg:sticky lg:top-[calc(var(--spacing-header)+1.5rem)]">
            {/* Keyed by format so the viewer returns to that format's lead clip. */}
            <ProductGallery key={product.slug} media={product.media} name={product.name} />
          </Reveal>

          <Reveal variant="left">
            <ParquetConfigurator
              product={product}
              onProductChange={setSlug}
              quoteTo="/#contact"
              showDetails
            />
          </Reveal>
        </div>

        <div id="prices" className="mt-16 md:mt-24">
          <Reveal>
            <p className="eyebrow">{t.priceList.eyebrow}</p>
            <h3 className="mt-4 text-h3 text-ink-900">{t.priceList.title}</h3>
            <p className="mt-3 mb-8 max-w-2xl text-muted">{t.priceList.lead}</p>
          </Reveal>
          <PriceTable products={products} linkFormats />
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
