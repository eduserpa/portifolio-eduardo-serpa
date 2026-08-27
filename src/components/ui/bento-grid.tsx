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
  chrome?: "browser" | "terminal";
}

function chromeLabel(item: BentoItem) {
  if (!item.href) return item.title;
  if (item.chrome === "terminal") return `~/${item.href.replace(/^https:\/\/github\.com\//, "")}`;
  return item.href.replace(/^https?:\/\//, "");
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
                "group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-colors duration-300",
                "bg-bg-card hover:border-lime/60",
                item.featured ? "border-lime/35" : "border-lime/15",
                cardClassName
              )}
            >
              <Spotlight className="z-0 from-lime/25 via-lime/5 to-transparent" size={260} />

              {item.chrome && (
                <div className="relative flex items-center gap-1.5 border-b border-line-soft bg-black/25 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
                  <span className="ml-2 truncate font-mono text-[11px] text-text-faint">{chromeLabel(item)}</span>
                </div>
              )}

              <div className="relative flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime/25 bg-lime/10 text-lime">
                    {item.icon}
                  </div>
                  {item.tag && (
                    <span className="rounded-full border border-amber/35 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-amber">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-text">{item.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-text-dim">{item.description}</p>
                {item.stats && (
                  <div className="flex flex-wrap gap-3 font-mono text-xs text-text-faint">
                    {item.stats.map((s, si) => (
                      <span key={si}>{s}</span>
                    ))}
                  </div>
                )}
                {item.href && (
                  <span className="mt-1 text-sm font-semibold text-text opacity-0 transition-opacity group-hover:opacity-100">
                    Ver ↗
                  </span>
                )}
              </div>
            </Tilt>
          </Comp>
        );
      })}
    </div>
  );
}
