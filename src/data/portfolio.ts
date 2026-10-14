/**
 * Single source of truth for all portfolio content.
 *
 * Every human-readable string is provided in English (`en`) and
 * Indonesian (`id`) so the language switch covers the whole interface.
 *
 * Employment/education dates reflect the verified CV information. Some
 * ranges are intentionally coarse (year-level) where only the start of a
 * period was confirmed. Project `period` values describe the context of the
 * work (employer / client / personal) rather than claiming exact dates, so
 * project timelines are never conflated with employment dates.
 */

export type Locale = "en" | "id";
export type Localized = { en: string; id: string };

export const YEAR = 2026;

export const LOCALES: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" }
];

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Fuad Rifqi Zamzami",
  monogram: "FR",
  title: {
    en: "Frontend Engineer",
    id: "Frontend Engineer"
  } satisfies Localized,
  focus: {
    en: "Vue · React · Nuxt · Next.js · JavaScript & TypeScript",
    id: "Vue · React · Nuxt · Next.js · JavaScript & TypeScript"
  } satisfies Localized,
  location: {
    en: "Jakarta Metropolitan Area · On site · Hybrid · Remote friendly",
    id: "Jakarta Metropolitan Area · Di tempat · Hybrid · Terbuka untuk remote"
  } satisfies Localized,
  availability: {
    en: "Open to Frontend Engineering roles",
    id: "Terbuka untuk posisi Frontend Engineer"
  } satisfies Localized,
  intro: {
    en: "I build maintainable, production-grade web and mobile interfaces with JavaScript and TypeScript. Over the last few years I have worked on large enterprise platforms, e-commerce storefronts, and cross-platform apps — with a strong emphasis on clean architecture, reliable API integration, and code that the next engineer can actually read.",
    id: "Saya membangun antarmuka web dan mobile yang rapi dan siap produksi dengan JavaScript dan TypeScript. Beberapa tahun terakhir saya mengerjakan platform enterprise berskala besar, storefront e-commerce, dan aplikasi lintas platform — dengan penekanan pada clean architecture, integrasi API yang andal, dan kode yang mudah dibaca engineer berikutnya."
  } satisfies Localized,
  introSecondary: {
    en: "I care about clear component boundaries, predictable state, accessible markup, and thoughtful collaboration through code reviews and task coordination.",
    id: "Saya peduli pada batas komponen yang jelas, state yang terprediksi, markup yang aksesibel, serta kolaborasi lewat code review dan koordinasi tugas."
  } satisfies Localized,
  email: "fuad.rifki98@gmail.com",
  linkedin: "https://www.linkedin.com/in/fuad-rifki",
  github: "https://github.com/fuadrifki"
};

/* ------------------------------------------------------------------ */
/* UI copy                                                             */
/* ------------------------------------------------------------------ */

