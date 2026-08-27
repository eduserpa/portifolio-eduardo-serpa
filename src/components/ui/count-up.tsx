"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  to: number;
  from?: number;
  delay?: number;
  duration?: number;
  className?: string;
  separator?: string;
}

function CountUp({ to, from = 0, delay = 0, duration = 1.4, className, separator = "" }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const formatValue = React.useCallback(
    (latest: number) => {
      const formatted = Intl.NumberFormat("en-US", { useGrouping: !!separator, maximumFractionDigits: 0 }).format(
        Math.round(latest)
      );
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [separator]
  );

  React.useEffect(() => {
    if (ref.current) ref.current.textContent = formatValue(from);
  }, [from, formatValue]);

  React.useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => motionValue.set(to), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, motionValue, to, delay]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = formatValue(latest);
    });
    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span ref={ref} className={cn(className)} />;
}

export { CountUp, type CountUpProps };
export default CountUp;
