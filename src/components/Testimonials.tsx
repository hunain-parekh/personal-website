"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechVault Inc.",
    text: "Hunain completely transformed our backend architecture. API response times dropped by 60%, and the codebase became a joy to work with. His deep understanding of Node.js and MongoDB is exceptional — one of the best engineers I've collaborated with.",
    rating: 5,
    project: "Platform Redesign",
  },
  {
    name: "James Carter",
    role: "Product Manager",
    company: "NovaByte Solutions",
    text: "Working with Hunain was a game-changer for our product. He didn't just write code — he understood the business problem and delivered a solution that exceeded our expectations. His React expertise brought our dashboard to life with incredible performance.",
    rating: 5,
    project: "Analytics Dashboard",
  },
  {
    name: "Amira Hassan",
    role: "Founder",
    company: "Crestline Digital",
    text: "Hunain built our entire SaaS platform from scratch using the MERN stack. From database design to deployment pipelines, he handled everything with precision and speed. He's the kind of engineer who makes complex things look effortless.",
    rating: 5,
    project: "SaaS Platform",
  },
  {
    name: "David Park",
    role: "Engineering Lead",
    company: "StackForge",
    text: "Hunain joined our team and immediately elevated the code quality across the board. He established CI/CD pipelines, mentored our junior devs, and shipped features faster than anyone expected. Truly a 10x engineer.",
    rating: 5,
    project: "Team Augmentation",
  },
  {
    name: "Lisa Chen",
    role: "CEO",
    company: "Pixelwave Studios",
    text: "We needed a full-stack developer who could handle both the frontend polish and backend complexity of our real-time chat application. Hunain delivered on every front — the app is fast, stable, and our users love it.",
    rating: 5,
    project: "Real-time Chat App",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "text-[var(--color-accent)]" : "text-[var(--color-border)]"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > active ? 1 : -1);
      setActive(index);
    },
    [active]
  );

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
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
            05
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Testimonials
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          {/* Left: Client list / navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2"
          >
            <div
              className="text-[10px] text-[var(--color-accent)] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Client Reviews
            </div>

            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => goTo(i)}
                className={`w-full text-left px-5 py-4 border transition-all duration-400 group ${
                  i === active
                    ? "border-[var(--color-accent)]/40 bg-[var(--color-bg-elevated)]"
                    : "border-[var(--color-border)]/30 bg-transparent hover:border-[var(--color-border)]/60 hover:bg-[var(--color-bg-elevated)]/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className={`text-sm font-medium transition-colors duration-300 ${
                        i === active
                          ? "text-[var(--color-text)]"
                          : "text-[var(--color-text-muted)]"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.name}
                    </div>
                    <div
                      className="text-[11px] text-[var(--color-text-dim)] mt-0.5"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.role}, {item.company}
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-300 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-[var(--color-accent)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                {/* Active indicator bar */}
                <div
                  className={`h-px mt-3 bg-[var(--color-accent)] transition-all duration-500 origin-left ${
                    i === active ? "scale-x-100 opacity-40" : "scale-x-0 opacity-0"
                  }`}
                />
              </button>
            ))}

            {/* Counter */}
            <div
              className="flex items-center gap-3 pt-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-2xl font-bold text-gradient">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="text-[var(--color-text-dim)] text-xs">/</span>
              <span className="text-[var(--color-text-dim)] text-xs">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* Right: Active testimonial display */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] p-8 sm:p-10 relative min-h-[340px] flex flex-col justify-between overflow-hidden">
              {/* Large quote mark */}
              <div
                className="absolute top-4 right-6 text-[120px] leading-none text-[var(--color-accent)] opacity-[0.07] select-none pointer-events-none"
                style={{ fontFamily: "var(--font-display)" }}
              >
                &ldquo;
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[var(--color-accent)] opacity-30" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[var(--color-accent)] opacity-30" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-between flex-1"
                >
                  {/* Project tag */}
                  <div className="mb-6">
                    <span
                      className="inline-block px-3 py-1 border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-[10px] tracking-[0.15em] uppercase"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {t.project}
                    </span>
                  </div>

                  {/* Review text */}
                  <p
                    className="text-[var(--color-text)] text-base sm:text-lg leading-relaxed font-light flex-1 mb-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Bottom: author info + stars */}
                  <div className="flex items-end justify-between pt-6 border-t border-[var(--color-border)]/40">
                    <div>
                      <div
                        className="text-[var(--color-text)] font-semibold text-base"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-[var(--color-text-dim)] text-xs mt-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {t.role} — {t.company}
                      </div>
                    </div>
                    <StarRating rating={t.rating} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2 mt-4 justify-end">
              <button
                onClick={() =>
                  goTo(
                    (active - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="w-10 h-10 border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => goTo((active + 1) % testimonials.length)}
                className="w-10 h-10 border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2 mt-4 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-[var(--color-accent)]"
                      : "w-3 bg-[var(--color-border)] hover:bg-[var(--color-text-dim)]"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
