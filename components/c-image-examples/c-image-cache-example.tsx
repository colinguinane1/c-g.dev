"use client";

import CImage from "../c-image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ImageCacheExample = ({}: {}) => {
  const [propState, setPropState] = useState(true);
  const [key, setKey] = useState(0);

  return (
    <div key={key} className="mt-4">
      <CImage
        cache={propState}
        width={300}
        height={300}
        delay={2000}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F6985001%2Fpexels-photo-6985001.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D3%26h%3D750%26w%3D1260&f=1&nofb=1&ipt=8fa86b9c20df02ec9b860821dd6e23b1670f0a292ac298534df094cfc73843c7&ipo=image"
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
        <Label htmlFor={"loading"}>Cache</Label>
      </div>
    </div>
  );
};

export default ImageCacheExample;
