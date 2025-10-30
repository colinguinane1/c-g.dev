"use client";

import FadeInSection from "./FadeInView";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { GithubIcon, Link2, LinkIcon } from "lucide-react";
import Link from "next/link";
import { BiLinkExternal, BiMailSend } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

const Links = [
  {
    name: "GitHub",
    link: "https://github.com/colinguinane1",
    Icon: GithubIcon,
  },
  {
    name: "Email",
    link: "mailto:colin@c-g.dev",
    Icon: BiMailSend,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/colinguinaneca",
    Icon: FaLinkedin,
  },
];

export default function BentoGrid() {
  return (
    <div className="flex flex-wrap gap-4 my-6 mb-10">
      {Links.map((link) => {
        const Icon = link.Icon;
        return (
          <Tooltip key={link.link}>
            <Link
              href={link.link}
              className="hover:scale-105 duration-200 active:scale-95"
              target="__blank"
            >
              <FadeInSection>
                <Button variant={"outline"}>
                  <Icon size={20} />
                  {link.name}
                  <BiLinkExternal />
                </Button>
              </FadeInSection>
            </Link>

            <TooltipContent>{link.name}</TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
