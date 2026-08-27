"use client";

import * as React from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowMode = "rotate" | "pulse" | "breathe" | "colorShift" | "flowHorizontal" | "static";

const BLUR_PRESETS: Record<string, string> = {
  softest: "blur-xs",
  soft: "blur-sm",
  medium: "blur-md",
  strong: "blur-lg",
  stronger: "blur-xl",
  strongest: "blur-2xl",
  none: "blur-none",
};

export interface GlowEffectProps {
  colors?: string[];
  mode?: GlowMode;
  blur?: keyof typeof BLUR_PRESETS;
  scale?: number;
  duration?: number;
  transition?: Transition;
  className?: string;
}

export function GlowEffect({
  colors = ["#CCEC7B", "#E8A659", "#CCEC7B", "#E8A659"],
  mode = "rotate",
  blur = "strong",
  scale = 1,
  duration = 6,
  transition,
  className,
}: GlowEffectProps) {
  const base: Transition = { repeat: Infinity, duration, ease: "linear" };

  const animations: Record<GlowMode, object> = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(", ")})`,
      ],
      transition: transition ?? base,
    },
    pulse: {
      background: colors.map((c) => `radial-gradient(circle at 50% 50%, ${c} 0%, transparent 100%)`),
      scale: [scale, scale * 1.1, scale],
      opacity: [0.5, 0.8, 0.5],
      transition: transition ?? { ...base, repeatType: "mirror" },
    },
    breathe: {
      background: colors.map((c) => `radial-gradient(circle at 50% 50%, ${c} 0%, transparent 100%)`),
      scale: [scale, scale * 1.05, scale],
      transition: transition ?? { ...base, repeatType: "mirror" },
    },
    colorShift: {
      background: colors.map((c, i) => {
        const next = colors[(i + 1) % colors.length];
        return `conic-gradient(from 0deg at 50% 50%, ${c} 0%, ${next} 50%, ${c} 100%)`;
      }),
      transition: transition ?? { ...base, repeatType: "mirror" },
    },
    flowHorizontal: {
      background: colors.map((c, i) => {
        const next = colors[(i + 1) % colors.length];
        return `linear-gradient(to right, ${c}, ${next})`;
      }),
      transition: transition ?? { ...base, repeatType: "mirror" },
    },
    static: { background: `linear-gradient(to right, ${colors.join(", ")})` },
  };

  return (
    <motion.div
      animate={animations[mode] as never}
      style={{ "--scale": scale, willChange: "transform" } as React.CSSProperties}
      className={cn("pointer-events-none absolute inset-0 h-full w-full scale-[var(--scale)] transform-gpu", BLUR_PRESETS[blur], className)}
    />
  );
}

export default GlowEffect;
