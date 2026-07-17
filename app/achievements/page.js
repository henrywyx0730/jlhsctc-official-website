import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const competitionYears = [
  {
    year: "2026",
    events: [
      {
        title: "NUMT Summer Tournament",
        team: "Team Champion",
        individual: [
          {
            person: "Azalea Li (李熙蓓)",
            recognition: "Outstanding Witness",
          },
          {
            person: "Michelle Luan (栾雨诺)",
            recognition: "Outstanding Witness",
          },
          {
            person: "Rebecca Gai (盖偲嘉)",
            recognition: "Outstanding Attorney",
          },
        ],
      },
    ],
  },
  {
    year: "2025",
    events: [
      {
        title: "NUMT Winter Tournament",
        team: "Team 3rd Place",
        individual: [
          {
            person: "Leah Zhuang (庄子慧)",
            recognition: "Best Attorney",
          },
        ],
      },
      {
        title: "PPMT Summer Tournament",
        individual: [
          {
            person: "Lucy Liu (刘美忱)",
            recognition: "Outstanding Attorney",
          },
        ],
      },
    ],
  },
  {
    year: "2024",
    events: [
      {
        title: "NUMT Summer Tournament",
        team: "Team Champion",
        individual: [
          {
            person: "Henry Wu (吴昱贤)",
            recognition: "Best Attorney",
          },
          {
            person: "Lucy Liu (刘美忱)",
            recognition: "Best Witness",
          },
        ],
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        title: "NUMT Summer Tournament",
        individual: [
          {
            person: "Henry Wu (吴昱贤)",
            recognition: "Outstanding Attorney",
          },
          {
            person: "Coco Hu (胡可萱)",
            recognition: "Outstanding Witness Honorable Mention",
          },
        ],
      },
      {
        title: "PPMT Summer Tournament",
        team: "Team 6th Place",
        individual: [],
      },
    ],
  },
];

const speakingPeriods = [
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
        contribution: "Speaker; Event Manager",
      },
    ],
  },
];

function HonorDivider({ label, className = "mt-5" }) {
  return (
    <div className={className}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9a783e]">
        {label}
      </span>
    </div>
  );
}

function LaurelHalf({ mirrored = false }) {
  return (
    <svg
      viewBox="0 0 24 28"
      className={`h-6 w-5 shrink-0 ${mirrored ? "scale-x-[-1]" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 26C10 23 5 16 5 3" strokeWidth="1.1" />
      <path d="M8 20c-3-1-5-3-6-6 3 0 6 2 6 6Z" fill="currentColor" stroke="none" />
      <path d="M6 14c-3-1-4-3-4-6 3 1 5 3 4 6Z" fill="currentColor" stroke="none" />
      <path d="M7 8C5 6 5 3 7 1c2 2 2 5 0 7Z" fill="currentColor" stroke="none" />
      <path d="M12 23c-3 0-5-1-7-3 3-1 6 0 7 3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TeamHonor({ result }) {
  return (
    <div
      className="mt-4 flex max-w-sm items-center gap-2 text-[#8f6d36]"
      aria-label={`Team award: ${result}`}
    >
      <span className="h-px w-6 shrink-0 bg-[#b08d57]" aria-hidden="true" />
      <LaurelHalf />
      <span className="font-serif text-xl font-bold uppercase tracking-[0.04em] text-[#765625] md:text-2xl">
        {result}
      </span>
      <LaurelHalf mirrored />
      <span className="h-px w-6 shrink-0 bg-[#b08d57]" aria-hidden="true" />
    </div>
  );
}

function PlacementHonor({ result }) {
  return (
    <div className="mt-5 flex max-w-xs items-center gap-2 text-[#8f6d36]">
      <span className="h-px w-6 bg-[#b08d57]" aria-hidden="true" />
      <span className="font-serif text-xs font-medium uppercase tracking-[0.1em] text-black/50">
        {result}
      </span>
      <span className="h-px w-6 bg-[#b08d57]" aria-hidden="true" />
    </div>
  );
}

function AchievementEvent({ event }) {
  return (
    <article className="border-t border-[#d0d7de] pt-10 first:border-t-0 first:pt-0">
      <div className="max-w-3xl">
        <h4 className="font-serif text-2xl font-semibold tracking-tight text-black/85 md:text-3xl">
          {event.title}
        </h4>
        {event.team && (
          event.team === "Team Champion" ? (
            <TeamHonor result={event.team} />
          ) : (
            <PlacementHonor result={event.team} />
          )
        )}
      </div>

      {event.individual.length > 0 && (
        <div className="mt-8">
          <h5 className="font-serif text-lg font-semibold tracking-tight text-black/75">
            Individual Honors
          </h5>
          <ul className="mt-4 space-y-4 border-l border-[#d0d7de] pl-5 text-sm leading-6">
            {event.individual.map((entry) => (
              <li
                key={`${event.title}-${entry.person}`}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="font-display text-base font-semibold text-black/85 sm:w-64 sm:shrink-0">
                  {entry.person}
                </span>
                <span className="text-sm text-black/55">{entry.recognition}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function AchievementYear({ year }) {
  return (
    <section className="border-t border-[#d0d7de] pt-16 first:border-t-0 first:pt-0">
      <h3 className="font-serif text-3xl font-normal tracking-tight text-black/90 md:text-4xl">
        {year.year}
      </h3>
      <div className="mt-12 space-y-14">
        {year.events.map((event) => (
          <AchievementEvent key={event.title} event={event} />
        ))}
      </div>
    </section>
  );
}

function CompetitionAchievements() {
  return (
    <div className="mt-10 space-y-14">
      {competitionYears.map((year) => (
        <AchievementYear key={year.year} year={year} />
      ))}
    </div>
  );
}

function SpeakingPeriod({ period }) {
  const [year] = period.period.split(" TEDx Youth@JLHS");

  return (
    <section className="border-t border-[#d0d7de] pt-10 first:border-t-0 first:pt-0">
      <p className="font-serif text-3xl font-normal tracking-tight text-black/90">{year}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-black/80">
        TEDx Youth@JLHS
      </h3>
      <HonorDivider label="Leadership & Speaking" className="mt-5" />
      <ul className="mt-4 space-y-4 border-l border-[#d0d7de] pl-5 text-sm leading-6">
        {period.entries.map((entry) => (
          <li
            key={`${period.period}-${entry.person}`}
            className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-5"
          >
            <span className="font-semibold text-black/80">{entry.person}</span>
            <span className="text-black/60">{entry.contribution}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SpeakingAchievements() {
  return (
    <div className="mt-8 space-y-10">
      {speakingPeriods.map((period) => (
        <SpeakingPeriod key={period.period} period={period} />
      ))}
    </div>
  );
}

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-0 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
          Achievements
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          A record of achievements, competition results, public speaking, and
          leadership contributions associated with the Critical Thinking Club.
        </p>

        <section className="mt-16">
          <h2 className="font-serif text-3xl font-semibold">Competition History</h2>
          <CompetitionAchievements />
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">
            Public Speaking &amp; Leadership
          </h2>
          <SpeakingAchievements />
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
