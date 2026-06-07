import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Shikshak Sahayak",
  description: "Get in touch to book a demo, ask questions, or learn how Shikshak Sahayak can work for your school.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
