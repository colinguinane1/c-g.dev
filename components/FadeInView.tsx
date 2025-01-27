"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation(); // Animation controller
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation happens only once
    threshold: 0.1, // Adjust visibility threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Start the animation when in view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }} // Adjust duration for the fade-in effect
      variants={{
        visible: { opacity: 1, y: 0, filter: "blur(0px)" }, // Final state (fully visible)
        hidden: { opacity: 0, y: 20, filter: "blur(16px)" }, // Initial state (hidden with slight vertical offset)
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
