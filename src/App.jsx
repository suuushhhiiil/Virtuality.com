import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { NavigationContext } from './navigation.js'
import { currentPath, withBase } from './paths.js'
import { scrollToTop, startMotion } from './motion/engine.js'
import { useScrollReveals } from './motion/useScrollReveals.js'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

const Work = lazy(() => import('./pages/Work.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Ideas = lazy(() => import('./pages/Ideas.jsx'))
const IdeaDetail = lazy(() => import('./pages/IdeaDetail.jsx'))
const Shop = lazy(() => import('./pages/Shop.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function RevealBinder({ path }) {
  useScrollReveals(path)
  return null
}

function RoutePage({ path }) {
  if (path === '/') return <Home />
  if (path === '/work') return <Work />
  if (path === '/projects') return <Projects />
  if (path === '/about') return <About />
  if (path === '/ideas') return <Ideas />
  if (path === '/shop') return <Shop />
  if (path === '/contact') return <Contact />

  const project = path.match(/^\/projects\/([^/]+)$/)
  if (project) return <ProjectDetail slug={project[1]} />

  const idea = path.match(/^\/ideas\/([^/]+)$/)
  if (idea) return <IdeaDetail slug={idea[1]} />

  return <NotFound />
}

function RouteWithReveals({ path }) {
  return (
    <>
      <RoutePage path={path} />
      <RevealBinder path={path} />
    </>
  )
}

export default function App() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    startMotion()
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigation = useMemo(
    () => ({
      path,
      navigate(to) {
        const next = to.replace(/\/+$/, '') || '/'
        if (next === currentPath()) {
          scrollToTop()
          return
        }
        window.history.pushState({}, '', withBase(next))
        setPath(next)
        scrollToTop()
      },
    }),
    [path]
  )

  return (
    <NavigationContext.Provider value={navigation}>
      <Layout>
        <Suspense
          fallback={
            <div className="px-5 py-24 text-[0.7rem] uppercase tracking-brand text-taupe sm:px-8">
              Loading
            </div>
          }
        >
          <RouteWithReveals path={path} />
        </Suspense>
      </Layout>
    </NavigationContext.Provider>
  )
}
