"use client";

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { XCircle, CheckCircle2 } from "lucide-react";

const ProblemSolution: React.FC = () => {
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
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-syne font-bold mb-6"
          >
            Indian classrooms deserve <span className="text-gradient">better tools</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col gap-8 p-8" hover>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-1" size={20} />
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.pain}
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-glass-border">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-success shrink-0 mt-1" size={20} />
                    <p className="text-text-primary font-medium leading-relaxed">
                      {item.gain}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
