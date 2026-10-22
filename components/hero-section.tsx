import { Globe } from "./globe";

// Server-rendered: the entrance is a CSS animation, so the headline paints with
// the document instead of waiting for hydration.

export function HeroSection() {
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

      {/* Keeps the headline readable where it crosses the dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 42% 30% at 50% 45%, rgba(5,10,24,0.88), rgba(5,10,24,0) 72%)",
        }}
      />

      {/* Headline */}
      <h1 className="fade-in font-display text-[clamp(3.5rem,9vw,7rem)] leading-[1.02] tracking-[0.012em] max-w-[800px] relative z-10">
        Where AI Meets
        <br />
        <span className="text-gradient-mixed">Science</span>
      </h1>

      {/* Subtitle */}
      <p
        className="fade-in text-lg text-muted max-w-[480px] mt-10 mb-14 leading-relaxed relative z-10"
        style={{ animationDelay: "150ms" }}
      >
        We build AI for crystal growth, and for the knowledge a team already
        has.
      </p>

      {/* CTA Buttons */}
      <div
        className="fade-in flex gap-5 relative z-10 max-md:flex-col max-md:items-center"
        style={{ animationDelay: "300ms" }}
      >
        <a
          href="https://bucketlabs.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-9 py-3.5 rounded-full bg-accent-ai/[0.14] text-accent-ai-bright text-[0.95rem] font-medium ring-1 ring-accent-ai/30 backdrop-blur-sm hover:bg-accent-ai/25 hover:ring-accent-ai/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          BucketLabs.ai
        </a>
        <a
          href="https://mymir.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="px-9 py-3.5 rounded-full bg-accent-mymir/[0.14] text-accent-mymir-bright text-[0.95rem] font-medium ring-1 ring-accent-mymir/30 backdrop-blur-sm hover:bg-accent-mymir/25 hover:ring-accent-mymir/50 hover:-translate-y-0.5 transition-all duration-300"
        >
          Mymir.ai
        </a>
      </div>
    </section>
  );
}
