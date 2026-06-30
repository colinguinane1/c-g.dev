import CImage from "@/components/c-image";
import { ContentDetailLayout } from "@/components/content-detail-layout";
import StackCard from "@/components/stack-card";
import PlatformCard from "@/components/ui/platform-card";
import { getAdjacentContent } from "@/lib/content-nav";
import { getAllProjects } from "@/lib/get-projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const docs = await getAllProjects();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const docs = await getAllProjects();
  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../projects/content/${slug}.mdx`
  ).catch(() => {
    notFound();
  });

  const { prev, next } = getAdjacentContent(docs, slug);

  return (
    <ContentDetailLayout
      basePath="/projects"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: metadata.title },
      ]}
      prev={prev ? { slug: prev.slug, title: prev.metadata.title } : undefined}
      next={next ? { slug: next.slug, title: next.metadata.title } : undefined}
      header={
        <>
          <div className="aspect-video rounded-md w-full bg-secondary">
            {metadata.image && (
              <CImage
                src={metadata.image}
                width={800}
                height={450}
                alt={metadata.title}
                className="h-full w-full rounded-md transition-all group-hover:scale-[1.01]"
                style={{
                  filter: "brightness(0.9)",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            )}
          </div>
          <h1 className="text-3xl flex items-center gap-4 pt-4 font-extrabold text-primary">
            {selectedDoc.metadata.title}
          </h1>
          <div className="font-bold pb-2 items-center flex gap-2 text-lg text-secondary-foreground">
            {selectedDoc.metadata.platforms.map((platform) => (
              <PlatformCard
                key={platform}
                tech={platform}
                size="sm"
                showLabel
                ghost
              />
            ))}
          </div>
          {selectedDoc.metadata.stack && (
            <div className="flex flex-wrap gap-2">
              {selectedDoc.metadata.stack.map((tech: string) => (
                <StackCard showLabel key={tech} tech={tech} />
              ))}
            </div>
          )}
        </>
      }
    >
      <DocComponent />
    </ContentDetailLayout>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const { metadata } = await import(`../../projects/content/${slug}.mdx`).catch(
    () => {
      notFound();
    }
  );
  return {
    title: metadata.title,
  };
}
