"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { experiences, ui, type Experience } from "@/data/portfolio";

function ExperienceItem({ item }: { item: Experience }) {
  const { t } = useLanguage();

  return (
    <article className="grid gap-6 border-b border-(--line) py-8 first:pt-0 md:grid-cols-12 md:gap-8 md:py-10">
      <div className="md:col-span-4">
        <div className="flex items-start gap-3">
          <Image
            src={item.logo}
            alt={`${item.company} ${t(ui.logoAlt)}`}
            width={40}
            height={40}
            className={
              item.logoTone === "dark"
                ? "size-10 shrink-0 rounded-lg border border-(--line) bg-slate-950 object-contain p-1"
                : "size-10 shrink-0 rounded-lg border border-(--line) bg-white/60 object-contain p-1"
            }
          />
          <div className="min-w-0">
            <h3 className="display text-lg">{t(item.role)}</h3>
            <p className="mt-0.5 text-sm font-semibold text-(--accent)">
              {item.company}
            </p>
            <p className="eyebrow mt-1.5">{t(item.period)}</p>
          </div>
        </div>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-(--muted)">
          <MapPin className="size-3.5" />
          {t(item.location)}
          {item.arrangement ? ` · ${t(item.arrangement)}` : null}
        </p>
      </div>

      <div className="md:col-span-8">
        <p className="lede text-pretty">{t(item.description)}</p>
        <ul className="mt-4 space-y-2.5">
          {item.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex gap-3 text-sm leading-relaxed text-(--muted)"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-px w-3.5 shrink-0 bg-(--accent)"
              />
              <span>{t(highlight)}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <p className="eyebrow mb-2.5">{t(ui.keyProjects)}</p>
          <ul className="flex flex-wrap gap-1.5">
            {item.keyProjects.map((project) => (
              <li key={project} className="chip">
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow={ui.experienceSection.eyebrow}
      title={ui.experienceSection.title}
      description={ui.experienceSection.description}
    >
      <div className="border-t border-(--line) pt-8 md:pt-10">
        {experiences.map((item, index) => (
          <Reveal key={item.company} delay={index * 60}>
            <ExperienceItem item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
