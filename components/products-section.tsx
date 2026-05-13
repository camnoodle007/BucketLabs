"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const products = [
  {
    id: "ai",
    badge: "BucketLabs.ai",
    title: "Cognitive Simulation",
    tagline:
      "AI-driven optimization for single-crystal manufacturing. Digital twin technology that turns years of trial-and-error into weeks of precision.",
    features: [
      "Bridgman, Czochralski & Kyropoulos methods",
      "Real-time furnace digital twins",
      "Continuous AI model improvement",
    ],
    link: "https://bucketlabs.ai",
    linkLabel: "Visit BucketLabs.ai",
  },
  {
    id: "mymir",
    badge: "Mymir.ai",
    title: "Intelligent Knowledge",
    tagline:
      "Powered by the Mymir engine for accuracy, indexing, and quality grounded answers — with privacy in mind. Query, explore, and reason over your entire knowledge base.",
    features: [
      "Private by design",
      "Multi-format ingestion (PDF, DOCX, code, images)",
      "Semantic search with citation tracking",
    ],
    link: "https://mymir.ai",
    linkLabel: "Visit Mymir.ai",
  },
];

function AiVisual() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full">
      {/* Growth Data */}
      <rect x="15" y="45" width="65" height="55" rx="10" fill="rgba(77,142,255,0.08)" stroke="#4d8eff" strokeWidth="0.8" />
      <path d="M28,62 q8,-5 16,0 t16,0" fill="none" stroke="#4d8eff" strokeWidth="1.2" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M28,72 q8,-5 16,0 t16,0" fill="none" stroke="#4d8eff" strokeWidth="1.2" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </path>
      <text x="47" y="92" textAnchor="middle" fill="#79b4ff" fontSize="8" fontFamily="monospace">Growth Data</text>

      {/* Arrow 1 */}
      <line x1="85" y1="72" x2="108" y2="72" stroke="#4d8eff" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <polygon points="111,72 106,69 106,75" fill="#4d8eff" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
      </polygon>
      <circle r="2.5" fill="#4d8eff" opacity="0">
        <animate attributeName="cx" values="85;111" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="72;72" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Digital Twin hexagon */}
      <polygon points="140,35 172,55 172,90 140,110 108,90 108,55" fill="rgba(77,142,255,0.1)" stroke="#4d8eff" strokeWidth="0.8" />
      <circle cx="140" cy="72" r="8" fill="#4d8eff" opacity="0.3">
        <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <line x1="140" y1="35" x2="140" y2="110" stroke="#4d8eff" strokeWidth="0.4" opacity="0.2" />
      <line x1="108" y1="55" x2="172" y2="90" stroke="#4d8eff" strokeWidth="0.4" opacity="0.2" />
      <line x1="172" y1="55" x2="108" y2="90" stroke="#4d8eff" strokeWidth="0.4" opacity="0.2" />
      <text x="140" y="125" textAnchor="middle" fill="#79b4ff" fontSize="8" fontFamily="monospace">Digital Twin</text>

      {/* Arrow 2 */}
      <line x1="177" y1="72" x2="198" y2="72" stroke="#4d8eff" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <polygon points="201,72 196,69 196,75" fill="#4d8eff" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </polygon>
      <circle r="2.5" fill="#4d8eff" opacity="0">
        <animate attributeName="cx" values="177;201" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="72;72" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
      </circle>

      {/* Higher Yield */}
      <rect x="200" y="45" width="65" height="55" rx="10" fill="rgba(77,142,255,0.08)" stroke="#4d8eff" strokeWidth="0.8" />
      <polygon points="232,55 244,68 232,85 220,68" fill="#4d8eff" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.45;0.15" dur="3s" repeatCount="indefinite" />
      </polygon>
      <text x="232" y="95" textAnchor="middle" fill="#79b4ff" fontSize="8" fontFamily="monospace">Higher Yield</text>
    </svg>
  );
}

