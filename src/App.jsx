import { useEffect, useMemo, useState } from 'react'
import { NavigationContext } from './navigation.js'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'
import Ideas from './pages/Ideas.jsx'
import IdeaDetail from './pages/IdeaDetail.jsx'
import Shop from './pages/Shop.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

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
        <RoutePage path={path} />
      </Layout>
    </NavigationContext.Provider>
  )
}
