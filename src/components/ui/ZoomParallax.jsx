import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
 * Scroll-linked zoom-parallax — port of olivierlarose/zoom-parallax.
 * A 300vh track drives scrollYProgress; each layer scales linearly
 * from 1 to its final scale inside a sticky 100vh stage.
 * Geometry (top/left/width/height) comes from the slides config,
 * replacing the original SCSS nth-of-type offsets.
 */

function Layer({ progress, finalScale, reducedMotion, slide }) {
  const scale = useTransform(progress, [0, 1], [1, finalScale])

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        style={
          reducedMotion
            ? { scale: 1 }
            : {
                scale,
                position: 'relative',
                top: slide.top,
                left: slide.left,
              }
        }
        className={`flex flex-col justify-between border-4 border-swiss-fg p-6 will-change-transform sm:p-8 ${slide.className ?? ''}`}
      >
        {slide.node}
      </motion.div>
    </div>
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
