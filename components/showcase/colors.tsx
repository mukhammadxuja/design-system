import React from "react";
import Tooltip from "../ui/tooltip";

export const Colors = () => {
  return (
    <div>
      <h3 className="text-h2">Colors</h3>
      <div className="flex gap-4 pt-6">
        <Tooltip title="brand">
          <div className="w-12 h-12 rounded-full bg-secondary border border-border" />
        </Tooltip>
        <Tooltip title="background">
          <div className="w-12 h-12 rounded-full bg-background border border-border" />
        </Tooltip>
        <Tooltip title="foreground">
          <div className="w-12 h-12 rounded-full bg-foreground border border-border" />
        </Tooltip>
        <Tooltip title="primary">
          <div className="w-12 h-12 rounded-full bg-primary border border-border" />
        </Tooltip>
        <Tooltip title="secondary">
          <div className="w-12 h-12 rounded-full bg-secondary border border-border" />
        </Tooltip>
        <Tooltip title="secondary-muted">
          <div className="w-12 h-12 rounded-full bg-secondary-muted border border-border" />
        </Tooltip>
        <Tooltip title="border">
          <div className="w-12 h-12 rounded-full bg-border border border-border" />
        </Tooltip>
      </div>
    </div>
  );
};
