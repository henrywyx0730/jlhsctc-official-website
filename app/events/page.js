import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const items = [
  { year: "Year pending", title: "Club Events", description: "Content pending." },
  { year: "Year pending", title: "Activities", description: "Content pending." },
  { year: "Year pending", title: "Posters", description: "Content pending." },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
          Events
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          A record of activities, programs, and public events organized by the
          Critical Thinking Club.
        </p>

        <div className="mt-10 border-t border-[#d0d7de]">
          {items.map((item) => (
            <article
              key={item.title}
              className="border-b border-[#d0d7de] py-6"
            >
              <p className="font-serif text-2xl font-normal tracking-tight text-black/90">
                {item.year}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-black/85">
                {item.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55">
                  {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
