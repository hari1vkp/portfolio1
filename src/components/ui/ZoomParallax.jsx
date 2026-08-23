import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
 * Scroll-linked zoom-parallax — port of olivierlarose/zoom-parallax.
 * A 300vh track drives scrollYProgress; each FULL-VIEWPORT layer
 * scales linearly from 1 to its final scale inside a sticky 100vh
 * stage (scaling the layer, not the tile, is what makes panels fly
 * outward past each other). Tile geometry comes from the slide's
 * Tailwind classes.
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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {slides.map((slide) => (
          <Layer
            key={slide.id}
            progress={scrollYProgress}
            finalScale={slide.scale}
            reducedMotion={reducedMotion}
            slide={slide}
          />
        ))}
      </div>
    </div>
  )
}
