import React, { useEffect, useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn  ";

type TabsPops = {
  data?: any[];
  depth?: 0 | 1 | 2 | 3;
  className?: string;
};

export default function Tabs({
  className,
  data,
  depth,
  ...props
}: TabsPops): JSX.Element {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);
  return (
    <div {...props} className={cn(tabsVariants({ depth }), className)}>
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-primary dark:bg-white text-primary" />
      </span>
      {data.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? `text-white dark:text-black` : `text-primary`
            } flex items-center gap-1 my-auto text-[16px] hover:text-muted cursor-pointer select-none rounded-full px-4 text-center font-medium duration-300`}
            onClick={() => setActiveTabIndex(index)}
          >
            <span>{tab?.icon}</span>
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}

const tabsVariants = cva(
  "w-fit flew-row relative flex h-14 rounded-full bg-background border border-border text-muted text-sm font-medium px-2 backdrop-blur-sm",
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
