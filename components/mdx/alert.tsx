import { Alert } from "../ui/alert";
import { InfoIcon } from "lucide-react";

export default function CustomAlert({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Alert className="flex items-center gap-4">
      <InfoIcon />
      <p>{children}</p>
    </Alert>
  );
}
