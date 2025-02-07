"use client";

import Skeleton from "@mui/material/Skeleton";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  style = {},
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <>
      {!loaded && (
        <div
          className={`flex justify-center aspect-video w-full h-full items-center`}
        >
          <Skeleton
            animation="wave"
            variant="rectangular"
            className="w-full h-full"
            sx={{ bgcolor: "black.900" }}
          />
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
        style={{ ...style, display: loaded ? "block" : "none" }}
      />
    </>
  );
};

export default CImage;
