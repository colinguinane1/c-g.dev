import BentoGrid from "@/components/bento-grid";
import BlogList from "@/components/blog-list";
import ComponentList from "@/components/component-list";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { getAllComponents } from "@/lib/get-components";
import { getAllPosts } from "@/lib/get-posts";

export default async function EnhancedPortfolioComponent() {
  const posts = await getAllPosts();
  const components = await getAllComponents();

  const publishedPosts = posts.filter((post) => post.metadata.published);

  return (
    <div className=" grid  place-content-center ">
      <div className="w-screen p-4 max-w-2xl">
        <Hero />
        <BentoGrid />
        <Projects />
        <Skills />
        <BlogList posts={publishedPosts} />
        <ComponentList components={components} />
  </div>
    </div>
  );
}
