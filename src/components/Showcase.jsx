import ZoomParallax from './ui/ZoomParallax.jsx'

function TileLabel({ index }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold uppercase tracking-label">
        Fig. 0{index}
      </span>
      <span className="size-2 bg-swiss-accent" aria-hidden="true" />
    </div>
  )
}

function TileTitle({ children }) {
  return (
    <h3 className="text-[clamp(1.75rem,3.2vw,3.5rem)] font-black uppercase leading-[0.9] tracking-display">
      {children}
    </h3>
  )
}

const slides = [
  {
    id: 'shift',
    scale: 4,
    top: '-24vh',
    left: '-18vw',
    width: 'min(72vw, 34vw)',
    height: '42vh',
    className: 'swiss-grid-pattern bg-white',
    node: (
      <>
        <TileLabel index={1} />
        <div
          className="absolute bottom-6 right-6 aspect-square w-[28%] bg-swiss-fg"
          aria-hidden="true"
        />
        <TileTitle>Shift AI</TileTitle>
      </>
    ),
  },
  {
    id: 'garage',
    scale: 5,
    top: '22vh',
    left: '-22vw',
    width: 'min(76vw, 32vw)',
    height: '40vh',
    className: 'swiss-dots bg-swiss-muted',
    node: (
      <>
        <TileLabel index={2} />
        <div
          className="absolute bottom-6 right-6 aspect-square w-[28%] rounded-full border-4 border-swiss-fg"
          aria-hidden="true"
        />
        <TileTitle>Cloud Garage</TileTitle>
      </>
    ),
  },
  {
    id: 'stag',
    scale: 6,
    top: '-26vh',
    left: '16vw',
    width: 'min(76vw, 34vw)',
    height: '44vh',
    className: 'swiss-diagonal bg-white',
    node: (
      <>
        <TileLabel index={3} />
        <div
          className="absolute bottom-6 right-6 h-1.5 w-[40%] bg-swiss-fg"
          aria-hidden="true"
        />
        <TileTitle>StagKitchen</TileTitle>
      </>
    ),
  },
  {
    id: 'robo',
    scale: 8,
    top: '20vh',
    left: '18vw',
    width: 'min(70vw, 30vw)',
    height: '38vh',
    className: 'bg-swiss-accent text-white',
    node: (
      <>
        <span className="text-xs font-bold uppercase tracking-label">
          2025 · Finalist
        </span>
        <TileTitle>Robo Nova</TileTitle>
      </>
    ),
  },
  {
    id: 'hire',
    scale: 9,
    top: '-4vh',
    left: '0vw',
    width: 'min(80vw, 32vw)',
    height: '36vh',
    className: 'bg-swiss-fg text-white',
    node: (
      <>
        <span className="text-xs font-bold uppercase tracking-label">
          05 · Contact
        </span>
        <TileTitle>
          Let&apos;s build something
          <span className="text-swiss-accent"> reliable.</span>
        </TileTitle>
      </>
    ),
  },
]

export default function Showcase() {
  return (
    <section aria-label="Project showcase">
      <h2 className="sr-only">Project showcase — scroll to travel through the work</h2>
      <p className="sr-only">
        A scroll-driven sequence of project tiles: Shift AI, Cloud Garage,
        StagKitchen, Robo Nova finalist award, and a call to get in touch.
      </p>

      {/* Decorative zoom experience; text content is duplicated elsewhere on the page */}
      <div aria-hidden="true" className="border-t-4 border-swiss-fg">
        <ZoomParallax slides={slides} />
      </div>
    </section>
  )
}
