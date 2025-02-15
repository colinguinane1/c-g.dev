import FadeInSection from "@/components/FadeInView";
import CImage from "@/components/c-image";
import StackCard from "@/components/stack-card";
import { getAllProjects } from "@/lib/get-projects";
import { Link } from "next-view-transitions";

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
          {projects.map((project, idx) => {
          return (
            <li
              className="col-span-1  list-none relative border rounded-lg bg-card   min-w-80 snap-start transition-opacity"
              key={project.slug}
            >
              <Link className="" href={`/projects/${project.slug}`}>
                <div className="overflow-hidden inset-10 aspect-video  rounded-md bg-secondary">
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
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
