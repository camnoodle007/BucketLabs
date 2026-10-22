"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "ai",
    badge: "BucketLabs.ai",
    title: "AI for Crystal Growth",
    tagline:
      "Machine learning on the process data crystal growers already produce. Catch sensor drift before it costs a run, see a growth while it is still running, and build toward a digital twin of the furnace.",
    link: "https://bucketlabs.ai",
    linkLabel: "Visit BucketLabs.ai",
  },
  {
    id: "mymir",
    badge: "Mymir.ai",
    title: "Intelligent Knowledge",
    tagline:
      "The Mymir engine indexes everything your team has written and answers from it, with citations back to the source. Private by design, and fast enough to run on your own machine.",
    link: "https://mymir.ai",
    linkLabel: "Visit Mymir.ai",
  },
];

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
  const art = isAi
    ? { src: "/media/digital-twin.webp", size: 256 }
    : { src: "/media/mymir-engine.webp", size: 512 };

  return (
    <a
      ref={cardRef}
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col items-center text-center border rounded-3xl bg-card overflow-hidden px-8 pt-10 pb-10 transition-all duration-500 hover:-translate-y-1.5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${
        isAi
          ? "border-border hover:border-accent-ai/30 hover:shadow-[0_20px_60px_rgba(77,142,255,0.15)]"
          : "border-border hover:border-accent-mymir/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
      }`}
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
        className={`w-[180px] h-[180px] rounded-2xl overflow-hidden bg-[#0b1634] border transition-transform duration-500 group-hover:scale-[1.03] ${
          isAi ? "border-accent-ai/15" : "border-accent-mymir/15"
        }`}
      >
        <Image
          src={art.src}
          alt=""
          width={art.size}
          height={art.size}
          className="w-full h-full object-cover"
        />
      </div>

      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-medium w-fit mt-8 mb-5 border ${
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

      <h3 className="font-display text-[2.2rem] leading-tight tracking-[0.02em] mb-4">
        {product.title}
      </h3>

      <p className="text-muted text-[0.95rem] leading-relaxed max-w-[38ch] mb-8 flex-1">
        {product.tagline}
      </p>

      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
          isAi ? "text-accent-ai-bright" : "text-accent-mymir-bright"
        }`}
      >
        {product.linkLabel}
        <ArrowRight className="w-4 h-4" />
      </span>
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
      <h2
        className={`font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.12] tracking-[0.015em] text-center mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Two products.
        <br />
        <span className="text-muted">Built on the science they work in.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
