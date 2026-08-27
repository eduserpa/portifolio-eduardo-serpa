export function CircularBorderBeam({
  size,
  ringWidth = 5,
  duration = 5,
  colors = ["#CCEC7B", "#E8A659", "#FF6B6B", "#5AC8FA", "#CCEC7B"],
  className,
}: {
  size: number;
  ringWidth?: number;
  duration?: number;
  colors?: string[];
  className?: string;
}) {
  const mask = `radial-gradient(farthest-side, transparent calc(100% - ${ringWidth}px), #000 calc(100% - ${ringWidth}px))`;

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        margin: "auto",
        width: size,
        height: size,
        borderRadius: "9999px",
        background: `conic-gradient(from 0deg, ${colors.join(", ")})`,
        WebkitMask: mask,
        mask,
        animation: `spin ${duration}s linear infinite`,
      }}
    />
  );
}
