import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'

const entries = [
  {
    date: 'Mar 2026—',
    title: 'Cloud Garage',
    category: 'Internship',
    excerpt:
      'Python/FastAPI developer intern — building REST APIs with JWT authentication, SQLAlchemy + PostgreSQL integration, and Docker-based deployment workflows.',
  },
]

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-[72px] border-t-4 border-swiss-fg">
      <SectionHeader index="03" title="Experience" meta="Mar 2026 — Present / Internship" />

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24">
        <ul className="border-t-4 border-swiss-fg">
          {entries.map((entry) => (
            <li key={entry.title} className="border-b-4 border-swiss-fg">
              <article className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 gap-y-2 px-2 py-8 transition-colors duration-150 ease-linear hover:bg-swiss-fg hover:text-white sm:grid-cols-[7rem_1fr_1fr_auto] sm:px-5">
                <span className="text-xs font-bold uppercase tracking-label text-black/50 group-hover:text-white/50 sm:whitespace-nowrap">
                  {entry.date}
                </span>
                <h3 className="text-xl font-black uppercase tracking-display transition-transform duration-200 ease-out group-hover:-translate-y-px sm:text-3xl">
                  {entry.title}
                </h3>
                <span className="hidden text-xs font-bold uppercase tracking-label text-black/50 group-hover:text-white/50 sm:block">
                  {entry.category}
                </span>
                <ArrowUpRight
                  size={28}
                  strokeWidth={2.5}
                  className="-rotate-45 transition-transform duration-200 ease-out group-hover:rotate-0 group-hover:text-swiss-accent"
                />
                <p className="col-span-full max-w-md pl-0 text-sm leading-relaxed text-black/60 group-hover:text-white/60 sm:col-start-2">
                  {entry.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
