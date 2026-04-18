# Pocela Landing Page

Eine minimalistische, moderne Single-Page-Landingpage für die Schlafmarke
**Pocela**, gebaut mit:

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) für sanfte Scroll-Fade-Ins
- [lucide-react](https://lucide.dev/) Icons

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite ist unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Struktur

```
app/
  layout.tsx        # Root-Layout mit Inter-Font
  page.tsx          # Single-Page-Komposition
  globals.css       # Tailwind + Basis-Styles
components/
  Navigation.tsx    # Sticky, responsive Navigation
  Hero.tsx          # Hero-Sektion mit CTA
  Benefits.tsx      # 4 Vorteils-Karten
  Reviews.tsx       # Social Proof mit Sterne-Rating
  Certificates.tsx  # OEKO-TEX® u. a. Badges
  Shop.tsx          # Buy-Now-Bereich (Shopify-vorbereitet)
  Footer.tsx        # Rechtliche Links & Social Media
  Reveal.tsx        # Framer-Motion Scroll-Reveal-Wrapper
public/
  images/logo.png   # Marken-Logo (Platzhalter)
```

## Shopify-Anbindung

`components/Shop.tsx` liest die Umgebungsvariable
`NEXT_PUBLIC_SHOPIFY_CHECKOUT_URL` und verlinkt darauf. Für eine Headless-
Integration kann der `<a>`-Button in eine Storefront-API-basierte
Buy-Button-Komponente getauscht werden — das `data-shopify-buy`-Attribut ist
bereits vorbereitet.

Kopiere `.env.example` nach `.env.local` und trage deine Checkout-URL ein.

## Design

- Primärfarbe: tiefes Dunkelblau `#1a2a3a` (Tailwind-Palette `ink-800`)
- Hintergrund: warmes Off-White `#faf9f7` (`sand-50`)
- Typografie: Inter via `next/font`
- Animation: dezentes Fade-In beim Scrollen, respektiert `prefers-reduced-motion`
