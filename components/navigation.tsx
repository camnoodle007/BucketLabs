"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[rgba(5,10,24,0.92)] backdrop-blur-xl border-b border-border"
          : "py-5 bg-[rgba(5,10,24,0.6)] backdrop-blur-lg"
      }`}
    >
      <a href="#" className="flex items-center gap-2">
        <Image
          src="/logo-white.png"
          alt="Bucket Labs"
          width={54}
          height={40}
          className={`transition-all duration-300 ${isScrolled ? "h-7 w-auto" : "h-9 w-auto"}`}
          priority
        />
      </a>

      {/* The two products are the only places to go, so they are the whole menu. */}
      <div className="flex items-center gap-6 sm:gap-8">
        <a
          href="https://bucketlabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted text-sm font-medium hover:text-accent-ai-bright transition-colors"
        >
          BucketLabs.ai
        </a>
        <a
          href="https://mymir.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted text-sm font-medium hover:text-accent-mymir-bright transition-colors"
        >
          Mymir.ai
        </a>
      </div>
    </nav>
  );
}
