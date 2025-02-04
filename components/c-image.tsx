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
  style?: object;
  delay?: number;
}

const CImage: React.FC<CImageProps> = ({
  src,
  alt = "image",
  className,
  layout = "intrinsic",
  width = 500,
  height = 500,
  delay = 0,
  style = {}

}) => {
  const [loaded, setLoaded] = useState(false);

  const imageReady = () => {
    setTimeout(() => {
      setLoaded(true);
    }, delay);
  };

  return (
    <>
      {!loaded && (
        <div className="flex justify-center aspect-video w-full h-full items-center">
          <div className="bg-card/90 animate-pulse rounded h-full w-full" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout={layout}
        className={className}
        unoptimized={true}
        width={width}
        height={height}
        onLoadingComplete={imageReady}
        style={{ ...style, display: loaded ? 'block' : 'none' }}
      />
    </>
  );
};

export default CImage;
