"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProblemSolution from "@/components/sections/ProblemSolution";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import AlphaCTA from "@/components/sections/AlphaCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <EcosystemGrid />
      <FeaturesGrid />
      <HowItWorks />
      <AlphaCTA />
      <Footer />
    </main>
  );
}
