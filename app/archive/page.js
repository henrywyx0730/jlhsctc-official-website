import Link from "next/link";
import { createPageMetadata } from "../lib/metadata";

const description =
  "A collection of Critical Thinking Club historical records, documents, media, and preserved materials.";

export const metadata = createPageMetadata({
  title: "Archive",
  description,
  path: "/archive",
});

const archiveSections = [
  {
    title: "Documents",
    href: "/archive/documents",
    description: "Official documents, reference materials, guides, and PDFs.",
  },
  {
    title: "Articles",
    description: "Club writings, reflections, reviews, and article-style records.",
  },
  {
    title: "Media",
    description: "Photos, videos, posters, and visual records from club activities.",
  },
];

export default function ArchivePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
          Archive
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          A collection of Critical Thinking Club historical records, documents,
          media, and preserved materials.
        </p>

        <div className="mt-10 border-t border-[#d0d7de]">
          {archiveSections.map((section) => (
            section.href ? (
              <Link
                key={section.title}
                href={section.href}
                className="flex flex-col gap-4 border-b border-[#d0d7de] py-6 transition-colors hover:bg-[#f6f8fa] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="min-w-0">
                  <h2 className="font-serif text-2xl font-normal tracking-tight text-black/90">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60">
                    {section.description}
                  </p>
                </div>
                <span className="whitespace-nowrap text-sm font-medium text-black/65 sm:shrink-0">
                  View collection <span aria-hidden="true">→</span>
                </span>
              </Link>
            ) : (
              <div
                key={section.title}
                className="flex flex-col gap-4 border-b border-[#d0d7de] py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              >
                <div className="min-w-0">
                  <h2 className="font-serif text-2xl font-normal tracking-tight text-black/90">
                    {section.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60">
                    {section.description}
                  </p>
                </div>
                <span className="text-sm text-black/60 sm:shrink-0">
                  No published records
                </span>
              </div>
            )
          ))}
        </div>
    </section>
  );
}
