import { cn } from "@/utils/cn  ";
import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";
import { useState } from "react";

type SwitchPops = {
  label?: string;
  radius?: "full" | "md" | "none";
  color?: "dark" | "info" | "success" | "warning" | "danger";
  className?: string;
};

export default function Switch({
  radius,
  label,
  className,
  ...props
}: SwitchPops) {
  const [enabled, setEnabled] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={theme === "dark"}
            readOnly
          />
          <div
            onClick={() =>
              theme == "dark" ? setTheme("light") : setTheme("dark")
            }
            {...props}
            className={cn(switchVariants({ radius }), className)}
          />
        </label>
        {label && <span className="text-h5 text-primary">{label}</span>}
      </div>
    </div>
  );
}

const switchVariants = cva(
  "w-11 h-6 bg-background peer peer-focus:ring-secondary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border  after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-secondary after:duration-200 shadow-sm",
  {
    variants: {
      radius: {
        full: "rounded-full after:rounded-full",
        md: "rounded-[8px] after:rounded-[8px]",
        none: "rounded-[3px] after:rounded-[3px]",
      },
    },
    defaultVariants: {
      radius: "full",
    },
  }
);
