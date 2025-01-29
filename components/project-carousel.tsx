import StackCard from "./stack-card";
import { Project } from "@/lib/get-projects";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="pb-8 no-scrollbar  max-w-2xl ">
      {/* <div  -- couldnt get this to work right
        className={`pointer-events-none fixed bg-gradient-to-r from-transparent to-background h-full w-[60%] ml-8 z-0`}
      ></div> */}
      <ul className="animated-list -mx-6 z-10 flex snap-x snap-mandatory scroll-pl-6 gap-9 overflow-x-scroll px-6 md:overflow-x-scroll p-4 scrollbar-padding">
        {projects.map((project, idx) => {
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
                    style={{
                      objectPosition: "top",
                    }}
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
                <h1 className="font-bold flex items-center gap-2 text-lg text-secondary-foreground">
                  {project.metadata.title}
                  {idx === 0 && (
                    <span className="text-green-500 border px-1 rounded-md bg-green-500/10 border-green-500/20">
                      New
                    </span>
                  )}
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
