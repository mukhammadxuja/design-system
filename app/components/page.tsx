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
import Navbar from "../../components/navbar";
import { Typography } from "@/components/showcase/typography  ";
import { Buttons } from "@/components/showcase/button  ";
import { Badges } from "@/components/showcase/badge  ";
import { Cards } from "@/components/showcase/cards  ";
import { Brand } from "@/components/showcase/brand  ";
import { Colors } from "@/components/showcase/colors  ";
import { Tooltips } from "@/components/showcase/tooltip  ";
import { InlineCodes } from "@/components/showcase/inline-code  ";
import { Codes } from "@/components/showcase/code  ";
import Tabs from "@/components/ui/tabs  ";

import {
  Aperture,
  AudioLines,
  Brain,
  DraftingCompass,
  PartyPopper,
  Rss,
  Sparkles,
} from "lucide-react";

export default function Components() {
  const [themeColor, setThemeColor] = useState("green");
  let allTabs = [
    {
      id: "top-picks",
      name: "Top Picks",
      icon: <Sparkles className="w-4" />,
    },
    {
      id: "art",
      name: "Art",
      // icon: <PartyPopper className="w-4" />,
    },
    {
      id: "design",
      name: "Design",
      // icon: <DraftingCompass className="w-4" />,
    },
    {
      id: "photograph",
      name: "Photograph",
      // icon: <Aperture className="w-4" />,
    },
    {
      id: "music",
      name: "Music",
      // icon: <AudioLines className="w-4" />,
    },
    {
      id: "life-style",
      name: "Life Style",
      // icon: <Brain className="w-4" />,
    },
  ];
  return (
    <main className="py-10 md:pt-28 bg-foreground">
      <Navbar />
      <div className="max-w-[896px] mx-auto space-y-6">
        <div>
          <h1 className="text-h1 pb-5 border-b border-border">
            Components / Design System
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex pt-4 gap-1">
              <Badge color="warning">Work in Progress</Badge>
              <Badge color="info">v2.0</Badge>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setThemeColor("green")}
                className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary"
              >
                {themeColor === "green" && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                // onClick={() => setThemeColor("purple")}
                className="flex items-center justify-center w-5 h-5 cursor-not-allowed rounded-full bg-[#38508d]"
              >
                {themeColor === "purple" && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                // onClick={() => setThemeColor("yellow")}
                className="flex items-center justify-center w-5 h-5 cursor-not-allowed rounded-full bg-[#e2872c]"
              >
                {themeColor === "yellow" && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
              <button
                // onClick={() => setThemeColor("red")}
                className="flex items-center justify-center w-5 h-5 cursor-not-allowed rounded-full bg-[#ce3f49]"
              >
                {themeColor === "red" && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        <Tabs data={allTabs} depth={3} />

        <Brand />

        <Colors />

        <Typography />

        <Buttons />

        <Badges />

        <Tooltips />

        <Cards />

        <InlineCodes />

        <Codes />

        <div className="flex gap-2">
          <Switch radius="full" label="Airplane Mode" />
        </div>

        <Callout variant="danger">
          <h5 className="text-h4 font-semibold">Info Callout</h5>
          <p className="text-lg text-opacity-80 leading-tight text-gray-500 font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            accusamus voluptatem quia. Repudiandae earum, inventore culpa velit
            odio quos laborum, modi, eos corporis aperiam sequi quaerat! Eos
            nisi inventore aspernatur, dolorum animi exercitationem, natus dolor
            expedita harum labore aliquam ducimus delectus in facere rerum
            officiis consequatur. Aliquam aspernatur expedita odio.
          </p>
        </Callout>

        <div className="">
          <div className="relative w-full">
            {/* <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-pink-600 via-yellow-600 to-emerald-600 opacity-75 blur animate"></div> */}
            <div className="relative flex h-20 w-full items-center justify-center rounded-lg bg-background text-slate-300 border border-border">
              Gradient shadow
            </div>
          </div>
        </div>
        <Input />
      </div>
    </main>
  );
}
