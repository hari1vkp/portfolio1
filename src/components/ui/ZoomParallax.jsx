import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
 * Scroll-linked zoom-parallax — port of olivierlarose/zoom-parallax.
 * A tall track drives scrollYProgress; each FULL-VIEWPORT layer
 * scales linearly from 1 to its final scale inside a sticky viewport
 * stage (scaling the layer, not the tile, is what makes panels fly
 * outward past each other). Tile geometry comes from the slide's
 * Tailwind classes; final scale differs per breakpoint because tile
 * widths do too (mobile tiles are proportionally much wider).
 */

function Layer({ progress, finalScale, reducedMotion, slide }) {
  const scale = useTransform(progress, [0, 1], [1, finalScale])

  return (
    <motion.div
      style={reducedMotion ? { scale: 1 } : { scale }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >
      <div
        className={`relative flex flex-col justify-between border-4 border-swiss-fg p-5 sm:p-8 ${slide.className}`}
      >
        {slide.node}
      </div>
    </motion.div>
  )
}

export default function ZoomParallax({ slides }) {
  const container = useRef(null)
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Mobile tiles are far wider relative to the viewport, so full
  // desktop scales would black out the screen early — use gentler ones.
  const [isCompact, setIsCompact] = useState(
    typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1023px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const onChange = (e) => setIsCompact(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={container} className="relative h-[200svh] lg:h-[250vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        {slides.map((slide) => (
          <Layer
            key={slide.id}
            progress={scrollYProgress}
            finalScale={isCompact ? (slide.mobileScale ?? slide.scale) : slide.scale}
            reducedMotion={reducedMotion}
            slide={slide}
          />
        ))}
      </div>
    </div>
  )
}
