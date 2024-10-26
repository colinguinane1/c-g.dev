"use client";

import FadeInSection from "./FadeInView";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export default function Skills() {
  const { resolvedTheme } = useTheme();

  const darkMode = resolvedTheme === "dark";
  const iconSize = 25;

  const backendSkills = [
    {
      label: "Node.js",
      color: "green",
      icon: <FaNodeJs size={iconSize} color={"green"} />,
      description: "Server language",
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
      color: "CornflowerBlue",
      icon: <BiLogoPostgresql size={iconSize} color="CornflowerBlue" />,
      description: "Structured Database",
    },
    {
      label: "Supabase",
      color: "Chartreuse",
      icon: <RiSupabaseFill size={iconSize} color="Chartreuse" />,
      description: "Backend Service",
    },
    {
      label: "Firebase",
      color: "red",
      icon: <IoLogoFirebase size={iconSize} color="red" />,
      description: "Backend Service",
    },
  ];
  const frontendSkills = [
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
      label: "Next.js",
      color: darkMode ? "white" : "black",
      icon: (
        <RiNextjsFill size={iconSize} color={darkMode ? "white" : "black"} />
      ),
      description: "React Framework",
    },
    {
      label: "Tailwind",
      color: "cyan",
      icon: <RiTailwindCssFill size={iconSize} color="cyan" />,
      description: "Utility-first CSS",
    },
    {
      label: "Git",
      color: "orange",
      icon: <IoIosGitBranch size={iconSize} color="orange" />,
      description: "Version control",
    },
  ];

  return (
    <FadeInSection>
      <section id="skills" className="mb-6 w-full">
        <h2 className="text-2xl font-bold  mb-4">Skills</h2>
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
          <div className="grid grid-cols-2 gap-2 mb-4">
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
                  <div className="flex items-center gap-2 border bg-card p-3 rounded-md">
                    <div
                      style={{
                        backgroundColor: skill.color,
                      }}
                      className="w-10 h-10 opacity-15 relative border items-center  justify-center flex rounded-md"
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
          </div>
          <hr className="pb-4"></hr>
          <div className="grid grid-cols-2 gap-2">
            {backendSkills.map((skill, index) => (
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
          </div>
        </motion.div>
      </section>
    </FadeInSection>
  );
}
