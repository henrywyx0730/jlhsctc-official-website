import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const documents = [
  {
    title: "Mock Trial Review.pdf",
    description: "Review material archived by the Critical Thinking Club.",
    href: "/archive-materials/documents/mock-trial-review.pdf",
  },
  {
    title: "Instructions.pdf",
    description: "Instruction document archived by the Critical Thinking Club.",
    href: "/archive-materials/documents/instructions.pdf",
  },
];

export default function ArchiveDocumentsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center gap-2 text-sm text-black/50">
          <a href="/archive" className="hover:text-black">Archive</a>
          <span>/</span>
          <span>Documents</span>
        </div>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Documents
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          Official documents and reference materials preserved by the Critical
          Thinking Club.
        </p>

        <div className="mt-10 border-t border-[#d0d7de] bg-white">
          {documents.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-4 border-b border-[#d0d7de] px-5 py-5 transition-colors last:border-b-0 hover:bg-[#f6f8fa] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex min-w-0 items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-black/45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M6.5 3.5h7l4 4v13h-11z" />
                  <path d="M13.5 3.5v4h4M9 12h6M9 16h6" />
                </svg>
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">
                    {doc.title.replace(/\.pdf$/i, "")}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-black/55">
                    {doc.description}
                  </p>
                </div>
              </div>

              <span className="whitespace-nowrap text-sm font-medium text-black/60 sm:shrink-0">
                View PDF <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
