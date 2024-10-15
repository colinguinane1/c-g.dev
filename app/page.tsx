"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInView";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  GraduationCap,
  Briefcase,
  MessageCircle,
} from "lucide-react";

export default function EnhancedPortfolioComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "GraphQL",
    "REST APIs",
    "Git",
    "AWS",
    "Docker",
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React frontend and Node.js backend.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      longDescription:
        "This e-commerce platform provides a seamless shopping experience for users. It features a responsive React frontend, a robust Node.js backend, and integrates with Stripe for secure payments. The platform includes user authentication, product catalog management, shopping cart functionality, and order processing.",
      challenges:
        "One of the main challenges was implementing real-time inventory updates to prevent overselling. We solved this using MongoDB change streams and Socket.io for live updates.",
      outcome:
        "The platform has successfully processed over 10,000 orders and maintains a 99.9% uptime.",
      github: "https://github.com/johndoe/ecommerce-platform",
      live: "https://example-ecommerce.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      longDescription:
        "This task management application allows teams to collaborate in real-time. Users can create, assign, and track tasks, set deadlines, and communicate through comments. The app uses React for the frontend, Express for the backend, and PostgreSQL for data storage.",
      challenges:
        "Implementing real-time updates across multiple clients was challenging. We used Socket.io to ensure all connected clients receive instant updates when tasks are modified.",
      outcome:
        "The app has been adopted by several small to medium-sized companies, improving their project management efficiency by up to 30%.",
      github: "https://github.com/johndoe/task-manager",
      live: "https://example-taskmanager.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather application that provides real-time forecasts and historical data visualization.",
      technologies: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
      longDescription:
        "This weather dashboard offers users detailed weather information for any location. It includes current conditions, hourly and daily forecasts, and historical weather data visualizations. The app uses React for the UI, D3.js for data visualization, and integrates with the OpenWeatherMap API for weather data.",
      challenges:
        "Creating intuitive and informative data visualizations for complex weather data was a significant challenge. We used D3.js to create custom, interactive charts that display trends clearly.",
      outcome:
        "The dashboard has gained popularity among outdoor enthusiasts and event planners, with over 50,000 monthly active users.",
      github: "https://github.com/johndoe/weather-dashboard",
      live: "https://example-weather.com",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      year: "2018 - 2020",
      description:
        "Specialized in Artificial Intelligence and Machine Learning",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Massachusetts Institute of Technology",
      year: "2014 - 2018",
      description: "Minor in Data Science",
    },
  ];

  const workExperience = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      year: "2020 - Present",
      responsibilities: [
        "Lead a team of 5 developers in building and maintaining large-scale web applications",
        "Implemented microservices architecture, improving system scalability by 40%",
        "Reduced application load time by 60% through optimizing database queries and implementing caching strategies",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "WebSolutions Co.",
      year: "2018 - 2020",
      responsibilities: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Integrated various third-party APIs, including payment gateways and social media platforms",
        "Implemented automated testing, increasing code coverage from 60% to 90%",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Tech Innovations Inc.",
      testimonial:
        "John is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality solutions has been invaluable to our team.",
    },
    {
      name: "Michael Chen",
      position: "CTO, WebSolutions Co.",
      testimonial:
        "Working with John was a pleasure. His technical skills and innovative approach to problem-solving significantly improved our development processes and product quality.",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-white dark:bg-black text-black dark:text-white`}
    >
      <motion.header
        className="sticky top-0 bg-white dark:bg-black shadow-md z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-xl font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Colin Guinane
            </motion.div>
            <div className="hidden md:flex space-x-4">
              {[
                "About",
                "Skills",
                "Projects",
                "Education",
                "Experience",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-600 dark:hover:text-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>
            </div>
            <motion.button
              className="md:hidden relative w-6 h-6"
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence initial={false} mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-black py-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {[
              "About",
              "Skills",
              "Projects",
              "Education",
              "Experience",
              "Testimonials",
              "Contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={toggleMenu}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleDarkMode}
              className="block w-full text-left px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ x: 10 }}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </motion.button>
          </motion.div>
        )}
      </motion.header>

      <main className="container mx-auto px-6 py-8">
        <FadeInSection>
          <section id="about" className="mb-16">
            <Image width={150} height={150} alt="pfp" src="/portrait.JPG" />
            <motion.h1
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Colin Guinane
            </motion.h1>
            <motion.p
              className="text-xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.p
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I&apos;m a passionate full stack developer with 5 years of
              experience building robust and scalable web applications. I love
              turning complex problems into simple, beautiful, and intuitive
              designs.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button
                variant="outline"
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </motion.div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="skills" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <motion.div
              className="flex flex-wrap gap-2"
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
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 dark:text-gray-300">
                            {project.description}
                          </CardDescription>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-gray-500 text-gray-500 dark:border-gray-400 dark:text-gray-400"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-800 text-black dark:text-white">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription className="text-gray-600 dark:text-gray-300">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2">Project Details:</h4>
                        <p className="mb-2">{project.longDescription}</p>
                        <h4 className="font-semibold mb-2">Challenges:</h4>
                        <p className="mb-2">{project.challenges}</p>
                        <h4 className="font-semibold mb-2">Outcome:</h4>
                        <p className="mb-4">{project.outcome}</p>
                        <div className="flex space-x-4">
                          <Button
                            variant="outline"
                            className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </Button>
                          <Button
                            variant="outline"
                            className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black  dark:hover:bg-gray-200"
                            onClick={() => window.open(project.live, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="education" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5" />
                        {edu.degree}
                      </CardTitle>
                      <CardDescription>
                        {edu.institution} | {edu.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="experience" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5" />
                        {exp.position}
                      </CardTitle>
                      <CardDescription>
                        {exp.company} | {exp.year}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="testimonials" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.position}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic">
                        &quot;{testimonial.testimonial}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="mb-4">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </motion.div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Colin Guinane. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
