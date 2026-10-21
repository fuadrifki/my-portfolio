"use client";

import { ArrowUp, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { useLanguage } from "@/components/providers";
import { profile, ui, YEAR } from "@/data/portfolio";

const NAV: { id: string; key: keyof typeof ui.nav }[] = [
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "skills", key: "skills" },
  { id: "education", key: "education" },
  { id: "speaking", key: "speaking" },
  { id: "contact", key: "contact" },
];

export function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (id: string) =>
    pathname === "/" ? `#${id}` : `/#${id}`;

  return (
    <footer className="border-t border-(--line)">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href={sectionHref("top")}
              className="flex items-center gap-2.5"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-(--ink) text-[0.7rem] font-bold tracking-tight text-(--bg)">
                {profile.monogram}
              </span>
              <span className="text-sm font-semibold text-(--ink)">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-(--muted)">
              {t(ui.footerNote)}
            </p>
          </div>

          <nav className="md:col-span-4" aria-label={t(ui.ariaFooter)}>
            <p className="eyebrow">{t(ui.menu)}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              <li>
                <Link href="/learning" className="text-sm text-(--ink-soft) transition-colors hover:text-(--accent)">
                  {t(ui.nav.learning)}
                </Link>
              </li>
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={sectionHref(item.id)}
                    className="text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
                  >
                    {t(ui.nav[item.key])}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow">{t(ui.contactSection.eyebrow)}</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
                >
                  <Mail className="size-4" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm text-(--ink-soft) transition-colors hover:text-(--accent)"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-(--line) pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-(--muted)">
            © {YEAR} {profile.name}. {t(ui.rights)}
          </p>
          <a
            href={sectionHref("top")}
            className="inline-flex items-center gap-2 text-xs font-medium text-(--muted) transition-colors hover:text-(--ink)"
          >
            <ArrowUp className="size-3.5" />
            {t(ui.backToTop)}
          </a>
        </div>
      </div>
    </footer>
  );
}
