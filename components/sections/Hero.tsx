"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="alpha" className="mb-6">
                ⚡ Alpha — Inviting 50 pilot schools
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-syne font-extrabold leading-[1.1] mb-6"
            >
              India's AI Classroom, <br />
              <span className="text-gradient">Built for Bharat</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Shikshak Sahayak brings facial attendance, AI content generation, real-time mood detection, and live parent streaming to your school — all in one ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" glow>
                  Join the Waitlist
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Floating Stat Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {[
                "5 Apps in One Ecosystem",
                "AI-Powered Whiteboard",
                "Offline-First Architecture",
              ].map((pill) => (
                <div
                  key={pill}
                  className="px-4 py-2 rounded-full border border-glass-border bg-white/5 text-sm font-medium text-text-secondary backdrop-blur-sm"
                >
                  {pill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Animated Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex-1 w-full max-w-[600px] lg:max-w-none"
          >
            <GlassCard className="relative aspect-[16/10] p-0 overflow-hidden border-primary/20 shadow-2xl shadow-primary/10">
              {/* Toolbar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-glass-border flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <div className="mx-auto text-[10px] text-text-muted font-mono bg-white/5 px-3 py-1 rounded-md">
                  smartboard.shikshaksahayak.in
                </div>
              </div>

              {/* Sidebar */}
              <div className="absolute top-10 left-0 bottom-0 w-16 bg-white/5 border-r border-glass-border flex flex-col items-center py-6 gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-white/10" />
                ))}
              </div>

              {/* Main Content Area (Whiteboard) */}
              <div className="absolute top-10 left-16 right-0 bottom-0 p-8 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-syne font-bold text-text-primary mb-1">Class 10-A Mathematics</h3>
                    <p className="text-[10px] text-text-muted">Topic: Quadratic Equations</p>
                  </div>
                  <div className="flex gap-4">
                    {/* Attendance Counter */}
                    <div className="bg-white/5 border border-glass-border rounded-lg px-3 py-2 text-center">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-xs font-bold text-primary"
                      >
                        32
                      </motion.div>
                      <div className="text-[8px] text-text-muted uppercase">Present</div>
                    </div>
                    {/* Mood Meter */}
                    <div className="bg-white/5 border border-glass-border rounded-lg px-3 py-2 flex flex-col items-center gap-1">
                      <div className="relative w-6 h-6">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            className="text-white/10"
                          />
                          <motion.circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="transparent"
                            strokeDasharray="62.8"
                            initial={{ strokeDashoffset: 62.8 }}
                            animate={{ strokeDashoffset: 15 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="text-success"
                          />
                        </svg>
                      </div>
                      <div className="text-[8px] text-text-muted uppercase">Focus</div>
                    </div>
                  </div>
                </div>

                {/* Whiteboard Content Mock */}
                <div className="flex-1 border border-dashed border-glass-border rounded-xl bg-white/[0.02] flex items-center justify-center p-8">
                  <div className="w-full space-y-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="h-2 bg-primary/40 rounded-full"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1.2, delay: 1.8 }}
                      className="h-2 bg-white/10 rounded-full"
                    />
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      transition={{ duration: 0.8, delay: 2.1 }}
                      className="h-2 bg-white/10 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
