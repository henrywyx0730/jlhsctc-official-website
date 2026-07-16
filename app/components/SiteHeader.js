"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Presidents", href: "/presidents" },
  { label: "Archive", href: "/archive" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d0d7de] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/ctc-logo.png"
            alt="Critical Thinking Club logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-md border border-[#d0d7de] bg-white object-contain p-1"
          />
          <span className="text-sm font-semibold tracking-[0.06em] uppercase">
            CTC
          </span>
        </Link>

        <div className="hidden gap-5 text-sm text-black/65 md:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "font-medium text-black" : "hover:text-black"}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] bg-[#f6f8fa] text-black/70 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-site-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="flex flex-col gap-1" aria-hidden="true">
            <span className="block h-[2px] w-5 rounded-full bg-current"></span>
            <span className="block h-[2px] w-5 rounded-full bg-current"></span>
            <span className="block h-[2px] w-5 rounded-full bg-current"></span>
          </span>
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-site-nav"
          className="border-t border-[#d0d7de] bg-[#f6f8fa] md:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-1 px-6 py-3">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm transition-all duration-100 hover:bg-black/5 active:scale-[0.99] active:bg-black/10 ${
                    active
                      ? "font-semibold text-black"
                      : "font-medium text-black/65"
                  }`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
