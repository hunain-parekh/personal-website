"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "ai";
  text: string;
}

const HUNAIN_DATA = {
  name: "Hunain Parekh",
  role: "Senior Software Engineer",
  focus: "MERN Stack (MongoDB, Express.js, React, Node.js)",
  experience: "5+ years",
  projects: "20+ projects delivered",
  location: "Available for remote & on-site opportunities",
  languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL"],
  frameworks: ["React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS", "Redux", "Socket.io"],
  databases: ["MongoDB", "PostgreSQL", "Redis"],
  devops: ["Docker", "AWS", "CI/CD", "Git/GitHub"],
  softSkills: ["Team Leadership", "Mentoring", "Agile/Scrum", "Code Review", "Technical Writing"],
  highlights: [
    "Led architecture redesign reducing API response times by 60%",
    "Established code review practices and CI/CD pipelines for engineering teams",
    "Mentored a team of 4 junior developers",
    "Delivered 10+ client projects on time and within budget",
    "Built real-time applications serving thousands of concurrent users",
    "Achieved 85%+ test coverage across multiple production codebases",
  ],
  availability: "Open to new opportunities — full-time, contract, or freelance",
  email: "hunain@example.com",
};

const SUGGESTED_QUESTIONS = [
  "What are Hunain's top skills?",
  "Tell me about his experience",
  "What projects has he worked on?",
  "Is he available for hire?",
  "What tech stack does he use?",
  "Why should we hire him?",
];

