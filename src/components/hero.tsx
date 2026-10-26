"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  FileDown,
  Mail,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useLanguage } from "@/components/providers";
import { profile, ui } from "@/data/portfolio";

const FOCUS_ITEMS = [
  "Nuxt.js",
  "Next.js",
  "React Native",
  "Node.js",
  "AI-Assisted Development"
];

const QUICK_LINKS = [
  { id: "projects", label: ui.nav.projects },
  { id: "experience", label: ui.nav.experience },
  { id: "skills", label: ui.nav.skills },
  { id: "education", label: ui.nav.education }
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.35] mask-[radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-10">
          <div className="animate-fade-up md:col-span-7">
            <p className="eyebrow">{t(ui.heroRole)}</p>
            <h1 className="display mt-4 text-[clamp(2.5rem,8vw,4.75rem)] text-(--ink)">
              {profile.name}
            </h1>
            <p className="mt-5 font-mono text-sm text-(--accent) sm:text-base">
              {t(profile.focus)}
            </p>
            <p className="lede mt-6 max-w-xl text-pretty">{t(profile.intro)}</p>

            <div className="mt-8">
              <p className="text-xs text-(--muted)">
                {t(ui.quickNavigationPrompt)}
              </p>
              <nav
                aria-label={t(ui.ariaPrimary)}
                className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-semibold sm:gap-y-1"
              >
                {QUICK_LINKS.map(({ id, label }, index) => (
                  <span key={id} className="inline-flex items-center gap-x-2">
                    <a
                      href={`#${id}`}
                      className="text-(--accent) underline decoration-1 underline-offset-4 transition-colors hover:text-(--ink) hover:decoration-2"
                    >
                      {t(label)}
                    </a>
                    {index < QUICK_LINKS.length - 1 ? (
                      <span aria-hidden="true" className="text-(--muted)">
                        ·
                      </span>
                    ) : null}
                  </span>
                ))}
              </nav>
            </div>
          </div>

          <aside
            className="animate-fade-up surface-card overflow-hidden md:col-span-5"
            style={{ animationDelay: "120ms" }}
          >
            <div className="border-b border-(--line)">
              <Image
                src={profile.photo}
                alt={t(profile.photoAlt)}
                width={640}
                height={640}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 border-b border-(--line) p-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--surface-2) px-3 py-1 text-xs font-medium text-(--ink-soft)">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-(--accent) opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-(--accent)" />
                </span>
                {t(profile.availability)}
              </span>
            </div>

            <div className="p-5">
              <p className="eyebrow">{t(ui.focusAreas)}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {FOCUS_ITEMS.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-(--line) p-5">
              <div className="flex items-center justify-between gap-4 py-1.5 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" />
                  {t(profile.location)}
                </span>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Mail className="size-4 text-(--muted)" />
                  {profile.email}
                </span>
                <ArrowUpRight className="size-4 opacity-50" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
              >
                <span className="inline-flex items-center gap-2.5">
                  <LinkedinIcon className="size-4 text-(--muted)" />
                  LinkedIn
                </span>
                <ArrowUpRight className="size-4 opacity-50" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
              >
                <span className="inline-flex items-center gap-2.5">
                  <GithubIcon className="size-4 text-(--muted)" />
                  GitHub
                </span>
                <ArrowUpRight className="size-4 opacity-50" />
              </a>
              <a
                href={profile.cv}
                download
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
              >
                <span className="inline-flex items-center gap-2.5">
                  <FileDown className="size-4 text-(--muted)" />
                  {t(ui.downloadCv)}
                </span>
                <Download className="size-4 opacity-50" />
              </a>
            </div>
          </aside>
        </div>

      </div>
    </section>
  );
}
