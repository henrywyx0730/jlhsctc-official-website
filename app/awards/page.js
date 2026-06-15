const items = [
  { title: "Team Awards", description: "Content pending." },
  { title: "Individual Awards", description: "Content pending." },
  { title: "Competition Results", description: "Content pending." },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d0d7de] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/ctc-logo.png"
            alt="Critical Thinking Club logo"
            className="h-9 w-9 rounded-md border border-[#d0d7de] bg-white object-contain p-1"
          />
          <span className="text-sm font-semibold tracking-[0.06em] uppercase">
            CTC
          </span>
        </a>

        <div className="hidden gap-5 text-sm text-black/65 md:flex">
            <a href="/" className="hover:text-black">Home</a>
            <a href="/presidents" className="hover:text-black">Presidents</a>
            <a href="/archive" className="hover:text-black">Archive</a>
            <a href="/awards" className="font-medium text-black">Past Awards</a>
            <a href="/events" className="hover:text-black">Events</a>
            <a href="/members" className="hover:text-black">Members</a>
            <a href="/contact" className="hover:text-black">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Past Awards
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          Club awards, individual awards, competition results, and achievements will be organized here.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-[#d0d7de] bg-white">
          <div className="grid grid-cols-[1fr_auto] border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-3 text-sm font-semibold text-black/65">
            <span>Section</span>
            <span>Status</span>
          </div>

          {items.map((item, index) => (
            <div
              key={item.title}
              className={`grid grid-cols-[1fr_auto] gap-4 px-5 py-4 ${index !== items.length - 1 ? "border-b border-[#d0d7de]" : ""}`}
            >
              <div>
                <h2 className="text-base font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-black/55">
                  {item.description}
                </p>
              </div>
              <span className="self-center rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-xs text-black/55">
                Pending
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
