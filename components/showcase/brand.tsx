import React from "react";
import Image from "next/image";
import Tooltip from "../ui/tooltip";

export const Brand = () => {
  return (
    <div className="pt-8">
      <h3 className="text-h2">Brand</h3>
      <div className="flex gap-2 py-6">
        <Tooltip title="Lazydev">
          <Image
            width={120}
            height={120}
            className="block dark:hidden w-12 cursor-pointer hover:opacity-80 duration-500 hover:rotate-180"
            src="/logo-light.svg"
            alt="Lazydev UI logo"
          />
        </Tooltip>
        <Tooltip title="Lazydev">
          <Image
            width={120}
            height={120}
            className="hidden dark:block w-12 cursor-pointer hover:opacity-80 duration-500 hover:rotate-180"
            src="/logo-dark.svg"
            alt="Lazydev UI logo"
          />
        </Tooltip>
      </div>
    </div>
  );
};
