"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroPortrait from "./HeroPortrait";
import { SiMongodb, SiReact, SiNodedotjs, SiTypescript, SiNestjs, SiNextdotjs } from "react-icons/si";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden !p-0">
      {/* Full-page photo on the right half (desktop only) */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <HeroPortrait />
      </div>

      {/* Ambient background effects (left side) */}
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

      {/* Text content — left half */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-6 sm:px-10 lg:pl-16 xl:pl-24 pt-24 pb-16">
          <div className="lg:w-1/2 lg:pr-8">
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
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-2"
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
                5+ Years Experience
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-xl leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Building full-stack web applications with React.js, Next.js, Node.js,
              Nest.js, and MongoDB. Skilled in creating scalable, high-performance,
              and user-centric digital solutions.
            </motion.p>

            {/* Technology icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-5 mb-10"
            >
              {[
                { name: "React", color: "#61DAFB", Icon: SiReact },
                { name: "Next.js", color: "#ffffff", Icon: SiNextdotjs },
                { name: "Node.js", color: "#339933", Icon: SiNodedotjs },
                { name: "Nest.js", color: "#E0234E", Icon: SiNestjs },
                { name: "MongoDB", color: "#00ED64", Icon: SiMongodb },
                { name: "TypeScript", color: "#3178C6", Icon: SiTypescript },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.15 }}
                  className="group relative cursor-default"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] transition-all duration-300 group-hover:border-[var(--color-accent)]/50"
                    style={{ color: tech.color }}
                  >
                    <tech.Icon className="w-5 h-5" />
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--color-bg-elevated)] border border-[var(--color-border)]/50 text-[9px] text-[var(--color-text-dim)] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 border border-[var(--color-accent)] text-[var(--color-accent)] text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:text-[var(--color-bg)]"
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
                href="/resume.pdf"
                download
                className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm tracking-widest uppercase overflow-hidden transition-colors duration-500 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
              >
                <svg
                  className="relative z-10 w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
                </svg>
                <span className="relative z-10">Resume</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 text-[var(--color-text-muted)] text-sm tracking-widest uppercase hover:text-[var(--color-text)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem" }}
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-3"
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
