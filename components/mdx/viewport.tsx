export default async function Viewport({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card grid p-4 h-[300px]  rounded-md place-content-center border">
      {children}
    </div>
  );
}
