export default function ContactPage() {
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
