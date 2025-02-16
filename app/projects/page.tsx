import FadeInSection from "@/components/FadeInView";
import ProjectCard from "@/components/project-card";
import { getAllProjects } from "@/lib/get-projects";

export default async function Component() {
  const projects = await getAllProjects();

  return (
    <FadeInSection>
      <section className="w-full">
        <div className="flex flex-col gap-8 p-4 max-w-3xl z-10 w-full  justify-between">
          <div>
            <h2 className="text-5xl text-secondary-foreground text-left sm:text-6xl font-black">
              Projects
            </h2>{" "}
          </div>
          <div>
            <p>A collection of my projects.</p>
          </div>

          <div className="w-full flex gap-4 flex-col">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => {
                return (
                  <ProjectCard project={project} idx={idx} key={project.slug} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
