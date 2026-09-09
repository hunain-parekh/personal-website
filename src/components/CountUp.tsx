"use client";

import { useEffect, useRef } from "react";

// "30k+" counts from 0 to 30k when it scrolls into view. Suffix and unit stay fixed.
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const m = value.match(/^([\d.,]+)(.*)$/);
  const target = m ? parseFloat(m[1].replace(/,/g, "")) : 0;
  const rest = m ? m[2] : value;

  useEffect(() => {
    const el = ref.current;
    if (!el || !m || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now(), dur = 1600;
      const tick = (t: number) => {
        const k = Math.min(1, (t - t0) / dur), ease = 1 - Math.pow(1 - k, 4);
        const v = target * ease;
        el.textContent = target < 10 ? v.toFixed(1).replace(/\.0$/, "") : Math.round(v).toLocaleString();
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [m, target]);

  return <><span ref={ref}>{m ? m[1] : value}</span>{rest}</>;
}
