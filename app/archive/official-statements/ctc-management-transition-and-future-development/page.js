import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

export const metadata = {
  title:
    "Official Statement on CTC Management Transition and Future Development | Critical Thinking Club",
};

export default function CtcManagementTransitionAndFutureDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-black/50">
          <a href="/archive" className="hover:text-black">
            Archive
          </a>
          <span>/</span>
          <a href="/archive/official-statements" className="hover:text-black">
            Official Statements
          </a>
        </div>

        <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
          Official Statement on CTC Management Transition and Future Development
        </h1>
        <p className="mt-4 text-sm text-black/50">July 20, 2026</p>

        <div className="mt-8 border-t border-[#d0d7de]" />

        <div className="space-y-8 py-8 text-base leading-8 text-black/75">
          <p>
            To all CTC members, partners, and students who care about the
            development of the Critical Thinking Club:
          </p>

          <p>
            To ensure the continued growth and long-term development of the
            Critical Thinking Club (CTC), a student organization at Jinling
            High School ZMB with a strong academic foundation in Mock Trial,
            debate, and public speaking, the club hereby announces the
            following leadership transition and future development plans.
          </p>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-black">
              I. Leadership Transition
            </h2>
            <p>
              After careful consideration, the former leadership team has
              decided that Cindy Hu (胡心玥), the former presidential candidate,
              will no longer assume the position of President of CTC.
            </p>
            <p>
              Effective immediately, the daily operations, competition
              training, and overall management of CTC will be jointly overseen
              by George Tian (天湙) and Azalea Li (李熙蓓), who will serve as the
              new Presidents of the club.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-black">
              II. Core Activities and Resource Continuity
            </h2>
            <p>
              Over nearly four years of development in Mock Trial competitions,
              CTC has established a strong foundation and has consistently
              achieved outstanding results in academic competitions.
            </p>
            <p>The new leadership team hereby reaffirms the following commitments:</p>

            <section className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-black">
                1. Maintaining Mock Trial as the Core Focus While Expanding
                Academic Opportunities
              </h3>
              <p>
                As one of the earliest student organizations in ZMB to
                introduce both Mock Trial and TEDx, CTC has always regarded
                these two areas as fundamental components of the club’s
                development.
              </p>
              <p>
                At the same time, CTC has continuously explored other academic
                fields, including debate competitions such as WSDA and WSC, as
                well as academic writing competitions such as John Locke.
              </p>
              <p>
                Moving forward, CTC will continue strengthening these
                established programs while introducing additional academic
                opportunities, including Model United Nations (MUN), to further
                broaden students’ academic perspectives.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-black">
                2. Continuation and Management of Historical Resources
              </h3>
              <p>
                Throughout four years of development, CTC has accumulated
                valuable academic resources, including competition materials,
                training resources, event planning experience, and
                organizational knowledge.
              </p>
              <p>
                These resources have now been fully transferred to and
                systematically managed by the new leadership team, ensuring the
                continuity of CTC’s academic framework and supporting the
                high-quality development of future training programs.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-black">
                3. Continued Development of Signature Club Programs
              </h3>
              <p>
                All major CTC projects for the current academic year are
                progressing steadily.
              </p>
              <p>
                The Mock Trial scrimmage hosted by CTC and the officially
                licensed TEDx project will continue as planned with the support
                of the current leadership team, the former Presidents’ advisory
                group, and faculty advisors.
              </p>
              <p>
                This year, CTC will independently organize regional academic
                events in Nanjing, providing students with more diverse and
                professional opportunities for academic exchange and growth.
              </p>
            </section>
          </section>

          <section className="space-y-5">
            <h2 className="font-serif text-2xl font-semibold text-black">
              III. Commitment to Collaboration and a Positive Club Environment
            </h2>
            <p>
              As an independently operated and established student
              organization, CTC’s daily operations and academic development are
              managed by the current leadership team.
            </p>
            <p>
              The club remains committed to providing members with systematic
              and comprehensive academic support through its training programs,
              competition preparation, and project operations.
            </p>
            <p>
              CTC respects and supports diverse forms of academic exploration
              within the school community and looks forward to collaborating
              with other organizations through joint events, friendly
              competitions, and experience sharing to foster a more dynamic
              academic environment.
            </p>
            <p>
              We sincerely thank all members, partners, and supporters for
              their continued trust and support.
            </p>
            <p>
              The new leadership team will continue guiding CTC with
              professionalism, inclusiveness, and responsibility, striving for
              further achievements in Mock Trial, public speaking, and related
              academic competitions.
            </p>
          </section>
        </div>

        <div className="border-t border-[#d0d7de] pt-6 text-sm leading-7 text-black/65">
          <p>Officially announced by:</p>
          <p>Critical Thinking Club (CTC) Management Committee</p>
          <p>Former Presidents’ Advisory Group</p>
          <p className="mt-4">July 20, 2026</p>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
