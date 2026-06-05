export default function EventsPage() {
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
