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
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-primary text-[#F9F6F0] shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              <MessageCircle size={28} />
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
            className="fixed bottom-28 right-8 z-50 w-[400px] max-w-[calc(100vw-64px)] h-[600px] max-h-[calc(100vh-140px)] flex flex-col rounded-[40px] overflow-hidden shadow-2xl bg-surface border border-glass-border backdrop-blur-xl"
          >
            <div className="flex items-center gap-4 px-6 py-5 border-b border-glass-border bg-white/50">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Bot size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-serif font-bold text-text-primary">Sahayak AI</h3>
                <p className="text-[12px] text-text-muted flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success inline-block animate-pulse" />
                  Always helpful
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-xl text-text-muted hover:bg-primary/5 transition-colors">
                <ChevronDown size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/30">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary text-[#F9F6F0]" : "bg-white border border-glass-border text-primary shadow-sm"}`}>
                    {msg.role === "user" ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div className={`px-5 py-3.5 rounded-3xl text-sm leading-relaxed shadow-sm ${msg.role === "user" ? "bg-primary text-[#F9F6F0] rounded-tr-none" : "bg-white border border-glass-border rounded-tl-none"}`}>
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing Animation State */}
              {isTyping && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white border border-glass-border text-primary shadow-sm">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white border border-glass-border rounded-3xl rounded-tl-none px-5 py-3.5 max-w-[80%] shadow-sm">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{displayText}</p>
                  </div>
                </div>
              )}

              {/* Waiting Indicator */}
              {isLoading && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white border border-glass-border text-primary shadow-sm">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white border border-glass-border rounded-3xl rounded-tl-none px-5 py-4 shadow-sm">
                    <div className="flex gap-2">
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-primary/40" />
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 rounded-full bg-primary/40" />
                      <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-primary/40" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showQuickActions && messages.length === 1 && (
              <div className="px-6 pb-6 flex flex-wrap gap-2 bg-white/30">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => sendMessage(action)}
                    className="px-4 py-2 text-xs font-medium rounded-full border border-glass-border bg-white text-text-secondary hover:border-primary/30 hover:text-primary shadow-sm transition-all duration-300"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="border-t border-glass-border p-6 bg-white/50 backdrop-blur-md">
              <div className="flex items-center gap-3 bg-white border border-glass-border rounded-[24px] px-4 py-2 shadow-sm focus-within:shadow-xl focus-within:shadow-primary/5 transition-all duration-500">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Sahayak..."
                  className="flex-1 bg-transparent text-sm outline-none py-2 font-sans"
                />
                <button type="submit" disabled={!input.trim() || isLoading || isTyping} className="p-3 rounded-2xl bg-primary text-[#F9F6F0] disabled:opacity-30 transition-all duration-300 hover:scale-110 active:scale-95">
                  {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
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
