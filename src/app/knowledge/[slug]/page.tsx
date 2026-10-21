import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { KnowledgeArticle } from "@/components/learning/knowledge-base";
import { frontendKnowledge, getKnowledgeEntry } from "@/data/frontend-knowledge";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return frontendKnowledge.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = getKnowledgeEntry((await params).slug);
  if (!entry) return {};

  const canonical = `/knowledge/${entry.slug}`;
  return {
    title: `${entry.term} — Frontend Engineering Knowledge Base`,
    description: entry.summary.en,
    alternates: { canonical },
    openGraph: {
      title: entry.title.en,
      description: entry.summary.en,
      url: canonical,
      type: "article"
    }
  };
}

export default async function KnowledgeEntryPage({ params }: Props) {
  const entry = getKnowledgeEntry((await params).slug);
  if (!entry) notFound();

  return <><Header /><KnowledgeArticle entry={entry} /><Footer /></>;
}
