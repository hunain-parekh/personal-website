"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiNestjs, SiGit, SiPostgresql } from "react-icons/si";
import { FaQuoteLeft } from "react-icons/fa";

const techStack = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
  { name: "Express", Icon: SiExpress, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "MongoDB", Icon: SiMongodb, color: "#00ED64" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden">
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
            01
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Row 1: Big statement + Featured photo */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-24">
          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light leading-[1.2] text-[var(--color-text)] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Crafting <span className="text-gradient font-semibold">digital experiences</span> that
              merge elegant code with{" "}
              <span className="text-gradient font-semibold">impactful solutions</span>
            </h3>
            <p className="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed">
              I&apos;m a Senior Software Engineer with 5+ years of experience building full-stack web applications
              using React.js, Next.js, Node.js, Nest.js, and MongoDB. I bring a complete perspective to every challenge.
            </p>
          </motion.div>

          {/* Featured photo - Deep Focus */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative group"
          >
            <div className="relative aspect-[16/10] overflow-hidden border border-[var(--color-border)]/50">
              <Image
                src="/about-2.jpg"
                alt="Hunain focused with headphones at the office"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)] opacity-60" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] opacity-60" />

              {/* Label */}
              <div className="absolute bottom-4 left-4">
                <span className="text-[var(--color-accent)] text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  Deep Focus
                </span>
              </div>
            </div>

            {/* Offset frame */}
            <div className="absolute -inset-3 border border-[var(--color-accent)]/20 -z-10" />
          </motion.div>
        </div>

        {/* Row 2: Two photos + Stats in between */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {/* Photo - Late Night Build */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--color-border)]/50">
              <Image
                src="/about-1.jpg"
                alt="Hunain coding at his workstation with dual monitors"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)] opacity-50" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[var(--color-accent)] text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  Late Night Build
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "5", label: "Companies Worked" },
                { value: "16+", label: "Certifications" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-4 text-center group hover:border-[var(--color-accent)]/40 transition-colors duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                    {stat.value}
                  </div>
                  <div className="text-[8px] text-[var(--color-text-dim)] tracking-[0.15em] uppercase mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo - In The Zone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:col-span-4 relative group"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--color-border)]/50">
              <Image
                src="/about-4.jpg"
                alt="Hunain coding in a collaborative office environment"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)] opacity-50" />
              <div className="absolute bottom-3 right-3">
                <span className="text-[var(--color-accent)] text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  In The Zone
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Quote + Wide photo + Tech stack */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {/* Quote block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="relative">
              <FaQuoteLeft className="text-[var(--color-accent)] opacity-20 text-4xl mb-4" />
              <p className="text-[var(--color-text)] text-lg sm:text-xl leading-relaxed font-light italic" style={{ fontFamily: "var(--font-display)" }}>
                Skilled in creating <span className="text-[var(--color-accent)] not-italic font-medium">scalable, high-performance</span>, and user-centric digital solutions with modern web technologies and cloud integrations.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-px bg-[var(--color-accent)]" />
                <span className="text-[var(--color-text-dim)] text-xs tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                  HUNAIN PAREKH
                </span>
              </div>
            </div>
          </motion.div>

          {/* Wide workspace photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-8 relative group"
          >
            <div className="relative aspect-[21/9] overflow-hidden border border-[var(--color-border)]/50">
              <Image
                src="/about-3.jpg"
                alt="Dual laptop coding setup with notes"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/50 via-transparent to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[var(--color-accent)] opacity-50" />
              <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[var(--color-accent)] opacity-50" />
              <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[var(--color-accent)] opacity-50" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[var(--color-accent)] opacity-50" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-[var(--color-bg)]/80 backdrop-blur-sm px-3 py-1.5 border border-[var(--color-border)]/50">
                <span className="text-[var(--color-accent)] text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  Workspace
                </span>
              </div>

              {/* Scanning line */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatDelay: 3 }}
                className="absolute top-0 bottom-0 w-[2px] opacity-20"
                style={{
                  background: "linear-gradient(to bottom, transparent, var(--color-accent), transparent)",
                  boxShadow: "0 0 20px var(--color-accent)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Row 4: Tech stack + Terminal + Achievements */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Tech Arsenal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="lg:col-span-1"
          >
            <div className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-5" style={{ fontFamily: "var(--font-mono)" }}>
              Tech Arsenal
            </div>
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + i * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2.5 px-3 py-2.5 border border-[var(--color-border)]/40 bg-[var(--color-bg-elevated)] hover:border-[var(--color-accent)]/40 transition-all duration-300 group"
                >
                  <tech.Icon className="w-4 h-4 flex-shrink-0" style={{ color: tech.color }} />
                  <span className="text-[11px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1 }}
            className="lg:col-span-1"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-5 h-full relative">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-[11px] leading-relaxed space-y-1.5" style={{ fontFamily: "var(--font-mono)" }}>
                <p><span className="text-[var(--color-accent)]">const</span> <span className="text-[var(--color-text)]">engineer</span> = {"{"}</p>
                <p className="pl-3"><span className="text-[var(--color-text-dim)]">role:</span> <span className="text-green-400">&quot;Senior Engineer&quot;</span>,</p>
                <p className="pl-3"><span className="text-[var(--color-text-dim)]">focus:</span> <span className="text-green-400">&quot;React + Node&quot;</span>,</p>
                <p className="pl-3"><span className="text-[var(--color-text-dim)]">passion:</span> <span className="text-green-400">&quot;Clean Code&quot;</span>,</p>
                <p className="pl-3"><span className="text-[var(--color-text-dim)]">status:</span> <span className="text-cyan-400">&quot;Building...&quot;</span></p>
                <p>{"};"}</p>
              </div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[var(--color-accent)] opacity-30" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[var(--color-accent)] opacity-30" />
            </div>
          </motion.div>

          {/* Highlights + Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Highlights */}
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-5">
              <div className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                Key Highlights
              </div>
              <div className="space-y-2.5">
                {[
                  "500+ employers onboarded (ABHI)",
                  "100K+ events in <30ms (Timeline)",
                  "Microservices with NestJS",
                  "Azure OpenAI integrations",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0" />
                    <span className="text-sm text-[var(--color-text-muted)]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Philosophy tags */}
            <div className="flex flex-wrap gap-2">
              {["Agile & Scrum", "REST APIs", "GraphQL", "WebSockets", "AWS", "CI/CD"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.4 + i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-2.5 py-1 text-[9px] tracking-wider border border-[var(--color-border)]/40 text-[var(--color-text-dim)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-all duration-300 cursor-default"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
