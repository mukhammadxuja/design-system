import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type ButtonPops = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
};

export default function Button({ className, variant, ...props }: ButtonPops) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva(
  "w-full md:w-fit rounded-[8px] px-[16px] py-[7px] text-center text-[16px] tracking-[-0.1px] leading-[1.3em] font-semibold duration-300 hover:bg-opacity-80 hover-shadow-md active:translate-y-0.5 shadow",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white dark:bg-secondary dark:text-black",
        secondary:
          "bg-background text-primary dark:bg-secondary-muted dark:text-secondary",
        ghost:
          "hover:bg-background text-primary dark:hover:bg-secondary-muted dark:text-secondary",
        outline:
          "bg-transparent hover:bg-primary hover:text-white border border-primary dark:border-secondary dark:hover:bg-secondary dark:hover:text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
