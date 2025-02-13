"use client";

import CImage from "./c-image";
import { Switch } from "./ui/switch";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const ImageExample = ({ previewProp, exampleProps }: { previewProp: string, exampleProps?: string }) => {
  // Define the props that can be toggled, with their default values
  const props = [
    { prop: "dropdown", default: false, label: "Dropdown" },
    { prop: "skeleton", default: false, label: "Skeleton" },
    { prop: "pause", default: false, label: "Pause" },
    { prop: "cache", default: true, label: "Cache"},
    { prop: "loadingIndicator", default: false, label: "Loading Indicator"},
    { prop: "hide", default: false, label: "Hide"}
  ];

  // Create a state object to manage the toggled state of props
  const [propState, setPropState] = useState<{ [key: string]: boolean }>({
    dropdown: false,
    skeleton: false,
    pause: false,
  });

  // Toggle function to change the state of a prop
  const toggleProp = (prop: string) => {
    setPropState((prev) => ({
      ...prev,
      [prop]: !prev[prop],
    }));
  };

  // If exampleProps is passed, ensure it's in the correct format (a single prop name like "pause")
  if (exampleProps && !propState[exampleProps]) {
    setPropState((prev) => ({
      ...prev,
      [exampleProps]: true,  // Set the prop to `true` by default if it's passed in `exampleProps`
    }));
  }

  // Find the prop object corresponding to the string passed in
  const prop = props.find((p) => p.prop === previewProp);

  return (
    <div className="mt-4">
      <CImage
        dropdown={propState.dropdown}
        skeleton={propState.skeleton}
        pause={propState.pause}
        loadingIndicator={propState.loadingIndicator}
        cache={propState.loadingIndicator}
        hide={propState.hide}
        width={300}
        height={300}
        delay={2000}
        src="/example.jpg"
      >
       
      </CImage>

      {/* Render the switch if the prop is found */}
      {prop && (
        <div className="flex items-center justify-center pt-4 space-x-2">
          <Switch
            id={prop.prop}
            checked={propState[prop.prop]}
            onCheckedChange={() => toggleProp(prop.prop)}
          />
          <Label htmlFor={prop.prop}>{prop.label}</Label>
        </div>
      )}
    </div>
  );
};

export default ImageExample;
