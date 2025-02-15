"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Spinner } from "@radix-ui/themes";
import { Clipboard, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "sonner";

interface CImageProps {
  src: string;
  pause?: boolean;
  hide?: boolean;
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
  hide,
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
  const [imageHidden, setImageHidden] = useState(hide ? true : false);

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
        <div className={`${className} absolute inset-0 transition-all shadow-2xl flex justify-center items-center animate-pulse bg-card shimmer`}>
          {loadingIndicator && (
            <div className="z-20">
              {" "}
              <Spinner />
            </div>
          )}
        </div>
      )}
      {loaded && imageHidden && (
        <div
          className={`backdrop-blur-3xl grid place-content-center absolute w-full h-full rounded-lg z-10 overflow-hidden transition-opacity duration-500 ${
            imageHidden ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button variant={"ghost"} onClick={() => setImageHidden(false)}>
            Unhide
          </Button>
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
        className={`${className} z-0  transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {children && loaded && (
        <div className="absolute bottom-2 left-2 p-2 ">{children}</div>
      )}
      {loaded && dropdown && (
        <div className="absolute bottom-2  right-2">
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger>
                {" "}
                <Button variant="ghost" size="icon">
                  <BsThreeDots size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-fit">
                {" "}
                <div className="flex items-start w-fit flex-col">
                  <DialogClose>
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
                  </DialogClose>
                  <DialogClose className="">
                    <Button
                      onClick={handleCopy}
                      className="w-full"
                      variant="ghost"
                    >
                      <Clipboard size={15} />
                      Copy Link
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="md:hidden">
            <Drawer>
              <DrawerTrigger>
                <Button variant="ghost" size="icon">
                  <BsThreeDots size={20} />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-fit pb-4 ">
                <div className="flex items-start flex-col px-4 pt-4 gap-2">
                  {" "}
                  <DrawerClose>
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
                  </DrawerClose>
                  <DrawerClose className="">
                    <Button
                      onClick={handleCopy}
                      className="w-full"
                      variant="ghost"
                    >
                      <Clipboard size={15} />
                      Copy Link
                    </Button>
                  </DrawerClose>
                </div>{" "}
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      )}
    </div>
  );
};

export default CImage;
