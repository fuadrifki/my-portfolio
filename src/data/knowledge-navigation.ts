import type { Localized } from "@/data/portfolio";

export type KnowledgeArea = {
  key: string;
  label: Localized;
  articleSlugs: string[];
};

export const knowledgeAreas: KnowledgeArea[] = [
  {
    key: "rendering-web-delivery",
    label: { en: "Rendering & Delivery", id: "Rendering & Delivery" },
    articleSlugs: [
      "csr",
      "ssr",
      "hydration",
      "csr-vs-ssr",
      "ssr-ssg-isr",
      "server-vs-client-components",
      "seo-frontend"
    ]
  },
  {
    key: "javascript-foundations",
    label: { en: "JavaScript Fundamentals", id: "Fundamental JavaScript" },
    articleSlugs: [
      "synchronous-vs-asynchronous-javascript",
      "promise",
      "async-await",
      "event-loop"
    ]
  },
  {
    key: "components-frameworks",
    label: { en: "Frameworks", id: "Framework" },
    articleSlugs: [
      "component-lifecycle-reactivity",
      "react-vs-vue",
      "nextjs-vs-nuxt",
      "design-systems-frontend"
    ]
  },
  {
    key: "state-data-flow",
    label: { en: "UI Engineering", id: "UI Engineering" },
    articleSlugs: [
      "client-vs-server-state",
      "context-vs-state-management",
      "api-integration-data-flow"
    ]
  },
  {
    key: "frontend-architecture",
    label: { en: "Architecture & Design", id: "Arsitektur & Desain" },
    articleSlugs: [
      "feature-vs-layer-architecture",
      "clean-architecture-frontend",
      "microfrontend-architecture"
    ]
  }
];

export function getKnowledgeAreaForArticle(slug: string) {
  return knowledgeAreas.find((area) => area.articleSlugs.includes(slug));
}
