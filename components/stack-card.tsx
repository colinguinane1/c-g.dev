import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";

const iconSize = 18;

export const Skills = [
  {
    label: "PostgreSQL",
    color: "100, 149, 237",
    icon: <BiLogoPostgresql size={iconSize} color="CornflowerBlue" />,
    description: "Structured Database",
  },
  {
    label: "Supabase",
    color: "0, 255, 0",
    icon: <RiSupabaseFill size={iconSize} color="Chartreuse" />,
    description: "Backend Service",
  },
  {
    label: "TypeScript",
    color: "50, 100, 255", // Blue
    icon: <SiTypescript size={iconSize} color="rgb(50,200,255)" />,
    description: "JavaScript with type safety.",
  },
  {
    label: "MongoDB",
    color: "0, 128, 0", // Green
    icon: <DiMongodb size={iconSize} color="green" />,
    description: "NoSQL Database",
  },
  {
    label: "Express",
    color: "128, 128, 128", // Gray
    icon: <SiExpress size={iconSize} color="gray" />,
    description: "Node.js Framework",
  },
  {
    label: "Node.js",
    color: "0, 128, 0", // Green
    icon: <FaNodeJs size={iconSize} color="green" />,
    description: "Server language",
  },
  {
    label: "JavaScript",
    color: "245, 167, 39", // Yellow with 20% opacity
    icon: <IoLogoJavascript size={iconSize} color="orange" />,
    description: "Programming Language",
  },
  {
    label: "Firebase",
    color: "255, 0, 0", // Red with 20% opacity
    icon: <IoLogoFirebase size={iconSize} color="red" />,
    description: "Backend Service",
  },
  {
    label: "Next.js",
    color: "128, 128, 128", // Gray with 20% opacity
    icon: <RiNextjsFill size={iconSize} color={"gray"} />,
    description: "React Framework",
  },
  {
    label: "React",
    color: "97, 218, 251", // Blue with 20% opacity
    icon: <DiReact size={iconSize} color="skyblue" />,
    description: "Frontend Framework",
  },
];

interface StackCardProps {
  tech: string;
  key: string;
  showLabel?: boolean;
  showDescription?: boolean;
  size?: "sm" | "md";
}

const StackCard: React.FC<StackCardProps> = ({
  tech,
  showLabel = false,
  showDescription = false,
  size = "md",
}) => {
  const skill = Skills.find((skill) => skill.label === tech);
  if (skill) {
    if (size === "md") {
      return (
        <div
          key={skill.label}
          className="flex items-center gap-2 border bg-card relative  p-2 rounded-md"
        >
          <div
            style={{
              backgroundColor: `rgba(${skill.color}, 0.5)`,
              borderColor: `rgba(${skill.color})`,
            }}
            className="w-10 h-10 opacity-15 relative border items-center  justify-center flex rounded-md"
          ></div>{" "}
          <div className="absolute left-[20px] "> {skill.icon}</div>
          {showLabel && (
            <div className="flex flex-col">
              <h1 className="font-bold tracking-tighter"> {skill.label}</h1>
              {showDescription && (
                <p className="md:block">{skill.description}</p>
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
                  backgroundColor: `rgba(${skill.color}, 0.05)`,
                  borderColor: `rgba(${skill.color}, 0.3)`,
                }}
                className=" border p-2 gap-1 items-center  justify-center flex rounded-md"
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
      <div className="border w-8 h-8 items-center justify-center flex rounded-md">
        <div>X</div>
        <div className="flex flex-col">
          <h1 className="font-bold hidden tracking-tighter">
            Couldnt find skill
          </h1>
        </div>
      </div>
    );
  }
};

export default StackCard;
