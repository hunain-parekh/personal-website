"use client";

import Image from "next/image";
import { SiReact, SiNodedotjs, SiNestjs, SiMongodb, SiTypescript, SiNextdotjs, SiGraphql, SiAmazon } from "react-icons/si";

export default function LinkedInBanner() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-8">
      {/* LinkedIn Banner - 4200x700 pixels (6:1 ratio) */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "4200px",
          height: "700px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #0d0d0d 30%, #111 60%, #0a0a0a 100%)",
        }}
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(#d4a853 1px, transparent 1px),
              linear-gradient(90deg, #d4a853 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Large gradient orbs - scaled up */}
        <div className="absolute left-[5%] top-[-20%] w-[1000px] h-[1000px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, #d4a853 0%, transparent 60%)" }} />
        <div className="absolute left-[30%] bottom-[-40%] w-[800px] h-[800px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #61DAFB 0%, transparent 60%)" }} />
        <div className="absolute right-[10%] top-[-30%] w-[900px] h-[900px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #E0234E 0%, transparent 60%)" }} />
        <div className="absolute right-[35%] top-[10%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #00ED64 0%, transparent 60%)" }} />

        {/* Floating code symbols - LARGER */}
        <div className="absolute top-16 left-[12%] text-[#d4a853]/40 text-8xl font-bold" style={{ fontFamily: "monospace" }}>&lt;/&gt;</div>
        <div className="absolute bottom-24 left-[22%] text-[#61DAFB]/30 text-7xl font-bold" style={{ fontFamily: "monospace" }}>&#123;&#125;</div>
        <div className="absolute top-28 left-[42%] text-[#00ED64]/25 text-6xl" style={{ fontFamily: "monospace" }}>[ ]</div>
        <div className="absolute bottom-32 right-[42%] text-[#E0234E]/30 text-7xl font-bold" style={{ fontFamily: "monospace" }}>//</div>
        <div className="absolute top-12 right-[28%] text-[#d4a853]/25 text-4xl" style={{ fontFamily: "monospace" }}>npm run dev</div>
        <div className="absolute bottom-16 right-[18%] text-[#61DAFB]/20 text-3xl" style={{ fontFamily: "monospace" }}>git push origin main</div>

        {/* Floating stars/shapes - LARGER */}
        <svg className="absolute top-20 left-[28%] w-16 h-16 text-[#d4a853]/50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <svg className="absolute bottom-28 left-[16%] w-12 h-12 text-[#61DAFB]/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <svg className="absolute top-36 right-[22%] w-14 h-14 text-[#00ED64]/40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>

        {/* Floating circles/dots - LARGER */}
        <div className="absolute top-24 left-[20%] w-8 h-8 rounded-full bg-[#d4a853]/30" />
        <div className="absolute bottom-40 left-[30%] w-6 h-6 rounded-full bg-[#61DAFB]/40" />
        <div className="absolute top-40 right-[32%] w-10 h-10 rounded-full border-4 border-[#E0234E]/30" />
        <div className="absolute bottom-28 right-[25%] w-6 h-6 rounded-full bg-[#00ED64]/40" />
        <div className="absolute top-16 left-[36%] w-5 h-5 rounded-full bg-[#d4a853]/20" />

        {/* Dotted connection lines - SCALED */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          <line x1="400" y1="100" x2="800" y2="300" stroke="#d4a853" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="1200" y1="500" x2="1600" y2="350" stroke="#61DAFB" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="2200" y1="150" x2="2800" y2="350" stroke="#00ED64" strokeWidth="2" strokeDasharray="8 8" />
          <line x1="3000" y1="550" x2="3600" y2="400" stroke="#E0234E" strokeWidth="2" strokeDasharray="8 8" />
        </svg>

        {/* Top border - colorful gradient */}
        <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#d4a853] via-[#61DAFB] via-[#00ED64] to-[#E0234E] opacity-70" />

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-gradient-to-r from-[#E0234E] via-[#00ED64] via-[#61DAFB] to-[#d4a853] opacity-70" />

        {/* Corner frames with glow - LARGER */}
        <div className="absolute top-6 left-6">
          <div className="w-40 h-40 border-t-4 border-l-4 border-[#d4a853]" style={{ boxShadow: "inset 20px 20px 40px rgba(212,168,83,0.1)" }} />
        </div>
        <div className="absolute top-6 right-6">
          <div className="w-40 h-40 border-t-4 border-r-4 border-[#d4a853]" />
        </div>
        <div className="absolute bottom-6 right-6">
          <div className="w-40 h-40 border-b-4 border-r-4 border-[#d4a853]" />
        </div>

        {/* Main content */}
        <div className="relative h-full flex items-center">
          {/* Left spacer for LinkedIn profile photo */}
          <div className="w-[450px] flex-shrink-0" />

          {/* Content area */}
          <div className="flex-1 flex items-center gap-20 px-16">

            {/* Left section - Main info */}
            <div className="flex-1 relative z-10">
              {/* Name - HUGE */}
              <h1
                className="font-black leading-[0.85] tracking-tight mb-8 relative z-10"
                style={{ fontFamily: "Georgia, serif", fontSize: "180px" }}
              >
                <span className="text-[#e8e4dd]">Hunain</span>{" "}
                <span
                  className="bg-gradient-to-r from-[#f0c96c] via-[#d4a853] to-[#f0c96c] bg-clip-text"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  Parekh
                </span>
              </h1>

              {/* Role - LARGER */}
              <div className="flex items-center gap-6 mb-10">
                <div className="px-10 py-5 bg-[#d4a853]/20 border-4 border-[#d4a853]/50 rounded-lg">
                  <span className="text-[#d4a853] text-5xl font-bold tracking-wide">Senior Software Engineer</span>
                </div>
                <div className="px-8 py-5 bg-[#00ED64]/15 border-4 border-[#00ED64]/40 rounded-lg">
                  <span className="text-[#00ED64] text-4xl font-semibold">5+ Years</span>
                </div>
              </div>

              {/* Tech stack with HUGE glowing icons */}
              <div className="flex items-center gap-6 relative z-10">
                {[
                  { Icon: SiReact, color: "#61DAFB", label: "React" },
                  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
                  { Icon: SiNodedotjs, color: "#339933", label: "Node" },
                  { Icon: SiNestjs, color: "#E0234E", label: "Nest" },
                  { Icon: SiMongodb, color: "#00ED64", label: "Mongo" },
                  { Icon: SiTypescript, color: "#3178C6", label: "TS" },
                  { Icon: SiGraphql, color: "#E10098", label: "GQL" },
                  { Icon: SiAmazon, color: "#FF9900", label: "AWS" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="w-24 h-24 flex items-center justify-center rounded-xl border-4 relative"
                    style={{
                      color: tech.color,
                      backgroundColor: "#0a0a0a",
                      borderColor: `${tech.color}50`,
                      boxShadow: `0 0 40px ${tech.color}40`
                    }}
                  >
                    <tech.Icon className="w-12 h-12" />
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Stats & Highlights */}
            <div className="flex flex-col gap-6">
              {/* Code snippet above stats */}
              <div className="px-8 py-4 bg-[#111]/90 border-2 border-[#2a2a2a] rounded-xl w-fit mx-auto" style={{ fontFamily: "monospace" }}>
                <span className="text-[#d4a853] text-3xl">const</span>
                <span className="text-[#e8e4dd] text-3xl"> passion</span>
                <span className="text-[#8a8578] text-3xl"> = </span>
                <span className="text-[#00ED64] text-3xl">&quot;coding&quot;</span>
                <span className="text-[#8a8578] text-3xl">;</span>
              </div>

              {/* Stats row - HUGE */}
              <div className="flex gap-8">
                {[
                  { value: "50+", label: "PROJECTS", color: "#d4a853" },
                  { value: "6", label: "COMPANIES", color: "#61DAFB" },
                  { value: "3", label: "CERTS", color: "#00ED64" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="px-10 py-8 bg-[#111]/90 border-4 text-center min-w-[200px] rounded-xl relative overflow-hidden"
                    style={{ borderColor: `${stat.color}50` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[6px]" style={{ background: stat.color }} />
                    <div className="text-7xl font-black" style={{ color: stat.color, fontFamily: "Georgia, serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-xl text-[#8a8578] tracking-widest font-semibold mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills/Services icons - LARGER */}
              <div className="flex items-center justify-center gap-6">
                {[
                  { icon: "🚀", label: "Fast Delivery", color: "#d4a853" },
                  { icon: "💡", label: "Problem Solver", color: "#61DAFB" },
                  { icon: "🔧", label: "Clean Code", color: "#00ED64" },
                  { icon: "☁️", label: "Cloud Expert", color: "#FF9900" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-6 py-4 bg-[#111]/80 border-2 rounded-xl"
                    style={{ borderColor: `${item.color}40` }}
                  >
                    <span className="text-5xl">{item.icon}</span>
                    <span className="text-2xl font-semibold" style={{ color: item.color }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Contact info - LARGER */}
              <div className="flex items-center justify-center gap-8">
                <div className="flex items-center gap-4 px-8 py-4 bg-[#111] border-2 border-[#2a2a2a] rounded-xl">
                  <svg className="w-10 h-10 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-[#e8e4dd] text-2xl font-medium" style={{ fontFamily: "monospace" }}>hunain.parekh@hotmail.com</span>
                </div>
                <div className="flex items-center gap-4 px-8 py-4 bg-[#111] border-2 border-[#2a2a2a] rounded-xl">
                  <svg className="w-10 h-10 text-[#d4a853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="text-[#e8e4dd] text-2xl font-medium" style={{ fontFamily: "monospace" }}>+92-313-296-7563</span>
                </div>
              </div>
            </div>

            {/* Right side - Photo with creative frame */}
            <div className="relative">
              {/* Decorative elements around photo - LARGER */}
              <div className="absolute -top-16 -left-16 w-20 h-20 border-4 border-[#61DAFB]/40 rounded-full" />
              <div className="absolute -bottom-12 -left-12 w-16 h-16 bg-[#00ED64]/20 rounded-full" />
              <div className="absolute -top-12 -right-16 w-12 h-12 bg-[#E0234E]/30 rounded" style={{ transform: "rotate(45deg)" }} />
              <div className="absolute -bottom-16 -right-12 text-[#d4a853]/50 text-5xl font-bold" style={{ fontFamily: "monospace" }}>&lt;/&gt;</div>

              {/* Multi-layer frames */}
              <div className="absolute -inset-10 border-4 border-dashed border-[#d4a853]/25 rounded-2xl" />
              <div className="absolute -inset-4 border-4 border-[#d4a853]/50 rounded-xl" />

              {/* Main photo container */}
              <div className="relative w-[380px] h-[480px] border-6 border-[#d4a853] overflow-hidden rounded-xl"
                style={{ boxShadow: "0 0 80px rgba(212,168,83,0.4)" }}>
                <Image
                  src="/profile.jpg"
                  alt="Hunain Parekh"
                  fill
                  className="object-cover object-top"
                  quality={100}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(135deg, transparent 40%, rgba(212,168,83,0.15) 100%)",
                }} />

                {/* Corner accents - colorful - LARGER */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#61DAFB]" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#d4a853]" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#00ED64]" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#E0234E]" />
              </div>

              {/* Badge with glow - LARGER */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00ED64] to-[#00c853] text-[#0a0a0a] px-10 py-4 rounded-full flex items-center gap-4 whitespace-nowrap"
                style={{ boxShadow: "0 0 50px rgba(0,237,100,0.7)" }}
              >
                <div className="w-5 h-5 bg-[#0a0a0a] rounded-full animate-pulse" />
                <span className="text-2xl font-bold tracking-wider uppercase">Open to Work</span>
              </div>
            </div>
          </div>

          {/* Right padding */}
          <div className="w-[100px] flex-shrink-0" />
        </div>

        {/* Website URL - bottom center styled - LARGER */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-[#d4a853]/50" />
          <div className="flex items-center gap-4 px-6 py-3 bg-[#111]/80 border-2 border-[#2a2a2a] rounded-full">
            <div className="w-4 h-4 rounded-full bg-[#d4a853]" />
            <span className="text-[#8a8578] text-xl tracking-widest" style={{ fontFamily: "monospace" }}>hunainparekh.com</span>
          </div>
          <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-[#d4a853]/50" />
        </div>

      </div>

      {/* Instructions */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[#8a8578] text-lg mb-2" style={{ fontFamily: "monospace" }}>
          LinkedIn Page Cover: 4200 x 700 pixels (6:1)
        </p>
        <p className="text-[#5a5650] text-sm" style={{ fontFamily: "monospace" }}>
          Scroll horizontally to see full banner. Take a full-page screenshot.
        </p>
      </div>
    </div>
  );
}
