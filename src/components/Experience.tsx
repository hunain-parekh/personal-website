"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FaBriefcase, FaCalendarAlt, FaChevronRight } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Hashone Global",
    period: "Aug 2025 — Present",
    type: "Full-time",
    logo: "/company-hashone.jpeg",
    description:
      "A product-driven tech company delivering AI-powered and cloud-integrated solutions. Developing and integrating multi-platform communication workflows with intelligent automation.",
    achievements: [
      "Developed WhatsApp, Bitrix24, and VAPI integrations for seamless communication",
      "Implemented Azure OpenAI services for AI-driven responses",
      "Integrated AWS S3 for scalable storage and file management",
      "Built real-time chat and notification features using WebSockets",
    ],
    tech: ["Node.js", "Azure OpenAI", "AWS S3", "WebSockets", "Bitrix24"],
    color: "#00ED64",
  },
  {
    role: "Full Stack Developer",
    company: "Blackhawk DM",
    period: "Oct 2024 — July 2025",
    type: "Remote",
    logo: "/company-blackhawk.jpeg",
    description:
      "A tech company specializing in modern web solutions and dynamic platforms. Developed a dynamic website builder with microservices architecture.",
    achievements: [
      "Built dynamic website builder with MERN stack and 10+ React templates",
      "Designed microservices architecture using NestJS and TypeScript",
      "Managed inter-service communication using RabbitMQ",
      "Created modular form builder with React Hook Form and Yup",
    ],
    tech: ["Next.js", "NestJS", "GraphQL", "RabbitMQ", "TypeScript"],
    color: "#61DAFB",
  },
  {
    role: "Software Engineer",
    company: "Xloop Digital Services",
    period: "Nov 2022 — Oct 2024",
    type: "Full-time",
    logo: "/company-xloop.png",
    description:
      "A digital agency delivering full-stack web applications and SaaS products. Led development of multiple enterprise platforms serving international clients.",
    achievements: [
      "Built ABHI platform frontend, onboarding 500+ employers in UAE & Bangladesh",
      "Developed Gov Finder (Next.js + Tailwind) for US government database",
      "Built high-performance Timeline chart rendering 100K+ events in <30ms",
      "Led full-stack dev of Recourse Loop ATS with Outlook integration",
    ],
    tech: ["React", "Next.js", "TypeScript", "Vis.js", "Material UI"],
    color: "#E0234E",
  },
  {
    role: ".NET Developer",
    company: "Cloud Data",
    period: "Jan 2022 — Nov 2022",
    type: "Full-time",
    logo: "/company-clouddata.jpeg",
    description:
      "Enterprise software solutions provider for manufacturing and logistics. Developed inventory and courier management systems.",
    achievements: [
      "Built Stock Management System managing 10,000+ products with barcode integration",
      "Developed Courier Management System with Google Maps API tracking",
    ],
    tech: [".NET", "SQL Server", "Google Maps API", "C#"],
    color: "#512BD4",
  },
  {
    role: "Assistant IT Manager",
    company: "Global Clicks",
    period: "Sep 2021 — Jan 2022",
    type: "Full-time",
    logo: "/company-globalclicks.jpeg",
    description:
      "Content and digital marketing firm. Automated internal workflows and managed IT support.",
    achievements: [
      "Built Laravel-based Leave Application Module for 100+ employees",
      "Managed internal IT support and optimized department workflows",
    ],
    tech: ["Laravel", "PHP", "MySQL", "IT Support"],
    color: "#FF2D20",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="relative overflow-hidden">
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

      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #E0234E 0%, transparent 60%)" }}
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
            04
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experience
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "5", label: "Companies" },
            { value: "50+", label: "Projects Delivered" },
            { value: "4", label: "Countries Served" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-5 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-1" style={{ fontFamily: "var(--font-display)" }}>
                {stat.value}
              </div>
              <div className="text-[9px] text-[var(--color-text-dim)] tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Experience Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Company Selector - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-2 sticky top-24">
              {experiences.map((exp, i) => (
                <motion.button
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left p-4 flex items-center gap-4 transition-all duration-300 group ${
                    activeIndex === i
                      ? "bg-[var(--color-accent)]/10 border-l-2 border-[var(--color-accent)]"
                      : "hover:bg-[var(--color-bg)] border-l-2 border-transparent"
                  }`}
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center border overflow-hidden transition-all duration-300 ${
                      activeIndex === i
                        ? "border-[var(--color-accent)]/50"
                        : "border-[var(--color-border)]/50 group-hover:border-[var(--color-accent)]/30"
                    }`}
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm font-medium truncate transition-colors duration-300 ${
                        activeIndex === i ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)]"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {exp.company}
                    </div>
                    <div className="text-[10px] text-[var(--color-text-dim)] truncate" style={{ fontFamily: "var(--font-mono)" }}>
                      {exp.period}
                    </div>
                  </div>
                  <FaChevronRight
                    className={`w-3 h-3 transition-all duration-300 ${
                      activeIndex === i ? "text-[var(--color-accent)] translate-x-0" : "text-transparent -translate-x-2"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Details - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-8 relative overflow-hidden">
              {/* Top accent line with company color */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
                style={{ background: `linear-gradient(90deg, ${experiences[activeIndex].color}, var(--color-accent), transparent)` }}
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <motion.div
                    key={`role-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-2"
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center border border-[var(--color-accent)]/50"
                      style={{ backgroundColor: `${experiences[activeIndex].color}15` }}
                    >
                      <FaBriefcase className="w-4 h-4" style={{ color: experiences[activeIndex].color }} />
                    </div>
                    <span className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                      {experiences[activeIndex].type}
                    </span>
                  </motion.div>

                  <motion.h3
                    key={`title-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {experiences[activeIndex].role}
                  </motion.h3>

                  <motion.p
                    key={`company-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-lg"
                    style={{ color: experiences[activeIndex].color, fontFamily: "var(--font-body)" }}
                  >
                    @ {experiences[activeIndex].company}
                  </motion.p>
                </div>

                <motion.div
                  key={`period-${activeIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 px-4 py-2 border border-[var(--color-border)]/50 bg-[var(--color-bg)]"
                >
                  <FaCalendarAlt className="w-3 h-3 text-[var(--color-accent)]" />
                  <span className="text-xs text-[var(--color-text-dim)]" style={{ fontFamily: "var(--font-mono)" }}>
                    {experiences[activeIndex].period}
                  </span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[var(--color-text-muted)] text-base leading-relaxed mb-6"
              >
                {experiences[activeIndex].description}
              </motion.p>

              {/* Achievements */}
              <motion.div
                key={`achievements-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mb-6"
              >
                <div className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                  Key Achievements
                </div>
                <ul className="space-y-3">
                  {experiences[activeIndex].achievements.map((achievement, i) => (
                    <motion.li
                      key={achievement}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: experiences[activeIndex].color }}
                      />
                      <span className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300">
                        {achievement}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                key={`tech-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                  Technologies Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeIndex].tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45 + i * 0.03 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-[11px] tracking-wider border border-[var(--color-border)]/50 bg-[var(--color-bg)] text-[var(--color-text-dim)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-all duration-300 cursor-default"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] opacity-30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
