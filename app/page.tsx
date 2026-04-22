"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Doctors } from "@/components/sections/Doctors";
import { Equipment } from "@/components/sections/Equipment";
import { Experience } from "@/components/sections/Experience";
import { Gallery } from "@/components/sections/Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Equipment />
        <Experience />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
