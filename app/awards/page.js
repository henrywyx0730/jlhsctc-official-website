export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ea]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/ctc-logo.png"
              alt="Critical Thinking Club logo"
              className="h-10 w-10 rounded-full bg-white object-contain p-1"
            />
            <span className="text-sm font-semibold tracking-[0.25em] uppercase">
              CTC
            </span>
          </a>

          <div className="hidden gap-6 text-sm text-black/65 md:flex">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/presidents" className="hover:text-black">Presidents</a>
            <a href="/archive" className="hover:text-black">Archive</a>
            <a href="/awards" className="hover:text-black">Past Awards</a>
            <a href="/events" className="hover:text-black">Events</a>
            <a href="/members" className="hover:text-black">Members</a>
            <a href="/contact" className="hover:text-black">Contact</a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Past Awards
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Awards and Achievements
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Club awards, individual awards, competition results, and achievements
          will be collected here.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Club Awards", "Individual Awards", "Competition Results"].map((title) => (
            <article key={title} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                Content pending
              </p>
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Award names, years, recipients, and descriptions will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
