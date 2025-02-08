"use client";

import { Button } from "./ui/button";
import { ModalRoot, ModalContent, ModalTrigger } from "./ui/modal";
import { Clipboard, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

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

  const handleLoad = () => {
    if (delay) {
      setTimeout(() => {
        setLoaded(true);
      }, delay);
    } else {
      setLoaded(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div
          className={`absolute inset-0 flex justify-center items-center animate-pulse transition-opacity bg-card ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        ></div>
      )}

      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        onLoadingComplete={handleLoad}
        // onLoadingComplete={() => setLoaded(true)}
        style={{ ...style, opacity: loaded ? 1 : 0 }}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {loaded && (
        <div className={`absolute bottom-0 right-0`}>
          <ModalRoot>
            <ModalTrigger>
              <Button variant={"ghostNoBg"}>
                <BsThreeDots />
              </Button>
            </ModalTrigger>
            <ModalContent className=" h-fit md:w-fit  pb-4">
              <div className="flex items-start flex-col gap-2">
                <Button variant={"ghost"}>
                  <Download size={15} />
                  Download Image
                </Button>
                <Button variant={"ghost"}>
                  <Clipboard size={15} />
                  Copy Link
                </Button>
              </div>
            </ModalContent>
          </ModalRoot>
        </div>
      )}
    </div>
  );
};

export default CImage;
