"use client";
import { Button } from "./ui/button";
import { ModalRoot, ModalContent, ModalTrigger, ModalClose } from "./ui/modal";
import { Clipboard, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "sonner";

interface CImageProps {
  src: string;
  skeleton?: boolean;
  dropdown?: boolean;
  alt?: string;
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
  skeleton = true,
  dropdown = false,
  className,
  layout,
  width = 500,
  height = 500,
  delay,
  style = {},
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

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
    <div className="relative">
      {!loaded && skeleton && (
        <div className="absolute inset-0 shadow-2xl flex justify-center items-center animate-pulse transition-opacity bg-card" />
      )}

      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        onLoad={handleLoad}
        style={style}
        className={`${className} rounded-lg transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

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
                <ModalClose>
                  <Button onClick={handleCopy} className="w-full" variant="ghost">
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

