import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Reviews } from "@/components/Reviews";
import { Certificates } from "@/components/Certificates";
import { Shop } from "@/components/Shop";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <Certificates />
        <Reviews />
        <Shop />
      </main>
      <Footer />
    </>
  );
}
