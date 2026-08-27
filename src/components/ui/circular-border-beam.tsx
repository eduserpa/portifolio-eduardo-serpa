export function CircularBorderBeam({
  ringWidth = 4,
  duration = 4,
  colorFrom = "#CCEC7B",
  colorTo = "#E8A659",
  className,
}: {
  ringWidth?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}) {
  const mask = `radial-gradient(farthest-side, transparent calc(100% - ${ringWidth}px), #000 calc(100% - ${ringWidth}px))`;
  const beam = `conic-gradient(from 0deg, transparent 0%, transparent 74%, ${colorFrom} 86%, ${colorTo} 94%, transparent 100%)`;

  return (
    <div aria-hidden className={className} style={{ position: "absolute", inset: 0 }}>
      <div
        className="absolute inset-0 animate-[spin_var(--beam-duration)_linear_infinite] blur-md"
        style={{ background: beam, WebkitMask: mask, mask, opacity: 0.9, ["--beam-duration" as string]: `${duration}s` }}
      />
      <div
        className="absolute inset-0 animate-[spin_var(--beam-duration)_linear_infinite]"
        style={{ background: beam, WebkitMask: mask, mask, ["--beam-duration" as string]: `${duration}s` }}
      />
    </div>
  );
}
