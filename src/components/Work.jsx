import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'

const projects = [
  {
    title: 'Shift AI',
    meta: 'Project Contributor',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'JWT'],
    desc: 'A workforce shift scheduling application with REST APIs for users, shifts, and schedules — secured by JWT auth and role-based authorization.',
    span: 'lg:col-span-7',
    texture: false,
  },
  {
    title: 'StagKitchen',
    meta: 'Project Contributor',
    tags: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'AI'],
    desc: 'An AI-powered kitchen assistant generating recipes and meal plans from ingredients, dietary preferences, and shopping lists.',
    span: 'lg:col-span-5',
    texture: true,
  },
]

function ProjectCard({ project, index }) {
  return (
    <a
      href="#contact"
      className={`swiss-focus group flex flex-col border-4 border-swiss-fg p-8 transition-colors duration-200 ease-out hover:bg-swiss-fg hover:text-white sm:p-10 ${project.texture ? 'swiss-dots bg-swiss-muted' : 'bg-white'} ${project.span}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-bold text-swiss-accent">
          0{index + 1}
        </span>
        <ArrowUpRight
          size={32}
          strokeWidth={2.5}
          className="-rotate-45 transition-transform duration-200 ease-out group-hover:rotate-0"
        />
      </div>

      <h3 className="mt-16 text-4xl font-black uppercase tracking-display sm:text-5xl lg:mt-24">
        {project.title}
      </h3>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/60 group-hover:text-white/70">
        {project.desc}
      </p>

      <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10 text-xs font-bold uppercase tracking-label">
        <li>{project.meta}</li>
        {project.tags.map((tag) => (
          <li key={tag} className="text-black/50 group-hover:text-white/50">
            {tag}
          </li>
        ))}
      </ul>
    </a>
  )
}

export default function Work() {
  return (
    <section id="work" aria-label="Selected work" className="scroll-mt-[72px]">
      <SectionHeader index="01" title="Selected work" meta="FastAPI · React · AI / Two builds" />
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
