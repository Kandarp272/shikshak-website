"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Organic Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="organic-blob w-[600px] h-[600px] bg-primary/20 -top-48 -left-24" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="organic-blob w-[500px] h-[500px] bg-secondary/15 top-1/2 -right-24" 
        />
        <div className="organic-blob w-[400px] h-[400px] bg-accent/10 bottom-0 left-1/3" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="alpha" className="mb-8 bg-primary/5 text-primary border-primary/10 px-6 py-2 rounded-full text-sm font-medium">
              ⚡ Alpha — Inviting 50 pilot schools
            </Badge>
          </motion.div>

          <motion.h1
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-[100px] font-serif font-bold text-text-primary leading-[1.05] mb-10 tracking-tight max-w-5xl mx-auto"
          >
            India's AI Classroom, <span className="italic text-primary">Built for Bharat</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-14 leading-relaxed font-sans"
          >
            Shikshak Sahayak brings facial attendance, AI content generation, and real-time mood detection to your school — all in one flowing ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="shadow-2xl shadow-primary/20">
                Book a Free Demo
              </Button>
            </Link>
            <Link href="/waitlist">
              <Button variant="primary" size="lg" className="shadow-2xl shadow-primary/20">
                Join the Waitlist
              </Button>
            </Link>
          </motion.div>

          {/* Floating Stat Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              "5 Apps in One",
              "AI-Powered Whiteboard",
              "Offline-First",
            ].map((pill) => (
              <div
                key={pill}
                className="px-6 py-3 rounded-full border border-glass-border bg-white/40 text-sm font-medium text-text-secondary backdrop-blur-md shadow-sm"
              >
                {pill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
