import FadeInSection from "./FadeInView";
import { ProjectCarousel } from "./project-carousel";
import { getAllProjects } from "@/lib/get-projects";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default async function Projects() {

  const projects = await getAllProjects();

  const recentProjects = projects.slice(0, 4);

  const pinnedProjects = ["mongate", "devnotes", "music-portfolio"];

  const sortedProjects = [...projects].sort((a, b) => {
    const isAPinned = pinnedProjects.includes(a.metadata.slug);
    const isBPinned = pinnedProjects.includes(b.metadata.slug);
    if (isAPinned === isBPinned) return 0;

    return isAPinned ? -1 : 1;
  });

  const pinned = sortedProjects.filter((project) =>
    pinnedProjects.includes(project.metadata.slug)
  );
  return (
    <FadeInSection>
      <section className="">
        <div className="flex justify-between items-center pb-4 ">
          <h1 className="text-2xl font-bold  tracking-tighter text-primary">
            Pinned Projects
          </h1>
          <Link className="flex items-center" href="/projects">
            See More <ChevronRight size={15} />
          </Link>
        </div>

        <ProjectCarousel projects={pinned} />
      </section>
    </FadeInSection>
  );
}
