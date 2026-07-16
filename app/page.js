import Image from "next/image";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const currentPresidents = [
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
];

const frontOfficeMembers = [
  "Yuxian Wu (吴昱贤)",
  "Leah Zhuang (庄子慧)",
  "Lucy Liu (刘美忱)",
  "Michelle Luan (栾雨诺)",
];

function SectionBox({ eyebrow, title, children }) {
  return (
    <section className="overflow-hidden rounded-xl border border-[#d0d7de] bg-white">
      <div className="border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-4">
        <h2 className="mt-1 text-2xl font-semibold">{title}</h2>
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

function CurrentPresidentCard({ president }) {
  return (
    <article className="w-full max-w-sm rounded-lg border border-[#d0d7de] bg-white p-4">
      {president.image ? (
        <div className="relative h-56 overflow-hidden rounded-lg border border-[#d0d7de] bg-[#f6f8fa]">
          <Image
            src={president.image}
            alt={`${president.name} profile photo`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover object-[center_25%]"
          />
        </div>
      ) : (
        <div className="flex h-56 items-center justify-center rounded-lg border border-dashed border-[#d0d7de] bg-[#f6f8fa]">
          <span className="text-sm text-black/45">Profile image pending</span>
        </div>
      )}

      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-xs font-medium text-black/65">
            {president.role}
          </span>
          <h3 className="text-2xl font-semibold">{president.name}</h3>
          <span className="text-base text-black/50">{president.chineseName}</span>
        </div>

        <p className="mt-3 text-sm leading-6 text-black/55">
          {president.education}
        </p>

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
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
              Critical Thinking Club
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">
              The official website of the Critical Thinking Club, featuring club
              introduction, presidents, archives, awards, events, and member
              contributions.
            </p>
          </div>

          <div className="rounded-xl border border-[#d0d7de] bg-[#f6f8fa] p-5">
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-[#d0d7de] bg-white p-8">
              <Image
                src="/images/ctc-logo.png"
                alt="Critical Thinking Club logo"
                width={320}
                height={320}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12">
        <SectionBox eyebrow="About" title="About the Club">
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
            <p>
              As part of the ZMB student community, CTC aims to preserve a
              culture of curiosity, rigor, and open-minded conversation while
              documenting the club&apos;s history, achievements, and student
              contributions through this official website.
            </p>
          </div>
        </SectionBox>

        <SectionBox eyebrow="Current Presidents" title="Current Presidents">
          <div className="mx-auto grid max-w-3xl justify-items-center gap-5 md:grid-cols-2">
            {currentPresidents.map((president) => (
              <CurrentPresidentCard key={president.name} president={president} />
            ))}
          </div>
        </SectionBox>

        <SectionBox eyebrow="Front Office" title="Front Office">
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
        </SectionBox>

        <SectionBox eyebrow="Location" title="Location">
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
        </SectionBox>
      </section>

      <SiteFooter />
    </main>
  );
}
