"use client";

import * as React from "react";
import { Box } from "lucide-react";
import Button from "./ui/button";

export function ModeToggle() {
  return (
    <div className="flex gap-2">
      <Button className="flex items-center gap-2">
        <Box className="w-4 h-4" />
        Toggle Mode
      </Button>
      <Button variant="secondary">Toggle Mode</Button>
      <Button variant="ghost">Toggle Mode</Button>
      <Button variant="outline">Toggle Mode</Button>

      {/* <div className="relative">
        <div className="absolute -inset-0.5 rounded-[8px] bg-gradient-to-r from-[#353435] to-[#7a6e50] opacity-75 -z-10"></div>
        <Button className="bg-gradient-to-br from-[#050305] via-[#342d3c] to-[#806d51]">
          Toggle Mode
        </Button>
      </div> */}
    </div>
  );
}
