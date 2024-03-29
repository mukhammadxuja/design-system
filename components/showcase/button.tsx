import React from "react";
import { ArrowUpRight, Bookmark, Filter, Share } from "lucide-react";
import Button from "../ui/button";

export const Buttons = () => {
  return (
    <div>
      <h3 className="text-h2">Buttons</h3>
      <div className="flex gap-2 py-6">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <div className="flex gap-2">
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
    </div>
  );
};
