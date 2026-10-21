import type { KnowledgeEntry } from "@/data/frontend-knowledge";

export const designSystemsKnowledge: KnowledgeEntry = {
  slug: "design-systems-frontend",
  term: "Design Systems",
  category: { en: "UI Engineering", id: "UI Engineering" },
  title: { en: "Design Systems in Frontend Development", id: "Design System dalam Pengembangan Frontend" },
  summary: {
    en: "How shared design decisions, reusable components, documentation, and governance help teams build consistent interfaces without making every screen identical.",
    id: "Bagaimana keputusan desain bersama, komponen reusable, dokumentasi, dan aturan penggunaan membantu tim membuat UI yang konsisten tanpa membuat semua layar terlihat sama."
  },
  readingTime: { en: "15 min", id: "15 menit" },
  keywords: ["design system", "design tokens", "component library", "ui kit", "accessibility", "theming", "frontend"],
  question: {
    en: "How can a team build consistent interfaces without rebuilding every decision?",
    id: "Bagaimana tim membuat UI yang konsisten tanpa mengulang semua keputusan dari awal?"
  },
  definition: [
    {
      en: "A design system is a shared collection of design decisions, reusable assets, components, patterns, documentation, and working agreements. It gives designers and engineers a common language for building a product across many screens and teams.",
      id: "Design system adalah kumpulan keputusan desain, aset, komponen, pola, dokumentasi, dan kesepakatan kerja yang dipakai bersama. Dengan sistem ini, designer dan engineer punya bahasa yang sama saat membuat produk di banyak layar dan tim."
    },
    {
      en: "A design system is broader than a component library. Components are one implementation tool; the system also explains why and when to use them, which visual values are shared, how interactions behave, and who maintains those decisions.",
      id: "Design system lebih luas daripada component library. Komponen hanyalah salah satu alat implementasinya. Sistemnya juga menjelaskan alasan dan waktu penggunaan, nilai visual yang dipakai bersama, perilaku interaksi, dan siapa yang merawat keputusan tersebut."
    }
  ],
  why: [
    {
      en: "Without shared rules, teams repeatedly choose slightly different colors, spacing, typography, focus behavior, and button states. The differences seem small in isolation but become expensive when a brand changes, accessibility needs improve, or users encounter inconsistent behavior across the product.",
      id: "Tanpa aturan bersama, setiap tim bisa memilih warna, jarak, tipografi, focus state, dan perilaku tombol yang sedikit berbeda. Awalnya terlihat sepele, tetapi akan mahal ketika brand berubah, standar aksesibilitas ditingkatkan, atau pengguna menemukan perilaku yang tidak konsisten di berbagai halaman."
    },
    {
      en: "A useful system moves repeated decisions into maintained foundations. Product teams can spend more time solving the user's problem while still having clear ways to extend the system when a real need appears.",
      id: "Design system yang berguna memindahkan keputusan berulang ke fondasi yang dirawat bersama. Tim produk bisa lebih fokus menyelesaikan masalah pengguna, tetapi tetap memiliki cara yang jelas untuk memperluas sistem ketika ada kebutuhan nyata."
    }
  ],
  analogy: [
    {
      en: "Imagine several teams building homes in one neighborhood. They use standard door sizes, electrical fittings, safety rules, and measurements. Each home can still have a different layout, color, and purpose, but builders do not redesign a door hinge or decide electrical safety from scratch for every room. When the neighborhood updates a safety rule, teams know which shared parts need attention. Builders may still create a special part when a home truly needs one, but they document it before other teams copy it.",
      id: "Bayangkan beberapa tim membangun rumah di satu kawasan. Mereka memakai ukuran pintu, sambungan listrik, aturan keselamatan, dan satuan ukur yang sama. Setiap rumah tetap bisa memiliki denah, warna, dan fungsi yang berbeda. Namun, pekerja tidak perlu merancang ulang engsel pintu atau menentukan aturan listrik dari nol untuk setiap ruangan. Ketika aturan keselamatan diperbarui, tim tahu bagian bersama mana yang harus diperiksa. Jika satu rumah benar-benar membutuhkan bagian khusus, tim boleh membuatnya lalu mendokumentasikannya sebelum dipakai tim lain."
    }
  ],
  analogyConclusion: [
    {
      en: "Shared standards remove repeated decisions, while each home still adapts to the people who live there. Consistency comes from agreed foundations, not from making every result identical.",
      id: "Standar bersama mengurangi keputusan yang harus diulang. Setiap rumah tetap bisa menyesuaikan kebutuhan penghuninya. Konsisten bukan berarti semua hasil harus sama, tetapi fondasinya mengikuti aturan yang sudah disepakati."
    }
  ],
  analogyMapping: [
    {
      en: "Measurements and shared material specifications represent design tokens. Reusable doors and fittings represent components. Safety and placement rules represent usage guidelines and interaction patterns. The builders' reference manual represents documentation. A real design system also needs ownership and feedback; unlike physical construction, UI components can be updated and distributed through code.",
      id: "Ukuran dan spesifikasi bahan mewakili design tokens. Pintu dan sambungan yang dapat dipakai ulang mewakili komponen. Aturan keselamatan dan pemasangan mewakili usage guideline serta interaction pattern. Buku panduan pekerja mewakili dokumentasi. Design system nyata juga membutuhkan ownership dan feedback; berbeda dari bangunan fisik, komponen UI dapat diperbarui lalu dibagikan melalui kode."
    }
  ],
  theory: [
    {
      en: "Design tokens name shared decisions such as color, spacing, typography, radius, elevation, and motion. A component library turns selected decisions into reusable UI behavior. Patterns explain how components work together for recurring tasks. Documentation and guidelines explain intent, accessibility, content, variants, and constraints. Governance defines how changes are proposed, reviewed, released, and adopted.",
      id: "Design tokens memberi nama pada keputusan bersama seperti warna, jarak, tipografi, radius, elevation, dan motion. Component library menerapkan sebagian keputusan itu menjadi perilaku UI yang reusable. Pattern menjelaskan cara beberapa komponen dipakai bersama untuk kebutuhan yang sering muncul. Dokumentasi dan guideline menjelaskan tujuan, aksesibilitas, isi, variant, dan batas penggunaan. Governance mengatur cara perubahan diajukan, ditinjau, dirilis, dan dipakai oleh tim."
    },
    {
      en: "A component library is a collection of implemented reusable components. A UI kit commonly provides ready-made visual assets or components for design and prototyping. A design system may include both, but also includes principles, patterns, documentation, and maintenance practices. Teams use these terms differently, so the actual scope matters more than the label.",
      id: "Component library adalah kumpulan komponen reusable yang sudah diimplementasikan. UI kit biasanya menyediakan aset visual atau komponen siap pakai untuk desain dan prototyping. Design system dapat mencakup keduanya, ditambah prinsip, pattern, dokumentasi, dan cara pemeliharaannya. Setiap organisasi bisa memakai istilah ini secara berbeda, jadi periksa cakupan sebenarnya, bukan hanya namanya."
    },
    {
      en: "Consistency and flexibility are not opposites. Tokens establish shared choices, while component APIs expose a small number of meaningful variants and states. Accessibility belongs inside those APIs: keyboard behavior, focus visibility, disabled semantics, loading feedback, contrast, and screen-reader labels should be designed and tested with the component.",
      id: "Konsistensi dan fleksibilitas tidak saling bertentangan. Token menyediakan pilihan bersama, sedangkan API komponen menawarkan sedikit variant dan state yang memang bermakna. Aksesibilitas harus menjadi bagian dari API tersebut: keyboard behavior, focus yang terlihat, makna disabled, feedback loading, kontras, dan label screen reader dirancang serta dites bersama komponennya."
    }
  ],
  realExample: [
    {
      en: "A product has primary and secondary actions in forms, dialogs, and cards. Instead of copying colors and padding into every screen, the team defines semantic tokens and one Button component. A Card uses the same spacing and surface tokens. Dark mode changes token values rather than adding conditions to every component.",
      id: "Sebuah produk memiliki action utama dan sekunder di form, dialog, dan card. Daripada menyalin warna serta padding ke setiap layar, tim membuat semantic token dan satu komponen Button. Card memakai spacing dan surface token yang sama. Dark mode cukup mengubah nilai token, bukan menambah kondisi di setiap komponen."
    },
    {
      en: "This is a conceptual example. Work related to ADS or Al Maarif Jambi Plus can provide relevant professional context, but this article does not claim specific component counts, adoption results, governance processes, or implementation details for that project.",
      id: "Ini adalah contoh konseptual. Pengalaman terkait ADS atau Al Maarif Jambi Plus dapat menjadi konteks profesional yang relevan, tetapi artikel ini tidak mengklaim jumlah komponen, hasil adopsi, proses governance, atau detail implementasi tertentu dari project tersebut."
    }
  ],
  code: {
    label: { en: "Shared tokens with reusable Button and Card components", id: "Token bersama untuk komponen Button dan Card" },
    language: "tsx",
    value: `const tokens = {
  color: {
    action: "#c85f3f",
    actionText: "#ffffff",
    surface: "#ffffff",
  },
  space: { sm: "0.5rem", md: "1rem" },
  radius: { md: "0.75rem" },
} as const;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  loading?: boolean;
};

function Button({ variant = "primary", loading, children, ...props }: ButtonProps) {
  const background = variant === "primary" ? tokens.color.action : "transparent";
  return (
    <button
      {...props}
      aria-busy={loading || undefined}
      disabled={loading || props.disabled}
      style={{ background, padding: tokens.space.sm, borderRadius: tokens.radius.md }}
    >
      {loading ? "Saving…" : children}
    </button>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ background: tokens.color.surface, padding: tokens.space.md }}>
      {children}
    </section>
  );
}`
  },
  codeExplanation: [
    {
      en: "Button and Card reuse named decisions instead of repeating raw values. Button exposes two meaningful variants and a loading state, including disabled and aria-busy behavior. A production system would usually expose tokens through CSS variables or generated platform files and would test focus, contrast, keyboard behavior, and all supported states.",
      id: "Button dan Card memakai keputusan yang sudah diberi nama, bukan mengulang nilai mentah. Button menyediakan dua variant yang jelas serta loading state, termasuk perilaku disabled dan aria-busy. Dalam sistem production, token biasanya disediakan melalui CSS variable atau file yang dihasilkan untuk setiap platform. Focus, kontras, keyboard behavior, dan semua state yang didukung juga perlu dites."
    }
  ],
  comparison: {
    headers: [{ en: "Term", id: "Istilah" }, { en: "Primary purpose", id: "Tujuan utama" }, { en: "Typical contents", id: "Isi yang umum" }],
    rows: [
      [{ en: "Design system", id: "Design system" }, { en: "Coordinate product design and implementation", id: "Menyelaraskan desain dan implementasi produk" }, { en: "Principles, tokens, components, patterns, documentation, governance", id: "Prinsip, token, komponen, pattern, dokumentasi, governance" }],
      [{ en: "Component library", id: "Component library" }, { en: "Reuse implemented UI behavior", id: "Memakai ulang perilaku UI yang sudah dibuat" }, { en: "Components, APIs, states, tests, release artifacts", id: "Komponen, API, state, test, dan release artifact" }],
      [{ en: "UI kit", id: "UI kit" }, { en: "Speed up design and prototyping", id: "Mempercepat desain dan prototyping" }, { en: "Visual assets, styles, and design-tool components", id: "Aset visual, style, dan komponen di design tool" }]
    ]
  },
  whenToUse: {
    good: [
      { en: "Several teams repeatedly build related product surfaces and need shared behavior.", id: "Beberapa tim berulang kali membuat bagian produk yang saling terkait dan membutuhkan perilaku yang konsisten." },
      { en: "Inconsistency, accessibility regressions, and duplicated maintenance are recurring costs.", id: "Inkonsistensi, regresi aksesibilitas, dan maintenance yang berulang sudah menjadi masalah rutin." },
      { en: "The organization can assign ownership for documentation, releases, support, and adoption.", id: "Organisasi dapat menentukan ownership untuk dokumentasi, release, support, dan adopsi." }
    ],
    poor: [
      { en: "A short-lived or single-page project with little repeated UI.", id: "Project singkat atau satu halaman dengan sedikit UI yang berulang." },
      { en: "The product direction is still changing so quickly that abstractions would freeze guesses into APIs.", id: "Arah produk masih berubah sangat cepat sehingga abstraksi hanya akan mengunci tebakan menjadi API." },
      { en: "No team can maintain the system after the initial component build.", id: "Tidak ada tim yang dapat merawat sistem setelah komponen awal selesai dibuat." }
    ]
  },
  mistakes: [
    { en: "Abstracting a component after one example, before its stable similarities and differences are understood.", id: "Membuat abstraksi setelah satu contoh, sebelum persamaan dan perbedaannya benar-benar dipahami." },
    { en: "Adding many boolean props and variants until one component tries to serve unrelated jobs.", id: "Menambah terlalu banyak boolean prop dan variant sampai satu komponen mencoba menangani kebutuhan yang tidak berkaitan." },
    { en: "Using tokens in documentation while product code continues to hard-code equivalent values.", id: "Menulis token di dokumentasi sementara kode produk tetap memakai nilai hard-coded yang sama." },
    { en: "Publishing components without usage guidance, accessibility behavior, ownership, or migration notes.", id: "Menerbitkan komponen tanpa panduan penggunaan, perilaku aksesibilitas, ownership, atau catatan migrasi." },
    { en: "Assuming reuse automatically produces good UX; a reusable component can still encode the wrong behavior.", id: "Menganggap reuse otomatis menghasilkan UX yang baik; komponen reusable tetap bisa menyimpan perilaku yang salah." }
  ],
  seniorPerspective: [
    {
      en: "Treat a design system as a product serving product teams. Track repeated problems, adoption friction, accessibility defects, release compatibility, and contribution time. Build the smallest foundation that removes real duplication, then evolve it with evidence.",
      id: "Perlakukan design system sebagai produk yang melayani tim produk. Perhatikan masalah yang berulang, hambatan adopsi, defect aksesibilitas, kompatibilitas release, dan waktu kontribusi. Mulai dari fondasi terkecil yang menghilangkan duplikasi nyata, lalu kembangkan berdasarkan bukti."
    }
  ],
  keyPoints: [
    { en: "A design system combines shared decisions, implementation, guidance, and maintenance—not components alone.", id: "Design system menggabungkan keputusan bersama, implementasi, panduan, dan maintenance—bukan hanya komponen." },
    { en: "Tokens and components create consistency; focused variants preserve useful flexibility.", id: "Token dan komponen menjaga konsistensi; variant yang terarah tetap memberi fleksibilitas." },
    { en: "Accessibility, documentation, and governance are part of the system, not optional finishing work.", id: "Aksesibilitas, dokumentasi, dan governance adalah bagian dari sistem, bukan pekerjaan tambahan di akhir." }
  ],
  references: [
    { label: "W3C Design Tokens Community Group", href: "https://www.w3.org/community/design-tokens/" },
    { label: "Design Tokens Format Module", href: "https://www.designtokens.org/tr/drafts/format/" },
    { label: "WAI-ARIA Authoring Practices Guide", href: "https://www.w3.org/WAI/ARIA/apg/" },
    { label: "Material Design — Design Tokens", href: "https://m3.material.io/foundations/design-tokens/overview" }
  ],
  related: ["react-vs-vue", "feature-vs-layer-architecture", "context-vs-state-management"],
  practiceQuestions: [
    { en: "Which UI decisions are repeatedly copied today, and which of them are stable enough to name as tokens or components?", id: "Keputusan UI apa yang saat ini sering disalin, dan mana yang sudah cukup stabil untuk dijadikan token atau komponen?" },
    { en: "Who will document, test, release, and support a shared component after its first version?", id: "Siapa yang akan mendokumentasikan, mengetes, merilis, dan membantu pengguna komponen bersama setelah versi pertamanya selesai?" }
  ]
};
