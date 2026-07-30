import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import QuoteForm from '../product/QuoteForm'
import { company } from '../../data/company'
import type { IconName } from '../ui/Icon'

const contactRows: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: 'phone', label: 'Phone', value: company.phone, href: `tel:${company.phoneHref}` },
  {
    icon: 'pin',
    label: 'Production & export',
    value: `${company.address.city}, ${company.address.country}`,
  },
  { icon: 'clock', label: 'Office hours', value: company.hours },
  { icon: 'globe', label: 'We speak', value: company.languages.join(', ') },
]

export default function Contact() {
  return (
    <section id="contact" className="grain relative scroll-mt-24 bg-sand-50 py-section">
      <span aria-hidden="true" className="grain-layer" />

      <div className="container-page relative">
        <SectionHeader
          eyebrow="Request a quote"
          title="Tell us what you need — we quote in one business day"
          lead="Send your sections, grades and volumes. If you are not sure yet, describe the application and we will propose the most economical specification."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-12">
          {/* Contact details */}
          <Reveal variant="right" className="flex flex-col gap-6">
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {contactRows.map((row) => (
                <li key={row.label} className="flex items-start gap-4 py-4">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-white text-oak-600">
                    <Icon name={row.icon} size={17} />
                  </span>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.1em] text-muted uppercase">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="link-arrow mt-0.5 inline-block text-ink-900 hover:text-oak-600"
                      >
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
                src="/board/sortC.jpg"
                alt="Oak edged boards laid out for grade inspection"
                width={676}
                height={1280}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover"
              />
            </div>

            <p className="text-sm text-muted">
              Prefer email? Write directly to{' '}
              <a href={`mailto:${company.email}`} className="font-medium text-oak-600 underline">
                {company.email}
              </a>{' '}
              and attach your specification — we reply in English, German or Polish.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal variant="left">
            <QuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
