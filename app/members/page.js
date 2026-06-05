export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#17130d]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-black/50 hover:text-black">← Back to home</a>
        <p className="mt-16 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
          Members
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
          Members and Contributors
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
          Current members, contributors, organizers, and leadership team information
          will be added here.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Member Name", "Member Name", "Member Name"].map((name, index) => (
            <article key={`${name}-${index}`} className="rounded-3xl border border-black/10 bg-white/55 p-6">
              <div className="mb-5 aspect-square rounded-2xl border border-dashed border-black/15 bg-[#eee6d8]" />
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="mt-1 text-sm text-black/45">Role pending</p>
              <p className="mt-4 text-sm leading-7 text-black/60">
                Short biography or contribution summary will be added later.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
