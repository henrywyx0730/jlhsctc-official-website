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
          <span className="text-sm font-semibold tracking-[0.18em] uppercase">
            CTC
          </span>
        </a>

        <div className="hidden gap-5 text-sm text-black/65 md:flex">
          <a href="/" className="font-medium text-black">Home</a>
          <a href="/presidents" className="hover:text-black">Presidents</a>
          <a href="/archive" className="hover:text-black">Archive</a>
          <a href="/awards" className="hover:text-black">Past Awards</a>
          <a href="/events" className="hover:text-black">Events</a>
          <a href="/members" className="hover:text-black">Members</a>
          <a href="/contact" className="hover:text-black">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function SectionBox({ eyebrow, title, children }) {
  return (
    <section className="overflow-hidden rounded-xl border border-[#d0d7de] bg-white">
      <div className="border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-2xl font-semibold">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <Header />

      <section className="border-b border-[#d0d7de] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/50">
              Official Website
            </p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
              Critical Thinking Club
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">
              The official website of the Critical Thinking Club, featuring club
              introduction, presidents, archives, awards, events, and member
              contributions.
            </p>
          </div>

          <div className="rounded-xl border border-[#d0d7de] bg-[#f6f8fa] p-5">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-[#d0d7de] bg-white p-8">
              <img
                src="/images/ctc-logo.png"
                alt="Critical Thinking Club logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12">
        <SectionBox eyebrow="About" title="About the Club">
          <div className="space-y-4 text-sm leading-7 text-black/70">
            <p>
              This section is reserved for the club&apos;s official introduction.
              The final text can include the club&apos;s mission, founding story,
              core values, activities, and role within the school community.
            </p>
            <p>
              Content will be added after the English drafts and supporting
              materials are collected.
            </p>
          </div>
        </SectionBox>

        <SectionBox eyebrow="Current Presidents" title="Current Presidents">
          <div className="rounded-lg border border-dashed border-[#d0d7de] bg-[#f6f8fa] p-5 text-sm leading-7 text-black/60">
            Current presidents of the Critical Thinking Club will be listed here
            with names, roles, photos, and short contribution summaries.
          </div>
        </SectionBox>

        <SectionBox eyebrow="School" title="JLHS ZMB">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
            <div className="space-y-3 text-sm leading-7 text-black/70">
              <p>Nanjing Jinling High School, Xinjiekou Campus</p>
              <p>No. 169 Zhongshan Road, Nanjing, Jiangsu, China</p>
              <p>
                The Critical Thinking Club is based in Jinling High School ZMB
                UCLA Global Classroom.
              </p>
            </div>
            <a
              href="https://uri.amap.com/marker?position=118.782026,32.048293&name=%E9%87%91%E9%99%B5%E4%B8%AD%E5%AD%A6%28%E6%96%B0%E8%A1%97%E5%8F%A3%E6%A0%A1%E5%8C%BA%29&src=jlhsctc&coordinate=gaode&callnative=0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-4 py-2 text-sm font-medium text-black/75 hover:bg-white"
            >
              Open in Amap
            </a>
          </div>
        </SectionBox>
      </section>

      <footer className="border-t border-[#d0d7de] px-6 py-6 text-center text-sm text-black/45">
        Critical Thinking Club Official Website · Content pending
      </footer>
    </main>
  );
}
