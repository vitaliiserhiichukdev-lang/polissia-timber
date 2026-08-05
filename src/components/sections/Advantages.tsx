import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import SectionReveal from '../ui/SectionReveal'
import { useI18n } from '../../i18n/useI18n'

export default function Advantages() {
  const { t } = useI18n()

  return (
    <section id="advantages" className="py-section">
      <SectionReveal className="container-page">
        <SectionHeader
          align="center"
          eyebrow={t.advantages.eyebrow}
          title={t.advantages.title}
          lead={t.advantages.lead}
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {t.advantages.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="card-surface card-hover group flex h-full flex-col gap-4 p-7">
                <span className="grid size-12 place-items-center rounded-2xl border border-line bg-sand-50 text-oak-600 transition-colors duration-400 group-hover:border-transparent group-hover:bg-oak-600 group-hover:text-white">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="text-h4 text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                <span
                  aria-hidden="true"
                  className="mt-auto h-px w-10 bg-oak-500 transition-all duration-500 ease-expo group-hover:w-20"
                />
              </article>
            </Reveal>
          ))}
        </ul>
      </SectionReveal>
    </section>
  )
}
