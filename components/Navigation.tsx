"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#vorteile", label: "Vorteile" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#shop", label: "Shop" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-100/70 bg-sand-50/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-prose flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Pocela Startseite"
        >
          <Image
            src="/images/logo.png"
            alt="Pocela"
            width={36}
            height={36}
            priority
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
          <span className="text-lg font-medium tracking-tight text-ink-800">
            Pocela
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-600 transition-colors hover:text-ink-800"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#shop"
            className="inline-flex items-center rounded-full bg-ink-800 px-5 py-2.5 text-sm font-medium text-sand-50 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-ink-700"
          >
            Jetzt kaufen
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-ink-100/70 bg-sand-50/95 backdrop-blur-md`}
      >
        <ul className="container-prose flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-base text-ink-700 hover:bg-ink-50"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#shop"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-ink-800 px-5 py-3 text-sm font-medium text-sand-50"
            >
              Jetzt kaufen
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
