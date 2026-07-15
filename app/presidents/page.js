import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const presidentTerms = [
  {
    year: "2026–2027",
    description:
      "The 2026–2027 leadership team of the Critical Thinking Club.",
    members: [
      {
        name: "Azalea Li",
        chineseName: "李熙蓓",
        role: "President",
        education: "ZMB Class of 2028",
        image: "/president-profiles/azalea-li.jpg",
        achievements: [
          "2026 NUMT Summer Tournament Team Champion",
          "2026 NUMT Summer Tournament Outstanding Witness",
        ],
      },
      {
        name: "George Tian",
        chineseName: "天湙",
        role: "President",
        education: "ZMB Class of 2028",
        image: "/president-profiles/george-tian.jpg",
        imageWidth: 1279,
        imageHeight: 1706,
        achievements: ["2026 NUMT Summer Tournament Team Champion"],
      },
    ],
  },
  {
    year: "2025–2026",
    description:
      "The 2025–2026 leadership team of the Critical Thinking Club.",
    members: [
      {
        name: "Michelle Wei",
        chineseName: "魏明萱",
        role: "President",
        education: "ZMB Class of 2027",
        image: "/president-profiles/michelle-wei.jpg",
        imageWidth: 960,
        imageHeight: 1440,
        bio: "Michelle Wei served as President of the Critical Thinking Club during the 2025–2026 academic year. Together with Ivanna Hua, she launched the club’s first interschool mock trial competition in partnership with the NSFZ IB Department and contributed to club construction through public events including TEDxYouth@JLHS 2026, inter-club debates, and the CTC Online Archive.",
        achievements: [
          "2025 NUMT Winter Tournament Team 3rd Place",
          "2026 TEDxYouth@JLHS Organizer",
        ],
      },
      {
        name: "Ivanna Hua",
        chineseName: "华艺雯",
        role: "President",
        education: "ZMB Class of 2027",
        image: "/president-profiles/ivanna-hua.jpg",
        bio: "Ivanna Hua served as President of the Critical Thinking Club during the 2025–2026 academic year. Working alongside Michelle Wei, she co-founded and hosted the inaugural interschool mock trial competition in partnership with the NSFZ IB Department. She also contributed to club development through event organization and projects including TEDxYouth@JLHS 2026, cross-club debate tournaments, and the official CTC online archive.",
        achievements: [
          "2025 NUMT Winter Tournament Team 3rd Place",
          "2026 TEDxYouth@JLHS Organizer",
        ],
      },
    ],
  },
  {
    year: "2024–2025",
    description:
      "The 2024–2025 leadership team of the Critical Thinking Club.",
    members: [
      {
        name: "Leah Zhuang",
        chineseName: "庄子慧",
        role: "President",
        education: "ZMB Class of 2026 · University of Oxford Class of 2030",
        bio: "Leah Zhuang served as President of the Critical Thinking Club during the 2024–2025 academic year, leading the development of the club’s internal training initiatives. In 2025, she also took the lead in organizing TEDxYouth@JLHS and secured financial support from the school for the event. Through her leadership, she fostered thoughtful discussion and intellectual curiosity within the club and beyond.",
        achievements: [
          "2024 TEDxYouth@JLHS Speaker",
          "2025 TEDxYouth@JLHS Chief Organizer",
          "2025 TEDxYouth@JLHS Curator",
          "2024 NUMT Summer Tournament Team Champion",
          "2025 NUMT Winter Tournament Team 3rd Place",
          "2025 NUMT Winter Tournament Best Attorney",
        ],
      },
      {
        name: "Michelle Luan",
        chineseName: "栾雨诺",
        role: "Co-President",
        education: "ZMB Class of 2026 · University of California, Los Angeles Class of 2030",
        achievements: [
          "2024 NUMT Summer Tournament Team Champion",
          "2026 NUMT Summer Tournament Team Champion",
          "2026 NUMT Summer Tournament Outstanding Witness",
        ],
      },
      {
        name: "Luobin Wang",
        chineseName: "王洛彬",
        role: "Co-President",
        education: "ZMB Class of 2026 · The University of Hong Kong Class of 2030",
        image: "/president-profiles/luobin-wang.jpg",
        bio: "Luobin Wang served as Co-President of the Critical Thinking Club during the 2024–2025 academic year, contributing to the club’s competitive development through competition leadership and organizational experience. She also served as a presiding judge at the 2024 NUMT Autumn Tournament, presiding over four official competition rounds.",
        achievements: [
          "2024 NUMT Summer Tournament Team Champion",
          "2025 NUMT Winter Tournament Team 3rd Place",
        ],
      },
    ],
  },
  {
    year: "2023–2024",
    description:
      "The 2023–2024 leadership team of the Critical Thinking Club.",
    members: [
      {
        name: "Henry Wu",
        chineseName: "吴昱贤",
        role: "President",
        education:
          "ZMB Class of 2025 · University of Chicago Class of 2029",
        image: "/president-profiles/henry-wu.jpg",
        bio: "Henry Wu served as President of the Critical Thinking Club during the 2023–2024 academic year. As one of the club’s leading organizers, he helped shape CTC into a student-led space for critical discussion, public reasoning, legal argumentation, and civic-minded intellectual exchange. Drawing on his experience in mock trial, public speaking, student leadership, and event organization, he contributed to the club’s long-term structure and identity while promoting a culture of clear thinking, persuasive communication, and rigorous debate.",
        achievements: [
          "2023 TEDxYouth@JLHS Speaker",
          "2023 NUMT Summer Tournament Outstanding Attorney",
          "2024 NUMT Summer Tournament Best Attorney",
          "2024 NUMT Summer Tournament Team Champion",
          "2024–2025 TEDxYouth@JLHS Curator",
        ],
      },
      {
        name: "Lucy Liu",
        chineseName: "刘美忱",
        role: "Co-President",
        education:
          "ZMB Class of 2025 · University of Toronto Class of 2029",
        image: "/president-profiles/lucy-liu.png",
        bio: "Lucy Liu served as Co-President of the Critical Thinking Club during the 2023–2024 academic year, contributing to the club’s public speaking and development initiatives. Her contributions supported CTC’s broader culture of thoughtful discussion and student-led intellectual engagement.",
        achievements: [
          "2023 TEDxYouth@JLHS Host",
          "2024–2025 TEDxYouth@JLHS Speaker",
          "2024 NUMT Summer Tournament Best Witness",
          "2024 NUMT Summer Tournament Team Champion",
          "2025 NUMT Winter Tournament Team 3rd Place",
          "2025 PPMT Summer Tournament Outstanding Attorney",
          "2025 UofT Cup Team Champion",
        ],
      },
      {
        name: "Coco Hu",
        chineseName: "胡可萱",
        role: "Co-President",
        education: "ZMB Class of 2025 · The Chinese University of Hong Kong Class of 2030",
        image: "/president-profiles/coco-hu.png",
        bio: "Coco Hu served as Co-President of the Critical Thinking Club during the 2023–2024 academic year, taking a leading role in public speaking initiatives and event organization. Through projects such as TEDxYouth@JLHS, she contributed to the club’s public-facing initiatives and community engagement.",
        achievements: [
          "2023 TEDxYouth@JLHS Speaker",
          "2023 TEDxYouth@JLHS Event Manager",
          "2023 NUMT Summer Tournament Outstanding Witness Honorable Mention",
          "2023 PPMT Summer Tournament Team 6th Place",
          "2024 TEDxYouth@JLHS Executive Officer",
          "2025 NUMT Winter Tournament Team 3rd Place",
        ],
      },
    ],
  },
];

