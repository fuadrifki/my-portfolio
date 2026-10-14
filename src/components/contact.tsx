"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useLanguage } from "@/components/providers";
import { profile, ui } from "@/data/portfolio";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-(--line)"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="overflow-hidden rounded-2xl bg-(--ink) px-6 py-12 text-(--bg) sm:px-12 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--bg)_65%,transparent)]">
            <span className="text-(--accent)">06</span> — {t(ui.contactSection.eyebrow)}
          </p>
          <h2 className="display mt-4 max-w-3xl text-3xl text-balance sm:text-5xl">
            {t(ui.contactSection.title)}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[color-mix(in_srgb,var(--bg)_78%,transparent)]">
            {t(ui.contactSection.description)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn bg-(--accent) text-(--accent-ink) hover:brightness-110"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="btn border border-[color-mix(in_srgb,var(--bg)_30%,transparent)] text-(--bg) hover:bg-[color-mix(in_srgb,var(--bg)_12%,transparent)]"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
              <ArrowUpRight className="size-3.5 opacity-70" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn border border-[color-mix(in_srgb,var(--bg)_30%,transparent)] text-(--bg) hover:bg-[color-mix(in_srgb,var(--bg)_12%,transparent)]"
            >
              <GithubIcon className="size-4" />
              GitHub
              <ArrowUpRight className="size-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
