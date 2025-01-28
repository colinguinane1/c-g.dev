import StackCard from "./stack-card";

export default function StackCardExample() {
  const stack = ["TypeScript", "Firebase", "Next.js"];
  return (
    <div className="flex flex-wrap gap-4">
      {stack.map((tech: string) => (
        <StackCard key={tech} tech={tech} showLabel />
      ))}
    </div>
  );
}

function EmptyCardExample() {
  return <StackCard key="Empty" tech="Empty" />;
}
