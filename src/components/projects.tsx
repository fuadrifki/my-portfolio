"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import {
  categoryLabels,
  featuredProjects,
  otherProjects,
  ui,
  type Project,
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

function FeaturedCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="project-card surface-card group grid overflow-hidden md:grid-cols-2">
      <div className="project-media aspect-[16/10] md:aspect-auto md:h-full">
        <Image
          src={project.image}
          alt={`${project.name} — ${t(ui.projectPreview)}`}
          width={800}
          height={500}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-[var(--accent)]">
            {t(ui.featured)}
          </span>
          <span className="eyebrow">{t(categoryLabels[project.category])}</span>
        </div>
        <h3 className="display mt-4 text-2xl text-balance sm:text-[1.75rem]">
          {project.name}
        </h3>
        <p className="mt-2 font-mono text-xs text-[var(--muted)]">
          {t(project.role)} · {project.period}
        </p>
        <p className="lede mt-4 text-pretty">{t(project.summary)}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {t(project.description)}
        </p>
        <div className="mt-6 pt-6 md:mt-auto">
          <StackChips items={project.stack} />
        </div>
      </div>
    </article>
  );
}

function GridCard({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <article className="project-card surface-card group flex flex-col overflow-hidden">
      <div className="project-media aspect-[16/10]">
        <Image
          src={project.image}
          alt={`${project.name} — ${t(ui.projectPreview)}`}
          width={800}
          height={500}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="eyebrow">{t(categoryLabels[project.category])}</span>
        <h3 className="display mt-2 text-xl">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
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
  const [lead, ...rest] = featuredProjects;

  return (
    <Section
      id="projects"
      index="01"
      eyebrow={ui.selectedProjects.eyebrow}
      title={ui.selectedProjects.title}
      description={ui.selectedProjects.description}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {lead ? (
          <Reveal className="lg:col-span-2">
            <FeaturedCard project={lead} />
          </Reveal>
        ) : null}
        {rest.map((project, index) => (
          <Reveal key={project.slug} delay={index * 80}>
            <GridCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="eyebrow mb-2">{t(ui.moreProjects)}</h3>
        <ul className="border-t border-[var(--line)]">
          {otherProjects.map((project) => (
            <li
              key={project.slug}
              className="grid gap-3 border-b border-[var(--line)] py-5 md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-4">
                <h4 className="display text-lg">{project.name}</h4>
                <p className="eyebrow mt-1.5">
                  {t(categoryLabels[project.category])} · {project.period}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-[var(--muted)] md:col-span-5">
                {t(project.description)}
              </p>
              <div className="md:col-span-3">
                <StackChips items={project.stack} align="end" />
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
