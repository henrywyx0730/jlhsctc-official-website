import Image from "next/image";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

export const metadata = {
  title:
    "Statement Regarding Recent CTC Management Matters | Critical Thinking Club",
};

export default function StatementRegardingRecentCtcManagementMattersPage() {
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
          Statement Regarding Recent CTC Management Matters
        </h1>
        <p className="mt-4 text-sm text-black/50">July 24, 2026</p>

        <h2 className="mt-10 font-serif text-2xl font-semibold text-black">
          Chinese Original Statement
        </h2>

        <div
          lang="zh-CN"
          className="space-y-8 py-8 text-base leading-8 text-black/75"
        >
          <h3 className="font-serif text-2xl font-semibold leading-tight text-black">
            关于近期涉及 CTC 社团相关事项的说明
          </h3>

          <p>
            近期，CTC 社团及部分成员因相关事件受到关注。为避免信息在传播过程中产生误解，影响社团正常运行，CTC 现基于已有记录，对近期涉及社团管理相关事项进行说明。
          </p>
          <p>
            本声明旨在澄清相关情况，并说明相关处理流程。CTC 尊重每一位成员表达意见的权利，同时希望所有讨论能够建立在完整事实和理性沟通的基础之上。
          </p>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              一、关于近期社团活动相关情况
            </h4>
            <p>
              近期一次 CTC 社团活动举办过程中，出现了关于参与流程及现场安排的相关讨论。
            </p>
            <p>
              CTC 社团活动由社团按照既定流程组织，参与成员需遵循报名及通知流程。活动当天，社团负责人就相关情况进行了沟通，并希望相关问题能够在活动结束后进一步交流，以保障活动正常进行。
            </p>
            <p>在指导老师参与沟通后，相关事项得到进一步协调。</p>
            <p>
              CTC 尊重所有同学参与社团活动及表达意见的权利，同时也重视社团活动的组织流程与现场秩序。
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              二、关于社团领导调整相关情况
            </h4>
            <p>
              近期，关于 CTC 社团领导调整存在不同观点。
            </p>
            <p>CTC 在此说明，该次领导调整并非由单一成员个人决定。</p>
            <p>
              该决定是在综合考虑社团管理情况、成员反馈、团队合作情况以及相关经历后，经六位 CTC 社长及比赛 coach 共同讨论并确认作出的。
            </p>
            <p>
              社团管理成员需要承担组织建设、成员沟通以及维护社团发展的责任。
            </p>
            <p>此次调整基于社团长期发展的考虑，并经过内部沟通确认。</p>
            <p>
              CTC 感谢所有曾担任社长及管理成员的同学为社团所作出的贡献，也认可每一位成员在社团活动和比赛中的努力。
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              三、关于团队合作与社团氛围
            </h4>
            <p>
              CTC 认为，一个健康的学生组织不仅需要成员具备专业能力，也需要建立在相互尊重、有效沟通和团队合作基础之上。
            </p>
            <p>
              在团队活动与比赛过程中，不同成员可能存在观点差异。社团管理的重要职责之一，就是在出现分歧时维护团队稳定，并推动成员之间进行建设性沟通。
            </p>
            <p>CTC 将继续努力营造一个开放、友善、积极的社团环境。</p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              四、关于相关信息传播与后续处理
            </h4>
            <p>近期，关于 CTC 社团及成员的相关信息在学生群体中传播。</p>
            <p>
              对于涉及事实判断的事项，CTC 已整理相关材料，并提交指导老师及学校相关方面进行进一步了解与处理。
            </p>
            <p>
              CTC 不希望任何成员受到未经完整了解的信息影响，也不希望个人之间的分歧影响整个社团的发展。
            </p>
            <p>如有相关疑问，欢迎通过合理、正式的渠道进行沟通。</p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              五、未来发展
            </h4>
            <p>CTC 将继续专注于社团建设、成员培养以及未来活动开展。</p>
            <p>
              无论经历何种挑战，CTC 始终致力于维护一个公平、尊重、积极的交流环境，并继续为所有成员提供成长与发展的机会。
            </p>
            <p>感谢所有关注 CTC 并支持社团发展的同学。</p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              附件 A
              <br />
              社团领导调整联合确认
            </h4>
            <p>
              以下六位 CTC 社长及比赛 coach 共同确认了本次社团领导调整决定：
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>华艺雯（Ivanna Hua）</li>
              <li>刘美忱（Lucy Liu）</li>
              <li>栾雨诺（Michelle Luan）</li>
              <li>魏明萱（Michelle Wei）</li>
              <li>吴昱贤（Henry Wu）</li>
              <li>庄子慧（Leah Zhuang）</li>
            </ul>
            <Image
              src="/archive-materials/statements/signature-of-six-former-presidents.png"
              alt="Joint confirmation signatures of six CTC presidents and coaches"
              width={2276}
              height={934}
              className="h-auto w-full"
            />
            <p className="whitespace-pre-line">
              {`Critical Thinking Club（CTC）
2026 年 7 月 24 日`}
            </p>
          </section>
        </div>

        <div className="border-t border-[#d0d7de]" />

        <h2 className="mt-8 font-serif text-2xl font-semibold text-black">
          English Translation
        </h2>

        <div className="space-y-8 py-8 text-base leading-8 text-black/75">
          <h3 className="font-serif text-2xl font-semibold leading-tight text-black">
            Statement Regarding Recent CTC Management Matters
          </h3>

          <p>
            Recently, CTC and several of its members have received attention
            due to matters related to club management. To prevent
            misunderstandings during the spread of information and to ensure
            the continued development of the club, CTC would like to provide a
            factual clarification regarding recent management-related matters.
          </p>
          <p>
            This statement aims to clarify the relevant circumstances and
            explain the procedures involved in addressing these matters. CTC
            respects every member’s right to express opinions and believes that
            all discussions should be based on complete information and
            constructive communication.
          </p>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              I. Regarding a Recent Club Activity
            </h4>
            <p>
              During a recent CTC club activity, discussions arose regarding
              participation procedures and on-site arrangements.
            </p>
            <p>
              CTC activities are organized by the club according to established
              procedures, and participants are expected to follow registration
              and notification processes. During the activity, club
              representatives communicated with the relevant individuals and
              hoped that any concerns could be further discussed after the
              conclusion of the event in order to maintain normal activity
              operations.
            </p>
            <p>
              After communication involving the club advisor, the situation was
              further coordinated.
            </p>
            <p>
              CTC respects every student’s right to participate in club
              activities and express opinions, while also emphasizing the
              importance of organizational procedures and event management.
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              II. Regarding the Adjustment of Club Leadership Position
            </h4>
            <p>
              Recently, different perspectives have been expressed regarding
              the adjustment of a CTC leadership position.
            </p>
            <p>
              CTC would like to clarify that the decision was not made by any
              single individual.
            </p>
            <p>
              The leadership transition was reached after consideration of club
              management, member feedback, teamwork, and relevant experiences.
              The decision was discussed and confirmed jointly by six CTC
              presidents and competition coaches.
            </p>
            <p>
              As student organization leaders, club officers are responsible for
              supporting club development, communicating with members, and
              maintaining a positive environment.
            </p>
            <p>
              The adjustment was made with consideration for the long-term
              development of CTC and was confirmed through internal discussion.
            </p>
            <p>
              CTC appreciates the contributions of all former and current
              leaders and recognizes the efforts made by every member in club
              activities and competitions.
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              III. Regarding Teamwork and Club Environment
            </h4>
            <p>
              CTC believes that a successful student organization requires not
              only individual abilities, but also mutual respect, effective
              communication, and teamwork.
            </p>
            <p>
              During team activities and competitions, differences in
              perspectives may naturally occur. One important responsibility of
              club leadership is to maintain team stability and encourage
              constructive communication when disagreements arise.
            </p>
            <p>
              CTC remains committed to building an open, respectful, and
              positive community for all members.
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              IV. Regarding Information Circulation and Further Handling
            </h4>
            <p>
              Recently, various discussions regarding CTC and its members have
              circulated among students.
            </p>
            <p>
              For matters involving factual disputes, CTC has organized
              relevant materials and submitted them to the club advisor and
              appropriate school channels for further review.
            </p>
            <p>
              CTC does not wish for any member to be affected by incomplete
              information, nor does it wish for individual disagreements to
              impact the development of the entire organization.
            </p>
            <p>
              Any questions or concerns are welcome to be addressed through
              appropriate and formal communication channels.
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              V. Future Development
            </h4>
            <p>
              CTC will continue focusing on club development, member growth,
              and future activities.
            </p>
            <p>
              Regardless of challenges encountered, CTC remains committed to
              maintaining a fair, respectful, and positive environment while
              providing opportunities for all members to learn and grow.
            </p>
            <p>
              Thank you to everyone who continues to support and care about CTC.
            </p>
          </section>

          <section className="space-y-5">
            <h4 className="font-serif text-xl font-semibold text-black">
              Appendix A
              <br />
              Joint Confirmation of Leadership Transition
            </h4>
            <p>
              The following six CTC presidents and competition coaches jointly
              confirmed the leadership transition decision:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Ivanna Hua (华艺雯)</li>
              <li>Lucy Liu (刘美忱)</li>
              <li>Michelle Luan (栾雨诺)</li>
              <li>Michelle Wei (魏明萱)</li>
              <li>Henry Wu (吴昱贤)</li>
              <li>Leah Zhuang (庄子慧)</li>
            </ul>
            <p>
              The signature image is included in the original Chinese statement
              above.
            </p>
            <p className="whitespace-pre-line">
              {`Critical Thinking Club (CTC)
July 24, 2026`}
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
