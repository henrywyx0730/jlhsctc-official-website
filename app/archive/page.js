import SiteHeader from "../components/SiteHeader";

const archiveSections = [
  {
    title: "Articles",
    href: "/archive/articles",
    description: "Club writings, reflections, reviews, and article-style records.",
    status: "Content pending",
  },
  {
    title: "Documents",
    href: "/archive/documents",
    description: "Official documents, reference materials, guides, and PDFs.",
    status: "2 files",
  },
  {
    title: "Media",
    href: "/archive/media",
    description: "Photos, videos, posters, and visual records from club activities.",
    status: "Content pending",
  },
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Club Archive
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          Club records, documents, media, and historical materials are organized
          into archive sections.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-[#d0d7de] bg-white">
          <div className="grid grid-cols-[1fr_auto] border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-3 text-sm font-semibold text-black/65">
            <span>Archive Section</span>
            <span>Status</span>
          </div>

          {archiveSections.map((section, index) => (
            <a
              key={section.href}
              href={section.href}
              className={`grid grid-cols-[1fr_auto] gap-4 px-5 py-4 hover:bg-[#f6f8fa] ${
                index !== archiveSections.length - 1 ? "border-b border-[#d0d7de]" : ""
              }`}
            >
              <div>
                <h2 className="text-base font-semibold">{section.title}</h2>
                <p className="mt-1 text-sm leading-6 text-black/55">
                  {section.description}
                </p>
              </div>
              <span className="self-center rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-xs text-black/55">
                {section.status}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
