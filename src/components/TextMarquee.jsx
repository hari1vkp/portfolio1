import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
 * Text parallax — port of olivierlarose's "Text Parallax":
 * whitespace-nowrap slides wider than the viewport, each translating
 * on X in its own direction as scroll progress runs [0,1].
 * Photo pills are replaced with geometric ornaments per Swiss system.
 */

function Ornament({ kind }) {
  if (kind === 'ring')
    return (
      <span className="mx-[3vw] block aspect-square w-[max(2rem,4.5vw)] shrink-0 rounded-full border-4 border-swiss-accent" />
    )
  if (kind === 'accent')
    return <span className="mx-[3vw] block aspect-square w-[max(2rem,4.5vw)] shrink-0 bg-swiss-accent" />
  return <span className="mx-[3vw] block aspect-square w-[max(2rem,4.5vw)] shrink-0 bg-swiss-fg" />
}

function Slide({ phrase, direction, left, progress, outline, ornament }) {
  const d = direction === 'left' ? -1 : 1
  const x = useTransform(progress, [0, 1], [`${50 * d}%`, `${-50 * d}%`])

  return (
    <motion.div
      style={{ x, left }}
      className="relative flex items-center whitespace-nowrap will-change-transform"
    >
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center px-[2vw]">
          <p
            className={`text-[9vw] font-black uppercase leading-none tracking-display lg:text-[7vw] ${
              outline ? 'text-transparent' : ''
            }`}
            style={outline ? { WebkitTextStroke: '2px #000' } : undefined}
          >
            {phrase}
          </p>
          <Ornament kind={ornament} />
        </div>
      ))}
    </motion.div>
  )
}

const ROWS = [
  {
    phrase: 'Open to backend roles',
    direction: 'left',
    left: '-12%',
    ornament: 'square',
  },
  {
    phrase: 'Python — FastAPI — SQL',
    direction: 'right',
    left: '-32%',
    outline: true,
    ornament: 'ring',
  },
  {
    phrase: "Let's build something reliable",
    direction: 'left',
    left: '-55%',
    ornament: 'accent',
  },
]

export default function TextMarquee() {
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  return (
    <section aria-label="Availability">
      <h2 className="sr-only">Open to backend roles</h2>
      <p className="sr-only">
        Hariharasudhan R is open to backend roles, working in Python,
        FastAPI, and SQL. Let&apos;s build something reliable.
      </p>

      {/* decorative kinetic type band */}
      <div
        ref={container}
        aria-hidden="true"
        className="overflow-hidden border-t-4 border-swiss-fg py-14"
      >
        <div className="flex flex-col gap-6">
          {ROWS.map((row) => (
            <Slide key={row.phrase} progress={scrollYProgress} {...row} />
          ))}
        </div>
      </div>
    </section>
  )
}
