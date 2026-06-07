"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Is student facial data stored as photos or video?",
    a: "No. We never store photos or raw video. The system uses face-api.js to convert each student's face into a mathematical embedding (a set of numbers). This embedding cannot be reversed into a photo. Raw video is processed in-memory and discarded immediately."
  },
  {
    q: "Is this compliant with India's Digital Personal Data Protection Act 2023?",
    a: "We are actively aligning with DPDP Act requirements. Biometric data processing requires explicit consent from parents or guardians, which schools must collect during student enrollment. We provide a consent template that schools can use. We do not share data with third parties."
  },
  {
    q: "Can a parent or student opt out of facial recognition?",
    a: "Yes. Any student can be excluded from face-based attendance. The teacher can mark attendance manually for opted-out students. Schools retain full control over which students are enrolled in the face recognition system."
  },
  {
    q: "Who owns the school's data?",
    a: "The school does. We act as a data processor, not a data owner. Schools can request a full export or deletion of their data at any time by emailing us."
  },
  {
    q: "Does the system work on slow internet or no internet?",
    a: "Yes. Shikshak Sahayak is offline-first. Core functions like attendance and content generation work on local school WiFi with no internet. Data syncs to the cloud when connectivity resumes."
  },
  {
    q: "What does \"Alpha\" mean — is the product stable enough to use?",
    a: "The core Smartboard app and backend are functional and being used in testing. \"Alpha\" means we are iterating weekly based on feedback. Pilot schools will experience minor bugs and UI changes. We provide direct support to all pilot schools via WhatsApp."
  },
  {
    q: "How much will this cost after Alpha?",
    a: "Pricing is not finalized. Our commitment is that it will be affordable for average Indian private and government schools. We will publish pricing publicly before ending the free Alpha period, with at least 60 days notice to all pilot schools."
  },
  {
    q: "Can the live classroom stream be accessed by anyone?",
    a: "No. The Parent App stream is restricted to verified parents of students in that specific class. Each parent account is approved by the school admin. Audio is muted by default. The stream is limited to 10 minutes per session."
  }
];

const FAQItem = ({ q, a, index }: { q: string, a: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-glass-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl md:text-2xl font-serif font-bold text-text-primary group-hover:text-primary transition-colors">
          {q}
        </span>
        <div className={cn(
          "p-2 rounded-full bg-primary/5 text-primary transition-transform duration-500",
          isOpen && "rotate-180 bg-primary text-white"
        )}>
          <ChevronDown size={24} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-lg text-text-secondary leading-relaxed max-w-3xl font-sans">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQContent() {
  return (
    <div className="container mx-auto px-6 pt-40 pb-32">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight text-text-primary"
        >
          Frequently Asked <span className="italic text-primary">Questions</span>
        </motion.h1>
        <p className="text-xl text-text-secondary leading-relaxed">
          Everything you need to know about privacy, security, and the future of AI classrooms in Bharat.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {FAQS.map((faq, index) => (
          <FAQItem key={index} q={faq.q} a={faq.a} index={index} />
        ))}
      </div>
    </div>
  );
}
