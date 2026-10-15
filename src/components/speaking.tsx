"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Mic, MonitorSmartphone, Play } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { talks, ui, type Talk } from "@/data/portfolio";

function VideoPreview({ talk }: { talk: Talk }) {
  const [playing, setPlaying] = useState(false);

  if (!talk.videoId) return null;

  if (playing) {
    return (
      <div className="overflow-hidden rounded-xl border border-(--line)">
        <iframe
          src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1&rel=0`}
          title={talk.videoTitle ?? talk.title.en}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="block aspect-video w-full border-0"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-(--line)">
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group relative block w-full cursor-pointer"
        aria-label={`Play video: ${talk.videoTitle ?? talk.title.en}`}
      >
        <Image
          src={`https://i.ytimg.com/vi/${talk.videoId}/hqdefault.jpg`}
          alt={talk.videoTitle ?? talk.title.en}
          width={480}
          height={360}
          className="aspect-video w-full object-cover"
        />
        <span className="absolute inset-0 grid place-items-center bg-black/20 transition group-hover:bg-black/30">
          <span className="grid size-12 place-items-center rounded-full bg-white/95 text-(--accent) shadow-lg transition group-hover:scale-105 sm:size-14">
            <Play className="size-5 fill-current sm:size-6" />
          </span>
        </span>
      </button>
      <div className="flex items-center gap-3 bg-(--surface) px-4 py-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-(--ink)">
            {talk.videoTitle ?? talk.title.en}
          </p>
          <p className="mt-0.5 text-xs text-(--muted)">youtube.com</p>
        </div>
      </div>
    </div>
  );
}

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
              <div className="min-w-0 md:col-span-4">
                <span className="grid size-11 place-items-center rounded-xl bg-(--accent-soft) text-(--accent)">
                  <Mic className="size-5" />
                </span>
                <p className="eyebrow mt-4">{talk.host}</p>
                {talk.logos && talk.logos.length > 0 ? (
                  <div className="mt-3 flex items-center gap-2">
                    {talk.logos.map((logo) => (
                      <Image
                        key={logo}
                        src={logo}
                        alt={`${talk.host} ${t(ui.logoAlt)}`}
                        width={80}
                        height={40}
                        className="h-10 w-auto rounded-md border border-(--line) bg-white object-contain px-1.5 py-1"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="min-w-0 md:col-span-8">
                <h3 className="display text-xl text-balance sm:text-2xl">
                  {t(talk.title)}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-(--muted)">
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
                {talk.videoId ? (
                  <div className="mt-6">
                    <VideoPreview talk={talk} />
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
