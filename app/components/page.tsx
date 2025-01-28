import FadeInSection from "@/components/FadeInView";
import ComponentCard from "@/components/component-card";
import { getAllComponents } from "@/lib/get-components";

export default async function Component() {
  const components = await getAllComponents();

  return (
    <FadeInSection>
      <section className="w-full">
        <div className="flex flex-col gap-8 p-4 max-w-3xl z-10 w-full  justify-between">
          <div>
            <h2 className="text-5xl text-left sm:text-6xl font-black">UI</h2>{" "}
          </div>
          <div>
            <p>Some custom reusable components built with TailwindCSS</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            {components.map((component, idx) => (
              <ComponentCard
                idx={idx}
                key={component.metadata.title}
                component={component}
              />
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
