import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type CardPops = {
  title?: string;
  depth?: 0 | 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
};

export default function Card({
  className,
  title,
  depth,
  children,
  ...props
}: CardPops) {
  return (
    <div {...props} className={cn(cardVariants({ depth }), className)}>
      {title && (
        <p className="px-5 py-3 border-b border-border text-muted text-sm font-medium">
          {title}
        </p>
      )}
      <div className="p-5 text-primary font-medium">{children}</div>
    </div>
  );
}

const cardVariants = cva(
  "w-full rounded-lg bg-background border border-border",
  {
    variants: {
      depth: {
        0: "shadow-none",
        1: "shadow-sm",
        2: "shadow-lg",
        3: "shadow-xl",
      },
    },
    defaultVariants: {
      depth: 0,
    },
  }
);
