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

export default function Home() {
  const [themeColor, setThemeColor] = useState("green");

  const code = `
  async function sayHello(name) {
  console.log('Hello', name);
}
  `;
  return (
    <main className="p-10 space-y-8 bg-foreground">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setThemeColor("green")}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-secondary"
          >
            {themeColor === "green" && <Check className="w-4 h-4 text-white" />}
          </button>
          <button
            onClick={() => setThemeColor("purple")}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-[#38508d]"
          >
            {themeColor === "purple" && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <button
            onClick={() => setThemeColor("yellow")}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-[#e2872c]"
          >
            {themeColor === "yellow" && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
          <button
            onClick={() => setThemeColor("red")}
            className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ce3f49]"
          >
            {themeColor === "red" && <Check className="w-4 h-4 text-white" />}
          </button>
        </div>
        <Switch radius="full" label="Theme" />
      </div>

      <div>
        <span
          className="animate-text-gradient bg-gradient-to-r from-gray-500 via-gray-400 to-gray-600 dark:from-emerald-200 dark:via-emerald-100 dark:to-emerald-300 
    bg-[200%_auto] bg-clip-text text-transparent"
        >
          hello, animated text gradient
        </span>
      </div>

      <ModeToggle />

      <InlineCode line="const foo = () => 'bar'" />
      <Code title="Code snippet title" code={code} language="js" depth={2} />

      <div className="flex gap-2">
        <Badge>Dark Pill</Badge>
        <Badge color="info">Info Pill</Badge>
        <Badge color="success">Success Pill</Badge>
        <Badge color="warning">Warning Pill</Badge>
        <Badge color="danger">Danger Pill</Badge>
      </div>

      <Tooltip animation="translate" position="top" title="@mukhammadxuja">
        <Button>Home</Button>
      </Tooltip>

      <div className="flex gap-2">
        <Switch radius="full" label="Airplane Mode" />
      </div>

      <Card depth={1} title="Title for the card">
        <p className="text-primary font-medium">Base Card</p>
      </Card>

      <Callout variant="warning">Info Callout</Callout>

      <div className="">
        <div className="relative w-full">
          {/* <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-pink-600 via-yellow-600 to-emerald-600 opacity-75 blur animate"></div> */}
          <div className="relative flex h-20 w-full items-center justify-center rounded-lg bg-background text-slate-300 border border-border">
            Gradient shadow
          </div>
        </div>
      </div>
      <Input />

      <div className="space-y-2">
        <h1 className="text-h1">
          Whereas disregard and contempt for human rights have resulted.
        </h1>
        <h2 className="text-h2">
          Whereas disregard and contempt for human rights have resulted.
        </h2>
        <h3 className="text-h3">
          Whereas disregard and contempt for human rights have resulted.
        </h3>
        <h4 className="text-h4">
          Whereas disregard and contempt for human rights have resulted.
        </h4>
        <h5 className="text-h5">
          Whereas disregard and contempt for human rights have resulted.
        </h5>
        <h6 className="text-h6">
          Whereas disregard and contempt for human rights have resulted.
        </h6>
      </div>

      <div className="space-y-2">
        <h1 className="text-s7">
          Whereas disregard and contempt for human rights have resulted.
        </h1>
        <h2 className="text-s6">
          Whereas disregard and contempt for human rights have resulted.
        </h2>
        <h3 className="text-s5">
          Whereas disregard and contempt for human rights have resulted.
        </h3>
        <h4 className="text-s4">
          Whereas disregard and contempt for human rights have resulted.
        </h4>
        <h5 className="text-s3">
          Whereas disregard and contempt for human rights have resulted.
        </h5>
        <h6 className="text-s2">
          Whereas disregard and contempt for human rights have resulted.
        </h6>
        <h6 className="text-s1">
          Whereas disregard and contempt for human rights have resulted.
        </h6>
      </div>
    </main>
  );
}
