const sectionLinks = [
  {
    title: "Archive",
    href: "/archive",
    description: "Club records, articles, documents, photos, and historical materials.",
  },
  {
    title: "Past Awards",
    href: "/awards",
    description: "Club awards, individual awards, competition results, and achievements.",
  },
  {
    title: "Events",
    href: "/events",
    description: "Club events, activities, posters, and event summaries.",
  },
  {
    title: "Members",
    href: "/members",
    description: "Current members, contributors, organizers, and leadership team information.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Contact information, contribution guidelines, and submission methods.",
  },
];

export default function Home() {
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

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/55">
            Official Website
          </p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Critical Thinking Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            The official website of the Critical Thinking Club, featuring club
            introduction, presidents, archives, awards, events, and member
            contributions.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white/45 p-6 shadow-sm">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-white p-8">
            <img
              src="/images/ctc-logo.png"
              alt="Critical Thinking Club logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-white/35">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
            About
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-semibold md:text-5xl">
              About the Club
            </h2>
            <div className="space-y-4 text-base leading-8 text-black/65">
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
              Current Presidents
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Current Presidents
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-6 text-black/55">
              Current presidents of the Critical Thinking Club will be listed here.
              Past presidents are archived on a separate page.
            </p>
            <a
              href="/presidents"
              className="mt-5 inline-flex rounded-full border border-black/20 px-5 py-3 text-sm font-medium hover:border-black"
            >
              View past presidents
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {["Current President", "Current President", "Current President"].map((title, index) => (
            <article key={`${title}-${index}`} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <div className="mb-5 aspect-square rounded-2xl border border-dashed border-black/15 bg-[#eee6d8]" />
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                Content pending
              </p>
              <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Name, role, photo, and contribution summary will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#17130d] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
            School
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-semibold md:text-5xl">
              JLHS ZMB
            </h2>
            <div className="space-y-4 text-base leading-8 text-white/65">
              <p>
                Nanjing Jinling High School, Xinjiekou Campus
              </p>
              <p>
                No. 169 Zhongshan Road, Nanjing, Jiangsu, China
              </p>
              <p>
                The Critical Thinking Club is based in Jinling High School ZMB
                UCLA Global Classroom.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
              Location
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Jinling High School · Xinjiekou Campus
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
              No. 169 Zhongshan Road, Nanjing, Jiangsu, China
            </p>
            <a
              href="https://uri.amap.com/marker?position=118.782026,32.048293&name=%E9%87%91%E9%99%B5%E4%B8%AD%E5%AD%A6%28%E6%96%B0%E8%A1%97%E5%8F%A3%E6%A0%A1%E5%8C%BA%29&src=jlhsctc&coordinate=gaode&callnative=0"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-[#17130d] transition hover:bg-white/85"
            >
              Open in Amap
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-black/45">
        Critical Thinking Club Official Website · Content pending
      </footer>
    </main>
  );
}
