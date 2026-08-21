import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { projects, selfInitiated } from '../content/projects.js'
import { usePageTitle } from '../usePageTitle.js'

export default function Projects() {
  usePageTitle('Projects')

  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-24 sm:pt-24" reveal>
        <p className="eyebrow">Projects</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">
          Ideas are only the beginning.
        </h1>
        <p className="lede mt-8">
          A project starts with a goal. Then reality gets involved. Deadlines move. Priorities change. Problems appear. People need direction. Sometimes the original idea needs to change completely.
        </p>
        <p className="mt-6 max-w-measure text-lg">That’s where I come in.</p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">Currently in motion</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="display text-4xl sm:text-5xl">Chapter One</h2>
            <p className="mt-4 font-serif text-2xl italic text-burgundy">
              A writing community built around actually finishing the book.
            </p>
            <p className="lede mt-6">
              Community + Accountability + Writing + Project Structure. Weekly writing sessions create dedicated working time, while discussion and shared progress help members keep moving.
            </p>
            <Link to="/projects/chapter-one" className="text-link mt-8">
              Explore Chapter One <Arrow />
            </Link>
          </div>
          <aside className="border-t border-taupe/50 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="eyebrow">Status</p>
            <p className="mt-3 font-serif text-2xl">Ongoing</p>
            <p className="mt-6 text-sm leading-6 text-charcoal/70">
              The challenge is not more motivation. It is a system that makes progress easier to maintain.
            </p>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">Selected projects</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
          Every project has a problem to solve.
        </h2>
        <p className="lede mt-6">
          Some begin with a clear brief. Others begin with: “We need to make this work, but we’re not quite sure how.”
        </p>
        <div className="mt-14 divide-y divide-taupe/50 border-y border-taupe/50">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group grid gap-4 py-10 lg:grid-cols-12"
            >
              <p className="eyebrow lg:col-span-2">0{index + 1}</p>
              <div className="lg:col-span-10">
                <h3 className="font-serif text-3xl group-hover:text-burgundy sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/55">{project.kicker}</p>
                <p className="mt-4 max-w-2xl leading-7 text-charcoal/80">{project.summary}</p>
                <span className="text-link mt-6">
                  View project <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-wine py-20 text-cream sm:py-28">
        <p className="text-[0.7rem] uppercase tracking-brand text-gold">
          What these projects have in common
        </p>
        <p className="mt-4 max-w-xl text-cream/70">
          Different industries. Different audiences. Different problems. But the process stays remarkably familiar.
        </p>
        <ol className="mt-10 max-w-xl space-y-3 font-serif text-2xl sm:text-3xl">
          {[
            'Define the goal.',
            'Understand the problem.',
            'Build the plan.',
            'Coordinate the moving parts.',
            'Create the right solution.',
            'Adapt when reality changes.',
            'Deliver.',
          ].map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ol>
        <p className="mt-10 text-sm uppercase tracking-brand text-gold">
          That is the work behind the work.
        </p>
      </Section>

      <Section className="py-20 sm:py-28">
        <p className="eyebrow">Self-initiated</p>
        <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">
          I don’t wait for someone to hand me a brief.
        </h2>
        <p className="lede mt-6">
          Some of my projects begin with a problem I notice, an idea I want to test or something I believe could work better. A problem → A goal → A strategy → A plan → Execution → Learning.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {selfInitiated.map((item) => (
            <Link key={item.title} to={item.to} className="group border-t border-taupe/50 pt-5">
              <p className="eyebrow">{item.status}</p>
              <h3 className="mt-3 font-serif text-2xl group-hover:text-burgundy">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <h2 className="display max-w-3xl text-4xl sm:text-5xl">Have a project of your own?</h2>
        <p className="lede mt-6">
          You don’t need to have everything figured out before you reach out. Bring me the idea. Bring me the problem. Bring me the messy version.
        </p>
        <Link to="/work" className="text-link mt-8">
          Work with me <Arrow />
        </Link>
      </Section>
    </>
  )
}
