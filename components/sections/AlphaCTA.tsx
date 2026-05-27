"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const AlphaCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <GlassCard className="relative overflow-hidden p-12 md:p-20 text-center border-primary/20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-primary/20 blur-[120px] -z-10" />

            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold text-text-primary">
                We're looking for <span className="text-gradient">50 pilot schools</span> in Gujarat
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Free access during alpha. Your feedback shapes the product. Schools in Ahmedabad, Surat, Vadodara, Rajkot — priority.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Link href="/waitlist" className="w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto px-12" glow>
                    Apply for Free Pilot
                  </Button>
                </Link>
                <p className="text-sm text-text-muted italic">
                  Alpha build — expect bugs. We're iterating weekly.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default AlphaCTA;
