"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-[#2a2a2a]/50"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-20">
          <a
            href="#"
            className="flex items-center gap-3 group"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="text-[var(--color-accent)] text-sm font-medium tracking-wider">
              HP
            </span>
            <span className="hidden sm:block w-8 h-px bg-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:w-12 transition-all duration-300" />
            <span className="hidden sm:block text-[var(--color-text-muted)] text-xs tracking-widest uppercase">
              Portfolio
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                className="relative px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.08em" }}
              >
                <span className="text-[var(--color-accent)] opacity-50 mr-1">
                  0{i + 1}.
                </span>
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-end justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6, width: 24 } : { rotate: 0, y: 0, width: 24 }}
              className="block h-px bg-[var(--color-accent)] origin-center"
              style={{ width: 24 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="block h-px bg-[var(--color-text-muted)]"
              style={{ width: 16 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6, width: 24 } : { rotate: 0, y: 0, width: 24 }}
              className="block h-px bg-[var(--color-accent)] origin-center"
              style={{ width: 20 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="text-2xl text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="text-[var(--color-accent)] text-sm mr-3 opacity-50"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
