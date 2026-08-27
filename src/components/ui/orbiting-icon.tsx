import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface OrbitingIconProps {
  Icon: IconType;
  angle: number;
  radius: number;
  duration?: number;
  delay?: number;
  reverse?: boolean;
  size?: number;
}

export function OrbitingIcon({ Icon, angle, radius, duration = 20, delay = 0, reverse = false, size = 36 }: OrbitingIconProps) {
  return (
    <div
      style={
        {
          "--angle": angle,
          "--radius": radius,
          "--duration": duration,
          animationDelay: `${delay}s`,
          width: size,
          height: size,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 m-auto flex animate-orbit items-center justify-center rounded-full border border-line bg-bg-card shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]",
        reverse && "[animation-direction:reverse]"
      )}
    >
      <Icon className="h-[45%] w-[45%] text-lime" />
    </div>
  );
}