export const ui = {
  skipToContent: { en: "Skip to content", id: "Lewati ke konten" },
  nav: {
    projects: { en: "Projects", id: "Proyek" },
    experience: { en: "Experience", id: "Pengalaman" },
    skills: { en: "Skills", id: "Keahlian" },
    education: { en: "Education", id: "Pendidikan" },
    speaking: { en: "Speaking", id: "Berbicara" },
    contact: { en: "Contact", id: "Kontak" }
  },
  theme: { en: "Theme", id: "Tema" },
  light: { en: "Light", id: "Terang" },
  dark: { en: "Dark", id: "Gelap" },
  language: { en: "Language", id: "Bahasa" },
  menu: { en: "Menu", id: "Menu" },
  closeMenu: { en: "Close menu", id: "Tutup menu" },
  ariaPrimary: { en: "Primary navigation", id: "Navigasi utama" },
  ariaMobile: { en: "Mobile navigation", id: "Navigasi seluler" },
  ariaFooter: { en: "Footer navigation", id: "Navigasi footer" },
  projectPreview: { en: "project preview", id: "pratinjau proyek" },
  logoAlt: { en: "logo", id: "logo" },
  getInTouch: { en: "Get in touch", id: "Hubungi saya" },
  viewWork: { en: "View selected work", id: "Lihat karya pilihan" },
  emailMe: { en: "Email me", id: "Kirim email" },
  basedIn: { en: "Based in", id: "Berlokasi di" },
  focusAreas: { en: "Focus areas", id: "Fokus" },
  selectedProjects: {
    eyebrow: { en: "Selected work", id: "Karya pilihan" },
    title: { en: "Projects I am proud of", id: "Proyek yang saya banggakan" },
    description: {
      en: "A mix of enterprise platforms and product work. The first three are the deepest, longest-running builds; the rest show the breadth of my frontend practice.",
      id: "Campuran platform enterprise dan produk. Tiga proyek pertama adalah pekerjaan terbesar dan terlama; sisanya memperlihatkan luasnya praktik frontend saya."
    }
  },
  moreProjects: { en: "More projects", id: "Proyek lainnya" },
  featured: { en: "Featured", id: "Unggulan" },
  experienceSection: {
    eyebrow: { en: "Experience", id: "Pengalaman" },
    title: { en: "Where I have worked", id: "Tempat saya bekerja" },
    description: {
      en: "Enterprise frontend work at Lion Parcel, product development at Refactory, and independent frontend projects.",
      id: "Pekerjaan frontend enterprise di Lion Parcel, pengembangan produk di Refactory, dan proyek frontend mandiri."
    }
  },
  keyProjects: { en: "Key contributions", id: "Kontribusi utama" },
  skillsSection: {
    eyebrow: { en: "Toolkit", id: "Perangkat" },
    title: { en: "Technical skills", id: "Keahlian teknis" },
    description: {
      en: "The languages, frameworks, and practices I reach for when shipping frontend work.",
      id: "Bahasa, framework, dan praktik yang saya gunakan saat mengerjakan frontend."
    }
  },
  educationSection: {
    eyebrow: { en: "Education", id: "Pendidikan" },
    title: { en: "Education", id: "Pendidikan" },
    description: {
      en: "Formal training in information technology in Yogyakarta, Indonesia.",
      id: "Pendidikan formal di bidang teknologi informasi di Yogyakarta, Indonesia."
    }
  },
  speakingSection: {
    eyebrow: { en: "Speaking", id: "Berbicara" },
    title: { en: "Talks & classes", id: "Talks & kelas" },
    description: {
      en: "Sharing frontend fundamentals with the wider developer community.",
      id: "Berbagi dasar-dasar frontend dengan komunitas developer."
    }
  },
  contactSection: {
    eyebrow: { en: "Contact", id: "Kontak" },
    title: {
      en: "Let's build something together",
      id: "Mari membangun sesuatu bersama"
    },
    description: {
      en: "I am open to frontend engineering and senior frontend roles, as well as focused freelance work. The fastest way to reach me is email.",
      id: "Saya terbuka untuk posisi frontend engineering dan senior frontend, serta pekerjaan freelance yang terfokus. Cara tercepat menghubungi saya adalah email."
    }
  },
  online: { en: "Online", id: "Daring" },
  watchRecording: { en: "Watch recording", id: "Tonton rekaman" },
  footerNote: {
    en: "Designed and built with Next.js, React, TypeScript, and Tailwind CSS.",
    id: "Dirancang dan dibangun dengan Next.js, React, TypeScript, dan Tailwind CSS."
  },
  rights: { en: "All rights reserved.", id: "Seluruh hak dilindungi." },
  backToTop: { en: "Back to top", id: "Kembali ke atas" }
} as const;

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "enterprise" | "ecommerce" | "personal";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  image: string;
  period: string;
  role: Localized;
  summary: Localized;
  description: Localized;
  stack: string[];
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, Localized> = {
  enterprise: { en: "Enterprise", id: "Enterprise" },
  ecommerce: { en: "E-commerce", id: "E-commerce" },
  personal: { en: "Personal", id: "Personal" }
};

