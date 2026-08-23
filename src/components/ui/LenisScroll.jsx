import { useEffect } from 'react'
import Lenis from 'lenis'

/*
 * Global smooth scroll — port of olivierlarose's Lenis setup.
 * Skipped entirely under prefers-reduced-motion; anchor links are
 * routed through lenis via `anchors: true`; CSS smooth-scroll is
 * disabled while active to avoid double easing.
 */
export default function LenisScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    const lenis = new Lenis({
      anchors: true,
      lerp: 0.12,
    })

    let rafId
    const loop = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      root.style.scrollBehavior = previous
    }
  }, [])

  return null
}
