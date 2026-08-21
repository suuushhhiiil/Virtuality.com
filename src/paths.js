export function getBase() {
  return import.meta.env.BASE_URL.replace(/\/$/, '')
}

export function withBase(to) {
  if (!to || to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('#')) {
    return to
  }
  const base = getBase()
  if (to === '/') return base ? `${base}/` : '/'
  return `${base}${to}`
}

export function currentPath() {
  const base = getBase()
  let path = window.location.pathname
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length)
  }
  path = path.replace(/\/+$/, '')
  return path === '' ? '/' : path
}
