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
    <h3 className="text-[clamp(1.5rem,3.4vw,3.5rem)] font-black uppercase leading-[0.9] tracking-display">
      {children}
    </h3>
  )
}

/*
 * Geometry is expressed as Tailwind classes (margins shift the
 * flex-centered tile; framer-motion owns the transform).
 */
const slides = [
  {
    id: 'shift',
    scale: 1.7,
    className:
      'swiss-grid-pattern bg-white w-[78vw] h-[44vh] -mt-[22vh] -ml-[16vw] lg:w-[36vw] lg:h-[46vh]',
    node: (
      <>
        <TileLabel index={1} />
        <div
          className="absolute bottom-5 right-5 aspect-square w-[26%] bg-swiss-fg sm:bottom-8 sm:right-8"
          aria-hidden="true"
        />
        <TileTitle>Shift AI</TileTitle>
      </>
    ),
  },
  {
    id: 'garage',
    scale: 2,
    className:
      'swiss-dots bg-swiss-muted w-[74vw] h-[40vh] mt-[20vh] -ml-[20vw] lg:w-[32vw] lg:h-[42vh]',
    node: (
      <>
        <TileLabel index={2} />
        <div
          className="absolute bottom-5 right-5 aspect-square w-[26%] rounded-full border-4 border-swiss-fg sm:bottom-8 sm:right-8"
          aria-hidden="true"
        />
        <TileTitle>Cloud Garage</TileTitle>
      </>
    ),
  },
  {
    id: 'stag',
    scale: 2.35,
    className:
      'swiss-diagonal bg-white w-[80vw] h-[46vh] -mt-[24vh] ml-[14vw] lg:w-[38vw] lg:h-[48vh]',
    node: (
      <>
        <TileLabel index={3} />
        <div
          className="absolute bottom-6 right-5 h-1.5 w-[40%] bg-swiss-fg sm:right-8"
          aria-hidden="true"
        />
        <TileTitle>StagKitchen</TileTitle>
      </>
    ),
  },
  {
    id: 'robo',
    scale: 2.8,
    className:
      'bg-swiss-accent text-white w-[70vw] h-[38vh] mt-[18vh] ml-[16vw] lg:w-[30vw] lg:h-[40vh]',
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
    scale: 3.2,
    className:
      'bg-swiss-fg text-white w-[84vw] h-[40vh] -mt-[4vh] lg:w-[34vw] lg:h-[38vh]',
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
