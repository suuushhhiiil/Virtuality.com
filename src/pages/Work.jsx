import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { work } from '../content/work.js'
import { usePageTitle } from '../usePageTitle.js'

export default function Work() {
  usePageTitle('Work With Me')

  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-24 sm:pt-24" reveal>
        <p className="eyebrow">{work.eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">{work.title}</h1>
        <p className="lede mt-8">{work.lede}</p>
        <p className="mt-4 max-w-measure text-lg leading-8 text-charcoal/75">{work.body}</p>
        <p className="mt-8 font-serif text-2xl italic text-burgundy sm:text-3xl">{work.punch}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">What I bring to the table</p>
        <div className="mt-12 space-y-16">
          {work.offerings.map((item) => (
            <article key={item.n} className="grid gap-6 lg:grid-cols-12">
              <p className="eyebrow lg:col-span-2">{item.n}</p>
              <div className="lg:col-span-10">
                <h2 className="font-serif text-3xl sm:text-4xl">{item.title}</h2>
                <p className="mt-2 font-serif text-xl italic text-burgundy">{item.kicker}</p>
                <p className="mt-4 max-w-measure leading-7 text-charcoal/80">{item.body}</p>
                {item.punch ? (
                  <p className="mt-4 max-w-measure font-medium">{item.punch}</p>
                ) : null}
                {item.items ? (
                  <ul className="mt-6 grid gap-2 text-sm text-charcoal/70 sm:grid-cols-2">
                    {item.items.map((entry) => (
                      <li key={entry} className="border-l border-gold pl-3">
                        {entry}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-wine py-20 text-cream sm:py-28">
        <p className="text-[0.7rem] uppercase tracking-brand text-gold">{work.process.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
          {work.process.title}
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {work.process.steps.map((step) => (
            <article key={step.n} className="border-t border-cream/20 pt-5">
              <p className="text-[0.7rem] uppercase tracking-brand text-gold">{step.n}</p>
              <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-cream/70">{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="py-20 sm:py-28">
        <p className="eyebrow">{work.tools.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{work.tools.title}</h2>
        <dl className="mt-12 grid gap-8 sm:grid-cols-2">
          {work.tools.groups.map((group) => (
            <div key={group.label} className="border-t border-taupe/50 pt-4">
              <dt className="text-sm font-medium">{group.label}</dt>
              <dd className="mt-2 text-sm leading-6 text-charcoal/70">{group.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">{work.bring.eyebrow}</p>
        <div className="mt-10 divide-y divide-taupe/40 border-y border-taupe/40">
          {work.bring.items.map((item) => (
            <div key={item.q} className="grid gap-2 py-6 sm:grid-cols-12 sm:gap-8">
              <p className="font-serif text-xl sm:col-span-7">“{item.q}”</p>
              <p className="text-sm text-burgundy sm:col-span-5 sm:text-right sm:self-center">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">{work.why.title}</h2>
        <p className="mt-6 font-serif text-2xl italic text-burgundy">{work.why.punch}</p>
        <ul className="mt-8 max-w-xl space-y-2 text-lg leading-8 text-charcoal/80">
          {work.why.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-8 text-lg">{work.why.close}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">What I can help you build</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {work.build.map((item) => (
            <article key={item.title} className="border-t border-taupe/50 pt-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-charcoal py-20 text-cream sm:py-28">
        <h2 className="display max-w-3xl text-4xl text-cream sm:text-5xl">
          Let’s talk about your project
        </h2>
        <p className="mt-6 max-w-measure text-lg leading-8 text-cream/75">
          You do not need to have everything figured out before you reach out. Bring me the idea. Bring me the problem. Bring me the messy version. We can figure out the structure together.
        </p>
        <Link to="/contact" className="btn-primary mt-10">
          Start a conversation <Arrow />
        </Link>
        <p className="mt-6 text-sm text-cream/50">
          No pressure. No complicated brief required. Just tell me what you’re trying to build.
        </p>
      </Section>
    </>
  )
}
