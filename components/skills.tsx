"use client";

import FadeInSection from "./FadeInView";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpo, SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export const iconSize = 25;
export const backendSkills = [
  {
    label: "Node.js",
    color: "0, 128, 0", // Green
    icon: <FaNodeJs size={iconSize} color="green" />,
    description: "Server language",
  },
  {
    label: "Express",
    color: "128, 128, 128", // Gray
    icon: <SiExpress size={iconSize} color="gray" />,
    description: "Node.js Framework",
  },
  {
    label: "MongoDB",
    color: "0, 128, 0", // Green
    icon: <DiMongodb size={iconSize} color="green" />,
    description: "NoSQL Database",
  },
  {
    label: "PostgreSQL",
    color: "100, 149, 237", // CornflowerBlue
    icon: <BiLogoPostgresql size={iconSize} color="CornflowerBlue" />,
    description: "Structured Database",
  },
  {
    label: "Supabase",
    color: "140, 200, 0", // Chartreuse
    icon: <RiSupabaseFill size={iconSize} color="Chartreuse" />,
    description: "Backend Service",
  },
  {
    label: "Firebase",
    color: "255, 0, 0", // Red
    icon: <IoLogoFirebase size={iconSize} color="red" />,
    description: "Backend Service",
  },
];

export const frontendSkills = [
  {
    label: "TypeScript",
    color: "50, 100, 255", // Blue
    icon: <SiTypescript size={iconSize} color="rgb(50,200,255)" />,
    description: "JavaScript with type safety.",
  },
  {
    label: "React",
    color: "0, 128, 128", // Teal
    icon: <FaReact size={iconSize} color="teal" />,
    description: "JavaScript Library",
  },
  {
    label: "Next.js",
    color: "128, 128, 128", // Gray
    icon: <RiNextjsFill size={iconSize} color="gray" />,
    description: "React Framework",
  },
  {
    label: "Tailwind",
    color: "0, 209, 205", // Cyan
    icon: <RiTailwindCssFill size={iconSize} color="cyan" />,
    description: "Utility-first CSS",
  },
  {
    label: "Git",
    color: "255, 165, 0", // Orange
    icon: <IoIosGitBranch size={iconSize} color="orange" />,
    description: "Version control",
  },
  {
    label: "React Native",
        color: "0, 128, 128", // Teal
    icon: <FaReact size={iconSize} color="teal" />,
    description: "JavaScript Library",

  },
    {
        label: "Expo",
             color: "128, 128, 128",
        icon: <SiExpo size={iconSize} color={"gray"} />,
        description: "React Native Framework"
      },
];

export default function Skills() {
  return (
    <FadeInSection>
      <section id="skills" className="mb-6 w-full">
        <h2 className="text-2xl font-bold tracking-tighter text-primary  mb-4">
          Skills
        </h2>
        <motion.div
          className="w-full gap-2"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-2 gap-4 mb-4">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className=""
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FadeInSection>
                  <div className="flex items-center gap-2 border bg-card  p-3 rounded-md">
                    <div
                      style={{
                        backgroundColor: `rgba(${skill.color}, 0.5)`,
                        borderColor: `rgba(${skill.color})`,
                      }}
                      className="w-10 h-10 opacity-15 relative border items-center  justify-center flex rounded-md"
                    ></div>{" "}
                    <div className="absolute left-[21px] "> {skill.icon}</div>
                    <div className="flex flex-col">
                      <h1 className="font-bold tracking-tighter">
                        {" "}
                        {skill.label}
                      </h1>
                      <p className="hidden">{skill.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              </motion.div>
            ))}{" "}
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <FadeInSection>
                  <div className="flex  items-center gap-2 border bg-card  p-3 rounded-md">
                    <div
                      style={{
                        backgroundColor: `rgba(${skill.color}, 0.5)`,
                        borderColor: `rgba(${skill.color})`,
                      }}
                      className="w-10 h-10 opacity-15 relative border items-center  justify-center flex rounded-md"
                    ></div>{" "}
                    <div className="absolute left-[21px] "> {skill.icon}</div>
                    <div className="flex flex-col">
                      <h1 className="font-bold tracking-tighter">
                        {" "}
                        {skill.label}
                      </h1>
                      <p className="hidden">{skill.description}</p>
                    </div>
                  </div>
                </FadeInSection>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </FadeInSection>
  );
}
