"use client";

import { Oval } from "react-loader-spinner";

export default function Loading() {
  return (
    <Oval
      visible={true}
      height="20"
      width="20"
      color="gray"
      secondaryColor="black"
    />
  );
}
