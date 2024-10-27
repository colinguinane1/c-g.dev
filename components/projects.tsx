"use client";

import FadeInSection from "./FadeInView";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/lib/media-query";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function Projects() {
  const iconSize = 18;
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const projects = [
    {
      title: "Blog Platform",
      image: "/devnotes.png",
      description: "A full stack blog platform intended for developers.",
      skills: [
        {
          label: "TypeScript",
          color: "0, 0, 255", // Blue with 20% opacity
          icon: <SiTypescript size={iconSize} color="blue" />,
          description: "JavaScript with type safety.",
        },
        {
          label: "PostgreSQL",
          color: "100, 149, 237", // CornflowerBlue with 20% opacity
          icon: <BiLogoPostgresql size={iconSize} color="CornflowerBlue" />,
          description: "Structured Database",
        },
        {
          label: "Supabase",
          color: "127, 255, 0", // Chartreuse with 20% opacity
          icon: <RiSupabaseFill size={iconSize} color="Chartreuse" />,
          description: "Backend Service",
        },
        {
          label: "Next.js",
          color: "128, 128, 128", // Gray with 20% opacity
          icon: <RiNextjsFill size={iconSize} color="gray" />,
          description: "React Framework",
        },
      ],
      longDescription:
        "devnotes.me is a platform for developers to share their knowledge and experiences. The site is built with Next.js and deployed on Vercel. User authentication, data storage, and a PostgreSQL are from Supabase. This project uses NextJS server actions to handle server-side logic and Prisma for database management.",
      challenges:
        "Creating a full platform where users can create, edit, and delete posts, as well as like and comment on other posts. The users can also edit their profile and view other users' profiles.",
      outcome:
        "devnotes has gained a small following of developers who use the platform to share their knowledge and experiences.",
      github: "https://github.com/colinguinane1/devnotes.me",
      live: "https://devnotes.me",
    },
    {
      title: "Fast Food Ordering App",
      image: "/fastfood.png",
      description: "An app that allows users to order food from a restaurants.",
      skills: [
        {
          label: "TypeScript",
          color: "0, 0, 255", // Blue with 20% opacity
          icon: <SiTypescript size={iconSize} color="blue" />,
          description: "JavaScript with type safety.",
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
          icon: <RiNextjsFill size={iconSize} color="gray" />,
          description: "React Framework",
        },
      ],
      longDescription:
        "This app allows users to browse a menu, add items to their cart, and place an order. The app uses Next.js for the frontend and Firebase for the database.",
      challenges:
        "Creating a seamless user experience for ordering food online.",
      outcome: "Increased knowledge of Next.js and Firebase.",
      github: "https://github.com/colinguinane1/fast-food-app",
      live: "https://food.colinguinane.com",
    },
    {
      title: "Music Portfolio",
      image: "/music-app.png",
      description: "A portfolio website for the music i compose as a hobby.",
      skills: [
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
          label: "JavaScript",
          color: "255, 255, 0", // Yellow with 20% opacity
          icon: <IoLogoJavascript size={iconSize} color="yellow" />,
          description: "Programming Language",
        },
      ],
      longDescription:
        "This project is a portfolio website for my music compositions. The site uses React for the frontend and Node.js for the backend. The weather data is fetched from the OpenWeatherMap API.",
      challenges:
        "Creating a responsive and visually appealing dashboard that displays my music.",
      outcome:
        "A clean and modern portfolio website that showcases my music compositions.",
      github: "https://github.com/colinguinane1/MusicPortfolio",
      live: "https://music.colinguinane.com",
    },
  ];
  return (
    <FadeInSection>
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid gap-6   ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FadeInSection>
                {isDesktop ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="bg-card border cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <Image
                            src={project.image}
                            width={800}
                            height={450}
                            alt="Blog Post Image"
                            className="w-full rounded-lg pb-4 h-52 object-cover transition-all group-hover:scale-[1.01]"
                            style={{
                              objectFit: "cover",
                            }}
                          />
                          <CardTitle className="text-primary tracking-tight">
                            {project.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            {project.description}
                          </CardDescription>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <FadeInSection key={skill.label}>
                                <div
                                  style={{
                                    backgroundColor: `rgba(${skill.color}, 0.2)`,
                                    borderColor: `rgba(${skill.color})`,
                                  }}
                                  className=" border w-8 h-8 items-center  justify-center flex rounded-md"
                                >
                                  {" "}
                                  <div className="  "> {skill.icon}</div>
                                  <div className="flex flex-col">
                                    <h1 className="font-bold hidden tracking-tighter">
                                      {" "}
                                      {skill.label}
                                    </h1>
                                  </div>{" "}
                                </div>
                              </FadeInSection>
                            ))}
                          </div>{" "}
                          <Button variant={"outline"} className="mt-4">
                            <ArrowUpRight className="mr-1" size={20} />
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] rounded-lg bg-card ">
                      <DialogHeader className="text-left">
                        <DialogTitle className="text-2xl font-extrabold  text-primary">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 dark:text-gray-300">
                          {project.description}
                        </DialogDescription>
                        <Image
                          src={project.image}
                          width={800}
                          height={450}
                          alt="Blog Post Image"
                          className="w-full rounded-lg h-52 object-cover transition-all group-hover:scale-[1.01]"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2  text-primary">
                          Project Details:
                        </h4>
                        <p className="mb-2">{project.longDescription}</p>
                        <h4 className="font-semibold mb-2  text-primary">
                          Challenges:
                        </h4>
                        <p className="mb-2">{project.challenges}</p>
                        <h4 className="font-semibold mb-2  text-primary">
                          Outcome:
                        </h4>
                        <p className="mb-4">{project.outcome}</p>
                        <div className="flex space-x-4">
                          <Button
                            variant="outline"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Drawer>
                    <DrawerTrigger className="w-full text-left">
                      {" "}
                      <Card className="bg-card border cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <Image
                            src={project.image}
                            width={800}
                            height={450}
                            alt="Blog Post Image"
                            className="w-full rounded-lg pb-4 h-52 object-cover transition-all group-hover:scale-[1.01]"
                            style={{
                              objectFit: "cover",
                            }}
                          />
                          <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            {project.description}
                          </CardDescription>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                              <FadeInSection key={skill.label}>
                                <div
                                  style={{
                                    backgroundColor: `rgba(${skill.color}, 0.2)`,
                                    borderColor: `rgba(${skill.color})`,
                                  }}
                                  className=" border w-8 h-8 items-center  justify-center flex rounded-md"
                                >
                                  {" "}
                                  <div className="  "> {skill.icon}</div>
                                  <div className="flex flex-col">
                                    <h1 className="font-bold hidden tracking-tighter">
                                      {" "}
                                      {skill.label}
                                    </h1>
                                  </div>{" "}
                                </div>
                              </FadeInSection>
                            ))}
                          </div>{" "}
                          <Button variant={"outline"} className="mt-4">
                            <ArrowUpRight className="mr-1" size={20} />
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </DrawerTrigger>
                    <DrawerContent className=" h-fit">
                      <DrawerHeader className="text-left">
                        <DrawerTitle className="text-2xl font-extrabold text-primary">
                          {" "}
                          {project.title}
                        </DrawerTitle>

                        <DrawerDescription>
                          {project.description}
                        </DrawerDescription>
                        <Image
                          src={project.image}
                          width={800}
                          height={450}
                          alt="Blog Post Image"
                          className="w-full rounded-lg h-52 object-cover transition-all group-hover:scale-[1.01]"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </DrawerHeader>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2  text-primary">
                          Project Details:
                        </h4>
                        <p className="mb-2">{project.longDescription}</p>

                        <div className="flex space-x-4">
                          <Button
                            variant="outline"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Button>
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                )}
              </FadeInSection>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
