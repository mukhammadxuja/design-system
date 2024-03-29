"use client";
import { ModeToggle } from "@/components/toggle  ";
import Badge from "@/components/ui/badge  ";
import Button from "@/components/ui/button  ";
import Callout from "@/components/ui/callout  ";
import Card from "@/components/ui/card  ";
import Code from "@/components/ui/code  ";
import InlineCode from "@/components/ui/inline-code  ";
import { Input } from "@/components/ui/input  ";
import Switch from "@/components/ui/switch  ";
import Tooltip from "@/components/ui/tooltip  ";
import { Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Navbar from "./navbar";

export default function Home() {
  const [themeColor, setThemeColor] = useState("green");
  return (
    <main className="p-10 space-y-8 bg-foreground">
      <Navbar />
      <div className="max-w-[896px] mx-auto">
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`row-span-1 rounded-xl border-2 border-border bg-background p-4  ${
                i === 3 || i === 6 ? "col-span-2" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}
