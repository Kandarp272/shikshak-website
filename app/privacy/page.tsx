import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Shikshak Sahayak",
  description: "How Shikshak Sahayak collects, stores, and protects data — including biometric embeddings and classroom video.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PrivacyContent />
      <Footer />
    </main>
  );
}
