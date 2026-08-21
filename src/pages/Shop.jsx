import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { shop } from '../content/shop.js'
import { site } from '../content/site.js'
import { usePageTitle } from '../usePageTitle.js'

export default function Shop() {
  usePageTitle('Shop')

  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-24 sm:pt-24">
        <p className="eyebrow">{shop.eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">{shop.title}</h1>
        <p className="lede mt-8">{shop.lede}</p>
        <p className="mt-4 max-w-measure leading-7 text-charcoal/75">{shop.body}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <div className="space-y-16">
          {shop.collections.map((item) => (
            <article key={item.n} className="grid gap-6 border-t border-taupe/40 pt-10 lg:grid-cols-12">
              <p className="eyebrow lg:col-span-2">{item.n}</p>
              <div className="lg:col-span-8">
                <p className="text-xs uppercase tracking-brand text-charcoal/45">{item.status}</p>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl">{item.title}</h2>
                <p className="mt-3 font-serif text-xl italic text-burgundy">{item.kicker}</p>
                <p className="mt-4 max-w-measure leading-7 text-charcoal/80">{item.body}</p>
              </div>
              <p className="self-end text-sm text-charcoal/45 lg:col-span-2 lg:text-right">
                {item.cta}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">Start with what you need</p>
        <div className="mt-10 divide-y divide-taupe/40 border-y border-taupe/40">
          {shop.start.map((item) => (
            <div key={item.q} className="grid gap-2 py-6 sm:grid-cols-12">
              <p className="font-serif text-xl sm:col-span-7">{item.q}</p>
              <p className="text-sm text-burgundy sm:col-span-5 sm:text-right sm:self-center">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-wine py-20 text-cream sm:py-28">
        <p className="text-[0.7rem] uppercase tracking-brand text-gold">
          The Write From Left philosophy
        </p>
        <p className="mt-6 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
          Good ideas are everywhere. The difference is what happens next.
        </p>
        <p className="mt-6 max-w-measure text-lg leading-8 text-cream/75">{shop.philosophy}</p>
        <p className="mt-10 font-serif text-xl italic text-gold">{site.belief}</p>
      </Section>

      <Section className="py-20 sm:py-28">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">
          Have an idea you’re trying to turn into a project?
        </h2>
        <p className="lede mt-6">You can always talk to me.</p>
        <Link to="/contact" className="text-link mt-8">
          Let’s talk <Arrow />
        </Link>
      </Section>
    </>
  )
}
