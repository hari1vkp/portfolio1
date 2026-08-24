import { ArrowDown } from 'lucide-react'
import Button from './ui/Button.jsx'
import portrait from '../assets/portrait.png'

const disciplines = ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT Auth']

function Portrait() {
  return (
    <figure aria-label="Portrait of Hariharasudhan R">
      <div className="swiss-grid-pattern relative aspect-[4/5] overflow-hidden border-4 border-swiss-fg bg-white">
        <img
          src={portrait}
          alt="Hariharasudhan R"
          className="absolute inset-0 h-full w-full object-cover object-top mix-blend-multiply"
          loading="eager"
        />
        <div
          className="absolute bottom-0 left-0 size-[12%] bg-swiss-accent"
          aria-hidden="true"
        />
      </div>
      <figcaption className="flex items-center justify-between border-x-4 border-b-4 border-swiss-fg px-5 py-3 text-xs font-bold uppercase tracking-label">
        <span>Fig. 01</span>
        <span className="text-black/50">Hariharasudhan R — 2026</span>
      </figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction">
      <div className="mx-auto max-w-[1400px] px-6 pt-[120px] pb-16 lg:pt-[160px] lg:pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* 7 : 5 asymmetry — type dominates, art supports */}
          <div className="relative z-10 lg:col-span-7">
            <p className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-label sm:text-sm">
              <span className="size-3 bg-swiss-accent" aria-hidden="true" />
              Hariharasudhan R — Portfolio 2026 · India
            </p>

            <h1 className="text-[clamp(3.5rem,11vw,7.5rem)] font-black uppercase leading-[0.92] tracking-display">
              Python
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: '2.5px #FC3000' }}
              >
                Developer
              </span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-relaxed text-black/70 sm:text-lg">
              MCA student and aspiring backend developer. I build REST APIs
              with FastAPI — solid authentication, clean database
              integration, and Docker-first workflows.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button href="#work" variant="primary" className="sm:w-auto w-full">
                View selected work
              </Button>
              <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
                Get in touch
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-16">
            <Portrait />
          </div>
        </div>

        <a
          href="#work"
          className="swiss-focus mt-16 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-label text-black/60 transition-colors duration-150 ease-linear hover:text-swiss-accent"
        >
          <ArrowDown size={16} strokeWidth={2.5} className="animate-bounce" />
          Scroll — 01. Selected work
        </a>
      </div>

      {/* discipline strip: visible structure, divided cells */}
      <ul className="grid grid-cols-2 border-t-4 border-swiss-fg sm:grid-cols-3 lg:grid-cols-5">
        {disciplines.map((d, i) => (
          <li
            key={d}
            className={`border-b-4 border-r-4 border-swiss-fg px-6 py-5 text-sm font-bold uppercase tracking-label ${
              i % 2 === 0 ? 'bg-swiss-muted swiss-dots' : 'bg-white'
            } ${i === disciplines.length - 1 ? 'border-r-0' : ''} max-lg:[&:nth-last-child(2)]:border-r-0`}
          >
            <span className="mr-2 text-swiss-accent">0{i + 1}</span>
            {d}
          </li>
        ))}
      </ul>
    </section>
  )
}
