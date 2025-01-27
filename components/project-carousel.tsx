import StackCard from "./stack-card";
import { Project } from "@/lib/get-projects";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="pb-8 relative  no-scrollbar  max-w-2xl ">
      <div
        className={`absolute bg-gradient-to-r from-transparent to-background -right-8 h-full w-20 ${
          projects.length <= 1 ? "hidden" : ""
        }`}
      ></div>
      <ul className="animated-list -mx-6 flex snap-x snap-mandatory scroll-pl-6 gap-9 overflow-x-scroll px-6 md:overflow-x-scroll p-4 scrollbar-padding">
        {projects.map((project) => {
          return (
            <li
              className="col-span-1 border p-4 rounded-lg bg-card   min-w-80 snap-start transition-opacity"
              key={project.slug}
            >
              <Link className="space-y-2" href={`/projects/${project.slug}`}>
                <div className="overflow-hidden aspect-video rounded-md bg-secondary">
                  <Image
                    quality={100}
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    layout="responsive"
                    width={600}
                    height={400}
                    className="w-full h-full"
                  />
                </div>
                {project.metadata.stack && (
                  <div className="flex flex-wrap gap-2">
                    {project.metadata.stack.map((tech: string) => (
                      <StackCard
                        size="sm"
                        showLabel={false}
                        key={tech}
                        tech={tech}
                      />
                    ))}
                  </div>
                )}
                <h1 className="font-bold text-lg text-secondary-foreground">
                  {project.metadata.title}
                </h1>
                <p>{project.metadata.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
