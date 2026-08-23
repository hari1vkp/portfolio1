export default function SectionHeader({ index, title, meta }) {
  return (
    <div className="border-b-4 border-swiss-fg">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-end justify-between gap-x-8 gap-y-4 px-6 py-10 lg:sticky lg:top-[76px] lg:z-30 lg:bg-white">
        <h2 className="flex items-baseline gap-4 text-4xl font-black uppercase leading-none tracking-display sm:text-5xl lg:text-6xl">
          <span className="text-xl font-bold text-swiss-accent sm:text-2xl">
            {index}.
          </span>
          {title}
        </h2>
        {meta && (
          <p className="pb-1 text-xs font-bold uppercase tracking-label text-black/50">
            {meta}
          </p>
        )}
      </div>
    </div>
  )
}
