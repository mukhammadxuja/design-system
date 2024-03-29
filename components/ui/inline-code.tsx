import { cn } from "@/utils/cn  ";
import { cva } from "class-variance-authority";
import { useState } from "react";

type inlineCodeProps = {
  line?: string;
  className?: string;
};

export default function InlineCode({
  line,
  className,
  ...props
}: inlineCodeProps) {
  return (
    <div {...props} className={cn(inlineCodeVariants(), className)}>
      {line}
    </div>
  );
}

const inlineCodeVariants = cva(
  "w-fit py-1 px-2 rounded-[8px] bg-background border border-border text-secondary-muted dark:text-secondary font-mono"
);
