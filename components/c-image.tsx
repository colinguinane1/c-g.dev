"use client";

import Image from "next/image";
import { useState } from "react";

interface CImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: object;
  delay?: number;
}

const CImage: React.FC<CImageProps> = ({
  src,
  alt = "image",
  className,
  width = 500,
  height = 500,
  delay = 0,
  style = {},
}) => {
  const [loaded, setLoaded] = useState(false);

  const imageReady = () => {
    setTimeout(() => {
      setLoaded(true);
    }, delay);
  };

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-card/90 animate-pulse rounded">
          <div className="h-full w-full" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className} ${loaded ? "block" : "hidden"}`}
        width={width}
        height={height}
        onLoad={imageReady}
        style={style}
      />
    </div>
  );
};

export default CImage;