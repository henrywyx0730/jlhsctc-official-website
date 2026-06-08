const presidentTerms = [
  {
    year: "2023–2024",
    description:
      "The 2023–2024 leadership team of the Critical Thinking Club.",
    president: {
      name: "Henry Wu",
      chineseName: "吴昱贤",
      role: "President",
      education: "Nanjing JLHS ZMB Class of 2025",
      image: null,
      bio: "Profile pending.",
      achievements: [],
    },
    coPresidents: [
      {
        name: "Lucy Liu",
        chineseName: "刘美忱",
        role: "Co-President",
        education:
          "Nanjing JLHS ZMB Class of 2025 · University of Toronto Class of 2029",
        image: "/president-profiles/lucy-meichen-liu.png",
        bio: "Lucy Liu served as Co-President of the Critical Thinking Club during the 2023–2024 academic year. During her time at JLHS ZMB, she was actively involved in public speaking, mock trial, and debate-related activities, including TEDx@JLHS, NUMT, PPMT, and UofT Cup competitions.",
        achievements: [
          "2023 TEDx@JLHS Host",
          "2024–2025 TEDx@JLHS Speaker",
          "2024 NUMT Summer Tournament Outstanding Witness",
          "2024 NUMT Summer Tournament Team Champion",
          "2025 NUMT Winter Team 4th Place",
          "2025 PPMT Summer Outstanding Attorney",
          "2025 UofT Cup Team Champion",
        ],
      },
      {
        name: "Profile Pending",
        chineseName: "",
        role: "Co-President",
        education: "Nanjing JLHS ZMB",
        image: null,
        bio: "Profile pending.",
        achievements: [],
      },
    ],
  },
];

function Header() {
  return (
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
  );
}

function ProfileImage({ person, large = false }) {
  if (person.image) {
    return (
      <div className={`overflow-hidden rounded-[1.5rem] bg-[#eee6d8] ${large ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={person.image}
          alt={`${person.name} profile photo`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-[1.5rem] border border-dashed border-black/15 bg-[#eee6d8] ${large ? "aspect-[4/5]" : "aspect-square"}`}>
      <span className="text-sm uppercase tracking-[0.2em] text-black/35">
        Photo pending
      </span>
    </div>
  );
}

function AchievementList({ achievements }) {
  if (!achievements.length) {
    return (
      <p className="mt-6 text-sm leading-7 text-black/45">
        Selected achievements will be added later.
      </p>
    );
  }

  return (
    <div className="mt-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/40">
        Selected Achievements
      </p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-black/65">
        {achievements.map((achievement) => (
          <li key={achievement} className="flex gap-2">
            <span className="text-black/35">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PresidentCard({ person }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/60 shadow-sm">
      <div className="grid gap-0 md:grid-cols-[0.75fr_1.25fr]">
        <div className="bg-[#eee6d8] p-6">
          <ProfileImage person={person} large />
        </div>

        <div className="p-7 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-black/40">
            {person.role}
          </p>
          <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
            {person.name}
          </h3>
          {person.chineseName && (
            <p className="mt-1 text-lg text-black/50">
              {person.chineseName}
            </p>
          )}
          <p className="mt-4 text-sm leading-7 text-black/55">
            {person.education}
          </p>
          <p className="mt-6 text-sm leading-7 text-black/65">
            {person.bio}
          </p>
          <AchievementList achievements={person.achievements} />
        </div>
      </div>
    </article>
  );
}

function CoPresidentCard({ person }) {
  return (
    <article className="rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-sm">
      <ProfileImage person={person} />
      <p className="mt-6 text-sm uppercase tracking-[0.2em] text-black/40">
        {person.role}
      </p>
      <h3 className="mt-3 text-2xl font-semibold">
        {person.name}
      </h3>
      {person.chineseName && (
        <p className="mt-1 text-base text-black/50">
          {person.chineseName}
        </p>
      )}
      <p className="mt-4 text-sm leading-7 text-black/55">
        {person.education}
      </p>
      <p className="mt-5 text-sm leading-7 text-black/65">
        {person.bio}
      </p>
      <AchievementList achievements={person.achievements} />
    </article>
  );
}

export default function PresidentsPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <Header />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Presidents
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Past Presidents of the Club
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Profiles are organized by academic year and leadership role, preserving
          each term&apos;s president and co-presidents.
        </p>

        <div className="mt-16 space-y-20">
          {presidentTerms.map((term) => (
            <section key={term.year}>
              <div className="mb-8 flex flex-col justify-between gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
                    Term
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold">
                    {term.year}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-black/55">
                  {term.description}
                </p>
              </div>

              <div>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-black/45">
                  President
                </p>
                <PresidentCard person={term.president} />
              </div>

              <div className="mt-10">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-black/45">
                  Co-Presidents
                </p>
                <div className="grid gap-5 md:grid-cols-2">
                  {term.coPresidents.map((person) => (
                    <CoPresidentCard key={person.name} person={person} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
