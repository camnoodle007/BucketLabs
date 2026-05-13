"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, BookOpen, Lock } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "AI-First Engineering",
    description:
      "Every product is built with machine learning at the core — not bolted on as an afterthought. We train models on domain-specific data to deliver expert-level intelligence.",
  },
  {
    icon: BookOpen,
    title: "Domain Expertise",
    description:
      "Materials science, computational physics, NLP — our teams bring the deep expertise needed to solve problems that generic AI solutions miss entirely.",
  },
  {
    icon: Lock,
    title: "Privacy & Performance",
    description:
      "We believe powerful AI should run on your terms. On-device processing, local-first architectures, and no compromises on speed or data sovereignty.",
  },
];

export function PillarsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="innovation"
      ref={sectionRef}
      className="relative py-24 lg:py-32 border-t border-border max-w-[1200px] mx-auto px-6 lg:px-12"
    >
      <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gradient-mixed font-medium mb-6">
        <span className="w-8 h-[2px] bg-gradient-to-r from-accent-ai to-accent-mymir" />
        Why Bucket Labs
      </span>
      <h2
        className={`font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Built on three pillars
        <br />
        <span className="text-muted">of deep technology.</span>
      </h2>
      <p className="text-muted text-lg max-w-[580px] leading-relaxed mb-16">
        We don&apos;t build wrappers — we build foundations. Every product is
        grounded in original research at the intersection of AI and domain
        science.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <article
              key={pillar.title}
              className={`relative p-8 border border-border rounded-2xl bg-card overflow-hidden transition-all duration-500 hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(77,142,255,0.08)] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-accent-ai before:to-accent-mymir before:opacity-0 hover:before:opacity-100 before:transition-opacity ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-6 ${
                  index === 0
                    ? "bg-accent-ai/12 text-accent-ai-bright"
                    : index === 1
                      ? "bg-accent-mymir/12 text-accent-mymir-bright"
                      : "bg-gradient-to-br from-accent-ai/12 to-accent-mymir/12 text-accent-ai-bright"
                }`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {pillar.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
