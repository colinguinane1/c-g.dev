import FadeInSection from "@/components/FadeInView";
import { getAllProjects } from "@/lib/get-projects";
import { Link } from "next-view-transitions";

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

          <div className="w-full">
            {projects.map((project) => (
              <Link
                key={project.metadata.title}
                href={`/projects/${project.slug}`}
              >
                {project.metadata.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
