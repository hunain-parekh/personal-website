"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "ai";
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "What are Hunain's top skills?",
  "Tell me about his experience",
  "What projects has he worked on?",
  "Is he available for hire?",
  "What tech stack does he use?",
  "Why should we hire him?",
];

function formatMessage(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');
}

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: `Hi! I'm **Hunain's AI Assistant** 🤖\n\nI can answer any questions about his skills, experience, projects, and availability.\n\nWhat would you like to know?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isTyping) return;

    const userMessage: Message = { role: "user", text: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      // Send only user/ai messages (skip the initial greeting for cleaner context)
      const chatHistory = updatedMessages
        .slice(1) // skip initial AI greeting
        .map((msg) => ({ role: msg.role, text: msg.text }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [...prev, { role: "ai", text: data.response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I'm having trouble connecting right now. Please try again or reach out to Hunain directly via the **Contact** section below!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating chat button — Creative AI Icon */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          boxShadow: isTyping
            ? "0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(212,168,83,0.4), inset 0 0 30px rgba(212,168,83,0.1)"
            : "0 8px 40px rgba(0,0,0,0.5), 0 0 60px var(--color-accent-glow), inset 0 0 20px rgba(212,168,83,0.05)"
        }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[var(--color-bg)] border-2 transition-all duration-500 group ${
          isTyping ? "border-[var(--color-accent)]" : "border-[var(--color-accent)]/60 hover:border-[var(--color-accent)]"
        }`}
        aria-label="Chat with AI assistant"
      >
        {/* Background glow pulse — faster when typing */}
        <motion.div
          animate={{ opacity: isTyping ? [0.1, 0.2, 0.1] : [0.03, 0.08, 0.03] }}
          transition={{ repeat: Infinity, duration: isTyping ? 0.8 : 3, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, var(--color-accent) 0%, transparent 70%)",
          }}
        />

        {/* Corner brackets */}
        <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity" />

        <AnimatePresence mode="wait">
          {isOpen && isTyping ? (
            /* Typing indicator when AI is responding */
            <motion.div
              key="typing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-center gap-1.5"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[var(--color-accent)] rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          ) : isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-6 text-[var(--color-accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div
              key="ai-icon"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="relative w-8 h-8"
            >
              {/* AI Brain/Circuit Icon */}
              <svg viewBox="0 0 40 40" className="w-full h-full">
                {/* Outer hexagon frame */}
                <motion.path
                  d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  animate={{ strokeOpacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />

                {/* Inner rotating hexagon */}
                <motion.path
                  d="M20 8 L30 13.5 L30 26.5 L20 32 L10 26.5 L10 13.5 Z"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />

                {/* Central AI eye/core */}
                <motion.circle
                  cx="20"
                  cy="20"
                  r="4"
                  fill="var(--color-accent)"
                  animate={{
                    r: [4, 5, 4],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />

                {/* Inner glow ring */}
                <motion.circle
                  cx="20"
                  cy="20"
                  r="6"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  animate={{
                    r: [6, 8, 6],
                    strokeOpacity: [0.6, 0.2, 0.6]
                  }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />

                {/* Circuit lines radiating from center */}
                <motion.g
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  {/* Top */}
                  <line x1="20" y1="14" x2="20" y2="8" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="20" cy="8" r="1.5" fill="var(--color-accent)" />

                  {/* Bottom */}
                  <line x1="20" y1="26" x2="20" y2="32" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="20" cy="32" r="1.5" fill="var(--color-accent)" />

                  {/* Top-right */}
                  <line x1="24" y1="17" x2="29" y2="13" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="29" cy="13" r="1.5" fill="var(--color-accent)" />

                  {/* Top-left */}
                  <line x1="16" y1="17" x2="11" y2="13" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="11" cy="13" r="1.5" fill="var(--color-accent)" />

                  {/* Bottom-right */}
                  <line x1="24" y1="23" x2="29" y2="27" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="29" cy="27" r="1.5" fill="var(--color-accent)" />

                  {/* Bottom-left */}
                  <line x1="16" y1="23" x2="11" y2="27" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="11" cy="27" r="1.5" fill="var(--color-accent)" />
                </motion.g>

                {/* Scanning line effect */}
                <motion.line
                  x1="8"
                  y1="20"
                  x2="32"
                  y2="20"
                  stroke="var(--color-accent)"
                  strokeWidth="1"
                  strokeOpacity="0.5"
                  animate={{ y1: [10, 30, 10], y2: [10, 30, 10] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
              </svg>

              {/* Orbiting particle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-[-4px]"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
                  style={{ boxShadow: "0 0 8px var(--color-accent)" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Multiple pulse rings when closed */}
        {!isOpen && (
          <>
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              className="absolute inset-0 border border-[var(--color-accent)]"
            />
            <motion.div
              animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 border border-[var(--color-accent)]"
            />
          </>
        )}

        {/* "AI" label or typing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute -top-1 -right-1 text-[8px] font-bold text-[var(--color-bg)] bg-[var(--color-accent)] px-1.5 py-0.5 tracking-wider"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {isTyping ? (
            <motion.span className="flex items-center gap-[2px]">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: i * 0.15,
                  }}
                >
                  .
                </motion.span>
              ))}
            </motion.span>
          ) : (
            "AI"
          )}
        </motion.div>
      </motion.button>

      {/* Notification badge */}
      <AnimatePresence>
        {!isOpen && messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ delay: 4, duration: 0.5 }}
            className="fixed bottom-[78px] right-4 sm:bottom-[88px] sm:right-6 z-[100] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-4 py-3 max-w-[200px] sm:max-w-[240px] shadow-xl"
          >
            <p className="text-xs text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
              Have questions about Hunain? <span className="text-[var(--color-accent)]">Ask his AI!</span>
            </p>
            <div className="absolute bottom-0 right-6 w-2 h-2 bg-[var(--color-bg-elevated)] border-r border-b border-[var(--color-border)] translate-y-1/2 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-[100] w-[calc(100vw-24px)] sm:w-[380px] h-[450px] sm:h-[520px] max-h-[calc(100vh-100px)] flex flex-col border border-[var(--color-border)] bg-[var(--color-bg)] shadow-2xl overflow-hidden"
            style={{
              boxShadow: "0 25px 80px rgba(0,0,0,0.5), 0 0 60px var(--color-accent-glow)",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
              <div className="relative">
                <div className="w-8 h-8 border border-[var(--color-accent)] flex items-center justify-center">
                  <span
                    className="text-xs font-bold text-gradient"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    HP
                  </span>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-400 rounded-full border border-[var(--color-bg-elevated)]"
                />
              </div>
              <div>
                <h3
                  className="text-sm font-semibold text-[var(--color-text)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Hunain&apos;s AI
                </h3>
                <p
                  className="text-[9px] text-[var(--color-accent)] tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Online — Ask me anything
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[var(--color-accent)] text-[var(--color-bg)] ml-auto"
                        : "bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                    dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                  />
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-4 py-3 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.6,
                          delay: i * 0.15,
                        }}
                        className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions (show only at start) */}
            {messages.length <= 1 && (
              <div className="px-5 pb-3">
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.slice(0, 3).map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="px-3 py-1.5 text-[10px] border border-[var(--color-border)] text-[var(--color-text-dim)] hover:border-[var(--color-accent-dim)] hover:text-[var(--color-accent)] transition-all duration-200"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Hunain..."
                  className="flex-1 bg-transparent text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-dim)]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  className="w-8 h-8 flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--color-accent)] transition-all duration-200 border border-[var(--color-accent)]/50"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
