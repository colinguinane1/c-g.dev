"use client";

import Image from "next/image";
import { useState } from "react";

interface CImageProps {
  src: string;
  alt: string;
  width?: number;
  layout?: "fill" | "responsive" | "fixed" | "intrinsic";
  height?: number;
  className?: string;
  style?: object;
  delay?: number;
}

const CImage: React.FC<CImageProps> = ({
  src,
  alt = "image",
  className,
  layout,
  width = 500,
  height = 500,
  delay,
  style = {},
}) => {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new window.Image();
  //   img.src = src;
  //   img.onload = () => {
  //     setLoaded(true);
  //   };
  // }, [src]);

  const handleLoad = () => {
    if (delay) {
      setTimeout(() => {
        setLoaded(true);
      }, delay);
    }
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <div
          className={`flex absolute aspect-video justify-center items-center transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="animate-pulse bg-card w-full h-full relative"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        onLoadingComplete={handleLoad}
        style={{ ...style, opacity: loaded ? 1 : 0 }}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
};

export default CImage;
