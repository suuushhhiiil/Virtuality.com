import { useState } from 'react'
import Link from './Link.jsx'
import { navItems, site } from '../content/site.js'
import { useNavigation } from '../navigation.js'

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { path } = useNavigation()

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-taupe/40 bg-cream/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="h-5 w-px bg-gold" aria-hidden="true" />
            <span className="font-sans text-[0.7rem] uppercase tracking-brand text-charcoal">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[0.7rem] uppercase tracking-brand transition-colors ${
                  path === item.to || path.startsWith(`${item.to}/`)
                    ? 'text-burgundy'
                    : 'text-charcoal/70 hover:text-burgundy'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary py-2.5">
              Let’s talk
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className={`block h-px w-5 bg-current transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-5 bg-current transition ${open ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            className="border-t border-taupe/40 px-5 py-6 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-serif text-3xl text-charcoal"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-2 w-fit"
                onClick={() => setOpen(false)}
              >
                Let’s talk
              </Link>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="content" className="flex-1">
        {children}
      </main>

      <footer className="bg-wine text-cream">
        <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-sans text-[0.7rem] uppercase tracking-brand text-gold">
              {site.name}
            </p>
            <p className="mt-6 max-w-md font-serif text-3xl leading-tight sm:text-4xl">
              {site.philosophy}
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-cream/70">{site.belief}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-2">
            <div>
              <p className="text-[0.7rem] uppercase tracking-brand text-gold">Explore</p>
              <ul className="mt-4 space-y-2 text-sm text-cream/80">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="hover:text-cream">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-brand text-gold">Write</p>
              <ul className="mt-4 space-y-2 text-sm text-cream/80">
                <li>
                  <a className="hover:text-cream" href={`mailto:${site.emails.studio}`}>
                    {site.emails.studio}
                  </a>
                </li>
                <li>
                  <a className="hover:text-cream" href={`mailto:${site.emails.direct}`}>
                    {site.emails.direct}
                  </a>
                </li>
              </ul>
              <p className="mt-8 font-serif text-xl italic text-gold">{site.tagline}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-page flex-col gap-2 px-5 py-5 text-xs text-cream/50 sm:flex-row sm:justify-between sm:px-8">
            <p>© {new Date().getFullYear()} {site.name}</p>
            <p>{site.person}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
