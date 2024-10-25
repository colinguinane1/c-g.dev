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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-6 py-8">
        <Hero />
        <BentoGrid />
        <Skills />
        <Projects />
        <BlogList posts={posts} />
        <ComponentList components={components} />
      
      </main>
    </div>
  );
}
