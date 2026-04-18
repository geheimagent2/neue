"use client";

import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

type Review = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

const reviews: Review[] = [
  {
    name: "Lena M.",
    location: "Berlin",
    rating: 5,
    quote:
      "Ich wache endlich wieder entspannt auf. Der Nacken fühlt sich morgens leichter an – Pocela ist aus meinem Schlafzimmer nicht mehr wegzudenken.",
  },
  {
    name: "Jonas K.",
    location: "Hamburg",
    rating: 5,
    quote:
      "Dezentes Design, spürbare Wirkung. Nach den ersten Nächten war klar: Dieses Kissen behalte ich.",
  },
  {
    name: "Sophia R.",
    location: "München",
    rating: 4,
    quote:
      "Die Stütze ist präzise und trotzdem weich. Ein angenehmer, kühler Komfort, selbst in warmen Nächten.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} von 5 Sternen`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-ink-800 text-ink-800" : "text-ink-200"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="bewertungen"
      className="relative bg-white py-24 sm:py-32"
      aria-labelledby="reviews-title"
    >
      <div className="container-prose">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
            Bewertungen
          </span>
          <h2
            id="reviews-title"
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl"
          >
            Was unsere Kundinnen und Kunden sagen
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-600">
            <Stars rating={5} />
            <span className="font-medium text-ink-800">4,9</span>
            <span className="text-ink-400">·</span>
            <span>auf Basis von 1.280 verifizierten Bewertungen</span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <figure className="h-full rounded-3xl border border-ink-100 bg-sand-50 p-7 shadow-ring">
                <Stars rating={r.rating} />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-700">
                  „{r.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-800 text-xs font-medium text-sand-50">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink-800">
                      {r.name}
                    </div>
                    <div className="text-xs text-ink-500">{r.location}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