function MymirVisual() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full">
      {/* Documents */}
      <rect x="12" y="42" width="55" height="16" rx="4" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="0.5" opacity="0.6" />
      <rect x="17" y="62" width="55" height="16" rx="4" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="0.5" opacity="0.5" />
      <rect x="12" y="82" width="55" height="16" rx="4" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="0.5" opacity="0.4" />
      {[50, 70, 90].map((y, i) => (
        <line key={i} x1={i === 1 ? 23 : 18} y1={y} x2={i === 1 ? 63 : 58} y2={y} stroke="#a855f7" strokeWidth="0.8" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}
      <text x="38" y="115" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace">Documents</text>

      {/* Arrow */}
      <line x1="75" y1="72" x2="98" y2="72" stroke="#a855f7" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <polygon points="101,72 96,69 96,75" fill="#a855f7" opacity="0.5" />
      <circle r="2.5" fill="#a855f7" opacity="0">
        <animate attributeName="cx" values="75;101" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="cy" values="72;72" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Mymir Engine */}
      <circle cx="140" cy="72" r="35" fill="rgba(168,85,247,0.06)" stroke="#a855f7" strokeWidth="0.8" />
      <circle cx="140" cy="72" r="22" fill="rgba(168,85,247,0.08)" stroke="#a855f7" strokeWidth="0.4" opacity="0.5" />
      <circle cx="130" cy="60" r="4" fill="#a855f7" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="152" cy="60" r="4" fill="#a855f7" opacity="0.4">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="140" cy="78" r="5" fill="#a855f7" opacity="0.5">
        <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="128" cy="88" r="3" fill="#a855f7" opacity="0.3" />
      <circle cx="152" cy="88" r="3" fill="#a855f7" opacity="0.3" />
      <line x1="130" y1="60" x2="140" y2="78" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
      <line x1="152" y1="60" x2="140" y2="78" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
      <line x1="140" y1="78" x2="128" y2="88" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
      <line x1="140" y1="78" x2="152" y2="88" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
      <text x="140" y="120" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace">Mymir Engine</text>

      {/* Arrow */}
      <line x1="180" y1="72" x2="202" y2="72" stroke="#a855f7" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <polygon points="205,72 200,69 200,75" fill="#a855f7" opacity="0.5" />
      <circle r="2.5" fill="#a855f7" opacity="0">
        <animate attributeName="cx" values="180;205" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="cy" values="72;72" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" begin="0.4s" repeatCount="indefinite" />
      </circle>

      {/* Answers */}
      <rect x="208" y="50" width="60" height="44" rx="10" fill="rgba(168,85,247,0.08)" stroke="#a855f7" strokeWidth="0.8" />
      <line x1="218" y1="64" x2="258" y2="64" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
      <line x1="218" y1="73" x2="250" y2="73" stroke="#a855f7" strokeWidth="1" opacity="0.25" />
      <line x1="218" y1="82" x2="254" y2="82" stroke="#a855f7" strokeWidth="1" opacity="0.2" />
      <text x="238" y="112" textAnchor="middle" fill="#c084fc" fontSize="8" fontFamily="monospace">Answers</text>
    </svg>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isAi = product.id === "ai";

  return (
    <a
      ref={cardRef}
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col border rounded-3xl bg-card overflow-hidden transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${
        isAi
          ? "border-border hover:border-accent-ai/30 hover:shadow-[0_20px_60px_rgba(77,142,255,0.15)]"
          : "border-border hover:border-accent-mymir/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
      } hover:-translate-y-1.5`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top gradient bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] ${
          isAi
            ? "bg-gradient-to-r from-accent-ai to-[#2563eb]"
            : "bg-gradient-to-r from-accent-mymir to-[#7c3aed]"
        }`}
      />

      {/* Visual */}
      <div
        className={`h-[200px] flex items-center justify-center mx-6 mt-6 rounded-2xl border ${
          isAi
            ? "bg-gradient-to-br from-[rgba(77,142,255,0.08)] to-[rgba(37,99,235,0.03)] border-accent-ai/10"
            : "bg-gradient-to-br from-[rgba(168,85,247,0.08)] to-[rgba(124,58,237,0.03)] border-accent-mymir/10"
        }`}
      >
        {isAi ? <AiVisual /> : <MymirVisual />}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-8 pt-8 pb-10">
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-medium w-fit mb-6 border ${
            isAi
              ? "bg-accent-ai/10 text-accent-ai-bright border-accent-ai/20"
              : "bg-accent-mymir/10 text-accent-mymir-bright border-accent-mymir/20"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full animate-[dot-pulse_2s_ease-in-out_infinite] ${
              isAi
                ? "bg-accent-ai-bright shadow-[0_0_6px_var(--color-accent-ai)]"
                : "bg-accent-mymir-bright shadow-[0_0_6px_var(--color-accent-mymir)]"
            }`}
          />
          {product.badge}
        </span>

        <h3 className="font-display text-[2.2rem] leading-tight tracking-tight mb-3">
          {product.title}
        </h3>

        <p className="text-muted text-[0.95rem] leading-relaxed mb-8">
          {product.tagline}
        </p>

        <ul className="space-y-0 mb-8 flex-1">
          {product.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-muted text-sm py-2.5 border-b border-white/[0.04]"
            >
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                  isAi
                    ? "bg-accent-ai/15 text-accent-ai-bright"
                    : "bg-accent-mymir/15 text-accent-mymir-bright"
                }`}
              >
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <span
          className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
            isAi ? "text-accent-ai-bright" : "text-accent-mymir-bright"
          }`}
        >
          {product.linkLabel}
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

export function ProductsSection() {
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
      id="products"
      ref={sectionRef}
      className="relative py-24 lg:py-32 max-w-[1200px] mx-auto px-6 lg:px-12"
    >
      <span className="section-eyebrow inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-gradient-mixed font-medium mb-6">
        <span className="w-8 h-[2px] bg-gradient-to-r from-accent-ai to-accent-mymir" />
        Our Products
      </span>
      <h2
        className={`font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Two platforms.
        <br />
        <span className="text-muted">
          One mission to accelerate innovation.
        </span>
      </h2>
      <p className="text-muted text-lg max-w-[580px] leading-relaxed mb-16">
        Each product tackles a different frontier — from optimizing physical
        manufacturing to transforming how teams interact with knowledge.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
