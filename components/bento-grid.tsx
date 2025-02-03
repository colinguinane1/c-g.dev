"use client";

import FadeInSection from "./FadeInView";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl bg-card border active:scale-[0.99] hover:scale-[1.01] dark:border-[rgba(255,255,255,0.10)] dark:bg-card  group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-lg font-semibold dark:text-white py-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("text-sm font-normal text-foreground max-w-sm", className)}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          " bg-[rgba(40,40,40,0.30)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

export default function BentoGrid() {
  return (
    <FadeInSection>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="grid  grid-cols-4 mb-12 gap-4"
      >
        <a className=" col-span-3 " href="mailto:colin@c-g.dev">
          <Card className="">
            <CardDescription className="flex items-center justify-center gap-1">
              <Mail size={15} />
              Contact
            </CardDescription>
          </Card>
        </a>
        <Link href="https://github.com/colinguinane1" target="_blank">
          <Card className="flex items-center justify-center">
            <CardDescription>
              <Github size={20} />
            </CardDescription>
          </Card>
        </Link>
        <Link
          href="https://www.linkedin.com/in/colinguinaneca/"
          target="_blank"
        >
          {" "}
          <Card className="flex items-center justify-center">
            <CardDescription>
              <Linkedin size={20} />
            </CardDescription>
          </Card>
        </Link>
        <Link
          href="https://mongate.vercel.app/"
          className="col-span-3 flex items-center justify-center"
          target="_blank"
        >
          {" "}
          <Card className="col-span-3 flex w-full items-center justify-center">
            {" "}
            <CardDescription className="flex w-full items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-xl  animate-pulse bg-green-500"></div>
              Latest project <ExternalLink size={15} />
            </CardDescription>
          </Card>{" "}
        </Link>{" "}
      </motion.div>
    </FadeInSection>
  );
}
