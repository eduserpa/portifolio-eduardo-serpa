import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#CCEC7B",
      shimmerSize = "0.05em",
      shimmerDuration = "2.5s",
      borderRadius = "100px",
      background = "#0C0D11",
      className,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const style = {
      "--spread": "90deg",
      "--shimmer-color": shimmerColor,
      "--radius": borderRadius,
      "--speed": shimmerDuration,
      "--cut": shimmerSize,
      "--bg": background,
    } as CSSProperties;

    const classes = cn(
      "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-lime/25 px-6 py-3 text-[14.5px] font-semibold text-text [background:var(--bg)] [border-radius:var(--radius)]",
      "transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-px",
      className
    );

    const inner = (
      <>
        <div className={cn("-z-30 blur-[2px]", "absolute inset-0 overflow-visible [container-type:size]")}>
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {children}
        <div
          className={cn(
            "insert-0 absolute size-full rounded-full",
            "shadow-[inset_0_-8px_10px_#ccec7b1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ccec7b3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ccec7b3f]"
          )}
        />
        <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
      </>
    );

    if (href) {
      return (
        <a href={href} target={target} rel={rel} style={style} className={classes}>
          {inner}
        </a>
      );
    }

    return (
      <button style={style} className={classes} ref={ref} {...props}>
        {inner}
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
