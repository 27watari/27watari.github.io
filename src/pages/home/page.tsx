import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Hero from "@/pages/home/components/Hero";
import Works from "@/pages/home/components/Works";
import Skills from "@/pages/home/components/Skills";
import About from "@/pages/home/components/About";
import Experience from "@/pages/home/components/Experience";

export default function Home() {
  useScrollReveal();

  return (
    <div className="w-full overflow-x-hidden bg-background-50">
      <SiteHeader />
      <main className="w-full">
        <Hero />
        <Works />
        <Skills />
        <About />
        <Experience />
      </main>
      <SiteFooter />
    </div>
  );
}