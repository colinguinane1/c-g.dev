import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAllComponents } from "@/lib/get-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Assuming getDocs() is an async function that returns the list of docs
export async function generateStaticParams() {
  const docs = await getAllComponents(); // Await the result if getDocs is async
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here

  const docs = await getAllComponents(); // Fetch docs on the server

  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../components/content/${slug}.mdx`
  ).catch(() => {
    notFound(); // If import fails, show 404
  });

  return (
    <section className="mt-2 flex flex-col items-center">
      <div className="flex flex-col  max-w-6xl">
        <div className="px-4 flex items-center gap-4 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">UI</BreadcrumbLink>
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
            <h1 className="text-3xl font-extrabold text-primary">
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
                          href={`/components/${prevDoc.slug}`}
                        >
                          <div className="flex flex-col border p-2 rounded-lg w-full items-center justify-end">
                            <span>{prevDoc.metadata.title}</span>
                            <span className="ml-2 text-primary flex items-center ">
                              Prev <ChevronLeft />
                            </span>
                          </div>
                        </Link>
                      )}
                    </div>
                    {nextDoc && (
                      <Link
                        key={nextDoc.slug}
                        className="w-fit"
                        href={`/components/${nextDoc.slug}`}
                      >
                        <div className="flex flex-col  border p-2 rounded-lg w-full items-center justify-end">
                          <span>{nextDoc.metadata.title}</span>
                          <span className="ml-2 flex text-primary items-center">
                            Next <ChevronRight />
                          </span>
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
  const { metadata } = await import(
    `../../components/content/${slug}.mdx`
  ).catch(() => {
    notFound(); // If import fails, show 404
  });
  return {
    title: metadata.title,
  };
}
