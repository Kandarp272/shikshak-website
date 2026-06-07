"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, UserCheck, Presentation, LineChart } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <LayoutDashboard size={32} />,
      title: "School Onboards",
      desc: "Admin sets up classes, teachers, and timetable in the unified dashboard.",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Students Enroll",
      desc: "One-time face capture for students using secure, privacy-first embeddings.",
    },
    {
      icon: <Presentation size={32} />,
      title: "Teaching Begins",
      desc: "Smartboard AI handles attendance, content generation, and recording daily.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Everyone Benefits",
      desc: "Students learn better, parents stay informed, and admin sees real data.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight text-text-primary"
          >
            From day one to <br />
            <span className="italic text-primary">smarter classrooms</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-10">
                  <div className="w-16 h-16 rounded-3xl bg-white border border-glass-border flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-[#F9F6F0] text-xs font-bold flex items-center justify-center border-4 border-background shadow-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
