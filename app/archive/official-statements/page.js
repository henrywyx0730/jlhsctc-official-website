import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import {
  officialStatementsDescription,
  statements,
} from "./statements";

export const metadata = {
  title: "Official Statements | Critical Thinking Club",
  description: officialStatementsDescription,
};

export default function OfficialStatementsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-black/50">
          <a href="/archive" className="hover:text-black">
            Archive
          </a>
          <span>/</span>
          <span>Official Statements</span>
        </div>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Official Statements
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          {officialStatementsDescription}
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-[#d0d7de] bg-white">
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-3 text-sm font-semibold text-black/65">
            <span>Statement</span>
            <span>Action</span>
          </div>

          {statements.map((statement, index) => (
            <a
              key={statement.slug}
              href={`/archive/official-statements/${statement.slug}`}
              className={`grid grid-cols-[minmax(0,1fr)_auto] gap-4 px-5 py-4 hover:bg-[#f6f8fa] ${
                index !== statements.length - 1
                  ? "border-b border-[#d0d7de]"
                  : ""
              }`}
            >
              <div className="min-w-0">
                <p className="text-sm text-black/50">{statement.date}</p>
                <h2 className="mt-1 text-base font-semibold">
                  {statement.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-black/55">
                  {statement.excerpt}
                </p>
              </div>
              <span className="self-center whitespace-nowrap text-sm font-medium text-black/60">
                Read statement <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
