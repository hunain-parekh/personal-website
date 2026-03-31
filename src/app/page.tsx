"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import HireMe from "@/components/HireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AiChat from "@/components/AiChat";

export default function Home() {
  return (
    <>
      <ParticleField />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        <Awards />
        <Certifications />
        <Testimonials />
        <HireMe />
        <Contact />
      </main>
      <Footer />
      <AiChat />
    </>
  );
}
