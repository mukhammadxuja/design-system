import React from "react";
import { ArrowUpRight, Bookmark, Filter, Share } from "lucide-react";
import Button from "../ui/button";
import Card from "../ui/card";
import InlineCode from "../ui/inline-code";

export const Cards = () => {
  return (
    <div>
      <h3 className="text-h2">Cards</h3>
      <div className="flex gap-2 pt-6">
        <Card>
          <h5 className="text-h5">Base Card</h5>
        </Card>
      </div>
      <div className="flex gap-2 pt-6">
        <Card title="Title for the card" depth={1}>
          <div className="flex gap-2">
            <h5 className="text-h5">Title</h5>
            <InlineCode line="title='Title for the card'" />
          </div>
        </Card>
      </div>
      <div className="flex gap-2 pt-6">
        <Card depth={1}>
          <div className="flex gap-2">
            <h5 className="text-h5">Shadow 1</h5>
            <InlineCode line="depth={1}" />
          </div>
        </Card>
      </div>
      <div className="flex gap-2 pt-6">
        <Card depth={2}>
          <div className="flex gap-2">
            <h5 className="text-h5">Shadow 2</h5>
            <InlineCode line="depth={2}" />
          </div>
        </Card>
      </div>
      <div className="flex gap-2 pt-6">
        <Card depth={3}>
          <div className="flex gap-2">
            <h5 className="text-h5">Shadow 3</h5>
            <InlineCode line="depth={3}" />
          </div>
        </Card>
      </div>
    </div>
  );
};
