import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { KnowledgeHome } from "@/components/learning/knowledge-base";

export const metadata: Metadata = {
  title: "Frontend Engineering Knowledge Base",
  description: "Knowledge base frontend engineering untuk memahami istilah, cara kerja teknologi, trade-off, dan dampak keputusan teknis."
};

export default function LearningPage() {
  return <><Header /><KnowledgeHome /><Footer /></>;
}

