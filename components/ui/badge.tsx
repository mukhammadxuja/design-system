import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type BadgePops = {
  color?: "dark" | "info" | "success" | "warning" | "danger";
  className?: string;
  children: React.ReactNode;
};

export default function Badge({
  className,
  color,
  children,
  ...props
}: BadgePops) {
  return (
    <div {...props} className={cn(badgeVariants({ color }), className)}>
      {children}
    </div>
  );
}

const badgeVariants = cva(
  "w-full md:w-fit rounded-[8px] px-2 py-1 text-center text-[13px] tracking-[-0.1px] leading-[1.3em] font-semibold active:translate-y-0.5 duration-300 hover:bg-opacity-95 select-none",
  {
    variants: {
      color: {
        dark: "bg-background text-primary dark:bg-background dark:text-primary",
        info: "bg-info-bg text-info-text",
        success:
          "bg-[#D9EDDF] text-[#386C5F] dark:bg-secondary-muted dark:text-secondary",
        warning: "bg-warning-bg text-warning-text",
        danger: "bg-danger-bg text-danger-text",
      },
    },
    defaultVariants: {
      color: "dark",
    },
  }
);
