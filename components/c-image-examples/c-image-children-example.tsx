"use client";

import CImage from "../c-image";
import { Avatar } from "../ui/avatar";
import { Switch } from "@/components/ui/switch";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const ImageChildrenExample = () => {
  const [propState, setPropState] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <div className="mt-4">
      <CImage
        dropdown={propState}
        width={300}
        height={300}
        delay={2000}
        src="/example.jpg"
      >
        {propState && (
          <div className="flex items-center  gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage className="" src="/portrait.JPG"></AvatarImage>
            </Avatar>
            <p>Colin Guinane</p>
            <GoArrowUpRight className="-ml-" size={18} />
          </div>
        )}
      </CImage>

      <div className="flex items-center justify-center pt-4 space-x-2">
        <Switch
          id={"loading"}
          checked={propState}
          onCheckedChange={() => {
            setPropState(!propState);
            setKey(key + 1);
          }}
        />
        <Label htmlFor={"loading"}>Children</Label>
      </div>
    </div>
  );
};

export default ImageChildrenExample;
