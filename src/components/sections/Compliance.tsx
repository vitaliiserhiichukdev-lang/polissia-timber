import Link from '../ui/LocaleLink'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import { confirmed } from '../../data/pending'
import { useI18n } from '../../i18n/useI18n'

/**
 * EUDR and the export document set, directly under the hero.
 *
 * This is the first thing an EU buyer checks: without plot-level origin data
 * and a Due Diligence Statement they cannot place the timber on the EU market
 * at all, so no amount of price or grade detail matters until it is answered.
 *
 * Documents whose status is not confirmed yet are filtered out rather than
 * shown as pending — see `src/data/pending.ts`.
 */
export default function Compliance() {
  const { t } = useI18n()
  const documents = confirmed(t.compliance.documents, (doc) => [doc.status])

  return (
    <section id="compliance" className="bg-sand-50 py-section">
      <SectionReveal className="container-page">
        <SectionHeader
          eyebrow={t.compliance.eyebrow}
          title={t.compliance.title}
          lead={t.compliance.lead}
          actions={
            <Link to="/#contact" className="btn btn-outline btn-sm">
              {t.common.requestQuote}
              <span className="btn-icon">
                <Icon name="arrowRight" size={16} />
              </span>
            </Link>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* EUDR panel — the headline claim, so it gets the dark treatment. */}
          <Reveal className="h-full">
            <div className="grain relative flex h-full flex-col overflow-hidden rounded-4xl bg-ink-900 p-7 text-inverse md:p-9">
              <span aria-hidden="true" className="grain-layer-dark" />

              <div className="relative">
                <span className="chip chip-dark font-semibold tracking-[0.14em]">
                  {t.compliance.eudr.badge}
                </span>
                <h3 className="mt-5 text-h3 text-inverse">{t.compliance.eudr.title}</h3>
                <p className="mt-4 text-inverse-muted">{t.compliance.eudr.body}</p>

                <ul className="mt-7 flex flex-col gap-3.5">
                  {t.compliance.eudr.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-inverse">
                      <span className="mt-0.5 shrink-0 text-oak-400">
                        <Icon name="check" size={16} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 border-t border-line-inverse pt-5 text-sm text-inverse-muted">
                  {t.compliance.eudr.note}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal variant="left">
              <h3 className="text-h4 text-ink-900">{t.compliance.documentsTitle}</h3>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {documents.map((doc, i) => (
                <Reveal as="li" key={doc.title} delay={i * 0.06} className="h-full">
                  <article className="card-surface flex h-full flex-col gap-2.5 p-5">
                    <span className="text-oak-600">
                      <Icon name={doc.icon} size={20} />
                    </span>
                    <h4 className="font-display text-lg text-ink-900">{doc.title}</h4>
                    <p className="text-sm leading-relaxed text-muted">{doc.body}</p>
                    <span className="mt-auto pt-3">
                      <span className="chip text-[0.7rem]">{doc.status}</span>
                    </span>
                  </article>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                <Icon name="shield" size={15} className="mt-0.5 shrink-0 text-oak-500" />
                {t.compliance.disclaimer}
              </p>
            </Reveal>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
