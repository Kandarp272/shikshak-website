"use client";

import React from "react";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export default function PrivacyContent() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-extrabold mb-12 text-center"
        >
          Privacy <span className="text-gradient">Policy</span>
        </motion.h1>

        <GlassCard className="p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-xl font-serif font-bold text-text-primary mb-4">Our Commitment</h2>
            <p className="text-text-secondary leading-relaxed">
              We take privacy seriously, especially in an educational context. As an alpha-stage product, we are committed to being honest and transparent about what data we collect and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-text-primary mb-4">Data Collection</h2>
            <p className="text-text-secondary leading-relaxed">
              We collect only what's listed in our forms (Waitlist and Contact). This includes your name, email, school details, and role. This information is stored securely in our Supabase database.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-text-primary mb-4">Facial Attendance Data</h2>
            <p className="text-text-secondary leading-relaxed">
              Our facial attendance system NEVER stores images of students or teachers. We convert facial features into mathematical embeddings (vectors). These vectors cannot be reversed into photos. Your privacy is baked into our architecture.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-text-primary mb-4">Third-Party Services</h2>
            <p className="text-text-secondary leading-relaxed">
              We use Supabase for data storage and Resend for email delivery. We do not sell your data to any third parties.
            </p>
          </section>

          <p className="text-text-muted text-sm pt-8 border-t border-glass-border">
            Last updated: May 2026. Alpha build.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
