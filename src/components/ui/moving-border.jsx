"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedBorderDiv({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration = 5000,
  className,
  ...otherProps
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-transparent p-px",
        containerClassName
      )}
      style={{ borderRadius }}
      {...otherProps}
    >
      {/* Border animation layer */}
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#FF5005_70%,transparent_60%)] ",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      {/* Actual content */}
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-[#D2851820] text-white backdrop-blur-sm",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </div>
  );
}

export const MovingBorder = ({ children, duration = 3000, rx, ry }) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        className="absolute h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
