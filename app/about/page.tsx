"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold mb-6"
          >
            Building the classroom infrastructure <span className="text-gradient">India skipped</span>
          </motion.h1>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Shikshak Sahayak was born out of a simple observation: while the world races towards AI, the average Indian classroom is still bogged down by manual attendance and repetitive paperwork. We're here to bridge that gap.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/waitlist">
              <Button variant="primary" glow>Join our pilot</Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Status Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="border-amber-500/20 bg-amber-500/5 p-8 md:p-12">
              <h2 className="text-2xl font-syne font-bold text-amber-500 mb-6 flex items-center gap-3">
                <span>🔬</span> Current Status: Alpha
              </h2>
              <div className="space-y-4 text-text-secondary">
                <p>We're actively developing all 5 apps in the ecosystem. The core Smartboard app and backend infrastructure are currently functional.</p>
                <p>Mobile apps (Teacher, Student, Parent) are in active development. The Admin Dashboard is currently in the design phase.</p>
                <p className="font-bold text-text-primary">We are NOT in full production. We are currently inviting 50 pilot schools to co-develop and iterate with us.</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-syne font-bold text-text-primary mb-8">Our Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js 14", "React Native", "Expo", "Node.js", "PostgreSQL", 
                "Supabase", "face-api.js", "OpenRouter AI", "WebRTC", "Socket.io", 
                "Railway", "Vercel"
              ].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-glass-border text-sm font-medium text-text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-2xl font-syne font-bold text-text-primary mb-6">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed">
                We believe that advanced AI tools shouldn't be reserved for elite international schools. Our mission is to build an India-first, affordable, and offline-resilient ecosystem that empowers every teacher in Bharat to focus on what they do best: teaching.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
