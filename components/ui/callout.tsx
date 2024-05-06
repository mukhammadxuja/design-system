import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";
import { Frown } from "lucide-react";

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
      <div className="absolute -top-16 -left-5 bg-danger-bg blur-3xl opacity-50 w-52 h-52 rounded-full"></div>
      <div className="flex items-start gap-4 z-10">
        <div className="text-white rounded-full p-3 bg-red-50 border border-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-danger-text"
          >
            <path
              fillRule="evenodd"
              d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-primary font-medium">{children}</div>
      </div>
    </div>
  );
}

const calloutVariants = cva(
  "relative w-full p-4 rounded-lg border-2 border-white shadow-lg bg-background overflow-hidden",
  {
    variants: {
      variant: {
        dark: "bg-background text-primary",
        info: "bg-info-bg text-info-text border-indigo-500 border-opacity-10",
        success: "bg-background border-emerald-500 border-opacity-10",
        warning:
          "bg-warning-bg text-warning-text border-orange-500 border-opacity-10",
        danger: "bg-background text-danger-text",
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
  }
);
