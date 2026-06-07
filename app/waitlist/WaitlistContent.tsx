"use client";

import React from "react";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { motion } from "framer-motion";

export default function WaitlistContent() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight text-text-primary"
        >
          Join the <span className="italic text-primary text-gradient bg-none">Waitlist</span>
        </motion.h1>
        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto font-sans">
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
  );
}
