import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const items = [
  {
    title: "Official Instagram",
    channel: "@jlhszmb_ctc",
    description: "Updates, announcements, and activities of the Critical Thinking Club.",
    href: "https://www.instagram.com/jlhszmb_ctc/",
  },
  {
    title: "Archive",
    channel: "@ctc_archives",
    description: "Historical records and preserved materials of the Critical Thinking Club.",
    href: "https://www.instagram.com/ctc_archives/",
  },
  {
    title: "Website",
    channel: "jlhsctc.org",
    description: "Official website and institutional archive of the Critical Thinking Club.",
    href: "https://jlhsctc.org",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
          Contact
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          Official channels for inquiries, collaborations, and authorized use of club materials.
        </p>

        <div className="mt-10 border-t border-[#d0d7de]">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-4 border-b border-[#d0d7de] py-6 transition-colors hover:bg-[#f6f8fa] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-normal tracking-tight text-black/90">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-black/55">
                  {item.description}
                </p>
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-black/65 sm:shrink-0">
                {item.channel} <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
