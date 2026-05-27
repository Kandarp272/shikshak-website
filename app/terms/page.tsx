"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-syne font-extrabold mb-12 text-center"
          >
            Terms of <span className="text-gradient">Service</span>
          </motion.h1>

          <GlassCard className="p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-xl font-syne font-bold text-text-primary mb-4">1. Alpha Product Disclaimer</h2>
              <p className="text-text-secondary leading-relaxed">
                Shikshak Sahayak is currently in an <strong>Alpha testing phase</strong>. By using our website or participating in our pilot program, you acknowledge that the product is still in development, may contain bugs, and does not come with any service level guarantees (SLAs).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-syne font-bold text-text-primary mb-4">2. Pilot Program Participation</h2>
              <p className="text-text-secondary leading-relaxed">
                Schools selected for our pilot program agree to provide regular feedback to help us improve the product. We reserve the right to terminate or pause pilot access at our discretion during this research and development phase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-syne font-bold text-text-primary mb-4">3. Data Usage</h2>
              <p className="text-text-secondary leading-relaxed">
                We store data provided via forms to coordinate our pilot program and communicate updates. We strive for maximum security, but as an alpha product, users should exercise appropriate caution.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-syne font-bold text-text-primary mb-4">4. Intellectual Property</h2>
              <p className="text-text-secondary leading-relaxed">
                All software, designs, and content provided by Shikshak Sahayak are our intellectual property. Pilot schools are granted a limited, non-exclusive license to use the tools for feedback purposes.
              </p>
            </section>

            <p className="text-text-muted text-sm pt-8 border-t border-glass-border">
              Last updated: May 2026. Alpha build.
            </p>
          </GlassCard>
        </div>
      </div>

      <Footer />
    </main>
  );
}
