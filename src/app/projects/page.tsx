import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AllProjects } from "@/components/projects";

export const metadata: Metadata = {
  title: "All Projects"
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="main">
        <AllProjects />
      </main>
      <Footer />
    </>
  );
}
