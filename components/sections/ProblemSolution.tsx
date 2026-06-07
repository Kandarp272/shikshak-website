"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const comparisons = [
    {
      pain: "Manual attendance wastes 10 minutes every period",
      gain: "Face scan marks 30 students in under 30 seconds",
    },
    {
      pain: "Teachers create notes from scratch daily",
      gain: "AI generates syllabus-aligned content in seconds",
    },
    {
      pain: "Parents have zero visibility into school life",
      gain: "Live classroom stream + instant alerts on their phone",
    },
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-surface/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight"
          >
            Indian classrooms deserve <br />
            <span className="italic text-primary">better tools</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            We've identified the biggest friction points in modern education and solved them with seamless AI integration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              style={{ y: index % 2 === 0 ? y : 0 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className="h-full flex flex-col gap-10 p-10 rounded-[32px] bg-white shadow-sm border border-glass-border transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-red-50 text-red-500">
                      <XCircle size={24} />
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {item.pain}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-glass-border">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/5 text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-text-primary text-xl font-medium leading-relaxed font-serif">
                      {item.gain}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
