"use client";

import { useEffect, useState } from "react";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLanguage, useTheme } from "@/components/providers";
import { LOCALES, profile, ui } from "@/data/portfolio";
import type { Locale, Localized } from "@/data/portfolio";

const NAV: { id: string; label: Localized; href?: string }[] = [
  { id: "projects", label: ui.nav.projects, href: "/projects" },
  { id: "experience", label: ui.nav.experience },
  { id: "knowledge", label: ui.nav.learning, href: "/knowledge" },
  { id: "contact", label: ui.nav.contact }
];

const SECTION_IDS = NAV.filter((item) => !item.href).map((item) => item.id);

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
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
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
        className="cursor-pointer"
      >
        <Sun className="size-3.5" />
      </button>
      <button
        type="button"
        aria-pressed={theme === "dark"}
        aria-label={t(ui.dark)}
        title={t(ui.dark)}
        onClick={() => setTheme("dark")}
        className="cursor-pointer"
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
      <span className="grid size-[1.9rem] shrink-0 place-items-center text-(--muted)">
        <Globe aria-hidden="true" className="size-3.5" />
      </span>
      {LOCALES.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={locale === option.value}
          onClick={() => setLocale(option.value as Locale)}
          className="cursor-pointer"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const sectionHref = (id: string) => (onHome ? `#${id}` : `/#${id}`);
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

  const itemHref = (item: (typeof NAV)[number]) =>
    item.href ?? sectionHref(item.id);
  const itemActive = (item: (typeof NAV)[number]) =>
    item.id === "projects"
      ? pathname.startsWith("/projects")
      : item.id === "knowledge"
        ? pathname.startsWith("/knowledge")
        : active === item.id;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-(--line) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href={sectionHref("top")}
            className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-(--ink)"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-(--ink) text-[0.7rem] font-bold tracking-tight text-(--bg) transition-colors group-hover:bg-(--accent) group-hover:text-(--accent-ink)">
              {profile.monogram}
            </span>
            <span className="hidden sm:block">{profile.name}</span>
          </a>

          <nav
            className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-7"
            aria-label={t(ui.ariaPrimary)}
          >
            {NAV.map((item) => (
              <Link
                key={item.id}
                href={itemHref(item)}
                className="nav-link whitespace-nowrap"
                data-active={itemActive(item)}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <LanguageControl className="hidden sm:inline-flex" />
            <ThemeControl />
            <button
              type="button"
              className="grid size-9 shrink-0 place-items-center rounded-full border border-(--line) bg-(--surface) text-(--muted) transition-colors hover:text-(--ink) lg:hidden"
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
            className="animate-fade-in border-t border-(--line) bg-(--bg) lg:hidden"
          >
            <nav
              className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8"
              aria-label={t(ui.ariaMobile)}
            >
              {NAV.map((item) => (
                <Link
                  key={item.id}
                  href={itemHref(item)}
                  className="flex items-center justify-between border-b border-(--line) py-3 text-sm font-medium text-(--ink-soft) last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                  <span className="eyebrow">/{item.id}</span>
                </Link>
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
