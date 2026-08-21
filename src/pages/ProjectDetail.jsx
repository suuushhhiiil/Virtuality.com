import { usePageTitle } from '../usePageTitle.js'
import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { projects } from '../content/projects.js'

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug)

  usePageTitle(project ? project.title : 'Project')

  if (!project) {
    return (
      <Section className="py-28">
        <h1 className="display text-4xl">This project isn’t here.</h1>
        <Link to="/projects" className="text-link mt-8">
          Back to projects <Arrow />
        </Link>
      </Section>
    )
  }

  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-20 sm:pt-24" reveal>
        <Link to="/projects" className="text-link">
          All projects
        </Link>
        <p className="eyebrow mt-10">{project.status}</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">{project.title}</h1>
        <p className="mt-4 text-sm text-charcoal/55">{project.kicker}</p>
        <p className="lede mt-8">{project.summary}</p>
      </Section>

      <Section className="border-t border-taupe/40 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="prose-body max-w-measure lg:col-span-7">
            {project.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-charcoal/80">
                {paragraph}
              </p>
            ))}
          </div>
          <dl className="space-y-8 lg:col-span-5">
            <div className="border-t border-taupe/50 pt-4">
              <dt className="eyebrow">The challenge</dt>
              <dd className="mt-3 leading-7 text-charcoal/80">{project.challenge}</dd>
            </div>
            <div className="border-t border-taupe/50 pt-4">
              <dt className="eyebrow">The approach</dt>
              <dd className="mt-3 leading-7 text-charcoal/80">{project.approach}</dd>
            </div>
            <div className="border-t border-taupe/50 pt-4">
              <dt className="eyebrow">The work</dt>
              <dd className="mt-3 leading-7 text-charcoal/80">{project.work}</dd>
            </div>
            <div className="border-t border-taupe/50 pt-4">
              <dt className="eyebrow">The outcome</dt>
              <dd className="mt-3 leading-7 text-charcoal/80">{project.outcome}</dd>
            </div>
          </dl>
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-16 sm:py-24">
        <p className="max-w-xl font-serif text-2xl leading-snug">
          A finished project is not the only measure of success. Sometimes the most valuable part is what happened when things went wrong.
        </p>
        <Link to="/contact" className="text-link mt-8">
          Bring me a project <Arrow />
        </Link>
      </Section>
    </>
  )
}
