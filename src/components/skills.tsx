"use client";

import Image from "next/image";
import {
  Blocks,
  CodeXml,
  Component,
  Database,
  DraftingCompass,
  FileText,
  Flag,
  FlaskConical,
  Globe,
  Languages,
  Layers,
  MonitorSmartphone,
  Palette,
  Plug,
  Printer,
  Recycle,
  Shapes,
  Smartphone,
  Sparkles,
  Webhook,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { skillGroups, ui, type SkillIcon } from "@/data/portfolio";

const SKILL_ICONS: Record<SkillIcon, typeof Shapes> = {
  layers: Layers,
  component: Component,
  recycle: Recycle,
  database: Database,
  palette: Palette,
  "monitor-smartphone": MonitorSmartphone,
  globe: Globe,
  plug: Plug,
  languages: Languages,
  "file-text": FileText,
  printer: Printer,
  flag: Flag,
  "code-xml": CodeXml,
  blocks: Blocks,
  smartphone: Smartphone,
  "drafting-compass": DraftingCompass,
  webhook: Webhook,
  sparkles: Sparkles,
  "flask-conical": FlaskConical,
  wrench: Wrench
};

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
            <div className="surface-card card-hover h-full p-5">
              <h3 className="eyebrow flex items-center gap-2">
                {(() => {
                  const GroupIcon = SKILL_ICONS[group.icon];
                  return (
                    <GroupIcon
                      aria-hidden="true"
                      className="size-3.5 text-(--accent)"
                    />
                  );
                })()}
                {t(group.title)}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 text-sm text-(--ink-soft)"
                  >
                    {(() => {
                      if (item.logo) {
                        return (
                          <Image
                            src={item.logo}
                            alt={`${item.name} logo`}
                            width={20}
                            height={20}
                            loading="lazy"
                            className="size-5 shrink-0 rounded bg-white object-contain p-0.5"
                          />
                        );
                      }
                      const Icon = item.icon
                        ? SKILL_ICONS[item.icon]
                        : Shapes;
                      return (
                        <Icon
                          aria-hidden="true"
                          className="size-4 shrink-0 text-(--muted)"
                        />
                      );
                    })()}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="transition-colors hover:text-(--accent) hover:underline hover:underline-offset-4"
                      >
                        {item.name}
                      </a>
                    ) : (
                      item.name
                    )}
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
