import FadeInSection from "./FadeInView";
import { Button } from "@/components/ui/button";
import { Component } from "@/lib/get-components";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

interface ComponentCardProps {
  component: Component;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <FadeInSection>
      <Link
        key={component.slug}
        className="flex flex-col"
        href={`/components/${component.slug}`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="w-full">
            <div className="text-lg  text-primary font-bold hover:underline">
              {component.metadata.title}
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
