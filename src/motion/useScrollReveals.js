import { useLayoutEffect } from 'react'
import { startMotion } from './engine.js'

export function useScrollReveals(path) {
  useLayoutEffect(() => {
    let cancelled = false
    let ctx

    startMotion().then((motion) => {
      if (cancelled || motion.reduced) return

      const { gsap, ScrollTrigger } = motion
      ctx = gsap.context(() => {
        gsap.utils.toArray('[data-reveal]').forEach((trigger) => {
          const nested = trigger.querySelectorAll(':scope [data-reveal-item]')
          const targets = nested.length ? nested : [trigger]

          gsap.fromTo(
            targets,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              stagger: nested.length ? 0.07 : 0,
              overwrite: 'auto',
              scrollTrigger: {
                trigger,
                start: 'top 88%',
                once: true,
                fastScrollEnd: true,
              },
            }
          )
        })
      })

      ScrollTrigger.refresh()
    })

    return () => {
      cancelled = true
      ctx?.revert()
    }
  }, [path])
}
