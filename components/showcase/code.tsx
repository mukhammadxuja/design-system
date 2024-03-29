import React from "react";
import Button from "../ui/button";
import Tooltip from "../ui/tooltip";
import { ArrowUpRight } from "lucide-react";
import InlineCode from "../ui/inline-code";
import Code from "../ui/code";

export const Codes = () => {
  const jsCode = `
  async function sayHello(name) {
  console.log('Hello', name);
}
  `;

  const jsxCode = `
  function sayHello(name) {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  )
}
  `;

  return (
    <div className="pt-6">
      <h3 className="text-h2">Code block</h3>
      <div className="my-6 space-y-5">
        <Code code={jsCode} lines={["4:6", 2]} language="js" depth={2} />
        <Code
          title="Code snippet title"
          code={jsxCode}
          lines={[4]}
          language="jsx"
          depth={2}
        />
      </div>
    </div>
  );
};
