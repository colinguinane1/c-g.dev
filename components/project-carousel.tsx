import ProjectCard from "./project-card";
import { Project } from "@/lib/get-projects";

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  return (
    <div className="pb-8 no-scrollbar overflow-x-hidden  max-w-2xl ">
      <ul className="animated-list -mx-6 z-10 flex snap-x snap-mandatory scroll-pl-6 gap-9 overflow-x-scroll px-6 md:overflow-x-scroll p-4 scrollbar-padding">
        {projects.map((project, idx) => {
          return <ProjectCard project={project} idx={idx} key={project.slug} />;
        })}
      </ul>
    </div>
  );
}
