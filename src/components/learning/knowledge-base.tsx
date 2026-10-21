"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Clock,
  ChevronDown,
  ExternalLink,
  Search,
  Sparkles,
  X
} from "lucide-react";
import { useLanguage } from "@/components/providers";
import {
  getKnowledgeAreaForArticle,
  knowledgeAreas
} from "@/data/knowledge-navigation";
import {
  frontendKnowledge,
  type KnowledgeCode,
  type KnowledgeEntry
} from "@/data/frontend-knowledge";

const SECTION_IDS = [
  ["pengertian", { en: "What does this concept mean?", id: "Apa maksud konsep ini?" }],
  ["alasan", { en: "Why does this matter in frontend work?", id: "Kenapa ini penting di frontend?" }],
  ["analogi", { en: "How can we picture this in everyday life?", id: "Bagaimana cara membayangkannya dalam kehidupan sehari-hari?" }],
  ["analogy-conclusion", { en: "Conclusion", id: "Kesimpulan" }],
  ["analogy-mapping", { en: "How It Relates to the Concept", id: "Hubungannya dengan Konsep" }],
  ["teori", { en: "How does it actually work?", id: "Sebenarnya, bagaimana cara kerjanya?" }],
  ["contoh-nyata", { en: "What does this look like in a real application?", id: "Contohnya di aplikasi frontend seperti apa?" }],
  ["contoh-kode", { en: "Can we see it in code?", id: "Bisa lihat contoh kodenya?" }],
  ["perbandingan", { en: "How do the approaches differ?", id: "Apa perbedaan setiap pendekatan?" }],
  ["kapan-digunakan", { en: "When should you use it?", id: "Kapan sebaiknya digunakan?" }],
  ["kesalahan-umum", { en: "What mistakes should you avoid?", id: "Kesalahan apa yang perlu dihindari?" }],
  ["perspektif-senior", { en: "What should a team consider over time?", id: "Apa yang perlu dipikirkan untuk jangka panjang?" }],
  ["ringkasan", { en: "What should you remember?", id: "Apa yang perlu diingat?" }],
  ["referensi", { en: "Where can you learn more?", id: "Mau belajar lebih lanjut dari mana?" }]
] as const;

