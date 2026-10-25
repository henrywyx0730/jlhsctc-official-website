import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const items = [
  {
    title: "Official Instagram",
    label: "Primary official account",
    channel: "@jlhszmb_ctc",
    description:
      "For general inquiries, collaborations, formal communications, and requests for authorization to use CTC materials.",
    href: "https://www.instagram.com/jlhszmb_ctc/",
  },
  {
    title: "Archival Instagram",
    label: "Official archival account",
    channel: "@ctc_archives",
    description:
      "For historical preservation, past activities, and archival materials. Inquiries should be directed to the primary account.",
    href: "https://www.instagram.com/ctc_archives/",
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
                <p className="text-sm text-black/55">{item.label}</p>
                <h2 className="mt-1 font-serif text-2xl font-normal tracking-tight text-black/90">
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
