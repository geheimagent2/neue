"use client";

import { Check, ShoppingBag, Truck } from "lucide-react";
import { Reveal } from "./Reveal";

const SHOPIFY_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL ?? "#";

const includes = [
  "100 Nächte Probeschlafen",
  "Kostenloser, CO₂-neutraler Versand",
  "Abnehmbarer, waschbarer Bezug",
  "2 Jahre Qualitätsversprechen",
];

export function Shop() {
  return (
    <section
      id="shop"
      className="relative py-24 sm:py-32"
      aria-labelledby="shop-title"
    >
      <div className="container-prose">
        <Reveal className="overflow-hidden rounded-4xl bg-ink-800 text-sand-50 shadow-soft">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14 lg:p-16">
            <div className="relative">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-200">
                Pocela – Signature
              </span>
              <h2
                id="shop-title"
                className="mt-4 text-balance text-3xl font-medium tracking-tight sm:text-4xl"
              >
                Bestelle dein Pocela. Schlafe heute Nacht anders.
              </h2>
              <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-ink-100/80">
                Ein Kissen, das sich deinem Rhythmus anpasst. Erlebe in den
                ersten 100 Nächten, wie sich echte Erholung anfühlt – ganz ohne
                Risiko.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-ink-100/90">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sand-50/10">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={SHOPIFY_CHECKOUT_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sand-50 px-6 py-3.5 text-sm font-medium text-ink-800 transition-transform hover:-translate-y-0.5 hover:bg-white"
                  data-shopify-buy="pocela-signature"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Jetzt kaufen – 129 €
                </a>
                <div className="inline-flex items-center gap-2 text-sm text-ink-100/80">
                  <Truck className="h-4 w-4" />
                  Versand in 1–2 Werktagen
                </div>
              </div>

              <p className="mt-6 text-xs text-ink-100/60">
                Inkl. MwSt. · Headless-Shopify-kompatibel · Für die Integration
                per Storefront-API oder Direkt-Link vorbereitet.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-sm rounded-3xl bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <div className="absolute inset-6 rounded-2xl bg-gradient-to-br from-sand-50 via-sand-100 to-ink-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-40 w-56 rounded-[44%] bg-gradient-to-br from-white via-sand-50 to-ink-100 shadow-[inset_0_10px_30px_rgba(26,42,58,0.18),0_20px_40px_-20px_rgba(0,0,0,0.4)]" />
                </div>
                <div className="absolute left-6 top-6 rounded-full bg-ink-900/60 px-3 py-1 text-[10px] uppercase tracking-wider text-sand-50 backdrop-blur">
                  Signature Edition
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
