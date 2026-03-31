"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaGraduationCap, FaBook, FaLaptopCode, FaGlobe } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const highlights = [
  { icon: FaLaptopCode, label: "Computer Science", desc: "Core Focus" },
  { icon: FaGlobe, label: "Online Learning", desc: "Flexible Study" },
  { icon: FaBook, label: "Self-Paced", desc: "Work & Study" },
  { icon: HiAcademicCap, label: "Accredited", desc: "US University" },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #5B4B8A 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="text-[var(--color-accent)] text-sm"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            02
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Education
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main Education Card - spans 8 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-8 relative overflow-hidden h-full">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B4B8A] via-[var(--color-accent)] to-transparent" />

              <div className="flex flex-col md:flex-row gap-8">
                {/* University Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <div className="relative w-32 h-32 md:w-40 md:h-40 border border-[var(--color-border)]/50 bg-[#f5f4f6] flex items-center justify-center overflow-hidden group">
                    <Image
                      src="/uopeople-education-logo.jpg"
                      alt="University of the People Logo"
                      fill
                      className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#5B4B8A] opacity-60" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#5B4B8A] opacity-60" />
                  </div>
                </motion.div>

                {/* Details */}
                <div className="flex-1">
                  {/* Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3 mb-3"
                  >
                    <div className="w-8 h-8 border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <FaGraduationCap className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                      Currently Pursuing
                    </span>
                  </motion.div>

                  {/* Degree */}
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Bachelor of Science in <span className="text-gradient">Computer Science</span>
                  </h3>

                  {/* University */}
                  <p className="text-lg text-[var(--color-text-muted)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                    University of the People
                  </p>

                  {/* Info tags */}
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30">
                      <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
                      <span className="text-[var(--color-accent)] text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                        In Progress
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border)]/50 bg-[var(--color-bg)]">
                      <span className="text-[var(--color-text-dim)] text-xs tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                        Tuition-Free University
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border)]/50 bg-[var(--color-bg)]">
                      <span className="text-[var(--color-text-dim)] text-xs tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                        United States
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] opacity-30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-30" />
            </div>
          </motion.div>

          {/* Highlights Grid - spans 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-5 flex flex-col items-center justify-center text-center group hover:border-[var(--color-accent)]/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 border border-[var(--color-border)]/50 bg-[var(--color-bg)] flex items-center justify-center mb-3 group-hover:border-[var(--color-accent)]/50 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="text-sm text-[var(--color-text)] font-medium mb-1" style={{ fontFamily: "var(--font-body)" }}>
                    {item.label}
                  </div>
                  <div className="text-[9px] text-[var(--color-text-dim)] tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Stats - full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="col-span-12"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 relative">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left side - Statement */}
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-xl">
                  Committed to continuous learning while building real-world experience.
                  Balancing professional work with academic excellence.
                </p>

                {/* Right side - Stats */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-center px-5 py-3 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 min-w-[100px]">
                    <div className="text-2xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                      60
                    </div>
                    <div className="text-[8px] text-[var(--color-text-dim)] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                      Credits Done
                    </div>
                  </div>
                  <div className="text-center px-5 py-3 border border-[var(--color-border)]/50 bg-[var(--color-bg)] min-w-[100px]">
                    <div className="text-2xl font-bold text-[var(--color-text)]" style={{ fontFamily: "var(--font-display)" }}>
                      60
                    </div>
                    <div className="text-[8px] text-[var(--color-text-dim)] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                      Remaining
                    </div>
                  </div>
                  <div className="text-center px-5 py-3 border border-[var(--color-border)]/50 bg-[var(--color-bg)] min-w-[100px]">
                    <div className="text-2xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                      100%
                    </div>
                    <div className="text-[8px] text-[var(--color-text-dim)] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                      Scholarship
                    </div>
                  </div>
                  <div className="text-center px-5 py-3 border border-[#5B4B8A]/30 bg-[#5B4B8A]/5 min-w-[100px]">
                    <div className="text-xl font-bold text-[#9D8EC9]" style={{ fontFamily: "var(--font-display)" }}>
                      Dec 2027
                    </div>
                    <div className="text-[8px] text-[var(--color-text-dim)] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                      Expected Grad
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-[var(--color-text-dim)] tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                    DEGREE PROGRESS
                  </span>
                  <span className="text-[10px] text-[var(--color-accent)]" style={{ fontFamily: "var(--font-mono)" }}>
                    50%
                  </span>
                </div>
                <div className="h-2 bg-[var(--color-border)]/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: "50%" } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #5B4B8A, var(--color-accent))" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
