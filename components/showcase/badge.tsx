import React from "react";
import {
  ArrowUpRight,
  Bookmark,
  Filter,
  Share,
  CircleUserRound,
  Annoyed,
  TriangleAlert,
} from "lucide-react";
import Badge from "../ui/badge";
import InlineCode from "../ui/inline-code";

export const Badges = () => {
  return (
    <div className="pt-6">
      <h3 className="text-h2">Badge</h3>
      <div className="flex gap-2 pt-6">
        <Badge>Dark badge</Badge>
        <Badge color="info">Info badge</Badge>
        <Badge color="success">Success badge</Badge>
        <Badge color="warning">Warning badge</Badge>
        <Badge color="danger">Danger badge</Badge>
      </div>
      <div className="mt-6 space-y-2">
        <span className="flex space-x-2">
          <p className="text-s3">Size</p>
        </span>
        <div className="flex gap-2">
          <Badge size="sm" color="info">
            Badge size sm
          </Badge>
          <InlineCode line="size='sm'" />
        </div>
        <div className="flex gap-2">
          <Badge size="md" color="warning">
            Badge size md
          </Badge>
          <InlineCode line="size='md'" />
        </div>
        <div className="flex gap-2">
          <Badge size="lg" color="danger">
            Badge size lg
          </Badge>
          <InlineCode line="size='lg'" />
        </div>
      </div>
      <div className="my-6">
        <span className="flex space-x-2">
          <p className="text-s3">With icon</p>
        </span>
        <div className="flex gap-2">
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
      </div>
    </div>
  );
};
