"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { Monitor, Users, GraduationCap, Heart, Settings } from "lucide-react";

const EcosystemGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const apps = [
    {
      icon: <Monitor />,
      name: "Smartboard App",
      desc: "AI whiteboard, face attendance, mood detection, and interactive lecture recording.",
      status: "Alpha",
      color: "bg-[#E8F3E5]", // Soft green
    },
    {
      icon: <Users />,
      name: "Teacher App",
      desc: "Mobile-first PWA for remote monitoring, push alerts, and automated grading.",
      status: "Beta Coming Soon",
      color: "bg-[#FDF2F0]", // Soft peach
    },
    {
      icon: <GraduationCap />,
      name: "Student App",
      desc: "Personalized learning feed, AI doubt assistant, and gamified assignment submission.",
      status: "Beta Coming Soon",
      color: "bg-[#F3F1FD]", // Soft lavender
    },
    {
      icon: <Heart />,
      name: "Parent App",
      desc: "Live classroom view, instant attendance alerts, and direct academic insights.",
      status: "Alpha",
      color: "bg-[#FEF9EC]", // Soft yellow
    },
    {
      icon: <Settings />,
      name: "Admin Dashboard",
      desc: "School-wide analytics, automated timetable management, and broadcast announcements.",
      status: "Design Phase",
      color: "bg-[#F2F2F2]", // Soft gray
    },
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-text-primary max-w-2xl"
            >
              One ecosystem. <span className="italic text-primary">Five connected apps.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-secondary leading-relaxed"
            >
              A cohesive suite of applications working in harmony to transform every aspect of the modern school experience.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              style={{ y: index % 2 === 0 ? y : 0 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className={`${app.color} h-full p-10 rounded-[40px] border border-glass-border transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-start gap-8`}>
                <div className="p-4 rounded-3xl bg-white/80 shadow-sm text-primary group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(app.icon as React.ReactElement, { size: 28 })}
                </div>
                <div>
                  <Badge
                    variant={
                      app.status === "Alpha"
                        ? "alpha"
                        : app.status === "Design Phase"
                        ? "coming-soon"
                        : "beta"
                    }
                    className="mb-4 bg-white/60 text-text-primary border-none shadow-sm"
                  >
                    {app.status}
                  </Badge>
                  <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 leading-tight">
                    {app.name}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
