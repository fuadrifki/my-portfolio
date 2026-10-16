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
  focus: {
    en: "Vue.js · React · JavaScript · TypeScript",
    id: "Vue.js · React · JavaScript · TypeScript"
  } satisfies Localized,
  location: {
    en: "Jakarta, Indonesia",
    id: "Jakarta, Indonesia"
  } satisfies Localized,
  availability: {
    en: "Open to Frontend Engineering roles",
    id: "Terbuka untuk posisi Frontend Engineer"
  } satisfies Localized,
  intro: {
    en: "Frontend Engineer with 7+ years of professional experience building and maintaining web and mobile applications, specializing in JavaScript, TypeScript, Vue.js, and React. Experienced in developing complex, large-scale logistics applications supporting end-to-end shipment operations, customer management, and administrative workflows. Skilled in frontend architecture, reusable component development, API integration, internationalization, PDF generation, and thermal printing. Experienced in cross-functional collaboration, code reviews, and frontend team coordination.",
    id: "Frontend Engineer dengan 7+ tahun pengalaman profesional membangun dan memelihara aplikasi web dan mobile, berspesialisasi dalam JavaScript, TypeScript, Vue.js, dan React. Berpengalaman mengembangkan aplikasi logistik kompleks berskala besar yang mendukung operasional pengiriman end-to-end, manajemen pelanggan, dan alur administrasi. Terampil dalam arsitektur frontend, pengembangan komponen reusable, integrasi API, internasionalisasi, pembuatan PDF, dan thermal printing. Berpengalaman dalam kolaborasi lintas fungsi, code review, dan koordinasi tim frontend."
  } satisfies Localized,
  photo: "/images/logos/profile.jpeg",
  photoAlt: {
    en: "Portrait photo of Fuad Rifqi Zamzami",
    id: "Foto Fuad Rifqi Zamzami"
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
  exploreProjects: { en: "Explore Projects", id: "Jelajahi Proyek" },
  contactMe: { en: "Contact Me", id: "Hubungi Saya" },
  heroRole: {
    en: "Frontend Engineer | JavaScript & TypeScript | Vue.js & React",
    id: "Frontend Engineer | JavaScript & TypeScript | Vue.js & React"
  },
  basedIn: { en: "Based in", id: "Berlokasi di" },
  focusAreas: { en: "Also working with", id: "Juga bekerja dengan" },
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

export type ProjectCategory =
  | "logistics-operations"
  | "enterprise-applications"
  | "company-websites"
  | "ecommerce"
  | "content-management"
  | "education"
  | "business-productivity"
  | "financial-services";

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
  platforms?: string[];
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, Localized> = {
  "logistics-operations": {
    en: "Logistics & Operations",
    id: "Logistik & Operasional"
  },
  "enterprise-applications": {
    en: "Enterprise Applications",
    id: "Aplikasi Enterprise"
  },
  "company-websites": {
    en: "Company Websites",
    id: "Website Perusahaan"
  },
  ecommerce: { en: "E-commerce", id: "E-commerce" },
  "content-management": {
    en: "Content Management",
    id: "Manajemen Konten"
  },
  education: { en: "Education", id: "Edukasi" },
  "business-productivity": {
    en: "Business & Productivity",
    id: "Bisnis & Produktivitas"
  },
  "financial-services": {
    en: "Financial Services",
    id: "Layanan Keuangan"
  }
};

export const projects: Project[] = [
  {
    slug: "genesis",
    name: "Genesis — Lion Parcel",
    category: "logistics-operations",
    image: "/images/projects/genesis.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "A large-scale logistics platform covering end-to-end shipment operations, customer workflows, CRM, and administrative workflows. I contribute across the platform through feature development, maintenance, and REST API integration.",
      id: "Platform logistik skala besar yang mencakup operasional pengiriman end-to-end, alur pelanggan, CRM, dan alur administrasi. Saya berkontribusi di seluruh platform melalui pengembangan fitur, pemeliharaan, dan integrasi REST API."
    },
    description: {
      en: "Genesis is the operational core of Lion Parcel. I work across the platform on feature development and maintenance, building with Vue 3 and TypeScript on clean-architecture boundaries and keeping a large, long-lived codebase understandable through clear component boundaries, consistent data flow, and dependable REST API integration.",
      id: "Genesis adalah inti operasional Lion Parcel. Saya mengerjakan platform secara menyeluruh pada pengembangan dan pemeliharaan fitur, membangun dengan Vue 3 dan TypeScript di atas batas clean architecture, serta menjaga basis kode besar dan berumur panjang tetap mudah dipahami melalui batas komponen yang jelas, aliran data yang konsisten, dan integrasi REST API yang andal."
    },
    stack: ["Vue.js", "TypeScript", "Vuex", "Clean Architecture", "REST API"],
    featured: true
  },
  {
    slug: "jersium",
    name: "Jersium",
    category: "ecommerce",
    image: "/images/projects/jersium.svg",
    period: "Freelance",
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer"
    },
    summary: {
      en: "A Next.js e-commerce frontend. Handled the frontend implementation with pixel-accurate interfaces and storefront API integration.",
      id: "Frontend e-commerce Next.js. Mengerjakan implementasi frontend dengan antarmuka yang pixel-accurate dan integrasi API storefront."
    },
    description: {
      en: "Handled the frontend development for this Next.js e-commerce project: turning designs into pixel-accurate interfaces with reusable components and integrating the storefront with backend APIs.",
      id: "Mengerjakan pengembangan frontend untuk proyek e-commerce Next.js ini: mengubah desain menjadi antarmuka yang pixel-accurate dengan komponen yang dapat digunakan ulang serta mengintegrasikan storefront dengan API backend."
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    slug: "tetra-pulsa",
    name: "Tetra Pulsa",
    category: "financial-services",
    image: "/images/projects/tetra-pulsa.svg",
    period: "Freelance",
    role: {
      en: "Mobile Frontend Developer (Freelance)",
      id: "Mobile Frontend Developer (Freelance)"
    },
    summary: {
      en: "A mobile application for Android and iOS for checking real-time mobile credit conversion rates, submitting conversion requests, and tracking bank-transfer payouts.",
      id: "Aplikasi mobile untuk Android dan iOS untuk melihat nilai konversi pulsa secara real-time, mengajukan permintaan konversi pulsa, dan melacak pencairan dana melalui transfer bank."
    },
    description: {
      en: "End-to-end mobile frontend for a pulsa-to-cash service built with React Native: authenticated flows, a rate board per provider with min–max nominals, a guided transaction flow (phone number, amount, conversion preview, destination bank account), status-tracked history, and customer-service access — integrated against a credential-secured REST API within clean-architecture boundaries, with native builds for both stores.",
      id: "Frontend mobile end-to-end untuk layanan tukar pulsa menjadi saldo dengan React Native: alur terautentikasi, papan kurs per provider dengan batas minimal–maksimal nominal, alur transaksi terpandu (nomor HP, nominal, pratinjau konversi, rekening bank tujuan), riwayat berstatus, dan akses layanan pelanggan — terintegrasi ke REST API berkredensial dalam batas clean architecture, dengan build native untuk kedua toko aplikasi."
    },
    stack: ["React Native", "TypeScript"],
    platforms: ["Android", "iOS"]
  },
  {
    slug: "pintoko",
    name: "Pintoko",
    category: "ecommerce",
    image: "/images/projects/pintoko.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An e-commerce frontend focused on product presentation and a straightforward purchase flow. Built browsing and detail experiences integrated with the backend catalogue.",
      id: "Frontend e-commerce dengan fokus pada penyajian produk dan alur pembelian yang sederhana. Membangun pengalaman jelajah dan detail produk yang terintegrasi dengan katalog backend."
    },
    description: {
      en: "Built product browsing and detail experiences, connected the catalogue to the backend, and kept the interface consistent across screen sizes.",
      id: "Membangun pengalaman jelajah dan detail produk, menghubungkan katalog ke backend, dan menjaga konsistensi antarmuka di berbagai ukuran layar."
    },
    stack: ["Vue.js", "JavaScript", "REST API"]
  },
  {
    slug: "lion-cms",
    name: "Lion Parcel CMS",
    category: "content-management",
    image: "/images/projects/lion-cms.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "A content management system for managing and publishing Lion Parcel website content. Contributed frontend features for article and content management with API integration.",
      id: "Sistem manajemen konten untuk mengelola dan mempublikasikan konten situs Lion Parcel. Berkontribusi pada fitur frontend untuk pengelolaan artikel dan konten dengan integrasi API."
    },
    description: {
      en: "Contributed frontend features to the Lion Parcel CMS, including interfaces for article and content management and the API integration behind them.",
      id: "Berkontribusi pada fitur frontend Lion Parcel CMS, termasuk antarmuka untuk pengelolaan artikel dan konten serta integrasi API di baliknya."
    },
    stack: ["Vue.js", "TypeScript", "Vuex", "REST API"]
  },
  {
    slug: "lion-parcel-website",
    name: "Lion Parcel Website",
    category: "company-websites",
    image: "/images/projects/lion-cms.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "The public Lion Parcel website with service information, rate tools, and customer-facing content. Developed and maintained frontend features connected to backend APIs.",
      id: "Situs publik Lion Parcel berisi informasi layanan, alat bantu tarif, dan konten pelanggan. Mengembangkan dan memelihara fitur frontend yang terhubung ke API backend."
    },
    description: {
      en: "Developed and maintained frontend features on the public Lion Parcel website as part of the team, connecting the interface to backend APIs and supporting content updates.",
      id: "Mengembangkan dan memelihara fitur frontend pada situs publik Lion Parcel sebagai bagian dari tim, menghubungkan antarmuka ke API backend dan mendukung pembaruan konten."
    },
    stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "REST API"]
  },
  {
    slug: "shopify-lion-parcel",
    name: "Shopify × Lion Parcel",
    category: "logistics-operations",
    image: "/images/projects/shopify-lionparcel.svg",
    period: "Lion Parcel",
    role: { en: "Frontend Engineer", id: "Frontend Engineer" },
    summary: {
      en: "Shopify-side frontend features for Lion Parcel shipping, focused on booking and address management. Contributed as part of a multi-team shipping integration.",
      id: "Fitur frontend sisi Shopify untuk pengiriman Lion Parcel, berfokus pada booking dan manajemen alamat. Berkontribusi sebagai bagian dari integrasi pengiriman lintas beberapa tim."
    },
    description: {
      en: "Developed Shopify-side frontend features around shipping booking and address management for Lion Parcel, as one part of a broader shipping integration delivered across several teams.",
      id: "Mengembangkan fitur frontend sisi Shopify untuk booking pengiriman dan manajemen alamat Lion Parcel, sebagai salah satu bagian dari integrasi pengiriman yang lebih luas yang dikerjakan beberapa tim."
    },
    stack: ["JavaScript", "React", "REST API"]
  },
  {
    slug: "refactory-profile",
    name: "Refactory Company Profile",
    category: "company-websites",
    image: "/images/projects/refactory-profile.svg",
    period: "Refactory",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "The public company profile site for Refactory, a technology education and software company in Yogyakarta. Built the marketing-facing site with clear information architecture, responsive layouts, and reusable components.",
      id: "Situs company profile publik Refactory, perusahaan pendidikan teknologi dan perangkat lunak di Yogyakarta. Membangun situs pemasaran dengan arsitektur informasi yang jelas, layout responsif, dan komponen yang dapat digunakan ulang."
    },
    description: {
      en: "Built the marketing-facing web experience for Refactory: a content-rich site with clear information architecture, responsive layouts, and a reusable component set the team could extend as programs and pages changed.",
      id: "Membangun pengalaman web pemasaran untuk Refactory: situs kaya konten dengan arsitektur informasi yang jelas, layout responsif, dan komponen yang dapat digunakan ulang sehingga tim bisa menambah program dan halaman seiring perubahan."
    },
    stack: ["WordPress", "Elementor"]
  },
  {
    slug: "sia-ut",
    name: "SIA Universitas Terbuka",
    category: "education",
    image: "/images/projects/sia-ut.svg",
    period: "Refactory client project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An academic information system for student records, courses, and administration. Implemented data-heavy screens with tables, filters, and forms.",
      id: "Sistem informasi akademik untuk data mahasiswa, mata kuliah, dan administrasi. Mengimplementasikan layar padat data dengan tabel, filter, dan form."
    },
    description: {
      en: "Implemented data-heavy academic screens — tables, filters, and forms — with a focus on readability and clear feedback for administrative users.",
      id: "Mengimplementasikan layar akademik yang padat data — tabel, filter, dan form — dengan fokus pada keterbacaan dan umpan balik yang jelas untuk pengguna administrasi."
    },
    stack: ["Laravel", "PHP"]
  },
  {
    slug: "pindad",
    name: "E-Procurement PT Pindad",
    category: "enterprise-applications",
    image: "/images/projects/pindad.svg",
    period: "Refactory client project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "A web-based e-procurement platform for PT Pindad (Persero), supporting end-to-end procurement through an integrated digital system. Contributed to frontend development with React.js and TypeScript.",
      id: "Platform e-procurement berbasis web untuk PT Pindad (Persero) yang mendukung pengadaan end-to-end melalui sistem digital yang terintegrasi. Berkontribusi pada pengembangan frontend dengan React.js dan TypeScript."
    },
    description: {
      en: "A web-based e-procurement platform for PT Pindad (Persero), designed to support end-to-end procurement processes through an integrated digital system.\n\nContributed to frontend development using React.js and TypeScript, integrating application features with backend GraphQL APIs.",
      id: "Platform e-procurement berbasis web untuk PT Pindad (Persero), dirancang untuk mendukung proses pengadaan end-to-end melalui sistem digital yang terintegrasi.\n\nBerkontribusi pada pengembangan frontend menggunakan React.js dan TypeScript, mengintegrasikan fitur aplikasi dengan GraphQL API backend."
    },
    stack: ["React.js", "TypeScript", "GraphQL"]
  },
  {
    slug: "ayo-belajar",
    name: "Ayo Belajar",
    category: "education",
    image: "/images/projects/ayo-belajar.svg",
    period: "Refactory client project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "A learning-management dashboard with class operations, live classes, quizzes, payments, and community features.",
      id: "Dasbor manajemen pembelajaran dengan operasional kelas, kelas langsung, kuis, pembayaran, dan fitur komunitas."
    },
    description: {
      en: "Built as part of a software-house team: an LMS dashboard covering class management, live classes, chapters and quizzes, instructor and student flows, earnings and withdrawals, payments, messages, and forums across multiple roles. The frontend follows clean-architecture boundaries (app / domain / data) with React 16 and TypeScript, integrated against mock and staged REST APIs.",
      id: "Dikerjakan sebagai bagian dari tim software house: dasbor LMS yang mencakup manajemen kelas, kelas langsung, bab dan kuis, alur instruktur dan siswa, pendapatan dan penarikan dana, pembayaran, pesan, dan forum untuk beberapa peran. Frontend memakai batas clean architecture (app / domain / data) dengan React 16 dan TypeScript, terintegrasi ke REST API mock dan staging."
    },
    stack: ["React", "TypeScript", "Redux", "Clean Architecture", "REST API"]
  },
  {
    slug: "atenda",
    name: "Atenda",
    category: "business-productivity",
    image: "/images/projects/atenda.svg",
    period: "Refactory client project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "An attendance and workforce application for daily staff attendance. Built check-in flows, attendance history, and reporting views.",
      id: "Aplikasi absensi dan ketenagakerjaan untuk kehadiran staf harian. Membangun alur check-in, riwayat kehadiran, dan tampilan laporan."
    },
    description: {
      en: "Built the attendance interface: check-in flows, attendance history, and reporting views wired to backend services.",
      id: "Membangun antarmuka absensi: alur check-in, riwayat kehadiran, dan tampilan laporan yang terhubung ke layanan backend."
    },
    stack: ["React", "JavaScript", "REST API"]
  },
  {
    slug: "residence-management",
    name: "Residence Management",
    category: "business-productivity",
    image: "/images/projects/residence-management.svg",
    period: "Personal project",
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
    category: "education",
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
    slug: "almaarif-jambi",
    name: "Al Maarif Jambi",
    category: "education",
    image: "/images/projects/almaarif.svg",
    period: "Personal project",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    summary: {
      en: "A digital platform for an Islamic boarding school, with admin operations in a monorepo backed by PostgreSQL. Contributed admin screens, data flows, and environment-based configuration.",
      id: "Platform digital pondok pesantren dengan operasional admin dalam monorepo yang didukung PostgreSQL. Berkontribusi pada layar admin, alur data, dan konfigurasi berbasis lingkungan."
    },
    description: {
      en: "Contributed to a Turborepo/pnpm monorepo (Next.js 16 App Router, React 19, TypeScript, Tailwind v4) backed by Drizzle ORM on Neon PostgreSQL — admin screens, data flows, and environment-based configuration.",
      id: "Berkontribusi pada monorepo Turborepo/pnpm (Next.js 16 App Router, React 19, TypeScript, Tailwind v4) yang didukung Drizzle ORM di atas Neon PostgreSQL — layar admin, alur data, dan konfigurasi berbasis lingkungan."
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle",
      "Neon PostgreSQL",
      "Turborepo"
    ]
  },
  {
    slug: "pos",
    name: "Point of Sales",
    category: "business-productivity",
    image: "/images/projects/pos-php.svg",
    period: "Personal project",
    role: { en: "Fullstack Developer", id: "Fullstack Developer" },
    summary: {
      en: "A 2019 cashier POS built with native PHP MVC and MySQL — kept as an archive of the pre-JavaScript era.",
      id: "POS kasir 2019 berbasis PHP MVC native dan MySQL — disimpan sebagai arsip era pra-JavaScript."
    },
    description: {
      en: "A legacy point-of-sales system built with custom PHP MVC (controllers, models, and views), MySQL, and the Gentelella admin template, covering categories, products, customers, and sales. Kept as an archive of my early development experience before transitioning to JavaScript-focused frontend work.",
      id: "Sistem point-of-sales lawas yang dibangun dengan PHP MVC custom (controller, model, dan view), MySQL, dan template admin Gentelella, mencakup kategori, produk, customer, dan penjualan. Disimpan sebagai arsip pengalaman development awal saya sebelum beralih ke frontend yang berfokus pada JavaScript."
    },
    stack: ["PHP", "MySQL", "Bootstrap"]
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
  logoTone?: "light" | "dark";
  role: Localized;
  period: Localized;
  location: Localized;
  arrangement?: Localized;
  description: Localized;
  highlights: Localized[];
  keyProjects: string[];
};

