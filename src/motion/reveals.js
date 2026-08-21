const SKIP_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'BR', 'LINK', 'META'])
const ATOMIC_TAGS = new Set([
  'ARTICLE',
  'BUTTON',
  'LABEL',
  'LI',
  'FIGURE',
  'IMG',
  'SVG',
  'INPUT',
  'SELECT',
  'TEXTAREA',
  'IFRAME',
  'VIDEO',
  'PICTURE',
])

const MAX_UNITS = 40
const MAX_DEPTH = 5

function classNameOf(el) {
  return typeof el.className === 'string' ? el.className : el.getAttribute('class') || ''
}

function isSkippable(el) {
  if (!el || el.nodeType !== 1) return true
  if (SKIP_TAGS.has(el.tagName)) return true
  if (el.classList.contains('sr-only')) return true
  if (el.hasAttribute('data-no-reveal')) return true
  return false
}

function isAtomic(el) {
  if (el.hasAttribute('data-reveal-item')) return true
  if (ATOMIC_TAGS.has(el.tagName)) return true
  if (el.tagName === 'A' && el.children.length > 0) return true
  if (el.getAttribute('aria-hidden') === 'true') return true
  const cls = classNameOf(el)
  if (/\bgroup\b/.test(cls) && /\bborder\b/.test(cls)) return true
  if (el.classList.contains('relative') && el.querySelector(':scope > .absolute')) return true
  return false
}

function shouldExpand(el, kids) {
  if (isAtomic(el)) return false
  if (kids.length < 2) return false
  if (el.matches('form, ul, ol, dl')) return true
  const cls = classNameOf(el)
  if (/\bgrid\b/.test(cls)) return true
  if (/\bspace-y-/.test(cls) || /\bdivide-y\b/.test(cls)) return true
  return true
}

export function collectUnits(section) {
  const inner = section.firstElementChild
  if (!inner) return []

  const units = []

  function walk(el, depth) {
    if (units.length >= MAX_UNITS || isSkippable(el)) return

    const kids = [...el.children].filter((child) => !isSkippable(child))
    if (depth < MAX_DEPTH && shouldExpand(el, kids)) {
      kids.forEach((kid) => walk(kid, depth + 1))
      return
    }

    units.push(el)
  }

  for (const child of inner.children) {
    walk(child, 0)
  }
  return units
}

export function bindPageReveals({ gsap, ScrollTrigger }) {
  const content = document.getElementById('content')
  if (!content) return null

  const ctx = gsap.context(() => {
    const sections = content.querySelectorAll(':scope > section')
    sections.forEach((section) => {
      const units = collectUnits(section)
      if (!units.length) return

      gsap.from(units, {
        autoAlpha: 0,
        y: 28,
        duration: 0.75,
        ease: 'power2.out',
        stagger: 0.07,
        overwrite: 'auto',
        immediateRender: true,
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          once: true,
          fastScrollEnd: true,
        },
      })
    })
  }, content)

  ScrollTrigger.refresh()
  return ctx
}
