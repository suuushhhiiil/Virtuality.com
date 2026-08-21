import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ autoSleep: 60, nullTargetWarn: false })

let motion = null
let chromeNodes = { header: null, footer: null }

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function getLenis() {
  return motion?.lenis ?? null
}

export function scrollToTop() {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(0, { immediate: true })
    return
  }
  window.scrollTo(0, 0)
}

function bindChrome(gsapInstance) {
  const header = document.querySelector('header')
  if (header && header !== chromeNodes.header) {
    chromeNodes.header = header
    gsapInstance.from(header, {
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power2.out',
      overwrite: 'auto',
    })
  }

  const footer = document.querySelector('footer')
  if (!footer || footer === chromeNodes.footer) return

  chromeNodes.footer = footer
  const cols = footer.querySelectorAll(':scope > div')
  const targets = cols.length ? cols : [footer]
  gsapInstance.from(targets, {
    autoAlpha: 0,
    y: 28,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.08,
    overwrite: 'auto',
    scrollTrigger: {
      trigger: footer,
      start: 'top 92%',
      once: true,
      fastScrollEnd: true,
    },
  })
}

export function startMotion() {
  if (motion) return motion

  const reduced = prefersReducedMotion()
  if (reduced) {
    document.documentElement.classList.add('reduced-motion')
  }

  const lenis = new Lenis({
    autoRaf: false,
    lerp: 0.075,
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 1.1,
    wheelMultiplier: 0.88,
    anchors: true,
    stopInertiaOnNavigate: true,
    // Smooth scrolling should run unless we fail to boot — not hide behind OS reduce-motion.
    respectReducedMotion: false,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  document.documentElement.classList.add('has-smooth-scroll')

  motion = { reduced: false, lenis, gsap, ScrollTrigger }

  const refresh = () => ScrollTrigger.refresh()
  window.addEventListener('load', refresh, { once: true })
  if (document.fonts?.ready) {
    document.fonts.ready.then(refresh).catch(() => {})
  }

  bindChrome(gsap)
  return motion
}

export function ensureMotion() {
  const instance = startMotion()
  bindChrome(instance.gsap)
  return instance
}
