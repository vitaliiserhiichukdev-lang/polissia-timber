import Link from '../ui/LocaleLink'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import { brand } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'

export default function About() {
  const { t, photo } = useI18n()
  const edgePhoto = photo.oakEdge
  const yardPhoto = photo.pineYard

  return (
    <section id="about" className="grain relative py-section">
      <span aria-hidden="true" className="grain-layer" />

      <SectionReveal className="container-page relative">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          lead={t.about.lead}
          actions={
            <Link to="/#production" className="link-arrow">
              {t.about.action}
              <Icon name="arrowRight" size={17} />
            </Link>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal variant="right" className="relative">
            <div className="overflow-hidden rounded-4xl border border-line bg-sand-100 shadow-mid">
              <img
                src={edgePhoto.src}
                alt={edgePhoto.alt}
                width={edgePhoto.width}
                height={edgePhoto.height}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-line bg-sand-100">
                <img
                  src={yardPhoto.src}
                  alt={yardPhoto.alt}
                  width={yardPhoto.width}
                  height={yardPhoto.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink-900 p-6 text-inverse">
                <Icon name="quote" size={26} className="text-oak-400" />
                <p className="mt-4 font-display text-lg leading-snug">{t.about.quote}</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {t.about.highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="border-b border-line pb-8 last:border-0 last:pb-0"
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 font-display text-sm text-oak-500 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-h4 text-ink-900">{item.title}</h3>
                    <p className="mt-3 text-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24} className="flex flex-wrap gap-2">
              {[...t.about.tags, ...brand.incoterms].map((tag) => (
                <span key={tag} className="chip">
                  <Icon name="check" size={13} />
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
