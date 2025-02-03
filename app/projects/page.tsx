import FadeInSection from "@/components/FadeInView";
import StackCard from "@/components/stack-card";
import { getAllProjects } from "@/lib/get-projects";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

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
            {projects.map((project, idx) => (
              <li
                className="col-span-1 border p-4 rounded-lg bg-card list-none   min-w-80 snap-start transition-opacity"
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
                </Link>
              </li>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
