"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with real-time inventory management, payment gateway integration, and an admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    category: "Full Stack",
    highlights: ["Real-time inventory sync", "Multi-vendor support", "99.9% uptime"],
    mockup: {
      type: "dashboard" as const,
      accent: "#d4a853",
    },
  },
  {
    title: "Project Management Tool",
    description:
      "Collaborative project management platform with Kanban boards, real-time updates, team chat, and analytics dashboards.",
    tech: ["Next.js", "Socket.io", "MongoDB", "Express", "Tailwind CSS"],
    category: "Full Stack",
    highlights: ["Real-time collaboration", "Drag-and-drop boards", "Team analytics"],
    mockup: {
      type: "kanban" as const,
      accent: "#61DAFB",
    },
  },
  {
    title: "Social Media Dashboard",
    description:
      "Unified social media management dashboard that aggregates analytics, schedules posts, and provides AI-powered content suggestions.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Chart.js"],
    category: "Frontend Heavy",
    highlights: ["Multi-platform API", "Scheduled posting", "Data visualization"],
    mockup: {
      type: "analytics" as const,
      accent: "#a78bfa",
    },
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Feature-rich messaging app supporting DMs, group chats, file sharing, and video calls with end-to-end encryption.",
    tech: ["React", "Socket.io", "MongoDB", "WebRTC", "Express"],
    category: "Full Stack",
    highlights: ["E2E encryption", "Video/voice calls", "File sharing"],
    mockup: {
      type: "chat" as const,
      accent: "#34d399",
    },
  },
  {
    title: "REST API Microservices",
    description:
      "Scalable microservices architecture powering a fintech app with auth, transaction processing, and notification services.",
    tech: ["Node.js", "Express", "MongoDB", "Docker", "RabbitMQ", "JWT"],
    category: "Backend",
    highlights: ["Microservices architecture", "Message queues", "Auto-scaling"],
    mockup: {
      type: "api" as const,
      accent: "#f59e0b",
    },
  },
  {
    title: "Portfolio & Blog CMS",
    description:
      "A headless CMS-powered personal website with MDX blog support, dynamic content management, and SEO optimization.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "MDX"],
    category: "Full Stack",
    highlights: ["SSG/ISR rendering", "MDX blog engine", "Perfect Lighthouse"],
    mockup: {
      type: "website" as const,
      accent: "#f472b6",
    },
  },
];

