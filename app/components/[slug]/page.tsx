import { ContentDetailLayout } from "@/components/content-detail-layout";
import { getAdjacentContent } from "@/lib/content-nav";
import { getAllComponents } from "@/lib/get-components";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const docs = await getAllComponents();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function ComponentPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const docs = await getAllComponents();
  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../components/content/${slug}.mdx`
  ).catch(() => {
    notFound();
  });

  const { prev, next } = getAdjacentContent(docs, slug);

  return (
    <ContentDetailLayout
      basePath="/components"
      breadcrumbClassName="px-4"
      containerClassName="flex flex-col w-screen md:w-fit max-w-2xl"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "UI", href: "/components" },
        { label: metadata.title },
      ]}
      prev={prev ? { slug: prev.slug, title: prev.metadata.title } : undefined}
      next={next ? { slug: next.slug, title: next.metadata.title } : undefined}
      header={
        <>
          <h1 className="text-3xl font-extrabold text-primary">
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
  const { metadata } = await import(
    `../../components/content/${slug}.mdx`
  ).catch(() => {
    notFound();
  });
  return {
    title: metadata.title,
  };
}
