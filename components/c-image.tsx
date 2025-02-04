"use client";

import Image from "next/image";
import { useState } from "react";

interface CImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  layout?: string;
  className?: string;
}

const CImage: React.FC<CImageProps> = ({
  src,
  alt = "image",
  className,
  layout = "intrinsic",
  width = 500,
  height = 500,
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && (
        <div className="flex justify-center w-full h-full items-center">
          <div className="bg-card/90 animate-pulse rounded h-full w-full" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout={layout}
        className={className}
        width={width}
        height={height}
        onLoadingComplete={() => setLoaded(true)}
        style={{
          objectPosition: "top",
          display: loaded ? "block" : "none",
        }}
      />
    </>
  );
};

export default CImage;
