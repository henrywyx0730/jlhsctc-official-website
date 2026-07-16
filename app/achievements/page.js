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
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#9a783e]">
        {label}
      </span>
    </div>
  );
}

function LaurelWreathHalf({ mirrored = false }) {
  return (
    <svg
      viewBox="0 0 48 44"
      className={`h-10 w-12 shrink-0 ${mirrored ? "scale-x-[-1]" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M43 40C21 38 7 26 7 5" strokeWidth="1.35" />
      <path d="M17 34c-6-1-11-4-14-9 6 0 11 3 14 9Z" fill="currentColor" stroke="none" />
      <path d="M10 27c-5-2-8-6-9-11 5 1 9 5 9 11Z" fill="currentColor" stroke="none" />
      <path d="M8 19c-4-3-6-7-5-12 5 2 7 6 5 12Z" fill="currentColor" stroke="none" />
      <path d="M12 12c-2-4-1-8 2-12 3 4 2 8-2 12Z" fill="currentColor" stroke="none" />
      <path d="M25 37c-5 0-10-2-14-6 6-1 11 1 14 6Z" fill="currentColor" stroke="none" />
      <path d="M20 31c-4-2-7-5-8-10 5 1 8 4 8 10Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TeamHonor({ result }) {
  return (
    <div
      className="mt-3 flex items-center gap-2 text-[#8f6d36]"
      aria-label={`Team award: ${result}`}
    >
      <span className="h-px w-20 shrink-0 bg-[#b08d57]" aria-hidden="true" />
      <div className="flex shrink-0 items-center gap-0">
        <LaurelWreathHalf />
        <span className="font-display text-base font-semibold uppercase tracking-[0.14em] text-[#765625]">
          {result}
        </span>
        <LaurelWreathHalf mirrored />
      </div>
      <span className="h-px w-20 shrink-0 bg-[#b08d57]" aria-hidden="true" />
    </div>
  );
}

function PlacementHonor({ result }) {
  return (
    <div className="mt-3 flex items-center justify-start gap-2 text-[#8f6d36]">
      <span className="h-px w-7 bg-[#b08d57]" aria-hidden="true" />
      <span className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#765625]">
        {result}
      </span>
      <span className="h-px w-7 bg-[#b08d57]" aria-hidden="true" />
    </div>
  );
}

function AchievementEvent({ event }) {
  return (
    <article className="border-t border-[#d0d7de] pt-7 first:border-t-0 first:pt-0">
      <div className="max-w-3xl">
        <h4 className="font-display text-2xl font-semibold text-black/85">
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
        <div className={event.team === "Team Champion" ? "mt-3" : event.team ? "mt-3" : "mt-6"}>
          <HonorDivider
            label="Individual Honors"
            className={event.team === "Team Champion" ? "mt-3" : undefined}
          />
          <ul className="mt-4 space-y-3 text-sm leading-6">
            {event.individual.map((entry) => (
              <li
                key={`${event.title}-${entry.person}`}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-5"
              >
                <span className="font-display text-base font-semibold text-black/85 sm:min-w-[220px]">
                  {entry.person}
                </span>
                <span className="text-sm text-black/60">{entry.recognition}</span>
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
    <section className="border-t border-[#d0d7de] pt-8 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <h3 className="font-display text-5xl font-semibold tracking-tight">
          {year.year}
        </h3>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-black/40">
          Competition
        </span>
      </div>
      <div className="mt-7 space-y-8">
        {year.events.map((event) => (
          <AchievementEvent key={event.title} event={event} />
        ))}
      </div>
    </section>
  );
}

function CompetitionAchievements() {
  return (
    <div className="mt-8 space-y-10">
      {competitionYears.map((year) => (
        <AchievementYear key={year.year} year={year} />
      ))}
    </div>
  );
}

function SpeakingPeriod({ period }) {
  const [year] = period.period.split(" TEDx Youth@JLHS");

  return (
    <section className="border-t border-[#d0d7de] pt-8 first:border-t-0 first:pt-0">
      <p className="font-display text-3xl font-semibold">{year}</p>
      <h3 className="mt-1 font-display text-xl font-semibold text-black/80">
        TEDx Youth@JLHS
      </h3>
      <HonorDivider label="Leadership & Speaking" />
      <ul className="mt-3 space-y-3 text-sm leading-6">
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
        <h1 className="mt-0 font-display text-5xl font-semibold tracking-tight md:text-7xl">
          Achievements
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          A record of achievements, competition results, public speaking, and
          leadership contributions associated with the Critical Thinking Club.
        </p>

        <div className="mt-8">
          <HonorDivider label="A Record of Distinction" />
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold">
            Competition Achievements
          </h2>
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