function ProjectMockup({ type, accent, isHovered }: { type: string; accent: string; isHovered: boolean }) {
  return (
    <div className="relative w-full h-40 bg-[var(--color-bg)] border-b border-[var(--color-border)] overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-bg-card)] border-b border-[var(--color-border)]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
        <div className="ml-2 flex-1 h-3 bg-[var(--color-surface)] rounded-full max-w-[120px]" />
      </div>

      {/* Content area — different for each type */}
      <div className="p-3 h-[calc(100%-28px)] relative">
        {type === "dashboard" && (
          <div className="flex gap-2 h-full">
            {/* Sidebar */}
            <div className="w-8 flex flex-col gap-1.5 pt-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={isHovered ? { width: "100%" } : { width: "60%" }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="h-1 rounded-full"
                  style={{ backgroundColor: i === 0 ? accent : "var(--color-border)" }}
                />
              ))}
            </div>
            {/* Main content */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={isHovered ? { scaleY: 1 } : { scaleY: 0.6 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex-1 h-12 rounded-sm border border-[var(--color-border)] origin-bottom"
                    style={{ backgroundColor: i === 1 ? `${accent}15` : "var(--color-surface)" }}
                  />
                ))}
              </div>
              {/* Chart bars */}
              <div className="flex-1 flex items-end gap-1 px-1">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={isHovered ? { height: `${h}%` } : { height: `${h * 0.4}%` }}
                    transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 rounded-t-sm"
                    style={{ backgroundColor: i % 3 === 0 ? accent : `${accent}40` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {type === "kanban" && (
          <div className="flex gap-2 h-full">
            {["To Do", "Progress", "Done"].map((col, ci) => (
              <div key={col} className="flex-1 flex flex-col gap-1.5">
                <div className="h-1 rounded-full mb-1" style={{ backgroundColor: ci === 1 ? accent : "var(--color-border)", width: "60%" }} />
                {[...Array(ci === 1 ? 2 : 3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.5, x: 0 }}
                    transition={{ delay: ci * 0.1 + i * 0.05, duration: 0.3 }}
                    className="h-5 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]"
                    style={ci === 1 && i === 0 ? { borderLeftColor: accent, borderLeftWidth: 2 } : {}}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {type === "analytics" && (
          <div className="h-full flex flex-col gap-2">
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex-1 h-8 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center"
                >
                  <div className="w-4 h-1 rounded-full" style={{ backgroundColor: i === 0 ? accent : "var(--color-border)" }} />
                </motion.div>
              ))}
            </div>
            {/* Wave chart */}
            <div className="flex-1 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <motion.path
                  d="M0,40 C20,35 40,15 60,25 C80,35 100,10 120,20 C140,30 160,5 180,15 L200,20 L200,60 L0,60Z"
                  fill={`${accent}15`}
                  stroke={accent}
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isHovered ? { pathLength: 1, opacity: 1 } : { pathLength: 0.5, opacity: 0.4 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </svg>
            </div>
          </div>
        )}

        {type === "chat" && (
          <div className="h-full flex flex-col justify-end gap-1.5">
            {[
              { align: "left", w: "60%" },
              { align: "right", w: "45%" },
              { align: "left", w: "70%" },
              { align: "right", w: "50%" },
            ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.align === "right" ? 10 : -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.4, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex"
                style={{ justifyContent: msg.align === "right" ? "flex-end" : "flex-start" }}
              >
                <div
                  className="h-4 rounded-lg"
                  style={{
                    width: msg.w,
                    backgroundColor: msg.align === "right" ? `${accent}25` : "var(--color-surface)",
                    border: `1px solid ${msg.align === "right" ? `${accent}40` : "var(--color-border)"}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {type === "api" && (
          <div className="h-full flex flex-col gap-1.5">
            {[
              { method: "GET", status: "200", path: "/api/users" },
              { method: "POST", status: "201", path: "/api/auth" },
              { method: "PUT", status: "200", path: "/api/data" },
              { method: "DEL", status: "204", path: "/api/cache" },
            ].map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.3, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="flex items-center gap-2 h-5 px-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm"
                style={{ fontFamily: "var(--font-mono)", fontSize: "6px" }}
              >
                <span style={{ color: accent, fontWeight: 700 }}>{req.method}</span>
                <span className="text-[var(--color-text-dim)] flex-1 truncate">{req.path}</span>
                <span className="text-green-400">{req.status}</span>
              </motion.div>
            ))}
          </div>
        )}

        {type === "website" && (
          <div className="h-full flex flex-col gap-2">
            {/* Hero mockup */}
            <div className="flex gap-2 flex-1">
              <div className="flex-1 flex flex-col justify-center gap-1.5 px-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isHovered ? { width: "80%" } : { width: "50%" }}
                  transition={{ duration: 0.4 }}
                  className="h-2 rounded-full" style={{ backgroundColor: accent }}
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={isHovered ? { width: "60%" } : { width: "35%" }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="h-1 rounded-full bg-[var(--color-border)]"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={isHovered ? { width: "40%" } : { width: "25%" }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="h-3 rounded-sm border mt-1" style={{ borderColor: accent }}
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm"
              />
            </div>
            {/* Grid blocks */}
            <div className="flex gap-1.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={isHovered ? { opacity: 1, scaleY: 1 } : { opacity: 0.3, scaleY: 0.7 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex-1 h-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-sm origin-bottom"
                />
              ))}
            </div>
          </div>
        )}

        {/* Shimmer overlay on hover */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-1/3"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}08, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
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
            03
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Featured Projects
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative border border-[var(--color-border)] bg-[var(--color-bg-elevated)] card-hover overflow-hidden"
            >
              {/* Animated project mockup preview */}
              <ProjectMockup
                type={project.mockup.type}
                accent={project.mockup.accent}
                isHovered={hoveredIdx === i}
              />

              <div className="p-6 sm:p-8">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] opacity-70"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-[var(--color-text-dim)] text-xs"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Project title */}
                <h3
                  className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-5 font-light">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: project.mockup.accent }} />
                      <span
                        className="text-xs text-[var(--color-text-dim)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] tracking-wider border border-[var(--color-border)] text-[var(--color-text-dim)] group-hover:border-[var(--color-accent-dim)] group-hover:text-[var(--color-text-muted)] transition-all duration-300"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px]"
                style={{ backgroundColor: project.mockup.accent }}
                initial={{ width: 0 }}
                animate={{ width: hoveredIdx === i ? "100%" : "0%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-10 h-10 border-t border-r opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ borderColor: project.mockup.accent }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
