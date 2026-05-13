"use client";

export function Globe() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[620px] h-[620px] pointer-events-none max-md:w-[350px] max-md:h-[350px]">
      <div className="w-full h-full relative">
        {/* Outer glow */}
        <div
          className="absolute -inset-[30px] rounded-full animate-[glow-pulse_6s_ease-in-out_infinite]"
          style={{
            background:
              "radial-gradient(circle, transparent 55%, rgba(77,142,255,0.04) 65%, transparent 75%)",
          }}
        />

        {/* Sphere */}
        <div
          className="absolute inset-0 rounded-full border border-[rgba(77,142,255,0.1)]"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(77,142,255,0.12), rgba(168,85,247,0.06) 50%, transparent 70%)",
            boxShadow:
              "0 0 80px rgba(77,142,255,0.08), inset 0 0 60px rgba(77,142,255,0.05)",
          }}
        />

        {/* Latitude rings */}
        {[50, 70, 90].map((size, i) => (
          <div
            key={`lat-${i}`}
            className="absolute top-1/2 left-1/2 border border-[rgba(77,142,255,0.12)] rounded-full"
            style={{
              width: "90%",
              height: `${size}%`,
              transform: `translate(-50%, -50%) rotateX(${75 - i * 15}deg)`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-full h-full border border-[rgba(77,142,255,0.12)] rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* Rotating meridians */}
        <div className="absolute inset-0 animate-[globe-spin_20s_linear_infinite]">
          {[0, 30, 60, 90, 120, 150].map((deg) => (
            <div
              key={`mer-${deg}`}
              className="absolute top-1/2 left-1/2 w-[90%] h-full border border-[rgba(77,142,255,0.08)] rounded-full"
              style={{
                transform: `translate(-50%, -50%) rotateY(${deg}deg)`,
              }}
            />
          ))}
        </div>

        {/* Data dots */}
        <div className="absolute inset-0 animate-[globe-spin_25s_linear_infinite_reverse]">
          {[
            { top: "30%", left: "40%", delay: "0s", color: "ai" },
            { top: "45%", left: "65%", delay: "0.5s", color: "mymir" },
            { top: "60%", left: "35%", delay: "1s", color: "ai" },
            { top: "35%", left: "58%", delay: "1.5s", color: "mymir" },
            { top: "55%", left: "55%", delay: "2s", color: "ai" },
            { top: "25%", left: "52%", delay: "0.8s", color: "mymir" },
            { top: "65%", left: "48%", delay: "1.3s", color: "ai" },
            { top: "42%", left: "30%", delay: "0.3s", color: "mymir" },
          ].map((dot, i) => (
            <div
              key={`dot-${i}`}
              className="absolute w-1 h-1 rounded-full animate-[dot-pulse_3s_ease-in-out_infinite]"
              style={{
                top: dot.top,
                left: dot.left,
                animationDelay: dot.delay,
                background:
                  dot.color === "ai"
                    ? "var(--color-accent-ai-bright)"
                    : "var(--color-accent-mymir-bright)",
                boxShadow: `0 0 8px ${dot.color === "ai" ? "var(--color-accent-ai)" : "var(--color-accent-mymir)"}`,
              }}
            />
          ))}
        </div>

        {/* Connection arcs */}
        <div className="absolute inset-0 animate-[globe-spin_25s_linear_infinite_reverse]">
          {[
            {
              top: "30%",
              left: "28%",
              w: 120,
              h: 60,
              rot: -20,
              color: "ai",
              delay: "0s",
            },
            {
              top: "40%",
              left: "38%",
              w: 150,
              h: 80,
              rot: 15,
              color: "mymir",
              delay: "1s",
            },
            {
              top: "25%",
              left: "42%",
              w: 100,
              h: 50,
              rot: -35,
              color: "ai",
              delay: "2s",
            },
          ].map((arc, i) => (
            <div
              key={`arc-${i}`}
              className="absolute border border-transparent rounded-full animate-[arc-pulse_4s_ease-in-out_infinite]"
              style={{
                top: arc.top,
                left: arc.left,
                width: arc.w,
                height: arc.h,
                transform: `rotate(${arc.rot}deg)`,
                borderTopColor:
                  arc.color === "ai"
                    ? "var(--color-accent-ai)"
                    : "var(--color-accent-mymir)",
                animationDelay: arc.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
