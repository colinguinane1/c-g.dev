"use client";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function EnhancedPortfolioComponent() {
  return (
    <div className={`min-h-screen bg-background text-foreground`}>
      <main className="container mx-auto px-6 py-8">
        <Hero />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
