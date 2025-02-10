"use client";

import { Button } from "../ui/button";
import { useState } from "react";
import { IoReload } from "react-icons/io5";

export default function Viewport({
  children,
  reloadButton,
}: {
  children: React.ReactNode;
  reloadButton?: boolean;
}) {
  const [key, setKey] = useState(0);
  return (
    <div
      key={key}
      className="bg-card/60 relative grid p-4 h-[300px] my-4  rounded-md place-content-center border"
    >
      {children}
      {reloadButton && (
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => {
            setKey((prev) => prev + 1);
          }}
          className="absolute top-2 right-2 group "
        >
          <IoReload className="group-active:rotate-180 transition-all duration-200" />
        </Button>
      )}
    </div>
  );
}
