import SiteHeader from "../../components/SiteHeader";

export default function ArchiveArticlesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/archive" className="text-sm text-black/50 hover:text-black">← Back to archive</a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Articles
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Club writings, reflections, reviews, and article-style records will be
          added here.
        </p>
      </section>
    </main>
  );
}
