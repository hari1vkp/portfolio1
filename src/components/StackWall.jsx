import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
 * Smooth parallax gallery — port of olivierlarose's
 * "Smooth Parallax Scroll": four columns translate on the Y axis at
 * different rates (window height × speed) while the section passes
 * through the viewport. Content: the resume's 20+ tools as tiles.
 */

const COLUMNS = [
  {
    speed: 2.2,
    top: '-34vh',
    items: ['Python', 'Java', 'JavaScript', 'JWT', 'RBAC'],
  },
  {
    speed: 3.1,
    top: '-56vh',
    items: ['FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'Middleware'],
  },
  {
    speed: 1.35,
    top: '-20vh',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'RabbitMQ'],
  },
  {
    speed: 2.7,
    top: '-46vh',
    items: ['Git', 'GitHub', 'Postman', 'Jira', 'Linux', 'AWS'],
  },
]

const VARIANTS = [
  'swiss-grid-pattern bg-white',
  'bg-swiss-muted swiss-dots',
  'swiss-diagonal bg-white',
  'bg-swiss-fg text-white',
]

function Column({ progress, speed, top, items, reducedMotion, dimension, columnIndex }) {
  const y = useTransform(progress, [0, 1], [0, dimension.height * speed])

  return (
    <motion.div
      style={reducedMotion ? { marginTop: top } : { y, marginTop: top }}
      className="flex w-1/4 shrink-0 flex-col gap-3 px-1.5 will-change-transform"
    >
      {items.map((item, i) => (
        <div
          key={item}
          className={`relative flex h-[24vh] items-center justify-center border-4 border-swiss-fg p-3 text-center ${
            VARIANTS[(i + columnIndex) % VARIANTS.length]
          }`}
        >
          <span className="absolute left-2 top-2 text-[10px] font-bold text-swiss-accent">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-base font-black uppercase leading-tight tracking-display sm:text-xl lg:text-2xl">
            {item}
          </span>
        </div>
      ))}
    </motion.div>
  )
}

export default function StackWall() {
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })

  useEffect(() => {
    const resize = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section aria-label="Technology stack">
      <h2 className="sr-only">Technology stack</h2>
      <p className="sr-only">
        Twenty tools across languages, backend frameworks, databases,
        infrastructure, and workflow — Python, FastAPI, PostgreSQL, Docker
        and more, shown as drifting columns of tiles.
      </p>

      {/* decorative parallax wall */}
      <div aria-hidden="true" className="border-t-4 border-swiss-fg">
        <div className="px-6 py-6">
          <p className="text-xs font-bold uppercase tracking-label">
            <span className="mr-2 text-swiss-accent">02·A</span>
            Stack in motion — keep scrolling
          </p>
        </div>
        <div
          ref={gallery}
          className="flex h-[170vh] overflow-hidden pb-4"
        >
          {COLUMNS.map((column, columnIndex) => (
            <Column
              key={column.speed}
              progress={scrollYProgress}
              dimension={dimension}
              reducedMotion={reducedMotion}
              columnIndex={columnIndex}
              {...column}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
