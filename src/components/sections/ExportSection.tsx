import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import { brand } from '../../data/contact'
import { fill } from '../../i18n/content'
import { useI18n } from '../../i18n/useI18n'

export default function ExportSection() {
  const { t, gallery } = useI18n()
  const panelPhoto = gallery.find((photo) => photo.id === 'pineBundles')!

  return (
    <section id="export" className="py-section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t.exportSection.eyebrow}
          title={t.exportSection.title}
          lead={t.exportSection.lead}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <ul className="grid gap-5 sm:grid-cols-2">
            {t.exportSection.points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={i * 0.07} className="h-full">
                <article className="card-surface flex h-full flex-col gap-3 p-6">
                  <span className="text-oak-600">
                    <Icon name={point.icon} size={22} />
                  </span>
                  <h3 className="text-h4 text-ink-900">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{point.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="left" className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-ink-900 text-inverse">
              <img
                src={panelPhoto.src}
                alt={panelPhoto.alt}
                width={panelPhoto.width}
                height={panelPhoto.height}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover opacity-90"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-t from-ink-900 to-transparent"
              />

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="text-h4 text-inverse">{t.exportSection.panelTitle}</h3>
                <p className="mt-3 text-sm text-inverse-muted">
                  {fill(t.exportSection.panelBody, { terms: brand.incoterms.join(', ') })}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {t.exportSection.markets.map((market) => (
                    <li key={market} className="chip chip-dark">
                      {market}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  <Link to="/#contact" className="btn btn-oak">
                    {t.exportSection.cta}
                    <span className="btn-icon">
                      <Icon name="arrowRight" size={18} />
                    </span>
                  </Link>
                  <a href={`mailto:${brand.email}`} className="btn btn-glass">
                    <Icon name="mail" size={17} />
                    {brand.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
