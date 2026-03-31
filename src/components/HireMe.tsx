"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Years Experience", desc: "Software Engineering" },
  { value: "5", label: "Companies", desc: "Diverse industry experience" },
  { value: "50+", label: "Projects Shipped", desc: "On time & within budget" },
  { value: "6h", label: "Response Time", desc: "Get back to you fast" },
];

export default function HireMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden !py-0">
      {/* Full-width dramatic CTA band */}
      <div
        ref={ref}
        className="relative py-24 md:py-32 px-6"
        style={{
          background: `
            linear-gradient(135deg, var(--color-bg) 0%, #12100d 50%, var(--color-bg) 100%)
          `,
        }}
      >
        {/* Accent glow effects */}
        <div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, var(--color-accent-bright) 0%, transparent 60%)",
          }}
        />

        {/* Top border glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-40" />
        {/* Bottom border glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-40" />

        <div className="max-w-7xl mx-auto relative">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase block mb-6"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Ready for the next challenge
            </motion.span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[var(--color-text)]">Let&apos;s Build </span>
              <span className="text-gradient">Something</span>
              <br />
              <span className="text-gradient">Extraordinary</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl mx-auto mb-12 font-light"
          >
            I&apos;m a Senior Software Engineer who turns complex problems into elegant
            solutions. Whether you need a full-stack application, API architecture,
            or cloud integrations — I deliver results.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="text-center border border-[var(--color-border)] bg-[var(--color-bg)]/50 backdrop-blur-sm py-6 px-4 group hover:border-[var(--color-accent-dim)] transition-all duration-500"
              >
                <div
                  className="text-2xl md:text-3xl font-bold text-gradient mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-[var(--color-text)] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-[9px] text-[var(--color-text-dim)] tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {stat.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-sm tracking-widest uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_var(--color-accent-glow)]"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
            >
              <span className="relative z-10">Hire Me</span>
              <svg
                className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {/* Shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="mailto:hunain.parekh@hotmail.com"
              className="group inline-flex items-center gap-3 px-10 py-5 border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm tracking-widest uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Send Email</span>
            </a>
          </motion.div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-center mt-10"
          >
            <p
              className="text-[var(--color-text-dim)] text-[10px] tracking-[0.25em] uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Available for full-time, contract &amp; freelance opportunities
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