function getAiResponse(input: string): string {
  const q = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|yo|sup|greetings|howdy)/.test(q)) {
    return `Hey there! 👋 I'm Hunain's AI assistant. I know everything about his skills, experience, and projects. What would you like to know about him?`;
  }

  // Skills / tech stack
  if (/skill|tech|stack|technolog|tool|language|framework|what (does|can) he (use|know|work)|proficien/.test(q)) {
    return `Hunain is a **full-stack powerhouse**. Here's his arsenal:\n\n**Core Stack (MERN):**\nMongoDB • Express.js • React.js • Node.js\n\n**Languages:** ${HUNAIN_DATA.languages.join(", ")}\n\n**Frameworks:** ${HUNAIN_DATA.frameworks.join(", ")}\n\n**Databases:** ${HUNAIN_DATA.databases.join(", ")}\n\n**DevOps:** ${HUNAIN_DATA.devops.join(", ")}\n\nHe's not just proficient — he architects entire systems from database design to deployment pipelines.`;
  }

  // Experience
  if (/experience|background|career|work history|how long|years|journey|resume|cv/.test(q)) {
    return `Hunain has **${HUNAIN_DATA.experience} of professional experience** as a software engineer.\n\n**Current:** Senior Software Engineer — leading full-stack development, architecture decisions, and team mentoring.\n\n**Key achievements:**\n• Led architecture redesign reducing API response times by 60%\n• Established CI/CD pipelines and code review practices\n• Mentored a team of 4 junior developers\n• Delivered 10+ client projects on time and within budget\n\nHe's grown from a junior developer to a senior engineer who drives technical strategy.`;
  }

  // Projects
  if (/project|portfolio|built|create|develop|made|work on|showcase|app/.test(q)) {
    return `Hunain has delivered **${HUNAIN_DATA.projects}** across multiple domains:\n\n🛒 **E-Commerce Platform** — Full-stack with real-time inventory, Stripe payments, multi-vendor support\n\n📋 **Project Management Tool** — Real-time Kanban boards with team collaboration via Socket.io\n\n📊 **Social Media Dashboard** — Multi-platform analytics aggregation with data visualization\n\n💬 **Real-Time Chat App** — E2E encrypted messaging with WebRTC video calls\n\n🔧 **Microservices API** — Fintech-grade architecture with RabbitMQ message queues\n\n📝 **CMS & Blog Platform** — Next.js with MDX, SSG/ISR, perfect Lighthouse scores\n\nEach project demonstrates clean architecture, scalability, and production-grade quality.`;
  }

  // Availability / hire
  if (/available|hire|hiring|recruit|opportunit|open to|looking|freelance|contract|full.?time|remote|on.?site|engage/.test(q)) {
    return `Great news — **Hunain is currently open to new opportunities!** 🎯\n\n**Available for:**\n• Full-time positions (remote or on-site)\n• Contract engagements\n• Freelance projects\n\n**What he brings:**\n• 5+ years of battle-tested experience\n• End-to-end MERN stack expertise\n• Leadership & mentoring capabilities\n• Production-grade code quality\n\n📧 Reach out at **${HUNAIN_DATA.email}** or use the contact form below. He typically responds within 24 hours!`;
  }

  // Why hire / strengths / what makes him special
  if (/why.*(hire|choose|pick|consider)|what makes|special|unique|stand out|strength|different|better|value|bring/.test(q)) {
    return `Here's why companies love working with Hunain:\n\n**🏗️ Architect-Level Thinking** — He doesn't just write code, he designs systems. 60% API performance improvement through architecture redesign.\n\n**🚀 Full-Stack Ownership** — From MongoDB schemas to React UIs to Docker deployments. No handoffs needed.\n\n**👥 Team Multiplier** — He mentors juniors, establishes best practices, and raises the bar for entire teams.\n\n**📦 Shipping Velocity** — 20+ projects delivered on time. He balances speed with quality.\n\n**🧪 Quality Obsessed** — TDD, 85%+ test coverage, CI/CD pipelines, thorough code reviews.\n\n**🔄 Polyglot Developer** — MERN specialist but experienced across multiple languages. Right tool for the right job.\n\nHe's the engineer you hire when you want someone who can lead, build, and ship independently.`;
  }

  // Education
  if (/education|degree|university|college|study|school|learn|certif/.test(q)) {
    return `Hunain has a strong educational foundation complemented by continuous learning:\n\n• Formal education in Computer Science / Software Engineering\n• Continuously upskilling through industry certifications and courses\n• Active in the developer community — stays current with latest patterns and tools\n• Believes in learning by building — his 20+ projects are his best credentials\n\nIn tech, what you've **built** matters more than where you studied — and his portfolio speaks volumes.`;
  }

  // Soft skills / leadership / team
  if (/soft skill|leader|team|mentor|communicat|collaborat|manage|agile|scrum/.test(q)) {
    return `Beyond technical expertise, Hunain is a **proven team leader**:\n\n**Leadership:** ${HUNAIN_DATA.softSkills.join(" • ")}\n\n**Specifics:**\n• Mentored 4 junior developers into mid-level engineers\n• Led agile ceremonies and sprint planning\n• Established code review culture improving team code quality\n• Excellent written and verbal communication\n• Bridges the gap between technical and business stakeholders\n\nHe's the kind of engineer who elevates everyone around him.`;
  }

  // Contact
  if (/contact|email|reach|connect|talk|message|get in touch|call/.test(q)) {
    return `You can reach Hunain through:\n\n📧 **Email:** ${HUNAIN_DATA.email}\n💼 **LinkedIn:** linkedin.com/in/hunainparekh\n🐙 **GitHub:** github.com/hunainparekh\n\nOr scroll down to the **Contact section** and send a message directly from this site!\n\nHe typically responds within 24 hours. Don't be shy — he loves hearing about interesting projects and opportunities!`;
  }

  // Salary / rate
  if (/salary|rate|cost|charge|pricing|compensation|pay|budget|money/.test(q)) {
    return `Compensation depends on the role, scope, and engagement type. Hunain is flexible and values:\n\n• **Interesting technical challenges** over top-dollar offers\n• **Great teams and culture** as much as compensation\n• **Growth opportunities** and impact\n\nFor specific discussions around compensation, the best approach is to **reach out directly** at ${HUNAIN_DATA.email}. He's very reasonable and believes in finding mutual fit!`;
  }

  // Hobbies / personal
  if (/hobby|hobbies|personal|fun|free time|outside work|interest|passion/.test(q)) {
    return `When Hunain's not building software, he's:\n\n• 📚 **Exploring new technologies** — always tinkering with the latest frameworks\n• 🌐 **Contributing to open source** — giving back to the community\n• ✍️ **Writing technical content** — sharing knowledge with other developers\n• 🎯 **Solving coding challenges** — keeps his problem-solving sharp\n\nHis passion for tech extends well beyond 9-to-5!`;
  }

  // Catch-all / unknown
  return `That's a great question! While I might not have the exact answer, here's what I can tell you about Hunain:\n\n• **${HUNAIN_DATA.experience}** of professional experience\n• **${HUNAIN_DATA.projects}** successfully delivered\n• Specialist in **${HUNAIN_DATA.focus}**\n• Currently **open to new opportunities**\n\nFor specific questions, feel free to reach out directly at **${HUNAIN_DATA.email}** — he'd love to chat!\n\nYou can also ask me about his **skills**, **projects**, **experience**, or **why you should hire him**!`;
}

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

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    setMessages((prev) => [...prev, { role: "user", text: messageText }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const response = getAiResponse(messageText);
      setMessages((prev) => [...prev, { role: "ai", text: response }]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 flex items-center justify-center border border-[var(--color-accent)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)] shadow-2xl hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-all duration-300 group"
        style={{
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 40px var(--color-accent-glow)",
        }}
        aria-label="Chat with AI assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute inset-0 border border-[var(--color-accent)] rounded-none"
          />
        )}
      </motion.button>

      {/* Notification badge */}
      <AnimatePresence>
        {!isOpen && messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ delay: 4, duration: 0.5 }}
            className="fixed bottom-[88px] right-6 z-[100] bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-4 py-3 max-w-[240px] shadow-xl"
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
            className="fixed bottom-24 right-6 z-[100] w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-120px)] flex flex-col border border-[var(--color-border)] bg-[var(--color-bg)] shadow-2xl overflow-hidden"
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
