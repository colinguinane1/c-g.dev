// app/recent-posts.tsx (Client Component)
"use client";

import Link from "next/link";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishDate: string;
  };
};

export default function RecentPosts({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-8 tracking-tighter text-primary">
        Recent Blogs
      </h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-4 border rounded-md shadow">
            <Link className="flex flex-col" href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-bold hover:underline">
                {post.metadata.title}
              </h2>
              <p>{post.metadata.publishDate}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
