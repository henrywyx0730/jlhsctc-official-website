const documents = [
  {
    title: "Mock Trial Review.pdf",
    description: "Review material archived by the Critical Thinking Club.",
    href: "/archive-materials/documents/mock-trial-review.pdf",
  },
  {
    title: "Instructions.pdf",
    description: "Instruction document archived by the Critical Thinking Club.",
    href: "/archive-materials/documents/instructions.pdf",
  },
];

export default function ArchiveDocumentsPage() {
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
        <div className="flex items-center gap-2 text-sm text-black/50">
          <a href="/archive" className="hover:text-black">Archive</a>
          <span>/</span>
          <span>Documents</span>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
              Archive / Documents
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              Documents
            </h1>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/55">
            Official documents and reference materials preserved by the Critical
            Thinking Club.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-black/10 bg-white/60 shadow-sm">
          <div className="grid grid-cols-[1fr_auto] border-b border-black/10 bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
            <span>Name</span>
            <span>Action</span>
          </div>

          {documents.map((doc, index) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className={`grid grid-cols-[1fr_auto] gap-6 px-5 py-4 transition hover:bg-white ${
                index !== documents.length - 1 ? "border-b border-black/10" : ""
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📄</span>
                  <span className="truncate text-base font-semibold">
                    {doc.title}
                  </span>
                </div>
                <p className="mt-1 pl-9 text-sm leading-6 text-black/55">
                  {doc.description}
                </p>
              </div>

              <span className="self-center rounded-full border border-black/10 px-3 py-1 text-sm font-medium text-black/60 transition group-hover:text-black">
                Open
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
