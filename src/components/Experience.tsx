"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Current Position",
    period: "2022 — Present",
    description:
      "Leading development of complex full-stack applications using the MERN stack. Architecting scalable solutions, mentoring junior developers, and driving best practices across the engineering team.",
    achievements: [
      "Led architecture redesign reducing API response times by 60%",
      "Established code review practices and CI/CD pipelines",
      "Mentored team of 4 junior developers",
      "Implemented microservices pattern for improved scalability",
    ],
    tech: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    period: "2020 — 2022",
    description:
      "Built and maintained multiple web applications across diverse client projects. Collaborated with cross-functional teams to deliver solutions from concept to deployment.",
    achievements: [
      "Delivered 10+ client projects on time and within budget",
      "Developed real-time features using WebSocket technology",
      "Reduced frontend bundle size by 40% through optimization",
      "Introduced automated testing improving code coverage to 85%",
    ],
    tech: ["React", "Express.js", "PostgreSQL", "Docker", "Redux"],
  },
  {
    role: "Junior Developer",
    company: "Starting Point",
    period: "2019 — 2020",
    description:
      "Started professional career building web applications and learning industry best practices. Rapidly grew skills across the full stack while contributing to production applications.",
    achievements: [
      "Built responsive UIs for 5+ production applications",
      "Learned and applied agile methodologies",
      "Contributed to open-source projects",
      "Developed REST APIs serving 10K+ daily requests",
    ],
    tech: ["JavaScript", "React", "Node.js", "MongoDB", "CSS3"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 border-2 border-[var(--color-accent)] bg-[var(--color-bg)] rounded-full" />

                {/* Period badge */}
                <div
                  className="text-[11px] text-[var(--color-accent)] tracking-[0.15em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {exp.period}
                </div>

                {/* Role & Company */}
                <h3
                  className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {exp.role}
                </h3>
                <p
                  className="text-sm text-[var(--color-text-muted)] mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  @ {exp.company}
                </p>

                {/* Description */}
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-5 max-w-2xl font-light">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2 mb-5">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] mt-1.5 text-[8px]">
                        &#9654;
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)] font-light">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] tracking-wider border border-[var(--color-border)] text-[var(--color-text-dim)] hover:border-[var(--color-accent-dim)] hover:text-[var(--color-accent)] transition-all duration-300"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
