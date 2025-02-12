"use client";

import CImage from "./c-image";
import { Switch } from "./ui/switch";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ImageExample = (previewProp: string) => {
  const props = [{ prop: "dropdown", default: false, label: "Dropdown" }];

  const [propState, setPropState] = useState(false);

  return (
    <div className="mt-4">
      <CImage dropdown width={300} height={300} delay={2000} src="/example.jpg">
        Example
      </CImage>
      {props.find((p) => p.prop === previewProp) && (
        <div className="flex items-center justify-center pt-4 space-x-2">
          <Switch id="loading-indicator" />
          <Label htmlFor="loading-indicator">Loading Indicator</Label>
        </div>
      )}
    </div>
  );
};

export default ImageExample;
