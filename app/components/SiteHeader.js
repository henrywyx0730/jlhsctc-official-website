"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Achievements", href: "/achievements" },
  { label: "Presidents", href: "/presidents" },
  { label: "TEDx", href: "/tedx" },
  { label: "Archive", href: "/archive" },
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
  const [menuState, setMenuState] = useState({
    pathname,
    isOpen: false,
  });
  const menuButtonRef = useRef(null);

  if (menuState.pathname !== pathname) {
    setMenuState({ pathname, isOpen: false });
  }

  const isOpen = menuState.isOpen;
  const closeMenu = () => setMenuState({ pathname, isOpen: false });

  useEffect(() => {
    function handlePopState() {
      setMenuState((currentState) => ({
        ...currentState,
        isOpen: false,
      }));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuState({ pathname, isOpen: false });
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d0d7de] bg-white/95 backdrop-blur">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
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
          ref={menuButtonRef}
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d0d7de] bg-[#f6f8fa] text-black/70 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-site-nav"
          onClick={() => setMenuState({ pathname, isOpen: !isOpen })}
        >
          <span className="flex flex-col gap-1" aria-hidden="true">
            <span className="block h-[2px] w-5 rounded-full bg-current"></span>
            <span className="block h-[2px] w-5 rounded-full bg-current"></span>
            <span className="block h-[2px] w-5 rounded-full bg-current"></span>
          </span>
        </button>
      </nav>

      <div
        id="mobile-site-nav"
        hidden={!isOpen}
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
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
