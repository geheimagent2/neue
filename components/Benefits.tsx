"use client";

import { Activity, Feather, ShieldCheck, Wind } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: Activity,
    title: "Präzise Nackenstütze",
    text: "Eine durchdachte Kontur folgt der natürlichen Linie der Halswirbelsäule und entlastet Schultern und Nacken Nacht für Nacht.",
  },
  {
    icon: Wind,
    title: "Atmungsaktives Klima",
    text: "Feine Luftkanäle sorgen für kontinuierliche Zirkulation – angenehm kühl im Sommer, behaglich warm im Winter.",
  },
  {
    icon: Feather,
    title: "Weiche Anpassungsfähigkeit",
    text: "Pocela passt sich sanft deiner Schlafposition an und kehrt in jeder Nacht zuverlässig in seine Form zurück.",
  },
  {
    icon: ShieldCheck,
    title: "Auf Langlebigkeit entwickelt",
    text: "Hochwertige Verarbeitung und formstabile Materialien machen Pocela zu einem langjährigen Begleiter.",
  },
];

export function Benefits() {
  return (
    <section
      id="vorteile"
      className="relative py-24 sm:py-32"
      aria-labelledby="benefits-title"
    >
      <div className="container-prose">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
            Vorteile
          </span>
          <h2
            id="benefits-title"
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl"
          >
            Ruhe, die man spürt. Stütze, die man nicht merkt.
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-ink-600">
            Guter Schlaf ist kein Zufall. Pocela wurde mit Blick auf die feinen
            Details entworfen, die den Unterschied zwischen müde aufwachen und
            wirklich erholt sein ausmachen.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <article className="group h-full rounded-3xl border border-ink-100 bg-white/70 p-6 shadow-ring backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-ink-200 hover:bg-white hover:shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-800 text-sand-50">
                  <b.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-medium text-ink-900">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {b.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