export const projects: Project[] = [
  {
    slug: "genesis",
    name: "Genesis — Lion Parcel",
    category: "enterprise",
    image: "/images/projects/genesis.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "A large-scale logistics platform covering shipment operations, customer workflows, CRM, and internal administrative operations.",
      id: "Platform logistik skala besar yang mencakup operasional pengiriman, alur pelanggan, CRM, dan operasional administrasi internal."
    },
    description: {
      en: "Genesis is the operational core of Lion Parcel. I work across the platform rather than a single module — shipment operations, customer-facing workflows, CRM surfaces, and the administrative tooling that back-office teams rely on. The frontend is built with Vue 3 and TypeScript on clean-architecture boundaries, and my focus is keeping a large, long-lived codebase understandable: clear component boundaries, consistent data flow, and dependable integration with the platform's REST APIs.",
      id: "Genesis adalah inti operasional Lion Parcel. Saya mengerjakan platform secara menyeluruh, bukan satu modul saja — operasional pengiriman, alur pelanggan, permukaan CRM, dan tooling administrasi yang digunakan tim back-office. Frontend-nya dibangun dengan Vue 3 dan TypeScript di atas batas clean architecture, dan fokus saya adalah menjaga basis kode besar dan berumur panjang tetap mudah dipahami: batas komponen yang jelas, aliran data yang konsisten, dan integrasi REST API yang andal."
    },
    stack: ["Vue 3", "TypeScript", "Vuex", "Clean Architecture", "REST API"],
    featured: true
  },
  {
    slug: "pindad",
    name: "Pindad",
    category: "enterprise",
    image: "/images/projects/pindad.svg",
    period: "Refactory client project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An enterprise web application built for PT Pindad (Persero), Indonesia's state-owned defence and industrial manufacturer.",
      id: "Aplikasi web enterprise yang dibangun untuk PT Pindad (Persero), perusahaan pertahanan dan industri milik negara Indonesia."
    },
    description: {
      en: "Contributed frontend implementation for an internal enterprise system: translating requirements into structured pages and components, wiring the interface to backend services, and keeping the UI consistent across a broad set of operational screens.",
      id: "Berkontribusi pada implementasi frontend untuk sistem enterprise internal: menerjemahkan kebutuhan menjadi halaman dan komponen yang terstruktur, menghubungkan antarmuka ke layanan backend, dan menjaga konsistensi UI pada banyak layar operasional."
    },
    stack: ["Vue.js", "JavaScript", "REST API"],
    featured: true
  },
  {
    slug: "refactory-profile",
    name: "Refactory Company Profile",
    category: "enterprise",
    image: "/images/projects/refactory-profile.svg",
    period: "Refactory",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "The public company profile site for Refactory, a technology education and software company based in Yogyakarta.",
      id: "Situs company profile publik Refactory, perusahaan pendidikan teknologi dan perangkat lunak yang berbasis di Yogyakarta."
    },
    description: {
      en: "Built the marketing-facing web experience: a content-rich landing site with clear information architecture, responsive layouts, and a reusable component set that the team could extend as programmes and pages changed.",
      id: "Membangun pengalaman web untuk pemasaran: situs landing kaya konten dengan arsitektur informasi yang jelas, layout responsif, dan komponen yang dapat digunakan ulang sehingga tim bisa menambah program dan halaman seiring perubahan."
    },
    stack: ["Vue.js", "Nuxt.js", "REST API"],
    featured: true
  },
  {
    slug: "jersium",
    name: "Jersium",
    category: "ecommerce",
    image: "/images/projects/jersium.svg",
    period: "Freelance",
    role: {
      en: "Frontend Developer (Freelance)",
      id: "Frontend Developer (Freelance)"
    },
    summary: {
      en: "A Next.js e-commerce frontend where I owned the frontend implementation from design handoff to production.",
      id: "Frontend e-commerce berbasis Next.js yang saya kerjakan dari serah terima desain hingga produksi."
    },
    description: {
      en: "Contributed as the frontend developer on this Next.js e-commerce project, turning designs into high-quality, pixel-perfect interfaces that matched the required specifications. Focused on implementation quality, reusable components, and a consistent shopping experience across the site, including the API integration behind the storefront.",
      id: "Berkontribusi sebagai frontend developer pada proyek e-commerce Next.js ini, mengubah desain menjadi antarmuka berkualitas tinggi dan pixel-perfect sesuai spesifikasi yang diminta. Fokus pada kualitas implementasi, komponen yang dapat digunakan ulang, dan pengalaman belanja yang konsisten di seluruh situs, termasuk integrasi API di balik storefront."
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    slug: "lion-cms",
    name: "Lion Parcel CMS",
    category: "enterprise",
    image: "/images/projects/lion-cms.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "A content management system used by Lion Parcel teams to manage and publish website content.",
      id: "Sistem manajemen konten yang digunakan tim Lion Parcel untuk mengelola dan mempublikasikan konten situs."
    },
    description: {
      en: "Contributed frontend features to the Lion Parcel CMS, including interfaces for article and content management and the API integration behind them. Also helped break down article/CMS tasks within the team. Aspects such as SEO and overall product ownership sat with other team members.",
      id: "Berkontribusi pada fitur frontend Lion Parcel CMS, termasuk antarmuka untuk pengelolaan artikel dan konten serta integrasi API di baliknya. Turut membantu memecah tugas artikel/CMS di dalam tim. Hal seperti SEO dan kepemilikan produk secara keseluruhan berada pada anggota tim lain."
    },
    stack: ["Vue.js", "TypeScript", "Vuex", "REST API"]
  },
  {
    slug: "lion-parcel-website",
    name: "Lion Parcel Website",
    category: "enterprise",
    image: "/images/projects/lion-cms.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "The public Lion Parcel website — service information, rate tools, and customer-facing content.",
      id: "Situs publik Lion Parcel — informasi layanan, alat bantu tarif, dan konten untuk pelanggan."
    },
    description: {
      en: "Developed and maintained frontend features on the public Lion Parcel website, connecting the interface to backend APIs and supporting content updates. Worked as part of the team rather than owning the site or its SEO end to end.",
      id: "Mengembangkan dan memelihara fitur frontend pada situs publik Lion Parcel, menghubungkan antarmuka ke API backend, dan mendukung pembaruan konten. Bekerja sebagai bagian dari tim, bukan memiliki situs atau SEO-nya secara end to end."
    },
    stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API"]
  },
  {
    slug: "shopify-lion-parcel",
    name: "Shopify × Lion Parcel",
    category: "ecommerce",
    image: "/images/projects/shopify-lionparcel.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "Shopify-side frontend features for Lion Parcel shipping, focused on booking and address management.",
      id: "Fitur frontend sisi Shopify untuk pengiriman Lion Parcel, berfokus pada booking dan manajemen alamat."
    },
    description: {
      en: "Developed Shopify-side frontend features around shipping booking and address management for Lion Parcel. This was one part of a broader shipping integration delivered across several teams, not a solo end-to-end integration of the whole Lion Parcel logistics service.",
      id: "Mengembangkan fitur frontend sisi Shopify untuk booking pengiriman dan manajemen alamat Lion Parcel. Ini merupakan salah satu bagian dari integrasi pengiriman yang lebih luas yang dikerjakan beberapa tim, bukan integrasi end to end seluruh layanan logistik Lion Parcel secara mandiri."
    },
    stack: ["JavaScript", "React", "REST API"]
  },
  {
    slug: "sia-ut",
    name: "SIA UT",
    category: "enterprise",
    image: "/images/projects/sia-ut.svg",
    period: "Project work",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An academic information system for managing student records, courses, and academic administration.",
      id: "Sistem informasi akademik untuk mengelola data mahasiswa, mata kuliah, dan administrasi akademik."
    },
    description: {
      en: "Implemented data-heavy academic screens — tables, filters, and forms — with a focus on readability and clear feedback for administrative users.",
      id: "Mengimplementasikan layar akademik yang padat data — tabel, filter, dan form — dengan fokus pada keterbacaan dan umpan balik yang jelas untuk pengguna administrasi."
    },
    stack: ["Vue.js", "JavaScript", "REST API"]
  },
  {
    slug: "atenda",
    name: "Atenda",
    category: "enterprise",
    image: "/images/projects/atenda.svg",
    period: "Project work",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An attendance and workforce application for recording and reviewing daily staff attendance.",
      id: "Aplikasi absensi dan ketenagakerjaan untuk mencatat dan meninjau kehadiran staf harian."
    },
    description: {
      en: "Built the attendance interface: check-in experiences, attendance history, and reporting views wired to backend services.",
      id: "Membangun antarmuka absensi: pengalaman check-in, riwayat kehadiran, dan tampilan laporan yang terhubung ke layanan backend."
    },
    stack: ["Vue.js", "JavaScript", "REST API"]
  },
  {
    slug: "ayo-belajar",
    name: "Ayo Belajar",
    category: "enterprise",
    image: "/images/projects/ayo-belajar.svg",
    period: "Software house project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "A learning-management dashboard with class operations, live classes, quizzes, payments, and community features.",
      id: "Dasbor manajemen pembelajaran dengan operasional kelas, kelas langsung, kuis, pembayaran, dan fitur komunitas."
    },
    description: {
      en: "Built as part of a software-house team: an LMS dashboard covering class management, live classes, chapters and quizzes, instructor and student flows, earnings and withdrawals, payments, messages, and forums across multiple roles. The frontend follows clean-architecture boundaries (app / domain / data) with React 16 and TypeScript, integrated against mock and staged REST APIs.",
      id: "Dikerjakan sebagai bagian dari tim software house: dasbor LMS yang mencakup manajemen kelas, kelas langsung, bab dan kuis, alur instruktur dan siswa, pendapatan dan penarikan dana, pembayaran, pesan, dan forum untuk beberapa peran. Frontend memakai batas clean architecture (app / domain / data) dengan React 16 dan TypeScript, terintegrasi ke REST API mock dan staging."
    },
    stack: ["React 16", "TypeScript", "Redux", "Clean Architecture", "REST API"]
  },
  {
    slug: "pintoko",
    name: "Pintoko",
    category: "ecommerce",
    image: "/images/projects/pintoko.svg",
    period: "Project work",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An e-commerce frontend with a focus on product presentation and a straightforward purchase flow.",
      id: "Frontend e-commerce dengan fokus pada penyajian produk dan alur pembelian yang sederhana."
    },
    description: {
      en: "Built product browsing and detail experiences, connected the catalogue to the backend, and kept the interface consistent across screen sizes.",
      id: "Membangun pengalaman jelajah dan detail produk, menghubungkan katalog ke backend, dan menjaga konsistensi antarmuka di berbagai ukuran layar."
    },
    stack: ["Vue.js", "JavaScript", "REST API"]
  },
  {
    slug: "residence-management",
    name: "Residence Management",
    category: "personal",
    image: "/images/projects/residence-management.svg",
    period: "Community project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "A residential management web app covering resident records, dues, transactions, and financial reports.",
      id: "Aplikasi web manajemen hunian yang mencakup data warga, iuran, transaksi, dan laporan keuangan."
    },
    description: {
      en: "Built with Nuxt and TypeScript, using Drizzle as the ORM on a Neon PostgreSQL database: resident records, dues and categorized transaction tracking, financial reports, and a companion bot. Kept generic with no estate-specific naming.",
      id: "Dibangun dengan Nuxt dan TypeScript, menggunakan Drizzle sebagai ORM di atas basis data Neon PostgreSQL: data warga, pencatatan iuran dan transaksi berkategori, laporan keuangan, dan bot pendamping. Dibuat generik tanpa penamaan spesifik perumahan."
    },
    stack: ["Nuxt", "TypeScript", "Drizzle", "Neon PostgreSQL"]
  },
  {
    slug: "mobile-learning-app",
    name: "Mobile Learning App",
    category: "personal",
    image: "/images/projects/mobile-learning-app.svg",
    period: "Personal project",
    role: { en: "Mobile Frontend Developer", id: "Mobile Frontend Developer" },
    summary: {
      en: "A cross-platform learning app with structured chapters, exercises, tasks, and video lessons, backed by Firebase.",
      id: "Aplikasi pembelajaran lintas platform dengan bab, latihan, dan tugas terstruktur serta video materi, berbasis Firebase."
    },
    description: {
      en: "Built the mobile experience with React Native: authenticated flows (sign in / sign up), chapter-based study structure with exercises and tasks, progress reports, and video lessons, backed by Firebase Authentication and Firestore.",
      id: "Membangun pengalaman mobile dengan React Native: alur terautentikasi (masuk / daftar), struktur belajar berbasis bab dengan latihan dan tugas, laporan perkembangan, dan video materi, berbasis Firebase Authentication dan Firestore."
    },
    stack: ["React Native", "Firebase Auth", "Firestore", "React Navigation"]
  },
  {
    slug: "tetra-pulsa",
    name: "Tetra Pulsa",
    category: "ecommerce",
    image: "/images/projects/tetra-pulsa.svg",
    period: "Freelance",
    role: {
      en: "Mobile Frontend Developer (Freelance)",
      id: "Mobile Frontend Developer (Freelance)"
    },
    summary: {
      en: "A cross-platform mobile top-up app for Android and iOS, delivered end to end as the sole frontend contributor.",
      id: "Aplikasi pulsa lintas platform untuk Android dan iOS, dikerjakan menyeluruh dari awal sampai akhir sebagai satu-satunya kontributor frontend."
    },
    description: {
      en: "Sole frontend owner across 130+ commits: a React Native top-up app with clean-architecture boundaries (domain / services / containers), credential-based API integration, and native builds for both stores.",
      id: "Pemilik tunggal frontend dalam 130+ commit: aplikasi pulsa React Native dengan batas clean architecture (domain / services / containers), integrasi API berbasis kredensial, dan build native untuk kedua toko aplikasi."
    },
    stack: ["React Native", "TypeScript", "Clean Architecture", "REST API"]
  },
  {
    slug: "almaarif-jambi-web",
    name: "Al Maarif Jambi Web",
    category: "enterprise",
    image: "/images/projects/almaarif.svg",
    period: "Project work",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "A digital platform for an Islamic boarding school: admin operations on a monorepo with PostgreSQL behind it.",
      id: "Platform digital pondok pesantren: operasional admin dalam monorepo dengan PostgreSQL di belakangnya."
    },
    description: {
      en: "Contributed to a Turborepo/pnpm monorepo (Next.js 16 App Router, React 19, TypeScript, Tailwind v4) backed by Drizzle ORM on Neon PostgreSQL — admin screens, data flows, and environment-based configuration.",
      id: "Berkontribusi pada monorepo Turborepo/pnpm (Next.js 16 App Router, React 19, TypeScript, Tailwind v4) yang didukung Drizzle ORM di atas Neon PostgreSQL — layar admin, alur data, dan konfigurasi berbasis lingkungan."
    },
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Drizzle", "Neon PostgreSQL", "Turborepo"]
  },
  {
    slug: "pos-php-native",
    name: "Point of Sales (PHP Native)",
    category: "personal",
    image: "/images/projects/pos-php.svg",
    period: "Personal project",
    role: { en: "Fullstack Developer", id: "Fullstack Developer" },
    summary: {
      en: "A 2019 cashier POS built with native PHP MVC and MySQL — kept as an archive of the pre-JavaScript era.",
      id: "POS kasir 2019 berbasis PHP MVC native dan MySQL — disimpan sebagai arsip era pra-JavaScript."
    },
    description: {
      en: "A legacy point-of-sales system: custom PHP MVC (controllers / models / views), MySQL database, and a Gentelella admin template covering categories, products, customers, and sales. Kept as-is as proof of the journey from PHP into full-JS frontend work.",
      id: "Sistem point-of-sales lawas: PHP MVC custom (controller / model / view), basis data MySQL, dan template admin Gentelella yang mencakup kategori, produk, customer, dan penjualan. Disimpan apa adanya sebagai bukti perjalanan dari PHP ke frontend full-JS."
    },
    stack: ["PHP", "MySQL", "Bootstrap", "Gentelella"]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Experience = {
  company: string;
  logo: string;
  role: Localized;
  period: Localized;
  location: Localized;
  description: Localized;
  highlights: Localized[];
  keyProjects: string[];
};

export const experiences: Experience[] = [
  {
    company: "Lion Parcel",
    logo: "/images/logos/lion-parcel.png",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    period: {
      en: "April 2021 — Present",
      id: "April 2021 — Sekarang"
    },
    location: { en: "Jakarta, Indonesia", id: "Jakarta, Indonesia" },
    description: {
      en: "Frontend engineer on Lion Parcel's product team, working across the Genesis logistics platform and the company's public and internal web products.",
      id: "Frontend engineer di tim produk Lion Parcel, mengerjakan platform logistik Genesis serta produk web publik dan internal perusahaan."
    },
    highlights: [
      {
        en: "Build and maintain interfaces across Genesis, covering shipment operations, customer workflows, CRM, and administrative operations.",
        id: "Membangun dan memelihara antarmuka di Genesis, mencakup operasional pengiriman, alur pelanggan, CRM, dan operasional administrasi."
      },
      {
        en: "Developed frontend features on Lion Parcel CMS and the public website, including API integration, and helped break down article/CMS tasks with the team.",
        id: "Mengembangkan fitur frontend pada Lion Parcel CMS dan situs publik, termasuk integrasi API, serta membantu memecah tugas artikel/CMS bersama tim."
      },
      {
        en: "Built Shopify-side frontend features for shipping booking and address management as part of a cross-team integration.",
        id: "Membangun fitur frontend sisi Shopify untuk booking pengiriman dan manajemen alamat sebagai bagian dari integrasi lintas tim."
      },
      {
        en: "Collaborate through code reviews and coordinated task breakdowns within the frontend team.",
        id: "Berkolaborasi lewat code review dan pemecahan tugas yang terkoordinasi di dalam tim frontend."
      }
    ],
    keyProjects: [
      "Genesis",
      "Lion Parcel CMS",
      "Lion Parcel Website",
      "Shopify × Lion Parcel"
    ]
  },
  {
    company: "Refactory",
    logo: "/images/logos/refactory.png",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    period: {
      en: "October 2019 — April 2021",
      id: "Oktober 2019 — April 2021"
    },
    location: { en: "Yogyakarta, Indonesia", id: "Yogyakarta, Indonesia" },
    description: {
      en: "Frontend developer on client-facing software projects, translating requirements into responsive, maintainable web interfaces. This is where my professional career started.",
      id: "Frontend developer pada proyek perangkat lunak untuk klien, menerjemahkan kebutuhan menjadi antarmuka web yang responsif dan terpelihara. Di sinilah karier profesional saya dimulai."
    },
    highlights: [
      {
        en: "Delivered enterprise interfaces for clients including PT Pindad (Persero), connecting the UI to backend services.",
        id: "Mengerjakan antarmuka enterprise untuk klien seperti PT Pindad (Persero), menghubungkan UI ke layanan backend."
      },
      {
        en: "Built the Refactory company profile site with a reusable component set and clear information architecture.",
        id: "Membangun situs company profile Refactory dengan komponen yang dapat digunakan ulang dan arsitektur informasi yang jelas."
      },
      {
        en: "Worked closely with designers and backend developers to keep delivery aligned with requirements.",
        id: "Bekerja sama erat dengan desainer dan backend developer agar hasil sesuai kebutuhan."
      }
    ],
    keyProjects: ["Pindad", "Refactory Company Profile"]
  },
  {
    company: "Jersium",
    logo: "/images/logos/jersium.png",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    period: {
      en: "January 2025 — December 2025",
      id: "Januari 2025 — Desember 2025"
    },
    location: { en: "Poland (Remote)", id: "Polandia (Remote)" },
    description: {
      en: "Independent frontend work for e-commerce and product clients, delivered end to end from interface build to API integration.",
      id: "Pekerjaan frontend mandiri untuk klien e-commerce dan produk, dikerjakan end to end dari pembangunan antarmuka hingga integrasi API."
    },
    highlights: [
      {
        en: "Built the Jersium e-commerce frontend on Next.js, including product, cart, and checkout flows.",
        id: "Membangun frontend e-commerce Jersium dengan Next.js, mencakup alur produk, cart, dan checkout."
      },
      {
        en: "Owned delivery directly with clients, from scope through implementation.",
        id: "Menangani pengiriman langsung bersama klien, dari penentuan lingkup hingga implementasi."
      }
    ],
    keyProjects: ["Next.js"]
  }
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Languages", id: "Bahasa Pemrograman" },
    items: ["JavaScript", "TypeScript"]
  },
  {
    title: { en: "Frameworks & Libraries", id: "Framework & Library" },
    items: ["Vue.js", "Nuxt.js", "React", "Next.js"]
  },
  {
    title: { en: "Mobile", id: "Mobile" },
    items: ["React Native", "Expo"]
  },
  {
    title: { en: "State & Data", id: "State & Data" },
    items: ["Vuex", "REST API Integration", "Firebase Auth", "Firestore"]
  },
  {
    title: { en: "Styling & UI", id: "Styling & UI" },
    items: ["Tailwind CSS", "Responsive Design", "Accessible Markup"]
  },
  {
    title: { en: "Architecture & Practice", id: "Arsitektur & Praktik" },
    items: ["Clean Architecture", "Component Design", "Code Review", "Jest"]
  }
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type Education = {
  school: string;
  logo: string;
  degree: Localized;
  field: Localized;
  period: string;
  location: Localized;
  description: Localized;
};

export const education: Education[] = [
  {
    school: "Universitas Mercu Buana Yogyakarta",
    logo: "/images/logos/umb.png",
    degree: { en: "Bachelor's Degree (S1)", id: "Sarjana (S1)" },
    field: { en: "Information Technology", id: "Teknologi Informasi" },
    period: "March 2020 — May 2022",
    location: { en: "Yogyakarta, Indonesia", id: "Yogyakarta, Indonesia" },
    description: {
      en: "Studied information technology with a focus on software development, databases, and information systems.",
      id: "Menempuh studi teknologi informasi dengan fokus pada pengembangan perangkat lunak, basis data, dan sistem informasi."
    }
  },
  {
    school: "Politeknik Sawunggalih Aji",
    logo: "/images/logos/polsa.png",
    degree: { en: "Associate Degree (D3)", id: "Ahli Madya (D3)" },
    field: { en: "Information Technology", id: "Teknologi Informasi" },
    period: "September 2016 — August 2019",
    location: { en: "Purworejo, Indonesia", id: "Purworejo, Indonesia" },
    description: {
      en: "Vocational training in information technology, covering programming fundamentals and applied software work.",
      id: "Pendidikan vokasi teknologi informasi, mencakup dasar pemrograman dan pekerjaan perangkat lunak terapan."
    }
  }
];

/* ------------------------------------------------------------------ */
/* Speaking                                                            */
/* ------------------------------------------------------------------ */

export type Talk = {
  title: Localized;
  host: string;
  logos?: string[];
  date: Localized;
  format: Localized;
  description: Localized;
  link?: string;
};

export const talks: Talk[] = [
  {
    title: {
      en: "Short Class: CSS Introduction",
      id: "Short Class: CSS Introduction"
    },
    host: "MySkill × Lion Parcel",
    logos: ["/images/logos/myskill.png", "/images/logos/lion-parcel.png"],
    date: { en: "October 3, 2024", id: "3 Oktober 2024" },
    format: { en: "Online", id: "Daring" },
    description: {
      en: "A community short class introducing CSS fundamentals — how styling works, the box model, layout, and the core properties that every frontend developer uses daily.",
      id: "Kelas singkat komunitas yang memperkenalkan dasar CSS — cara kerja styling, box model, layout, dan properti inti yang dipakai frontend developer setiap hari."
    },
    link: "https://www.youtube.com/live/6Iof3UyVHyM?si=tnzqa-dMSOGNy9vp"
  }
];
