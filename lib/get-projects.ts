import fs from "fs";
import path from "path";

export type Project = {
  slug: string;
  metadata: {
    title: string;
    projectNumber: string;
    category: string;
    published: boolean;
    description: string;
    image: string;
    stack: string[];
  };
};

// Helper function to get all posts
export async function getAllProjects(): Promise<Project[]> {
  const dir = path.join(process.cwd(), "app", "projects", "content");
  const files = fs.readdirSync(dir);

  const posts = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // Import the metadata from the MDX files
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { metadata } = require(`@/app/projects/content/${filename}`);
      return {
        slug: filename.replace(".mdx", ""),
        metadata: metadata || { title: "Untitled", publishDate: "1970-01-01" },
      };
    });

  // Sort posts by publish date in descending order
  return posts.sort(
    (a, b) => b.metadata.projectNumber - a.metadata.projectNumber
  );
}
