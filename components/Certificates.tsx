"use client";

import { Award, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const badges = [
  { icon: ShieldCheck, label: "OEKO-TEX® Standard 100" },
  { icon: Leaf, label: "Nachhaltig produziert" },
  { icon: Award, label: "Dermatologisch getestet" },
  { icon: Sparkles, label: "Hypoallergen" },
];

export function Certificates() {
  return (
    <section
      className="relative border-y border-ink-100 bg-sand-50 py-14"
      aria-label="Zertifikate und Auszeichnungen"
    >
      <div className="container-prose">
        <Reveal className="grid items-center gap-6 md:grid-cols-[auto,1fr] md:gap-12">
          <p className="text-sm uppercase tracking-[0.2em] text-ink-500">
            Geprüft & zertifiziert
          </p>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {badges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-3 rounded-2xl border border-ink-100 bg-white/70 p-4 text-sm text-ink-700 shadow-ring"
              >
                <b.icon
                  className="h-5 w-5 shrink-0 text-ink-700"
                  strokeWidth={1.5}
                />
                <span className="leading-tight">{b.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
