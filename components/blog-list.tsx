import FadeInSection from "./FadeInView";
import BlogCard from "./blog-card";
import { Post } from "@/lib/get-posts";
import { ChevronRight } from "lucide-react";
import { Link } from "next-view-transitions";

export default function BlogList({ posts }: { posts: Post[] }) {
  return (
    <FadeInSection>
      <section className="pb-10 w-full">
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl py-4 font-bold tracking-tighter text-primary">
            Recent Posts
          </h2>
          <Link className="flex items-center" href="/posts">
            See More <ChevronRight size={15} />
          </Link>
        </div>
        <div className="grid gap-2">
          {posts.map((post) => (
            <BlogCard post={post} key={post.slug} />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
