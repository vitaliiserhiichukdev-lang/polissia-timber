import { useMemo } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductGallery from '../components/product/ProductGallery'
import SpecTable from '../components/product/SpecTable'
import PriceTable from '../components/product/PriceTable'
import GradeGuide from '../components/product/GradeGuide'
import QuoteForm from '../components/product/QuoteForm'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import Icon from '../components/ui/Icon'
import useSeo from '../hooks/useSeo'
import useJsonLd from '../hooks/useJsonLd'
import { brand, productSlugs, type ProductSlug } from '../data/contact'
import { formatNumber } from '../data/pricing'
import { fill } from '../i18n/content'
import { useI18n } from '../i18n/useI18n'

const isProductSlug = (value: string | undefined): value is ProductSlug =>
  productSlugs.includes(value as ProductSlug)

export default function ProductPage() {
  const { slug } = useParams()
  const { t, products, productBySlug } = useI18n()
  const product = isProductSlug(slug) ? productBySlug[slug] : undefined

  useSeo({
    title: product
      ? `${product.name} — ${product.species} | ${brand.name}`
      : t.meta.notFoundTitle,
    description: product?.shortDescription ?? t.meta.notFoundDescription,
    path: `/products/${slug}`,
    image: product?.cardPhoto.src,
  })

  const jsonLd = useMemo(
    () =>
      product
        ? {
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.shortDescription,
            category: product.category,
            material: product.species,
            countryOfOrigin: 'UA',
            image: `${brand.site}${product.cardPhoto.src}`,
            brand: { '@type': 'Brand', name: brand.name },
            ...(product.priceFrom
              ? {
                  offers: {
                    '@type': 'AggregateOffer',
                    priceCurrency: 'EUR',
                    lowPrice: product.priceFrom,
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: brand.legalName },
                  },
                }
              : {}),
          }
        : null,
    [product],
  )

  useJsonLd(jsonLd, 'product-jsonld')

  if (!product) return <Navigate to="/404" replace />

  const others = products.filter((item) => item.slug !== product.slug)

  return (
    <article>
      {/* ------------------------------------------------------------ intro */}
      <section className="relative overflow-hidden bg-ink-900 pt-12 pb-section text-inverse">
        <span aria-hidden="true" className="grain-layer-dark" />
        {/* Decorative echo of the product photo, masked so it has no hard edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 hidden h-[520px] w-1/2 opacity-15 [mask-image:linear-gradient(to_left,black,transparent_75%)] lg:block"
        >
          <img src={product.heroPhoto.src} alt="" className="size-full object-cover blur-[2px]" />
        </div>

        <div className="container-page relative">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-inverse-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  {t.common.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/#products" className="transition-colors hover:text-white">
                  {t.common.products}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-inverse">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductGallery images={product.gallery} name={product.name} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip chip-dark">{product.kicker}</span>
                <span className="chip chip-dark">{product.category}</span>
              </div>

              <div>
                <h1 className="text-h2 text-inverse">{product.name}</h1>
                <p className="mt-4 text-lead text-inverse-muted">{product.tagline}</p>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line-inverse py-6">
                {product.keyFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold tracking-[0.1em] text-inverse-muted uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-lg text-inverse">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="rounded-3xl border border-white/12 bg-white/5 p-5">
                <p className="text-xs font-semibold tracking-[0.12em] text-oak-400 uppercase">
                  {t.productPage.priceInformation}
                </p>
                <p className="mt-2 font-display text-2xl text-inverse">
                  {product.priceFrom
                    ? `${t.common.priceFrom} € ${formatNumber(product.priceFrom)} ${t.common.perCubicMetre}`
                    : t.common.onRequest}
                </p>
                <p className="mt-2 text-sm text-inverse-muted">{product.priceNote}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#inquiry" className="btn btn-oak">
                  {t.common.requestQuote}
                  <span className="btn-icon">
                    <Icon name="arrowRight" size={18} />
                  </span>
                </a>
                {product.priceGroups.length > 0 && (
                  <a href="#prices" className="btn btn-glass">
                    {t.productPage.seePriceList}
                  </a>
                )}
              </div>

              <ul className="flex flex-col gap-2.5">
                {product.advantages.map((advantage) => (
                  <li key={advantage} className="flex gap-3 text-sm text-inverse-muted">
                    <span className="mt-1 shrink-0 text-oak-400">
                      <Icon name="check" size={14} />
                    </span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ description */}
      <section className="py-section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h3 text-ink-900">{t.productPage.aboutTitle}</h2>
          </Reveal>
          <div className="flex flex-col gap-5">
            {product.description.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
                <p className={i === 0 ? 'text-lead text-ink-800' : 'text-muted'}>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- specifications */}
      <section id="specs" className="bg-sand-50 py-section">
        <div className="container-page">
          <SectionHeader
            eyebrow={t.productPage.specsEyebrow}
            title={t.productPage.specsTitle}
            lead={t.productPage.specsLead}
          />
          <SpecTable groups={product.specs} />
        </div>
      </section>

      {/* --------------------------------------------------------- pricing */}
      {product.priceGroups.length > 0 && (
        <section id="prices" className="py-section">
          <div className="container-page">
            <SectionHeader
              eyebrow={t.productPage.pricesEyebrow}
              title={t.productPage.pricesTitle}
              lead={t.productPage.pricesLead}
            />
            <PriceTable groups={product.priceGroups} />
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------- grades */}
      {product.gradeBands.length > 0 && (
        <section id="grades" className="bg-sand-50 py-section">
          <div className="container-page">
            <SectionHeader
              eyebrow={t.productPage.gradesEyebrow}
              title={t.productPage.gradesTitle}
              lead={t.productPage.gradesLead}
            />
            <GradeGuide bands={product.gradeBands} notPermitted={product.notPermitted} />
          </div>
        </section>
      )}

      {/* -------------------------------------------------------- finishes */}
      {product.finishes.length > 0 && (
        <section id="finishes" className="py-section">
          <div className="container-page">
            <SectionHeader
              eyebrow={t.productPage.finishesEyebrow}
              title={t.productPage.finishesTitle}
              lead={t.productPage.finishesLead}
            />
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {product.finishes.map((finish, i) => (
                <Reveal as="li" key={finish.photo.id} delay={(i % 6) * 0.05}>
                  <figure className="card-surface card-hover group overflow-hidden">
                    <img
                      src={finish.photo.src}
                      alt={finish.photo.alt}
                      width={finish.photo.width}
                      height={finish.photo.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-expo group-hover:scale-105"
                    />
                    <figcaption className="px-4 py-3">
                      <span className="block text-sm font-medium text-ink-900">{finish.name}</span>
                      <span className="block text-xs text-muted">{finish.tone}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* --------------------------------------------------------- inquiry */}
      <section
        id="inquiry"
        className="grain relative bg-ink-900 py-section text-inverse"
      >
        <span aria-hidden="true" className="grain-layer-dark" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <p className="eyebrow eyebrow-inverse">{t.productPage.inquiryEyebrow}</p>
            <h2 className="mt-5 text-h3 text-inverse">
              {fill(t.productPage.inquiryTitle, { product: product.name })}
            </h2>
            <p className="mt-5 text-lead text-inverse-muted">{t.productPage.inquiryLead}</p>
            <ul className="mt-8 flex flex-col gap-3 text-sm text-inverse-muted">
              <li className="flex items-center gap-3">
                <Icon name="mail" size={17} className="text-oak-400" />
                <a href={`mailto:${brand.email}`} className="hover:text-white">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" size={17} className="text-oak-400" />
                <a href={`tel:${brand.phoneHref}`} className="hover:text-white">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="clock" size={17} className="text-oak-400" />
                {t.contact.values.hours}
              </li>
            </ul>
          </div>

          <QuoteForm defaultProduct={product.slug} compact />
        </div>
      </section>

      {/* --------------------------------------------------------- related */}
      <section className="py-section">
        <div className="container-page">
          <SectionHeader
            eyebrow={t.productPage.relatedEyebrow}
            title={t.productPage.relatedTitle}
          />
          <ul className="grid gap-6 md:grid-cols-2">
            {others.map((other, i) => (
              <Reveal as="li" key={other.slug} delay={i * 0.08}>
                <Link
                  to={`/products/${other.slug}`}
                  className="card-surface card-hover group flex items-center gap-5 overflow-hidden p-4"
                >
                  <img
                    src={other.cardPhoto.src}
                    alt={other.cardPhoto.alt}
                    width={320}
                    height={320}
                    loading="lazy"
                    decoding="async"
                    className="size-28 shrink-0 rounded-xl object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block font-display text-xl text-ink-900 transition-colors group-hover:text-oak-600">
                      {other.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{other.tagline}</span>
                    <span className="link-arrow mt-3 inline-flex">
                      {t.common.viewProduct}
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}
