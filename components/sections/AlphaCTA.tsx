"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const AlphaCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <div className="relative overflow-hidden p-16 md:p-24 text-center rounded-[60px] bg-primary shadow-2xl shadow-primary/20">
            {/* Organic Background Texture */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#F9F6F0] leading-tight">
                Seeking <span className="italic opacity-80">50 pilot schools</span> across Bharat
              </h2>
              <p className="text-xl md:text-2xl text-[#F9F6F0]/80 leading-relaxed font-sans max-w-3xl mx-auto">
                Free access during our Alpha phase. Your feedback will shape the future of Indian education. Priority for schools in Gujarat.
              </p>
              <div className="flex flex-col items-center gap-6 pt-6">
                <Link href="/waitlist" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto px-16 bg-[#F9F6F0] text-primary hover:bg-[#F9F6F0]/90 shadow-2xl">
                    Apply for Free Pilot
                  </Button>
                </Link>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-[#F9F6F0]/60 font-medium">
                    Alpha build — We're iterating weekly with your feedback.
                  </p>
                  <div className="w-12 h-1 bg-[#F9F6F0]/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlphaCTA;
