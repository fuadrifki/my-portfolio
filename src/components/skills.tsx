"use client";

import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skillGroups, ui } from "@/data/portfolio";

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section
      id="skills"
      index="03"
      eyebrow={ui.skillsSection.eyebrow}
      title={ui.skillsSection.title}
      description={ui.skillsSection.description}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title.en} delay={index * 50}>
            <div className="surface-card h-full p-5">
              <h3 className="eyebrow">{t(group.title)}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[var(--ink-soft)]"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
