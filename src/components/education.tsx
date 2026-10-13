"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { education, ui } from "@/data/portfolio";

export function Education() {
  const { t } = useLanguage();

  return (
    <Section
      id="education"
      index="04"
      eyebrow={ui.educationSection.eyebrow}
      title={ui.educationSection.title}
      description={ui.educationSection.description}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <Reveal key={item.school} delay={index * 60}>
            <article className="surface-card flex h-full gap-4 p-5 sm:p-6">
              <Image
                src={item.logo}
                alt={`${item.school} ${t(ui.logoAlt)}`}
                width={44}
                height={44}
                className="size-11 shrink-0 rounded-lg border border-[var(--line)]"
              />
              <div>
                <h3 className="text-base font-semibold text-[var(--ink)]">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-[var(--accent)]">
                  {t(item.degree)} · {t(item.field)}
                </p>
                <p className="eyebrow mt-2">{item.period}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {t(item.description)}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
