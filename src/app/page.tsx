import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Speaking } from "@/components/speaking";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
