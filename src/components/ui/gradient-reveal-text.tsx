"use client";

import React, { forwardRef, useImperativeHandle, useRef, useState, ElementType } from "react";
import { cn } from "@/lib/utils";

export type RevealDirection = "ltr" | "rtl" | "ttb" | "btt";

export type GradientRevealTextRef = {
  animate: (direction?: RevealDirection) => void;
  reset: () => void;
};

export interface GradientRevealTextProps {
  children: React.ReactNode;
  as?: ElementType;
  trigger?: "hover" | "inView" | "auto";
  gradient?: string;
  direction?: RevealDirection;
  duration?: number;
  delay?: number;
  rounded?: string;
  className?: string;
}

const GradientRevealText = forwardRef<GradientRevealTextRef, GradientRevealTextProps>(
  (
    {
      children,
      as = "span",
      trigger = "hover",
      gradient = "linear-gradient(to right, #CCEC7B, #E8A659)",
      direction = "ltr",
      duration = 0.8,
      delay = 0,
      rounded = "rounded-md px-1",
      className,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const [active, setActive] = useState(trigger === "auto");

    useImperativeHandle(ref, () => ({
      animate: () => setActive(true),
      reset: () => setActive(false),
    }));

    const handleHover = () => {
      if (trigger === "hover") setActive(true);
    };
    const handleHoverLeave = () => {
      if (trigger === "hover") setActive(false);
    };

    const bgSize = active ? "100% 100%" : direction === "ltr" || direction === "rtl" ? "0% 100%" : "100% 0%";
    const bgPosition = direction === "rtl" ? "100% 0%" : direction === "btt" ? "0% 100%" : "0% 0%";

    const style: React.CSSProperties = {
      backgroundImage: gradient,
      backgroundSize: bgSize,
      backgroundPosition: bgPosition,
      backgroundRepeat: "no-repeat",
      WebkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone",
      transition: `background-size ${duration}s ease ${delay}s`,
      color: active ? "#0C0D11" : "inherit",
    };

    const ElementTag = as || "span";

    return (
      <ElementTag ref={containerRef} onMouseEnter={handleHover} onMouseLeave={handleHoverLeave} {...props}>
        <span className={cn("inline", rounded, className)} style={style}>
          {children}
        </span>
      </ElementTag>
    );
  }
);

GradientRevealText.displayName = "GradientRevealText";
export default GradientRevealText;
