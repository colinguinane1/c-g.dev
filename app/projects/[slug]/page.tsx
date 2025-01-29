import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/get-projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Assuming getDocs() is an async function that returns the list of docs
export async function generateStaticParams() {
  const docs = await getAllProjects(); // Await the result if getDocs is async
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function DocsPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params; // Await the params here

  const docs = await getAllProjects(); // Fetch docs on the server

  const selectedDoc = docs.find((doc) => doc.slug === slug);

  if (!selectedDoc) {
    notFound();
  }

  const { metadata, default: DocComponent } = await import(
    `../../projects/content/${slug}.mdx`
  ).catch(() => {
    notFound(); // If import fails, show 404
  });

  return (
    <section className="mt-2 md:mt-0 flex flex-col items-center">
      <div className="flex md:flex-row w-full flex-col max-w-6xl">
        <div className="w-fit flex-col  border-r p-4 items-start gap-4 hidden md:flex">
          <h1>Documentation</h1>
          {docs.map((doc) => (
            <Button key={doc.slug} variant={"ghost"} asChild>
              <Link
                className={`${
                  doc.slug === slug &&
                  "bg-primary/10 border-l-4 text-primary border-primary/20"
                } hover:bg-primary/10 w-full text-start flex items-start  transition-all`}
                href={`/docs/${doc.slug}`}
              >
                <div>
                  <p className="font-semibold capitalize">
                    {doc.metadata.title}
                  </p>
                </div>
              </Link>
            </Button>
          ))}
        </div>
        <div className="px-4 md:hidden flex items-center gap-4 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
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
            {" "}
            <div className="aspect-video rounded-md w-full bg-secondary ">
              <Image
                src={selectedDoc.metadata.image}
                alt={selectedDoc.metadata.title}
                layout="responsive"
                width={100}
                height={100}
                className="h-20"
              />
            </div>
            <h1 className="text-3xl font-extrabold text-primary">
              {selectedDoc.metadata.title}
            </h1>{" "}
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
                          href={`/docs/${prevDoc.slug}`}
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
                        href={`/docs/${nextDoc.slug}`}
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
  const { metadata } = await import(`../../projects/content/${slug}.mdx`).catch(
    () => {
      notFound(); // If import fails, show 404
    }
  );
  return {
    title: metadata.title,
  };
}
