"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import DashboardSimulator from "@/components/sections/DashboardSimulator";
import ProblemSolution from "@/components/sections/ProblemSolution";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import AlphaCTA from "@/components/sections/AlphaCTA";
import IntroSplash from "@/components/sections/IntroSplash";

export default function Home() {
  return (
    <main className="min-h-screen">
      <IntroSplash />
      <Navbar />
      <Hero />
      <DashboardSimulator />
      <ProblemSolution />
      <EcosystemGrid />
      <FeaturesGrid />
      <HowItWorks />
      <AlphaCTA />
      <Footer />
    </main>
  );
}
