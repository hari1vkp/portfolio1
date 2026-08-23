import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'

const skills = [
  {
    title: 'Languages',
    body: 'Python for services and scripting, with Java and JavaScript where the problem calls for them.',
  },
  {
    title: 'Backend',
    body: 'FastAPI, REST API design, SQLAlchemy, and Pydantic — plus dependency injection, middleware, background processing, and structured error handling.',
  },
  {
    title: 'Databases',
    body: 'PostgreSQL first for persistent storage, with MySQL and MongoDB when the data model fits better.',
  },
  {
    title: 'Auth & security',
    body: 'JWT access and refresh token flows, role-based access control, and strict request validation with Pydantic schemas.',
  },
  {
    title: 'Tools & platforms',
    body: 'RabbitMQ, Docker, Git and GitHub, AWS, Linux, Jira, and Postman for testing and documentation workflows.',
  },
]

const stats = [
  { value: '02+', label: 'Major projects' },
  { value: '03', label: 'Languages' },
  { value: '03', label: 'Databases' },
  { value: '01', label: 'Conference prize' },
]

export default function Skills() {
  const [open, setOpen] = useState(0)

  return (
    <section id="skills" aria-label="Skills" className="scroll-mt-[72px] border-t-4 border-swiss-fg">
      <SectionHeader index="02" title="Skills" meta="Python · FastAPI · SQL" />

      {/* 8 : 4 asymmetry — narrative left, evidence right */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-8">
          <h3 className="max-w-xl text-2xl font-black uppercase leading-tight tracking-display sm:text-4xl">
            Reliable services over clever abstractions.
          </h3>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-black/70">
            I&apos;m an MCA student and aspiring backend developer working in
            Python, FastAPI, SQL, and REST. From authentication to Dockerized
            deployments, I build APIs where validation happens early and
            behavior stays predictable.
          </p>

          <ul className="mt-12 border-t-4 border-swiss-fg">
            {skills.map((skill, i) => {
              const isOpen = open === i
              return (
                <li key={skill.title} className="border-b-4 border-swiss-fg">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`skill-panel-${i}`}
                    className={`swiss-focus flex w-full items-center justify-between gap-6 px-5 py-6 text-left transition-colors duration-200 ease-out hover:bg-swiss-accent hover:text-white ${
                      isOpen ? 'bg-swiss-fg text-white' : ''
                    }`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-sm font-bold text-swiss-accent">
                        0{i + 1}
                      </span>
                      <span className="text-lg font-bold uppercase tracking-wide sm:text-xl">
                        {skill.title}
                      </span>
                    </span>
                    <Plus
                      size={24}
                      strokeWidth={2.5}
                      className={`shrink-0 transition-transform duration-200 ease-out ${isOpen ? 'rotate-90' : ''}`}
                    />
                  </button>
                  <div
                    id={`skill-panel-${i}`}
                    hidden={!isOpen}
                    className="border-t-2 border-swiss-fg bg-white px-5 py-6"
                  >
                    <p className="max-w-lg text-sm leading-relaxed text-black/70">
                      {skill.body}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        {/* stats sidebar on print-dot texture */}
        <aside className="lg:col-span-4" aria-label="By the numbers">
          <div className="swiss-dots grid grid-cols-2 border-4 border-swiss-fg bg-swiss-muted lg:sticky lg:top-[140px]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex aspect-square flex-col justify-between border-2 border-swiss-fg p-5 transition-colors duration-200 ease-out hover:bg-swiss-accent hover:text-white"
              >
                <span className="text-4xl font-black tracking-display transition-transform duration-200 ease-out group-hover:scale-105 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-label">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-label text-black/50">
            MCA candidate — class of 2026
          </p>
        </aside>
      </div>
    </section>
  )
}
