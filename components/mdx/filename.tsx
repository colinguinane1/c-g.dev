export default function FileName({
  children,
  fileName,
  language = "jsx",
}: {
  children: React.ReactNode;
  fileName: string;
  language?: string;
}) {
  return (
    <div className="bg-card w-full pt-2 rounded-md">
      <div className="px-2 pb-1 flex justify-between">
        <p>{fileName}</p>
        <p>{language}</p>
      </div>{" "}
      {children}
    </div>
  );
}
