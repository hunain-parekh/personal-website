"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/about-2.jpg", alt: "Hunain focused with headphones at the office", label: "Deep Focus" },
  { src: "/about-1.jpg", alt: "Hunain coding at his workstation with dual monitors", label: "Late Night Build" },
  { src: "/about-3.jpg", alt: "Dual laptop coding setup with notes", label: "Workspace" },
  { src: "/about-4.jpg", alt: "Hunain coding in a collaborative office environment", label: "In The Zone" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Subtle background accents */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section label */}
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column: Bio text + details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed font-light">
              I&apos;m a Senior Software Engineer who thrives at the intersection of
              elegant code and impactful products. With a strong foundation across
              multiple programming languages and frameworks, I bring a
              versatile, full-stack perspective to every project.
            </p>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-light">
              My current focus is the{" "}
              <span className="text-[var(--color-accent)]">MERN stack</span>{" "}
              — MongoDB, Express.js, React, and Node.js — where I architect and
              build end-to-end solutions that are performant, maintainable, and
              delightful to use. From RESTful APIs to real-time applications, I
              love turning complex requirements into clean, scalable systems.
            </p>
            <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-light">
              Beyond the MERN ecosystem, I have hands-on experience with a
              range of technologies and believe in choosing the right tool
              for the job. I&apos;m passionate about writing code that not only
              works but is a pleasure to read and maintain.
            </p>

            {/* Tech logos row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-6 py-6 border-y border-[var(--color-border)]/50"
            >
              {[
                { name: "MongoDB", color: "#4DB33D", letter: "M" },
                { name: "Express", color: "#8a8578", letter: "Ex" },
                { name: "React", color: "#61DAFB", letter: "Re" },
                { name: "Node.js", color: "#68A063", letter: "N" },
                { name: "TypeScript", color: "#3178C6", letter: "TS" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="flex flex-col items-center gap-1.5 group cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-lg border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] flex items-center justify-center text-sm font-bold transition-all duration-300"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: tech.color,
                    }}
                  >
                    {tech.letter}
                  </div>
                  <span
                    className="text-[8px] text-[var(--color-text-dim)] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Terminal code block */}
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 relative">
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div
                className="text-xs leading-relaxed text-[var(--color-text-muted)] space-y-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <p>
                  <span className="text-[var(--color-accent)]">const</span>{" "}
                  <span className="text-[var(--color-text)]">hunain</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-text-dim)]">role:</span>{" "}
                  <span className="text-green-400">&quot;Sr. Software Engineer&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-text-dim)]">focus:</span>{" "}
                  <span className="text-green-400">&quot;MERN Stack&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-text-dim)]">passion:</span>{" "}
                  <span className="text-green-400">&quot;Clean Code&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[var(--color-text-dim)]">mindset:</span>{" "}
                  <span className="text-green-400">&quot;Build &amp; Ship&quot;</span>,
                </p>
                <p>{"}"}</p>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--color-accent)] opacity-30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[var(--color-accent)] opacity-30" />
            </div>

            {/* Philosophy tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "Clean Architecture",
                "Test-Driven",
                "Agile",
                "CI/CD",
                "Code Review",
                "Mentoring",
              ].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  className="px-3 py-1.5 border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] text-[var(--color-text-dim)] text-xs tracking-wider hover:border-[var(--color-accent-dim)] hover:text-[var(--color-accent)] transition-all duration-300"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right column: Photo mosaic + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Photo mosaic — featured + 3 row layout */}
            <div className="space-y-3">
              {/* Featured large photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative aspect-[16/9] overflow-hidden border border-[var(--color-border)]/50">
                  <Image
                    src={photos[0].src}
                    alt={photos[0].alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span
                      className="text-[10px] text-[var(--color-accent)] tracking-[0.15em] uppercase"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {photos[0].label}
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
              </motion.div>

              {/* 3 photos in a row */}
              <div className="grid grid-cols-3 gap-3">
                {photos.slice(1).map((photo, i) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    className="relative group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden border border-[var(--color-border)]/50">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 33vw, 17vw"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <span
                          className="text-[9px] text-[var(--color-accent)] tracking-[0.15em] uppercase"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {photo.label}
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative accent line under photos */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="origin-left"
            >
              <div className="glow-line w-full" />
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "5+", label: "Years" },
                { value: "20+", label: "Projects" },
                { value: "10+", label: "Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-4 text-center"
                >
                  <div
                    className="text-2xl font-bold text-gradient"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[9px] text-[var(--color-text-dim)] tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 space-y-3">
              <div
                className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Key Achievements
              </div>
              {[
                "Architecture redesign — 60% faster API responses",
                "Established CI/CD pipelines for engineering teams",
                "Mentored 4 junior developers to mid-level",
                "85%+ test coverage across production codebases",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[var(--color-accent)] mt-1.5 text-[8px]">&#9654;</span>
                  <span className="text-sm text-[var(--color-text-muted)] font-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
