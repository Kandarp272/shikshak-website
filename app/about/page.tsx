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
            className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-text-primary"
          >
            Building the classroom infrastructure <br />
            <span className="italic text-primary">India skipped</span>
          </motion.h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 font-sans">
            Shikshak Sahayak was born out of a simple observation: while the world races towards AI, the average Indian classroom is still bogged down by manual attendance and repetitive paperwork. We're here to bridge that gap.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/waitlist">
              <Button variant="primary" size="lg">Join our pilot</Button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Status Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[40px] bg-[#FEF9EC] border border-glass-border p-10 md:p-16">
              <h2 className="text-3xl font-serif font-bold text-[#D97706] mb-8 flex items-center gap-4">
                <span>🔬</span> Current Status: Alpha
              </h2>
              <div className="space-y-6 text-text-secondary text-lg">
                <p>We're actively developing all 5 apps in the ecosystem. The core Smartboard app and backend infrastructure are currently functional.</p>
                <p>Mobile apps (Teacher, Student, Parent) are in active development. The Admin Dashboard is currently in the design phase.</p>
                <p className="font-bold text-text-primary">We are NOT in full production. We are currently inviting 50 pilot schools to co-develop and iterate with us.</p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-10">Our Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Next.js 14", "React Native", "Expo", "Node.js", "PostgreSQL", 
                "Supabase", "face-api.js", "OpenRouter AI", "WebRTC", "Socket.io", 
                "Railway", "Vercel"
              ].map((tech) => (
                <span key={tech} className="px-6 py-3 rounded-full bg-white border border-glass-border text-base font-medium text-text-secondary shadow-sm">
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
            <div className="rounded-[40px] bg-white border border-glass-border p-10 md:p-16 shadow-sm">
              <h2 className="text-3xl font-serif font-bold text-text-primary mb-8">Our Vision</h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                We believe that advanced AI tools shouldn't be reserved for elite international schools. Our mission is to build an India-first, affordable, and offline-resilient ecosystem that empowers every teacher in Bharat to focus on what they do best: teaching.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
