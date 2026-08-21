let motion = null

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

export async function startMotion() {
  if (motion) return motion

  if (prefersReducedMotion()) {
    document.documentElement.classList.add('reduced-motion')
    motion = { reduced: true, lenis: null, gsap: null, ScrollTrigger: null }
    return motion
  }

  const [lenisMod, gsapMod, stMod] = await Promise.all([
    import('lenis'),
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('lenis/dist/lenis.css'),
  ])
  const Lenis = lenisMod.default
  const gsap = gsapMod.default
  const { ScrollTrigger } = stMod
  gsap.registerPlugin(ScrollTrigger)
  gsap.config({ autoSleep: 60, nullTargetWarn: false })

  const lenis = new Lenis({
    autoRaf: false,
    duration: 1.05,
    lerp: 0.1,
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 1.2,
    wheelMultiplier: 0.9,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  document.documentElement.classList.add('has-smooth-scroll')
  motion = { reduced: false, lenis, gsap, ScrollTrigger }
  return motion
}
