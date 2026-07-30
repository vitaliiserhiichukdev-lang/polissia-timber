import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import { company, exportMarkets, exportPoints } from '../../data/company'

export default function ExportSection() {
  return (
    <section id="export" className="scroll-mt-24 py-section">
      <div className="container-page">
        <SectionHeader
          eyebrow="Export and delivery"
          title="Built around European supply chains"
          lead="Competitive prices and timely delivery throughout Europe, with stable volumes you can plan production around."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          {/* Points */}
          <ul className="grid gap-5 sm:grid-cols-2">
            {exportPoints.map((point, i) => (
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

          {/* Destinations panel */}
          <Reveal variant="left" className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-ink-900 text-inverse">
              <img
                src="/building_materials/pine_tree_2.jpg"
                alt="Strapped timber bundles staged for loading in the export yard"
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover opacity-90"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-gradient-to-t from-ink-900 to-transparent"
              />

              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="text-h4 text-inverse">Destinations we ship to</h3>
                <p className="mt-3 text-sm text-inverse-muted">
                  Full-truck and container loads across the EU. Delivery terms available:{' '}
                  {company.incoterms.join(', ')}.
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {exportMarkets.map((market) => (
                    <li key={market} className="chip chip-dark">
                      {market}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                  <Link to="/#contact" className="btn btn-oak">
                    Discuss a delivery
                    <span className="btn-icon">
                      <Icon name="arrowRight" size={18} />
                    </span>
                  </Link>
                  <a href={`mailto:${company.email}`} className="btn btn-glass">
                    <Icon name="mail" size={17} />
                    {company.email}
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
