const sections = [
  {
    title: "Archive",
    description: "Club records, articles, documents, photos, and historical materials will be organized here.",
    status: "Content pending",
  },
  {
    title: "Presidents",
    description: "Current and past presidents, their terms, photos, and contribution summaries will be displayed here.",
    status: "Content pending",
  },
  {
    title: "Past Awards",
    description: "Club awards, individual awards, competition results, and achievements will be collected here.",
    status: "Content pending",
  },
  {
    title: "Events",
    description: "Past and future club events, activities, posters, and event summaries will be archived here.",
    status: "Content pending",
  },
  {
    title: "Members",
    description: "Current members, contributors, organizers, and leadership team information will be added here.",
    status: "Content pending",
  },
  {
    title: "Contact",
    description: "Contact information, contribution guidelines, and submission methods will be added here.",
    status: "Content pending",
  },
];

const timelineItems = [
  {
    year: "Year",
    title: "Club milestone pending",
    description: "A short description of this stage will be added after the club materials are collected.",
  },
  {
    year: "Year",
    title: "Club milestone pending",
    description: "A short description of this stage will be added after the club materials are collected.",
  },
  {
    year: "Year",
    title: "Club milestone pending",
    description: "A short description of this stage will be added after the club materials are collected.",
  },
];

const presidentCards = [
  "Current President",
  "Past President",
  "Past President",
];

const awardCards = [
  "Club Awards",
  "Individual Awards",
  "Competition Results",
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
              className="h-10 w-10 rounded-full bg-white object-contain p-1"
            />
            <span className="text-sm font-semibold tracking-[0.25em] uppercase">
              CTC
            </span>
          </a>

          <div className="hidden gap-6 text-sm text-black/65 md:flex">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#archive" className="hover:text-black">Archive</a>
            <a href="#presidents" className="hover:text-black">Presidents</a>
            <a href="#awards" className="hover:text-black">Past Awards</a>
            <a href="#events" className="hover:text-black">Events</a>
            <a href="#members" className="hover:text-black">Members</a>
            <a href="#contact" className="hover:text-black">Contact</a>
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
            The official website of the Critical Thinking Club, featuring club history,
            archives, presidents, awards, events, and member contributions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#archive"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80"
            >
              Explore the website
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium transition hover:border-black"
            >
              Contribute materials
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

      <section id="archive" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
              Website Sections
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Official club records
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/55">
            The website structure is ready. Specific archives, president records,
            awards, event descriptions, photos, and documents can be added later.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((item) => (
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
            Club timeline
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

      <section id="presidents" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Presidents
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Presidents of the Club
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {presidentCards.map((title, index) => (
            <article key={`${title}-${index}`} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                Content pending
              </p>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Name, term year, photo, and contribution summary will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="awards" className="border-y border-black/10 bg-white/35">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
            Past Awards
          </p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Awards and achievements
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {awardCards.map((title, index) => (
              <article key={`${title}-${index}`} className="rounded-3xl border border-black/10 bg-[#f7f3ea] p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-black/40">
                  Content pending
                </p>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">
                  Award names, years, recipients, and descriptions will be added later.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Events
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Events and activities
        </h2>
        <div className="mt-10 rounded-[2rem] border border-dashed border-black/15 bg-white/45 p-8">
          <p className="text-base leading-8 text-black/65">
            Event records, photos, posters, and summaries will be added here after
            the club materials are collected.
          </p>
        </div>
      </section>

      <section id="members" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Members
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
          Members and contributors
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Member Name", "Member Name", "Member Name"].map((name, index) => (
            <article key={index} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <div className="mb-5 aspect-square rounded-2xl border border-dashed border-black/15 bg-[#eee6d8]" />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-black/45">Role pending</p>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Short biography or contribution summary will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-black/10 bg-[#f7f3ea] p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              Contact and contributions
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-black/65">
              Members and contributors can provide English drafts, event summaries,
              photos, videos, posters, PDFs, award records, president records,
              and other club materials. Each item should ideally include a title,
              date, category, short description, images or files, and contributor name.
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
        Critical Thinking Club Official Website · Content pending
      </footer>
    </main>
  );
}
