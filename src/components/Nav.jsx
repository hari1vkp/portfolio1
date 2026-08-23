import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="swiss-focus group relative block overflow-hidden px-1 py-3 text-sm font-bold uppercase tracking-label"
    >
      <span className="block transition-transform duration-200 ease-out group-hover:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center translate-y-full text-swiss-accent transition-transform duration-200 ease-out group-hover:translate-y-0"
      >
        {label}
      </span>
    </a>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b-4 border-swiss-fg bg-white">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6"
      >
        <a
          href="#top"
          className="swiss-focus flex size-11 items-center justify-center bg-swiss-fg text-base font-black text-white transition-colors duration-200 ease-out hover:bg-swiss-accent"
          aria-label="Hariharasudhan R — back to top"
        >
          HR
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-label">
            <span className="size-2 bg-swiss-accent" aria-hidden="true" />
            Available for work
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="swiss-focus flex size-11 items-center justify-center border-2 border-swiss-fg transition-colors duration-200 ease-out hover:bg-swiss-fg hover:text-white lg:hidden"
        >
          {open ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
        </button>
      </nav>

      {/* Mobile overlay — full inversion, same slide language */}
      {open && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-30 flex flex-col justify-between border-t-4 border-swiss-fg bg-swiss-fg px-6 py-10 text-white lg:hidden">
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={link.href} className="border-b border-white/20">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="swiss-focus group flex items-baseline gap-4 py-5 text-4xl font-black uppercase tracking-display transition-colors duration-150 ease-linear hover:text-swiss-accent"
                >
                  <span className="text-base font-bold text-swiss-accent">
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs font-bold uppercase tracking-label text-white/50">
            Hariharasudhan R — Portfolio 2026
          </p>
        </div>
      )}
    </header>
  )
}
