import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const items = [
  { title: "Current Members", description: "Content pending." },
  { title: "Contributors", description: "Content pending." },
  { title: "Organizers", description: "Content pending." },
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-white text-[#17130d]">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
          Members
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-black/65">
          Current members, contributors, organizers, and leadership team information will be listed here.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-[#d0d7de] bg-white">
          <div className="grid grid-cols-[1fr_auto] border-b border-[#d0d7de] bg-[#f6f8fa] px-5 py-3 text-sm font-semibold text-black/65">
            <span>Section</span>
            <span>Status</span>
          </div>

          {items.map((item, index) => (
            <div
              key={item.title}
              className={`grid grid-cols-[1fr_auto] gap-4 px-5 py-4 ${index !== items.length - 1 ? "border-b border-[#d0d7de]" : ""}`}
            >
              <div>
                <h2 className="text-base font-semibold">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-black/55">
                  {item.description}
                </p>
              </div>
              <span className="self-center rounded-md border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-xs text-black/55">
                Pending
              </span>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
