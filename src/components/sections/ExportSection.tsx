import Link from '../ui/LocaleLink'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import { brand } from '../../data/contact'
import { confirmed } from '../../data/pending'
import { fill } from '../../i18n/content'
import { useI18n } from '../../i18n/useI18n'

export default function ExportSection() {
  const { t, gallery } = useI18n()
  const panelPhoto = gallery.find((photo) => photo.id === 'pineBundles')!

  // Freight facts a buyer costs an order against. Unconfirmed rows drop out, so
  // a half-filled table never ships — see `src/data/pending.ts`.
  const loads = confirmed(t.exportSection.loads, (load) => [load.value])
  const leadTimes = confirmed(t.exportSection.leadTimes, (row) => [row.days])
  const cases = confirmed(t.exportSection.cases, (item) => [
    item.volume,
    item.spec,
    item.destination,
    item.days,
  ])

  return (
    <section id="export" className="py-section">
      <SectionReveal className="container-page">
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

        {loads.length > 0 && (
          <div className="mt-14">
            <Reveal>
              <h3 className="text-h4 text-ink-900">{t.exportSection.loadsTitle}</h3>
              <p className="mt-3 max-w-2xl text-sm text-muted">{t.exportSection.loadsLead}</p>
            </Reveal>

            <dl className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {loads.map((load, i) => (
                <Reveal key={load.label} delay={i * 0.06} className="h-full">
                  <div className="card-surface flex h-full flex-col p-6">
                    <dt className="font-display text-4xl leading-none text-ink-900 tabular-nums">
                      {load.value}
                      <span className="ml-1.5 font-sans text-sm font-medium text-muted">
                        {load.unit}
                      </span>
                    </dt>
                    <dd className="mt-3">
                      <span className="block text-sm font-semibold text-ink-800">{load.label}</span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-muted">
                        {load.detail}
                      </span>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        )}

        {leadTimes.length > 0 && (
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
            <div>
              <Reveal>
                <h3 className="text-h4 text-ink-900">{t.exportSection.leadTimesTitle}</h3>
                <p className="mt-3 text-sm text-muted">{t.exportSection.leadTimesLead}</p>
              </Reveal>

              <Reveal delay={0.08} className="mt-6">
                <div className="card-surface overflow-x-auto">
                  <table className="w-full text-sm">
                    <caption className="sr-only">{t.exportSection.leadTimesTitle}</caption>
                    <thead>
                      <tr className="border-b border-line bg-sand-50 text-left text-xs tracking-[0.1em] text-muted uppercase">
                        <th scope="col" className="px-5 py-3 font-semibold">
                          {t.exportSection.leadTimeColumns.destination}
                        </th>
                        <th scope="col" className="px-5 py-3 font-semibold">
                          {t.exportSection.leadTimeColumns.days}
                        </th>
                        <th scope="col" className="px-5 py-3 font-semibold">
                          {t.exportSection.leadTimeColumns.mode}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {leadTimes.map((row) => (
                        <tr key={row.destination} className="transition-colors hover:bg-sand-50">
                          <th scope="row" className="px-5 py-3.5 text-left font-medium text-ink-900">
                            {row.destination}
                          </th>
                          <td className="px-5 py-3.5 font-semibold text-ink-900 tabular-nums">
                            {row.days}
                          </td>
                          <td className="px-5 py-3.5 text-muted">{row.mode}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {t.exportSection.leadTimeNote}
                </p>
              </Reveal>
            </div>

            {cases.length > 0 && (
              <div>
                <Reveal>
                  <h3 className="text-h4 text-ink-900">{t.exportSection.casesTitle}</h3>
                  <p className="mt-3 text-sm text-muted">{t.exportSection.casesLead}</p>
                </Reveal>

                <ul className="mt-6 flex flex-col gap-4">
                  {cases.map((item, i) => (
                    <Reveal as="li" key={`${item.destination}-${item.spec}`} delay={i * 0.06}>
                      <div className="card-surface p-5">
                        <p className="flex flex-wrap items-baseline gap-x-2 font-display text-xl text-ink-900">
                          <span className="sr-only">{t.exportSection.caseLabels.volume}: </span>
                          <span className="tabular-nums">{item.volume}</span>
                          <span className="sr-only">
                            , {t.exportSection.caseLabels.spec}:{' '}
                          </span>
                          <span className="text-base text-muted">{item.spec}</span>
                        </p>
                        <p className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                          <span className="chip">
                            <Icon name="pin" size={13} />
                            <span className="sr-only">
                              {t.exportSection.caseLabels.destination}:{' '}
                            </span>
                            {item.destination}
                          </span>
                          <span className="chip">
                            <span className="sr-only">{t.exportSection.caseLabels.terms}: </span>
                            {item.terms}
                          </span>
                          <span className="chip tabular-nums">
                            <Icon name="clock" size={13} />
                            <span className="sr-only">{t.exportSection.caseLabels.days}: </span>
                            {item.days}
                          </span>
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </SectionReveal>
    </section>
  )
}
