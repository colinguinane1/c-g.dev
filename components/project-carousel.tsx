import { Button } from "./ui/button";
import { Project } from "@/lib/get-projects";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="pb-8  no-scrollbar">
      <ul className="animated-list -mx-6 flex snap-x snap-mandatory scroll-pl-6 grid-cols-2 flex-nowrap gap-9 overflow-x-scroll px-6 md:grid md:overflow-auto no-scrollbar">
        {projects.map((project) => {
          return (
            <li
              className="col-span-1 border p-4 rounded-lg bg-card  no-scrollbar  min-w-80 snap-start transition-opacity"
              key={project.slug}
            >
              <Link className="space-y-4" href={`/projects/${project.slug}`}>
                <div className="aspect-video overflow-hidden rounded-md bg-secondary">
                  {" "}
                  <Image
                    quality={100}
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
                <h1 className="font-bold text-2xl">{project.metadata.title}</h1>
                <p>{project.metadata.description}</p>
                <div className="absolute bottom-2 right-0">
                  <Button variant={"ghostNoBg"}>
                    {" "}
                    Learn <ChevronRight size={17} />
                  </Button>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
