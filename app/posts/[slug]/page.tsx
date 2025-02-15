import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAllPosts } from "@/lib/get-posts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Assuming getDocs() is an async function that returns the list of docs
export async function generateStaticParams() {
  const docs = await getAllPosts(); // Await the result if getDocs is async
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here

  const docs = await getAllPosts(); // Fetch docs on the server

  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../posts/content/${slug}.mdx`
  ).catch(() => {
    notFound(); // If import fails, show 404
  });

  return (
    <section className="mt-2 flex flex-col items-center">
      <div className="flex  flex-col  w-screen md:w-fit max-w-2xl">
        <div className="px-4 md:hidden flex items-center gap-4 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="">
          <div className="p-4 flex  flex-col">
            <div className="aspect-video rounded-md w-full bg-secondary ">
              {metadata.image && (
                <Image
                  src={metadata.image ? metadata.image : "/gradient.jpg"}
                  width={800}
                  height={450}
                  alt="Blog Post Image"
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
            </h1>{" "}
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-medium">Last edit:</span>{" "}
              {selectedDoc.metadata.publishDate}
            </p>
          </div>
          <DocComponent />{" "}
          <div className="flex justify-between mt-8">
            {docs.map((doc, index) => {
              if (doc.slug === slug) {
                const prevDoc = docs[index - 1];
                const nextDoc = docs[index + 1];
                return (
                  <div
                    key={doc.slug}
                    className="flex p-4 justify-between w-full"
                  >
                    <div>
                      {prevDoc && (
                        <Link
                          key={prevDoc.slug}
                          className="w-fit "
                          href={`/posts/${prevDoc.slug}`}
                        >
                          <div className="flex flex-col p-2 rounded-lg w-full items-start justify-end">
                            <span className="text-foreground flex items-center ">
                              <ChevronLeft size={15} className="-ml-1" /> Prev
                            </span>
                            <span>{prevDoc.metadata.title}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                    {nextDoc && (
                      <Link
                        key={nextDoc.slug}
                        className="w-fit "
                        href={`/posts/${nextDoc.slug}`}
                      >
                        <div className="flex flex-col p-2 rounded-lg w-full items-end justify-end">
                          <span className="text-foreground flex items-center ">
                            Next
                            <ChevronRight size={15} className="-mr-1" />
                          </span>
                          <span>{nextDoc.metadata.title}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here
  const { metadata } = await import(`../../posts/content/${slug}.mdx`).catch(
    () => {
      notFound(); // If import fails, show 404
    }
  );
  return {
    title: metadata.title,
  };
}
