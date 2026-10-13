"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage, useTheme } from "@/components/providers";
import { LOCALES, profile, ui } from "@/data/portfolio";
import type { Locale, Localized } from "@/data/portfolio";

const NAV: { id: string; label: Localized }[] = [
  { id: "projects", label: ui.nav.projects },
  { id: "experience", label: ui.nav.experience },
  { id: "skills", label: ui.nav.skills },
  { id: "education", label: ui.nav.education },
  { id: "speaking", label: ui.nav.speaking },
  { id: "contact", label: ui.nav.contact },
];

const SECTION_IDS = NAV.map((item) => item.id);

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function ThemeControl() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="segmented" role="group" aria-label={t(ui.theme)}>
      <button
        type="button"
        aria-pressed={theme === "light"}
        aria-label={t(ui.light)}
        title={t(ui.light)}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-3.5" />
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        aria-label={t(ui.dark)}
        title={t(ui.dark)}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-3.5" />
      </button>
    </div>
  );
}

function LanguageControl({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`segmented ${className}`.trim()}
      role="group"
      aria-label={t(ui.language)}
    >
      {LOCALES.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={locale === option.value}
          onClick={() => setLocale(option.value as Locale)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile panel when the viewport becomes wide enough for the
  // desktop navigation.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const navLinks = useMemo(
    () =>
      NAV.map((item) => ({
        ...item,
        label: t(item.label),
      })),
    [t],
  );

  return (
    <>
      <a href="#main" className="skip-link">
        {t(ui.skipToContent)}
      </a>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold text-[var(--ink)]"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-[var(--ink)] text-[0.7rem] font-bold tracking-tight text-[var(--bg)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)]">
            {profile.monogram}
          </span>
          <span className="hidden sm:block">{profile.name}</span>
        </a>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={t(ui.ariaPrimary)}
        >
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="nav-link"
              data-active={active === item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageControl className="hidden sm:inline-flex" />
          <ThemeControl />
          <button
            type="button"
            className="btn btn-ghost h-9 w-9 p-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t(ui.closeMenu) : t(ui.menu)}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="animate-fade-in border-t border-[var(--line)] bg-[var(--bg)] lg:hidden"
        >
          <nav
            className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8"
            aria-label={t(ui.ariaMobile)}
          >
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center justify-between border-b border-[var(--line)] py-3 text-sm font-medium text-[var(--ink-soft)] last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
                <span className="eyebrow">/{item.id}</span>
              </a>
            ))}
            <div className="flex items-center justify-between gap-3 py-3 sm:hidden">
              <LanguageControl />
            </div>
          </nav>
        </div>
      ) : null}
      </header>
    </>
  );
}
