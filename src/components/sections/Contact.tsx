import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon, { type IconName } from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import QuoteForm from '../product/QuoteForm'
import { brand } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'

export default function Contact() {
  const { t, photo } = useI18n()
  const sidePhoto = photo.oakGradeB

  const rows: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: 'mail', label: t.contact.labels.email, value: brand.email, href: `mailto:${brand.email}` },
    {
      icon: 'phone',
      label: t.contact.labels.phone,
      value: brand.phone,
      href: `tel:${brand.phoneHref}`,
    },
    { icon: 'pin', label: t.contact.labels.production, value: t.contact.values.address },
    { icon: 'clock', label: t.contact.labels.hours, value: t.contact.values.hours },
    { icon: 'globe', label: t.contact.labels.languages, value: t.contact.values.languages },
  ]

  return (
    <section id="contact" className="grain relative bg-sand-50 py-section">
      <span aria-hidden="true" className="grain-layer" />

      <SectionReveal className="container-page relative">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} lead={t.contact.lead} />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
          <Reveal variant="right" className="flex flex-col gap-6">
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {rows.map((row) => (
                <li key={row.label} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-white text-oak-600">
                    <Icon name={row.icon} size={17} />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a href={row.href} className="link-arrow mt-0.5 inline-block text-ink-900">
                        {row.value}
                      </a>
                    ) : (
                      <span className="mt-0.5 block text-ink-900">{row.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="overflow-hidden rounded-3xl border border-line">
              <img
                src={sidePhoto.src}
                alt={sidePhoto.alt}
                width={sidePhoto.width}
                height={sidePhoto.height}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover"
              />
            </div>

            <p className="text-sm text-muted">
              {t.contact.noteBefore}
              <a href={`mailto:${brand.email}`} className="font-medium text-oak-600 underline">
                {brand.email}
              </a>
              {t.contact.noteAfter}
            </p>
          </Reveal>

          <Reveal variant="left">
            <QuoteForm />
          </Reveal>
        </div>
      </SectionReveal>
    </section>
  )
}
