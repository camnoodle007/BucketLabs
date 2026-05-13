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

      <ul className="hidden md:flex items-center gap-10">
        {["Products", "Innovation"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-muted text-sm font-medium hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-accent-ai after:to-accent-mymir after:transition-all hover:after:w-full"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://bucketlabs.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2.5 bg-gradient-to-r from-accent-ai to-[#2563eb] text-white text-sm font-semibold rounded-lg shadow-[0_0_20px_rgba(77,142,255,0.3)] hover:shadow-[0_0_30px_rgba(77,142,255,0.5)] hover:-translate-y-0.5 transition-all"
      >
        Explore Products
      </a>
    </nav>
  );
}
