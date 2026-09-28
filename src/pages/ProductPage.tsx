import { Navigate, useParams } from 'react-router-dom'
import Link from '../components/ui/LocaleLink'
import { motion } from 'framer-motion'
import ProductGallery from '../components/product/ProductGallery'
import ParquetConfigurator from '../components/product/ParquetConfigurator'
import FormatPattern from '../components/product/FormatPattern'
import SpecTable from '../components/product/SpecTable'
import PriceTable from '../components/product/PriceTable'
import GradeGuide from '../components/product/GradeGuide'
import QuoteForm from '../components/product/QuoteForm'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import SectionReveal from '../components/ui/SectionReveal'
import Icon from '../components/ui/Icon'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import useSeo from '../hooks/useSeo'
import { brand, productSlugs, whatsappHref, type ProductSlug } from '../data/contact'
import { fill } from '../i18n/content'
import { useI18n } from '../i18n/useI18n'

const isProductSlug = (value: string | undefined): value is ProductSlug =>
  productSlugs.includes(value as ProductSlug)

const easeExpo = [0.16, 1, 0.3, 1] as const

export default function ProductPage() {
  const { slug } = useParams()
  const { t, products, productBySlug, formatPrice } = useI18n()
  const product = isProductSlug(slug) ? productBySlug[slug] : undefined

  // Title, description, canonical, hreflang and the Product + BreadcrumbList
  // schemas all come from `pageHead`, keyed off this path.
  useSeo(`/products/${slug}`)

  if (!product) return <Navigate to="/404" replace />

  const others = products.filter((item) => item.slug !== product.slug)

  return (
    <article>
      {/* ------------------------------------------------------------ intro */}
      <section className="relative overflow-hidden bg-ink-900 pt-12 pb-section text-inverse">
        <span aria-hidden="true" className="grain-layer-dark" />

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

          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeExpo }}
              className="lg:sticky lg:top-[calc(var(--spacing-header)+1.5rem)]"
            >
              <ProductGallery key={product.slug} media={product.media} name={product.name} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: easeExpo }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip chip-dark">{product.kicker}</span>
                <span className="chip chip-dark">{product.category}</span>
              </div>

              <div className="flex items-start gap-4">
                <FormatPattern slug={product.slug} size={52} className="mt-1 shrink-0 text-oak-400" />
                <div>
                  <h1 className="text-h2 text-inverse">{product.name}</h1>
                  <p className="mt-4 text-lead text-inverse-muted">{product.tagline}</p>
                </div>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line-inverse py-6 sm:grid-cols-4">
                {product.keyFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-semibold tracking-[0.1em] text-inverse-muted uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-display text-lg text-inverse tabular-nums">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div>
                <h2 className="mb-4 text-xs font-semibold tracking-[0.14em] text-oak-400 uppercase">
                  {t.productPage.configureTitle}
                </h2>
                <ParquetConfigurator
                  key={product.slug}
                  product={product}
                  quoteTo={`/products/${product.slug}#inquiry`}
                />
              </div>

              <a href="#prices" className="link-arrow self-start text-oak-400">
                {t.productPage.seePriceList}
                <Icon name="arrowRight" size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ description */}
      <section className="py-section">
        <SectionReveal className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h3 text-ink-900">{t.productPage.aboutTitle}</h2>
            <ul className="mt-8 flex flex-col gap-3">
              {product.advantages.map((advantage) => (
                <li key={advantage} className="flex gap-3 text-sm text-ink-800">
                  <span className="mt-1 shrink-0 text-oak-500">
                    <Icon name="check" size={14} />
                  </span>
                  {advantage}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="flex flex-col gap-5">
            {product.description.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.06}>
                <p className={i === 0 ? 'text-lead text-ink-800' : 'text-muted'}>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* ---------------------------------------------------------- grades */}
      <section id="grades" className="bg-sand-50 py-section">
        <SectionReveal className="container-page">
          <SectionHeader
            eyebrow={t.productPage.gradesEyebrow}
            title={t.productPage.gradesTitle}
            lead={t.productPage.gradesLead}
          />
          <GradeGuide product={product} />
        </SectionReveal>
      </section>

      {/* --------------------------------------------------------- pricing */}
      <section id="prices" className="py-section">
        <SectionReveal className="container-page">
          <SectionHeader
            eyebrow={t.productPage.pricesEyebrow}
            title={t.productPage.pricesTitle}
            lead={t.productPage.pricesLead}
          />
          <PriceTable products={[product]} />
        </SectionReveal>
      </section>

      {/* -------------------------------------------------- specifications */}
      <section id="specs" className="bg-sand-50 py-section">
        <SectionReveal className="container-page">
          <SectionHeader
            eyebrow={t.productPage.specsEyebrow}
            title={t.productPage.specsTitle}
            lead={t.productPage.specsLead}
          />
          <SpecTable groups={product.specs} />
        </SectionReveal>
      </section>

      {/* -------------------------------------------------------- finishes */}
      {product.finishes.length > 0 && (
        <section id="finishes" className="py-section">
          <SectionReveal className="container-page">
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
          </SectionReveal>
        </section>
      )}

      {/* --------------------------------------------------------- inquiry */}
      <section id="inquiry" className="grain relative bg-ink-900 py-section text-inverse">
        <span aria-hidden="true" className="grain-layer-dark" />
        <SectionReveal className="container-page relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
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
            <a
              href={whatsappHref(t.whatsapp.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mt-8"
            >
              <WhatsAppIcon size={18} />
              {t.common.whatsappCta}
            </a>
          </div>

          <QuoteForm defaultProduct={product.slug} compact />
        </SectionReveal>
      </section>

      {/* --------------------------------------------------------- related */}
      <section className="py-section">
        <SectionReveal className="container-page">
          <SectionHeader eyebrow={t.productPage.relatedEyebrow} title={t.productPage.relatedTitle} />
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
                    style={{ objectPosition: other.cardPhoto.position }}
                  />
                  <span className="min-w-0">
                    <span className="block font-display text-xl text-ink-900 transition-colors group-hover:text-oak-600">
                      {other.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{other.tagline}</span>
                    <span className="mt-2 block text-sm font-semibold text-ink-900 tabular-nums">
                      {t.common.priceFrom} {formatPrice(other.priceFrom)} {t.common.perSquareMetre}
                    </span>
                    <span className="link-arrow mt-3 inline-flex">
                      {t.common.viewProduct}
                      <Icon name="arrowRight" size={16} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </SectionReveal>
      </section>
    </article>
  )
}
