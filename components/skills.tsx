"use client";

import FadeInSection from "./FadeInView";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function Skills() {
  const { resolvedTheme } = useTheme();

  const darkMode = resolvedTheme === "dark";
  const iconSize = 25;
  const skills = [
    {
      label: "TypeScript",
      color: "blue",
      icon: <SiTypescript size={iconSize} color="blue" />,
      description: "JavaScript with type safety.",
    },
    {
      label: "React",
      color: "teal",
      icon: <FaReact size={iconSize} color={"teal"} />,
      description: "JavaScript Library",
    },
    {
      label: "Node.js",
      color: "green",
      icon: <FaNodeJs size={iconSize} color={"green"} />,
      description: "Server language",
    },
    {
      label: "Next.js",
      color: darkMode ? "white" : "black",
      icon: (
        <RiNextjsFill size={iconSize} color={darkMode ? "white" : "black"} />
      ),
      description: "React Framework",
    },
    {
      label: "Express",
      color: darkMode ? "white" : "black",
      icon: <SiExpress size={iconSize} color={darkMode ? "white" : "black"} />,
      description: "Node.js Framework",
    },
    {
      label: "MongoDB",
      color: "green",
      icon: <DiMongodb size={iconSize} color={"green"} />,
      description: "NoSQL Database",
    },
    {
      label: "PostgreSQL",
      color: "blue",
      icon: <BiLogoPostgresql size={iconSize} color="blue" />,
      description: "Structured Database",
    },
    {
      label: "Supabase",
      color: "green",
      icon: <BiLogoPostgresql size={iconSize} color="blue" />,
      description: "Structured Database",
    },
    {
      label: "Git",
      color: "orange",
      icon: <RiSupabaseFill size={iconSize} color="orange" />,
      description: "Version control",
    },
  ];

  return (
    <FadeInSection>
      <section id="skills" className="mb-6 w-full">
        <h2 className="text-2xl font-bold  mb-4">Skills</h2>
        <motion.div
          className="grid grid-cols-2 w-full gap-2"
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
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <FadeInSection>
                <div className="flex items-center gap-2 border bg-card p-3 rounded-md">
                  <div
                    style={{ backgroundColor: skill.color }}
                    className="w-10 h-10 opacity-15 relative items-center  justify-center flex rounded-md"
                  ></div>{" "}
                  <div className="absolute left-[21px] "> {skill.icon}</div>
                  <div className="flex flex-col">
                    <h1 className="font-bold tracking-tighter">
                      {" "}
                      {skill.label}
                    </h1>
                    <p className="hidden md:block">{skill.description}</p>
                  </div>
                </div>
              </FadeInSection>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </FadeInSection>
  );
}
