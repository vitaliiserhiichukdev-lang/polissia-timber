import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon, { type IconName } from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import QuoteForm from '../product/QuoteForm'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { brand, whatsappHref } from '../../data/contact'
import { useI18n } from '../../i18n/useI18n'

export default function Contact() {
  const { t } = useI18n()

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

            {/* The fastest channel gets its own panel: a buyer on a phone would
                rather send a photo of a floor plan than fill in a form. */}
            <div className="flex flex-col gap-4 rounded-3xl bg-ink-900 p-6 text-inverse">
              <span className="grid size-12 place-items-center rounded-2xl bg-whatsapp text-white">
                <WhatsAppIcon size={26} />
              </span>
              <div>
                <h3 className="text-h4 text-inverse">{t.contact.whatsappTitle}</h3>
                <p className="mt-2 text-sm text-inverse-muted">{t.contact.whatsappBody}</p>
              </div>
              <a
                href={whatsappHref(t.whatsapp.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp self-start"
              >
                <WhatsAppIcon size={18} />
                {t.common.whatsappCta}
              </a>
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
