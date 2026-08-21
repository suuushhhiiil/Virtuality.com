import Link from '../components/Link.jsx'
import Arrow from '../components/Arrow.jsx'
import Section from '../components/Section.jsx'
import { usePageTitle } from '../usePageTitle.js'

export default function NotFound() {
  usePageTitle('Not found')

  return (
    <Section className="py-28">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">
        This page doesn’t have a plan yet.
      </h1>
      <p className="lede mt-6">Let’s go back and start from somewhere that does.</p>
      <Link to="/" className="text-link mt-10">
        Return home <Arrow />
      </Link>
    </Section>
  )
}
