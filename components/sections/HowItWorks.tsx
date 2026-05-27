"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, UserCheck, Presentation, LineChart } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <LayoutDashboard size={32} />,
      title: "School Onboards",
      desc: "Admin sets up classes, teachers, and timetable in the dashboard.",
    },
    {
      icon: <UserCheck size={32} />,
      title: "Students Enroll",
      desc: "One-time face capture for students (embeddings only, no photos).",
    },
    {
      icon: <Presentation size={32} />,
      title: "Teaching Begins",
      desc: "Smartboard AI handles attendance, content, and recording daily.",
    },
    {
      icon: <LineChart size={32} />,
      title: "Everyone Benefits",
      desc: "Students learn better, parents stay informed, admin sees data.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-syne font-bold mb-6"
          >
            From day one to <span className="text-gradient">smarter classrooms</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-glass-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center border-2 border-background">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-syne font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed max-w-[200px]">
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
