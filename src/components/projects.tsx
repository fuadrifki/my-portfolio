"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import {
  categoryLabels,
  projects,
  ui,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";

function StackChips({
  items,
  align = "start",
}: {
  items: string[];
  align?: "start" | "end";
}) {
  return (
    <ul
      className={`flex flex-wrap gap-1.5 ${
        align === "end" ? "md:justify-end" : ""
      }`}
    >
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="project-card surface-card group flex flex-col overflow-hidden">
      <div className="project-media aspect-[16/10]">
        <Image
          src={project.image}
          alt={`${project.name} — ${t(ui.projectPreview)}`}
          width={800}
          height={500}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={
            project.imageFit === "contain"
              ? "h-full w-full bg-(--surface-2) object-contain p-10"
              : "h-full w-full object-cover"
          }
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2.5">
          {project.featured ? (
            <span className="inline-flex items-center rounded-full bg-(--accent-soft) px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-(--accent)">
              {t(ui.featured)}
            </span>
          ) : null}
          <span className="eyebrow">{t(categoryLabels[project.category])}</span>
        </div>
        <h3 className="display mt-2 text-xl">{project.name}</h3>
        <p className="mt-1.5 font-mono text-xs text-(--muted)">
          {t(project.role)} · {project.period}
        </p>
        {project.platforms && project.platforms.length > 0 ? (
          <p className="mt-2 flex flex-wrap items-center gap-1.5">
            <Smartphone
              aria-hidden="true"
              className="size-3.5 text-(--muted)"
            />
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-md border border-(--line) px-2 py-0.5 font-mono text-[0.7rem] text-(--ink-soft)"
              >
                {platform}
              </span>
            ))}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-(--muted)">
          {t(project.summary)}
        </p>
        <div className="mt-6 pt-6 md:mt-auto">
          <StackChips items={project.stack} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const highlighted = projects.slice(0, 6);

  return (
    <Section
      id="projects"
      index="01"
      eyebrow={ui.selectedProjects.eyebrow}
      title={ui.selectedProjects.title}
      description={ui.selectedProjects.description}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlighted.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="/projects" className="btn btn-outline">
          {t(ui.viewAllProjects)}
          <ArrowRight className="size-4" />
        </a>
      </div>
    </Section>
  );
}

const ALL_FILTER = "all" as const;

export function AllProjects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory | typeof ALL_FILTER>(
    ALL_FILTER,
  );
  const categories = projects
    .map((project) => project.category)
    .filter(
      (category, index, list) => list.indexOf(category) === index,
    );
  const visible =
    filter === ALL_FILTER
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Section
      id="projects"
      index="01"
      eyebrow={ui.allProjects.eyebrow}
      title={ui.allProjects.title}
      description={ui.allProjects.description}
    >
      <div
        className="segmented segmented-wrap"
        role="group"
        aria-label={t(ui.allProjects.title)}
      >
        <button
          type="button"
          aria-pressed={filter === ALL_FILTER}
          onClick={() => setFilter(ALL_FILTER)}
        >
          {t(ui.filterAll)}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {t(categoryLabels[category])}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
