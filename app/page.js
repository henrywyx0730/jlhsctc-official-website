import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const currentPresidents = [
  {
    name: "Azalea Lee",
    chineseName: "李熙蓓",
    role: "President",
    education: "ZMB Class of 2028",
    image: "/president-profiles/azalea-li.jpg",
    imageWidth: 1620,
    imageHeight: 1080,
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
];

const frontOfficeMembers = [
  "Yuxian Wu (吴昱贤)",
  "Leah Zhuang (庄子慧)",
  "Lucy Liu (刘美忱)",
  "Michelle Luan (栾雨诺)",
];

const featuredAchievements = [
  { year: "2026", event: "NUMT Summer Tournament", result: "Team Champion" },
  { year: "2025", event: "NUMT Winter Tournament", result: "Team 3rd Place" },
  { year: "2024", event: "NUMT Summer Tournament", result: "Team Champion" },
];

function EditorialSection({ title, description, href, actionLabel, children }) {
  return (
    <section className="border-t border-[#d0d7de] py-12">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-black/90">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base leading-7 text-black/65">{description}</p>
          )}
        </div>
        {href && (
          <a
            href={href}
            className="whitespace-nowrap text-sm font-medium text-black/65 underline decoration-[#d0d7de] underline-offset-4 hover:text-black"
          >
            {actionLabel} →
          </a>
        )}
      </div>
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

function CurrentPresidentCard({ president }) {
  return (
    <article className="flex h-full w-full flex-col">
      {president.image ? (
        <div className="relative aspect-[4/3] w-full max-w-[260px] overflow-hidden">
          <Image
            src={president.image}
            alt={`${president.name} profile photo`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover object-[center_25%]"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] w-full max-w-[260px] items-center justify-center">
          <span className="text-sm text-black/45">Profile image pending</span>
        </div>
      )}

      <div className="mt-4 flex flex-1 flex-col text-left">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight">{president.name}</h3>
          <span className="text-base text-black/50">{president.chineseName}</span>
          <span className="text-sm font-medium text-black/50">{president.role}</span>
        </div>

        <p className="mt-3 text-sm leading-6 text-black/55">{president.education}</p>

        <div className="mt-4">
          <p className="mb-3 text-sm font-semibold text-black/70">
            Selected Achievements
          </p>
          <ul className="space-y-1.5 text-sm leading-6 text-black/65">
            {president.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-2">
                <span className="mt-[1px] text-black/30">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="border-b border-[#d0d7de] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <h1 className="font-serif text-5xl font-semibold tracking-tight md:text-7xl">
              Critical Thinking Club
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">
              The institutional record of the Critical Thinking Club at Jinling
              High School ZMB: its people, achievements, programs, and history.
            </p>
          </div>

          <div className="flex min-h-64 items-center justify-center md:min-h-72">
            <Image
              src="/images/ctc-logo.png"
              alt="Critical Thinking Club logo"
              width={320}
              height={320}
              className="max-h-64 max-w-full object-contain md:max-h-72"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        <EditorialSection
          title="About the Club"
          description="A student-led organization dedicated to discussion, argumentation, public reasoning, and intellectual exchange."
        >
          <div className="space-y-4 text-sm leading-7 text-black/70">
            <p>
              The Critical Thinking Club is one of the longest-standing student
              clubs in ZMB history. As a student-led club at Jinling High School ZMB, CTC is
              dedicated to discussion, argumentation, public reasoning, and
              intellectual exchange.
            </p>
            <p>
              Through activities such as mock trial, public speaking,
              debate-style discussion, and student-led projects, the club
              encourages members to think clearly, speak persuasively, and
              engage with complex issues from multiple perspectives.
            </p>
          </div>
        </EditorialSection>

        <EditorialSection
          title="Featured Achievements"
          description="A selection from the club's competition history and record of distinction."
          href="/achievements"
          actionLabel="View achievements"
        >
          <div className="space-y-3">
            {featuredAchievements.map((achievement) => (
              <div
                key={`${achievement.year}-${achievement.event}`}
                className="flex items-start gap-3 text-black/80"
              >
                <span className="pt-0.5 text-base" aria-hidden="true">
                  {achievement.result === "Team 3rd Place" ? "🥉" : "🏆"}
                </span>
                <span>
                  <span className="block font-serif text-lg font-semibold tracking-tight">
                    {achievement.year} {achievement.event}
                  </span>
                  <span className="block text-sm text-black/55">
                    {achievement.result}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          title="Current Presidents"
          description="The current leadership of the Critical Thinking Club, organized in the Presidents archive."
          href="/presidents"
          actionLabel="View presidents"
        >
          <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
            {currentPresidents.map((president) => (
              <CurrentPresidentCard key={president.name} president={president} />
            ))}
          </div>
        </EditorialSection>

        <EditorialSection
          title="TEDx Youth@JLHS"
          description="A student-led TEDx platform dedicated to sharing ideas, stories, and perspectives."
          href="/tedx"
          actionLabel="View TEDx archive"
        >
          <div className="border-l-2 border-[#E62B1E] pl-5">
            <p className="font-sans text-xl font-semibold tracking-tight text-black/85">
              Transform, Transcend, Transmit
            </p>
            <p className="mt-2 text-sm leading-6 text-black/60">
              An annual student-led TEDx program founded in 2023 by Jack Lyu
              (吕嘉涵).
            </p>
          </div>
        </EditorialSection>

        <EditorialSection title="Front Office">
          <div className="space-y-5 text-sm leading-7 text-black/70">
            <p>
              Established in 2026, the Front Office serves as a collaborative
              leadership body dedicated to supporting the long-term development,
              continuity, and institutional initiatives of the Critical Thinking
              Club.
            </p>
            <ul className="grid gap-x-8 gap-y-3 border-t border-[#d0d7de] pt-4 sm:grid-cols-2">
              {frontOfficeMembers.map((member) => (
                <li key={member} className="font-medium text-black/80">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </EditorialSection>

        <EditorialSection title="Location">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="space-y-5 text-sm leading-7 text-black/70">
              <div>
                <p className="text-lg font-semibold text-black/85">
                  Jinling High School ZMB
                </p>
                <p className="text-lg font-semibold text-black/85">
                  UCLA Global Classroom
                </p>
                <p className="mt-1 text-black/55">Xinjiekou Campus</p>
              </div>
              <address className="not-italic text-black/65">
                <p>No. 169 Zhongshan Road</p>
                <p>Xuanwu District</p>
                <p>Nanjing, Jiangsu, China</p>
              </address>
              <p>
                The Critical Thinking Club is based in Jinling High School ZMB
                UCLA Global Classroom.
              </p>
            </div>

            <div className="md:flex md:flex-col md:items-end">
              <div className="aspect-[3/2] w-full max-w-[420px] overflow-hidden rounded-lg border border-[#d0d7de] bg-[#f6f8fa]">
                <iframe
                  title="Map showing Jinling High School Xinjiekou Campus"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=118.775%2C32.043%2C118.789%2C32.053&layer=mapnik&marker=32.048293%2C118.782026"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
              <a
                href="https://uri.amap.com/marker?position=118.782026,32.048293&name=%E9%87%91%E9%99%B5%E4%B8%AD%E5%AD%A6%28%E6%96%B0%E8%A1%97%E5%8F%A3%E6%A0%A1%E5%8C%BA%29&src=jlhsctc&coordinate=gaode&callnative=0"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex self-end text-sm font-medium text-black/70 underline decoration-[#d0d7de] underline-offset-4 hover:text-black"
              >
                Open in Amap →
              </a>
            </div>
          </div>
        </EditorialSection>
      </div>

      <SiteFooter />
    </main>
  );
}
