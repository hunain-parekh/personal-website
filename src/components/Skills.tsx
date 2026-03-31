"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs,
  SiNestjs, SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiMysql,
  SiPrisma, SiAmazon, SiGit, SiDocker, SiRabbitmq, SiRedis
} from "react-icons/si";
import { TbApi, TbBrandSocketIo } from "react-icons/tb";

const frontendSkills = [
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
];

const backendSkills = [
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
  { name: "Express.js", Icon: SiExpress, color: "#ffffff" },
  { name: "REST APIs", Icon: TbApi, color: "#FF6B6B" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "WebSockets", Icon: TbBrandSocketIo, color: "#010101" },
];

const databaseSkills = [
  { name: "MongoDB", Icon: SiMongodb, color: "#00ED64" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
];

const devOpsSkills = [
  { name: "AWS", Icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative overflow-hidden">
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
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #3178C6 0%, transparent 60%)" }}
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
            03
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills & Tools
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main statement - spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-12 lg:col-span-5 row-span-2"
          >
            <div className="h-full border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-5 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-bright)] to-transparent" />

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-light leading-[1.2] text-[var(--color-text)] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Building with <span className="text-gradient font-semibold">modern technologies</span> to create
                <span className="text-gradient font-semibold"> scalable solutions</span>
              </h3>

              <p className="text-[var(--color-text-muted)] text-base leading-relaxed mb-8">
                Expertise in full-stack development with a focus on React ecosystem, Node.js backends,
                and cloud-native architectures. Passionate about clean code and performance optimization.
              </p>

              {/* Terminal style skill summary */}
              <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg)] p-5">
                <div className="flex gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="text-[11px] leading-relaxed space-y-1" style={{ fontFamily: "var(--font-mono)" }}>
                  <p><span className="text-[var(--color-accent)]">const</span> <span className="text-[var(--color-text)]">skills</span> = {"{"}</p>
                  <p className="pl-3"><span className="text-[var(--color-text-dim)]">frontend:</span> <span className="text-green-400">[&quot;React&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;]</span>,</p>
                  <p className="pl-3"><span className="text-[var(--color-text-dim)]">backend:</span> <span className="text-green-400">[&quot;Node&quot;, &quot;Nest&quot;, &quot;GraphQL&quot;]</span>,</p>
                  <p className="pl-3"><span className="text-[var(--color-text-dim)]">database:</span> <span className="text-green-400">[&quot;MongoDB&quot;, &quot;PostgreSQL&quot;]</span>,</p>
                  <p className="pl-3"><span className="text-[var(--color-text-dim)]">cloud:</span> <span className="text-cyan-400">[&quot;AWS&quot;, &quot;Docker&quot;]</span></p>
                  <p>{"};"}</p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] opacity-30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-30" />
            </div>
          </motion.div>

          {/* Frontend - spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 relative group hover:border-[var(--color-accent)]/30 transition-colors duration-500">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#61DAFB] rounded-full" />
                  <span className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    Frontend Development
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-text-dim)]" style={{ fontFamily: "var(--font-mono)" }}>
                  5 technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 border border-[var(--color-border)]/50 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all duration-300 cursor-default"
                  >
                    <skill.Icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Backend - spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 lg:col-span-7"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 relative group hover:border-[var(--color-accent)]/30 transition-colors duration-500">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#339933] rounded-full" />
                  <span className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    Backend Development
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-text-dim)]" style={{ fontFamily: "var(--font-mono)" }}>
                  6 technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 border border-[var(--color-border)]/50 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all duration-300 cursor-default"
                  >
                    <skill.Icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Database - spans 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="col-span-12 md:col-span-6"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 relative group hover:border-[var(--color-accent)]/30 transition-colors duration-500 h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#00ED64] rounded-full" />
                  <span className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    Databases
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {databaseSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 border border-[var(--color-border)]/50 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all duration-300 cursor-default"
                  >
                    <skill.Icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DevOps & Tools - spans 6 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="col-span-12 md:col-span-6"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-6 relative group hover:border-[var(--color-accent)]/30 transition-colors duration-500 h-full">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FF9900] rounded-full" />
                  <span className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                    DevOps & Tools
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {devOpsSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="flex items-center gap-3 px-4 py-3 border border-[var(--color-border)]/50 bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all duration-300 cursor-default"
                  >
                    <skill.Icon className="w-5 h-5" style={{ color: skill.color }} />
                    <span className="text-sm text-[var(--color-text-muted)]" style={{ fontFamily: "var(--font-body)" }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Philosophy tags - full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="col-span-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <span className="text-[10px] text-[var(--color-text-dim)] tracking-wider mr-2" style={{ fontFamily: "var(--font-mono)" }}>
                ALSO SKILLED IN:
              </span>
              {["Agile/Scrum", "CI/CD", "Unit Testing", "Microservices", "RESTful Design", "Clean Architecture"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-[10px] tracking-wider border border-[var(--color-border)]/40 text-[var(--color-text-dim)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] transition-all duration-300 cursor-default"
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