export const experiences: Experience[] = [
  {
    company: "Lion Parcel",
    logo: "/images/logos/lion-parcel.png",
    role: { en: "Senior Frontend Developer", id: "Senior Frontend Developer" },
    period: {
      en: "May 2021 — Present",
      id: "Mei 2021 — Sekarang"
    },
    location: { en: "Jakarta, Indonesia", id: "Jakarta, Indonesia" },
    description: {
      en: "Contribute to the development and maintenance of multiple web applications, including Genesis, a large-scale logistics operations platform.",
      id: "Berkontribusi pada pengembangan dan pemeliharaan berbagai aplikasi web, termasuk Genesis, platform operasional logistik skala besar."
    },
    highlights: [
      {
        en: "Develop and maintain frontend features across Genesis shipment workflows, including booking, shipment processing, tracking, delivery, customer management, and administrative operations.",
        id: "Mengembangkan dan memelihara fitur frontend di seluruh alur pengiriman Genesis, mencakup booking, pemrosesan kiriman, pelacakan, pengantaran, manajemen pelanggan, dan operasional administrasi."
      },
      {
        en: "Develop reusable frontend components and implement internationalization, PDF generation for operational documents such as shipping labels and waybills, and thermal printing.",
        id: "Mengembangkan komponen frontend yang dapat digunakan ulang serta mengimplementasikan internasionalisasi, pembuatan PDF untuk dokumen operasional seperti label pengiriman dan waybill, dan thermal printing."
      },
      {
        en: "Integrate frontend features with backend services through REST APIs and other service interfaces.",
        id: "Mengintegrasikan fitur frontend dengan layanan backend melalui REST API dan antarmuka layanan lainnya."
      },
      {
        en: "Develop frontend features and API integrations for Lion CMS.",
        id: "Mengembangkan fitur frontend dan integrasi API untuk Lion CMS."
      },
      {
        en: "Develop features for the Lion Parcel corporate website and help break down article and CMS tasks for other engineers.",
        id: "Mengembangkan fitur situs korporat Lion Parcel dan membantu memecah tugas artikel dan CMS untuk engineer lain."
      },
      {
        en: "Develop Pintoko e-commerce frontend features and API integrations across product, checkout, and payment workflows.",
        id: "Mengembangkan fitur frontend e-commerce Pintoko serta integrasi API pada alur produk, checkout, dan pembayaran."
      },
      {
        en: "Develop Shopify-side booking and address management features integrated with Genesis.",
        id: "Mengembangkan fitur booking dan manajemen alamat sisi Shopify yang terintegrasi dengan Genesis."
      },
      {
        en: "Collaborate with Product, Backend, Platform Engineering, QA, and other stakeholders to clarify requirements and deliver features.",
        id: "Berkolaborasi dengan Product, Backend, Platform Engineering, QA, dan stakeholder lain untuk memperjelas kebutuhan dan mengantarkan fitur."
      },
      {
        en: "Support team delivery through task assignment, code reviews, approvals, and progress monitoring, including coordinating approximately 6–7 engineers when needed.",
        id: "Mendukung delivery tim melalui pembagian tugas, code review, approval, dan pemantauan progres, termasuk mengoordinasikan sekitar 6–7 engineer saat dibutuhkan."
      }
    ],
    keyProjects: [
      "Genesis",
      "Lion Parcel CMS",
      "Lion Parcel Website",
      "Shopify × Lion Parcel",
      "Pintoko"
    ]
  },
  {
    company: "Jersium",
    logo: "/images/logos/jersium.png",
    logoTone: "dark",
    role: {
      en: "Frontend Developer (Freelance)",
      id: "Frontend Developer (Freelance)"
    },
    period: {
      en: "January 2025 — December 2025",
      id: "Januari 2025 — Desember 2025"
    },
    location: { en: "Poland", id: "Polandia" },
    arrangement: { en: "Remote", id: "Remote" },
    description: {
      en: "Developed the end-to-end frontend of an e-commerce platform using Next.js, covering the complete shopping experience from initial page development to customer account management.",
      id: "Mengembangkan frontend end-to-end platform e-commerce menggunakan Next.js, mencakup seluruh pengalaman belanja dari pengembangan halaman awal hingga manajemen akun pelanggan."
    },
    highlights: [
      {
        en: "Developed the frontend experience across product discovery, shopping, checkout, and customer account management.",
        id: "Mengembangkan pengalaman frontend pada penemuan produk, belanja, checkout, dan manajemen akun pelanggan."
      },
      {
        en: "Translated client requirements and designs into pixel-perfect, responsive user interfaces with consistent visual accuracy.",
        id: "Menerjemahkan kebutuhan dan desain klien menjadi antarmuka yang pixel-perfect, responsif, dengan akurasi visual yang konsisten."
      }
    ],
    keyProjects: ["Web app"]
  },
  {
    company: "Tetra Pulsa",
    logo: "/images/logos/tetra-pulsa.png",
    logoTone: "dark",
    role: {
      en: "Mobile Frontend Developer (Freelance)",
      id: "Mobile Frontend Developer (Freelance)"
    },
    period: {
      en: "April 2022 — July 2023",
      id: "April 2022 — Juli 2023"
    },
    location: { en: "Indonesia", id: "Indonesia" },
    arrangement: { en: "Remote", id: "Remote" },
    description: {
      en: "Freelance mobile frontend work on Tetra Pulsa, a pulsa-conversion application for Android and iOS built with React Native and TypeScript.",
      id: "Pekerjaan freelance frontend mobile pada Tetra Pulsa, aplikasi konversi pulsa untuk Android dan iOS yang dibangun dengan React Native dan TypeScript."
    },
    highlights: [
      {
        en: "Developed the frontend of a cross-platform mobile application using React Native and TypeScript.",
        id: "Mengembangkan frontend aplikasi mobile lintas platform menggunakan React Native dan TypeScript."
      },
      {
        en: "Implemented user-facing features for viewing real-time mobile credit conversion rates, submitting conversion requests, and tracking bank-transfer payouts.",
        id: "Mengimplementasikan fitur untuk melihat nilai konversi pulsa secara real-time, mengajukan permintaan konversi, dan melacak pencairan dana melalui transfer bank."
      },
      {
        en: "Worked with Android and iOS application codebases.",
        id: "Berkontribusi pada codebase aplikasi Android dan iOS."
      }
    ],
    keyProjects: ["Mobile app (Android & iOS)"]
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
      en: "Contributed to client and internal projects across different business domains and technology stacks.",
      id: "Berkontribusi pada proyek klien dan internal di berbagai domain bisnis dan technology stack."
    },
    highlights: [
      {
        en: "E-Procurement PT PINDAD (Persero): frontend development using React, TypeScript, and GraphQL — https://eproc.pindad.com/",
        id: "E-Procurement PT PINDAD (Persero): pengembangan frontend menggunakan React, TypeScript, dan GraphQL — https://eproc.pindad.com/"
      },
      {
        en: "Refactory Company Profile: website development using WordPress and Elementor.",
        id: "Refactory Company Profile: pengembangan website menggunakan WordPress dan Elementor."
      },
      {
        en: "Atenda: frontend contributions to an attendance and payroll application using React.",
        id: "Atenda: kontribusi frontend pada aplikasi absensi dan payroll menggunakan React."
      },
      {
        en: "Ayo Belajar: frontend contributions to a learning platform using React.",
        id: "Ayo Belajar: kontribusi frontend pada platform pembelajaran menggunakan React."
      },
      {
        en: "Universitas Terbuka: contributions to an academic information system using Laravel.",
        id: "Universitas Terbuka: kontribusi pada sistem informasi akademik menggunakan Laravel."
      },
      {
        en: "Lion Parcel — Genesis: contributions to the logistics platform using Vue 3, TypeScript, Clean Architecture, and REST API integration.",
        id: "Lion Parcel — Genesis: kontribusi pada platform logistik menggunakan Vue 3, TypeScript, Clean Architecture, dan integrasi REST API."
      }
    ],
    keyProjects: [
      "Pindad",
      "Refactory Company Profile",
      "Atenda",
      "Ayo Belajar"
    ]
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
    title: { en: "Programming Languages", id: "Bahasa Pemrograman" },
    items: ["JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    title: {
      en: "Frontend Frameworks and Libraries",
      id: "Framework dan Library Frontend"
    },
    items: [
      "Vue.js",
      "React",
      "Next.js",
      "Nuxt.js",
      "React Native",
      "Tailwind CSS"
    ]
  },
  {
    title: { en: "Platforms", id: "Platform" },
    items: ["Android", "iOS"]
  },
  {
    title: {
      en: "Architecture and UI Development",
      id: "Arsitektur dan Pengembangan UI"
    },
    items: [
      "Clean Architecture",
      "Component-Based Architecture",
      "Reusable Components",
      "State Management",
      "Responsive UI Development"
    ]
  },
  {
    title: { en: "API and Integration", id: "API dan Integrasi" },
    items: ["REST API", "GraphQL", "Frontend–Backend Integration"]
  },
  {
    title: { en: "Application Capabilities", id: "Kemampuan Aplikasi" },
    items: ["Internationalization (i18n)", "PDF Generation", "Thermal Printing"]
  },
  {
    title: { en: "Testing", id: "Pengujian" },
    items: ["Jest", "Playwright"]
  },
  {
    title: { en: "Tools and Collaboration", id: "Tools dan Kolaborasi" },
    items: ["Git", "Jira", "Figma", "Vercel"]
  },
  {
    title: { en: "Languages", id: "Bahasa" },
    items: ["Bahasa Indonesia", "English"]
  }
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type Education = {
  school: string;
  logo: string;
  logoTone?: "light" | "dark";
  degree: Localized;
  field: Localized;
  gpa: string;
  period: string;
  location: Localized;
  description: Localized;
};

