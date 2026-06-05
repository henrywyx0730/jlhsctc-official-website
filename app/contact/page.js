export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-black/50 hover:text-black">← Back to home</a>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Contact
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Contact and Contributions
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Members and contributors can provide English drafts, event summaries,
          photos, videos, posters, PDFs, award records, president records, and
          other club materials.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {["English drafts", "Photos", "Documents", "Media files"].map((item) => (
            <div key={item} className="rounded-2xl border border-black/10 bg-white/60 p-5 text-sm font-medium">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
