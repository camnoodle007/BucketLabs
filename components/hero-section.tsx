"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Globe } from "./globe";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-6 pt-32 pb-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,142,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(77,142,255,0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent)",
        }}
      />

      {/* Globe */}
      <Globe />

      {/* Headline */}
      <h1
        className={`font-display text-[clamp(3.5rem,9vw,7rem)] leading-[1.0] tracking-[-0.04em] max-w-[800px] relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Where AI Meets
        <br />
        <span className="text-gradient-mixed">Deep Science</span>
      </h1>

      {/* Subtitle */}
      <p
        className={`text-lg text-muted max-w-[520px] mt-10 mb-14 leading-relaxed relative z-10 transition-all duration-700 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Bucket Labs builds AI-powered platforms that solve the hardest problems
        in materials science and knowledge management.
      </p>

      {/* CTA Buttons */}
      <div
        className={`flex gap-5 relative z-10 max-md:flex-col max-md:items-center transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <a
          href="https://bucketlabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-gradient-to-r from-accent-ai to-[#2563eb] text-white font-semibold rounded-xl flex items-center gap-2.5 shadow-[0_4px_25px_rgba(77,142,255,0.35)] hover:shadow-[0_6px_35px_rgba(77,142,255,0.5)] hover:-translate-y-0.5 transition-all"
        >
          BucketLabs.ai
          <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="https://mymir.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-8 py-4 bg-gradient-to-r from-accent-mymir to-[#7c3aed] text-white font-semibold rounded-xl flex items-center gap-2.5 shadow-[0_4px_25px_rgba(168,85,247,0.35)] hover:shadow-[0_6px_35px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all"
        >
          Mymir.ai
          <ArrowRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
