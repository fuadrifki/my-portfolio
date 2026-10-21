import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { KnowledgeArticle } from "@/components/learning/knowledge-base";
import {
  frontendKnowledge,
  getKnowledgeEntry
} from "@/data/frontend-knowledge";

type Props = { params: Promise<{ conceptSlug: string }> };

export function generateStaticParams() {
  return frontendKnowledge.map((entry) => ({ conceptSlug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const entry = getKnowledgeEntry((await params).conceptSlug);
  return entry
    ? { title: `${entry.term} — Frontend Engineering Knowledge Base`, description: entry.summary.id }
    : {};
}

export default async function KnowledgeEntryPage({ params }: Props) {
  const entry = getKnowledgeEntry((await params).conceptSlug);
  if (!entry) notFound();

  return <><Header /><KnowledgeArticle entry={entry} /><Footer /></>;
}
