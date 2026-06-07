"use client";

import React from "react";
import ContactForm from "@/components/forms/ContactForm";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export default function ContactContent() {
  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "shikshaksahayak.in@gmail.com",
      link: "mailto:shikshaksahayak.in@gmail.com",
      color: "bg-[#E8F3E5]",
    },
    {
      icon: <MessageCircle />,
      title: "WhatsApp",
      value: "Message us directly",
      link: "https://wa.me/917990680690",
      color: "bg-[#FDF2F0]",
    },
    {
      icon: <Clock />,
      title: "Response Time",
      value: "Usually within 24 hours. Alpha teams move fast.",
      color: "bg-[#F3F1FD]",
    },
    {
      icon: <MapPin />,
      title: "Location",
      value: "Ahmedabad, Gujarat, India",
      color: "bg-[#FEF9EC]",
    },
  ];

  return (
    <div className="container mx-auto px-6 pt-40 pb-32">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight text-text-primary"
        >
          Get in <span className="italic text-primary">Touch</span>
        </motion.h1>
        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
          Have questions about our pilot program or want to see a demo? We're here to help Bharat's schools transition to the AI era.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className={`${item.color} flex items-start gap-6 p-8 rounded-[32px] border border-glass-border transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5`}>
                <div className="p-4 rounded-2xl bg-white shadow-sm text-primary">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-muted uppercase tracking-[0.15em] mb-2">
                    {item.title}
                  </h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-xl text-text-primary hover:text-primary transition-colors font-serif font-bold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xl text-text-primary font-serif font-bold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 rounded-[40px] bg-primary/5 border border-primary/10">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Best for:</h3>
            <ul className="text-text-secondary text-lg space-y-4 font-sans">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Demo requests & technical inquiries
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Partnership & investment questions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Pilot program detailed questions
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-10 md:p-12 rounded-[40px] bg-white border border-glass-border shadow-sm"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
