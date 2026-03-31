"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      className="absolute inset-0"
    >
      {/* The actual photo — full bleed */}
      <Image
        src="/profile.jpg"
        alt="Hunain Parekh — Senior Software Engineer"
        fill
        className="object-cover object-top"
        priority
        sizes="50vw"
        quality={90}
      />

      {/* Gradient overlays for blending into the dark left side */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--color-bg) 0%, rgba(10,10,10,0.6) 30%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg) 0%, rgba(10,10,10,0.4) 25%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg) 0%, transparent 15%)",
        }}
      />

      {/* Scanning light line animation */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatDelay: 4 }}
        className="absolute left-0 right-0 h-[1px] opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
          boxShadow: "0 0 20px 4px var(--color-accent-glow)",
        }}
      />

      {/* Corner accents */}
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-[var(--color-accent)] opacity-40" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-[var(--color-accent)] opacity-40" />

      {/* Bottom-right info overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 right-8"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
          <span
            className="text-[10px] text-green-400/80 tracking-wider"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            AVAILABLE FOR WORK
          </span>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute top-24 right-8 bg-[var(--color-bg-elevated)]/80 backdrop-blur-sm border border-[var(--color-border)] px-4 py-2 hidden xl:block"
      >
        <span
          className="text-[10px] text-[var(--color-accent)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          &lt;developer /&gt;
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="absolute bottom-28 right-8 bg-[var(--color-bg-elevated)]/80 backdrop-blur-sm border border-[var(--color-accent)]/30 px-4 py-3 hidden xl:block"
        style={{
          boxShadow: "0 8px 30px rgba(0,0,0,0.3), 0 0 20px var(--color-accent-glow)",
        }}
      >
        <div
          className="text-xl font-bold text-gradient"
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
  );
}
