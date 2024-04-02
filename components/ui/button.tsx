import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type ButtonPops = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  radius?: "full" | "md" | "none";
  icon?: boolean;
};

export default function Button({
  className,
  variant,
  radius,
  size,
  icon = false,
  ...props
}: ButtonPops): JSX.Element {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, radius, size }), className)}
    />
  );
}

const buttonVariants = cva(
  "w-full md:w-fit text-center tracking-[-0.1px] leading-[1.3em] font-semibold duration-300 hover:bg-opacity-80 hover-shadow-md active:translate-y-0.5 disabled:opacity-20 disabled:cursor-not-allowed shadow",
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
      size: {
        sm: "px-[13px] py-[5px] text-[13px]",
        md: "px-[16px] py-[7px] text-[16px]",
        lg: "px-[20px] py-[12px] text-[16px]",
      },
      radius: {
        full: "rounded-full after:rounded-full",
        md: "rounded-[8px] after:rounded-[8px]",
        none: "rounded-[3px] after:rounded-[3px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      radius: "md",
      size: "md",
    },
  }
);
