import { ContentDetailLayout } from "@/components/content-detail-layout";
import { getAdjacentContent } from "@/lib/content-nav";
import { getAllPosts } from "@/lib/get-posts";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const docs = await getAllPosts();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const docs = await getAllPosts();
  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../posts/content/${slug}.mdx`
  ).catch(() => {
    notFound();
  });

  const { prev, next } = getAdjacentContent(docs, slug);

  return (
    <ContentDetailLayout
      basePath="/posts"
      containerClassName="flex flex-col w-screen md:w-fit max-w-2xl"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Posts", href: "/posts" },
        { label: metadata.title },
      ]}
      prev={prev ? { slug: prev.slug, title: prev.metadata.title } : undefined}
      next={next ? { slug: next.slug, title: next.metadata.title } : undefined}
      header={
        <>
          <div className="aspect-video rounded-md w-full bg-secondary">
            {metadata.image && (
              <Image
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
          <h1 className="text-3xl pt-4 font-extrabold text-primary">
            {selectedDoc.metadata.title}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            <span className="font-medium">Last edit:</span>{" "}
            {selectedDoc.metadata.publishDate}
          </p>
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
  const { metadata } = await import(`../../posts/content/${slug}.mdx`).catch(
    () => {
      notFound();
    }
  );
  return {
    title: metadata.title,
  };
}
