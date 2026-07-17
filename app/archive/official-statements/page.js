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

        <div className="mt-10 border-t border-[#d0d7de] bg-white">
          {statements.map((statement) => (
            <a
              key={statement.slug}
              href={`/archive/official-statements/${statement.slug}`}
              className="flex flex-col gap-4 border-b border-[#d0d7de] px-0 py-5 transition-colors hover:bg-[#f6f8fa] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-sm text-black/50">{statement.date}</p>
                <h2 className="mt-1 font-serif text-lg font-semibold tracking-tight">
                  {statement.title}
                </h2>
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-black/60 sm:shrink-0">
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
