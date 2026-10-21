import type { Localized } from "@/data/portfolio";
import { batchOneKnowledge } from "@/data/frontend-knowledge-batch-one";
import { javascriptFundamentals } from "@/data/javascript-fundamentals";

export type KnowledgeCode = {
  label: Localized;
  language: string;
  value: string;
};

export type KnowledgeComparison = {
  headers: Localized[];
  rows: Localized[][];
};

export type KnowledgeReference = {
  label: string;
  href: string;
};

export type KnowledgeEntry = {
  slug: string;
  term: string;
  category: Localized;
  title: Localized;
  summary: Localized;
  readingTime: Localized;
  keywords: string[];
  question: Localized;
  definition: Localized[];
  why: Localized[];
  theory: Localized[];
  analogy: Localized[];
  analogyConclusion?: Localized[];
  analogyMapping?: Localized[];
  realExample: Localized[];
  code?: KnowledgeCode;
  codeExplanation?: Localized[];
  comparison: KnowledgeComparison;
  whenToUse: {
    good: Localized[];
    poor: Localized[];
  };
  mistakes: Localized[];
  seniorPerspective: Localized[];
  keyPoints: Localized[];
  references: KnowledgeReference[];
  related: string[];
  practiceQuestions: Localized[];
};

const foundationKnowledge: KnowledgeEntry[] = [
  {
    slug: "csr",
    term: "CSR",
    category: { en: "Rendering & Delivery", id: "Rendering & Delivery" },
    title: { en: "Client-Side Rendering (CSR)", id: "Client-Side Rendering (CSR)" },
    summary: {
      en: "Client-Side Rendering means the browser receives the application files, then uses JavaScript to build much of the visible interface on the user's device.",
      id: "CSR — Client-Side Rendering adalah cara menampilkan halaman dengan meminta browser pengguna menyusun sebagian besar antarmuka menggunakan JavaScript."
    },
    readingTime: { en: "10 min", id: "10 menit" },
    keywords: ["csr", "client side rendering", "csr vs ssr", "spa", "browser", "javascript", "rendering"],
    question: { en: "What is CSR, and when would you choose it over SSR?", id: "Apa itu CSR, dan kapan Anda memilihnya dibanding SSR?" },
    definition: [
      { en: "CSR stands for Client-Side Rendering. In practical terms, the server sends an initial HTML (HyperText Markup Language) document plus CSS (Cascading Style Sheets) and JavaScript files, and the browser does much of the work needed to turn them into the page the user sees.", id: "CSR merupakan singkatan dari Client-Side Rendering. Secara praktis, server mengirimkan dokumen HTML (HyperText Markup Language) awal beserta CSS (Cascading Style Sheets) dan JavaScript. Browser kemudian menjalankan JavaScript untuk membentuk halaman yang dilihat pengguna." },
      { en: "JavaScript creates or updates the DOM—the Document Object Model, which is the browser's in-memory representation of the page. CSR is not the same as SPA. CSR answers where rendering happens; SPA, or Single-Page Application, describes navigation that usually does not reload the whole document for each screen.", id: "JavaScript membuat atau memperbarui DOM (Document Object Model), yaitu representasi halaman yang disimpan browser di memori. CSR tidak sama dengan SPA. CSR menjawab di mana tampilan dibuat, sedangkan SPA (Single-Page Application) menjelaskan pola navigasi yang biasanya tidak memuat ulang seluruh dokumen setiap kali berpindah layar." }
    ],
    why: [
      { en: "Rich applications need frequent UI updates after user actions. Moving rendering and navigation logic to the browser can make subsequent interactions feel immediate, preserve in-memory state between views, and reduce repeated full-page document loads.", id: "Aplikasi interaktif sering memperbarui tampilan setelah pengguna memilih filter, membuka dialog, mengubah formulir, atau berpindah bagian. Dengan menjalankan logika tampilan di browser, aplikasi dapat merespons tindakan tersebut tanpa selalu meminta dokumen HTML baru dari server. Keadaan sementara juga dapat dipertahankan selama pengguna berpindah tampilan." },
      { en: "The trade-off is that the browser must download, parse, and execute enough JavaScript before the application becomes useful. On a slow device or network, an empty shell or loading state can remain visible longer than expected.", id: "Konsekuensinya, browser harus mengunduh, membaca, dan menjalankan JavaScript sebelum aplikasi benar-benar dapat digunakan. Jika jaringan lambat, ukuran JavaScript terlalu besar, atau perangkat pengguna kurang bertenaga, halaman dapat cukup lama hanya menampilkan kerangka kosong atau indikator pemuatan." }
    ],
    theory: [
      { en: "A simplified flow is: request HTML, parse it, download and execute the application JavaScript, request data from an API when needed, update the DOM, and paint the result. An API, or Application Programming Interface, is the contract the frontend uses to request data or actions from another system.", id: "Alur sederhananya adalah: browser meminta HTML, membacanya, mengunduh dan menjalankan JavaScript aplikasi, mengambil data dari API jika diperlukan, memperbarui DOM, lalu menggambar hasilnya ke layar. API (Application Programming Interface) adalah kontrak yang digunakan frontend untuk meminta data atau tindakan dari sistem lain." },
      { en: "After startup, a client router can intercept navigation, update the URL, load data or code, and render the next view without requesting an entirely new document. The application must then own loading, error, empty, permission, and stale-data states explicitly.", id: "Setelah aplikasi aktif, client router dapat menangani perpindahan halaman tanpa memuat ulang seluruh dokumen. Router memperbarui URL, mengambil data atau JavaScript tambahan jika diperlukan, lalu mengganti bagian tampilan yang berubah. Karena proses ini dikelola aplikasi, frontend juga harus menangani keadaan memuat, gagal, kosong, tidak memiliki izin, dan data yang sudah tidak mutakhir." }
    ],
    analogy: [
      { en: "Imagine buying a flat-pack desk. The shop sends the parts and instructions to your home. You wait for delivery, sort the pieces, and assemble the first desk yourself. After that, moving a shelf or changing the layout is quick because the desk is already there. CSR follows a similar pattern: the browser receives the pieces and does more of the initial assembly, then can respond quickly to later changes. The comparison stops there—real browsers execute JavaScript and build a DOM, not furniture.", id: "Bayangkan membeli meja yang harus dirakit sendiri. Toko mengirim bagian-bagian dan petunjuk ke rumah. Anda menunggu kiriman, memilah komponennya, lalu merakit meja pertama. Setelah meja berdiri, memindahkan rak atau mengubah susunannya bisa dilakukan dengan cepat karena semuanya sudah ada di rumah. CSR memiliki pola yang mirip: browser menerima bagian-bagian lalu melakukan lebih banyak pekerjaan awal, kemudian dapat merespons perubahan berikutnya dengan cepat. Tentu saja, browser menjalankan JavaScript dan membentuk DOM, bukan merakit furnitur." }
    ],
    realExample: [
      { en: "An internal logistics dashboard may use CSR because it is behind authentication, is not indexed by search engines, and contains filters, tables, dialogs, and frequent data updates. Its main quality risks are interaction latency, request races, permission handling, and maintainability rather than public-page SEO.", id: "Dashboard operasional logistik merupakan contoh yang masuk akal untuk CSR. Halamannya hanya dapat dibuka setelah pengguna masuk, sehingga tidak perlu ditemukan melalui mesin pencari. Pengguna lebih banyak berinteraksi dengan tabel, filter, formulir, dan dialog dalam sesi yang panjang. Pada kondisi ini, perhatian utama frontend bukan SEO, melainkan kecepatan respons antarmuka, benturan antar-request, pengelolaan izin, serta kemudahan pemeliharaan kode." }
    ],
    code: {
      label: { en: "Simplified client rendering", id: "Client rendering sederhana" },
      language: "tsx",
      value: `"use client";

import { useEffect, useState } from "react";

export function ShipmentList() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    fetch("/api/shipments")
      .then((response) => {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      })
      .then((data) => {
        setShipments(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  if (status === "loading") return <p>Loading shipments…</p>;
  if (status === "error") return <p role="alert">Could not load shipments.</p>;
  return <ShipmentTable shipments={shipments} />;
}`
    },
    codeExplanation: [
      { en: "The first render shows a loading state. After the component is active in the browser, useEffect requests shipment data. A successful response updates state and renders the table; a failed request produces an accessible error message. This is a common CSR sequence: JavaScript starts first, data follows, and the UI changes when that data arrives.", id: "Pada render pertama, komponen menampilkan status memuat. Setelah komponen aktif di browser, useEffect meminta data pengiriman. Respons yang berhasil memperbarui state dan menampilkan tabel; request yang gagal menampilkan pesan error yang dapat dibaca assistive technology. Urutan ini umum pada CSR: JavaScript berjalan lebih dahulu, data menyusul, lalu UI berubah ketika data tersedia." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "CSR", id: "CSR" }, { en: "SSR", id: "SSR" }],
      rows: [
        [{ en: "Initial HTML", id: "Isi HTML awal" }, { en: "Often a small application shell", id: "Biasanya hanya berisi kerangka dasar aplikasi" }, { en: "Contains route content produced on a server", id: "Sudah berisi konten halaman yang dibuat oleh server" }],
        [{ en: "Initial work", id: "Pihak yang bekerja lebih dahulu" }, { en: "More work on the user's device", id: "Perangkat pengguna melakukan lebih banyak pekerjaan" }, { en: "Server work plus possible hydration in the browser", id: "Server menyiapkan HTML; browser mungkin melanjutkan dengan hydration" }],
        [{ en: "Data request", id: "Pengambilan data" }, { en: "Often starts after client JavaScript runs", id: "Sering dimulai setelah JavaScript client berjalan" }, { en: "Can happen before HTML is returned", id: "Dapat dilakukan sebelum HTML dikirim" }],
        [{ en: "Infrastructure cost", id: "Biaya infrastruktur" }, { en: "Static delivery is possible; clients do more work", id: "Dapat memakai static hosting; client melakukan lebih banyak pekerjaan" }, { en: "Request rendering needs a runtime unless output is cached", id: "Rendering per request membutuhkan runtime kecuali hasilnya di-cache" }],
        [{ en: "SEO implication", id: "Dampak terhadap SEO" }, { en: "Public content depends more on crawler JavaScript rendering", id: "Konten publik lebih bergantung pada kemampuan crawler menjalankan JavaScript" }, { en: "Useful HTML and metadata can arrive in the response", id: "HTML dan metadata yang berguna dapat langsung diterima" }],
        [{ en: "Typical fit", id: "Umumnya cocok untuk" }, { en: "Authenticated, highly interactive tools", id: "Aplikasi privat yang memiliki banyak interaksi" }, { en: "Public or request-specific pages that benefit from ready HTML", id: "Halaman publik atau halaman yang membutuhkan data saat request" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Authenticated dashboards where crawlability is irrelevant.", id: "Dashboard internal yang hanya dapat dibuka setelah pengguna masuk dan tidak perlu ditemukan mesin pencari." },
        { en: "Interfaces with long sessions and frequent local interactions.", id: "Aplikasi yang digunakan dalam sesi panjang dengan banyak filter, formulir, dialog, dan perubahan tampilan." },
        { en: "Static hosting environments without a server-rendering runtime.", id: "Situs yang ditempatkan pada layanan static hosting tanpa server yang dapat melakukan rendering untuk setiap request." }
      ],
      poor: [
        { en: "Critical public content that should be useful before application JavaScript runs.", id: "Halaman publik yang konten utamanya harus segera dapat dibaca, dibagikan, atau ditemukan melalui mesin pencari." },
        { en: "Experiences targeting low-powered devices with large JavaScript bundles.", id: "Aplikasi dengan JavaScript berukuran besar yang banyak digunakan melalui perangkat berkemampuan rendah atau jaringan lambat." },
        { en: "Choosing it only because the team already uses a client framework.", id: "CSR dipilih hanya karena tim terbiasa memakai framework client, tanpa menilai kebutuhan setiap halaman." }
      ]
    },
    mistakes: [
      { en: "Assuming CSR automatically means a fast application. Startup and runtime performance still depend on bundle size, main-thread work, rendering patterns, and network behavior.", id: "Menganggap CSR pasti cepat. Kecepatan aplikasi tetap dipengaruhi ukuran JavaScript, pekerjaan di main thread, cara komponen melakukan render ulang, kualitas perangkat, dan kondisi jaringan." },
      { en: "Rendering only a spinner while ignoring empty, partial, stale, permission, and retry states.", id: "Hanya memikirkan keadaan memuat dan lupa menangani data kosong, kegagalan sebagian, data kedaluwarsa, izin yang tidak mencukupi, serta cara pengguna mencoba kembali." },
      { en: "Treating SEO as the only difference between CSR and SSR.", id: "Membandingkan CSR dan SSR hanya dari sisi SEO, padahal keduanya juga berbeda dalam waktu tampil awal, beban perangkat, kebutuhan server, caching, dan cara menangani kegagalan." }
    ],
    seniorPerspective: [
      { en: "A senior decision starts from the route's users and constraints. Ask how quickly meaningful content must appear, whether the content is public, what devices are common, how long sessions last, and whether the hosting platform supports other rendering modes.", id: "Keputusan yang matang dimulai dari kebutuhan pengguna setiap halaman. Pertimbangkan seberapa cepat konten utama harus terlihat, apakah halaman bersifat publik, perangkat apa yang paling sering digunakan, berapa lama pengguna berada di dalam aplikasi, serta kemampuan infrastruktur yang tersedia." },
      { en: "Avoid an application-wide binary choice. Public product pages may be statically generated, request-specific pages server-rendered, and an authenticated dashboard client-rendered within the same product.", id: "Tidak seluruh aplikasi harus memakai satu strategi. Dalam produk yang sama, halaman produk publik dapat dibuat secara statis, halaman yang bergantung pada request dapat di-render oleh server, sedangkan dashboard internal dapat menggunakan CSR. Keputusan sebaiknya dibuat per halaman atau per kelompok halaman, bukan berdasarkan preferensi framework." }
    ],
    keyPoints: [
      { en: "CSR describes rendering work performed in the browser; it is not another name for SPA.", id: "CSR menjelaskan bahwa proses pembentukan tampilan terutama dilakukan di browser. CSR bukan nama lain untuk SPA." },
      { en: "It favors rich interaction after startup but increases dependency on client JavaScript.", id: "Setelah aplikasi aktif, CSR dapat memberikan interaksi yang cepat dan fleksibel. Sebagai gantinya, tampilan awal lebih bergantung pada JavaScript dan kemampuan perangkat pengguna." },
      { en: "Choose rendering per route and verify it with real performance measurements.", id: "Strategi rendering sebaiknya dipilih berdasarkan kebutuhan setiap halaman dan dibuktikan melalui pengukuran performa nyata." }
    ],
    references: [
      { label: "web.dev — Rendering on the Web", href: "https://web.dev/articles/rendering-on-the-web" },
      { label: "MDN — Client-side web APIs", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs" }
    ],
    related: ["ssr", "csr-vs-ssr", "hydration", "ssr-ssg-isr"],
    practiceQuestions: [
      { en: "Why might CSR be reasonable for an internal operations dashboard but weaker for a public product page?", id: "Mengapa CSR dapat menjadi pilihan yang masuk akal untuk dashboard operasional internal, tetapi kurang tepat untuk halaman produk publik?" },
      { en: "What would you measure before claiming that a CSR application is fast?", id: "Hal apa saja yang perlu diukur sebelum menyimpulkan bahwa sebuah aplikasi CSR memiliki performa yang baik?" }
    ]
  },
  {
    slug: "ssr",
    term: "SSR",
    category: { en: "Rendering & Delivery", id: "Rendering & Delivery" },
    title: { en: "Server-Side Rendering (SSR)", id: "Server-Side Rendering (SSR)" },
    summary: {
      en: "Server-Side Rendering means a server prepares the page's HTML before sending it to the browser, so useful content can arrive in the first response.",
      id: "SSR — Server-Side Rendering adalah cara menyiapkan HTML halaman di server sebelum mengirimkannya ke browser, sehingga konten utama dapat hadir pada respons pertama."
    },
    readingTime: { en: "12 min", id: "12 menit" },
    keywords: ["ssr", "server side rendering", "next.js", "nuxt", "seo", "rendering"],
    question: { en: "What is SSR, and does it always improve performance and SEO?", id: "Apa itu SSR, dan apakah SSR selalu meningkatkan performa dan SEO?" },
    definition: [
      { en: "SSR stands for Server-Side Rendering. When a browser requests a page, a server obtains the necessary data, turns the component output into HTML (HyperText Markup Language), and sends that document back. The user can therefore receive headings, text, and links without waiting for all application JavaScript to execute.", id: "SSR merupakan singkatan dari Server-Side Rendering. Ketika browser meminta halaman, server mengambil data yang diperlukan, mengubah hasil komponen menjadi HTML (HyperText Markup Language), lalu mengirimkan dokumen tersebut. Pengguna dapat menerima judul, teks, dan tautan tanpa harus menunggu seluruh JavaScript aplikasi selesai berjalan." },
      { en: "The HTML can be generated for each request or retrieved from a server cache. SSR does not mean the page is already fully interactive. Buttons and framework-managed interactions may still need hydration, the process that connects browser JavaScript to the existing HTML.", id: "HTML dapat dibuat untuk setiap request atau diambil dari cache server. SSR tidak berarti halaman langsung interaktif sepenuhnya. Tombol dan interaksi yang dikelola framework mungkin masih memerlukan hydration, yaitu proses menghubungkan JavaScript di browser dengan HTML yang sudah tersedia." }
    ],
    why: [
      { en: "With pure client rendering, the browser may need to download JavaScript and request data before it can show the main content. SSR moves some of that initial work to the server, which can be useful when the first response should already contain readable information.", id: "Pada client rendering murni, browser mungkin harus mengunduh JavaScript dan meminta data sebelum dapat menampilkan konten utama. SSR memindahkan sebagian pekerjaan awal tersebut ke server agar respons pertama sudah membawa informasi yang dapat dibaca." },
      { en: "It is particularly useful when the initial page depends on information available only when the request arrives, such as the signed-in user, language, request headers, or frequently changing inventory.", id: "Pendekatan ini terutama berguna ketika isi awal halaman bergantung pada informasi yang baru tersedia saat request datang, misalnya pengguna yang sedang login, pilihan bahasa, request header, atau stok yang sering berubah." }
    ],
    theory: [
      { en: "The technical sequence is: request a URL, fetch the required data on the server, render the component tree into HTML, return the document, then let the browser parse and paint it. If the page has interactive client code, the browser downloads that code and hydrates the existing markup.", id: "Urutan teknisnya adalah: browser meminta URL, server mengambil data yang dibutuhkan, component tree diubah menjadi HTML, lalu dokumen dikirim dan ditampilkan browser. Jika halaman memiliki kode interaktif, browser mengunduh kode tersebut dan melakukan hydration pada markup yang sudah ada." },
      { en: "SSR can improve when useful content appears, but it can also delay the first byte if the server waits for slow data. Caching reuses previous output, streaming sends ready portions earlier, and parallel data fetching reduces unnecessary waiting. Each technique adds rules that the team must understand and maintain.", id: "SSR dapat mempercepat kemunculan konten berguna, tetapi juga dapat memperlambat byte pertama jika server menunggu data yang lambat. Caching memakai kembali hasil sebelumnya, streaming mengirim bagian yang sudah siap lebih dahulu, dan parallel data fetching mengurangi waktu tunggu yang tidak perlu. Setiap teknik menambah aturan yang harus dipahami serta dipelihara tim." }
    ],
    analogy: [
      { en: "Imagine ordering a meal from a restaurant. The kitchen receives the order, prepares the dish, and sends it ready to eat. You get useful food sooner, but you must wait while the kitchen works. SSR follows that pattern: a server prepares the first HTML before the browser receives it. The analogy does not describe every later interaction or caching detail.", id: "Bayangkan memesan makanan dari restoran. Dapur menerima pesanan, menyiapkan hidangan, lalu mengirimkannya dalam keadaan siap disantap. Anda menerima makanan yang berguna lebih cepat, tetapi harus menunggu dapur bekerja. SSR mengikuti pola itu: server menyiapkan HTML awal sebelum browser menerimanya. Analogi ini tidak menjelaskan semua interaksi setelahnya atau detail caching." }
    ],
    realExample: [
      { en: "A public product page can prepare the name, price, stock status, description, canonical URL, and structured data on the server. Users and search crawlers receive meaningful content in the HTML response. Interactive controls such as quantity selection and Add to Cart can hydrate separately.", id: "Pada halaman produk publik, server dapat menyiapkan nama, harga, status stok, deskripsi, canonical URL, dan structured data. Pengguna serta crawler mesin pencari menerima konten yang bermakna melalui respons HTML. Kontrol interaktif seperti pilihan jumlah dan tombol Add to Cart dapat diaktifkan kemudian melalui hydration." }
    ],
    code: {
      label: { en: "Simplified server-rendered page", id: "Halaman server-rendered sederhana" },
      language: "tsx",
      value: `export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <strong>{formatPrice(product.price)}</strong>
    </main>
  );
}`
    },
    codeExplanation: [
      { en: "ProductPage runs in the server environment. It reads the route parameter, waits for product data, and returns markup containing the real product content. This example does not show client interactivity; an interactive purchase control would be added as a separate client boundary.", id: "ProductPage berjalan di lingkungan server. Komponen membaca parameter route, menunggu data produk, lalu menghasilkan markup yang sudah berisi konten produk. Contoh ini belum memiliki interaksi di browser; kontrol pembelian interaktif sebaiknya ditambahkan sebagai client boundary terpisah." }
    ],
    comparison: {
      headers: [{ en: "Concept", id: "Konsep" }, { en: "When HTML is produced", id: "Kapan HTML dibuat" }, { en: "Freshness model", id: "Model freshness" }],
      rows: [
        [{ en: "SSR", id: "SSR" }, { en: "At request time or from a server cache", id: "Saat request atau dari server cache" }, { en: "Can use request-time data", id: "Dapat menggunakan data request-time" }],
        [{ en: "SSG", id: "SSG" }, { en: "Ahead of requests, commonly during build", id: "Sebelum request, umumnya saat build" }, { en: "Needs rebuild or revalidation for updates", id: "Memerlukan rebuild atau revalidation untuk update" }],
        [{ en: "CSR", id: "CSR" }, { en: "Primarily in the browser", id: "Terutama di browser" }, { en: "Client requests current data", id: "Client meminta data terkini" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Public pages whose initial content changes frequently or depends on the request.", id: "Halaman publik yang konten awalnya sering berubah atau bergantung pada request." },
        { en: "Personalized pages where sending useful HTML before hydration has value.", id: "Halaman personalized ketika mengirim HTML berguna sebelum hydration memiliki nilai." },
        { en: "Routes where document metadata must be derived from current data.", id: "Route ketika metadata dokumen harus berasal dari data terkini." }
      ],
      poor: [
        { en: "Static content that can be generated once and served cheaply from a CDN.", id: "Konten statis yang dapat dibuat sekali dan disajikan murah melalui CDN." },
        { en: "Private dashboards where server HTML adds little user value but significant infrastructure cost.", id: "Dashboard privat ketika HTML server memberi sedikit nilai tetapi menambah biaya infrastruktur." },
        { en: "Slow server data paths without a caching or streaming strategy.", id: "Jalur data server yang lambat tanpa strategi caching atau streaming." }
      ]
    },
    mistakes: [
      { en: "Saying SSR always improves SEO. Search visibility also depends on content quality, semantics, metadata, links, crawl rules, structured data, and performance.", id: "Mengatakan SSR selalu meningkatkan SEO. Visibilitas pencarian juga bergantung pada kualitas konten, semantik, metadata, link, crawl rule, structured data, dan performa." },
      { en: "Ignoring hydration and shipping the same large client bundle after server rendering.", id: "Mengabaikan hydration dan tetap mengirim client bundle besar setelah server rendering." },
      { en: "Fetching data sequentially on the server and turning backend latency into a slow HTML response.", id: "Mengambil data secara berurutan di server dan mengubah latency backend menjadi response HTML yang lambat." }
    ],
    seniorPerspective: [
      { en: "SSR creates a new operational boundary. The team now owns server capacity, cache policy, invalidation, failure behavior, observability, and protection against exposing request-specific data in shared caches.", id: "SSR menciptakan boundary operasional baru. Tim kini memiliki tanggung jawab atas kapasitas server, cache policy, invalidation, failure behavior, observability, dan perlindungan agar data request-specific tidak bocor melalui shared cache." },
      { en: "The correct comparison is not SSR versus CSR for the whole application. Classify routes by public visibility, personalization, freshness, interaction, and infrastructure. Choose the least complex strategy that satisfies those constraints.", id: "Perbandingan yang tepat bukan SSR versus CSR untuk seluruh aplikasi. Klasifikasikan route berdasarkan visibilitas publik, personalisasi, freshness, interaksi, dan infrastruktur. Pilih strategi paling sederhana yang memenuhi constraint tersebut." }
    ],
    keyPoints: [
      { en: "SSR produces useful HTML on a server for a route request or cached response.", id: "SSR menghasilkan HTML berguna di server untuk request route atau response yang di-cache." },
      { en: "Rendering HTML and making it interactive are separate concerns; hydration may still be required.", id: "Menghasilkan HTML dan membuatnya interaktif adalah dua hal berbeda; hydration mungkin tetap diperlukan." },
      { en: "SSR exchanges some client startup work for server, caching, and operational complexity.", id: "SSR menukar sebagian pekerjaan startup client dengan kompleksitas server, caching, dan operasional." }
    ],
    references: [
      { label: "web.dev — Rendering on the Web", href: "https://web.dev/articles/rendering-on-the-web" },
      { label: "Next.js — Server and Client Components", href: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
      { label: "Nuxt — Rendering Modes", href: "https://nuxt.com/docs/guide/concepts/rendering" }
    ],
    related: ["csr", "csr-vs-ssr", "hydration", "ssr-ssg-isr"],
    practiceQuestions: [
      { en: "When would SSG be a better choice than SSR for a public page?", id: "Kapan SSG menjadi pilihan yang lebih baik daripada SSR untuk halaman publik?" },
      { en: "What new risks does shared caching introduce for personalized SSR output?", id: "Risiko baru apa yang muncul dari shared caching untuk output SSR yang personalized?" }
    ]
  },
  {
    slug: "hydration",
    term: "Hydration",
    category: { en: "Rendering & Runtime", id: "Rendering & Runtime" },
    title: { en: "Hydration", id: "Hydration" },
    summary: {
      en: "Hydration is the step where browser JavaScript activates HTML that was already prepared by a server or build process.",
      id: "Hydration adalah proses ketika JavaScript di browser mengaktifkan interaksi pada HTML yang sebelumnya sudah dibuat oleh server atau saat build."
    },
    readingTime: { en: "10 min", id: "10 menit" },
    keywords: ["hydration", "ssr", "react", "vue", "javascript", "mismatch"],
    question: { en: "What is hydration, and what causes a hydration mismatch?", id: "Apa itu hydration, dan apa penyebab hydration mismatch?" },
    definition: [
      { en: "A server-rendered page can look complete before its application code is ready. Hydration is the process where a framework connects its client-side component logic to that existing HTML instead of throwing the HTML away and rebuilding the page from zero.", id: "Halaman hasil server rendering dapat terlihat lengkap sebelum kode aplikasinya siap. Hydration adalah proses ketika framework menghubungkan logika komponen di browser dengan HTML yang sudah ada, tanpa membuang HTML tersebut dan membangun halaman kembali dari nol." },
      { en: "Plain links and native form behavior may work before hydration because the browser understands HTML. State updates, framework event handlers, and interactions such as opening a React modal usually wait for the relevant JavaScript.", id: "Tautan biasa dan perilaku bawaan form mungkin sudah berfungsi sebelum hydration karena browser memahami HTML. Pembaruan state, event handler dari framework, dan interaksi seperti membuka modal React biasanya harus menunggu JavaScript terkait." }
    ],
    why: [
      { en: "Server rendering can deliver readable content early, but HTML alone cannot provide every application interaction. Hydration bridges initial server output and the long-lived client application without requiring two unrelated implementations.", id: "Server rendering dapat mengirim konten yang bisa dibaca lebih awal, tetapi HTML saja tidak menyediakan semua interaksi aplikasi. Hydration menjembatani output awal server dan aplikasi client yang hidup lebih lama tanpa memerlukan dua implementasi terpisah." },
      { en: "The cost is duplicated work: a component may render on the server, its code is then downloaded, and it is processed again on the client. Modern frameworks reduce this through server components, islands, partial hydration, and selective client boundaries.", id: "Biayanya adalah pekerjaan ganda: component dapat di-render di server, code-nya kemudian diunduh, lalu diproses kembali di client. Framework modern menguranginya melalui server component, islands, partial hydration, dan selective client boundary." }
    ],
    theory: [
      { en: "The server and the browser must produce the same initial structure from the same inputs. This property is often called deterministic rendering: identical input should produce identical initial output. Time, random values, browser-only storage, different locales, or invalid HTML nesting can make the real DOM (Document Object Model) differ from what the framework expects.", id: "Server dan browser harus menghasilkan struktur awal yang sama dari input yang sama. Sifat ini sering disebut deterministic rendering: input yang sama harus menghasilkan tampilan awal yang sama. Waktu saat ini, nilai acak, localStorage, bahasa yang berbeda, atau susunan HTML yang tidak valid dapat membuat DOM (Document Object Model), yaitu struktur halaman di memori browser, berbeda dari perkiraan framework." },
      { en: "A hydration mismatch is the warning or error produced when those structures disagree. After hydration completes, later state updates follow the framework's normal client-rendering model. Hydration is therefore a transition step, not another rendering strategy beside SSR or CSR.", id: "Hydration mismatch adalah peringatan atau error yang muncul ketika struktur dari server dan browser tidak sama. Setelah hydration selesai, perubahan state berikutnya mengikuti model client rendering milik framework. Jadi, hydration merupakan tahap penghubung, bukan strategi rendering lain yang setara dengan SSR atau CSR." }
    ],
    analogy: [
      { en: "Imagine receiving a printed form with boxes already filled in. You can read the information immediately, but the form cannot respond when you press a button until someone connects it to the office's working system. Hydration is like that connection: the page is already visible, then the browser attaches the behavior that makes it interactive. It is not simply turning on a device; the existing page must match what the application expects.", id: "Bayangkan menerima formulir cetak yang sebagian isinya sudah terisi. Anda dapat langsung membacanya, tetapi formulir itu belum dapat merespons saat tombol ditekan sampai terhubung ke sistem kerja kantor. Hydration mirip dengan proses penyambungan tersebut: halaman sudah terlihat, lalu browser memasang perilaku agar halaman dapat berinteraksi. Ini bukan sekadar menyalakan perangkat; isi halaman yang sudah ada harus sesuai dengan yang diharapkan aplikasi." }
    ],
    realExample: [
      { en: "A product page arrives with its title, price, and description already visible. The Add to Cart button is also visible, but its framework click handler becomes active only after the related JavaScript hydrates. If that JavaScript is slow, the design should avoid suggesting that a control is ready while silently ignoring input.", id: "Halaman produk datang dengan judul, harga, dan deskripsi yang sudah terlihat. Tombol Add to Cart juga terlihat, tetapi click handler dari framework baru aktif setelah JavaScript terkait melakukan hydration. Jika JavaScript tersebut lambat, desain harus menghindari kesan bahwa tombol sudah siap padahal input pengguna belum dapat diproses." }
    ],
    code: {
      label: { en: "Avoiding browser-only values during the first render", id: "Menghindari value browser-only saat render pertama" },
      language: "tsx",
      value: `"use client";

import { useEffect, useState } from "react";

export function SavedPreference() {
  // Stable for the server and the client's first render.
  const [preference, setPreference] = useState("default");

  useEffect(() => {
    const saved = window.localStorage.getItem("preference");
    if (saved) setPreference(saved);
  }, []);

  return <p>Preference: {preference}</p>;
}`
    },
    codeExplanation: [
      { en: "Both the server and the browser's first render use the stable value default, so their HTML agrees. Only after the component mounts does useEffect read localStorage and apply the browser-specific preference. This may cause one intentional visual update, but it avoids making server output depend on an API that exists only in the browser.", id: "Server dan render pertama di browser sama-sama memakai nilai stabil default sehingga HTML keduanya cocok. Setelah komponen terpasang, useEffect baru membaca localStorage dan menerapkan preferensi khusus browser. Tampilan mungkin berubah satu kali secara sengaja, tetapi output server tidak dipaksa bergantung pada API yang hanya tersedia di browser." }
    ],
    comparison: {
      headers: [{ en: "Term", id: "Istilah" }, { en: "Meaning", id: "Makna" }, { en: "Main question", id: "Pertanyaan utama" }],
      rows: [
        [{ en: "SSR", id: "SSR" }, { en: "Produce HTML on a server", id: "Menghasilkan HTML di server" }, { en: "Where is initial HTML rendered?", id: "Di mana HTML awal di-render?" }],
        [{ en: "CSR", id: "CSR" }, { en: "Produce or update UI in the browser", id: "Menghasilkan atau memperbarui UI di browser" }, { en: "Where does client rendering happen?", id: "Di mana client rendering terjadi?" }],
        [{ en: "Hydration", id: "Hydration" }, { en: "Attach client behavior to existing HTML", id: "Memasang perilaku client pada HTML yang ada" }, { en: "How does pre-rendered HTML become interactive?", id: "Bagaimana HTML pre-rendered menjadi interaktif?" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Interactive components embedded in server-rendered or statically generated pages.", id: "Component interaktif dalam halaman server-rendered atau statically generated." },
        { en: "Routes that benefit from early HTML and later client-side interaction.", id: "Route yang mendapat manfaat dari HTML awal dan interaksi client setelahnya." }
      ],
      poor: [
        { en: "Static content with no client interaction; shipping hydration code adds no value.", id: "Konten statis tanpa interaksi client; mengirim code hydration tidak menambah nilai." },
        { en: "Making the entire page a client boundary when only a small widget is interactive.", id: "Menjadikan seluruh halaman client boundary ketika hanya widget kecil yang interaktif." }
      ]
    },
    mistakes: [
      { en: "Reading window, localStorage, current time, or random values directly during a render shared by server and client.", id: "Membaca window, localStorage, waktu saat ini, atau value random langsung dalam render yang dipakai server dan client." },
      { en: "Suppressing mismatch warnings without understanding the different output.", id: "Menyembunyikan warning mismatch tanpa memahami perbedaan output-nya." },
      { en: "Assuming visible server HTML means every control is already interactive.", id: "Menganggap HTML server yang terlihat berarti semua control sudah interaktif." }
    ],
    seniorPerspective: [
      { en: "Treat client JavaScript as a budget. Keep interactive boundaries narrow, prefer platform behavior for simple interactions, and measure interaction delay rather than celebrating early HTML alone.", id: "Perlakukan JavaScript client sebagai budget. Jaga interactive boundary tetap sempit, gunakan perilaku platform untuk interaksi sederhana, dan ukur interaction delay—jangan hanya merayakan HTML yang muncul lebih awal." },
      { en: "A mismatch is often evidence of an unclear ownership boundary: server state and browser state are both trying to define the same first render. Make the initial contract explicit, then apply browser-only state after mount when appropriate.", id: "Mismatch sering menjadi bukti boundary ownership yang tidak jelas: server state dan browser state sama-sama mencoba menentukan render pertama. Buat contract awal eksplisit, lalu terapkan browser-only state setelah mount jika sesuai." }
    ],
    keyPoints: [
      { en: "Hydration connects behavior to existing HTML; it does not create the original server HTML.", id: "Hydration menghubungkan perilaku ke HTML yang ada; hydration tidak membuat HTML server awal." },
      { en: "Server and client must agree on the initial rendered structure.", id: "Server dan client harus sepakat pada struktur initial render." },
      { en: "More server-rendered HTML does not automatically mean less client JavaScript.", id: "Lebih banyak HTML dari server tidak otomatis berarti lebih sedikit JavaScript client." }
    ],
    references: [
      { label: "React — hydrateRoot", href: "https://react.dev/reference/react-dom/client/hydrateRoot" },
      { label: "Vue — SSR Hydration", href: "https://vuejs.org/guide/scaling-up/ssr.html#client-hydration" },
      { label: "web.dev — Rendering on the Web", href: "https://web.dev/articles/rendering-on-the-web" }
    ],
    related: ["ssr", "csr", "server-vs-client-components", "seo-frontend"],
    practiceQuestions: [
      { en: "Why can displaying the current time during render cause a hydration mismatch?", id: "Mengapa menampilkan waktu saat ini ketika render dapat menyebabkan hydration mismatch?" },
      { en: "How would you keep a mostly static page useful without hydrating the entire document?", id: "Bagaimana menjaga halaman yang sebagian besar statis tetap berguna tanpa meng-hydrate seluruh dokumen?" }
    ]
  },
  {
    slug: "seo-frontend",
    term: "SEO",
    category: { en: "Discovery & Web Quality", id: "Discovery & Web Quality" },
    title: { en: "SEO for Frontend Engineers", id: "SEO untuk Frontend Engineer" },
    summary: {
      en: "SEO is the work of making public pages easier for search engines to discover and understand—and useful for the people who find them.",
      id: "SEO adalah upaya agar halaman publik lebih mudah ditemukan dan dipahami mesin pencari, sekaligus tetap berguna bagi orang yang membukanya."
    },
    readingTime: { en: "14 min", id: "14 menit" },
    keywords: ["seo", "search engine optimization", "metadata", "structured data", "canonical", "crawl"],
    question: { en: "What can a frontend engineer do to improve SEO?", id: "Apa yang dapat dilakukan Frontend Engineer untuk meningkatkan SEO?" },
    definition: [
      { en: "SEO stands for Search Engine Optimization. It covers the work that helps a search engine find a public page, understand what it is about, and decide when it may be useful in search results. Frontend engineering influences the HTML structure, links, metadata, rendering, mobile experience, and performance of that page.", id: "SEO merupakan singkatan dari Search Engine Optimization. SEO mencakup upaya yang membantu mesin pencari menemukan halaman publik, memahami isinya, dan menilai kapan halaman tersebut berguna dalam hasil pencarian. Frontend memengaruhi struktur HTML, tautan, metadata, cara halaman dirender, pengalaman mobile, dan performanya." },
      { en: "Metadata is information that describes the document, such as its title and summary. A canonical URL—URL stands for Uniform Resource Locator—identifies the preferred address when similar content exists at several addresses. SEO is not owned by frontend alone: content quality, user intent, backend status codes, infrastructure, and editorial decisions also matter.", id: "Metadata adalah informasi yang menjelaskan dokumen, misalnya judul dan ringkasan halaman. Canonical URL menunjukkan alamat utama ketika konten serupa tersedia melalui beberapa alamat; URL merupakan singkatan dari Uniform Resource Locator. SEO bukan tanggung jawab frontend saja; kualitas konten, kebutuhan pengguna, status code backend, infrastruktur, dan keputusan editorial juga berpengaruh." }
    ],
    why: [
      { en: "A useful public page cannot help its intended audience if that audience cannot find it. Search engines need stable addresses, links they can follow, understandable content, and clear signals about which version is the main one.", id: "Halaman publik yang berguna tidak banyak membantu jika calon pembacanya tidak dapat menemukannya. Mesin pencari membutuhkan alamat yang stabil, tautan yang dapat diikuti, konten yang dapat dipahami, serta petunjuk yang jelas mengenai versi utama suatu halaman." },
      { en: "Technical mistakes can hide otherwise strong content: an accidental noindex instruction, important text that fails when JavaScript fails, duplicate titles, a wrong canonical URL, inaccessible navigation, or an unstable page that is difficult to use.", id: "Kesalahan teknis dapat membuat konten yang baik sulit ditemukan, misalnya perintah noindex yang tidak sengaja, teks penting yang ikut hilang ketika JavaScript gagal, judul duplikat, canonical URL yang salah, navigasi yang tidak dapat diakses, atau halaman yang lambat dan tidak stabil." }
    ],
    theory: [
      { en: "A simplified search journey has five stages. Discovery finds a URL. Crawling downloads it. Rendering interprets its HTML and JavaScript. Indexing stores an understanding of the page. Ranking decides when and where it appears for a search. Internal links and sitemaps help discovery; HTTP responses and crawl rules control access; content and metadata help interpretation.", id: "Secara sederhana, perjalanan sebuah halaman di mesin pencari memiliki lima tahap. Discovery menemukan URL. Crawling mengunduhnya. Rendering membaca HTML dan JavaScript. Indexing menyimpan pemahaman mengenai halaman. Ranking menentukan kapan dan di posisi mana halaman muncul untuk suatu pencarian. Internal link dan sitemap membantu penemuan; respons HTTP serta aturan crawling mengatur akses; konten dan metadata membantu pemahaman." },
      { en: "Modern search engines can execute JavaScript, but rendering is still a resource-dependent phase. Important public content should not be unnecessarily fragile or hidden behind user interaction. Rendering strategy should support the content model rather than serve as an SEO slogan.", id: "Mesin pencari modern dapat mengeksekusi JavaScript, tetapi rendering tetap merupakan fase yang bergantung pada resource. Konten publik penting sebaiknya tidak dibuat rapuh atau tersembunyi di balik interaksi pengguna. Strategi rendering harus mendukung model konten, bukan dijadikan slogan SEO." }
    ],
    analogy: [
      { en: "Imagine donating a useful cookbook to a large library. Readers need good recipes, but they also need a clear title, accurate catalog details, a reliable shelf location, and signs that help them discover it. SEO is the work of making a page useful and easy to understand and find. Server rendering can help deliver the book clearly, but it cannot make poor recipes valuable.", id: "Bayangkan menyumbangkan buku resep yang berguna ke perpustakaan besar. Pembaca membutuhkan resep yang baik, tetapi juga judul yang jelas, informasi katalog yang benar, lokasi rak yang tetap, dan petunjuk agar buku mudah ditemukan. SEO adalah usaha membuat halaman berguna, mudah dipahami, dan mudah ditemukan. Server rendering dapat membantu mengirim halaman dengan jelas, tetapi tidak dapat membuat isi yang buruk menjadi bernilai." }
    ],
    realExample: [
      { en: "For a public job-detail page, frontend may provide a descriptive title, one H1, semantic job content, canonical URL, JobPosting structured data, accessible internal links, useful empty or expired states, mobile layout, and server or static HTML. Backend and platform work still determine accurate status codes, sitemap generation, and deployment behavior.", id: "Untuk halaman detail lowongan publik, frontend dapat menyediakan title deskriptif, satu H1, konten lowongan semantik, canonical URL, structured data JobPosting, internal link aksesibel, state kosong atau kedaluwarsa yang berguna, mobile layout, serta HTML server atau statis. Pekerjaan backend dan platform tetap menentukan status code akurat, pembuatan sitemap, dan perilaku deployment." }
    ],
    code: {
      label: { en: "Document metadata and structured data", id: "Metadata dokumen dan structured data" },
      language: "tsx",
      value: `export async function generateMetadata({ params }: PageProps) {
  const job = await getJob((await params).slug);

  return {
    title: \`${"${job.title} — ${job.company}"}\`,
    description: job.summary,
    alternates: { canonical: \`/jobs/${"${job.slug}"}\` },
  };
}

// Structured data must describe content users can actually see.
const jobPosting = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: job.title,
  description: job.description,
};`
    },
    codeExplanation: [
      { en: "generateMetadata produces a unique title, description, and canonical URL for the job page. The JobPosting object describes the same job in a machine-readable format. Structured data must match what users can actually see; it describes the page rather than manufacturing relevance.", id: "generateMetadata menghasilkan judul, deskripsi, dan canonical URL yang khusus untuk halaman lowongan tersebut. Object JobPosting menjelaskan lowongan yang sama dalam format yang dapat dibaca mesin. Structured data harus sesuai dengan informasi yang benar-benar terlihat oleh pengguna; fungsinya menjelaskan halaman, bukan menciptakan relevansi secara instan." }
    ],
    comparison: {
      headers: [{ en: "Often confused", id: "Sering tertukar" }, { en: "Actual role", id: "Peran sebenarnya" }, { en: "What it does not guarantee", id: "Yang tidak dijamin" }],
      rows: [
        [{ en: "SSR", id: "SSR" }, { en: "Can deliver meaningful HTML at request time", id: "Dapat mengirim HTML bermakna saat request" }, { en: "Ranking or high-quality content", id: "Ranking atau konten berkualitas" }],
        [{ en: "Metadata", id: "Metadata" }, { en: "Describes a document for search and sharing", id: "Mendeskripsikan dokumen untuk pencarian dan sharing" }, { en: "That weak page content becomes useful", id: "Konten halaman lemah menjadi berguna" }],
        [{ en: "Performance", id: "Performa" }, { en: "Improves user experience and removes technical friction", id: "Meningkatkan user experience dan mengurangi friction teknis" }, { en: "Search demand or authority", id: "Search demand atau authority" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Every public page intended to be discovered or shared.", id: "Setiap halaman publik yang ditujukan untuk ditemukan atau dibagikan." },
        { en: "Content, product, commerce, job, profile, and documentation pages.", id: "Halaman konten, produk, commerce, lowongan, profile, dan dokumentasi." },
        { en: "Migration or redesign work where URL and metadata regressions are possible.", id: "Pekerjaan migrasi atau redesign ketika regresi URL dan metadata dapat terjadi." }
      ],
      poor: [
        { en: "Private authenticated screens that search engines cannot and should not access.", id: "Layar privat terautentikasi yang tidak dapat dan tidak seharusnya diakses mesin pencari." },
        { en: "Adding schema markup that does not match visible page content.", id: "Menambahkan schema markup yang tidak sesuai dengan konten halaman yang terlihat." },
        { en: "Optimizing superficial scores while ignoring whether the page answers user intent.", id: "Mengoptimalkan skor permukaan sambil mengabaikan apakah halaman menjawab intent pengguna." }
      ]
    },
    mistakes: [
      { en: "Claiming SEO is solved by Next.js, Nuxt, or SSR. Frameworks provide mechanisms; teams must still implement correct content, metadata, links, and operational behavior.", id: "Mengklaim SEO selesai karena memakai Next.js, Nuxt, atau SSR. Framework menyediakan mekanisme; tim tetap harus mengimplementasikan konten, metadata, link, dan perilaku operasional dengan benar." },
      { en: "Using div click handlers for navigation instead of crawlable, accessible links.", id: "Menggunakan click handler pada div untuk navigasi alih-alih link yang crawlable dan aksesibel." },
      { en: "Changing URL structures without redirect and canonical planning.", id: "Mengubah struktur URL tanpa perencanaan redirect dan canonical." }
    ],
    seniorPerspective: [
      { en: "Treat SEO requirements as product requirements for public routes. Define ownership across content, frontend, backend, and platform teams; automate checks for metadata and crawl rules; and monitor organic landing pages after releases.", id: "Perlakukan kebutuhan SEO sebagai product requirement untuk route publik. Tentukan ownership lintas tim content, frontend, backend, dan platform; otomasi pemeriksaan metadata serta crawl rule; dan pantau organic landing page setelah release." },
      { en: "The technical decision is broader than SSR versus CSR. Consider content freshness, URL lifecycle, internationalization, duplicate content, pagination, redirects, structured data accuracy, performance budgets, and failure behavior.", id: "Keputusan teknisnya lebih luas daripada SSR versus CSR. Pertimbangkan freshness konten, lifecycle URL, internationalization, duplicate content, pagination, redirect, akurasi structured data, performance budget, dan failure behavior." }
    ],
    keyPoints: [
      { en: "Frontend owns important technical SEO mechanisms but not SEO outcomes alone.", id: "Frontend memiliki banyak mekanisme technical SEO penting, tetapi tidak memiliki hasil SEO sendirian." },
      { en: "Semantic HTML, stable URLs, metadata, links, crawl controls, and performance work together.", id: "HTML semantik, URL stabil, metadata, link, crawl control, dan performa bekerja bersama." },
      { en: "SSR can support SEO delivery, but it is neither required for every page nor a ranking guarantee.", id: "SSR dapat mendukung delivery SEO, tetapi tidak wajib untuk setiap halaman dan tidak menjamin ranking." }
    ],
    references: [
      { label: "Google Search Central — SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google Search Central — JavaScript SEO", href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
      { label: "web.dev — Learn Performance", href: "https://web.dev/learn/performance" },
      { label: "Schema.org", href: "https://schema.org/" }
    ],
    related: ["ssr", "csr", "hydration", "ssr-ssg-isr", "nextjs-vs-nuxt"],
    practiceQuestions: [
      { en: "A public page already uses SSR. What SEO problems could still remain?", id: "Sebuah halaman publik sudah menggunakan SSR. Masalah SEO apa yang masih mungkin terjadi?" },
      { en: "Which SEO responsibilities belong to frontend, and which require other teams?", id: "Tanggung jawab SEO mana yang dimiliki frontend, dan mana yang membutuhkan tim lain?" }
    ]
  }
];

const analogyBridges: Record<string, { conclusion: Localized; mapping: Localized }> = {
  csr: {
    conclusion: { en: "You wait longer before using the desk because you assemble it at home. Once it is ready, you can change it without asking the shop to build another one.", id: "Meja belum bisa langsung dipakai karena kamu harus merakitnya di rumah. Setelah selesai, kamu bisa mengubah susunannya tanpa meminta toko membuat meja baru." },
    mapping: { en: "The delivered parts are the HTML, CSS, and JavaScript files. Your home is the browser, and assembling the desk is the browser building the interface. Unlike furniture, the browser follows program instructions and may request data while it works.", id: "Bagian meja yang dikirim adalah file HTML, CSS, dan JavaScript. Rumahmu adalah browser, sedangkan proses merakit meja adalah proses browser membentuk tampilan. Bedanya, browser mengikuti instruksi program dan mungkin mengambil data saat bekerja." }
  },
  ssr: {
    conclusion: { en: "The customer receives something useful immediately after delivery, but delivery cannot start until the kitchen finishes preparing it.", id: "Begitu pesanan tiba, pelanggan bisa langsung menikmatinya. Namun, pesanan belum bisa dikirim sebelum dapur selesai menyiapkannya." },
    mapping: { en: "The kitchen is the server, the prepared meal is the initial HTML, and delivery is the server response. SSR prepares HTML for a request before sending it; later browser interaction and caching are separate concerns.", id: "Dapur mewakili server, makanan siap santap mewakili HTML awal, dan pengiriman mewakili respons server. SSR menyiapkan HTML sebelum mengirim respons; interaksi di browser dan caching adalah urusan berikutnya." }
  },
  hydration: {
    conclusion: { en: "The form is readable from the start, but its controls work only after they are connected to the office system.", id: "Formulirnya sudah bisa dibaca sejak awal, tetapi tombolnya baru berfungsi setelah terhubung ke sistem kantor." },
    mapping: { en: "The printed form is server-rendered HTML. Connecting its controls represents JavaScript attaching behavior to the existing page. Hydration also checks that the browser's expected structure matches the HTML already present.", id: "Formulir cetak mewakili HTML dari server. Menyambungkan tombol mewakili JavaScript yang memasang perilaku pada halaman yang sudah ada. Saat hydration, struktur yang diharapkan aplikasi juga harus cocok dengan HTML tersebut." }
  },
  "seo-frontend": {
    conclusion: { en: "A useful book still needs clear catalog information and a stable place so readers can discover it. Good labels cannot rescue a book that does not help them.", id: "Buku yang bagus tetap butuh data katalog yang jelas dan lokasi yang tetap agar mudah ditemukan. Namun, label yang rapi tidak bisa menyelamatkan buku yang isinya tidak berguna." },
    mapping: { en: "The book is the page content; its title and catalog record are metadata; its shelf location is the URL; references from other books are links. Search engines use these signals, but no rendering method guarantees ranking.", id: "Buku mewakili isi halaman; judul dan data katalog mewakili metadata; lokasi rak mewakili URL; rujukan dari buku lain mewakili link. Mesin pencari memakai berbagai petunjuk ini, tetapi tidak ada cara rendering yang otomatis menjamin ranking." }
  },
  "react-vs-vue": {
    conclusion: { en: "Both restaurants can serve good meals. One asks the owner to choose more of the operating system, while the other provides more agreed-upon routines from the start.", id: "Kedua restoran sama-sama bisa menyajikan makanan dengan baik. Bedanya, pilihan pertama meminta pemilik menentukan lebih banyak hal sendiri, sedangkan pilihan kedua sudah menyediakan lebih banyak cara kerja sejak awal." },
    mapping: { en: "The first restaurant represents React's broader ecosystem choices. The second represents Vue's more coordinated official conventions. Both still provide component models and strong conventions; the analogy describes the balance of choice and guidance, not runtime performance.", id: "Restoran pertama mewakili ekosistem React yang memberi lebih banyak pilihan. Restoran kedua mewakili Vue dengan jalur resmi yang lebih terkoordinasi. Keduanya tetap punya component model dan konvensi; analogi ini membahas pilihan dan panduan, bukan membandingkan performa runtime." }
  },
  "nextjs-vs-nuxt": {
    conclusion: { en: "The handbook coordinates the whole restaurant instead of replacing the kitchen. Different handbooks can solve similar needs while using different rules.", id: "Buku panduan mengatur cara seluruh restoran bekerja, bukan menggantikan dapurnya. Dua panduan bisa menyelesaikan kebutuhan yang mirip dengan aturan yang berbeda." },
    mapping: { en: "The kitchen foundation is React or Vue. The operating handbook is Next.js or Nuxt, which adds routing, rendering, data loading, server features, and build conventions. Similar feature names do not mean both frameworks behave identically.", id: "Fondasi dapurnya adalah React atau Vue. Buku panduan operasionalnya adalah Next.js atau Nuxt, yang menambahkan routing, rendering, data loading, fitur server, dan aturan build. Nama fitur yang mirip tidak berarti cara kerjanya selalu sama." }
  },
  "csr-vs-ssr": {
    conclusion: { en: "A ready meal moves preparation to the restaurant; an ingredient box moves preparation to the customer's home. The choice changes what the customer waits for first.", id: "Makanan siap santap membuat restoran mengerjakan persiapannya. Paket bahan membuat pelanggan menyiapkannya di rumah. Pilihan ini mengubah pekerjaan apa yang harus selesai lebih dulu sebelum pelanggan bisa menikmati hasilnya." },
    mapping: { en: "The ready meal represents SSR preparing initial HTML on the server. The ingredient box represents CSR sending application files for the browser to assemble. Both can become interactive; they differ mainly in where initial rendering happens.", id: "Makanan siap santap mewakili SSR yang menyiapkan HTML awal di server. Paket bahan mewakili CSR yang mengirim file aplikasi untuk dirakit browser. Keduanya bisa interaktif; perbedaan utamanya adalah tempat rendering awal dilakukan." }
  },
  "ssr-ssg-isr": {
    conclusion: { en: "A made-to-order cake is fresh for one request, a prepared cake is available immediately, and a replaced display cake balances speed with freshness.", id: "Kue pesanan dibuat khusus saat diminta, kue yang sudah disiapkan bisa langsung diambil, dan kue etalase yang diganti berkala mencoba menjaga kecepatan sekaligus kesegaran." },
    mapping: { en: "Made-to-order is SSR, preparation before opening is SSG, and replacing prepared stock later is ISR. The bakery illustrates timing, but actual regeneration depends on framework caching and a supporting runtime.", id: "Kue yang dibuat saat dipesan mewakili SSR, persiapan sebelum toko buka mewakili SSG, dan mengganti stok yang sudah tersedia mewakili ISR. Toko roti hanya menjelaskan waktunya; proses regeneration sebenarnya bergantung pada cache framework dan runtime yang mendukungnya." }
  },
  "server-vs-client-components": {
    conclusion: { en: "The kitchen handles private preparation; the dining room handles direct requests from guests. Only things that can be carried safely move between them.", id: "Dapur menangani persiapan yang tidak dilihat pelanggan, sedangkan ruang makan menangani permintaan langsung dari pelanggan. Hanya hal yang aman dibawa yang berpindah di antara keduanya." },
    mapping: { en: "The kitchen represents Server Components with server-only data access. The dining room represents Client Components that handle browser interaction. The carried dish represents serializable data crossing the boundary; it does not mean components run in physical rooms.", id: "Dapur mewakili Server Components yang bisa mengakses data khusus server. Ruang makan mewakili Client Components yang menangani interaksi di browser. Hidangan yang dibawa mewakili data yang bisa diserialisasi saat melewati batas; tentu komponennya tidak benar-benar berjalan di ruangan fisik." }
  },
  "client-vs-server-state": {
    conclusion: { en: "You can change your own desk note whenever you want. A copied stock sheet may already be wrong because someone else controls the real inventory.", id: "Catatan di mejamu bisa langsung kamu ubah. Salinan stok gudang mungkin sudah tidak akurat karena stok aslinya dikelola dan bisa diubah oleh orang lain." },
    mapping: { en: "The desk note is client state owned by the current interface. The warehouse record is server state, and the local copy is cached remote data that may need refetching, synchronization, or invalidation.", id: "Catatan meja mewakili client state yang dimiliki tampilan saat ini. Data gudang mewakili server state, sedangkan salinannya di meja adalah data remote yang di-cache dan mungkin perlu diambil ulang, disinkronkan, atau dianggap kedaluwarsa." }
  },
  "context-vs-state-management": {
    conclusion: { en: "One announcement works for a simple message. Busy operations need a board where people can follow only the information they need and see how it changes.", id: "Satu pengumuman cukup untuk informasi sederhana. Operasional yang sibuk membutuhkan papan agar setiap orang bisa melihat informasi yang dibutuhkan dan mengikuti perubahannya." },
    mapping: { en: "The announcement represents Context broadcasting a value to consumers. The operations board represents a dedicated store with selectors, structured updates, and debugging tools. Context is not inherently wrong for changing data; the choice depends on update patterns and required control.", id: "Pengumuman mewakili Context yang membagikan nilai ke komponen pemakainya. Papan operasional mewakili store khusus dengan selector, aturan update, dan alat debugging. Context bukan berarti salah untuk data yang berubah; pilihannya bergantung pada pola update dan kendali yang dibutuhkan." }
  },
  "feature-vs-layer-architecture": {
    conclusion: { en: "Sorting every tool by type makes the workshop easy to inspect. Keeping tools near each product makes one order easier to complete. Each layout optimizes a different kind of work.", id: "Menyimpan alat berdasarkan jenis membuat isi bengkel mudah diperiksa. Menaruh alat di dekat produk membuat satu pesanan lebih cepat diselesaikan. Setiap susunan memudahkan jenis pekerjaan yang berbeda." },
    mapping: { en: "Tool rooms represent layer-based folders grouped by technical role. Product workbenches represent feature-based modules that keep related UI, logic, data access, and tests together. Shared machines represent genuinely shared infrastructure.", id: "Ruangan alat mewakili folder layer-based yang dikelompokkan berdasarkan peran teknis. Meja kerja produk mewakili modul feature-based yang menyatukan UI, logic, akses data, dan test terkait. Mesin bersama mewakili infrastruktur yang memang dipakai banyak fitur." }
  }
};

export const frontendKnowledge: KnowledgeEntry[] = [
  ...foundationKnowledge,
  ...batchOneKnowledge,
  ...javascriptFundamentals,
].map((entry) => {
  if (entry.analogyConclusion && entry.analogyMapping) {
    return entry;
  }
  const bridge = analogyBridges[entry.slug];
  return {
    ...entry,
    analogyConclusion: [bridge.conclusion],
    analogyMapping: [bridge.mapping]
  };
});

export function getKnowledgeEntry(slug: string) {
  return frontendKnowledge.find((entry) => entry.slug === slug);
}
