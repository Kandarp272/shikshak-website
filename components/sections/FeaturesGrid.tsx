"use client";

import React from "react";
import { motion } from "framer-motion";
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
      icon: <Users2 />,
      title: "Facial Attendance",
      desc: "Face recognition in <30 seconds for full class. No photos stored — only embeddings for privacy.",
    },
    {
      icon: <BrainCircuit />,
      title: "AI Content Generation",
      desc: "Notes, assignments, and quizzes from a topic name. Perfectly CBSE/GSEB aligned.",
    },
    {
      icon: <Smile />,
      title: "Mood Detection",
      desc: "Real-time class attention monitoring. Subtle alerts when students disengage from the topic.",
    },
    {
      icon: <Mic2 />,
      title: "Lecture Recording",
      desc: "Auto-transcribed and topic-extracted lectures, instantly shared with students for revision.",
    },
    {
      icon: <Radio />,
      title: "Live Parent Streaming",
      desc: "10-minute daily view. Audio muted by default. Full control remains with the school.",
    },
    {
      icon: <WifiOff />,
      title: "Offline-First",
      desc: "Works on poor school WiFi. All data syncs seamlessly once the connection resumes.",
    },
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-surface/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight text-text-primary"
          >
            Features built for the <br />
            <span className="italic text-primary">heart of Bharat</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto"
          >
            Actually useful tools that solve real problems in Indian classrooms daily.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="h-full p-10 rounded-[32px] bg-white border border-glass-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