export const education: Education[] = [
  {
    school: "Universitas Mercu Buana Yogyakarta",
    logo: "/images/logos/umb.png",
    degree: { en: "Bachelor's Degree (S1)", id: "Sarjana (S1)" },
    field: { en: "Informatics Engineering", id: "Teknik Informatika" },
    gpa: "3.50",
    period: "March 2020 — May 2022",
    location: { en: "Yogyakarta, Indonesia", id: "Yogyakarta, Indonesia" },
    description: {
      en: "Studied Informatics while working at Refactory and contributing to software projects. Academic work included an expert system project, while freelance and thesis projects involved Tetra Pulsa, a mobile application, and a mobile learning app developed as my final thesis.",
      id: "Menempuh pendidikan Informatika sambil bekerja di Refactory dan terlibat dalam berbagai proyek perangkat lunak. Proyek selama masa studi mencakup sistem pakar sebagai tugas akademik, Tetra Pulsa sebagai proyek freelance, serta aplikasi pembelajaran mobile sebagai proyek skripsi."
    }
  },
  {
    school: "Politeknik Sawunggalih Aji",
    logo: "/images/logos/polsa.png",
    degree: { en: "Associate Degree (D3)", id: "Ahli Madya (D3)" },
    field: { en: "Informatics Engineering", id: "Teknik Informatika" },
    gpa: "3.69",
    period: "September 2016 — August 2019",
    location: { en: "Purworejo, Indonesia", id: "Purworejo, Indonesia" },
    description: {
      en: "Studied Informatics while gaining practical experience through freelance and academic software projects. Work included a queue management information system for RSAD Ismoyo in Kendari, a point-of-sale application, and a COGS accounting application for CV Mandiri Usaha Gypsum developed as my final graduation research project.",
      id: "Menempuh pendidikan Informatika sambil memperoleh pengalaman praktis melalui proyek freelance dan akademik. Proyek meliputi sistem informasi antrian untuk RSAD Ismoyo di Kendari, aplikasi point of sale (POS), serta aplikasi akuntansi untuk menghitung harga pokok penjualan (HPP) di CV Mandiri Usaha Gypsum sebagai karya ilmiah kelulusan."
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
  videoId?: string;
  videoTitle?: string;
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
    link: "https://www.youtube.com/live/6Iof3UyVHyM?si=tnzqa-dMSOGNy9vp",
    videoId: "6Iof3UyVHyM",
    videoTitle: "Short Class CSS Introduction | MySkill x Lion Parcel"
  }
];
