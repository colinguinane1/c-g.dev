import FadeInSection from "./FadeInView";
import { ProjectCarousel } from "./project-carousel";
import { getAllProjects } from "@/lib/get-projects";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default async function Projects() {
  // const iconSize = 18;

  // const projects = [
  //   {
  //     title: "Mongate",
  //     image: "/mongate.png",
  //     description: "A MERN Stack template.",
  //     skills: [
  //       {
  //         label: "TypeScript",
  //         color: "50, 100, 255", // Blue
  //         icon: <SiTypescript size={iconSize} color="rgb(50,200,255)" />,
  //         description: "JavaScript with type safety.",
  //       },
  //       {
  //         label: "MongoDB",
  //         color: "0, 128, 0", // Green
  //         icon: <DiMongodb size={iconSize} color="green" />,
  //         description: "NoSQL Database",
  //       },
  //       {
  //         label: "Express",
  //         color: "128, 128, 128", // Gray
  //         icon: <SiExpress size={iconSize} color="gray" />,
  //         description: "Node.js Framework",
  //       },
  //       {
  //         label: "Node.js",
  //         color: "0, 128, 0", // Green
  //         icon: <FaNodeJs size={iconSize} color="green" />,
  //         description: "Server language",
  //       },
  //       {
  //         label: "Next.js",
  //         color: "128, 128, 128", // Gray with 20% opacity
  //         icon: <RiNextjsFill size={iconSize} color="gray" />,
  //         description: "React Framework",
  //       },
  //     ],
  //     features: [
  //       "Authentication",
  //       "Email Verification",
  //       "Password Reset",
  //       "User Profile",
  //       "Account Customization",
  //     ],
  //     github: "https://github.com/colinguinane1/mongate-front-end",
  //     live: "https://mongate.vercel.app",
  //   },
  //   {
  //     title: "Guessr",
  //     image: "/guessr.png",
  //     description: "A number guessing game.",
  //     skills: [
  //       {
  //         label: "TypeScript",
  //         color: "50, 100, 255", // Blue
  //         icon: <SiTypescript size={iconSize} color="rgb(50,200,255)" />,
  //         description: "JavaScript with type safety.",
  //       },
  //       {
  //         label: "MongoDB",
  //         color: "0, 128, 0", // Green
  //         icon: <DiMongodb size={iconSize} color="green" />,
  //         description: "NoSQL Database",
  //       },
  //       {
  //         label: "Express",
  //         color: "128, 128, 128", // Gray
  //         icon: <SiExpress size={iconSize} color="gray" />,
  //         description: "Node.js Framework",
  //       },
  //       {
  //         label: "Node.js",
  //         color: "0, 128, 0", // Green
  //         icon: <FaNodeJs size={iconSize} color="green" />,
  //         description: "Server language",
  //       },
  //       {
  //         label: "Next.js",
  //         color: "128, 128, 128", // Gray with 20% opacity
  //         icon: <RiNextjsFill size={iconSize} color="gray" />,
  //         description: "React Framework",
  //       },
  //     ],
  //     features: [
  //       "Custom JWT Authentication",
  //       "Users can compete on a global leaderboard",
  //       "Numbers are regenerated every 12 hours.",
  //       "Users can view past numbers and guesses with analytics.",
  //       "Users can view their own statistics.",
  //       "Users can level up and edit their profile.",
  //     ],
  //     github: "https://github.com/colinguinane1/guessr-front-end",
  //     live: "https://guessr.c-g.dev",
  //   },
  //   {
  //     title: "Blog Platform",
  //     image: "/devnotes.png",
  //     description: "A full stack blog platform intended for developers.",
  //     skills: [
  //       {
  //         label: "TypeScript",
  //         color: "50, 100, 255", // Blue
  //         icon: <SiTypescript size={iconSize} color="rgb(50,200,255)" />,
  //         description: "JavaScript with type safety.",
  //       },
  //       {
  //         label: "projectgreSQL",
  //         color: "100, 149, 237", // CornflowerBlue with 20% opacity
  //         icon: <BiLogoprojectgresql size={iconSize} color="CornflowerBlue" />,
  //         description: "Structured Database",
  //       },
  //       {
  //         label: "Supabase",
  //         color: "0, 255, 0",
  //         icon: <RiSupabaseFill size={iconSize} color="Chartreuse" />,
  //         description: "Backend Service",
  //       },
  //       {
  //         label: "Next.js",
  //         color: "128, 128, 128", // Gray with 20% opacity
  //         icon: <RiNextjsFill size={iconSize} color="gray" />,
  //         description: "React Framework",
  //       },
  //     ],
  //     features: [
  //       "Authentication",
  //       "Users can create, edit, and delete projects",
  //       "Users can comment on projects",
  //       "Users can like projects",
  //       "Users can search for projects",
  //       "Rich Markdown Support",
  //     ],
  //     github: "https://github.com/colinguinane1/devnotes.me",
  //     live: "https://devnotes.me",
  //   },
  //   {
  //     title: "Fast Food Ordering App",
  //     image: "/fastfood.png",
  //     description: "An app that allows users to order food from a restaurants.",
  //     skills: [
  //       {
  //         label: "TypeScript",
  //         color: "50, 100, 255", // Blue
  //         icon: <SiTypescript size={iconSize} color="rgb(50,200,255)" />,
  //         description: "JavaScript with type safety.",
  //       },
  //       {
  //         label: "Firebase",
  //         color: "255, 0, 0", // Red with 20% opacity
  //         icon: <IoLogoFirebase size={iconSize} color="red" />,
  //         description: "Backend Service",
  //       },
  //       {
  //         label: "Next.js",
  //         color: "128, 128, 128", // Gray with 20% opacity
  //         icon: <RiNextjsFill size={iconSize} color="gray" />,
  //         description: "React Framework",
  //       },
  //     ],
  //     features: [
  //       "Users can browse food items",
  //       "Users can add items to cart",
  //       "Users can place an order",
  //     ],
  //     github: "https://github.com/colinguinane1/fast-food-app",
  //     live: "https://food.colinguinane.com",
  //   },
  //   {
  //     title: "Music Portfolio",
  //     image: "/music-app.png",
  //     description: "A portfolio website for the music i compose as a hobby.",
  //     skills: [
  //       {
  //         label: "JavaScript",
  //         color: "245, 167, 39", // Yellow with 20% opacity
  //         icon: <IoLogoJavascript size={iconSize} color="orange" />,
  //         description: "Programming Language",
  //       },
  //       {
  //         label: "Firebase",
  //         color: "255, 0, 0", // Red with 20% opacity
  //         icon: <IoLogoFirebase size={iconSize} color="red" />,
  //         description: "Backend Service",
  //       },
  //       {
  //         label: "Next.js",
  //         color: "128, 128, 128", // Gray with 20% opacity
  //         icon: <RiNextjsFill size={iconSize} color={"gray"} />,
  //         description: "React Framework",
  //       },
  //     ],
  //     features: ["Users can browse music", "Users can play music"],
  //     github: "https://github.com/colinguinane1/MusicPortfolio",
  //     live: "https://music.colinguinane.com",
  //   },
  // ];
  const projects = await getAllProjects();
  return (
    <FadeInSection>
      <section>
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-2xl font-bold  tracking-tighter text-primary">
            Recent Projects
          </h1>
          <Link className="flex items-center" href="/projects">
            See More <ChevronRight size={15} />
          </Link>
        </div>

        <ProjectCarousel projects={projects} />
      </section>
    </FadeInSection>
  );
}
