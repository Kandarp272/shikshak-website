"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Loader2, 
  Bot, 
  User, 
  ChevronDown 
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "👋 Hi there! I'm Shikshak Sahayak's AI assistant. How can I help you today?",
};

const QUICK_ACTIONS = [
  "What is Shikshak Sahayak?",
  "Who is the founder?",
  "What features do you offer?",
  "Is it free during Alpha?",
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isTyping, displayText]);

  // Simulate typing effect for the latest assistant message
  const simulateTyping = async (text: string) => {
    setIsTyping(true);
    setDisplayText("");
    let currentText = "";
    
    // Lightning Fast Speed: 10ms per character
    for (let i = 0; i < text.length; i++) {
      currentText += text[i];
      setDisplayText(currentText);
      await new Promise((resolve) => setTimeout(resolve, 10));
    }
    
    setMessages((prev) => [...prev, { role: "assistant", content: text }]);
    setDisplayText("");
    setIsTyping(false);
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading || isTyping) return;

    const userMessage: Message = { role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setShowQuickActions(false);
    setIsLoading(true);

    try {
      const history = messages.slice(1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to get response");

      setIsLoading(false); 
      await simulateTyping(data.response); 
      
    } catch (error: any) {
      const errorMessage: Message = {
        role: "assistant",
        content: `😓 ${error.message || "Something went wrong."}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] active:scale-95"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-120px)] flex flex-col glass-card overflow-hidden shadow-2xl bg-[#0D1117]/95 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-glass-border">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-syne font-bold text-text-primary">Shikshak Sahayak AI</h3>
                <p className="text-[11px] text-text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success inline-block animate-pulse" />
                  Online
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg text-text-muted hover:bg-white/10">
                <ChevronDown size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-primary/20" : "bg-white/10"}`}>
                    {msg.role === "user" ? <User size={14} className="text-primary" /> : <Bot size={14} className="text-text-secondary" />}
                  </div>
                  <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div className={`px-4 py-2.5 rounded-2xl text-sm ${msg.role === "user" ? "bg-primary text-white" : "bg-white/5 border border-glass-border"}`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Animation State */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                    <Bot size={14} className="text-text-secondary" />
                  </div>
                  <div className="bg-white/5 border border-glass-border rounded-2xl px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm whitespace-pre-wrap">{displayText}</p>
                  </div>
                </div>
              )}

              {/* Waiting Indicator */}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                    <Bot size={14} className="text-text-secondary" />
                  </div>
                  <div className="bg-white/5 border border-glass-border rounded-2xl px-4 py-3">
                    <div className="flex gap-1.5">
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-text-muted" />
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-text-muted" />
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-text-muted" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showQuickActions && messages.length === 1 && (
              <div className="px-4 pb-4 flex flex-wrap gap-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-glass-border bg-white/5 text-text-secondary hover:bg-white/10"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="border-t border-glass-border p-3">
              <div className="flex items-center gap-2 bg-white/5 border border-glass-border rounded-xl px-3 py-1.5">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Shikshak Sahayak..."
                  className="flex-1 bg-transparent text-sm outline-none py-1.5"
                />
                <button type="submit" disabled={!input.trim() || isLoading || isTyping} className="p-2 rounded-lg bg-primary text-white disabled:opacity-30">
                  {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
