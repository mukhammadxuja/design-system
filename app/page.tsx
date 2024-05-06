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
import Navbar from "../components/navbar";
import { Buttons } from "@/components/showcase/button  ";
import {
  ArrowUpRight,
  Bookmark,
  Filter,
  Share,
  CircleUserRound,
  Annoyed,
  TriangleAlert,
} from "lucide-react";

export default function Home() {
  const [themeColor, setThemeColor] = useState("green");

  let data = [
    {
      id: 1,
      title: "Buttons",
      desc: "",
      even: false,
      children: (
        <div className="animate-infinite-slider mt-3 flex gap-2 py-6">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button className="flex items-center gap-1.5">
            <Bookmark className="w-4 h-4" />
            Save
          </Button>
          <Button variant="secondary" className="flex items-center gap-1.5">
            Share
            <Share className="w-4 h-4" />
          </Button>
          <Button variant="ghost" className="flex items-center gap-1.5">
            Portfolio
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" className="flex items-center gap-1.5">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      ),
    },
    {
      id: 2,
      title: "Badges",
      desc: "",
      even: false,
      children: (
        <div className="animate-infinite-slider mt-5 flex gap-2 py-6">
          <Badge>Dark badge</Badge>
          <Badge color="info">Info badge</Badge>
          <Badge color="success">Success badge</Badge>
          <Badge color="warning">Warning badge</Badge>
          <Badge color="danger">Danger badge</Badge>
          <Badge className="flex items-center gap-1">
            <CircleUserRound className="w-[0.90rem] h-[0.90rem]" />
            <span>Profile</span>
          </Badge>
          <Badge color="info" className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-info-text" />
            <span>Open to work</span>
          </Badge>
          <Badge color="success" className="flex items-center gap-1">
            <Annoyed className="w-[0.90rem] h-[0.90rem]" />
            <span>Online</span>
          </Badge>
          <Badge color="warning" className="flex items-center gap-1">
            <TriangleAlert className="w-[0.90rem] h-[0.90rem]" />
            <span>Warning</span>
          </Badge>
          <Badge color="danger" className="flex items-center gap-1">
            <div className="flex items-center justify-center w-[0.95rem] h-[0.95rem] rounded-full bg-danger-text text-white text-[10px]">
              2
            </div>
            <span>Messages</span>
          </Badge>
        </div>
      ),
    },
    {
      id: 3,
      title: "Tooltip",
      desc: "",
      even: false,
      // icon: <DraftingCompass className="w-4" />,
    },
    {
      id: 4,
      title: "Code Blocks",
      desc: "",
      even: true,
      // icon: <Aperture className="w-4" />,
    },
    {
      id: 5,
      title: "Music",
      desc: "",
      even: false,
      // icon: <AudioLines className="w-4" />,
    },
    {
      id: 6,
      title: "Life Style",
      desc: "",
      even: false,
      // icon: <Brain className="w-4" />,
    },
    {
      id: 7,
      title: "Tabs",
      desc: "",
      even: true,
      // icon: <Brain className="w-4" />,
    },
  ];

  return (
    <main className="py-10 mt-10 space-y-8 bg-foreground">
      <Navbar />
      <div className="max-w-[896px] mx-auto">
        <div className="grid auto-rows-[192px] grid-cols-3 gap-4">
          {data.map((grid, i) => (
            <div
              key={i}
              className={`relative overflow-hidden row-span-1 rounded-[8px] border-2 border-border bg-background p-4 ${
                grid.even ? "col-span-2" : ""
              }`}
            >
              <h3 className="text-h3">{grid.title}</h3>
              {grid.children}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
