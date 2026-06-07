"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Video, 
  PenTool, 
  BarChart2, 
  Play, 
  Sparkles, 
  Smile, 
  RefreshCw, 
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

type TabType = "scan" | "whiteboard" | "analytics";

const DashboardSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("scan");
  
  // Scanning simulator states
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scannedStudents, setScannedStudents] = useState<any[]>([]);
  const [attendancePhase, setAttendancePhase] = useState<"idle" | "scanning" | "done">("idle");

  // Whiteboard simulator states
  const [whiteboardText, setWhiteboardText] = useState<string[]>([]);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [isWriting, setIsWriting] = useState(false);

  // Simulated student profiles for attendance
  const students = [
    { id: 1, name: "Aarav Patel", mood: "Focused", match: "99.4%", x: "15%", y: "25%", delay: 1000 },
    { id: 2, name: "Divya Sharma", mood: "Happy", match: "98.1%", x: "55%", y: "30%", delay: 2000 },
    { id: 3, name: "Kabir Mehta", mood: "Inquisitive", match: "97.5%", x: "32%", y: "55%", delay: 3200 },
    { id: 4, name: "Ananya Iyer", mood: "Focused", match: "99.0%", x: "75%", y: "48%", delay: 4500 },
  ];

  // Lessons content for AI whiteboard
  const lessons: Record<string, string[]> = {
    photosynthesis: [
      "🌿 Lesson Plan: Photosynthesis (Class VI)",
      "────────────────────────────────────────",
      "1. Core Equation:",
      "   6CO₂ + 6H₂O  ──[ Light + Chlorophyll ]──>  C₆H₁₂O₆ + 6O₂",
      "",
      "2. Primary Phases:",
      "   • Light Reactions (occur in Thylakoid membranes)",
      "   • Dark Reactions / Calvin Cycle (occur in Stroma)",
      "",
      "3. Key Fact for Board Exams:",
      "   Chlorophyll absorbs blue and red wavelengths, reflecting green.",
      "✨ AI Suggestion: Show 3D animated leaf cell diagram now."
    ],
    newton: [
      "🍎 Lecture Notes: Newton's Laws of Motion",
      "────────────────────────────────────────",
      "• First Law (Inertia): A body remains at rest or constant velocity",
      "  unless acted upon by an external force.",
      "",
      "• Second Law (Acceleration): F = m × a",
      "  • Force (N) = Mass (kg) × Acceleration (m/s²)",
      "",
      "• Third Law (Action-Reaction): For every action, there is an",
      "  equal and opposite reaction.",
      "",
      "💡 Live Demo Idea: Simulate spring balance weights on smartboard."
    ],
    solarsystem: [
      "🪐 Quick Quiz: Solar System Overview",
      "────────────────────────────────────────",
      "Q1. Which planet has the highest surface temperature?",
      "    ✅ Venus (due to runaway greenhouse effect)",
      "",
      "Q2. Where is the Asteroid Belt located?",
      "    ✅ Between Mars and Jupiter",
      "",
      "Q3. What is the composition of Saturn's rings?",
      "    ✅ Water ice, rocky debris, and cosmic dust",
      "",
      "🎯 Recommended: Trigger interactive orbital map simulation."
    ]
  };

  // Run attendance scanner
  const runAttendanceScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    setAttendancePhase("scanning");
    setScanProgress(0);
    setScannedStudents([]);
    
    // Increment scanner progress
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setAttendancePhase("done");
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    // Scan student profiles based on simulated frame delays
    students.forEach((student) => {
      setTimeout(() => {
        setScannedStudents((prev) => [...prev, student]);
      }, student.delay);
    });
  };

  // Write AI Whiteboard lesson
  const loadLesson = (lessonId: string) => {
    if (isWriting) return;
    setIsWriting(true);
    setActiveLesson(lessonId);
    setWhiteboardText([]);
    
    const lines = lessons[lessonId];
    let lineIdx = 0;
    
    const writeLine = () => {
      if (lineIdx < lines.length) {
        setWhiteboardText((prev) => [...prev, lines[lineIdx]]);
        lineIdx++;
        setTimeout(writeLine, 400); // speed of typing lines
      } else {
        setIsWriting(false);
      }
    };
    
    writeLine();
  };

  // Auto-scan on component mount to give user instant feedback
  useEffect(() => {
    runAttendanceScan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="demo-sandbox" className="py-32 relative overflow-hidden bg-surface/30">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="organic-blob w-[500px] h-[500px] bg-primary/10 top-1/4 -left-32" />
        <div className="organic-blob w-[450px] h-[450px] bg-secondary/5 bottom-1/4 -right-32" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <Badge variant="alpha" className="mb-4 bg-primary/5 text-primary border-primary/10 px-6 py-2 rounded-full text-sm font-medium">
            ✨ Interactive Experience
          </Badge>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-text-primary mb-6 leading-tight">
            See the AI Smartboard <span className="italic text-primary">in Action</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto font-sans">
            Interact with our simulated console. Switch between modes to witness attendance, content design, and dynamic feedback.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-6xl mx-auto rounded-[36px] bg-white border border-glass-border shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[640px]">
          
          {/* Dashboard Control Sidebar */}
          <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-glass-border bg-background p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-text-primary mb-1">Smartboard App</h3>
                <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">Console v0.4 Alpha</p>
              </div>

              {/* Sidebar Tabs */}
              <div className="space-y-3">
                {[
                  { id: "scan", label: "Live Face Attendance", icon: <Video size={18} />, desc: "Marks attendance and moods" },
                  { id: "whiteboard", label: "AI Blackboard Slate", icon: <PenTool size={18} />, desc: "Generates custom syllabus guides" },
                  { id: "analytics", label: "Engagement Analytics", icon: <BarChart2 size={18} />, desc: "Tracks active focus index" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      activeTab === tab.id
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/15"
                        : "bg-transparent border-transparent text-text-secondary hover:bg-primary/5 hover:text-text-primary"
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-primary/5 text-primary"}`}>
                      {tab.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold leading-none mb-1">{tab.label}</h4>
                      <p className={`text-[11px] ${activeTab === tab.id ? "text-white/70" : "text-text-muted"}`}>{tab.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-glass-border/60">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                <span className="text-xs font-semibold text-text-secondary">Classroom Node: Active</span>
              </div>
            </div>
          </div>

          {/* Main Console Screen Area */}
          <div className="flex-1 bg-background p-8 flex flex-col justify-between relative">
            <AnimatePresence mode="wait">
              
              {/* Tab 1: Live Face Attendance */}
              {activeTab === "scan" && (
                <motion.div
                  key="scan-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6 h-full justify-between"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-text-primary">Camera Node A-01</h4>
                      <p className="text-xs text-text-secondary">Secondary Class: VII-B</p>
                    </div>
                    <Button
                      variant={attendancePhase === "scanning" ? "outline" : "primary"}
                      size="sm"
                      onClick={runAttendanceScan}
                      disabled={isScanning}
                      className="flex items-center gap-2"
                    >
                      <RefreshCw size={14} className={isScanning ? "animate-spin" : ""} />
                      {attendancePhase === "idle" ? "Start Scanner" : isScanning ? "Scanning..." : "Rescan Class"}
                    </Button>
                  </div>

                  {/* Camera view container */}
                  <div className="relative aspect-video rounded-3xl border border-glass-border overflow-hidden bg-black/80 shadow-inner flex items-center justify-center">
                    
                    {/* Simulated Classroom Video Feed Background */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay filter blur-[1px]" />
                    
                    {/* Camera grid overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 border-dashed border-2 border-white/20 m-6 rounded-2xl" />

                    {/* Scanning Bar Overlay */}
                    {isScanning && (
                      <motion.div
                        className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(74,103,65,0.8)] z-20"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      />
                    )}

                    {/* Scan Progress Indicators */}
                    {isScanning && (
                      <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-full font-mono">
                        Analyzing frame data: {Math.round(scanProgress)}%
                      </div>
                    )}

                    {/* Scanning Target Box Dials */}
                    {scannedStudents.map((student) => (
                      <motion.div
                        key={student.id}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute pointer-events-none border border-success bg-success/10 backdrop-blur-[1px] p-2 rounded-lg shadow-lg flex flex-col gap-1 z-10"
                        style={{ left: student.x, top: student.y }}
                      >
                        <div className="w-16 h-16 border-2 border-success border-dashed absolute -inset-1 rounded-lg animate-[pulse_2s_infinite]" />
                        <span className="text-[10px] text-white font-bold leading-none">{student.name}</span>
                        <div className="flex gap-1.5 items-center">
                          <Smile size={10} className="text-white" />
                          <span className="text-[9px] text-white/90 bg-success/80 px-1 rounded-sm leading-none">{student.mood}</span>
                        </div>
                      </motion.div>
                    ))}

                    {attendancePhase === "idle" && (
                      <div className="text-center p-8 z-10">
                        <Video size={48} className="mx-auto text-white/30 mb-4 animate-[pulse_2.5s_infinite]" />
                        <h5 className="text-white font-serif text-lg mb-2">Classroom Feed Offline</h5>
                        <p className="text-white/60 text-xs max-w-xs mx-auto mb-4">Click "Start Scanner" above to simulate AI facial mood detection and attendance.</p>
                      </div>
                    )}
                  </div>

                  {/* Attendance Log Table */}
                  <div className="bg-white border border-glass-border rounded-2xl p-5">
                    <h5 className="text-sm font-semibold text-text-primary mb-3">Live Log Feed</h5>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {students.map((student) => {
                        const isScanned = scannedStudents.some((s) => s.id === student.id);
                        return (
                          <div
                            key={student.id}
                            className={`p-3.5 rounded-xl border transition-all duration-300 ${
                              isScanned 
                                ? "bg-success/5 border-success/20 text-text-primary" 
                                : "bg-surface/35 border-transparent text-text-muted opacity-60"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-semibold truncate pr-1">{student.name}</span>
                              {isScanned ? (
                                <CheckCircle size={12} className="text-success shrink-0" />
                              ) : (
                                <div className="w-2 h-2 rounded-full bg-text-muted shrink-0" />
                              )}
                            </div>
                            <p className="text-[10px] uppercase font-bold tracking-wider leading-none">
                              {isScanned ? `${student.mood} (${student.match})` : "Scanning..."}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 2: AI Blackboard Slate */}
              {activeTab === "whiteboard" && (
                <motion.div
                  key="whiteboard-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6 h-full justify-between"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-lg font-serif font-bold text-text-primary">AI Lecture Assistant</h4>
                      <p className="text-xs text-text-secondary">Type prompts to generate structured chalkboard summaries</p>
                    </div>
                  </div>

                  {/* Lesson Select Chips */}
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "photosynthesis", label: "Photosynthesis Eq." },
                      { id: "newton", label: "Newton's Laws" },
                      { id: "solarsystem", label: "Solar System Quiz" }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => loadLesson(btn.id)}
                        disabled={isWriting}
                        className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-300 flex items-center gap-2 ${
                          activeLesson === btn.id
                            ? "bg-primary border-primary text-white"
                            : "bg-white border-glass-border text-text-secondary hover:border-primary/30 hover:text-text-primary"
                        }`}
                      >
                        <Sparkles size={12} />
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  {/* Blackboard Blackboard Slate Container */}
                  <div className="relative flex-1 min-h-[300px] bg-surface text-text-primary rounded-3xl p-8 font-mono text-sm shadow-inner overflow-y-auto border border-glass-border">
                    {/* Chalk board fine noise gradient */}
                    <div className="absolute inset-0 bg-radial-gradient opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                    
                    {/* Lesson Output Lines */}
                    <div className="space-y-2 relative z-10 leading-relaxed font-mono">
                      {whiteboardText.length === 0 && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-45">
                          <PenTool size={36} className="mb-4 text-primary" />
                          <p className="text-sm">Select a lesson preset above to trigger the AI blackboard drafting engine...</p>
                        </div>
                      )}
                      
                      {whiteboardText.map((line, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={
                            line?.startsWith("🌿") || line?.startsWith("🍎") || line?.startsWith("🪐")
                              ? "text-yellow-200 text-base font-bold font-serif mb-4"
                              : line?.startsWith("✨") || line?.startsWith("💡") || line?.startsWith("🎯")
                              ? "text-orange-300 font-bold italic mt-4"
                              : "text-text-primary"
                          }
                        >
                          {line}
                        </motion.p>
                      ))}
                      
                      {isWriting && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="inline-block w-2.5 h-5 bg-white/70 ml-1 align-middle"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Engagement Analytics */}
              {activeTab === "analytics" && (
                <motion.div
                  key="analytics-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-6 h-full justify-between"
                >
                  <div>
                    <h4 className="text-lg font-serif font-bold text-text-primary">Real-time Engagement Diagnostics</h4>
                    <p className="text-xs text-text-secondary">Synthesizing attendance, focus ratios, and question logs</p>
                  </div>

                  {/* Circular Dials Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "Classroom Focus", val: "88%", color: "text-primary", bg: "bg-primary/5", score: "Optimum" },
                      { label: "Joy Index", val: "92%", color: "text-secondary", bg: "bg-secondary/10", score: "High Engagement" },
                      { label: "Lecture Velocity", val: "1.2x", color: "text-secondary", bg: "bg-secondary/5", score: "Slightly Fast" },
                    ].map((dial, idx) => (
                      <div key={idx} className="bg-white border border-glass-border p-6 rounded-2xl flex items-center justify-between shadow-sm">
                        <div>
                          <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider mb-1">{dial.label}</p>
                          <h5 className={`text-3xl font-bold font-serif ${dial.color}`}>{dial.val}</h5>
                          <span className="text-[10px] text-text-muted mt-1 inline-block bg-surface px-2 py-0.5 rounded-full">{dial.score}</span>
                        </div>
                        <div className={`w-14 h-14 rounded-full ${dial.bg} border border-glass-border flex items-center justify-center`}>
                          <Smile className={`w-6 h-6 ${dial.color}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Realtime Trend Graph */}
                  <div className="bg-white border border-glass-border rounded-2xl p-6 flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-4">
                      <h5 className="text-xs uppercase tracking-wider font-bold text-text-secondary">Focus Index (Period Duration)</h5>
                      <span className="text-xs text-primary font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block" /> Live Trend Feed
                      </span>
                    </div>

                    <div className="relative h-44 flex items-end">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                        <div className="border-t border-glass-border w-full text-[9px] text-text-muted pt-1">Optimum (100)</div>
                        <div className="border-t border-glass-border w-full text-[9px] text-text-muted pt-1">Average (50)</div>
                        <div className="border-t border-glass-border w-full text-[9px] text-text-muted pt-1">Attention Limit (20)</div>
                      </div>

                      {/* SVG Line Graph */}
                      <svg className="w-full h-full absolute inset-0 z-10" viewBox="0 0 500 100" preserveAspectRatio="none">
                        <motion.path
                          d="M 0 50 Q 50 20 100 45 T 200 15 T 300 35 T 400 10 T 500 25"
                          fill="none"
                          stroke="var(--primary)"
                          strokeWidth="2.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        <motion.path
                          d="M 0 50 Q 50 20 100 45 T 200 15 T 300 35 T 400 10 T 500 25 L 500 100 L 0 100 Z"
                          fill="url(#gradient-green)"
                          opacity="0.08"
                        />
                        <defs>
                          <linearGradient id="gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--primary)" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-text-muted mt-2">
                      <span>0 min (Period Start)</span>
                      <span>15 min</span>
                      <span>30 min</span>
                      <span>45 min (End)</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick helper note */}
            <div className="mt-6 text-[11px] text-text-muted flex items-start gap-2 bg-background p-3 rounded-xl border border-glass-border">
              <AlertCircle size={14} className="text-primary shrink-0 mt-0.5" />
              <p>
                {activeTab === "scan" && "Facial mood markers help teachers catch when a topic is losing students in real time."}
                {activeTab === "whiteboard" && "Lesson summaries are fully synchronized to standard curricula (NCERT / CBSE) and can export directly to the Parent / Student mobile apps."}
                {activeTab === "analytics" && "All metrics are aggregated locally and respects pupil privacy laws — video is processed on-edge, never uploaded to server nodes."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSimulator;
