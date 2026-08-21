import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { home } from '../content/home.js'
import { ideas } from '../content/ideas.js'
import { projects } from '../content/projects.js'
import { usePageTitle } from '../usePageTitle.js'

export default function Home() {
  usePageTitle()
  const featured = projects.filter((project) => project.featured)
  const notes = ideas.slice(0, 4)

  return (
    <>
      <Section className="pb-20 pt-16 sm:pb-28 sm:pt-24">
        <p className="eyebrow">Write From Left</p>
        <p className="mt-8 text-sm tracking-wide text-charcoal/70 sm:text-base">
          {home.greeting}
          <span className="mt-1 block">{home.role}</span>
        </p>
        <h1 className="display mt-8 max-w-4xl text-5xl sm:text-7xl lg:text-[5.25rem]">
          {home.headline}
        </h1>
        <p className="mt-8 font-serif text-2xl italic text-burgundy sm:text-3xl">
          {home.question}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/work" className="btn-primary">
            Work with me
            <Arrow />
          </Link>
          <Link to="/projects" className="btn-ghost">
            See the work
          </Link>
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">{home.ideasNeed.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{home.ideasNeed.title}</h2>
        <ul className="mt-10 max-w-xl space-y-2 text-lg leading-8 text-charcoal/80">
          {home.ideasNeed.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-10 max-w-measure text-lg leading-8">{home.ideasNeed.close}</p>
        <p className="lede mt-4">{home.ideasNeed.body}</p>
        <p className="mt-8 max-w-2xl font-serif text-2xl leading-snug text-burgundy sm:text-3xl">
          {home.ideasNeed.punch}
        </p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">{home.perspectives.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{home.perspectives.title}</h2>
        <p className="lede mt-6">{home.perspectives.intro}</p>
        <div className="mt-14 grid gap-px bg-taupe/50 sm:grid-cols-2">
          {home.perspectives.items.map((item) => (
            <article key={item.n} className="bg-cream p-8 sm:p-10">
              <p className="eyebrow">{item.n}</p>
              <h3 className="mt-4 font-serif text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-4 leading-7 text-charcoal/75">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="lede mt-12">{home.perspectives.writing}</p>
      </Section>

      <Section className="bg-wine py-20 text-cream sm:py-28">
        <p className="font-sans text-[0.7rem] uppercase tracking-brand text-gold">
          {home.change.eyebrow}
        </p>
        <h2 className="display mt-4 max-w-3xl text-4xl text-cream sm:text-5xl">
          {home.change.title}
        </h2>
        <p className="mt-6 max-w-measure text-lg leading-8 text-cream/75">{home.change.body}</p>
        <p className="mt-6 max-w-measure font-serif text-2xl italic text-gold">
          {home.change.emphasis}
        </p>
        <p className="mt-4 max-w-measure text-cream/75">{home.change.follow}</p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.change.steps.map((step, index) => (
            <div key={step.title} className="border-t border-cream/20 pt-5">
              <p className="text-[0.7rem] uppercase tracking-brand text-gold">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl font-serif text-2xl leading-snug text-cream">
          {home.change.close}
        </p>
      </Section>

      <Section className="py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected projects</p>
            <h2 className="display mt-4 max-w-2xl text-4xl sm:text-5xl">
              Here’s what that looks like in practice.
            </h2>
          </div>
          <Link to="/projects" className="text-link">
            View all projects <Arrow />
          </Link>
        </div>
        <p className="lede mt-6">
          Every project comes with its own goals, people, limitations and unexpected problems. I look at what needs to be achieved, understand what’s getting in the way and build the way forward.
        </p>
        <div className="mt-14 divide-y divide-taupe/50 border-y border-taupe/50">
          {featured.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group grid gap-4 py-10 lg:grid-cols-12 lg:items-start"
            >
              <p className="eyebrow lg:col-span-3">{project.status}</p>
              <div className="lg:col-span-9">
                <h3 className="font-serif text-3xl transition-colors group-hover:text-burgundy sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/55">{project.kicker}</p>
                <p className="mt-4 max-w-2xl leading-7 text-charcoal/80">{project.challenge}</p>
                <span className="text-link mt-6">
                  Explore project <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">{home.currently.eyebrow}</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">{home.currently.title}</h2>
        <p className="mt-4 font-serif text-2xl italic text-burgundy">{home.currently.lede}</p>
        <p className="lede mt-6">{home.currently.body}</p>
        <p className="mt-4 max-w-measure leading-7 text-charcoal/75">{home.currently.more}</p>
        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          {home.currently.meta.map((item) => (
            <div key={item.label} className="border-t border-taupe/50 pt-4">
              <dt className="eyebrow">{item.label}</dt>
              <dd className="mt-2 text-sm leading-6">{item.value}</dd>
            </div>
          ))}
        </dl>
        <Link to="/projects/chapter-one" className="text-link mt-10">
          Follow the project <Arrow />
        </Link>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Notebook</p>
            <h2 className="display mt-4 text-4xl sm:text-5xl">What I’m thinking about.</h2>
          </div>
          <Link to="/ideas" className="text-link">
            Read more <Arrow />
          </Link>
        </div>
        <p className="lede mt-6">
          I write about the things I actually work with: project management, creative strategy, content, productivity and the process of turning ideas into something real.
        </p>
        <div className="mt-12 grid gap-px bg-taupe/50 sm:grid-cols-2">
          {notes.map((note) => (
            <Link key={note.slug} to={`/ideas/${note.slug}`} className="group bg-cream p-8 sm:p-10">
              <p className="eyebrow">{note.tags.join(' · ')}</p>
              <h3 className="mt-4 font-serif text-2xl leading-snug group-hover:text-burgundy sm:text-3xl">
                {note.title}
              </h3>
              <span className="text-link mt-6">
                Read <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">{home.shopTeaser.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{home.shopTeaser.title}</h2>
        <p className="lede mt-6">{home.shopTeaser.body}</p>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {home.shopTeaser.items.map((item) => (
            <article key={item.title} className="border-t border-taupe/50 pt-5">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.body}</p>
            </article>
          ))}
        </div>
        <Link to="/shop" className="text-link mt-10">
          Explore products <Arrow />
        </Link>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">{home.aboutTeaser.eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">{home.aboutTeaser.title}</h2>
        <p className="lede mt-6">{home.aboutTeaser.body}</p>
        <p className="mt-8 font-serif text-4xl italic text-burgundy sm:text-5xl">
          {home.aboutTeaser.question}
        </p>
        <p className="mt-6 text-lg">{home.aboutTeaser.close}</p>
        <Link to="/about" className="text-link mt-10">
          Meet Khushboo <Arrow />
        </Link>
      </Section>

      <Section className="bg-charcoal py-20 text-cream sm:py-28">
        <h2 className="display max-w-3xl text-4xl text-cream sm:text-5xl">{home.cta.title}</h2>
        <p className="mt-6 max-w-measure text-lg leading-8 text-cream/75">{home.cta.body}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/work" className="btn-primary">
            Work with me
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-cream/30 px-6 py-3 text-xs uppercase tracking-brand text-cream hover:border-gold hover:text-gold"
          >
            Start a conversation
          </Link>
        </div>
        <p className="mt-8 text-sm italic text-gold">{home.cta.aside}</p>
      </Section>
    </>
  )
}
