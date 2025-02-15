import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Database } from "lucide-react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";

const iconSize = 18;

interface StackCardProps {
  tech: string;
  key: string;
  className?: string;
  ghost?: boolean;
  showLabel?: boolean;
  showDescription?: boolean;
  size?: "sm" | "md";
}

const StackCard: React.FC<StackCardProps> = ({
  tech,
  showLabel = false,
  className,
  ghost = false,
  showDescription = false,
  size = "md",
}) => {
  const Skills = [
    {
      label: "PostgreSQL",
      color: ghost ? "128, 128, 128" : "100, 149, 237",
      icon: (
        <BiLogoPostgresql
          size={iconSize}
          color={ghost ? "gray" : "CornflowerBlue"}
        />
      ),
      description: "Structured Database",
    },
    {
      label: "Supabase",
      color: ghost ? "128, 128, 128" : "0, 255, 0",
      icon: (
        <RiSupabaseFill size={iconSize} color={ghost ? "gray" : "Chartreuse"} />
      ),
      description: "Backend Service",
    },
    {
      label: "TypeScript",
      color: ghost ? "128, 128, 128" : "50, 100, 255",
      icon: (
        <SiTypescript
          size={iconSize}
          color={ghost ? "gray" : "rgb(50,200,255)"}
        />
      ),
      description: "JavaScript with type safety.",
    },
    {
      label: "MongoDB",
      color: ghost ? "128, 128, 128" : "0, 128, 0",
      icon: <DiMongodb size={iconSize} color={ghost ? "gray" : "green"} />,
      description: "NoSQL Database",
    },
    {
      label: "Express",
      color: ghost ? "128, 128, 128" : "128, 128, 128",
      icon: <SiExpress size={iconSize} color={ghost ? "gray" : "gray"} />,
      description: "Node.js Framework",
    },
    {
      label: "Node.js",
      color: ghost ? "128, 128, 128" : "0, 128, 0",
      icon: <FaNodeJs size={iconSize} color={ghost ? "gray" : "green"} />,
      description: "Server language",
    },
    {
      label: "JavaScript",
      color: ghost ? "128, 128, 128" : "245, 167, 39",
      icon: (
        <IoLogoJavascript size={iconSize} color={ghost ? "gray" : "orange"} />
      ),
      description: "Programming Language",
    },
    {
      label: "Firebase",
      color: ghost ? "128, 128, 128" : "255, 0, 0",
      icon: <IoLogoFirebase size={iconSize} color={ghost ? "gray" : "red"} />,
      description: "Backend Service",
    },
    {
      label: "Next.js",
      color: ghost ? "128, 128, 128" : "128, 128, 128",
      icon: <RiNextjsFill size={iconSize} color={ghost ? "gray" : "gray"} />,
      description: "React Framework",
    },
    {
      label: "React",
      color: ghost ? "128, 128, 128" : "0, 128, 128",
      icon: <FaReact size={iconSize} color={ghost ? "gray" : "teal"} />,
      description: "JavaScript Library",
    },
    {
      label: "Angular",
      color: ghost ? "128, 128, 128" : "221, 27, 27",
      icon: <FaAngular size={iconSize} color={ghost ? "gray" : "red"} />,
      description: "Web Application Framework",
    },
  ];
  const skill = Skills.find((skill) => skill.label === tech);
  if (skill) {
    if (size === "md") {
      return (
        <div
          key={skill.label}
          className={cn(
            `flex items-center gap-2 bg-card relative  p-2 rounded-md ${
              ghost ? "" : "border"
            }`,
            className
          )}
        >
          <div
            style={{
              backgroundColor: ghost ? `` : `rgba(${skill.color}, 0.5)`,
              borderColor: ghost ? `` : `rgba(${skill.color})`,
            }}
            className="w-10 h-10 opacity-15 relative border items-center  justify-center flex rounded-md"
          ></div>{" "}
          <div className="absolute left-[20px] "> {skill.icon}</div>
          {showLabel && (
            <div className="flex flex-col gap-0">
              <h1 className="font-bold tracking-tighter"> {skill.label}</h1>
              {showDescription && (
                <p className="md:block -mt-[2px]">{skill.description}</p>
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <TooltipProvider key={skill.label}>
          <Tooltip>
            <TooltipTrigger>
              <div
                style={{
                  backgroundColor: ghost ? `` : `rgba(${skill.color}, 0.5)`,
                  borderColor: ghost ? `` : `rgba(${skill.color})`,
                }}
                className={`p-1 gap-1 items-center  justify-center flex rounded-md ${
                  ghost ? "" : "border p-2"
                }`}
              >
                {" "}
                <div className="  "> {skill.icon}</div>
                {showLabel && (
                  <div className="flex flex-col">
                    <h1 className="font-bold tracking-tighter">
                      {" "}
                      {skill.label}
                    </h1>
                  </div>
                )}
              </div>{" "}
            </TooltipTrigger>
            <TooltipContent>{skill.label}</TooltipContent>
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

export default StackCard;
