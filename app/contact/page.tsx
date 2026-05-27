"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      value: "shikshaksahayak.in@gmail.com",
      link: "mailto:shikshaksahayak.in@gmail.com",
    },
    {
      icon: <MessageCircle className="text-[#25D366]" />,
      title: "WhatsApp",
      value: "Message us directly",
      link: "https://wa.me/917990680690",
    },
    {
      icon: <Clock className="text-accent" />,
      title: "Response Time",
      value: "Usually within 24 hours. Alpha teams move fast.",
    },
    {
      icon: <MapPin className="text-secondary" />,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <p className="text-lg text-text-secondary leading-relaxed">
            Have questions about our pilot program or want to see a demo? We're here to help Bharat's schools transition to the AI era.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, index) => (
                <GlassCard key={index} className="flex items-start gap-4" hover>
                  <div className="p-3 rounded-xl bg-white/5 border border-glass-border">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-text-primary hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-text-primary font-medium">{item.value}</p>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="bg-primary/5 border-primary/20">
              <h3 className="text-text-primary font-syne font-bold mb-3">Best for:</h3>
              <ul className="text-text-secondary text-sm space-y-2 list-disc list-inside">
                <li>Demo requests & technical inquiries</li>
                <li>Partnership & investment questions</li>
                <li>Pilot program detailed questions</li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
