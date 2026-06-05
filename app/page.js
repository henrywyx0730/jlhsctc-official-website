const archiveCategories = [
  {
    title: "Events",
    description: "Public events, club activities, and major moments will be archived here.",
    status: "Content pending",
  },
  {
    title: "Articles",
    description: "Student essays, reflections, publications, and written pieces will be collected here.",
    status: "Content pending",
  },
  {
    title: "Projects",
    description: "Club projects, research initiatives, and collaborative work will be displayed here.",
    status: "Content pending",
  },
  {
    title: "Media",
    description: "Photos, videos, posters, and visual records will be organized here.",
    status: "Content pending",
  },
  {
    title: "Documents",
    description: "PDFs, forms, records, and official club materials will be stored here.",
    status: "Content pending",
  },
];

const timelineItems = [
  {
    year: "Year",
    title: "Milestone title pending",
    description: "A short description of this stage will be added after the club materials are collected.",
  },
  {
    year: "Year",
    title: "Milestone title pending",
    description: "A short description of this stage will be added after the club materials are collected.",
  },
  {
    year: "Year",
    title: "Milestone title pending",
    description: "A short description of this stage will be added after the club materials are collected.",
  },
];

const members = [
  {
    name: "Member Name",
    role: "Role pending",
    description: "Short biography or contribution summary will be added later.",
  },
  {
    name: "Member Name",
    role: "Role pending",
    description: "Short biography or contribution summary will be added later.",
  },
  {
    name: "Member Name",
    role: "Role pending",
    description: "Short biography or contribution summary will be added later.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f3ea]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/images/ctc-logo.png"
              alt="Critical Thinking Club logo"
              className="h-10 w-10 rounded-full object-contain bg-white p-1"
            />
            <span className="text-sm font-semibold tracking-[0.25em] uppercase">
              CTC
            </span>
          </a>
          <div className="hidden gap-6 text-sm text-black/65 md:flex">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#archive" className="hover:text-black">Archive</a>
            <a href="#timeline" className="hover:text-black">Timeline</a>
            <a href="#members" className="hover:text-black">Members</a>
            <a href="#contribute" className="hover:text-black">Contribute</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black/55">
            Official Website
          </p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Critical Thinking Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
            A digital archive for preserving the club&apos;s activities, writings,
            projects, media, and collective memory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#archive"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
            >
              View archive structure
            </a>
            <a
              href="#contribute"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition hover:border-black"
            >
              Submit materials
            </a>
          </div>
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
              About the Critical Thinking Club
            </h2>
            <div className="space-y-4 text-base leading-8 text-black/65">
              <p>
                This section is reserved for the club&apos;s official introduction.
                The final text can include the club&apos;s mission, founding story,
                values, and major areas of activity.
              </p>
              <p>
                Content will be added after the English drafts and supporting
                materials are collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="archive" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
              Archive
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Material categories
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/55">
            The structure is ready. Specific entries, photos, documents, and
            written descriptions can be added later.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {archiveCategories.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-black/10 bg-white/55 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white"
            >
              <div className="mb-8 inline-flex rounded-full border border-black/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-black/45">
                {item.status}
              </div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="border-y border-black/10 bg-[#17130d] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
            Timeline
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Club history
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {timelineItems.map((item, index) => (
              <article key={index} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  {item.year}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="members" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Members
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Team and contributors
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {members.map((member, index) => (
            <article key={index} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <div className="mb-5 aspect-square rounded-2xl border border-dashed border-black/15 bg-[#eee6d8]" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-black/45">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-black/60">
                {member.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contribute" className="bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f3ea] p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
              Contribute
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Materials to collect
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-black/65">
              Future contributors can provide English drafts, event summaries,
              photos, videos, posters, PDFs, and other records. Each archive item
              should ideally include a title, date, category, short description,
              full text, images, related files, and contributor name.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {["English drafts", "Photos", "Documents", "Media files"].map((item) => (
                <div key={item} className="rounded-2xl border border-black/10 bg-white/60 p-5 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-black/45">
        Critical Thinking Club Online Archive · Content pending
      </footer>
    </main>
  );
}
