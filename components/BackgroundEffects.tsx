"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const redRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (redRef.current) {
          redRef.current.style.transform = `translate(${e.clientX - 500}px, ${e.clientY - 500}px)`;
        }
        if (cyanRef.current) {
          cyanRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Aurora Glow - follows mouse */}
      <div
        ref={redRef}
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[150px] opacity-50 will-change-transform"
        style={{
          background: "rgba(239, 68, 68, 0.08)",
          transition: "transform 2.5s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      />

      <div
        ref={cyanRef}
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-40 will-change-transform"
        style={{
          background: "rgba(0, 255, 209, 0.04)",
          transition: "transform 3s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      />

      {/* Static Gradient Fallback */}
      <div
        className="absolute top-0 right-0 w-[50%] h-[50%] blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(239, 68, 68, 0.05), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[50%] h-[50%] blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(0, 255, 209, 0.04), transparent 70%)",
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
