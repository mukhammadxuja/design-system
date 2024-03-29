import React from "react";
import Button from "../ui/button";
import Tooltip from "../ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import InlineCode from "../ui/inline-code";

export const InlineCodes = () => {
  return (
    <div className="pt-6">
      <h3 className="text-h2">InlineCode</h3>
      <div className="my-6">
        <InlineCode line="const inlineCode = true;" />
      </div>
    </div>
  );
};
