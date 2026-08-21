import { usePageTitle } from '../usePageTitle.js'
import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { ideas } from '../content/ideas.js'

export default function IdeaDetail({ slug }) {
  const idea = ideas.find((item) => item.slug === slug)

  usePageTitle(idea ? idea.title : 'Idea')

  if (!idea) {
    return (
      <Section className="py-28">
        <h1 className="display text-4xl">This note isn’t here.</h1>
        <Link to="/ideas" className="text-link mt-8">
          Back to ideas <Arrow />
        </Link>
      </Section>
    )
  }

  return (
    <Section className="py-16 sm:py-24" innerClass="max-w-2xl">
      <Link to="/ideas" className="text-link">
        All ideas
      </Link>
      <p className="eyebrow mt-10">{idea.tags.join(' · ')}</p>
      <h1 className="display mt-4 text-4xl sm:text-6xl">{idea.title}</h1>
      <p className="mt-6 font-serif text-xl italic text-burgundy">{idea.summary}</p>
      <div className="prose-body mt-10">
        {idea.body.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8 text-charcoal/85">
            {paragraph}
          </p>
        ))}
      </div>
      <p className="mt-14 border-t border-taupe/50 pt-8 font-serif text-xl italic text-charcoal/70">
        Change the plan, not the dream.
      </p>
    </Section>
  )
}
