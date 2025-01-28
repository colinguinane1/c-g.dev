import { Tabs, TabsContent, TabsTrigger } from "../ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Viewport({
  children,
  codeSnippet,
}: {
  children: React.ReactNode;
  codeSnippet: string;
}) {
  return (
    <Tabs defaultValue="preview">
      <TabsList className="">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="bg-card grid rounded-md place-content-center py-20 border">
          {children}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="bg-card grid rounded-md place-content-center py-20 border">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </TabsContent>
    </Tabs>
  );
}
