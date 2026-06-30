import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type BreadcrumbEntry = {
  label: string;
  href?: string;
};

type ContentDetailLayoutProps = {
  breadcrumbs: BreadcrumbEntry[];
  breadcrumbClassName?: string;
  containerClassName?: string;
  header: ReactNode;
  children: ReactNode;
  basePath: string;
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

function ContentDetailNav({
  basePath,
  prev,
  next,
}: Pick<ContentDetailLayoutProps, "basePath" | "prev" | "next">) {
  if (!prev && !next) {
    return null;
  }

  return (
    <div className="flex justify-between mt-8 p-4 w-full">
      <div>
        {prev && (
          <Link className="w-fit" href={`${basePath}/${prev.slug}`}>
            <div className="flex flex-col p-2 rounded-lg w-full items-start justify-end">
              <span className="text-foreground flex items-center">
                <ChevronLeft size={15} className="-ml-1" /> Prev
              </span>
              <span>{prev.title}</span>
            </div>
          </Link>
        )}
      </div>
      {next && (
        <Link className="w-fit" href={`${basePath}/${next.slug}`}>
          <div className="flex flex-col p-2 rounded-lg w-full items-end justify-end">
            <span className="text-foreground flex items-center">
              Next
              <ChevronRight size={15} className="-mr-1" />
            </span>
            <span>{next.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export function ContentDetailLayout({
  breadcrumbs,
  breadcrumbClassName = "px-4 md:hidden",
  containerClassName = "flex flex-col max-w-2xl",
  header,
  children,
  basePath,
  prev,
  next,
}: ContentDetailLayoutProps) {
  return (
    <section className="mt-2 flex flex-col items-center">
      <div className={cn("flex flex-col", containerClassName)}>
        <div className={cn("flex items-center gap-4 w-full", breadcrumbClassName)}>
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.label} className="contents">
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbItem>
                    {crumb.href ? (
                      <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <div className="p-4 flex flex-col">{header}</div>
          {children}
          <ContentDetailNav basePath={basePath} prev={prev} next={next} />
        </div>
      </div>
    </section>
  );
}
