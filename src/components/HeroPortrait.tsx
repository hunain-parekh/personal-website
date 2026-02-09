"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[380px] mx-auto"
    >
      {/* Floating wrapper */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="relative"
      >
        {/* Outer glow pulse */}
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -inset-8 rounded-sm blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />

        {/* Rotating dashed outer frame */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute -inset-5 border border-dashed border-[var(--color-accent)]/15"
        />

        {/* Static offset accent frame behind */}
        <motion.div
          initial={{ opacity: 0, x: 12, y: 12 }}
          animate={{ opacity: 1, x: 8, y: 8 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute inset-0 border border-[var(--color-accent)]/25"
        />

        {/* Main photo container */}
        <div
          className="relative overflow-hidden border-2 border-[var(--color-accent)]/40"
          style={{
            boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,168,83,0.08)",
          }}
        >
          {/* The actual photo */}
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/profile.jpg"
              alt="Hunain Parekh — Senior Software Engineer"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 0px, 380px"
            />

            {/* Dark gradient overlay at bottom */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 30%, transparent 60%),
                  linear-gradient(to right, rgba(10,10,10,0.15) 0%, transparent 30%)
                `,
              }}
            />

            {/* Scanning light line animation */}
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 3 }}
              className="absolute left-0 right-0 h-[1px] opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                boxShadow: "0 0 20px 4px var(--color-accent-glow)",
              }}
            />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent)]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent)]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)]" />

            {/* Bottom info overlay on the photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="absolute bottom-0 left-0 right-0 p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div
                    className="text-[var(--color-accent)] text-[10px] tracking-[0.2em] uppercase mb-1"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Senior Engineer
                  </div>
                  <div
                    className="text-[var(--color-text)] text-lg font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Hunain Parekh
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                  <span
                    className="text-[10px] text-green-400/80 tracking-wider"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    OPEN
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Orbiting particles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute -inset-6 pointer-events-none"
        >
          <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full opacity-50" />
          <div className="absolute bottom-1/4 right-0 w-1 h-1 bg-[var(--color-accent-bright)] rounded-full opacity-40" />
          <div className="absolute top-1/3 left-0 w-1 h-1 bg-[var(--color-accent)] rounded-full opacity-30" />
        </motion.div>

        {/* Floating code tag */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          className="absolute -left-4 top-8 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-3 py-1.5 hidden xl:block"
        >
          <span
            className="text-[10px] text-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &lt;developer /&gt;
          </span>
        </motion.div>

        {/* Floating tech badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3.0, duration: 0.5 }}
          className="absolute -right-4 top-1/3 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] px-3 py-1.5 hidden xl:block"
        >
          <span
            className="text-[10px] text-[var(--color-text-dim)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            MERN Stack
          </span>
        </motion.div>

        {/* Experience badge floating */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.5 }}
          className="absolute -right-2 bottom-20 bg-[var(--color-bg-elevated)] border border-[var(--color-accent)]/30 px-3 py-2 hidden xl:block"
          style={{
            boxShadow: "0 8px 30px rgba(0,0,0,0.3), 0 0 20px var(--color-accent-glow)",
          }}
        >
          <div
            className="text-lg font-bold text-gradient"
            style={{ fontFamily: "var(--font-display)" }}
          >
            5+
          </div>
          <div
            className="text-[8px] text-[var(--color-text-dim)] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Years Exp
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
