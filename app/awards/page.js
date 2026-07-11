import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const awardSections = [
  {
    title: "Team Awards",
    rows: [
      "2023 PPMT Summer Tournament Team 6th Place",
      "2024 NUMT Summer Tournament Team Champion",
      "2025 NUMT Winter Tournament Team 4th Place",
      "2026 NUMT Summer Tournament Team Champion",
    ],
  },
  {
    title: "Individual Awards",
    rows: [
      {
        person: "Henry Wu (吴昱贤)",
        award: "2023 NUMT Summer Tournament Outstanding Attorney",
      },
      {
        person: "Henry Wu (吴昱贤)",
        award: "2024 NUMT Summer Tournament Outstanding Attorney",
      },
      {
        person: "Lucy Liu (刘美忱)",
        award: "2024 NUMT Summer Tournament Outstanding Witness",
      },
      {
        person: "Leah Zhuang (庄子慧)",
        award: "2025 NUMT Winter Tournament Outstanding Attorney",
      },
      {
        person: "Lucy Liu (刘美忱)",
        award: "2025 PPMT Summer Tournament Outstanding Attorney",
      },
      {
        person: "Azalea Li (李熙蓓)",
        award: "2026 NUMT Summer Tournament Outstanding Witness",
      },
      {
        person: "Michelle Luan (栾雨诺)",
        award: "2026 NUMT Summer Tournament Outstanding Witness",
      },
      {
        person: "Rebecca Gai (盖偲嘉)",
        award: "2026 NUMT Summer Tournament Outstanding Attorney",
      },
    ],
  },
  {
    title: "Public Speaking & Leadership",
    groups: [
      {
        title: "2023 TEDx Youth@JLHS",
        rows: [
          { person: "Henry Wu (吴昱贤)", role: "Speaker" },
          { person: "Lucy Liu (刘美忱)", role: "Host" },
          { person: "Coco Hu (胡可萱)", role: "Speaker; Event Manager" },
        ],
      },
      {
        title: "2024–2025 TEDx Youth@JLHS",
        rows: [
          { person: "Coco Hu (胡可萱)", role: "Executive Officer" },
          { person: "Henry Wu (吴昱贤)", role: "Curator" },
          { person: "Lucy Liu (刘美忱)", role: "Speaker" },
        ],
      },
    ],
  },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Past Awards
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          A selected record of team awards, individual awards, competition
          results, and public speaking achievements associated with the Critical
          Thinking Club.
        </p>

        <div className="mt-10 grid gap-6">
          {awardSections.map((section) => (
            <section
              key={section.title}
              className="overflow-hidden rounded-xl border border-[#d0d7de] bg-white"
            >
              <div className="border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-4">
                <h2 className="text-base font-semibold text-black/75">
                  {section.title}
                </h2>
              </div>

              {section.groups ? (
                <div className="space-y-4 px-5 py-4">
                  {section.groups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-sm font-semibold text-black/70">
                        {group.title}
                      </h3>
                      <ul className="mt-2 space-y-2 text-sm leading-6 text-black/65">
                        {group.rows.map((row) => (
                          <li
                            key={`${group.title}-${row.person}-${row.role}`}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-[1px] text-black/30">•</span>
                            <span>
                              <span className="font-semibold text-black/75">
                                {row.person}
                              </span>{" "}
                              — {row.role}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-5 py-4">
                  <ul className="space-y-2 text-sm leading-6 text-black/65">
                    {section.rows.map((row) => {
                      const isPersonAward = typeof row === "object";

                      return (
                        <li
                          key={
                            isPersonAward ? `${row.person}-${row.award}` : row
                          }
                          className="flex items-start gap-2"
                        >
                          <span className="mt-[1px] text-black/30">•</span>
                          <span>
                            {isPersonAward ? (
                              <>
                                <span className="font-semibold text-black/75">
                                  {row.person}
                                </span>{" "}
                                — {row.award}
                              </>
                            ) : (
                              row
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
