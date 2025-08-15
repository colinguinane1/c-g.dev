import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { cn } from "@/lib/utils";
import { Computer, ComputerIcon, Database, Monitor } from "lucide-react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiExpo, SiApple, SiAndroid, SiInternetcomputer } from "react-icons/si";

const iconSize = 18;

interface PlatformCardProps {
  tech: string;
  key: string;
  className?: string;
  ghost?: boolean;
  showLabel?: boolean;
  showDescription?: boolean;
  size?: "sm" | "md";
}

const PlatformCard: React.FC<PlatformCardProps> = ({
  tech,
  showLabel = false,
  className,
  ghost = false,
  showDescription = false,
  size = "md",
}) => {
  const platforms = [
 {
      label: "ios",
      title: "iOS",
    color: ghost ? "128, 128, 128" : "100, 200, 100",
       icon: (
         <SiApple size={iconSize} color={ghost ? "gray" : "Chartreuse"} />
       ),
      description: "React Native Framework"
    },
     {
      label: "android",
      title: "Android",
           color: ghost ? "128, 128, 128" : "128, 128, 128",
      icon: <SiAndroid size={iconSize} color={ghost ? "gray" : "gray"} />,
      description: "React Native Framework"
    },
        {
      label: "web",
      title: "Web",
           color: ghost ? "128, 128, 128" : "128, 128, 128",
      icon: <Monitor size={iconSize} color={ghost ? "gray" : "gray"} />,
      description: "React Native Framework"
    },
  ];
  const platform = platforms.find((platform) => platform.label === tech);
  if (platform) {
    if (size === "md") {
      return (
        <div
          key={platform.label}
          className={cn(
            `flex items-center gap-2 bg-card relative  p-2 rounded-md ${
              ghost ? "" : "border"
            }`,
            className
          )}
        >
          <div
            style={{
              backgroundColor: ghost ? `` : `rgba(${platform.color}, 0.5)`,
              borderColor: ghost ? `` : `rgba(${platform.color})`,
            }}
            className="w-10 h-10 opacity-15 relative border items-center  justify-center flex rounded-md"
          ></div>{" "}
          <div className="absolute left-[20px] "> {platform.icon}</div>
          {showLabel && (
            <div className="flex flex-col gap-0">
              <h1 className=""> {platform.title}</h1>
              {showDescription && (
                <p className="md:block -mt-[2px]">{platform.description}</p>
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <TooltipProvider key={platform.label}>
          <Tooltip>
            <TooltipTrigger>
              <div
                style={{
                  backgroundColor: ghost ? `` : `rgba(${platform.color}, 0.5)`,
                  borderColor: ghost ? `` : `rgba(${platform.color})`,
                }}
                className={`p-1 gap-1 items-center  justify-center flex rounded-md ${
                  ghost ? "" : "border px-2"
                }`}
              >
                {" "}
                <div className="  "> {platform.icon}</div>
                {showLabel && (
                  <div className="flex items-center justify-center flex-col">
                    <h1 className="font-normal text-[rgb(128,128,128)]">
                      {" "}
                      {platform.title}
                    </h1>
                  </div>
                )}
              </div>{" "}
            </TooltipTrigger>
            <TooltipContent>{platform.label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }
  } else {
    return (
      <div
        className={cn(
          `flex items-center gap-2 border bg-card relative  p-2 rounded-md`
        )}
      >
        <div className="w-10 h-10 bg-gray-200 border-gray-500 opacity-15 relative border items-center  justify-center flex rounded-md"></div>{" "}
        <div className="absolute left-[20px] ">
          <Database size={iconSize} />
        </div>
        {showLabel && (
          <div className="flex flex-col">
            <h1 className="font-bold tracking-tighter"> {tech}</h1>
          </div>
        )}
      </div>
    );
  }
};

export default PlatformCard;
