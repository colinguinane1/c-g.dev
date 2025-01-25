import { Button } from "./ui/button";
import { Project } from "@/lib/get-projects";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="">
      <div className="flex overflow-x-auto pb-8  gap-4">
        {projects.map((project) => {
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="basis-1/3 relative bg-card w-60 h-60 p-4 rounded-lg border aspect-square"
            >
              <h1 className="font-bold text-2xl">{project.metadata.title}</h1>
              <p>{project.metadata.description}</p>
              <div className="absolute bottom-2 right-0">
                <Button variant={"ghostNoBg"}>
                  {" "}
                  Learn <ChevronRight size={17} />
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
