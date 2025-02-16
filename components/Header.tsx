"use client";

import { ModeToggle } from "./theme-buton";
import { AnimatedBackground } from "./ui/animated-background";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Squeeze as Hamburger } from "hamburger-react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function NHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  const pathname = `/${usePathname().split("/")[1]}`;

  const NavigationData = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Posts", href: "/posts" },
    { name: "Components", href: "/components" },
  ];

  useEffect(() => {
    if (navRef.current && isOpen) {
      setNavHeight(navRef.current.scrollHeight);
    }
  }, [isOpen, navRef]);

  return (
    <nav className="">
      <motion.header
        initial={{ y: -100, filter: "blur(10px)" }}
        animate={{
          height: isOpen ? `${navHeight + 60}px` : "64px",
          y: 0, // 64px is the closed header height
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        exit={{ y: 0, filter: "blur(10px)" }}
        className={`flex w-full md:top-0 left-0 md:mt-2  from-background backdrop-blur-3xl to-transparent bg-gradient-to-b  items-center  ${
          isOpen && "border-b bg-background/50 backdrop-blur-lg"
        } flex-col px-4 py-1 overflow-hidden z-20`} // Prevent content overflow
      >
        <div className="flex items-center max-w-3xl  w-full justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold p-1 rounded-md">
              c-g.dev
            </Link>
          </div>{" "}
          <div className=" hidden md:flex  items-center gap-2">
            <ModeToggle />
            <div className="flex items-center gap-2">
              <AnimatedBackground
                defaultValue={pathname}
                className="rounded-lg py-2 bg-card"
                transition={{
                  ease: "easeInOut",
                  duration: 0.2,
                }}
              >
                {NavigationData.map((nav, index) => {
                  return (
                    <Link
                      href={nav.href}
                      key={index}
                      data-id={nav.href}
                      type="button"
                      aria-label={`${nav.href} view`}
                      className={`inline-flex p-2 w-fit text-foreground items-center justify-center text-center  transition-transform active:scale-[0.98]  ${
                        nav.href === pathname && "font-bold text-primary"
                      }`}
                    >
                      {nav.name}
                    </Link>
                  );
                })}
              </AnimatedBackground>
            </div>
          </div>
          <div className="md:hidden flex gap-2 items-center justify-center">
            <ModeToggle />
            <Button size={"icon"} className="" variant={"ghost"}>
              <div className="">
                {" "}
                <Hamburger
                  toggle={setIsOpen}
                  toggled={isOpen}
                  rounded
                  size={20}
                />
              </div>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              ref={navRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <div className="flex flex-col items-center  gap-4">
                <AnimatedBackground
                  defaultValue={pathname}
                  className="rounded-lg py-2 bg-card"
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                >
                  {NavigationData.map((nav, index) => {
                    return (
                      <Link
                        href={nav.href}
                        key={index}
                        data-id={nav.href}
                        type="button"
                        aria-label={`${nav.href} view`}
                        className={`inline-flex p-2 w-fit text-foreground items-center justify-center text-center  transition-transform active:scale-[0.98]  ${
                          nav.href === pathname && "font-bold text-primary"
                        }`}
                      >
                        {nav.name}
                      </Link>
                    );
                  })}
                </AnimatedBackground>
              </div>
            </motion.nav>
          )}{" "}
        </AnimatePresence>
      </motion.header>
    </nav>
  );
}
