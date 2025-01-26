import FadeInSection from "@/components/FadeInView";
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
            <h2 className="text-5xl text-left sm:text-6xl font-black">
              Projects
            </h2>{" "}
          </div>
          <div>
            <p>A collection of my projects.</p>
          </div>

          <div className="w-full flex gap-4 flex-col">
            {projects.map((project) => (
              <Link
                className="border bg-card relative   rounded-lg"
                key={project.metadata.title}
                href={`/projects/${project.slug}`}
              >
                <div className="overflow-hidden bg-gradient-to-b  aspect-video rounded-md bg-secondary">
                  <Image
                    src={project.metadata.image}
                    alt={project.metadata.title}
                    layout="responsive"
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute flex from-10% items-center justify-between bottom-0 p-4 bg-gradient-to-t from-card to-transparent w-full">
                  <h1 className="text-4xl text-secondary-foreground font-bold tracking-tighter">
                    {" "}
                    {project.metadata.title}
                  </h1>
                  <p className="flex items-center ">
                    Learn More <ChevronRight />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
