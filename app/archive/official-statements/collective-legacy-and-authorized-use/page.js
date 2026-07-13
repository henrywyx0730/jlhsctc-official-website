import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { statements } from "../statements";

const statement = statements.find(
  ({ slug }) => slug === "collective-legacy-and-authorized-use",
);

export const metadata = {
  title: "Official Statement | Critical Thinking Club",
  description: statement.excerpt,
};

export default function CollectiveLegacyAndAuthorizedUsePage() {
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
        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
          {statement.title}
        </h1>
        <p className="mt-4 text-sm text-black/50">{statement.date}</p>

        <div className="mt-8 border-t border-[#d0d7de]" />

        <div className="py-8 text-base leading-8 text-black/75">
          <p>{statement.body}</p>
        </div>

        <div className="border-t border-[#d0d7de] pt-6 text-sm leading-7 text-black/65">
          {statement.signOff.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
