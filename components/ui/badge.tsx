import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type BadgePops = {
  color?: "dark" | "info" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

export default function Badge({
  className,
  color,
  size,
  children,
  ...props
}: BadgePops) {
  return (
    <div {...props} className={cn(badgeVariants({ color, size }), className)}>
      {children}
    </div>
  );
}

const badgeVariants = cva(
  "w-full md:w-fit whitespace-nowrap flex items-center rounded-[8px] px-2 py-1 text-center tracking-[-0.1px] leading-[1.3em] font-semibold active:translate-y-0.5 duration-300 hover:bg-opacity-95 select-none",
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
      size: {
        sm: "text-[11px]",
        md: "text-[13px]",
        lg: "text-[15px]",
      },
    },
    defaultVariants: {
      color: "dark",
      size: "md",
    },
  }
);
