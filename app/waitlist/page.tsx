import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaitlistContent from "./WaitlistContent";

export const metadata: Metadata = {
  title: "Join the Pilot — Shikshak Sahayak",
  description: "Apply for free alpha access. We are inviting 50 pilot schools across Gujarat to co-build the future of Indian classrooms.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WaitlistContent />
      <Footer />
    </main>
  );
}
