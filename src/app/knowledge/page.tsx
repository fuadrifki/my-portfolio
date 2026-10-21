import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { KnowledgeHome } from "@/components/learning/knowledge-base";

export const metadata: Metadata = {
  title: "Frontend Engineering Knowledge Base",
  description: "A bilingual frontend engineering knowledge base covering JavaScript, rendering, frameworks, state, and application architecture.",
  alternates: { canonical: "/knowledge" },
  openGraph: {
    title: "Frontend Engineering Knowledge Base",
    description: "Explore frontend engineering concepts, trade-offs, and practical examples in English and Indonesian.",
    url: "/knowledge"
  }
};

export default function KnowledgePage() {
  return <><Header /><KnowledgeHome /><Footer /></>;
}
