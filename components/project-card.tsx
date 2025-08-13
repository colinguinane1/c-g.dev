import CImage from "./c-image";
import StackCard from "./ui/stack-card";
import { Project } from "@/lib/get-projects";
import { Link } from "next-view-transitions";
import React from "react";
import PlatformCard from "./ui/platform-card";

interface ProjectCardProps {
  project: Project;
  idx?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, idx }) => {
  return (
    <div
      className="col-span-1 relative border rounded-lg bg-card   min-w-80 snap-start transition-opacity"
      key={project.slug}
    >
      <Link className="" href={`/projects/${project.slug}`}>
        <div className="overflow-hidden inset-10 aspect-video rounded-tr-md rounded-tl-md  bg-secondary">
          <CImage
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
              <div className="flex flex-wrap gap-2">
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
    </div>
  );
};

export default ProjectCard;
