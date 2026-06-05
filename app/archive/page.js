export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-black/50 hover:text-black">← Back to home</a>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Archive
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Club Archive
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Club records, articles, documents, photos, and historical materials will
          be organized here after the content is collected.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Articles", "Documents", "Media"].map((item) => (
            <article key={item} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                Content pending
              </p>
              <h2 className="mt-5 text-2xl font-semibold">{item}</h2>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Titles, descriptions, files, and images will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
