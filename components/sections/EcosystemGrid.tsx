"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { Monitor, Users, GraduationCap, Heart, Settings } from "lucide-react";

const EcosystemGrid: React.FC = () => {
  const apps = [
    {
      icon: <Monitor className="text-primary" />,
      name: "Smartboard App",
      desc: "AI whiteboard, face attendance, mood detection, lecture recording",
      status: "Alpha",
    },
    {
      icon: <Users className="text-secondary" />,
      name: "Teacher App",
      desc: "Mobile PWA, push alerts, remote monitoring",
      status: "Beta Coming Soon",
    },
    {
      icon: <GraduationCap className="text-accent" />,
      name: "Student App",
      desc: "Learning feed, AI doubt assistant, assignment submission",
      status: "Beta Coming Soon",
    },
    {
      icon: <Heart className="text-red-400" />,
      name: "Parent App",
      desc: "Live class view (10 min/day), attendance alerts, academics",
      status: "Alpha",
    },
    {
      icon: <Settings className="text-text-muted" />,
      name: "Admin Dashboard",
      desc: "Timetable management, announcements, school analytics",
      status: "Design Phase",
    },
  ];

  return (
    <section className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-syne font-bold mb-6"
          >
            One ecosystem. <span className="text-gradient">Five connected apps.</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A cohesive suite of applications working in harmony to transform every aspect of the school experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 4 ? "lg:col-span-1" : ""}
            >
              <GlassCard className="h-full group" hover>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-glass-border group-hover:border-primary/30 transition-colors">
                    {app.icon}
                  </div>
                  <Badge
                    variant={
                      app.status === "Alpha"
                        ? "alpha"
                        : app.status === "Design Phase"
                        ? "coming-soon"
                        : "beta"
                    }
                  >
                    {app.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-syne font-bold text-text-primary mb-3">
                  {app.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {app.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemGrid;
