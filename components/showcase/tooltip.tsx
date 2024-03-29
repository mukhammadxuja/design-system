import React from "react";
import Button from "../ui/button";
import Tooltip from "../ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import InlineCode from "../ui/inline-code";

export const Tooltips = () => {
  return (
    <div className="pt-6">
      <h3 className="text-h2">Tooltip</h3>
      <div className="my-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Tooltip animation="scale" title="@mukhamadxuja">
              <Button variant="ghost" className="flex items-center gap-1.5">
                <ArrowUpRight className="w-4 h-4" />
                Github
              </Button>
            </Tooltip>
            <InlineCode line="position='top'" />
            <InlineCode line="animation='scale'" />
          </div>
          <div className="flex items-center gap-2">
            <Tooltip position="bottom" title="@akzmsh">
              <Button variant="ghost" className="flex items-center gap-1.5">
                <ArrowUpRight className="w-4 h-4" />
                Telegram
              </Button>
            </Tooltip>
            <InlineCode line="position='bottom'" />
            <InlineCode line="animation='translate'" />
          </div>
        </div>
      </div>
    </div>
  );
};
