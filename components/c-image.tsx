"use client";

import { Button } from "./ui/button";
import { ModalRoot, ModalContent, ModalTrigger, ModalClose } from "./ui/modal";
import { Clipboard, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "sonner";

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

  const handleCopy = () => {
    navigator.clipboard.writeText(src);
    toast.success("Link Copied to Clipboard");
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
        <div className={`absolute bottom-2 right-2`}>
          <ModalRoot>
            <ModalTrigger>
              <Button variant={"ghost"} size={"icon"}>
                <BsThreeDots size={20} />
              </Button>
            </ModalTrigger>
            <ModalContent className=" h-fit md:w-fit px-4  pb-2">
              <div className="flex items-start flex-col ">
                <ModalClose>
                  <a download={src} href={src}>
                    <Button
                      onClick={() => toast.success("Download Started")}
                      variant={"ghost"}
                    >
                      <Download size={15} />
                      Download Image
                    </Button>
                  </a>
                </ModalClose>
                <ModalClose>
                  <Button onClick={handleCopy} variant={"ghost"}>
                    <Clipboard size={15} />
                    Copy Link
                  </Button>
                </ModalClose>
              </div>
            </ModalContent>
          </ModalRoot>
        </div>
      )}
    </div>
  );
};

export default CImage;
