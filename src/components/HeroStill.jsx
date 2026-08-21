export default function HeroStill() {
  return (
    <aside
      className="relative aspect-[4/5] overflow-hidden bg-wine text-cream sm:aspect-square lg:aspect-[4/5]"
      aria-hidden="true"
    >
      <div className="absolute inset-5 border border-gold/50" />
      <div className="absolute inset-8 flex flex-col justify-between p-4 sm:p-6">
        <p className="font-sans text-[0.62rem] uppercase tracking-brand text-gold">
          ideas · plans · progress · purpose
        </p>
        <div>
          <p className="script text-4xl text-gold sm:text-5xl">A plan today,</p>
          <p className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">
            a legacy tomorrow.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-gold/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </div>
      </div>
    </aside>
  )
}
