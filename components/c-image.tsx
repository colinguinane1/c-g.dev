"use client";

import { Button } from "./ui/button";
import { ModalRoot, ModalContent, ModalTrigger, ModalClose } from "./ui/modal";
import { Clipboard, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Oval } from "react-loader-spinner";
import { toast } from "sonner";

interface CImageProps {
  src: string;
  pause?: boolean;
  children?: React.ReactNode;
  skeleton?: boolean;
  cache?: boolean;
  dropdown?: boolean;
  loadingIndicator?: boolean;
  alt?: string;
  width?: number;
  layout?: "fill" | "responsive" | "fixed" | "intrinsic";
  height?: number;
  className?: string;
  style?: object;
  delay?: number;
}

const CImage: React.FC<CImageProps> = ({
  children,
  src,
  alt = "image",
  pause = false,
  cache = true,
  skeleton = true,
  loadingIndicator = false,
  dropdown = false,
  className,
  layout,
  width = 500,
  height = 500,
  delay,
  style = {},
}) => {
  const [loaded, setLoaded] = useState(skeleton ? false : true);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    if (img.complete && cache && !pause) {
      setLoaded(true);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://c-g.dev${src}`);
    toast.success("Link Copied to Clipboard");
  };

  return (
    <div className="relative">
      {!loaded && skeleton && (
        <div className="absolute inset-0 rounded-lg transition-all shadow-2xl flex justify-center items-center animate-pulse bg-card shimmer">
          {loadingIndicator && (
            <Oval
              visible={true}
              height="20"
              width="20"
              color="gray"
              secondaryColor="black"
            />
          )}
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        quality={100}
        onLoadingComplete={() => {
          if (delay && !pause) {
            setTimeout(() => setLoaded(true), delay);
          } else {
            if (!pause) {
              setLoaded(true);
            }
          }
        }}
        style={style}
        className={`${className} rounded-lg transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {children && loaded && (
        <div className="absolute bottom-2 left-2 p-2 ">{children}</div>
      )}
      {loaded && dropdown && (
        <div className="absolute bottom-2 right-2">
          <ModalRoot>
            <ModalTrigger>
              <Button variant="ghost" size="icon">
                <BsThreeDots size={20} />
              </Button>
            </ModalTrigger>
            <ModalContent className="h-fit md:w-fit p-2 overflow-y-none">
              <div className="flex items-start flex-col">
                <ModalClose>
                  <a download={src} href={src}>
                    <Button
                      onClick={() => toast.success("Download Started")}
                      className="w-full"
                      variant="ghost"
                    >
                      <Download size={15} />
                      Download Image
                    </Button>
                  </a>
                </ModalClose>
                <ModalClose className="md:w-full">
                  <Button
                    onClick={handleCopy}
                    className="w-full"
                    variant="ghost"
                  >
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
