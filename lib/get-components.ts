import fs from "fs";
import path from "path";

export type Component = {
  slug: string;
  metadata: {
    title: string;
    publishDate: string;
    category: string;
    description: string;
    image: string;
  };
};

// Helper function to get all posts
export async function getAllComponents(): Promise<Component[]> {
  const dir = path.join(process.cwd(), "app", "components", "content");
  const files = fs.readdirSync(dir);

  const uiBlog = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // Import the metadata from the MDX files
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { metadata } = require(`@/app/components/content/${filename}`);
      return {
        slug: filename.replace(".mdx", ""),
        metadata: metadata || { title: "Untitled", publishDate: "1970-01-01" },
      };
    });

  // Sort posts by publish date in descending order
  return uiBlog.sort(
    (a, b) =>
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
  );
}
