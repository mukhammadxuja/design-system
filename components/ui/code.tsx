import { cn } from "@/utils/cn  ";
import { cva } from "class-variance-authority";
import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import Button from "./button";
import { Check, Clipboard } from "lucide-react";

type codeBlockProps = {
  code: string;
  language: string;
  title?: string;
  lines?: any[];
  depth?: 0 | 1 | 2 | 3;
  className?: string;
};

export default function Code({
  code,
  depth,
  language,
  title,
  lines,
  className,
  ...props
}: codeBlockProps) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    // Logic to copy `code`
    copyToClipboard(code);
  };
  return (
    <div className="bg-primary dark:bg-background pb-4 rounded-lg border border-border">
      <CodeBlock code={code} language={language} lines={lines}>
        <div className="relative">
          {title && (
            <p className="px-5 py-3 border-b border-gray-600 dark:border-border text-muted text-sm font-medium">
              Code snippet title
            </p>
          )}
          <CodeBlock.Code
            {...props}
            className={cn(codeVariants({ depth }), className)}
          >
            {({ isLineHighlighted }) => (
              <div
                className={`table-row hover:bg-gray-700/40 dark:hover:!bg-secondary-muted ${
                  isLineHighlighted && "bg-gray-700/40 dark:bg-secondary-muted"
                }`}
              >
                <CodeBlock.LineNumber
                  className={`table-cell pl-5 pr-4 text-sm text-right border-2 border-transparent select-none ${
                    isLineHighlighted
                      ? "text-white dark:text-primary border-l-secondary"
                      : "text-gray-400 dark:text-muted"
                  }`}
                />
                <CodeBlock.LineContent className="table-cell w-full pr-6">
                  <CodeBlock.Token className="" />
                </CodeBlock.LineContent>
              </div>
            )}
          </CodeBlock.Code>

          <Button
            variant="secondary"
            onClick={copyCode}
            className="absolute top-2 right-2 p-2"
          >
            {state.value ? (
              <Check className="w-4 h-4" />
            ) : (
              <Clipboard className="w-4 h-4" />
            )}
          </Button>
        </div>
      </CodeBlock>
    </div>
  );
}

const codeVariants = cva("pt-4", {
  variants: {
    depth: {
      0: "shadow-none",
      1: "shadow-sm",
      2: "shadow-lg",
      3: "shadow-xl",
    },
  },
  defaultVariants: {
    depth: 0,
  },
});

// https://react-code-block.netlify.app/examples
