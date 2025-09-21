"use client";

import FadeInSection from "./FadeInView";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Mail } from "lucide-react";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Links = [
  {
    name: "GitHub",
    link: "https://github.com/colinguinane1",
    icon: <BsGithub size={25} color={"gray"} />,
  },
  {
    name: "Email",
    link: "mailto:colin@c-g.dev",
    icon: <Mail size={25} color={"gray"} />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/colinguinaneca",
    icon: <BsLinkedin size={25} color={"gray"} />,
  },
];

export default function BentoGrid() {
  return (
    <div className="flex gap-4 mb-10">
      {Links.map((link) => (
        <Tooltip key={link.link}>
          <TooltipTrigger asChild>
            <Link
              href={link.link}
              className="hover:scale-105 duration-200 active:scale-95"
              target="__blank"
            >
              <FadeInSection>{link.icon}</FadeInSection>{" "}
            </Link>
          </TooltipTrigger>
          <TooltipContent>{link.name}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
