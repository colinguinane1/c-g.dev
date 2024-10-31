import fs from "fs";
import path from "path";


export type Post = {
  slug: string;
  metadata: {
    title: string;
    publishDate: string;
    category: string;
    published: boolean;
    description: string;
    image: string;
  };
};

// Helper function to get all posts
export async function getAllPosts(): Promise<Post[]> {
  const dir = path.join(process.cwd(), "content", "blogs");
  const files = fs.readdirSync(dir);

  const posts = files
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // Import the metadata from the MDX files
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { metadata } = require(`@/content/blogs/${filename}`);
      return {
        slug: filename.replace(".mdx", ""),
        metadata: metadata || { title: "Untitled", publishDate: "1970-01-01" },
      };
    });

  // Sort posts by publish date in descending order
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
  );
}