"use client";

import CImage from "../c-image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ImageSkeletonExample = () => {
  const [propState, setPropState] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <div key={key} className="mt-4">
      <CImage
        skeleton={propState}
        pause
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
        <Label htmlFor={"loading"}>Skeleton</Label>
      </div>
    </div>
  );
};

export default ImageSkeletonExample;
