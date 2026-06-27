"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Minimalist network: points (bases / flags in different countries) drift
 * slowly; thin lines form and dissolve as they move within range. A few
 * accent-blue hub nodes pulse. Monochrome on near-black + one blue. Ties to
 * the Flag Theory (a presence in each country, all connected). Pauses
 * off-screen; static frame under reduced motion.
 */
type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  accent: boolean;
  r: number;
  phase: number;
};

const COUNT = 9;

export function ConnectionNetwork({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;
    let nodes: Node[] = [];

    const build = () => {
      nodes = Array.from({ length: COUNT }, (_, i) => {
        const accent = i === 0; // a single blue accent node
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          accent,
          r: accent ? 3.2 : 2.3,
          phase: Math.random() * Math.PI * 2,
        };
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!nodes.length) build();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 4 || n.x > w - 4) n.vx *= -1;
        if (n.y < 4 || n.y > h - 4) n.vy *= -1;
        n.x = Math.max(4, Math.min(w - 4, n.x));
        n.y = Math.max(4, Math.min(h - 4, n.y));
      }
    };

    const draw = () => {
      // Transparent: let the frosted white panel behind show through.
      ctx.clearRect(0, 0, w, h);
      const diag = Math.hypot(w, h);

      // Full mesh — every node connected to every other.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          const k = 1 - d / diag; // closer → a touch stronger
          const accent = a.accent || b.accent;
          ctx.strokeStyle = accent
            ? `rgba(0,113,227,${0.34 + k * 0.3})`
            : `rgba(120,120,128,${0.3 + k * 0.26})`;
          ctx.lineWidth = accent ? 1 : 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes — solid, like the globe's markers (gray + one blue).
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.accent ? "#0071e3" : "#aeaeb5";
        ctx.fill();
      }
    };

    if (reduce) {
      draw();
      return () => ro.disconnect();
    }

    let raf = 0;
    const loop = () => {
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.05 },
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
    };
  }, [reduce]);

  return <canvas ref={ref} className={className} aria-hidden />;
}
