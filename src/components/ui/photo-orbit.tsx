import { SiShopify, SiTypescript, SiPython, SiPostgresql, SiDocker, SiNodedotjs } from "react-icons/si";
import { OrbitingIcon } from "./orbiting-icon";
import { cn } from "@/lib/utils";

const inner = [
  { Icon: SiShopify, angle: 0 },
  { Icon: SiTypescript, angle: 120 },
  { Icon: SiPython, angle: 240 },
];

const outer = [
  { Icon: SiPostgresql, angle: 60 },
  { Icon: SiDocker, angle: 180 },
  { Icon: SiNodedotjs, angle: 300 },
];

export function PhotoOrbit({ className }: { className?: string }) {
  const innerRadius = 340;
  const outerRadius = 405;

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 z-0", className)}>
      <div
        aria-hidden
        className="absolute inset-0 m-auto rounded-full border border-dashed border-line/50"
        style={{ width: innerRadius * 2, height: innerRadius * 2 }}
      />
      <div
        aria-hidden
        className="absolute inset-0 m-auto rounded-full border border-dashed border-line/30"
        style={{ width: outerRadius * 2, height: outerRadius * 2 }}
      />
      {inner.map(({ Icon, angle }, i) => (
        <OrbitingIcon key={`inner-${i}`} Icon={Icon} angle={angle} radius={innerRadius} duration={26} size={52} />
      ))}
      {outer.map(({ Icon, angle }, i) => (
        <OrbitingIcon key={`outer-${i}`} Icon={Icon} angle={angle} radius={outerRadius} duration={38} reverse size={46} />
      ))}
    </div>
  );
}
