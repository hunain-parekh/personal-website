"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroPortrait from "./HeroPortrait";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="cursor-blink" />
      )}
    </span>
  );
}

function FloatingCodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-md"
    >
      {/* Main floating terminal */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative border border-[var(--color-border)] bg-[var(--color-bg-elevated)]/90 backdrop-blur-sm p-5 shadow-2xl"
        style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.6), 0 0 60px var(--color-accent-glow)" }}
      >
        <div className="flex gap-1.5 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div
          className="text-[11px] leading-[1.8] text-[var(--color-text-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
            <span className="text-[#c678dd]">import</span>{" "}
            <span className="text-[var(--color-text)]">{"{ passion }"}</span>{" "}
            <span className="text-[#c678dd]">from</span>{" "}
            <span className="text-green-400">&apos;developer&apos;</span>;
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
            <span className="text-[#c678dd]">import</span>{" "}
            <span className="text-[var(--color-text)]">{"{ creativity }"}</span>{" "}
            <span className="text-[#c678dd]">from</span>{" "}
            <span className="text-green-400">&apos;engineer&apos;</span>;
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
            <br />
            <span className="text-[var(--color-accent)]">const</span>{" "}
            <span className="text-[#61afef]">buildSomething</span> ={" "}
            <span className="text-[#c678dd]">async</span> () =&gt; {"{"}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
            <span className="text-[var(--color-text-dim)]">{"  "}</span>
            <span className="text-[#c678dd]">const</span> result ={" "}
            <span className="text-[#c678dd]">await</span>{" "}
            <span className="text-[#61afef]">combine</span>(
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
            <span className="text-[var(--color-text-dim)]">{"    "}</span>
            passion, creativity
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>
            <span className="text-[var(--color-text-dim)]">{"  "}</span>);
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
            <span className="text-[var(--color-text-dim)]">{"  "}</span>
            <span className="text-[#c678dd]">return</span>{" "}
            <span className="text-[var(--color-accent)]">result</span>;{" "}
            <span className="text-[var(--color-text-dim)]">// magic</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }}>
            {"}"};
          </motion.div>
        </div>
        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--color-accent)] opacity-30" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[var(--color-accent)] opacity-30" />
      </motion.div>

      {/* Floating accent card behind */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [1, -1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 w-24 h-24 border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 -z-10"
      />

      {/* Orbiting dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute -top-8 -left-8 w-[calc(100%+64px)] h-[calc(100%+64px)]"
      >
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-[var(--color-accent-bright)] rounded-full opacity-30" />
      </motion.div>

      {/* Status line */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.6, duration: 0.5 }}
        className="absolute -bottom-10 right-0 flex items-center gap-2"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1.5 h-1.5 bg-green-400 rounded-full"
        />
        <span className="text-[10px] text-[var(--color-text-dim)] tracking-wider">
          ready to build
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden !pt-24 !pb-16">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-60 -left-60 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text content */}
          <div>
            {/* Terminal-style intro line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 flex items-center gap-3"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-[var(--color-accent)] text-sm">$</span>
              <span className="text-[var(--color-text-muted)] text-sm tracking-wider">
                <TypingText text="hello --world" delay={800} />
              </span>
            </motion.div>

            {/* Main name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="block">Hunain</span>
              <span className="block text-gradient">Parekh</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left my-8"
            >
              <div className="glow-line w-full max-w-md" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 mb-10"
            >
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--color-text)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Senior Software Engineer
              </h2>
              <span
                className="text-[var(--color-text-dim)] text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                MERN Stack Specialist
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-xl leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Building robust, scalable applications with a passion for clean architecture
              and exceptional user experiences. Polyglot developer with deep expertise
              in the JavaScript ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[var(--color-accent)] text-[var(--color-accent)] text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:text-[var(--color-bg)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
              >
                <span className="relative z-10">View Work</span>
                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-[var(--color-accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-[var(--color-text-muted)] text-sm tracking-widest uppercase hover:text-[var(--color-text)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Animated SVG portrait */}
          <div className="hidden lg:flex justify-center items-center">
            <HeroPortrait />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-6 hidden md:flex flex-col items-center gap-3"
        >
          <span
            className="text-[var(--color-text-dim)] text-[10px] tracking-[0.3em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              writingMode: "vertical-rl",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
