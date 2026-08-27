"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
    "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
    "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
    "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
    "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
    "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
    "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
    "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
    "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
    "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
    "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
    "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
  ];
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className="z-0 h-full w-full pointer-events-none absolute"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.35"
            strokeWidth="0.6"
          />
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 12,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#CCEC7B" stopOpacity="0" />
              <stop stopColor="#CCEC7B" />
              <stop offset="55%" stopColor="#E8A659" />
              <stop offset="100%" stopColor="#E8A659" stopOpacity="0" />
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
