export const REVEAL_FROM = { autoAlpha: 0, y: 36 }
export const REVEAL_TO = {
  autoAlpha: 1,
  y: 0,
  duration: 0.85,
  ease: 'power2.out',
  overwrite: 'auto',
}

export const REVEAL_SCROLL = {
  start: 'top 85%',
  toggleActions: 'play none none reverse',
  invalidateOnRefresh: true,
}

export function revealItem(gsap, target, trigger = target) {
  return gsap.fromTo(target, REVEAL_FROM, {
    ...REVEAL_TO,
    onComplete() {
      gsap.set(target, { clearProps: 'transform' })
    },
    scrollTrigger: {
      trigger,
      ...REVEAL_SCROLL,
    },
  })
}
