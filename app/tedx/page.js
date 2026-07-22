import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { tedxEvents } from "../../src/data/tedxEvents";

const leadershipPeriods = [
  {
    period: "Founding",
    entries: [
      { person: "Jack Lyu (吕嘉涵)", contribution: "Founder · 2023" },
    ],
  },
  {
    period: "2024–2025 TEDx Youth@JLHS",
    entries: [
      { person: "Coco Hu (胡可萱)", contribution: "Executive Officer" },
      { person: "Henry Wu (吴昱贤)", contribution: "Curator" },
      { person: "Lucy Liu (刘美忱)", contribution: "Speaker" },
    ],
  },
  {
    period: "2023 TEDx Youth@JLHS",
    entries: [
      { person: "Henry Wu (吴昱贤)", contribution: "Speaker" },
      { person: "Lucy Liu (刘美忱)", contribution: "Host" },
      {
        person: "Coco Hu (胡可萱)",
        contribution: "Speaker · Event Manager",
      },
    ],
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-medium text-[#e62b1e]">
      {children}
    </p>
  );
}

function ArchiveLink({ label, href }) {
  if (!href) {
    return <span className="text-[#e62b1e]/65">{label} →</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="font-medium text-[#e62b1e] underline decoration-[#e62b1e]/50 underline-offset-4 hover:text-black"
    >
      {label} →
    </a>
  );
}

function TalkArchiveEntry({ event }) {
  return (
    <article className="grid gap-5 border-t border-[#d0d7de] py-9 first:border-t-0 first:pt-0 md:grid-cols-[120px_minmax(0,1fr)]">
      <p className="font-display text-4xl font-semibold tracking-tight text-[#e62b1e]">
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
                className="border-l-2 border-[#e62b1e]/35 pl-4"
              >
                <p className="font-display text-lg font-semibold text-black/85">
                  {talk.speaker || "Speaker name pending"}
                </p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  {talk.title || "Talk title pending"}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm">
                  <span className="text-black/45">Watch:</span>
                  <ArchiveLink label="YouTube" href={talk.youtube} />
                  <ArchiveLink label="Bilibili" href={talk.bilibili} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function LeadershipPeriod({ period }) {
  return (
    <article className="border-t border-[#d0d7de] py-7 first:border-t-0 first:pt-0">
      <h3 className="font-display text-2xl font-semibold text-black/85">
        {period.period}
      </h3>
      <ul className="mt-5 space-y-3 text-sm leading-6">
        {period.entries.map((entry) => (
          <li
            key={`${period.period}-${entry.person}`}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-5"
          >
            <span className="font-display text-base font-semibold text-black/85 sm:min-w-[220px]">
              {entry.person}
            </span>
            <span className="text-black/60">{entry.contribution}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function TedxPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

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
              className="inline-flex items-baseline font-black leading-none tracking-[-0.01em] text-[#EB0028]"
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
          <p className="mt-8 text-xs font-medium text-[#e62b1e]">
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
            <ArchiveLink label="YouTube" href="" />
            <ArchiveLink label="Bilibili" href="" />
          </div>
        </section>

        <section className="mt-20 max-w-3xl">
          <SectionLabel>About</SectionLabel>
          <h2 className="mt-3 font-display text-3xl font-semibold">
            About TEDx Youth@JLHS
          </h2>
          <p className="mt-5 text-base leading-7 text-black/65">
            TEDx Youth@JLHS is a student-led TEDx initiative at Jinling High
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
            TEDx Youth@JLHS is sustained by students who contribute as founders,
            speakers, hosts, curators, executive officers, and event managers.
          </p>
          <div className="mt-8">
            {leadershipPeriods.map((period) => (
              <LeadershipPeriod key={period.period} period={period} />
            ))}
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
