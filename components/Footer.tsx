import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const legal = [
  { href: "#", label: "Impressum" },
  { href: "#", label: "Datenschutz" },
  { href: "#", label: "AGB" },
  { href: "#", label: "Widerruf" },
];

const socials = [
  { href: "#", label: "Instagram", icon: Instagram },
  { href: "#", label: "Facebook", icon: Facebook },
  { href: "#", label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-sand-50">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Pocela"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-base font-medium tracking-tight text-ink-800">
              Pocela
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600">
            Schlaf ist kein Luxus, sondern Grundlage. Pocela begleitet dich in
            erholsame, ausgeglichene Nächte.
          </p>
        </div>

        <nav aria-label="Rechtliches">
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
            Rechtliches
          </h3>
          <ul className="mt-4 space-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-ink-700 transition-colors hover:text-ink-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
            Folge uns
          </h3>
          <ul className="mt-4 flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-700 shadow-ring transition-colors hover:border-ink-200 hover:text-ink-900"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container-prose flex flex-col items-start justify-between gap-2 py-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pocela. Alle Rechte vorbehalten.</p>
          <p>Entwickelt mit Sorgfalt in Deutschland.</p>
        </div>
      </div>
    </footer>
  );
}
