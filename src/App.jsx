import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { NavigationContext } from './navigation.js'
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

function currentPath() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' ? '/' : path
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

export default function App() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
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
          window.scrollTo(0, 0)
          return
        }
        window.history.pushState({}, '', next)
        setPath(next)
        window.scrollTo(0, 0)
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
          <RoutePage path={path} />
        </Suspense>
      </Layout>
    </NavigationContext.Provider>
  )
}
