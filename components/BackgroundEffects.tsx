"use client";

import { useEffect, useRef, useState } from "react";

interface GlowOrbProps {
  size: number;
  blur: number;
  color: string;
  x: number;
  y: number;
  delay?: number;
  intensity?: number;
}

function GlowOrb({ size, blur, color, x, y, delay = 0, intensity = 1 }: GlowOrbProps) {
  return (
    <motion.div
      animate={{
        x: [0, x * 0.15, 0],
        y: [0, y * 0.1, 0],
        scale: [1, 1.05, 1],
        opacity: [intensity * 0.3, intensity * 0.5, intensity * 0.3],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="absolute rounded-full blur-[100px] pointer-events-none will-change-transform"
      style={{
        width: size,
        height: size,
        background: color,
        mixBlendMode: "screen" as const,
      }}
    />
  );
}

interface CursorGlowProps {
  x: number;
  y: number;
  hovering: boolean;
}

function CursorGlow({ x, y, hovering }: CursorGlowProps) {
  return (
    <>
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.6 : 0.2,
        }}
        transition={{ duration: 0.3 }}
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          background: `radial-gradient(circle, rgba(239,68,68,${hovering ? 0.15 : 0.06}) 0%, transparent 70%)`,
          left: x - 150,
          top: y - 150,
          mixBlendMode: "screen" as const,
          borderRadius: "50%",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      {/* Inner glow */}
      <motion.div
        animate={{
          scale: hovering ? 1.4 : 1,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ duration: 0.2 }}
        className="absolute pointer-events-none"
        style={{
          width: 80,
          height: 80,
          background: `radial-gradient(circle, rgba(255,255,255,${hovering ? 0.2 : 0.08}) 0%, transparent 70%)`,
          left: x - 40,
          top: y - 40,
          mixBlendMode: "screen" as const,
          borderRadius: "50%",
          filter: "blur(12px)",
          zIndex: 1,
        }}
      />
    </>
  );
}

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Ambient gradient orbs */}
      <GlowOrb
        size={600}
        blur={120}
        color="rgba(239, 68, 68, 0.07)"
        x={mousePos.x}
        y={mousePos.y}
        delay={0}
        intensity={0.8}
      />
      <GlowOrb
        size={500}
        blur={100}
        color="rgba(34, 211, 238, 0.05)"
        x={mousePos.x}
        y={mousePos.y}
        delay={1}
        intensity={0.6}
      />
      <GlowOrb
        size={400}
        blur={90}
        color="rgba(168, 85, 247, 0.04)"
        x={-mousePos.x}
        y={-mousePos.y}
        delay={2}
        intensity={0.5}
      />

      {/* Static corner glows */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[var(--color-accent)]/5 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-accent-secondary)]/4 to-transparent blur-[80px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cursor-following glow */}
      <motion.div
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="absolute pointer-events-none"
      >
        <CursorGlow x={0} y={0} hovering={hovering} />
      </motion.div>
    </div>
  );
}

import { motion } from "framer-motion";
