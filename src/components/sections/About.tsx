import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'
import Icon from '../ui/Icon'
import { aboutHighlights, company } from '../../data/company'

export default function About() {
  return (
    <section id="about" className="grain relative scroll-mt-24 py-section">
      <span aria-hidden="true" className="grain-layer" />

      <div className="container-page relative">
        <SectionHeader
          eyebrow="About the company"
          title="A Ukrainian producer built for European buyers"
          lead="We offer a wide range of natural wood products manufactured according to modern quality standards and international market requirements — and we control the whole route from log to loaded truck."
          actions={
            <Link to="/#production" className="link-arrow">
              See how we produce
              <Icon name="arrowRight" size={17} />
            </Link>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Image stack */}
          <Reveal variant="right" className="relative">
            <div className="overflow-hidden rounded-4xl border border-line bg-sand-100 shadow-mid">
              <img
                src="/additional_image/oak_edged_board.jpg"
                alt="Close-up of a planed oak edged board showing its 30 mm thickness and clean edge"
                width={1052}
                height={812}
                loading="lazy"
                decoding="async"
                className="aspect-4/3 w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-line bg-sand-100">
                <img
                  src="/building_materials/pine_tree_4.jpg"
                  alt="Large stacks of pine timber in the export yard"
                  width={960}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-ink-900 p-6 text-inverse">
                <Icon name="quote" size={26} className="text-oak-400" />
                <p className="mt-4 font-display text-lg leading-snug">
                  “We value long-term partnerships and guarantee high product quality on every
                  order.”
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="flex flex-col gap-8">
            {aboutHighlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="border-b border-line pb-8 last:border-0 last:pb-0">
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
              {['Own production', 'Written specifications', 'Export documentation', ...company.incoterms].map(
                (tag) => (
                  <span key={tag} className="chip">
                    <Icon name="check" size={13} />
                    {tag}
                  </span>
                ),
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