function AchievementList({ achievements }) {
  if (!achievements.length) {
    return (
      <p className="text-sm leading-6 text-black/45">
        Selected achievements will be added later.
      </p>
    );
  }

  return (
    <ul className="grid gap-x-5 gap-y-2 text-sm leading-6 text-black/65 md:grid-cols-2">
      {achievements.map((achievement) => (
        <li key={achievement} className="flex gap-2">
          <span className="text-black/30">•</span>
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
  );
}

function ProfileRow({ person }) {
  return (
    <article className="border-t border-[#d0d7de] p-5">
      <div className="grid gap-5 md:grid-cols-[180px_1fr]">
        {person.image ? (
          <div
            className={`relative overflow-hidden rounded-lg border border-[#d0d7de] bg-[#f6f8fa] ${
              person.imageWidth ? "" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={person.image}
              alt={`${person.name} profile photo`}
              {...(person.imageWidth
                ? { width: person.imageWidth, height: person.imageHeight }
                : { fill: true })}
              sizes="(min-width: 768px) 180px, calc(100vw - 72px)"
              className={
                person.imageWidth
                  ? "h-auto w-full object-contain"
                  : "h-full w-full object-cover"
              }
            />
          </div>
        ) : (
          <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-[#d0d7de] bg-[#f6f8fa]">
</div>
        )}

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-xs font-medium text-black/65">
              {person.role}
            </span>
            <h3 className="text-2xl font-semibold">{person.name}</h3>
            {person.chineseName && (
              <span className="text-base text-black/50">{person.chineseName}</span>
            )}
          </div>

          <p className="mt-3 text-sm leading-6 text-black/55">
            {person.education}
          </p>
          {person.bio ? (
            <p className="mt-4 text-sm leading-7 text-black/70">
              {person.bio}
            </p>
          ) : (
            <p className="mt-4 text-sm leading-7 text-black/55">
              Biography pending.
            </p>
          )}

          <div className="mt-5">
            <p className="mb-3 text-sm font-semibold text-black/70">
              Selected Achievements
            </p>
            <AchievementList achievements={person.achievements} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PresidentsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Past Presidents of the Club
        </h1>
        <p className="mt-5 max-w-5xl text-base leading-7 text-black/65">
          Profiles are organized by academic year and leadership role, preserving
          each term&apos;s president and co-presidents.
        </p>

        <div className="mt-10 space-y-10">
          {presidentTerms.map((term) => (
            <section
              key={term.year}
              className="overflow-hidden rounded-xl border border-[#d0d7de] bg-white"
            >
              <div className="border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-4">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
                  <div>
                    <p className="text-sm font-semibold text-black/70">
                      Term
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">{term.year}</h2>
                  </div>
                  <p className="max-w-xl text-sm leading-6 text-black/55">
                    {term.description}
                  </p>
                </div>
              </div>

              {term.members.map((person) => (
                <ProfileRow key={person.name} person={person} />
              ))}
            </section>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
