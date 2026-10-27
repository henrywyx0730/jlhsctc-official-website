import LaurelHalf from "../components/HonorLaurel";
import { createPageMetadata } from "../lib/metadata";

const description =
  "A record of achievements, competition results, public speaking, and leadership contributions associated with the Critical Thinking Club.";

export const metadata = createPageMetadata({
  title: "Achievements",
  description,
  path: "/achievements",
});

const competitionYears = [
  {
    year: "2026",
    events: [
      {
        title: "NUMT Summer Tournament",
        team: "Team Champion",
        individual: [
          {
            person: "Azalea Lee (李熙蓓)",
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
    year: "2026",
    entries: [
      { person: "Michelle Wei (魏明萱)", contribution: "Event Manager" },
      { person: "Ivanna Hua (华艺雯)", contribution: "Organizer" },
      { person: "George Tian (天湙)", contribution: "Speaker" },
    ],
  },
  {
    year: "2025",
    entries: [
      { person: "Leah Zhuang (庄子慧)", contribution: "Event Manager; Curator" },
      { person: "Michelle Luan (栾雨诺)", contribution: "Organizer" },
      { person: "Lucy Liu (刘美忱)", contribution: "Speaker" },
    ],
  },
  {
    year: "2024",
    entries: [
      {
        person: "Coco Hu (胡可萱)",
        contribution: "Event Manager; Executive Officer",
      },
      {
        person: "Henry Wu (吴昱贤)",
        contribution: "Organizer; Curator (2024–2025)",
      },
      { person: "Leah Zhuang (庄子慧)", contribution: "Speaker" },
      { person: "Michelle Luan (栾雨诺)", contribution: "Speaker" },
      { person: "Lucy Liu (刘美忱)", contribution: "Speaker" },
    ],
  },
  {
    year: "2023",
    entries: [
      { person: "Henry Wu (吴昱贤)", contribution: "Speaker" },
      { person: "Lucy Liu (刘美忱)", contribution: "Host" },
      { person: "Coco Hu (胡可萱)", contribution: "Speaker" },
    ],
  },
];

function TeamHonor({ result }) {
  return (
    <div className="mt-4 flex max-w-sm items-center gap-2 text-[#8f6d36]">
      <span className="h-px w-6 shrink-0 bg-[#b08d57]" aria-hidden="true" />
      <LaurelHalf />
      <span className="font-serif text-lg font-bold uppercase tracking-[0.04em] text-[#765625] md:text-xl">
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
      <span className="font-serif text-xs font-medium uppercase tracking-[0.1em] text-black/65">
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
        <h4 className="font-serif text-xl font-semibold tracking-tight text-black/85 md:text-2xl">
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
          <h5 className="text-sm font-semibold text-black/70">
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
      <h3 className="font-serif text-2xl font-normal tracking-tight text-black/90 md:text-3xl">
        {year.year}
      </h3>
      <div className="mt-8 space-y-14">
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
  return (
    <section className="border-t border-[#d0d7de] pt-10 first:border-t-0 first:pt-0">
      <h3>
        <span className="font-serif text-2xl font-normal tracking-tight text-black/90 md:text-3xl">
          {period.year}
        </span>{" "}
        <span
          className="mx-1.5 font-serif text-2xl text-[#b08d57] md:mx-2 md:text-3xl"
          aria-hidden="true"
        >
          ·
        </span>{" "}
        <span className="font-display text-lg font-semibold text-black/80 md:text-xl">
          TEDxYouth@JLHS
        </span>
      </h3>
      <ul className="mt-5 space-y-4 border-l border-[#d0d7de] pl-5 text-sm leading-6">
        {period.entries.map((entry) => (
          <li
            key={`${period.year}-${entry.person}`}
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
        <SpeakingPeriod key={period.year} period={period} />
      ))}
    </div>
  );
}

export default function AchievementsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
          Achievements
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          A record of achievements, competition results, public speaking, and
          leadership contributions associated with the Critical Thinking Club.
        </p>

        <section className="mt-12">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Competition History
          </h2>
          <CompetitionAchievements />
        </section>

        <section className="mt-20 border-t border-[#d0d7de] pt-16">
          <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Public Speaking &amp; Leadership
          </h2>
          <SpeakingAchievements />
        </section>
      </section>
    </>
  );
}
