import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Tilt } from "./tilt";
import { Spotlight } from "./spotlight";

export interface BentoItem {
  title: string;
  description: string;
  icon?: ReactNode;
  tag?: string;
  stats?: string[];
  href?: string;
  colSpan?: 1 | 2;
  featured?: boolean;
}

export function BentoGrid({
  items,
  className,
  cardClassName,
}: {
  items: BentoItem[];
  className?: string;
  cardClassName?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", className)}>
      {items.map((item, i) => {
        const Comp = item.href ? "a" : "div";
        return (
          <Comp
            key={i}
            href={item.href}
            target={item.href ? "_blank" : undefined}
            rel={item.href ? "noopener" : undefined}
            className={cn("block", item.colSpan === 2 ? "lg:col-span-2" : "")}
          >
            <Tilt
              rotationFactor={6}
              springOptions={{ stiffness: 220, damping: 20 }}
              className={cn(
                "group relative flex h-full flex-col gap-3 rounded-2xl border p-6 transition-colors duration-300",
                "border-line bg-bg-card",
                item.featured ? "border-lime/30" : "hover:border-lime/60",
                cardClassName
              )}
            >
              <Spotlight className="z-0 from-lime/25 via-lime/5 to-transparent" size={260} />
              <div className="relative flex items-center justify-between">
                {item.icon}
                {item.tag && (
                  <span className="rounded-full border border-amber/35 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-amber">
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 className="relative font-display text-xl font-semibold text-text">{item.title}</h3>
              <p className="relative flex-1 text-sm leading-relaxed text-text-dim">{item.description}</p>
              {item.stats && (
                <div className="relative flex flex-wrap gap-3 font-mono text-xs text-text-faint">
                  {item.stats.map((s, si) => (
                    <span key={si}>{s}</span>
                  ))}
                </div>
              )}
              {item.href && (
                <span className="relative mt-1 text-sm font-semibold text-text opacity-0 transition-opacity group-hover:opacity-100">
                  Ver ↗
                </span>
              )}
            </Tilt>
          </Comp>
        );
      })}
    </div>
  );
}
