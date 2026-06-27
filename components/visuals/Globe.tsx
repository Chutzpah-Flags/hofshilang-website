"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useReducedMotion } from "framer-motion";

// Major hubs (lat, lng) — the "citizen of the world" network.
const NY: [number, number] = [40.71, -74.0];
const LDN: [number, number] = [51.51, -0.13];
const LIS: [number, number] = [38.72, -9.14];
const DXB: [number, number] = [25.2, 55.27];
const SIN: [number, number] = [1.35, 103.82];
const SAO: [number, number] = [-23.55, -46.63];
const TYO: [number, number] = [35.69, 139.69];

const MARKERS = [NY, LDN, LIS, DXB, SIN, SAO, TYO].map((location) => ({
  location,
  size: 0.05,
}));

const ARCS = [
  { from: SAO, to: LIS },
  { from: LIS, to: DXB },
  { from: NY, to: LDN },
  { from: DXB, to: SIN },
  { from: SIN, to: TYO },
];

export function Globe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1);
    let width = canvas.offsetWidth;
    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: 0,
      theta: 0.2,
      dark: 0,
      diffuse: 0.6,
      mapSamples: 11000,
      mapBrightness: 1.5,
      mapBaseBrightness: 0.06,
      baseColor: [0.82, 0.82, 0.84],
      markerColor: [0, 0.443, 0.89],
      glowColor: [0.97, 0.97, 0.98],
      arcColor: [0, 0.443, 0.89],
      arcWidth: 1.6,
      arcHeight: 0.4,
      markers: MARKERS,
      arcs: ARCS,
    });

    const render = () => {
      globe.update({
        phi: phiRef.current + pointerMovement.current,
        width: width * dpr,
        height: width * dpr,
      });
    };

    // Reduced motion: render a single static frame, no loop.
    if (reduce) {
      render();
      return () => {
        globe.destroy();
        window.removeEventListener("resize", onResize);
      };
    }

    // Animate only while the globe is on screen — pause the rAF loop otherwise
    // so scrolling the rest of the page isn't competing with WebGL work.
    let raf = 0;
    const frame = () => {
      if (pointerInteracting.current === null) phiRef.current += 0.0035;
      render();
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.05 },
    );
    io.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  return (
    <div className={`relative aspect-square ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full [contain:layout_paint_size]"
        style={{ cursor: "grab" }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerMovement.current * 100;
          canvasRef.current!.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerMovement.current = delta / 100;
          }
        }}
      />
    </div>
  );
}
