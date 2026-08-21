import { useLayoutEffect } from 'react'
import { ensureMotion } from './engine.js'
import { bindPageReveals } from './reveals.js'

export function useScrollReveals(path) {
  useLayoutEffect(() => {
    const motion = ensureMotion()
    const ctx = bindPageReveals(motion)
    const frame = requestAnimationFrame(() => {
      motion.ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(frame)
      ctx?.revert()
    }
  }, [path])
}