function CodeBlock({ code }: { code: KnowledgeCode }) {
  const { locale, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code.value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return <figure className="learning-code">
    <figcaption><span>{t(code.label)}</span><span>{code.language}</span><button type="button" onClick={copy} aria-label={locale === "id" ? "Salin kode" : "Copy code"}>{copied ? <Check className="size-3.5" /> : <Clipboard className="size-3.5" />}{copied ? (locale === "id" ? "Tersalin" : "Copied") : (locale === "id" ? "Salin" : "Copy")}</button></figcaption>
    <pre><code>{code.value}</code></pre>
  </figure>;
}

function Paragraphs({ values }: { values: KnowledgeEntry["definition"] }) {
  const { t } = useLanguage();
  return <>{values.map((value, index) => <p key={index}>{t(value)}</p>)}</>;
}

function normalizeSearchText(value: string) {
  return value.trim().replace(/\s+/g, " ").toLocaleLowerCase();
}

function getSearchText(entry: KnowledgeEntry) {
  const localized = (values: KnowledgeEntry["definition"]) =>
    values.flatMap((value) => [value.en, value.id]);

  const area = getKnowledgeAreaForArticle(entry.slug);

  return [
    entry.term,
    entry.category.en,
    entry.category.id,
    entry.title.en,
    entry.title.id,
    entry.summary.en,
    entry.summary.id,
    entry.question.en,
    entry.question.id,
    area?.label.en ?? "",
    area?.label.id ?? "",
    ...entry.keywords,
    ...localized(entry.definition),
    ...localized(entry.why),
    ...localized(entry.theory),
    ...localized(entry.analogy),
    ...localized(entry.realExample),
    ...localized(entry.keyPoints)
  ].join(" ");
}

function getKnowledgeAreaEntries(areaKey: string) {
  const area = knowledgeAreas.find((item) => item.key === areaKey);
  if (!area) return [];
  return area.articleSlugs
    .map((slug) => frontendKnowledge.find((entry) => entry.slug === slug))
    .filter((entry): entry is KnowledgeEntry => Boolean(entry));
}

const knowledgeCategories = [...new Map(frontendKnowledge.map((entry) => [entry.category.en, entry.category])).values()];

// Retained as a reusable navigation pattern for future documentation sections.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function KnowledgeNavigation({
  activeArea = "all",
  currentSlug,
  onSelectArea,
  compact = false
}: {
  activeArea?: string;
  currentSlug?: string;
  onSelectArea?: (area: string) => void;
  compact?: boolean;
}) {
  const { locale, t } = useLanguage();
  const currentArea = currentSlug ? getKnowledgeAreaForArticle(currentSlug)?.key : undefined;
  const [expandedAreas, setExpandedAreas] = useState<Set<string>>(() => new Set(currentArea ? [currentArea] : activeArea === "all" ? [] : [activeArea]));
  function toggleArea(areaKey: string) {
    setExpandedAreas((current) => { const next = new Set(current); if (next.has(areaKey)) next.delete(areaKey); else next.add(areaKey); return next; });
    onSelectArea?.(areaKey);
  }
  const navigation = <nav aria-label={locale === "id" ? "Area pembelajaran" : "Learning areas"}>
    <Link
      href="/knowledge"
      className="knowledge-all-articles"
      data-active={!currentSlug && activeArea === "all"}
      aria-current={!currentSlug && activeArea === "all" ? "page" : undefined}
      onClick={(event) => {
        if (!onSelectArea) return;
        event.preventDefault();
        onSelectArea("all");
      }}
    >
      <span>{locale === "id" ? "Semua Artikel" : "All Articles"}</span>
      <span>{frontendKnowledge.length}</span>
    </Link>
    <ul className="mt-2 space-y-1">
      {knowledgeAreas.map((area) => {
        const areaEntries = getKnowledgeAreaEntries(area.key);
        const expanded = expandedAreas.has(area.key);
        const selected = activeArea === area.key || currentArea === area.key;
        return <li key={area.key}><button type="button" className="knowledge-area-disclosure" data-active={selected} aria-expanded={expanded} onClick={() => toggleArea(area.key)}><ChevronDown className="knowledge-area-chevron" aria-hidden="true" /><span>{t(area.label)}</span><span className="knowledge-area-count">{areaEntries.length}</span></button><div className="knowledge-submenu-wrap" data-expanded={expanded}><ul className="knowledge-article-submenu">{areaEntries.map((entry) => <li key={entry.slug}><Link href={`/knowledge/${entry.slug}`} className="knowledge-article-link" data-active={currentSlug === entry.slug} aria-current={currentSlug === entry.slug ? "page" : undefined}>{t(entry.title)}</Link></li>)}</ul></div></li>;
      })}
    </ul>
  </nav>;

  if (compact) {
    return <details className="knowledge-mobile-navigation surface-card lg:hidden">
      <summary>{locale === "id" ? "Jelajahi area pembelajaran" : "Browse learning areas"}</summary>
      <div className="mt-3 border-t border-(--line) pt-3">{navigation}</div>
    </details>;
  }

  return <div className="hidden lg:block">{navigation}</div>;
}

function matchesSearch(entry: KnowledgeEntry, normalizedQuery: string) {
  return !normalizedQuery || normalizeSearchText(getSearchText(entry)).includes(normalizedQuery);
}

