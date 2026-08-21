import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import Icon from '../components/Icon.jsx'
import HeroStill from '../components/HeroStill.jsx'
import { home } from '../content/home.js'
import { ideas } from '../content/ideas.js'
import { projects } from '../content/projects.js'
import { usePageTitle } from '../usePageTitle.js'

export default function Home() {
  usePageTitle()
  const featured = projects.slice(0, 4)
  const notes = ideas.slice(0, 3)

  return (
    <>
      <Section className="pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="script text-4xl sm:text-5xl">Hi, I’m</p>
            <h1 className="display mt-2 text-4xl text-burgundy sm:text-6xl lg:text-7xl">
              Khushboo Sangwan.
            </h1>
            <p className="mt-4 text-sm tracking-wide text-charcoal/70 sm:text-base">
              {home.role}
            </p>
            <p className="mt-8 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
              I believe your life is the{' '}
              <em className="text-burgundy">biggest</em> project you’ll ever manage.
            </p>
            <p className="mt-4 font-serif text-xl italic text-charcoal/80">{home.question}</p>
            <Link to="/work" className="btn-primary mt-10">
              Work With Me <Arrow />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <HeroStill />
          </div>
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-24">
        <p className="eyebrow">{home.ideasNeed.eyebrow}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl uppercase text-burgundy sm:text-5xl">
          {home.perspectives.title}
        </h2>
        <p className="lede mt-6">{home.perspectives.intro}</p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {home.perspectives.items.map((item) => (
            <article key={item.n} className="text-center sm:text-left">
              <Icon name={item.icon} className="mx-auto h-8 w-8 text-burgundy sm:mx-0" />
              <h3 className="mt-4 font-serif text-xl text-burgundy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-wine py-16 text-cream sm:py-20">
        <p className="text-[0.7rem] uppercase tracking-brand text-gold">{home.stats.eyebrow}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.stats.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/50">
                <span className="font-serif text-3xl">{item.n}</span>
              </div>
              <p className="mt-4 text-sm font-medium">{item.label}</p>
              <p className="mt-2 text-xs leading-5 text-cream/60">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="script mx-auto mt-12 max-w-xl text-center text-3xl text-gold sm:text-4xl">
          {home.stats.quote}
        </p>
      </Section>

      <Section className="py-20 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Featured projects</p>
            <h2 className="display mt-3 text-3xl sm:text-5xl">
              Here’s what that looks like in practice.
            </h2>
          </div>
          <Link to="/projects" className="text-link">
            See all projects <Arrow />
          </Link>
        </div>
        <p className="lede mt-6">
          Every project comes with its own goals, people, limitations and unexpected problems. I look at what needs to be achieved, understand what’s getting in the way and build the way forward.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col border border-taupe/40 bg-cream"
            >
              <div className="flex aspect-[4/3] items-end bg-wine p-4">
                <p className="text-[0.62rem] uppercase tracking-brand text-gold">{project.status}</p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-2xl group-hover:text-burgundy">{project.title}</h3>
                <p className="mt-2 text-xs leading-5 text-charcoal/55">{project.kicker}</p>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-charcoal/75">
                  {project.summary}
                </p>
                <span className="text-link mt-5 text-xs uppercase tracking-brand">
                  View project <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-24">
        <p className="eyebrow">{home.change.eyebrow}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl sm:text-5xl">{home.change.title}</h2>
        <p className="lede mt-6">{home.change.body}</p>
        <p className="mt-4 max-w-measure font-serif text-xl italic text-burgundy">
          {home.change.emphasis}
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.change.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <p className="eyebrow">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-2xl text-burgundy">{step.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="script mt-12 text-3xl text-burgundy sm:text-4xl">{home.change.close}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Ideas, insights & notes</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">What I’m thinking about.</h2>
            <div className="mt-8 divide-y divide-taupe/40 border-y border-taupe/40">
              {notes.map((note) => (
                <Link key={note.slug} to={`/ideas/${note.slug}`} className="group block py-5">
                  <p className="eyebrow">{note.tags.join(' · ')}</p>
                  <h3 className="mt-2 font-serif text-xl group-hover:text-burgundy">{note.title}</h3>
                </Link>
              ))}
            </div>
            <Link to="/ideas" className="text-link mt-6">
              View all blogs <Arrow />
            </Link>
          </div>
          <div>
            <p className="eyebrow">Resources & products</p>
            <h2 className="display mt-3 text-3xl sm:text-4xl">{home.shopTeaser.title}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/70">{home.shopTeaser.body}</p>
            <ul className="mt-8 divide-y divide-taupe/40 border-y border-taupe/40">
              {home.shopTeaser.items.map((item) => (
                <li key={item.title} className="flex items-start justify-between gap-4 py-5">
                  <div>
                    <p className="font-serif text-xl text-burgundy">{item.title}</p>
                    <p className="mt-1 text-sm text-charcoal/65">{item.body}</p>
                  </div>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                </li>
              ))}
            </ul>
            <Link to="/shop" className="text-link mt-6">
              Explore products <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-16 sm:py-20">
        <p className="script text-3xl">{home.aboutTeaser.eyebrow}</p>
        <h2 className="display mt-3 max-w-3xl text-3xl sm:text-4xl">{home.aboutTeaser.title}</h2>
        <p className="mt-6 max-w-measure font-serif text-2xl italic text-burgundy">
          {home.aboutTeaser.question}
        </p>
        <Link to="/about" className="text-link mt-8">
          Meet Khushboo <Arrow />
        </Link>
      </Section>

      <Section className="bg-burgundy py-20 text-cream sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="display max-w-3xl text-3xl text-cream sm:text-5xl">{home.cta.title}</h2>
            <p className="mt-6 max-w-measure text-base leading-8 text-cream/80">{home.cta.body}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-cream px-6 py-3 text-xs uppercase tracking-brand text-burgundy hover:bg-gold hover:text-wine"
            >
              Start a conversation <Arrow />
            </Link>
            <p className="mt-4 text-sm italic text-gold">{home.cta.aside}</p>
          </div>
        </div>
      </Section>
    </>
  )
}
