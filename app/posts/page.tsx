import FadeInSection from "@/components/FadeInView";
import BlogCard from "@/components/blog-card";
import { getAllPosts } from "@/lib/get-posts";

export default async function Blogs() {
  const allPosts = await getAllPosts();
  const posts = allPosts.filter((post) => post.metadata.published);

  return (
    <FadeInSection>
      <section className="w-full">
        <div className="flex flex-col gap-8 p-4 max-w-3xl z-10 w-full  justify-between">
          <div>
            <h2 className="text-5xl text-left sm:text-6xl font-black">Blog</h2>
          </div>
          <div className="">
            <p>I occasionally write about something that interests me.</p>
          </div>
          <p>{posts.length} posts so far.</p>

          <div className="w-full">
            <div className="space-y-4">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
