import Link from "next/link";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Articles",
  description: "A future collection for Critical Thinking Club writings and reflections.",
  path: "/archive/articles",
  index: false,
});

export default function ArchiveArticlesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/archive" className="text-sm text-black/65 hover:text-black">← Back to archive</Link>
        <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
          Articles
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Club writings, reflections, reviews, and article-style records will be
          added here.
        </p>
    </section>
  );
}
