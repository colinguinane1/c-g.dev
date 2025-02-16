"use client";

import { Check, Clipboard } from "lucide-react";
import React, { useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code = (props: any) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    }
  };

  return (
    <div>
      <div className="relative rounded-md my-4 dark:bg-card/50 bg-gray-800/80 border max-h-[300px]   overflow-auto ">
        <div className="flex sticky right-[5px] top-[5px] justify-between items-center">
          <div></div>
          <button
            type="button"
            className="text-gray-300 bg-transparent z-10 mr-2 border rounded-md backdrop-blur-md p-2 hover:text-input"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="text-green-500 w-5 h-5" />
            ) : (
              <Clipboard className="w-5 h-5" />
            )}
          </button>
        </div>
        <pre
          ref={codeRef}
          className={`${
            props.className || ""
          } border-none h-fit -mt-10 p-4 text-sm  overflow-auto`}
        >
          <code className={`whitespace-pre ${props.className || ""}`}>
            {props.children}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
