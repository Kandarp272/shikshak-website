import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Shikshak Sahayak",
  description: "Meet the team building India's AI classroom ecosystem. Learn about our mission, tech stack, and roadmap.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
