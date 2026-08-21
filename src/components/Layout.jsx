import { useState } from 'react'
import Link from './Link.jsx'
import { navItems, site } from '../content/site.js'
import { useNavigation } from '../navigation.js'

function isActive(path, to) {
  return path === to || path.startsWith(`${to}/`)
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)
  const { path } = useNavigation()

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-taupe/40 bg-cream/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
          <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
            <span className="block font-serif text-sm tracking-[0.18em] text-charcoal sm:text-base">
              WRITE FROM LEFT
            </span>
            <span className="mt-0.5 block text-[0.62rem] uppercase tracking-brand text-taupe">
              {site.motto}
            </span>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex xl:gap-7" aria-label="Primary">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap text-[0.65rem] uppercase tracking-brand transition-colors ${
                  isActive(path, item.to)
                    ? 'text-burgundy'
                    : 'text-charcoal/65 hover:text-burgundy'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/work" className="btn-primary py-2.5">
              Work With Me
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-charcoal xl:hidden"
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
            className="border-t border-taupe/40 px-5 py-6 xl:hidden"
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
                to="/work"
                className="btn-primary mt-2 w-fit"
                onClick={() => setOpen(false)}
              >
                Work With Me
              </Link>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="content" className="flex-1 overflow-hidden">
        {children}
      </main>

      <footer className="overflow-hidden bg-wine text-cream">
        <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-lg tracking-[0.18em]">WRITE FROM LEFT</p>
            <p className="mt-2 text-[0.62rem] uppercase tracking-brand text-gold">{site.motto}</p>
            <p className="mt-6 max-w-sm font-serif text-2xl leading-snug sm:text-3xl">
              {site.philosophy}
            </p>
            <p className="script mt-6 text-3xl text-gold">{site.tagline}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
            <div>
              <p className="text-[0.7rem] uppercase tracking-brand text-gold">Quick links</p>
              <ul className="mt-4 space-y-2 text-sm text-cream/80">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-brand text-gold">Let’s connect</p>
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
              <p className="mt-8 max-w-xs text-sm leading-6 text-cream/60">{site.belief}</p>
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
