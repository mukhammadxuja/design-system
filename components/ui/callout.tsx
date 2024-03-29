import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type CalloutPops = {
  title?: string;
  variant?: "dark" | "info" | "success" | "warning" | "danger";
  depth?: 0 | 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
};

export default function Callout({
  className,
  title,
  depth,
  variant,
  children,
  ...props
}: CalloutPops) {
  return (
    <div
      {...props}
      className={cn(calloutVariants({ depth, variant }), className)}
    >
      {title && (
        <p className="px-5 py-3 border-b border-border text-muted text-sm font-medium">
          {title}
        </p>
      )}
      <div className="p-5 text-primary font-medium">{children}</div>
    </div>
  );
}

const calloutVariants = cva("w-full rounded-lg bg-background border", {
  variants: {
    variant: {
      dark: "bg-background text-primary",
      info: "bg-info-bg text-info-text border-indigo-500 border-opacity-10",
      success: "bg-background border-emerald-500 border-opacity-10",
      warning:
        "bg-warning-bg text-warning-text border-orange-500 border-opacity-10",
      danger: "bg-danger-bg text-danger-text border-red-500 border-opacity-10",
    },
    depth: {
      0: "shadow-none",
      1: "shadow-sm",
      2: "shadow-lg",
      3: "shadow-xl",
    },
  },
  defaultVariants: {
    depth: 0,
    variant: "success",
  },
});
