export default function PresidentsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-black/50 hover:text-black">← Back to home</a>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Presidents
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Past Presidents of the Club
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          This page is reserved for past presidents of the Critical Thinking Club.
          Names, terms, photos, and contribution summaries will be displayed here.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Past President", "Past President", "Past President"].map((title, index) => (
            <article key={`${title}-${index}`} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <div className="mb-5 aspect-square rounded-2xl border border-dashed border-black/15 bg-[#eee6d8]" />
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                Content pending
              </p>
              <h2 className="mt-5 text-2xl font-semibold">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Name, term year, photo, and contribution summary will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
