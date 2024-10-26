export default function FileName({
  children,
  name,
  language,
}: {
  children: React.ReactNode;
  name: string;
  language?: string;
}) {
  return (
    <div className="bg-card w-full pt-2 border rounded-md">
      <div className="px-2  pb-3 text-xs relative flex justify-between">
        <div className="flex items-center gap-2 ">
          <div className="bg-red-500/80 w-3 h-3 rounded-full "></div>
          <div className="bg-yellow-500/80  w-3 h-3 rounded-full"></div>
          <div className="bg-green-500/80  w-3 h-3 rounded-full"></div>
        </div>
        <p className=" absolute flex justify-center w-full">{name}</p>
        <p>{language}</p>
      </div>{" "}
      {children}
    </div>
  );
}
