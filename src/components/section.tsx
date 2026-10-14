"use client";

import { useLanguage } from "@/components/providers";
import { Reveal } from "@/components/reveal";
import type { Localized } from "@/data/portfolio";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: Localized;
  title: Localized;
  description?: Localized;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionProps) {
  const { t } = useLanguage();

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-(--line) ${className}`.trim()}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <Reveal>
          <header className="mb-10 grid gap-5 md:mb-14 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-4">
              <p className="eyebrow flex items-center gap-3">
                <span className="text-(--accent)">{index}</span>
                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-(--line-strong)"
                />
                {t(eyebrow)}
              </p>
            </div>
            <div className="md:col-span-8">
              <h2 className="display text-3xl text-balance sm:text-4xl md:text-[2.75rem]">
                {t(title)}
              </h2>
              {description ? (
                <p className="lede mt-4 max-w-2xl text-pretty">
                  {t(description)}
                </p>
              ) : null}
            </div>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
