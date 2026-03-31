"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Certification {
  name: string;
  image: string;
}

const certifications: Certification[] = [
  { name: "Certified Associate - Salesforce", image: "/certifications/crt1.png" },
  { name: "Advanced React - Meta", image: "/certifications/crt2.png" },
  { name: "React Basics - Meta", image: "/certifications/crt3.png" },
  { name: "Salesforce Developer - Udemy", image: "/certifications/crt4.png" },
  { name: "Salesforce Associate - Udemy", image: "/certifications/crt5.png" },
  { name: "React Developer - HackerRank", image: "/certifications/crt6.png" },
  { name: "Javascript Basics - HackerRank", image: "/certifications/crt7.png" },
  { name: "SQL Intermediate - HackerRank", image: "/certifications/crt8.png" },
  { name: "Java Basics - HackerRank", image: "/certifications/crt9.png" },
  { name: "GraphQL Developer - Apolo", image: "/certifications/crt10.png" },
  { name: "Introduction to Backend - Meta", image: "/certifications/crt11.png" },
  { name: "Version Control - Meta", image: "/certifications/crt12.png" },
  { name: "Introduction to Frontend - Meta", image: "/certifications/crt13.png" },
  { name: "Introduction to Java - Coursera", image: "/certifications/crt14.png" },
  { name: "Programming with JavaScript - Meta", image: "/certifications/crt15.png" },
  { name: "Introduction to AI - Coursera", image: "/certifications/crt16.png" },
];

export default function Certifications() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const maxIndex = Math.max(0, certifications.length - visibleCount);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Clamp active when visibleCount changes
  useEffect(() => {
    setActive((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const goTo = useCallback(
    (index: number) => {
      setActive(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  // Card width as a percentage
  const cardPercent = 100 / visibleCount;
  const gap = 16; // px gap between cards

  return (
    <section id="certifications" className="relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={sectionRef}>
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
            06
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Certifications
          </h2>
          <div className="glow-line flex-1 ml-4" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Track container */}
          <div className="overflow-hidden" ref={trackRef}>
            <motion.div
              className="flex"
              animate={{
                x: `calc(-${active * cardPercent}% - ${active * gap}px)`,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ gap: `${gap}px` }}
            >
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `calc(${cardPercent}% - ${((visibleCount - 1) * gap) / visibleCount}px)` }}
                >
                  <div className="relative group border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] overflow-hidden cursor-pointer">
                    {/* Image */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw`}
                        quality={85}
                      />

                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                      <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                      <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                      <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                      {/* Hover overlay with name */}
                      <div className="absolute inset-0 bg-[var(--color-bg)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="w-8 h-[2px] bg-[var(--color-accent)] mx-auto mb-3" />
                          <p
                            className="text-[var(--color-text)] text-sm sm:text-base font-semibold leading-snug"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {cert.name}
                          </p>
                          <div className="w-8 h-[2px] bg-[var(--color-accent)] mx-auto mt-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-between mt-6">
            {/* Progress dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
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

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                className="w-10 h-10 border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[var(--color-text-muted)] disabled:hover:border-[var(--color-border)]/50"
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
                onClick={() => goTo(active + 1)}
                disabled={active >= maxIndex}
                className="w-10 h-10 border border-[var(--color-border)]/50 bg-[var(--color-bg-elevated)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-[var(--color-text-muted)] disabled:hover:border-[var(--color-border)]/50"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
