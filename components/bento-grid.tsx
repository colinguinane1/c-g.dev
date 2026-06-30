"use client";

import FadeInSection from "./FadeInView";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { BiLinkExternal, BiMailSend } from "react-icons/bi";

const Links = [
  {
    name: "GitHub",
    link: "https://github.com/colinguinane1",
    Icon: GithubIcon,
    external: true,
  },
  {
    name: "Email",
    link: "mailto:colin@c-g.dev",
    Icon: BiMailSend,
    external: false,
  },
];

export default function BentoGrid() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-4 my-6 mb-10">
        {Links.map((link) => {
          const Icon = link.Icon;
          return (
            <Tooltip key={link.link}>
              <TooltipTrigger asChild>
                <Link
                  href={link.link}
                  className="hover:scale-105 duration-200 active:scale-95"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <FadeInSection>
                    <Button variant="outline" type="button">
                      <Icon size={20} />
                      {link.name}
                      <BiLinkExternal />
                    </Button>
                  </FadeInSection>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{link.name}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
