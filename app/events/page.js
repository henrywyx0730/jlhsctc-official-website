export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-black/50 hover:text-black">← Back to home</a>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Events
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Events and Activities
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Event records, photos, posters, and summaries will be added here after
          the club materials are collected.
        </p>

        <div className="mt-12 rounded-[2rem] border border-dashed border-black/15 bg-white/45 p-8">
          <p className="text-base leading-8 text-black/65">
            Upcoming and past events can be organized by year, type, and topic.
          </p>
        </div>
      </section>
    </main>
  );
}
