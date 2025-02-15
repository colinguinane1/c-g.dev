import StackCard from "./stack-card";
import { Project } from "@/lib/get-projects";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="pb-8 no-scrollbar overflow-x-hidden  max-w-2xl ">
      {/* <div  -- couldnt get this to work right
        className={`pointer-events-none fixed bg-gradient-to-r from-transparent to-background h-full w-[60%] ml-8 z-0`}
      ></div> */}
      <ul className="animated-list -mx-6 z-10 flex snap-x snap-mandatory scroll-pl-6 gap-9 overflow-x-scroll pl-6 md:overflow-x-scroll p-4 scrollbar-padding">
        {projects.map((project, idx) => {
          return (
            <li
              className="col-span-1 relative border rounded-lg bg-card   min-w-80 snap-start transition-opacity"
              key={project.slug}
            >
              <Link className="" href={`/projects/${project.slug}`}>
                <div className="overflow-hidden inset-10 aspect-video  rounded-md bg-secondary">
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
                </div>{" "}
                <div className="p-4 space-y-2">
                  {" "}
                  <div className="flex justify-between items-center gap-2">
                    <h1 className="font-bold flex items-center gap-2 text-lg text-secondary-foreground">
                      {project.metadata.title}
                      {idx === 0 && (
                        <span className="top-4 right-4 absolute backdrop-blur-3xl shadow-green-500/50 z-10 shadow-sm text-green-500 font-normal  px-1 rounded-md bg-green-500/10 border-green-500/20">
                          New
                        </span>
                      )}
                    </h1>
                    {project.metadata.stack && (
                      <div className="flex -ml-1 flex-wrap gap-2">
                        {project.metadata.stack.map((tech: string) => (
                          <StackCard
                            ghost
                            size="sm"
                            showLabel={false}
                            key={tech}
                            tech={tech}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <p>{project.metadata.description}</p>
                </div>{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
