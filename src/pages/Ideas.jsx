import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { ideas } from '../content/ideas.js'
import { usePageTitle } from '../usePageTitle.js'

const topics = [
  {
    title: 'Project thinking',
    body: 'How I approach projects when things change, deadlines move, resources are limited or the original plan stops making sense. When the plan changes, I change the plan.',
  },
  {
    title: 'Creative strategy',
    body: 'Ideas, campaigns, content and creative problems that need more than inspiration. Finding the connection between what people want, what a project needs and what actually makes sense.',
  },
  {
    title: 'Content & storytelling',
    body: 'Writing is not just about putting words together. It is about understanding the audience, finding the right message and knowing what the message needs to achieve.',
  },
  {
    title: 'Building from scratch',
    body: 'The messy middle: the stage where you have an idea but no structure yet. How I think through concepts, organise moving parts and turn an idea into something that can exist.',
  },
]

export default function Ideas() {
  usePageTitle('Ideas')

  return (
    <>
      <Section className="pb-16 pt-16 sm:pb-24 sm:pt-24" reveal>
        <p className="eyebrow">Blog</p>
        <h1 className="display mt-4 max-w-4xl text-5xl sm:text-7xl">
          Ideas are only useful when they move.
        </h1>
        <p className="lede mt-8">
          I spend a lot of time thinking about how ideas become real. How do you take something that exists only in your head and turn it into a project with a clear goal, a realistic plan, the right people, and a reason to keep going?
        </p>
        <p className="mt-6 max-w-measure text-lg leading-8 text-charcoal/75">
          No industry jargon for the sake of sounding clever. Just useful ideas, honest observations and practical ways of turning messy thoughts into something you can actually move forward with.
        </p>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">What you’ll find here</p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {topics.map((topic) => (
            <article key={topic.title} className="border-t border-taupe/50 pt-5">
              <h2 className="font-serif text-2xl sm:text-3xl">{topic.title}</h2>
              <p className="mt-3 leading-7 text-charcoal/75">{topic.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-taupe/40 py-20 sm:py-28">
        <p className="eyebrow">From the notebook</p>
        <div className="mt-10 divide-y divide-taupe/50 border-y border-taupe/50">
          {ideas.map((idea) => (
            <Link
              key={idea.slug}
              to={`/ideas/${idea.slug}`}
              className="group grid gap-4 py-10 lg:grid-cols-12"
            >
              <p className="eyebrow lg:col-span-3">{idea.tags.join(' · ')}</p>
              <div className="lg:col-span-9">
                <h2 className="font-serif text-3xl group-hover:text-burgundy sm:text-4xl">
                  {idea.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-charcoal/75">{idea.summary}</p>
                <span className="text-link mt-6">
                  Read the full idea <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-wine py-20 text-cream sm:py-28">
        <p className="text-[0.7rem] uppercase tracking-brand text-gold">Currently thinking about</p>
        <ul className="mt-8 max-w-2xl space-y-4 font-serif text-2xl leading-snug sm:text-3xl">
          <li>What makes an idea worth building?</li>
          <li>How do you stay creative without losing structure?</li>
          <li>Can project management make personal goals easier to achieve?</li>
          <li>Where does strategy end and creativity begin?</li>
          <li>How do you build something consistently without burning yourself out?</li>
        </ul>
      </Section>

      <Section className="py-20 sm:py-28">
        <p className="eyebrow">Keep exploring</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <Link to="/projects" className="group border-t border-taupe/50 pt-5">
            <h3 className="font-serif text-2xl group-hover:text-burgundy">Projects</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">
              Want to see how I turn ideas into actual work?
            </p>
          </Link>
          <Link to="/shop" className="group border-t border-taupe/50 pt-5">
            <h3 className="font-serif text-2xl group-hover:text-burgundy">Products</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">
              Want something practical you can use yourself?
            </p>
          </Link>
          <Link to="/work" className="group border-t border-taupe/50 pt-5">
            <h3 className="font-serif text-2xl group-hover:text-burgundy">Work with me</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">
              Want to know how I can help with your next project?
            </p>
          </Link>
          <Link to="/contact" className="group border-t border-taupe/50 pt-5">
            <h3 className="font-serif text-2xl group-hover:text-burgundy">Get in touch</h3>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">
              Or just have an idea you want to talk through?
            </p>
          </Link>
        </div>
        <p className="mt-16 max-w-measure text-sm leading-7 text-charcoal/60">
          A little note from me: I am not here to pretend I have everything figured out. I am here to keep building, keep learning and keep sharing what I discover along the way.
        </p>
      </Section>
    </>
  )
}
