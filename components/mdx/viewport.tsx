import { Tabs, TabsContent, TabsTrigger, TabsList } from "../ui/tabs";
import Code from "./custom-code";

export default async function Viewport({
  children,
  codeSnippet,
}: {
  children: React.ReactNode;
  codeSnippet: string;
}) {
  if (codeSnippet) {
    return (
      <Tabs defaultValue="preview">
        <TabsList className="">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="bg-card grid h-40 rounded-md place-content-center border">
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div>
            {/* Render the processed code */}
            <Code>{codeSnippet}</Code>
          </div>
        </TabsContent>
      </Tabs>
    );
  } else {
    return (
      <div className="bg-card grid h-40 rounded-md place-content-center border">
        {children}
      </div>
    );
  }
}
