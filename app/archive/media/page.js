import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function ArchiveMediaPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <a href="/archive" className="text-sm text-black/50 hover:text-black">← Back to archive</a>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Media
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Photos, videos, posters, and visual records from club activities will
          be added here.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
