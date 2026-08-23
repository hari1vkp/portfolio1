import { Award } from 'lucide-react'
import SectionHeader from './ui/SectionHeader.jsx'

const education = [
  {
    period: '2024 – 26',
    short: 'MCA',
    degree: 'Master of Computer Applications',
    school: 'Srinivasan College of Arts and Science, Perambalur',
  },
  {
    period: '2020 – 23',
    short: 'BCA',
    degree: 'Bachelor of Computer Applications',
    school: 'SRM Trichy Arts and Science College, Trichy',
  },
]

const achievements = [
  {
    title: 'Impact of AI in Business — 1st Prize',
    detail: 'International conference paper prize, Dhanalakshmi University.',
    texture: true,
  },
  {
    year: '2025',
    title: 'Robo Nova — Finalist',
    detail: 'Project showcase event — demonstrated our built application.',
    texture: false,
  },
]

function Label({ children }) {
  return (
    <h3 className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-label">
      <span className="size-3 bg-swiss-accent" aria-hidden="true" />
      {children}
    </h3>
  )
}

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Education and achievements"
      className="scroll-mt-[72px] border-t-4 border-swiss-fg"
    >
      <SectionHeader index="04" title="Education" meta="Degrees · Awards · Events" />

      {/* 7 : 5 asymmetry — degrees left, honors right */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 px-6 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7 lg:pr-12">
          <Label>Formal education</Label>
          <ul className="border-t-4 border-swiss-fg">
            {education.map((item) => (
              <li
                key={item.short}
                className="swiss-dots grid grid-cols-[5rem_1fr] items-baseline gap-x-6 border-b-4 border-swiss-fg py-8 sm:grid-cols-[7rem_1fr] sm:py-10"
              >
                <span className="text-xs font-bold uppercase tracking-label text-swiss-accent sm:whitespace-nowrap">
                  {item.period}
                </span>
                <div>
                  <h4 className="text-4xl font-black uppercase leading-none tracking-display sm:text-5xl">
                    {item.short}
                  </h4>
                  <p className="mt-3 text-sm font-bold uppercase tracking-wide">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-black/50">
                    {item.school}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 border-t-4 border-swiss-fg pt-16 lg:col-span-5 lg:mt-0 lg:border-l-4 lg:border-t-0 lg:pl-12 lg:pt-0">
          <Label>Achievements</Label>
          <ul className="space-y-8">
            {achievements.map((item) => (
              <li
                key={item.title}
                className={`flex gap-6 border-4 border-swiss-fg p-6 sm:p-8 ${
                  item.texture ? 'swiss-dots bg-swiss-muted' : 'bg-white'
                }`}
              >
                <span
                  className="flex size-11 shrink-0 items-center justify-center bg-swiss-accent text-white"
                  aria-hidden="true"
                >
                  <Award size={22} strokeWidth={2.5} />
                </span>
                <div>
                  {item.year && (
                    <p className="mb-2 text-xs font-bold uppercase tracking-label text-swiss-accent">
                      {item.year}
                    </p>
                  )}
                  <h4 className="text-lg font-black uppercase leading-tight tracking-display">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs font-bold uppercase tracking-label text-black/50">
            Recognitions 2024 — 2026
          </p>
        </div>
      </div>
    </section>
  )
}
