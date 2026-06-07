import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ — Shikshak Sahayak",
  description: "Answers to common questions about data privacy, biometric consent, pricing, and how Shikshak Sahayak works in Indian schools.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FAQContent />
      <Footer />
    </main>
  );
}
