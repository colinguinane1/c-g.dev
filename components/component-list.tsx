import FadeInSection from "./FadeInView";
import ComponentCard from "./component-card";
import { Component } from "@/lib/get-components";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default function ComponentList({
  components,
}: {
  components: Component[];
}) {
  return (
    <FadeInSection>
      <section className="pb-10 w-full">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl py-4 font-bold tracking-tighter text-primary">
            UI Components
          </h2>

          <Link className="flex items-center" href="/components">
            See More <ChevronRight size={15} />
          </Link>
        </div>{" "}
        <p className="border bg-green-500/10 rounded-md w-fit px-3 mb-4">
          + Added shadcn CLI support.
        </p>
        <div className="grid gap-2">
          {components.map((component, idx) => (
            <ComponentCard
              idx={idx}
              component={component}
              key={component.slug}
            />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