function TableOfContents({ compact = false }: { compact?: boolean }) {
  const { locale, t } = useLanguage();
  const links = <ol className={compact ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-4 space-y-3"}>
    {SECTION_IDS.map(([id, label]) => <li key={id}><a className="text-xs leading-snug text-(--muted) hover:text-(--accent)" href={`#${id}`}>{t(label)}</a></li>)}
  </ol>;

  if (compact) {
    return <details className="surface-card mt-6 p-4 lg:hidden"><summary className="cursor-pointer text-sm font-semibold">{locale === "id" ? "Daftar isi artikel" : "Article contents"}</summary>{links}</details>;
  }

  return <nav aria-label={locale === "id" ? "Daftar isi" : "Table of contents"} className="sticky top-24 border-l border-(--line) pl-5"><p className="eyebrow">{locale === "id" ? "Di halaman ini" : "On this page"}</p>{links}</nav>;
}

export function KnowledgeHome() {
  const { locale, t } = useLanguage();
  const router = useRouter();
  const searchId = useId();
  const suggestionListId = `${searchId}-suggestions`;
  const searchAreaRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const normalizedQuery = useMemo(() => normalizeSearchText(query), [query]);
  const categoryEntries = useMemo(() => activeCategory === "all"
    ? frontendKnowledge
    : frontendKnowledge.filter((entry) => entry.category.en === activeCategory), [activeCategory]);
  const entries = useMemo(() => {
    return categoryEntries.filter((entry) => matchesSearch(entry, normalizedQuery));
  }, [categoryEntries, normalizedQuery]);
  const suggestions = useMemo(() => {
    return (normalizedQuery ? entries : frontendKnowledge).slice(0, 6);
  }, [entries, normalizedQuery]);
  const activeCategoryLabel = activeCategory === "all"
    ? (locale === "id" ? "Semua Artikel" : "All Articles")
    : t(knowledgeCategories.find((category) => category.en === activeCategory) ?? { en: activeCategory, id: activeCategory });

  useEffect(() => {
    function closeSuggestions(event: PointerEvent) {
      if (!searchAreaRef.current?.contains(event.target as Node)) {
        setSuggestionsOpen(false);
        setActiveSuggestion(-1);
      }
    }

    document.addEventListener("pointerdown", closeSuggestions);
    return () => document.removeEventListener("pointerdown", closeSuggestions);
  }, []);

  function chooseCategory(category: string) {
    setActiveCategory(category);
    setSuggestionsOpen(Boolean(normalizedQuery));
    setActiveSuggestion(-1);
  }

  function clearSearch() {
    setQuery("");
    // Clearing the text must not reset the selected category/filter.
    setSuggestionsOpen(true);
    setActiveSuggestion(-1);
  }

  function openArticle(entry: KnowledgeEntry) {
    setSuggestionsOpen(false);
    router.push(`/knowledge/${entry.slug}`);
  }

  function handleSearchKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      clearSearch();
      return;
    }

    if (!suggestions.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion((current) => (current + 1) % suggestions.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSuggestionsOpen(true);
      setActiveSuggestion((current) => (current <= 0 ? suggestions.length - 1 : current - 1));
    } else if (event.key === "Enter" && suggestionsOpen && activeSuggestion >= 0) {
      event.preventDefault();
      openArticle(suggestions[activeSuggestion]);
    }
  }

  return <main id="main" className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 md:py-20">
    <header className="border-b border-(--line) pb-12">
      <p className="eyebrow text-(--accent)">{locale === "id" ? "Pengetahuan Frontend Engineering" : "Frontend Engineering Knowledge Base"}</p>
      <div className="mt-5 max-w-4xl">
        <h1 className="display text-4xl text-balance sm:text-5xl md:text-6xl">{locale === "id" ? "Pahami ekosistem frontend berdasarkan kebutuhan." : "Understand the frontend ecosystem as you need it."}</h1>
        <p className="lede mt-6 max-w-3xl">{locale === "id" ? "Kumpulan materi untuk memahami istilah, teknologi, perbandingan, dan keputusan arsitektur frontend. Setiap artikel membahas makna praktis, cara kerja, trade-off, dan dampak pemeliharaan tanpa memaksa urutan belajar tertentu." : "A knowledge base for exploring terms, technologies, comparisons, and architecture decisions. Each article moves from practical meaning to technical mechanics, trade-offs, and maintenance impact—without a required reading order."}</p>
      </div>
    </header>

    <section className="py-10 md:py-14" aria-labelledby="terms-title">
        <div ref={searchAreaRef} className="knowledge-search-sticky relative z-20">
          <label className="sr-only" htmlFor={searchId}>{locale === "id" ? "Cari artikel" : "Search articles"}</label>
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-(--muted)" />
          <input
            id={searchId}
            className="knowledge-search pr-14"
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSuggestionsOpen(true);
              setActiveSuggestion(-1);
            }}
            onFocus={() => setSuggestionsOpen(true)}
            onKeyDown={handleSearchKeyDown}
            placeholder={locale === "id" ? "Cari judul, istilah, atau kategori…" : "Search titles, terms, or categories…"}
            role="combobox"
            aria-label={locale === "id" ? "Cari artikel frontend" : "Search frontend articles"}
            aria-autocomplete="list"
            aria-controls={suggestionListId}
            aria-expanded={suggestionsOpen && suggestions.length > 0}
            aria-activedescendant={activeSuggestion >= 0 ? `${suggestionListId}-${activeSuggestion}` : undefined}
          />
          {query ? <button type="button" className="knowledge-search-clear" onClick={clearSearch} aria-label={locale === "id" ? "Hapus pencarian" : "Clear search"}><X className="size-4" aria-hidden="true" /></button> : null}
          {suggestionsOpen && suggestions.length ? <div id={suggestionListId} role="listbox" aria-label={locale === "id" ? "Saran artikel" : "Article suggestions"} className="knowledge-suggestions z-50">
            {suggestions.map((entry, index) => <button id={`${suggestionListId}-${index}`} key={entry.slug} type="button" role="option" aria-selected={activeSuggestion === index} className="knowledge-suggestion" data-active={activeSuggestion === index} onMouseEnter={() => setActiveSuggestion(index)} onClick={() => openArticle(entry)}><span className="font-semibold text-(--ink)">{t(entry.title)}</span><span className="mt-1 text-xs text-(--muted)">{t(entry.category)}</span></button>)}
          </div> : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={locale === "id" ? "Filter kategori" : "Category filters"}>
          <button type="button" className="chip" data-active={activeCategory === "all"} aria-pressed={activeCategory === "all"} onClick={() => chooseCategory("all")}>{locale === "id" ? "Semua" : "All"}</button>
          {knowledgeCategories.map((category) => <button key={category.en} type="button" className="chip" data-active={activeCategory === category.en} aria-pressed={activeCategory === category.en} onClick={() => chooseCategory(category.en)}>{t(category)}</button>)}
        </div>

        <div className="mb-7 mt-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{normalizedQuery ? (locale === "id" ? "Hasil pencarian" : "Search results") : (locale === "id" ? "Referensi terkurasi" : "Curated references")}</p>
            <h2 id="terms-title" className="display mt-3 text-3xl">{activeCategoryLabel}</h2>
          </div>
          <p className="text-sm font-medium text-(--muted)" aria-live="polite">{locale === "id" ? `${entries.length} artikel ditemukan` : `${entries.length} ${entries.length === 1 ? "article" : "articles"} found`}</p>
        </div>

        {entries.length ? <div className="grid gap-4 md:grid-cols-2">{entries.map((entry) => <article key={entry.slug} className="surface-card card-hover flex flex-col p-5 sm:p-6"><div className="flex items-center justify-between gap-3"><span className="chip">{t(entry.category)}</span><span className="inline-flex items-center gap-1.5 text-xs text-(--muted)"><Clock className="size-3.5" />{t(entry.readingTime)}</span></div><h3 className="mt-5 text-2xl font-semibold">{t(entry.title)}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-(--ink-soft)">{t(entry.summary)}</p><div className="mt-5 border-t border-(--line) pt-4"><p className="eyebrow">{locale === "id" ? "Pertanyaan utama" : "Core question"}</p><p className="mt-2 text-sm font-medium">{t(entry.question)}</p></div><Link href={`/knowledge/${entry.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--accent)">{locale === "id" ? "Baca artikel" : "Read article"}<ArrowRight className="size-4" /></Link></article>)}</div> : <div className="surface-card px-6 py-10 text-center" role="status"><Search className="mx-auto size-6 text-(--muted)" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold">{locale === "id" ? "Artikel tidak ditemukan" : "No articles found"}</h3><p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-(--muted)">{locale === "id" ? "Periksa ejaan, coba istilah yang lebih umum, atau hapus pencarian untuk melihat kembali artikel dalam kategori ini." : "Check the spelling, try a broader term, or clear the search to see this category's articles again."}</p>{query ? <button type="button" className="btn btn-outline mt-5" onClick={clearSearch}>{locale === "id" ? "Hapus pencarian" : "Clear search"}</button> : null}</div>}
    </section>
  </main>;
}

