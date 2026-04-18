import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pocela – Dein Schlaf, neu definiert",
  description:
    "Ergonomische Perfektion für entspannte Nächte. Entdecke das Pocela Kissen – entwickelt für erholsamen, tiefen Schlaf.",
  metadataBase: new URL("https://pocela.example.com"),
  openGraph: {
    title: "Pocela – Dein Schlaf, neu definiert",
    description:
      "Ergonomische Perfektion für entspannte Nächte. Entdecke Pocela.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen bg-sand-50 font-sans text-ink-800 antialiased">
        {children}
      </body>
    </html>
  );
}
