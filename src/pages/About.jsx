import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { about } from '../content/about.js'
import { usePageTitle } from '../usePageTitle.js'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <p className="eyebrow">{about.eyebrow}</p>
        <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-brand text-burgundy">
          {about.brand}
        </p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">{about.motto}</h1>
        <div className="prose-body mt-10 max-w-measure">
          {about.origin.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-serif text-2xl italic text-burgundy sm:text-3xl">
          {about.think}
        </p>
        <p className="mt-6 max-w-measure leading-7">{about.advantage}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <h2 className="display text-4xl sm:text-6xl">{about.introTitle}</h2>
        <div className="prose-body mt-8 max-w-measure">
          {about.intro.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">{about.between.title}</h2>
        <div className="prose-body mt-8 max-w-measure">
          {about.between.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>
        <ul className="mt-10 max-w-xl space-y-3 font-serif text-2xl leading-snug">
          {about.between.lessons.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-measure text-lg">{about.between.close}</p>
      </Section>

      <Section className="bg-wine py-20 text-cream sm:py-28">
        <h2 className="display max-w-3xl text-4xl text-cream sm:text-5xl">{about.life.title}</h2>
        <div className="mt-8 max-w-measure space-y-5 text-lg leading-8 text-cream/75">
          {about.life.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-10 max-w-xl space-y-4 text-cream">
          {about.life.examples.map((line) => (
            <li key={line} className="border-l border-gold pl-4 leading-7">
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-xl font-serif text-2xl italic text-gold">{about.life.close}</p>
      </Section>

      <Section className="py-20 sm:py-28">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">{about.project.title}</h2>
        <div className="prose-body mt-8 max-w-measure">
          {about.project.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-8 font-serif text-3xl italic text-burgundy">{about.project.punch}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">What Write From Left stands for</p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {about.stands.map((item) => (
            <article key={item.title} className="border-t border-taupe/50 pt-5">
              <h3 className="font-serif text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-3 leading-7 text-charcoal/75">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-measure leading-7">
          And most importantly: <em>Be different. Be rare. Be you.</em> It is not really about being left-handed. It is about refusing to believe that there is only one right way to do something.
        </p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <h2 className="display text-4xl sm:text-5xl">{about.outside.title}</h2>
        <div className="prose-body mt-8 max-w-measure">
          {about.outside.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="bg-charcoal py-20 text-cream sm:py-28">
        <h2 className="display text-4xl text-cream sm:text-5xl">{about.take.title}</h2>
        <ul className="mt-8 max-w-xl space-y-2 text-lg leading-8 text-cream/80">
          {about.take.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-8 font-serif text-2xl italic text-gold">{about.take.punch}</p>
        <Link to="/ideas" className="text-link mt-10 text-cream hover:text-gold">
          Explore my ideas <Arrow />
        </Link>
      </Section>
    </>
  )
}
