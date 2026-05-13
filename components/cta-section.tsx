"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 max-w-[1200px] mx-auto px-6 lg:px-12"
    >
      <div
        className={`relative border border-border-hover rounded-[28px] p-12 lg:p-20 text-center overflow-hidden bg-[#0a1128] transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Background gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(77,142,255,0.08), transparent), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(168,85,247,0.06), transparent)",
          }}
        />

        <div className="relative z-10">
          <span className="inline-flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-widest text-gradient-mixed font-medium mb-6">
            <span className="w-8 h-[2px] bg-gradient-to-r from-accent-ai to-accent-mymir" />
            Explore Our Products
          </span>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.2rem)] leading-tight tracking-tight mb-5">
            Choose your frontier.
          </h2>
          <p className="text-muted text-lg max-w-[480px] mx-auto leading-relaxed mb-10">
            Whether you&apos;re optimizing crystal yields or transforming how
            your team accesses knowledge — there&apos;s a Bucket Labs product
            built for you.
          </p>
          <div className="flex gap-5 justify-center max-md:flex-col max-md:items-center">
            <a
              href="https://bucketlabs.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-accent-ai to-[#2563eb] text-white font-semibold rounded-xl flex items-center gap-2.5 shadow-[0_4px_25px_rgba(77,142,255,0.35)] hover:shadow-[0_6px_35px_rgba(77,142,255,0.5)] hover:-translate-y-0.5 transition-all"
            >
              BucketLabs.ai
              <ArrowUpRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://mymir.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-accent-mymir to-[#7c3aed] text-white font-semibold rounded-xl flex items-center gap-2.5 shadow-[0_4px_25px_rgba(168,85,247,0.35)] hover:shadow-[0_6px_35px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Mymir.ai
              <ArrowUpRight className="w-[18px] h-[18px] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
