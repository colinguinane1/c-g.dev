"use client";

import CImage from "../c-image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ImageDropdownExample = () => {
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
      ></CImage>

      <div className="flex items-center justify-center pt-4 space-x-2">
        <Switch
          id={"loading"}
          checked={propState}
          onCheckedChange={() => {
            setPropState(!propState);
            setKey(key + 1);
          }}
        />
        <Label htmlFor={"loading"}>Dropdown</Label>
      </div>
    </div>
  );
};

export default ImageDropdownExample;