export function KnowledgeArticle({ entry }: { entry: KnowledgeEntry }) {
  const { locale, t } = useLanguage();
  const related = entry.related.map((slug) => frontendKnowledge.find((item) => item.slug === slug)).filter((item): item is KnowledgeEntry => Boolean(item));
  const sectionLabel = (id: string) => t(SECTION_IDS.find(([sectionId]) => sectionId === id)![1]);

  return <main id="main" className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:py-14">
    <nav aria-label={locale === "id" ? "Breadcrumb Pengetahuan" : "Knowledge breadcrumb"} className="knowledge-article-breadcrumb flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-(--muted)"><Link href="/knowledge" className="inline-flex shrink-0 items-center gap-1.5 hover:text-(--ink)"><ArrowLeft className="size-3.5" />{locale === "id" ? "Pengetahuan Frontend Engineering" : "Frontend Engineering Knowledge Base"}</Link><span aria-hidden="true" className="shrink-0">/</span><span aria-current="page" className="min-w-0 truncate font-medium text-(--ink)">{entry.term}</span></nav>
    <div className="mt-8 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-10">
      <article className="min-w-0">
        <header className="border-b border-(--line) pb-9"><div className="flex flex-wrap items-center gap-3"><span className="chip">{t(entry.category)}</span><span className="inline-flex items-center gap-1.5 text-xs text-(--muted)"><Clock className="size-3.5" />{t(entry.readingTime)}</span></div><h1 className="display mt-5 text-4xl text-balance sm:text-5xl">{t(entry.title)}</h1><p className="lede mt-5">{t(entry.summary)}</p><TableOfContents compact /></header>

        <div className="learning-prose">
          <section id="pengertian" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("pengertian")}</h2><Paragraphs values={entry.definition} /></section>
          <section id="alasan" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("alasan")}</h2><Paragraphs values={entry.why} /></section>
          <section id="analogi" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("analogi")}</h2><Paragraphs values={entry.analogy} /><div className="mt-7 border-l-2 border-(--accent) pl-5"><section id="analogy-conclusion" className="scroll-mt-24"><h3 className="text-lg font-semibold">{sectionLabel("analogy-conclusion")}</h3><div className="mt-3"><Paragraphs values={entry.analogyConclusion ?? []} /></div></section><section id="analogy-mapping" className="mt-7 scroll-mt-24"><h3 className="text-lg font-semibold">{sectionLabel("analogy-mapping")}</h3><div className="mt-3"><Paragraphs values={entry.analogyMapping ?? []} /></div><aside className="learning-callout note mt-4"><Sparkles className="mt-0.5 size-4 shrink-0" /><p>{locale === "id" ? "Pemetaan ini membantu menghubungkan intuisi sehari-hari dengan mekanisme teknis yang dijelaskan di bagian Teori." : "This mapping connects the everyday intuition to the technical mechanism explained in Theory."}</p></aside></section></div></section>
          <section id="teori" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("teori")}</h2><Paragraphs values={entry.theory} /></section>
          <section id="contoh-nyata" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("contoh-nyata")}</h2><Paragraphs values={entry.realExample} /></section>
          <section id="contoh-kode" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("contoh-kode")}</h2>{entry.code ? <><CodeBlock code={entry.code} />{entry.codeExplanation ? <Paragraphs values={entry.codeExplanation} /> : null}</> : <p>{locale === "id" ? "Konsep ini tidak memerlukan contoh kode khusus." : "This concept does not require a dedicated code example."}</p>}</section>
          <section id="perbandingan" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("perbandingan")}</h2><div className="learning-table-wrap"><table><thead><tr>{entry.comparison.headers.map((header,index)=><th key={index}>{t(header)}</th>)}</tr></thead><tbody>{entry.comparison.rows.map((row,index)=><tr key={index}>{row.map((cell,cellIndex)=><td key={cellIndex}>{t(cell)}</td>)}</tr>)}</tbody></table></div></section>
          <section id="kapan-digunakan" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("kapan-digunakan")}</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="surface-card p-5"><h3 className="font-semibold text-green-700 dark:text-green-400">{locale === "id" ? "Cocok ketika" : "Good fit"}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--ink-soft)">{entry.whenToUse.good.map((item,index)=><li key={index}>{t(item)}</li>)}</ul></div><div className="surface-card p-5"><h3 className="font-semibold text-(--accent)">{locale === "id" ? "Kurang cocok ketika" : "Poor fit"}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--ink-soft)">{entry.whenToUse.poor.map((item,index)=><li key={index}>{t(item)}</li>)}</ul></div></div></section>
          <section id="kesalahan-umum" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("kesalahan-umum")}</h2><ul>{entry.mistakes.map((item,index)=><li key={index}>{t(item)}</li>)}</ul></section>
          <section id="perspektif-senior" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("perspektif-senior")}</h2><Paragraphs values={entry.seniorPerspective} /></section>
          <section id="ringkasan" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("ringkasan")}</h2><ul>{entry.keyPoints.map((item,index)=><li key={index}>{t(item)}</li>)}</ul></section>
          <section id="referensi" className="learning-prose-section scroll-mt-24"><h2>{sectionLabel("referensi")}</h2><ul>{entry.references.map((reference)=><li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer noopener">{reference.label}<ExternalLink className="ml-1 inline size-3.5" /></a></li>)}</ul></section>
        </div>

        <section className="mt-12 border-t border-(--line) pt-9" aria-labelledby="practice-title"><p className="eyebrow">{locale === "id" ? "Pertanyaan refleksi" : "Reflection questions"}</p><h2 id="practice-title" className="display mt-3 text-2xl">{locale === "id" ? "Gunakan untuk meninjau keputusan" : "Use these to review a decision"}</h2><ol className="mt-5 space-y-3">{entry.practiceQuestions.map((question,index)=><li key={index} className="surface-card flex gap-3 p-4 text-sm leading-relaxed"><span className="font-mono text-(--accent)" aria-hidden="true">{String(index+1).padStart(2,"0")}</span><span>{t(question)}</span></li>)}</ol></section>

        <section className="mt-10" aria-labelledby="related-title"><h2 id="related-title" className="text-sm font-semibold">{locale === "id" ? "Konsep terkait" : "Related concepts"}</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{related.map((item)=><Link key={item.slug} href={`/knowledge/${item.slug}`} className="surface-card flex items-center justify-between gap-4 p-4 hover:border-(--line-strong)"><div><strong className="text-sm">{item.term}</strong><p className="mt-1 text-xs text-(--muted)">{t(item.summary)}</p></div><ArrowRight className="size-4 shrink-0 text-(--accent)" /></Link>)}</div></section>
      </article>

      <aside className="hidden lg:block"><TableOfContents /></aside>
    </div>
  </main>;
}
