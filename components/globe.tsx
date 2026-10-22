"use client";

import { useEffect, useRef } from "react";
import { decodeLandPoints } from "./globe-points";

// A rotating sphere of dots, one per patch of land. Drawn on a canvas so the
// points keep real depth: they sit on the sphere, pass behind it, and the ones
// near the cursor are pulled toward it.

const SPIN = 0.00012; // radians per ms, about one turn a minute
const TILT = -0.32; // lean the north pole toward the viewer
const PULL_RADIUS = 150; // css px
const PULL_STRENGTH = 0.78;

// Alpha and colour are quantised so a frame is a few dozen fillStyle changes
// rather than one per dot.
const ALPHA_STEPS = 10;
const COLOR_STEPS = 5;
const BUCKETS = ALPHA_STEPS * COLOR_STEPS;

// Brand blue through to Mymir violet, across the face of the globe.
const COLOR_FROM = [77, 142, 255];
const COLOR_TO = [168, 85, 247];

const palette: string[] = [];
for (let c = 0; c < COLOR_STEPS; c++) {
  const t = c / (COLOR_STEPS - 1);
  const r = Math.round(COLOR_FROM[0] + (COLOR_TO[0] - COLOR_FROM[0]) * t);
  const g = Math.round(COLOR_FROM[1] + (COLOR_TO[1] - COLOR_FROM[1]) * t);
  const b = Math.round(COLOR_FROM[2] + (COLOR_TO[2] - COLOR_FROM[2]) * t);
  for (let a = 0; a < ALPHA_STEPS; a++) {
    palette.push(`rgba(${r},${g},${b},${((a + 1) / ALPHA_STEPS) * 0.9})`);
  }
}

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const points = decodeLandPoints();
    const count = points.length / 3;

    const sx = new Float32Array(count);
    const sy = new Float32Array(count);
    const size = new Float32Array(count);
    const bucket = new Int32Array(count);
    const order = new Int32Array(count);
    const counts = new Int32Array(BUCKETS + 1);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Pointer position in canvas space, and how much of the pull is applied.
    let pointerX = 0;
    let pointerY = 0;
    let pull = 0;
    let pullTarget = 0;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
      const radius = Math.min(width, height) / 2;
      const dx = pointerX - width / 2;
      const dy = pointerY - height / 2;
      pullTarget = dx * dx + dy * dy < (radius + 60) ** 2 ? 1 : 0;
    };
    const onPointerLeave = () => {
      pullTarget = 0;
    };

    if (canHover && !reduced) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave, { passive: true });
    }

    let frame = 0;
    let running = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) frame = requestAnimationFrame(draw);
        else cancelAnimationFrame(frame);
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    let last = performance.now();
    let angle = 0.6;

    const draw = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!reduced) angle += SPIN * dt;
      pull += (pullTarget - pull) * Math.min(dt / 180, 1);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) / 2 - 6;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const cosT = Math.cos(TILT);
      const sinT = Math.sin(TILT);

      ctx.clearRect(0, 0, width, height);
      counts.fill(0);

      for (let i = 0; i < count; i++) {
        const o = i * 3;
        const x0 = points[o];
        const y0 = points[o + 1];
        const z0 = points[o + 2];

        // spin about the polar axis, then tilt toward the viewer
        const x1 = x0 * cosA + z0 * sinA;
        const z1 = z0 * cosA - x0 * sinA;
        const y2 = y0 * cosT - z1 * sinT;
        const z2 = z1 * cosT + y0 * sinT;

        let px = cx + x1 * radius;
        let py = cy - y2 * radius;

        // Depth: 1 at the front of the sphere, -1 at the back.
        const front = z2 > 0;
        let alpha = front ? 0.3 + 0.7 * z2 : 0.1 * (1 + z2);
        let dot = front ? 1.1 + 1.1 * z2 : 1;

        if (pull > 0.001) {
          const dx = pointerX - px;
          const dy = pointerY - py;
          const d2 = dx * dx + dy * dy;
          if (d2 < PULL_RADIUS * PULL_RADIUS) {
            const d = Math.sqrt(d2) || 1;
            const fall = 1 - d / PULL_RADIUS;
            const k = fall * fall * PULL_STRENGTH * pull;
            px += dx * k;
            py += dy * k;
            alpha = Math.min(1, alpha + fall * fall * pull * 0.9);
            dot += fall * fall * pull * 1.3;
          }
        }

        sx[i] = px;
        sy[i] = py;
        size[i] = dot;

        const ai = Math.min(ALPHA_STEPS - 1, Math.max(0, Math.round(alpha * (ALPHA_STEPS - 1))));
        const ci = Math.min(
          COLOR_STEPS - 1,
          Math.max(0, Math.round(((x1 + 1) / 2) * (COLOR_STEPS - 1)))
        );
        const b = ci * ALPHA_STEPS + ai;
        bucket[i] = b;
        counts[b + 1]++;
      }

      // counting sort into bucket order, so each fillStyle is set once
      for (let b = 0; b < BUCKETS; b++) counts[b + 1] += counts[b];
      for (let i = 0; i < count; i++) order[counts[bucket[i]]++] = i;

      let cursor = 0;
      for (let b = 0; b < BUCKETS; b++) {
        const end = counts[b];
        if (end === cursor) continue;
        ctx.fillStyle = palette[b];
        for (let k = cursor; k < end; k++) {
          const i = order[k];
          const s = size[i];
          ctx.fillRect(sx[i] - s / 2, sy[i] - s / 2, s, s);
        }
        cursor = end;
      }

      if (running && (!reduced || pull > 0.001)) frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[620px] h-[620px] max-md:w-[350px] max-md:h-[350px] pointer-events-none">
      {/* Atmosphere behind the dots */}
      <div
        className="absolute -inset-[8%] rounded-full pointer-events-none animate-[glow-pulse_8s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(circle at 42% 38%, rgba(77,142,255,0.10), rgba(168,85,247,0.05) 48%, transparent 68%)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="relative w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
}
