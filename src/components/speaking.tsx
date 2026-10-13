"use client";

import { ArrowUpRight, CalendarDays, Mic, MonitorSmartphone } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { talks, ui } from "@/data/portfolio";

export function Speaking() {
  const { t } = useLanguage();

  return (
    <Section
      id="speaking"
      index="05"
      eyebrow={ui.speakingSection.eyebrow}
      title={ui.speakingSection.title}
      description={ui.speakingSection.description}
    >
      <div className="space-y-4">
        {talks.map((talk) => (
          <Reveal key={talk.title.en}>
            <article className="surface-card grid gap-5 p-6 sm:p-7 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-4">
                <span className="grid size-11 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Mic className="size-5" />
                </span>
                <p className="eyebrow mt-4">{talk.host}</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="display text-xl text-balance sm:text-2xl">
                  {t(talk.title)}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    {t(talk.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MonitorSmartphone className="size-3.5" />
                    {t(talk.format)}
                  </span>
                </div>
                <p className="lede mt-4 text-pretty">{t(talk.description)}</p>
                {talk.link ? (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-outline mt-6"
                  >
                    {t(ui.watchRecording)}
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
