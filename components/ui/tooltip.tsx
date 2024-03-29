import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type TooltipPops = {
  title?: string;
  animation?: "translate" | "scale";
  position?: "top" | "bottom";
  depth?: 0 | 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
};

export default function Tooltip({
  className,
  title,
  depth,
  animation,
  position,
  children,
  ...props
}: TooltipPops) {
  return (
    <div className="relative group w-fit">
      {children}
      <span
        {...props}
        className={cn(
          tooltipVariants({ depth, animation, position }),
          className
        )}
      >
        {title}
      </span>
    </div>
  );
}

const tooltipVariants = cva(
  "absolute opacity-0 w-fit px-2 rounded-[8px] bg-background border border-border text-primary dark:text-primary group-hover:opacity-100 text-h6 duration-200",
  {
    variants: {
      animation: {
        translate: "translate-y-0.5  group-hover:-translate-y-0",
        scale: "scale-0 group-hover:scale-100",
      },
      position: {
        top: "bottom-11 left-1/2 -translate-x-1/2",
        bottom: "top-11 left-1/2 -translate-x-1/2",
      },
      depth: {
        0: "shadow-none",
        1: "shadow-sm",
        2: "shadow-lg",
        3: "shadow-xl",
      },
    },
    defaultVariants: {
      animation: "translate",
      position: "top",
      depth: 0,
    },
  }
);
