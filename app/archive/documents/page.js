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

        <div className="mt-10 overflow-hidden rounded-xl border border-[#d0d7de] bg-white">
          <div className="grid grid-cols-[1fr_auto] border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-3 text-sm font-semibold text-black/65">
            <span>Name</span>
            <span>Action</span>
          </div>

          {documents.map((doc, index) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noreferrer"
              className={`grid grid-cols-[1fr_auto] gap-6 px-5 py-4 hover:bg-[#f6f8fa] ${
                index !== documents.length - 1 ? "border-b border-[#d0d7de]" : ""
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📄</span>
                  <span className="truncate text-base font-semibold">
                    {doc.title}
                  </span>
                </div>
                <p className="mt-1 pl-9 text-sm leading-6 text-black/55">
                  {doc.description}
                </p>
              </div>

              <span className="self-center rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-sm font-medium text-black/60">
                Open
              </span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
