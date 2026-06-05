export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-black/50 hover:text-black">← Back to home</a>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
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
