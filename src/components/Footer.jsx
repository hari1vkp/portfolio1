import { ArrowUp, ArrowRight } from 'lucide-react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/hari1vkp' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hariharasudhan-r-791901294/',
  },
  { label: 'Email', href: 'mailto:blackarctech@gmail.com' },
]

export default function Footer() {
  return (
    <footer id="contact" aria-label="Contact" className="scroll-mt-[72px] border-t-4 border-swiss-fg">
      {/* CTA block on diagonal texture */}
      <div className="swiss-diagonal bg-swiss-muted">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-36">
          <p className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-label sm:text-sm">
            <span className="size-3 bg-swiss-accent" aria-hidden="true" />
            05. Contact — Open to backend roles
          </p>
          <h2 className="text-[clamp(3rem,10vw,8.5rem)] font-black uppercase leading-[0.9] tracking-display">
            Let&apos;s build
            <br />
            something
            <br />
            <span className="text-swiss-accent">reliable.</span>
          </h2>

          <div className="mt-14 flex flex-col items-start gap-5">
            <a
              href="mailto:blackarctech@gmail.com"
              className="swiss-focus group inline-flex h-16 max-w-full items-center gap-3 border-4 border-swiss-fg bg-swiss-accent px-4 text-xs font-bold uppercase tracking-wide text-white transition-colors duration-200 ease-out hover:bg-swiss-fg sm:gap-4 sm:px-8 sm:text-sm sm:tracking-label"
            >
              <span className="break-all">blackarctech@gmail.com</span>
              <ArrowRight
                size={20}
                strokeWidth={2.5}
                className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
              />
            </a>
            <a
              href="tel:+918667637540"
              className="swiss-focus text-sm font-bold uppercase tracking-label transition-colors duration-150 ease-linear hover:text-swiss-accent"
            >
              +91 86676 37540
            </a>
          </div>
        </div>
      </div>

      {/* footer grid */}
      <div className="border-t-4 border-swiss-fg bg-white">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 px-6 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="flex size-11 items-center justify-center bg-swiss-fg text-base font-black text-white">
              HR
            </span>
          </div>
          <nav aria-label="Social links">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-label text-black/50">
              Elsewhere
            </h3>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="swiss-focus text-sm font-bold uppercase transition-colors duration-150 ease-linear hover:text-swiss-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-label text-black/50">
              Colophon
            </h3>
            <p className="max-w-[16ch] text-xs leading-relaxed uppercase tracking-wide text-black/50">
              Inter — Grid 24px — Red #FF3000
            </p>
          </div>
          <div className="flex items-start justify-start sm:justify-end">
            <a
              href="#top"
              className="swiss-focus flex h-16 w-full items-center justify-center gap-3 border-4 border-swiss-fg text-sm font-bold uppercase tracking-label transition-colors duration-200 ease-out hover:bg-swiss-fg hover:text-white sm:w-auto sm:px-8"
            >
              Top
              <ArrowUp size={18} strokeWidth={2.5} />
            </a>
          </div>
        </div>
        <div className="border-t-4 border-swiss-fg">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-6 text-xs font-bold uppercase tracking-label text-black/50">
            <p>© 2026 Hariharasudhan R</p>
            <p>Built on a strict grid — India</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
