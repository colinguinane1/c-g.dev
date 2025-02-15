"use client";

import CImage from "../c-image";
import { Switch } from "@/components/ui/switch";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ImageSpinnerExample = () => {
  const [loadingIndicator, setLoadingIndicator] = useState(true);

  return (
    <div className="mt-4">
      <CImage
        loadingIndicator={loadingIndicator}
        pause
        width={300}
        height={300}
        delay={2000}
          className="rounded-lg"
        src="/example.jpg"
      ></CImage>

      <div className="flex items-center justify-center pt-4 space-x-2">
        <Switch
          id={"loading"}
          checked={loadingIndicator}
          onCheckedChange={() => setLoadingIndicator(!loadingIndicator)}
        />
        <Label htmlFor={"loading"}>Loading Indicator</Label>
      </div>
    </div>
  );
};

export default ImageSpinnerExample;
