"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useLanguage } from "@/components/providers";
import { profile, ui } from "@/data/portfolio";

const FOCUS_ITEMS = [
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "Nuxt.js",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Tailwind CSS",
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pb-24 md:pt-24">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-10">
          <div className="animate-fade-up md:col-span-7">
            <p className="eyebrow">{t(profile.title)}</p>
            <h1 className="display mt-4 text-[clamp(2.5rem,8vw,4.75rem)] text-[var(--ink)]">
              {profile.name}
            </h1>
            <p className="mt-5 font-mono text-sm text-[var(--accent)] sm:text-base">
              {t(profile.focus)}
            </p>
            <p className="lede mt-6 max-w-xl text-pretty">{t(profile.intro)}</p>
            <p className="lede mt-4 max-w-xl text-pretty">
              {t(profile.introSecondary)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                {t(ui.viewWork)}
                <ArrowRight className="size-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline">
                <Mail className="size-4" />
                {t(ui.emailMe)}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {t(profile.location)}
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                <GithubIcon className="size-4" />
                github.com/fuadrifki
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                <LinkedinIcon className="size-4" />
                linkedin.com/in/fuad-rifki
              </a>
            </div>
          </div>

          <aside
            className="animate-fade-up surface-card md:col-span-5"
            style={{ animationDelay: "120ms" }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-[var(--ink)] text-base font-bold tracking-tight text-[var(--bg)]">
                {profile.monogram}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1 text-xs font-medium text-[var(--ink-soft)]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-2 animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
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

            <div className="border-t border-[var(--line)] p-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2.5">
                  <Mail className="size-4 text-[var(--muted)]" />
                  {profile.email}
                </span>
                <ArrowRight className="size-4 opacity-50" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2.5">
                  <LinkedinIcon className="size-4 text-[var(--muted)]" />
                  LinkedIn
                </span>
                <ArrowRight className="size-4 opacity-50" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between gap-4 py-1.5 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
              >
                <span className="inline-flex items-center gap-2.5">
                  <GithubIcon className="size-4 text-[var(--muted)]" />
                  GitHub
                </span>
                <ArrowRight className="size-4 opacity-50" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
