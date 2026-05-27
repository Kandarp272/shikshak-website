"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { 
  Users2, 
  BrainCircuit, 
  Smile, 
  Mic2, 
  Radio, 
  WifiOff 
} from "lucide-react";

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <Users2 className="text-primary" />,
      title: "Facial Attendance",
      desc: "Face recognition in <30 seconds for full class. No photos stored — only embeddings.",
    },
    {
      icon: <BrainCircuit className="text-accent" />,
      title: "AI Content Generation",
      desc: "Notes, assignments, and quizzes from a topic name. CBSE/GSEB aligned.",
    },
    {
      icon: <Smile className="text-success" />,
      title: "Mood Detection",
      desc: "Real-time class attention monitoring. Alerts when students disengage.",
    },
    {
      icon: <Mic2 className="text-secondary" />,
      title: "Lecture Recording",
      desc: "Auto-transcribed, topic-extracted, shared with students.",
    },
    {
      icon: <Radio className="text-red-400" />,
      title: "Live Parent Streaming",
      desc: "10-minute daily view. Audio muted by default. School-controlled.",
    },
    {
      icon: <WifiOff className="text-amber-500" />,
      title: "Offline-First",
      desc: "Works on poor school WiFi. Syncs when connection resumes.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-syne font-bold mb-6"
          >
            Features that actually matter in <span className="text-gradient">Indian schools</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full group" hover>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-glass-border flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-syne font-bold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
