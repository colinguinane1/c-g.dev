import FadeInSection from "./FadeInView";
import { Button } from "@/components/ui/button";
import { Component } from "@/lib/get-components";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

interface ComponentCardProps {
  component: Component;
  idx: number;
}

export default function ComponentCard({ component, idx }: ComponentCardProps) {
  return (
    <FadeInSection>
      <Link
        key={component.slug}
        className="flex flex-col"
        href={`/components/${component.slug}`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-full">
            <div className="text-lg flex items-center gap-2  text-primary font-bold hover:underline">
              <h1>{component.metadata.title}</h1>
              {idx === 0 && (
                <span className="text-green-500 border px-1 rounded-md bg-green-500/10 border-green-500/20">
                  New
                </span>
              )}
            </div>
          </div>

          <div>
            <Button variant={"outline"}>
              View <ChevronRight className="ml-1" size={15} />
            </Button>
          </div>
        </div>
      </Link>
    </FadeInSection>
  );
}
