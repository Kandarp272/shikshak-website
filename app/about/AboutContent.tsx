"use client";

import React from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-text-primary max-w-4xl mx-auto"
        >
          Building the classroom infrastructure <span className="italic text-primary">India skipped</span>
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

        {/* Founder Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-10">The person behind it</h2>
          <div className="flex flex-col md:flex-row items-start gap-8 p-8 md:p-10 rounded-[40px] bg-white border border-glass-border shadow-sm">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-3xl font-serif font-bold text-primary flex-shrink-0">
              K
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-2">Kandarp</h3>
              <p className="text-primary font-medium mb-4">Founder & Developer · Ahmedabad, Gujarat</p>
              <p className="text-lg leading-relaxed text-text-secondary max-w-2xl font-sans">
                Student developer building AI tools for the classroom infrastructure India skipped. 
                Previously built NIMOCLAW (autonomous Windows AI agent), WhisperDesk (local voice transcription), 
                and KandyML (plain-English ML language). Shikshak Sahayak is the project closest to home — 
                designed for the schools I grew up around.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Roadmap Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-10">Where we're headed</h2>
          <div className="grid grid-cols-1 gap-6">
            {[
              { phase: 'Now — Alpha', status: 'current', desc: 'Smartboard App live. Onboarding 50 pilot schools. Weekly iteration.' },
              { phase: 'Q3 2026 — Beta', status: 'upcoming', desc: 'Teacher App and Parent App mobile release on Android. Expanding beyond Gujarat.' },
              { phase: 'Q4 2026 — v1.0', status: 'upcoming', desc: 'Student App, Admin Dashboard, full ecosystem live. Public pricing announced.' },
              { phase: '2027 — Scale', status: 'future', desc: 'Multi-language support (Hindi, Gujarati, Tamil). Partnerships with state boards.' },
            ].map((item) => (
              <div key={item.phase} className="flex gap-6 items-start p-6 rounded-3xl border border-glass-border bg-white/50 backdrop-blur-sm">
                <div className={`w-3 h-3 rounded-full mt-2.5 flex-shrink-0 ${
                  item.status === 'current' ? 'bg-success animate-pulse' :
                  item.status === 'upcoming' ? 'bg-secondary' : 'bg-text-muted'
                }`} />
                <div>
                  <p className="font-serif text-lg font-bold text-text-primary">{item.phase}</p>
                  <p className="text-text-secondary mt-1 font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-4">Our Tech Stack</h2>
          <p className="text-lg text-text-secondary mb-10 font-sans">
            Built on battle-tested infrastructure designed for reliability, low cost, and offline resilience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Cloud Infrastructure', value: 'Railway + Vercel' },
              { label: 'Database', value: 'PostgreSQL via Supabase' },
              { label: 'AI & ML', value: 'OpenRouter + face-api.js' },
              { label: 'Mobile', value: 'React Native + Expo' },
              { label: 'Real-time', value: 'WebRTC + Socket.io' },
              { label: 'Web', value: 'Next.js 14' },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-3xl border border-glass-border bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-2">{item.label}</p>
                <p className="text-lg font-serif font-bold text-text-primary">{item.value}</p>
              </div>
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
  );
}
