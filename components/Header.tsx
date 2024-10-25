"use client";

import { ModeToggle } from "./theme-buton";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "next-view-transitions";
import { useState, useEffect, useRef } from "react";

export default function NHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  const NavigationData = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
    { name: "Blog", href: "/posts" },
    { name: "UI", href: "/components" },
  ];

  useEffect(() => {
    if (navRef.current && isOpen) {
      setNavHeight(navRef.current.scrollHeight);
    }
  }, [isOpen, navRef]);

  return (
    <nav className="">
      <motion.header
        initial={{ y: -100 }}
        animate={{
          height: isOpen ? `${navHeight + 54}px` : "64px",
          y: 0, // 64px is the closed header height
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        exit={{ y: 0 }}
        className={`flex w-full  md:absolute  md:top-0 left-0     items-center ${
          isOpen && "border-b bg-background/50 backdrop-blur-lg"
        }  flex-col px-4 py-1  overflow-hidden z-20`} // Prevent content overflow
      >
        <div className="flex items-center mt-0 max-w-3xl md:mt-[8px] w-full justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-bold p-1 rounded-md">
              c-g.dev
            </Link>
          </div>{" "}
          <div className=" hidden md:flex  items-center gap-6">
            <ModeToggle />
            {NavigationData.map((nav) => (
              <Link className="font-bold" key={nav.name} href={nav.href}>
                {nav.name}
              </Link>
            ))}
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
              className="flex flex-col gap-4 pb-4 items-center justify-center"
            >
              {NavigationData.map((nav) => (
                <Link
                  className="text-3xl hover:text-primary font-extrabold tracking-tight"
                  key={nav.name}
                  href={nav.href}
                >
                  {nav.name}
                </Link>
              ))}{" "}
            </motion.nav>
          )}{" "}
        </AnimatePresence>
      </motion.header>
    </nav>
  );
}
