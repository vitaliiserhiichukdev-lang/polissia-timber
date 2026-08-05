import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import { useI18n } from '../../i18n/useI18n'
import { answeredFaq } from '../../seo/faq'

/**
 * Native `<details>` accordion — no state, no JS, and the answers are in the
 * prerendered HTML whether or not they are open. That matters here: the FAQ
 * exists as much for the FAQPage rich result and AI answer engines as for the
 * visitor, and both read markup rather than clicks.
 *
 * The matching FAQPage JSON-LD is emitted from `pageSeo`, off the same list.
 */
export default function Faq() {
  const { t } = useI18n()
  const items = answeredFaq(t)

  if (items.length === 0) return null

  return (
    <section id="faq" className="bg-sand-50 py-section">
      <SectionReveal className="container-page">
        <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} lead={t.faq.lead} />

        <ul className="mx-auto flex max-w-prose flex-col gap-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.question} delay={Math.min(i, 6) * 0.04}>
              <details className="card-surface faq-item group overflow-hidden [&[open]]:border-sand-300">
                {/* `list-none` covers Firefox and Chrome; Safari needs the
                    vendor pseudo-element to drop the disclosure triangle. */}
                <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-4.5 md:px-6 [&::-webkit-details-marker]:hidden">
                  <span className="flex-1 font-display text-lg leading-snug text-ink-900 transition-colors group-hover:text-oak-600 group-open:text-oak-700">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-oak-600 transition-transform duration-400 ease-expo group-open:rotate-45"
                  >
                    <Icon name="plus" size={20} />
                  </span>
                </summary>
                <p className="border-t border-line px-5 py-4.5 leading-relaxed text-muted md:px-6">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </ul>
      </SectionReveal>
    </section>
  )
}
