"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Moon, Sparkles } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grain [background-size:24px_24px] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-b from-ink-100/70 via-sand-50 to-transparent blur-3xl"
      />

      <div className="container-prose grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-200/70 bg-white/60 px-3 py-1 text-xs font-medium text-ink-600 shadow-ring backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Neu – in ergonomischer Perfektion
          </span>

          <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Pocela – Dein Schlaf,
            <span className="block text-ink-600">neu definiert.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-600 sm:text-lg">
            Ergonomische Perfektion für entspannte Nächte. Pocela stützt,
            entlastet und begleitet dich in einen Schlaf, der sich wirklich
            erholsam anfühlt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-800 px-6 py-3.5 text-sm font-medium text-sand-50 shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-ink-700"
            >
              Pocela entdecken
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#vorteile"
              className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white/60 px-6 py-3.5 text-sm font-medium text-ink-700 backdrop-blur transition-colors hover:border-ink-300 hover:bg-white"
            >
              Vorteile ansehen
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-ink-100 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wide text-ink-400">
                Nächte
              </dt>
              <dd className="mt-1 text-xl font-medium text-ink-800">
                100+ Probetestet
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-ink-400">
                Bewertung
              </dt>
              <dd className="mt-1 text-xl font-medium text-ink-800">4,9 / 5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide text-ink-400">
                Versand
              </dt>
              <dd className="mt-1 text-xl font-medium text-ink-800">
                CO₂-neutral
              </dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 28, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-4xl bg-gradient-to-br from-ink-100 via-sand-100 to-sand-50 shadow-soft sm:max-w-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-white/40 blur-3xl" />
                <div className="relative h-64 w-80 rounded-[44%] bg-gradient-to-br from-white via-sand-50 to-ink-100 shadow-[inset_0_10px_40px_rgba(26,42,58,0.10),0_30px_60px_-30px_rgba(26,42,58,0.35)] sm:h-72 sm:w-96" />
                <div className="absolute inset-x-8 bottom-2 h-6 rounded-full bg-ink-900/10 blur-xl" />
              </div>
            </div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink-700 shadow-ring backdrop-blur">
              <Moon className="h-3.5 w-3.5" /> Ruhephase
            </div>
            <div className="absolute bottom-4 right-4 rounded-2xl bg-white/80 p-3 text-xs text-ink-600 shadow-ring backdrop-blur">
              <div className="text-[10px] uppercase tracking-wider text-ink-400">
                Schlafqualität
              </div>
              <div className="mt-1 text-lg font-medium text-ink-800">
                +38%
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
