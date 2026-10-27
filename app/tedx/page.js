import { tedxEvents } from "../../src/data/tedxEvents";
import { createPageMetadata } from "../lib/metadata";

const description =
  "The official archive of TEDxYouth@JLHS events, talks, and student leadership contributions.";

export const metadata = createPageMetadata({
  title: "TEDxYouth@JLHS",
  description,
  path: "/tedx",
});

const founder = { person: "Jack Lyu (吕嘉涵)", contribution: "Founder · 2023" };

const leadershipYears = [
  {
    year: "2026",
    roles: [
      { role: "Event Manager", people: ["Michelle Wei (魏明萱)"] },
      { role: "Organizers", people: ["Ivanna Hua (华艺雯)"] },
    ],
  },
  {
    year: "2025",
    roles: [
      { role: "Event Manager", people: ["Leah Zhuang (庄子慧)"] },
      { role: "Organizers", people: ["Michelle Luan (栾雨诺)"] },
      { role: "Multimedia Lead", people: ["Jack Shen (申秋宇)"] },
    ],
  },
  {
    year: "2024",
    roles: [
      { role: "Event Manager", people: ["Coco Hu (胡可萱)"] },
      {
        role: "Organizers",
        people: ["Henry Wu (吴昱贤)", "Sean Shen (申晓旻)"],
      },
      { role: "Multimedia Lead", people: ["Sean Shen (申晓旻)"] },
    ],
  },
  {
    year: "2023",
    roles: [
      { role: "Event Manager", people: ["Jack Lyu (吕嘉涵)"] },
      {
        role: "Organizers",
        people: ["Aurora Ma (马苏阳)", "Krystal Liu (刘熹微)"],
      },
      { role: "Multimedia Lead", people: ["Sean Shen (申晓旻)"] },
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-medium text-tedx-ink">
      {children}
    </p>
  );
}

function leadershipRoleLabel(role, people) {
  return role === "Organizers" && people.length === 1 ? "Organizer" : role;
}

function ArchiveLink({ label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-tedx-ink underline decoration-tedx-ink/50 underline-offset-4 hover:text-black"
    >
      {label} →
    </a>
  );
}

function TalkArchiveEntry({ event }) {
  return (
    <article className="grid gap-5 border-t border-[#d0d7de] py-9 first:border-t-0 first:pt-0 md:grid-cols-[120px_minmax(0,1fr)]">
      <p className="font-display text-4xl font-semibold tracking-tight text-tedx-red">
        {event.year}
      </p>

      <div>
        <h3 className="font-display text-2xl font-semibold text-black/85">
          {event.title}
        </h3>
        <div className="mt-7">
          <SectionLabel>Talks</SectionLabel>
          <div className="mt-4 space-y-6">
            {event.talks.map((talk, index) => (
              <div
                key={`${event.year}-${talk.speaker || "talk"}-${index}`}
                className="border-l-2 border-tedx-ink/35 pl-4"
              >
                <p className="font-display text-lg font-semibold text-black/85">
                  {talk.speaker}
                </p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  {talk.title}
                </p>
                {(talk.youtube || talk.bilibili) && (
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                    <span className="text-black/60">Watch:</span>
                    {talk.youtube && (
                      <ArchiveLink label="YouTube" href={talk.youtube} />
                    )}
                    {talk.bilibili && (
                      <ArchiveLink label="Bilibili" href={talk.bilibili} />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function FounderCredit({ entry }) {
  return (
    <article className="pb-7">
      <h3 className="font-display text-2xl font-semibold text-black/85">
        Founding
      </h3>
      <div className="mt-5 flex flex-col gap-0.5 text-sm leading-6 sm:flex-row sm:items-baseline sm:gap-5">
        <span className="font-display text-base font-semibold text-black/85 sm:min-w-[220px]">
          {entry.person}
        </span>
        <span className="text-black/60">{entry.contribution}</span>
      </div>
    </article>
  );
}

function LeadershipYear({ entry }) {
  return (
    <article className="border-t border-[#d0d7de] py-7">
      <h3 className="font-display text-2xl font-semibold text-black/85">
        TEDxYouth@JLHS {entry.year}
      </h3>
      <dl className="mt-5 space-y-3 text-sm leading-6">
        {entry.roles.map((item) => (
          <div
            key={`${entry.year}-${item.role}`}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-5"
          >
            <dt className="text-black/60 sm:min-w-[220px]">
              {leadershipRoleLabel(item.role, item.people)}
            </dt>
            <dd className="font-display text-base font-semibold text-black/85">
              {item.people.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function TedxPage() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h1
            className="mt-0 flex flex-wrap items-baseline gap-1 text-5xl leading-none md:text-7xl"
            aria-label="TEDxYouth@JLHS"
            style={{
              fontFamily: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif',
            }}
          >
            <span
              className="inline-flex items-baseline font-black leading-none tracking-[-0.01em] text-tedx-red"
              style={{ WebkitTextStroke: "0.06em currentColor" }}
            >
              <span>TED</span>
              <span className="relative -top-[0.18em] inline-block">x</span>
            </span>
            <span className="inline-block text-[1.06em] font-normal text-white">Youth@JLHS</span>
          </h1>
          <p className="mt-6 max-w-3xl text-2xl leading-9 text-white/90 md:text-3xl">
            Transform, Transcend, Transmit
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
            A student-led TEDx platform dedicated to sharing ideas, stories, and
            perspectives.
          </p>
          <p className="mt-8 text-xs font-medium text-tedx-red">
            Organization History
          </p>
          <p className="mt-2 text-sm text-white/60">
            Founded in 2023 by Jack Lyu (吕嘉涵)
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <section className="mt-12 max-w-3xl border-t border-[#d0d7de] pt-6">
          <SectionLabel>Official Links</SectionLabel>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm leading-6">
            <ArchiveLink
              label="TEDx Event Page"
              href="https://www.ted.com/tedx/events/67468"
            />
          </div>
        </section>

        <section className="mt-20 max-w-3xl">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            About TEDxYouth@JLHS
          </h2>
          <p className="mt-5 text-base leading-7 text-black/65">
            TEDxYouth@JLHS is a student-led TEDx initiative at Jinling High
            School. Each annual program creates a platform for ideas sharing,
            thoughtful storytelling, and perspectives from the school community.
          </p>
        </section>

        <section className="mt-20">
          <SectionLabel>Program History</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Events Archive
          </h2>
          <div className="mt-9 max-w-4xl">
            {tedxEvents.map((event) => (
              <TalkArchiveEntry key={event.year} event={event} />
            ))}
          </div>
        </section>

        <section className="mt-20 max-w-4xl">
          <SectionLabel>People &amp; Practice</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            Leadership &amp; Contributions
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-black/65">
            TEDxYouth@JLHS is sustained by students who serve as founders,
            event managers, organizers, and multimedia leads.
          </p>
          <div className="mt-8">
            <FounderCredit entry={founder} />
            {leadershipYears.map((entry) => (
              <LeadershipYear key={entry.year} entry={entry} />
            ))}
          </div>
        </section>
      </section>

    </>
  );
}
