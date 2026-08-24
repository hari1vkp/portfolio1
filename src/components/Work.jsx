import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'

const projects = [
  {
    id: 'shift-ai',
    title: 'Shift AI',
    role: 'Backend Developer',
    span: 'lg:col-span-7',
    base: 'bg-white',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'JWT'],
    summary:
      'AI-powered workforce scheduling platform — REST APIs for employees, shifts, leave, and automated schedule generation.',
    description:
      'Shift AI simplifies workforce scheduling end to end. Administrators manage employees, create shifts, handle leave and availability, and generate efficient schedules from employee preferences and organizational requirements. A centralized dashboard lets managers run assignments while employees track their own schedules, availability, and leave — reducing manual work and avoiding conflicts.',
    points: [
      'REST APIs with Python & FastAPI',
      'Employee & shift management logic',
      'Database models + CRUD operations',
      'Authentication & authorization',
      'Shift creation, assignment & availability APIs',
      'Validation, error handling & API responses',
      'Backend integration with React frontend',
      'API testing + Git/GitHub workflow',
    ],
  },
  {
    id: 'stagkitchen',
    title: 'StagKitchen',
    role: 'Backend Developer',
    span: 'lg:col-span-5',
    base: 'swiss-dots bg-swiss-muted',
    tags: ['Python', 'FastAPI', 'AI/GenAI', 'Next.js', 'SQL'],
    summary:
      'AI kitchen companion — personalized recipes, meal planning, calorie tracking, and smart shopping lists.',
    description:
      'StagKitchen is an AI-powered kitchen companion built on Python, FastAPI, Next.js, and Tailwind CSS. It generates personalized recipes from available ingredients, dietary preferences, and nutritional needs — then plans meals, calculates calories, identifies ingredients, and builds smart shopping lists, making it easier to decide what to cook and eat healthier.',
    points: [
      'Recipe generation & management APIs',
      'Dietary preference business logic',
      'Meal planning + calorie calculation APIs',
      'Ingredient-based recipe generation',
      'Shopping-list APIs from recipes & plans',
      'Database models + CRUD operations',
      'AI service integration with FastAPI',
      'Next.js frontend integration & debugging',
    ],
  },
]

const TONES = {
  dark: { body: 'text-white/75', point: 'text-white/85' },
  light: { body: 'text-black/70', point: 'text-black/80' },
}

function CaseStudy({ project, tone = 'dark' }) {
  const t = TONES[tone]
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-label text-swiss-accent">
          {project.title} — Case study
        </span>
        <span className={`text-right text-xs font-bold uppercase tracking-label ${t.point}`}>
          Role — {project.role}
        </span>
      </div>

      <p className={`mt-5 max-w-lg text-sm leading-relaxed ${t.body}`}>
        {project.description}
      </p>

      <ul className="mt-6 grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {project.points.map((point) => (
          <li
            key={point}
            className={`flex items-start gap-3 text-xs font-bold uppercase tracking-wide ${t.point}`}
          >
            <span
              className="mt-[5px] size-1.5 shrink-0 bg-swiss-accent"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </>
  )
}

function ProjectCard({ project, index }) {
  // Hover, keyboard focus, and touch-tap all route through one flag
  const [engaged, setEngaged] = useState(false)

  return (
    <article
      tabIndex={0}
      onMouseEnter={() => setEngaged(true)}
      onMouseLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setEngaged(false)
      }}
      className={`swiss-focus relative flex cursor-default flex-col overflow-hidden border-4 border-swiss-fg p-8 transition-all duration-200 ease-out sm:p-10 ${
        engaged ? 'lg:-translate-y-1 lg:bg-swiss-fg lg:text-white' : ''
      } ${project.base} ${project.span}`}
    >
      {/* hover parallax layers — each zooms at a different rate */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={`swiss-grid-pattern absolute -right-10 -top-10 size-44 border-4 border-swiss-fg/10 transition-transform duration-200 ease-out ${
            engaged ? 'lg:scale-125' : 'scale-100'
          }`}
        />
        <div
          className={`absolute -bottom-14 -left-14 size-52 rounded-full border-[6px] border-swiss-accent/25 transition-transform duration-200 ease-out ${
            engaged ? 'lg:scale-110' : 'scale-100'
          }`}
        />
        <div
          className={`absolute right-[30%] top-[18%] size-14 bg-swiss-accent/20 transition-transform duration-200 ease-out ${
            engaged ? 'lg:scale-150' : 'scale-100'
          }`}
        />
      </div>

      <div
        className={`relative z-10 flex h-full flex-col transition-transform duration-200 ease-out ${
          engaged ? 'lg:scale-[1.02]' : 'scale-100'
        }`}
      >
        <div className="flex w-full items-start justify-between">
          <span className="text-sm font-bold text-swiss-accent">
            0{index + 1}
          </span>
          <ArrowUpRight
            size={32}
            strokeWidth={2.5}
            className={`transition-transform duration-200 ease-out ${
              engaged ? 'rotate-0' : '-rotate-45'
            }`}
          />
        </div>

        <h3 className="mt-14 text-4xl font-black uppercase tracking-display sm:text-5xl lg:mt-20">
          {project.title}
        </h3>
        <p className="mt-4 max-w-sm text-left text-sm leading-relaxed text-black/60">
          {project.summary}
        </p>
      </div>

      {/* case-study overlay (desktop) — arrives like the showcase zoom */}
      <div
        aria-hidden={!engaged}
        className={`absolute inset-0 z-20 hidden flex-col overflow-y-auto bg-swiss-fg p-10 text-white transition-all duration-200 ease-out lg:flex ${
          engaged
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-[1.06] opacity-0'
        }`}
      >
        <CaseStudy project={project} tone="dark" />
        <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6 text-xs font-bold uppercase tracking-label">
          {project.tags.map((tag, i) => (
            <li key={tag} className={i === 0 ? '' : 'text-white/50'}>
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* details in flow (mobile / touch) — no hover required */}
      <div className="relative z-10 mt-6 border-t-2 border-swiss-fg/15 pt-6 lg:hidden">
        <CaseStudy project={project} tone="light" />
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" aria-label="Selected work" className="scroll-mt-[72px]">
      <SectionHeader index="01" title="Selected work" meta="FastAPI · React · AI / Case studies" />
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <p className="mt-8 hidden text-xs font-bold uppercase tracking-label text-black/50 lg:block">
          Hover a card for the full case study
        </p>
        <p className="sr-only">
          Each project card reveals its full case study description,
          responsibilities, and tech stack on hover or keyboard focus.
        </p>
      </div>
    </section>
  )
}
