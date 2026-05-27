"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { motion } from "framer-motion";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold mb-6"
          >
            Join the <span className="text-gradient">Waitlist</span>
          </motion.h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            We are currently in alpha and inviting 50 pilot schools in Gujarat. Register your interest below to be the first to transform your classrooms.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <WaitlistForm />
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
