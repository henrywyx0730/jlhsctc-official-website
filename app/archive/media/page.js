import Link from "next/link";
import { createPageMetadata } from "../../lib/metadata";

export const metadata = createPageMetadata({
  title: "Media",
  description: "A future collection for Critical Thinking Club visual records.",
  path: "/archive/media",
  index: false,
});

export default function ArchiveMediaPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/archive" className="text-sm text-black/65 hover:text-black">← Back to archive</Link>
        <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
          Media
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Photos, videos, posters, and visual records from club activities will
          be added here.
        </p>
    </section>
  );
}
