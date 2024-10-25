export default function Viewport({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-card grid rounded-md place-content-center py-20 border">
        {children}
      </div>
    </>
  );
}
