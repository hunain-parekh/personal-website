"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FrontendIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <motion.rect
        x="4" y="4" width="32" height="24" rx="2"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.path
        d="M14 14L10 17L14 20"
        stroke="var(--color-accent-bright)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.path
        d="M26 14L30 17L26 20"
        stroke="var(--color-accent-bright)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.line
        x1="22" y1="12" x2="18" y2="22"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0 }}
      />
      <motion.line
        x1="12" y1="32" x2="28" y2="32"
        stroke="var(--color-accent-dim)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <motion.rect
        x="8" y="4" width="24" height="8" rx="2"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.rect
        x="8" y="16" width="24" height="8" rx="2"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.rect
        x="8" y="28" width="24" height="8" rx="2"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      {/* Status dots */}
      <motion.circle cx="13" cy="8" r="1.5" fill="var(--color-accent-bright)"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }} />
      <motion.circle cx="13" cy="20" r="1.5" fill="var(--color-accent-bright)"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }} />
      <motion.circle cx="13" cy="32" r="1.5" fill="var(--color-accent)"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }} />
      {/* Lines representing data */}
      <motion.line x1="18" y1="8" x2="27" y2="8" stroke="var(--color-accent-dim)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.4 }} />
      <motion.line x1="18" y1="20" x2="25" y2="20" stroke="var(--color-accent-dim)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.4 }} />
      <motion.line x1="18" y1="32" x2="23" y2="32" stroke="var(--color-accent-dim)" strokeWidth="1" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.4 }} />
    </svg>
  );
}

function DevOpsIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <motion.circle
        cx="20" cy="20" r="15"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        initial={{ pathLength: 0, rotate: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.path
        d="M20 8 L20 14 M20 26 L20 32 M8 20 L14 20 M26 20 L32 20"
        stroke="var(--color-accent-dim)"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      {/* Center database icon */}
      <motion.ellipse
        cx="20" cy="18" rx="6" ry="3"
        stroke="var(--color-accent-bright)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.0 }}
      />
      <motion.path
        d="M14 18 L14 24 C14 25.7 16.7 27 20 27 C23.3 27 26 25.7 26 24 L26 18"
        stroke="var(--color-accent-bright)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </svg>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    icon: <FrontendIcon />,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux / Zustand", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <BackendIcon />,
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 95 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 75 },
      { name: "Socket.io", level: 80 },
      { name: "Authentication / JWT", level: 90 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: <DevOpsIcon />,
    skills: [
      { name: "MongoDB", level: 95 },
      { name: "PostgreSQL", level: 75 },
      { name: "Redis", level: 70 },
      { name: "Docker", level: 75 },
      { name: "AWS / Cloud", level: 70 },
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD Pipelines", level: 80 },
    ],
  },
];

function SkillBar({
  name,
  level,
  index,
  inView,
}: {
  name: string;
  level: number;
  index: number;
  inView: boolean;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span
          className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors duration-300"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          {name}
        </span>
        <span
          className="text-[10px] text-[var(--color-text-dim)] tracking-wider"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-[2px] bg-[var(--color-border)] relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.1 * index + 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute top-0 left-0 h-full"
          style={{
            background: `linear-gradient(90deg, var(--color-accent-dim), var(--color-accent))`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative">
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
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
            Skills & Tools
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
              className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 sm:p-8 card-hover relative group"
            >
              {/* Category header with animated icon */}
              <div className="flex items-center justify-between mb-8">
                <h3
                  className="text-lg font-semibold text-[var(--color-text)]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {category.title}
                </h3>
                <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  {category.icon}
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i + catIdx * 5}
                    inView={inView}
                  />
                ))}
              </div>

              {/* Accent corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[var(--color-accent)] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
