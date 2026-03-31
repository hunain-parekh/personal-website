"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FaTrophy, FaStar, FaMedal, FaGraduationCap, FaRocket } from "react-icons/fa";

export default function Awards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
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
            05
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Recognition
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Award showcase */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Award image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Decorative frame behind image */}
            <motion.div
              initial={{ opacity: 0, x: 12, y: 12 }}
              animate={inView ? { opacity: 1, x: 8, y: 8 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute inset-0 border-2 border-[var(--color-accent)]/30"
            />

            {/* Main image container */}
            <div className="relative overflow-hidden border border-[var(--color-border)]/50">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/top-champ.webp"
                  alt="Hunain Parekh receiving Top Champ Award at xLoop Digital"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: "linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.6) 100%)",
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)] opacity-70" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] opacity-70" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-70" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] opacity-70" />
              </div>

              {/* Award badge overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-2 flex items-center gap-2"
              >
                <FaTrophy className="w-4 h-4" />
                <span
                  className="text-[10px] font-bold tracking-wider uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  #01 Top Champ
                </span>
              </motion.div>
            </div>

            {/* Floating particles */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 w-8 h-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 flex items-center justify-center"
            >
              <FaStar className="w-3 h-3 text-[var(--color-accent)]" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 w-8 h-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 flex items-center justify-center"
            >
              <FaMedal className="w-3 h-3 text-[var(--color-accent)]" />
            </motion.div>
          </motion.div>

          {/* Right: Award details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Award title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-10 h-10 border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <FaTrophy className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <span
                  className="text-[var(--color-accent)] text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Award Recognition
                </span>
              </motion.div>

              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Top Champ Award
              </h3>
              <p
                className="text-[var(--color-text-muted)] text-sm"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                xLoop Digital Company — Cloud Division
              </p>
            </div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="origin-left"
            >
              <div className="glow-line w-full max-w-xs" />
            </motion.div>

            {/* Award description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed font-light">
                I am honored to receive the <span className="text-[var(--color-accent)] font-medium">Top Champ Award</span> from
                xLoop Digital Company in recognition of my exceptional coding skills and commitment to delivering
                high-quality results.
              </p>
              <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-light">
                This accolade reflects my dedication to excellence and innovation in the field of software development.
                I am grateful for the support and opportunities provided by xLoop Digital, which have been instrumental
                in my professional growth.
              </p>
            </motion.div>

            {/* Achievement highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-3 sm:gap-4 pt-4"
            >
              {[
                { label: "Category", value: "Cloud" },
                { label: "Rank", value: "#01" },
                { label: "Company", value: "xLoop Digital" },
                { label: "Recognition", value: "Excellence" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-4"
                >
                  <div
                    className="text-[9px] text-[var(--color-text-dim)] tracking-[0.15em] uppercase mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-[var(--color-text)] font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="border-l-2 border-[var(--color-accent)]/50 pl-5 py-2 mt-6"
            >
              <p
                className="text-[var(--color-text-muted)] text-sm italic"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;Excellence is not a destination but a continuous journey of improvement and dedication.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scholarship Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 lg:mt-28"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Scholarship details */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 order-2 lg:order-1"
            >
              {/* Award title */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="w-10 h-10 border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <FaGraduationCap className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <span
                    className="text-[var(--color-accent)] text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Scholarship Achievement
                  </span>
                </motion.div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-bright)] to-[var(--color-accent)] bg-clip-text" style={{ WebkitTextFillColor: "transparent" }}>
                    100% Scholarship
                  </span>
                </h3>
                <p
                  className="text-[var(--color-text-muted)] text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  University of the People — United States of America
                </p>
              </div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="origin-left"
              >
                <div className="h-[2px] w-full max-w-xs bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-bright)] to-transparent" />
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed font-light">
                  I am proud to have been awarded a <span className="text-[var(--color-accent)] font-medium">fully funded scholarship</span> covering
                  100% of tuition fees at University of the People, recognizing academic excellence and potential in the field
                  of Computer Science.
                </p>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-light">
                  This prestigious scholarship enables me to pursue my Bachelor of Science in Computer Science at a
                  tuition-free, accredited American university, furthering my commitment to continuous learning and
                  professional development.
                </p>
              </motion.div>

              {/* Achievement highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="grid grid-cols-2 gap-3 sm:gap-4 pt-4"
              >
                {[
                  { label: "Scholarship", value: "100%" },
                  { label: "Degree", value: "BSCS" },
                  { label: "University", value: "UoPeople" },
                  { label: "Location", value: "USA" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                    className="border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-4"
                  >
                    <div
                      className="text-[9px] text-[var(--color-text-dim)] tracking-[0.15em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[var(--color-accent)] font-semibold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 rounded-full"
              >
                <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[var(--color-accent)] text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  Fully Funded
                </span>
              </motion.div>
            </motion.div>

            {/* Right: Scholarship image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group order-1 lg:order-2"
            >
              {/* Decorative frame behind image */}
              <motion.div
                initial={{ opacity: 0, x: -12, y: 12 }}
                animate={inView ? { opacity: 1, x: -8, y: 8 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute inset-0 border-2 border-[var(--color-accent)]/30"
              />

              {/* Main image container */}
              <div className="relative overflow-hidden border border-[var(--color-border)]/50">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/uopeople-logo.jpg"
                    alt="University of the People - 100% Scholarship"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: "linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.6) 100%)",
                    }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)] opacity-70" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] opacity-70" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-70" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] opacity-70" />
                </div>

                {/* Award badge overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-2 flex items-center gap-2"
                >
                  <FaGraduationCap className="w-4 h-4" />
                  <span
                    className="text-[10px] font-bold tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    100% Scholarship
                  </span>
                </motion.div>
              </div>

              {/* Floating particles */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 flex items-center justify-center"
              >
                <FaStar className="w-3 h-3 text-[var(--color-accent)]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-8 h-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 flex items-center justify-center"
              >
                <FaMedal className="w-3 h-3 text-[var(--color-accent)]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* Teknofest Pakistan Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 lg:mt-28"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Teknofest image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative group"
            >
              {/* Decorative frame behind image */}
              <motion.div
                initial={{ opacity: 0, x: 12, y: 12 }}
                animate={inView ? { opacity: 1, x: 8, y: 8 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute inset-0 border-2 border-[var(--color-accent)]/30"
              />

              {/* Main image container */}
              <div className="relative overflow-hidden border border-[var(--color-border)]/50">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/teknofest.jpeg"
                    alt="Hunain Parekh winning at Teknofest Pakistan with PKR 20,000 prize"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: "linear-gradient(135deg, transparent 50%, rgba(10,10,10,0.6) 100%)",
                    }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)] opacity-70" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)] opacity-70" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-70" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] opacity-70" />
                </div>

                {/* Award badge overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute top-4 right-4 bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-2 flex items-center gap-2"
                >
                  <FaRocket className="w-4 h-4" />
                  <span
                    className="text-[10px] font-bold tracking-wider uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Top 50 Winner
                  </span>
                </motion.div>
              </div>

              {/* Floating particles */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-8 h-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 flex items-center justify-center"
              >
                <FaStar className="w-3 h-3 text-[var(--color-accent)]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-8 h-8 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 flex items-center justify-center"
              >
                <FaRocket className="w-3 h-3 text-[var(--color-accent)]" />
              </motion.div>
            </motion.div>

            {/* Right: Teknofest details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-6"
            >
              {/* Award title */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="w-10 h-10 border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <FaRocket className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <span
                    className="text-[var(--color-accent)] text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Startup Competition
                  </span>
                </motion.div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Teknofest Pakistan Winner
                </h3>
                <p
                  className="text-[var(--color-text-muted)] text-sm"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Top 50 from 500+ Ideas — October 2024
                </p>
              </div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 1.1, duration: 0.8 }}
                className="origin-left"
              >
                <div className="glow-line w-full max-w-xs" />
              </motion.div>

              {/* Award description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed font-light">
                  My startup idea was selected in the <span className="text-[var(--color-accent)] font-medium">Top 50 from over 500 submissions</span> at
                  Teknofest Pakistan, one of the country&apos;s largest technology and innovation competitions.
                </p>
                <p className="text-[var(--color-text-muted)] text-base leading-relaxed font-light">
                  The idea was an AI-powered time tracking software designed to boost employee productivity through
                  intelligent insights, automated tracking, and smart recommendations — combining workforce management
                  with cutting-edge artificial intelligence.
                </p>
              </motion.div>

              {/* Achievement highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="grid grid-cols-2 gap-3 sm:gap-4 pt-4"
              >
                {[
                  { label: "Competition", value: "Teknofest PK" },
                  { label: "Selection", value: "Top 50/500+" },
                  { label: "Prize", value: "PKR 20,000" },
                  { label: "Category", value: "AI / SaaS" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                    className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-4"
                  >
                    <div
                      className="text-[9px] text-[var(--color-text-dim)] tracking-[0.15em] uppercase mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[var(--color-text)] font-semibold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote block */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="border-l-2 border-[var(--color-accent)]/50 pl-5 py-2 mt-6"
              >
                <p
                  className="text-[var(--color-text-muted)] text-sm italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  &ldquo;Innovation distinguishes between a leader and a follower.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
