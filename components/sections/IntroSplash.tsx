"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ENTER_EASE = [0.22, 1, 0.36, 1] as const;

// Word-level stagger component
const StaggerWords: React.FC<{
  text: string;
  className?: string;
  delayOffset?: number;
  wordDelay?: number;
}> = ({ text, className = "", delayOffset = 0, wordDelay = 0.08 }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            ease: ENTER_EASE,
            delay: delayOffset + i * wordDelay,
          }}
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
};

const IntroSplash: React.FC = () => {
  const [phase, setPhase] = useState<"intro" | "names" | "city" | "exit">("intro");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Phase timing — storyboard:
    // 0.0s  → "intro" — "A project by" fades in
    // 1.6s  → "names" — Names appear with flair
    // 3.6s  → "city" — Location + class tag
    // 5.4s  → "exit" — Everything dissolves out
    // 6.4s  → unmount
    const t1 = setTimeout(() => setPhase("names"), 1600);
    const t2 = setTimeout(() => setPhase("city"), 3600);
    const t3 = setTimeout(() => setPhase("exit"), 5400);
    const t4 = setTimeout(() => setVisible(false), 6400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#F9F6F0" }}
          exit={{
            opacity: 0,
            filter: "blur(8px)",
          }}
          transition={{ duration: 0.9, ease: ENTER_EASE }}
        >
          {/* Subtle animated gradient blobs in background */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
            style={{
              background: "radial-gradient(circle, #4A6741 0%, transparent 70%)",
              top: "10%",
              left: "5%",
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
            style={{
              background: "radial-gradient(circle, #E27D60 0%, transparent 70%)",
              bottom: "5%",
              right: "10%",
            }}
            animate={{
              x: [0, -25, 15, 0],
              y: [0, 20, -25, 0],
              scale: [1, 0.9, 1.08, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Grain overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Content Stack */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
            {/* Phase 1: "A project by" */}
            <AnimatePresence mode="wait">
              {(phase === "intro" || phase === "names" || phase === "city") && (
                <motion.div
                  key="tag"
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: ENTER_EASE, delay: 0.3 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.25em] uppercase text-text-muted">
                    <motion.span
                      className="inline-block w-8 h-[1px] bg-text-muted/40"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: ENTER_EASE, delay: 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                    A project by
                    <motion.span
                      className="inline-block w-8 h-[1px] bg-text-muted/40"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: ENTER_EASE, delay: 0.5 }}
                      style={{ transformOrigin: "right" }}
                    />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 2: Names */}
            <AnimatePresence mode="wait">
              {(phase === "names" || phase === "city") && (
                <motion.div
                  key="names"
                  className="flex flex-col items-center gap-3"
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight">
                    <StaggerWords text="Kandarp Trivedi" delayOffset={0} wordDelay={0.12} />
                  </div>

                  {/* Ampersand connector */}
                  <motion.span
                    className="text-2xl sm:text-3xl font-serif text-primary/60 italic"
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: ENTER_EASE, delay: 0.35 }}
                  >
                    &amp;
                  </motion.span>

                  <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary leading-tight">
                    <StaggerWords text="Dhairya Kanjiya" delayOffset={0.45} wordDelay={0.12} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 3: Location + class tag */}
            <AnimatePresence mode="wait">
              {phase === "city" && (
                <motion.div
                  key="city"
                  className="mt-10 flex flex-col items-center gap-4"
                  exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Divider line */}
                  <motion.div
                    className="w-12 h-[1.5px] bg-primary/30 rounded-full"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: ENTER_EASE, delay: 0.1 }}
                  />

                  <motion.p
                    className="text-base sm:text-lg text-text-secondary font-medium tracking-wide"
                    initial={{ opacity: 0, y: 8, filter: "blur(5px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: ENTER_EASE, delay: 0.2 }}
                  >
                    Two 10th graders from{" "}
                    <span className="text-primary font-semibold">Ahmedabad</span>
                  </motion.p>

                  {/* Pill badge */}
                  <motion.span
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-glass-border bg-white/60 text-xs font-semibold text-text-muted tracking-wider uppercase"
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, ease: ENTER_EASE, delay: 0.5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    Class X · 2026–27
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip hint */}
          <motion.button
            className="absolute bottom-8 text-[10px] text-text-muted/60 tracking-[0.2em] uppercase hover:text-text-muted transition-colors duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            onClick={() => {
              setPhase("exit");
              setTimeout(() => setVisible(false), 900);
            }}
          >
            Skip intro ↵
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
