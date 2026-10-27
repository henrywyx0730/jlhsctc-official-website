import Link from "next/link";

const description = "The requested page is not available.";

export const metadata = {
  title: "Page not found",
  description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    title: "Page not found",
    description,
  },
  twitter: {
    card: "summary",
    title: "Page not found",
    description,
  },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <p className="text-sm font-semibold text-black/60">404</p>
      <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight md:text-6xl">
        Page not found
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-black/65">
        The requested page is not available. It may have moved, or the address
        may be incorrect.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex text-sm font-medium text-black/70 underline decoration-[#d0d7de] underline-offset-4 hover:text-black"
      >
        Return to homepage →
      </Link>
    </section>
  );
}
