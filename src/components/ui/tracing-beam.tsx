"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <div ref={ref} className={cn("relative mx-auto h-full w-full", className)}>
      <div className="absolute -left-4 top-0 h-full w-px overflow-hidden rounded-full bg-line-soft md:-left-14">
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-lime via-amber to-lime"
        />
      </div>
      {children}
    </div>
  );
};
