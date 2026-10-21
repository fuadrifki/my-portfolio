import type { KnowledgeEntry } from "@/data/frontend-knowledge";

export const batchOneKnowledge: KnowledgeEntry[] = [
  {
    slug: "react-vs-vue",
    term: "React vs Vue",
    category: { en: "Frameworks", id: "Framework" },
    title: { en: "React vs Vue: Different Mental Models", id: "React vs Vue: Perbedaan Model Mental" },
    summary: {
      en: "A practical comparison of two component-based UI technologies, focusing on reactivity, component authoring, ecosystem choices, and long-term team fit.",
      id: "Perbandingan praktis dua teknologi UI berbasis komponen, dengan fokus pada reactivity, cara menulis komponen, pilihan ekosistem, dan kecocokannya bagi tim dalam jangka panjang."
    },
    readingTime: { en: "16 min", id: "16 menit" },
    keywords: ["react vs vue", "jsx", "template", "hooks", "composition api", "reactivity", "virtual dom", "ui library"],
    question: { en: "What is the difference between React and Vue, and how would you choose?", id: "Apa perbedaan React dan Vue, dan bagaimana Anda memilih salah satunya?" },
    definition: [
      { en: "React is a library for building user interfaces from components. It provides the component and rendering model, while routing, data fetching, and broader application structure are selected separately or supplied by a framework such as Next.js.", id: "React adalah library untuk membangun antarmuka dari komponen. React menyediakan model komponen dan rendering, sedangkan routing, data fetching, serta struktur aplikasi yang lebih luas dipilih secara terpisah atau disediakan framework seperti Next.js." },
      { en: "Vue is a progressive JavaScript framework whose core also focuses on UI. It includes a reactivity system—a mechanism that tracks data used by the interface and determines which work must run when that data changes. Its official ecosystem also includes Vue Router and Pinia. Next.js and Nuxt belong to a broader application-framework layer, so they are not direct replacements for React and Vue.", id: "Vue adalah framework JavaScript progresif yang inti utamanya juga berfokus pada UI. Vue memiliki sistem reactivity, yaitu mekanisme yang melacak data yang digunakan antarmuka lalu menentukan pekerjaan apa yang perlu dijalankan ketika data berubah. Ekosistem resminya juga mencakup Vue Router dan Pinia. Next.js dan Nuxt berada pada lapisan framework aplikasi yang lebih luas, sehingga bukan pembanding langsung bagi React dan Vue." }
    ],
    why: [
      { en: "The choice affects how developers express UI, trace updates, share logic, select libraries, test components, and onboard new team members. Migration cost grows once a product has many components and ecosystem integrations.", id: "Pilihan ini memengaruhi cara developer menyusun UI, menelusuri pembaruan state, berbagi logic, memilih library, menguji komponen, dan melakukan onboarding. Biaya migrasi akan membesar setelah produk memiliki banyak komponen dan integrasi." }
    ],
    theory: [
      { en: "After a React state update, React runs the relevant component functions again to produce a new description of the UI. Reconciliation is the comparison process React uses to decide which DOM changes are actually needed; rerunning a component does not mean replacing the entire page.", id: "Setelah state React berubah, React menjalankan kembali fungsi komponen yang relevan untuk menghasilkan gambaran UI terbaru. React kemudian melakukan reconciliation, yaitu membandingkan hasil baru dengan hasil sebelumnya untuk menentukan perubahan DOM yang benar-benar diperlukan. Menjalankan ulang komponen tidak berarti mengganti seluruh halaman." },
      { en: "Vue wraps reactive values with refs or proxies and records which reactive values are read by a computed value, component, or watcher. When a tracked value changes, Vue schedules the affected work. Single-File Components commonly place template, script, and style in one file while keeping their roles visibly separated.", id: "Vue membungkus nilai reactive dengan ref atau proxy, lalu mencatat nilai mana yang dibaca oleh computed, komponen, atau watcher. Ketika nilai yang terlacak berubah, Vue menjadwalkan pekerjaan yang terdampak. Single-File Component biasanya menempatkan template, script, dan style dalam satu file sambil tetap memisahkan perannya dengan jelas." }
    ],
    analogy: [
      { en: "Imagine you are opening a restaurant. With the first approach, you decide almost everything yourself: how customers place orders, how the kitchen receives them, how staff divide their work, and how payments are handled. You have more freedom to shape the restaurant around your needs, but you also have more decisions to make. With the second approach, you start with an established restaurant system that already provides ways to manage orders, organize staff, and handle payments. You can still adjust it, but you do not have to work everything out from scratch. React and Vue make a similar trade-off between freedom and guidance. Neither approach is always better.", id: "Bayangkan kamu sedang membuka restoran. Dengan pilihan pertama, kamu menentukan hampir semuanya sendiri: bagaimana pelanggan memesan, bagaimana pesanan diteruskan ke dapur, bagaimana tugas pegawai dibagi, dan bagaimana pembayaran diatur. Kamu lebih bebas menyesuaikan restoran dengan kebutuhanmu, tetapi keputusan yang harus dibuat juga lebih banyak. Dengan pilihan kedua, kamu memakai sistem restoran yang sudah punya cara kerja untuk menerima pesanan, membagi tugas, dan mengatur pembayaran. Sistem itu tetap bisa disesuaikan, tetapi kamu tidak perlu memulai semuanya dari nol. React dan Vue memiliki perbedaan serupa dalam hal kebebasan dan panduan. Tidak ada pendekatan yang selalu paling baik." }
    ],
    realExample: [
      { en: "For a logistics dashboard, both can implement filters, tables, forms, and real-time status. React may align with an existing React Native or Next.js organization. Vue may reduce local ceremony for a team already productive with templates, composables, Vue Router, and Pinia. The existing system and team usually matter more than a small synthetic performance difference.", id: "Untuk dashboard logistik, keduanya mampu menangani filter, tabel, formulir, dan status real-time. React dapat lebih sesuai bila organisasi sudah memakai React Native atau Next.js. Vue dapat lebih efisien bagi tim yang terbiasa dengan template, composable, Vue Router, dan Pinia. Kondisi sistem dan kemampuan tim biasanya lebih menentukan daripada selisih kecil pada benchmark sintetis." }
    ],
    code: {
      label: { en: "Equivalent derived UI", id: "UI turunan yang setara" }, language: "tsx",
      value: `// React
function Price({ amount, tax }: Props) {
  const total = amount * (1 + tax);
  return <strong>{formatCurrency(total)}</strong>;
}

// Vue <script setup>
const props = defineProps<{ amount: number; tax: number }>();
const total = computed(() => props.amount * (1 + props.tax));`
    },
    codeExplanation: [
      { en: "Both examples calculate total from amount and tax rather than storing a second copy of that value. React recalculates it when the component function runs. Vue's computed tracks the props it reads and recalculates when either dependency changes. The user sees the same result, but the update model is expressed differently.", id: "Kedua contoh menghitung total dari amount dan tax, bukan menyimpan salinan nilai total sebagai state baru. React menghitungnya kembali ketika fungsi komponen dijalankan. computed pada Vue melacak props yang dibaca lalu menghitung ulang ketika salah satu dependency berubah. Hasil bagi pengguna sama, tetapi model pembaruannya dinyatakan dengan cara berbeda." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "React", id: "React" }, { en: "Vue", id: "Vue" }],
      rows: [
        [{ en: "Primary authoring model", id: "Model penulisan utama" }, { en: "JavaScript/TypeScript with JSX", id: "JavaScript/TypeScript dengan JSX" }, { en: "Templates in SFCs; JSX is also possible", id: "Template dalam SFC; JSX juga dapat digunakan" }],
        [{ en: "Update model", id: "Model pembaruan" }, { en: "State update reruns component rendering", id: "Pembaruan state menjalankan kembali render komponen" }, { en: "Tracked reactive dependencies trigger affected work", id: "Dependency reactive yang terlacak memicu pekerjaan terkait" }],
        [{ en: "Logic reuse", id: "Berbagi logic" }, { en: "Hooks", id: "Hooks" }, { en: "Composables", id: "Composable" }],
        [{ en: "Official scope", id: "Cakupan resmi" }, { en: "Smaller core; broad third-party choices", id: "Core lebih kecil; pilihan pihak ketiga luas" }, { en: "Coordinated official router and state options", id: "Router dan state management resmi yang terkoordinasi" }],
        [{ en: "Typical risk", id: "Risiko umum" }, { en: "Inconsistent architecture from too many choices", id: "Arsitektur tidak konsisten karena terlalu banyak pilihan" }, { en: "Incorrect assumptions that conventions remove design decisions", id: "Mengira konvensi menghilangkan kebutuhan mengambil keputusan desain" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Choose React when its ecosystem, staffing pool, React Native sharing, or an existing React platform is a strong constraint.", id: "Pilih React ketika ekosistem, ketersediaan talenta, kebutuhan berbagi dengan React Native, atau platform React yang sudah ada menjadi pertimbangan utama." },
        { en: "Choose Vue when the team values SFC templates, its reactivity model, and a more coordinated official ecosystem.", id: "Pilih Vue ketika tim mengutamakan template SFC, model reactivity Vue, dan ekosistem resmi yang lebih terkoordinasi." }
      ],
      poor: [
        { en: "Rewriting a stable product only because another framework is currently popular.", id: "Menulis ulang produk yang stabil hanya karena framework lain sedang populer." },
        { en: "Choosing from bundle-size or benchmark numbers without measuring the intended application.", id: "Memilih berdasarkan ukuran bundle atau benchmark tanpa mengukur aplikasi yang akan dibangun." }
      ]
    },
    mistakes: [
      { en: "Comparing JSX with HTML and concluding one framework is more capable. Authoring syntax is not the runtime architecture.", id: "Membandingkan JSX dengan HTML lalu menyimpulkan salah satunya lebih mampu. Sintaks penulisan bukanlah keseluruhan arsitektur runtime." },
      { en: "Treating Vue reactivity as magic or React rerenders as DOM replacement. Both frameworks schedule work and update the DOM selectively.", id: "Menganggap reactivity Vue sebagai sihir atau render ulang React sebagai penggantian seluruh DOM. Keduanya menjadwalkan pekerjaan dan memperbarui DOM secara selektif." }
    ],
    seniorPerspective: [
      { en: "A senior recommendation includes migration cost, library maturity for the domain, observability, test strategy, upgrade ownership, team learning curve, and the cost of operating two stacks. The best technical choice can be the one the organization can maintain predictably.", id: "Rekomendasi senior perlu memperhitungkan biaya migrasi, kematangan library sesuai domain, observability, strategi testing, kepemilikan proses upgrade, kurva belajar tim, dan biaya menjalankan dua stack. Pilihan teknis terbaik sering kali adalah pilihan yang dapat dipelihara organisasi secara konsisten." }
    ],
    keyPoints: [
      { en: "React and Vue solve similar UI problems with different authoring and reactivity models.", id: "React dan Vue menyelesaikan masalah UI yang serupa dengan model penulisan dan reactivity yang berbeda." },
      { en: "Framework choice is an organizational and maintenance decision, not only a syntax preference.", id: "Pemilihan framework merupakan keputusan organisasi dan pemeliharaan, bukan sekadar preferensi sintaks." }
    ],
    references: [
      { label: "React — Thinking in React", href: "https://react.dev/learn/thinking-in-react" },
      { label: "React — Render and Commit", href: "https://react.dev/learn/render-and-commit" },
      { label: "Vue — Introduction", href: "https://vuejs.org/guide/introduction.html" },
      { label: "Vue — Reactivity in Depth", href: "https://vuejs.org/guide/extras/reactivity-in-depth.html" }
    ],
    related: ["nextjs-vs-nuxt", "server-vs-client-components", "client-vs-server-state"],
    practiceQuestions: [
      { en: "Which constraints in your current product would matter more than framework syntax?", id: "Kendala apa dalam produk Anda yang lebih penting daripada perbedaan sintaks framework?" },
      { en: "How would you explain React rerendering and Vue dependency tracking without claiming either is always faster?", id: "Bagaimana Anda menjelaskan render ulang React dan dependency tracking Vue tanpa menyatakan salah satunya selalu lebih cepat?" }
    ]
  },
  {
    slug: "nextjs-vs-nuxt",
    term: "Next.js vs Nuxt",
    category: { en: "Frameworks", id: "Framework" },
    title: { en: "Next.js vs Nuxt: Application Frameworks", id: "Next.js vs Nuxt: Framework Aplikasi" },
    summary: {
      en: "A comparison of React- and Vue-based application frameworks across routing, rendering, data fetching, server capabilities, deployment, and conventions.",
      id: "Perbandingan framework aplikasi berbasis React dan Vue dari sisi routing, rendering, data fetching, kemampuan server, deployment, serta konvensi."
    },
    readingTime: { en: "17 min", id: "17 menit" },
    keywords: ["next vs nuxt", "next.js vs nuxt", "react framework", "vue framework", "app router", "nitro", "server rendering"],
    question: { en: "How are Next.js and Nuxt different from React and Vue?", id: "Apa perbedaan Next.js dan Nuxt dibanding React dan Vue?" },
    definition: [
      { en: "Next.js is an application framework built on React. It adds decisions and tools that React alone does not define: file-based routing, layouts, data loading, server and client boundaries, backend route handlers, caching, and deployment output.", id: "Next.js adalah framework aplikasi yang dibangun di atas React. Next.js menambahkan keputusan dan fasilitas yang tidak ditentukan React sendiri, seperti routing berbasis file, layout, data loading, batas server-client, route handler untuk backend, caching, dan hasil deployment." },
      { en: "Nuxt is an application framework built on Vue. It adds file-based routing, automatic imports, data-fetching utilities, server routes through its Nitro server engine, a module system, and several rendering modes. React and Vue define the UI foundation; Next.js and Nuxt coordinate the larger application around that foundation.", id: "Nuxt adalah framework aplikasi yang dibangun di atas Vue. Nuxt menambahkan routing berbasis file, auto-import, utilitas data fetching, server route melalui server engine Nitro, sistem module, dan beberapa mode rendering. React serta Vue menjadi fondasi UI, sedangkan Next.js dan Nuxt mengatur aplikasi yang lebih luas di atas fondasi tersebut." }
    ],
    why: [
      { en: "A UI library alone does not settle routing, document metadata, server rendering, data serialization, code splitting, or deployment output. Application frameworks coordinate these concerns so teams do not design every integration independently.", id: "Library UI saja belum menentukan routing, metadata dokumen, server rendering, serialisasi data, code splitting, atau hasil deployment. Framework aplikasi mengoordinasikan kebutuhan tersebut agar tim tidak merancang seluruh integrasi dari awal." }
    ],
    theory: [
      { en: "Both frameworks compile a project into client assets and, depending on configuration, server or prerendered output. File placement becomes part of the public architecture: page files create routes, layouts define shared UI, and server files define backend behavior.", id: "Keduanya mengompilasi project menjadi asset client dan, sesuai konfigurasi, output server atau halaman hasil prerender. Lokasi file menjadi bagian dari arsitektur publik: file halaman membentuk route, layout mendefinisikan UI bersama, dan file server menentukan perilaku backend." },
      { en: "Their similar feature labels can hide different mental models. Next App Router centers React Server Components and explicit client boundaries. Nuxt builds on Vue SFCs, composables, Nitro, and route rules. Exact caching and deployment behavior must be read from the versioned documentation.", id: "Nama fitur yang serupa dapat menyembunyikan model mental yang berbeda. Next App Router berpusat pada React Server Components dan batas client yang eksplisit. Nuxt dibangun di atas Vue SFC, composable, Nitro, dan route rules. Perilaku caching serta deployment harus selalu diperiksa pada dokumentasi versi yang digunakan." }
    ],
    analogy: [
      { en: "Imagine that your restaurant has grown. You can keep deciding every task yourself, or you can adopt an established operating handbook that explains how orders arrive, how rooms are arranged, how food is prepared, and how it reaches customers. The handbook does not replace the kitchen; it coordinates the whole restaurant. Next.js does this around React, and Nuxt does it around Vue. Their real rules are still different and must be checked in their own documentation.", id: "Bayangkan restoran Anda semakin besar. Anda dapat terus menentukan setiap pekerjaan sendiri, atau memakai buku panduan operasional yang menjelaskan bagaimana pesanan masuk, ruangan ditata, makanan disiapkan, dan hasilnya sampai ke pelanggan. Buku panduan tidak menggantikan dapur; ia mengoordinasikan seluruh restoran. Next.js melakukan hal serupa di sekitar React, sedangkan Nuxt di sekitar Vue. Aturan sebenarnya tetap berbeda dan perlu diperiksa di dokumentasi masing-masing." }
    ],
    realExample: [
      { en: "A commerce site needs public catalog pages, authenticated account screens, metadata, server-side secrets, and webhook endpoints. Next or Nuxt can combine those needs in one repository, but the hosting target must support the selected runtime. A static export cannot execute request-time SSR or ISR after deployment.", id: "Situs commerce membutuhkan katalog publik, halaman akun, metadata, secret di server, dan endpoint webhook. Next atau Nuxt dapat menggabungkan kebutuhan tersebut dalam satu repository, tetapi target hosting harus mendukung runtime yang dipilih. Static export tidak dapat menjalankan SSR per request atau ISR setelah deployment." }
    ],
    code: {
      label: { en: "Equivalent file-based product routes", id: "Route produk berbasis file" }, language: "text",
      value: `Next.js App Router
app/products/[slug]/page.tsx
app/products/[slug]/layout.tsx

Nuxt
pages/products/[slug].vue
layouts/default.vue

// Similar route outcome; different component and data-loading models.`
    },
    codeExplanation: [
      { en: "Both folder structures create a dynamic product-detail route from a slug. The similarity ends at the URL shape: the page component format, server-client boundary, data-loading APIs, caching behavior, and build output follow each framework's own model.", id: "Kedua struktur folder menghasilkan route detail produk dinamis dari sebuah slug. Kesamaannya berhenti pada bentuk URL. Format komponen halaman, batas server-client, API data loading, perilaku caching, dan output build mengikuti model masing-masing framework." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "Next.js", id: "Next.js" }, { en: "Nuxt", id: "Nuxt" }],
      rows: [
        [{ en: "UI foundation", id: "Fondasi UI" }, { en: "React", id: "React" }, { en: "Vue", id: "Vue" }],
        [{ en: "Current primary router", id: "Router utama saat ini" }, { en: "App Router with Server Components", id: "App Router dengan Server Components" }, { en: "File-based Vue Router integration", id: "Integrasi Vue Router berbasis file" }],
        [{ en: "Server layer", id: "Lapisan server" }, { en: "Route Handlers and Server Functions", id: "Route Handler dan Server Function" }, { en: "Nitro server routes and middleware", id: "Server route dan middleware melalui Nitro" }],
        [{ en: "Data model", id: "Model data" }, { en: "Async Server Components and fetch/framework APIs", id: "Async Server Components dan API fetch/framework" }, { en: "useFetch, useAsyncData, and $fetch", id: "useFetch, useAsyncData, dan $fetch" }],
        [{ en: "Static output", id: "Output statis" }, { en: "output: export, with server-only features unavailable", id: "output: export, tanpa fitur yang memerlukan server" }, { en: "Prerendered static output through Nitro", id: "Output statis hasil prerender melalui Nitro" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Choose Next.js when React is the target ecosystem and its App Router and deployment model match the product.", id: "Pilih Next.js ketika React menjadi ekosistem tujuan dan model App Router serta deployment-nya sesuai dengan produk." },
        { en: "Choose Nuxt when Vue is the target ecosystem and the team benefits from Nuxt's SFC, composable, module, and Nitro conventions.", id: "Pilih Nuxt ketika Vue menjadi ekosistem tujuan dan tim memperoleh manfaat dari konvensi SFC, composable, module, dan Nitro." }
      ],
      poor: [
        { en: "Adding either framework to a small embedded widget that needs no routing or server integration.", id: "Menambahkan salah satunya pada widget kecil yang tidak membutuhkan routing atau integrasi server." },
        { en: "Selecting request-time features while deploying only static files.", id: "Memilih fitur request-time ketika deployment hanya dapat menyajikan file statis." }
      ]
    },
    mistakes: [
      { en: "Calling Next.js a replacement for React or Nuxt a replacement for Vue. The frameworks use those UI foundations.", id: "Menyebut Next.js sebagai pengganti React atau Nuxt sebagai pengganti Vue. Kedua framework justru menggunakan fondasi UI tersebut." },
      { en: "Assuming matching terms such as SSR, caching, or middleware have identical semantics across versions and platforms.", id: "Menganggap istilah seperti SSR, caching, atau middleware memiliki perilaku identik pada semua versi dan platform." }
    ],
    seniorPerspective: [
      { en: "Evaluate the whole operating model: supported adapters, cache invalidation, observability, local development, upgrade cadence, server ownership, security boundaries, and failure behavior. Framework productivity can become infrastructure coupling, so make that coupling explicit.", id: "Nilai keseluruhan model operasionalnya: adapter yang didukung, cache invalidation, observability, pengembangan lokal, ritme upgrade, kepemilikan server, batas keamanan, dan perilaku saat gagal. Produktivitas dari framework dapat berubah menjadi keterikatan pada infrastruktur, sehingga keterikatan tersebut perlu disadari sejak awal." }
    ],
    keyPoints: [
      { en: "Next.js and Nuxt are application frameworks built on React and Vue respectively.", id: "Next.js dan Nuxt adalah framework aplikasi yang masing-masing dibangun di atas React dan Vue." },
      { en: "Choose by ecosystem, runtime, deployment, and maintenance constraints—not by a feature checklist alone.", id: "Pilih berdasarkan ekosistem, runtime, deployment, dan pemeliharaan; bukan hanya daftar fitur." }
    ],
    references: [
      { label: "Next.js — App Router", href: "https://nextjs.org/docs/app" },
      { label: "Next.js — Server and Client Components", href: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
      { label: "Nuxt — Introduction", href: "https://nuxt.com/docs/getting-started/introduction" },
      { label: "Nuxt — Rendering Modes", href: "https://nuxt.com/docs/guide/concepts/rendering" }
    ],
    related: ["react-vs-vue", "ssr", "ssr-ssg-isr", "server-vs-client-components", "seo-frontend"],
    practiceQuestions: [
      { en: "Which product requirements justify an application framework over a client-only build tool?", id: "Kebutuhan produk apa yang membenarkan penggunaan framework aplikasi dibanding build tool client-only?" },
      { en: "Which features would stop working if the project moved to static-only hosting?", id: "Fitur apa yang tidak dapat berjalan jika project dipindahkan ke static-only hosting?" }
    ]
  },
  {
    slug: "csr-vs-ssr",
    term: "CSR vs SSR",
    category: { en: "Rendering & Delivery", id: "Rendering & Delivery" },
    title: { en: "CSR vs SSR: Where Should Initial Rendering Happen?", id: "CSR vs SSR: Di Mana Tampilan Awal Sebaiknya Dibuat?" },
    summary: {
      en: "A route-level decision about whether the browser or a server should prepare the initial interface—and what that changes for loading, data, SEO, infrastructure, and maintenance.",
      id: "Keputusan per halaman mengenai apakah browser atau server yang menyiapkan tampilan awal, beserta dampaknya terhadap loading, data, SEO, infrastruktur, dan maintenance."
    },
    readingTime: { en: "15 min", id: "15 menit" },
    keywords: ["csr vs ssr", "client side rendering vs server side rendering", "rendering strategy", "seo", "initial html", "frontend architecture"],
    question: { en: "Should this route prepare its first useful view in the browser or on a server?", id: "Apakah tampilan awal halaman ini sebaiknya disiapkan di browser atau di server?" },
    definition: [
      { en: "CSR means Client-Side Rendering: the browser receives application files and uses JavaScript to build much of the interface. SSR means Server-Side Rendering: a server prepares useful HTML for a request before sending it to the browser.", id: "CSR merupakan singkatan dari Client-Side Rendering: browser menerima berkas aplikasi lalu memakai JavaScript untuk membentuk sebagian besar antarmuka. SSR merupakan singkatan dari Server-Side Rendering: server menyiapkan HTML yang berguna untuk sebuah request sebelum mengirimkannya ke browser." },
      { en: "This is not a choice between interactive and non-interactive pages. Both can become interactive in the browser. The main difference is who performs the initial rendering work, when data is requested, and what must happen before meaningful content appears.", id: "Ini bukan pilihan antara halaman interaktif dan non-interaktif. Keduanya dapat menjadi interaktif di browser. Perbedaan utamanya adalah pihak yang mengerjakan rendering awal, waktu pengambilan data, serta pekerjaan yang harus selesai sebelum konten utama terlihat." }
    ],
    why: [
      { en: "The choice affects the user's first wait. CSR can return a lightweight document quickly but may then wait for JavaScript and API data. SSR can return content-ready HTML but the server may first wait for data and rendering. Measuring only one stage can produce a misleading conclusion.", id: "Pilihan ini memengaruhi bentuk waktu tunggu pengguna. CSR dapat mengirim dokumen ringan lebih cepat, tetapi setelah itu masih menunggu JavaScript dan data API. SSR dapat mengirim HTML yang sudah berisi konten, tetapi server mungkin harus menunggu data dan rendering terlebih dahulu. Mengukur hanya satu tahap dapat menghasilkan kesimpulan yang menyesatkan." },
      { en: "It also changes ownership. CSR puts more startup and failure handling in the browser. SSR adds server capacity, caching, observability, and protection against leaking personalized responses through a shared cache.", id: "Pilihan tersebut juga mengubah tanggung jawab teknis. CSR menempatkan lebih banyak proses awal dan penanganan kegagalan di browser. SSR menambah kebutuhan kapasitas server, caching, observability, serta perlindungan agar respons personal tidak bocor melalui shared cache." }
    ],
    theory: [
      { en: "In a typical CSR flow, the browser receives an HTML shell, downloads JavaScript, executes the application, requests data, updates the DOM, and paints the result. In a typical SSR flow, the server requests data and renders HTML first; the browser displays that HTML and may later hydrate interactive components.", id: "Pada alur CSR yang umum, browser menerima kerangka HTML, mengunduh JavaScript, menjalankan aplikasi, meminta data, memperbarui DOM, lalu menggambar hasilnya. Pada alur SSR yang umum, server mengambil data dan membuat HTML terlebih dahulu; browser menampilkan HTML tersebut lalu dapat melakukan hydration pada komponen interaktif." },
      { en: "Caching can make their delivery look similar. A cached SSR response may arrive like a static file, while a CSR application may cache JavaScript and data locally after the first visit. The architecture is still different because cache invalidation, security boundaries, and the uncached path are different.", id: "Caching dapat membuat cara pengirimannya terlihat mirip. Respons SSR yang sudah di-cache dapat tiba seperti file statis, sedangkan aplikasi CSR dapat menyimpan JavaScript dan data setelah kunjungan pertama. Arsitekturnya tetap berbeda karena aturan cache invalidation, batas keamanan, dan perilaku ketika cache kosong tidak sama." }
    ],
    analogy: [
      { en: "Imagine choosing between two ways to get dinner. In the first, a restaurant cooks the meal and delivers a ready plate. In the second, a grocery service delivers ingredients and instructions so you prepare the meal at home. The first gives you a ready result sooner but depends on the kitchen; the second asks more of your home but gives you more control afterward. SSR and CSR make a similar choice about where the first page is prepared. The comparison does not cover every later browser detail.", id: "Bayangkan memilih dua cara untuk mendapatkan makan malam. Cara pertama mengirimkan makanan yang sudah dimasak restoran. Cara kedua mengirim bahan dan petunjuk agar Anda memasak sendiri di rumah. Cara pertama memberi hasil siap santap, tetapi bergantung pada dapur; cara kedua meminta lebih banyak pekerjaan dari rumah, tetapi memberi kendali setelahnya. SSR dan CSR membuat pilihan serupa tentang tempat halaman pertama disiapkan. Analogi ini tidak mencakup semua detail browser setelahnya." }
    ],
    realExample: [
      { en: "An authenticated logistics dashboard with long sessions, filters, tables, and frequent local interaction can reasonably use CSR because public discovery is irrelevant and users benefit from a persistent client application. A public shipment-tracking landing page may use SSR when its initial status and metadata should be readable from the first response.", id: "Dashboard logistik terautentikasi dengan sesi panjang, filter, tabel, dan banyak interaksi lokal dapat memakai CSR karena tidak perlu ditemukan mesin pencari dan pengguna memperoleh manfaat dari aplikasi client yang tetap aktif. Halaman publik untuk pelacakan kiriman dapat memakai SSR ketika status awal serta metadata perlu terbaca sejak respons pertama." },
      { en: "One product can use both. Marketing and public detail routes may use server or static rendering, while the operational workspace uses client rendering. Rendering strategy is most useful as a route decision, not a label for the entire repository.", id: "Satu produk dapat memakai keduanya. Route marketing dan detail publik dapat menggunakan server atau static rendering, sedangkan workspace operasional menggunakan client rendering. Strategi rendering lebih berguna sebagai keputusan per halaman, bukan label untuk seluruh repository." }
    ],
    code: {
      label: { en: "The same data shown through two delivery paths", id: "Data yang sama melalui dua alur pengiriman" },
      language: "tsx",
      value: `// SSR-style route: data is ready before HTML is returned.
export default async function TrackingPage({ params }: PageProps) {
  const shipment = await getShipment((await params).id);
  return <TrackingSummary shipment={shipment} />;
}

// CSR-style component: the browser requests data after it becomes active.
"use client";
function TrackingPanel({ id }: { id: string }) {
  const { data, error, isLoading } = useShipment(id);
  if (isLoading) return <TrackingSkeleton />;
  if (error) return <TrackingError />;
  return <TrackingSummary shipment={data} />;
}`
    },
    codeExplanation: [
      { en: "Both paths may render the same TrackingSummary. The first waits for data before returning route HTML. The second gives the browser ownership of loading, error, and data states. The important decision is not component reuse; it is where latency and failure are handled.", id: "Kedua alur dapat menampilkan TrackingSummary yang sama. Alur pertama menunggu data sebelum mengirim HTML route. Alur kedua membuat browser bertanggung jawab atas keadaan loading, error, dan data. Keputusan pentingnya bukan penggunaan ulang komponen, melainkan lokasi penanganan latency dan kegagalan." }
    ],
    comparison: {
      headers: [{ en: "Concern", id: "Pertimbangan" }, { en: "CSR", id: "CSR" }, { en: "SSR", id: "SSR" }],
      rows: [
        [{ en: "First useful content", id: "Konten berguna pertama" }, { en: "Waits for enough client code and often data", id: "Menunggu kode client dan biasanya data" }, { en: "Can arrive in the HTML response", id: "Dapat hadir dalam respons HTML" }],
        [{ en: "Main compute", id: "Pekerjaan utama" }, { en: "User's browser", id: "Browser pengguna" }, { en: "Server, then possibly browser hydration", id: "Server, lalu mungkin hydration di browser" }],
        [{ en: "Public discovery", id: "Penemuan halaman publik" }, { en: "Depends more on JavaScript-aware crawling", id: "Lebih bergantung pada crawler yang menjalankan JavaScript" }, { en: "Content and metadata can arrive directly", id: "Konten dan metadata dapat langsung diterima" }],
        [{ en: "Infrastructure", id: "Infrastruktur" }, { en: "Can use static hosting", id: "Dapat memakai static hosting" }, { en: "Request rendering needs a server runtime", id: "Rendering per request membutuhkan runtime server" }],
        [{ en: "Common maintenance risk", id: "Risiko maintenance umum" }, { en: "Large bundles, request races, fragmented loading states", id: "Bundle besar, request race, loading state tersebar" }, { en: "Slow data paths, unsafe caches, runtime failures", id: "Data lambat, cache tidak aman, kegagalan runtime" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Prefer CSR when a private, highly interactive application has long sessions and initial public content is not important.", id: "Pertimbangkan CSR untuk aplikasi privat yang sangat interaktif, digunakan dalam sesi panjang, dan tidak membutuhkan konten publik pada respons awal." },
        { en: "Prefer SSR when initial HTML depends on request-time information and that content should be immediately useful or discoverable.", id: "Pertimbangkan SSR ketika HTML awal bergantung pada informasi saat request dan kontennya perlu langsung berguna atau mudah ditemukan." }
      ],
      poor: [
        { en: "Do not choose CSR merely because the team uses React or Vue; both ecosystems support several rendering strategies.", id: "Jangan memilih CSR hanya karena tim memakai React atau Vue; kedua ekosistem mendukung beberapa strategi rendering." },
        { en: "Do not choose SSR for stable shared content when static generation would meet freshness needs with less runtime complexity.", id: "Jangan memilih SSR untuk konten bersama yang stabil jika static generation sudah memenuhi kebutuhan freshness dengan kompleksitas runtime lebih rendah." }
      ]
    },
    mistakes: [
      { en: "Reducing the comparison to SEO. The decision also changes data waterfalls, device work, caching, infrastructure cost, and failure handling.", id: "Menyederhanakan perbandingan hanya menjadi SEO. Keputusan ini juga memengaruhi data waterfall, beban perangkat, caching, biaya infrastruktur, dan penanganan kegagalan." },
      { en: "Calling SSR automatically faster. A slow server response plus a large hydration bundle can perform worse than a well-designed CSR route.", id: "Menganggap SSR otomatis lebih cepat. Respons server yang lambat ditambah bundle hydration besar dapat lebih buruk daripada route CSR yang dirancang dengan baik." }
    ],
    seniorPerspective: [
      { en: "Document the decision per route: audience, first-content requirement, data freshness, personalization, cache policy, target devices, failure behavior, and hosting capability. Revisit it with field measurements rather than preserving a framework default indefinitely.", id: "Dokumentasikan keputusan per route: pengguna, kebutuhan konten awal, freshness data, personalisasi, kebijakan cache, perangkat target, perilaku ketika gagal, dan kemampuan hosting. Tinjau kembali menggunakan pengukuran pengguna nyata, bukan mempertahankan default framework selamanya." },
      { en: "Maintenance cost follows the chosen boundary. CSR needs disciplined request cancellation, state ownership, and bundle control. SSR needs server observability, safe cache keys, capacity planning, and a clear degradation path when upstream data is slow.", id: "Biaya maintenance mengikuti batas yang dipilih. CSR membutuhkan request cancellation, kepemilikan state, dan kontrol bundle yang disiplin. SSR membutuhkan observability server, cache key yang aman, capacity planning, dan jalur degradasi yang jelas ketika data upstream lambat." }
    ],
    keyPoints: [
      { en: "CSR and SSR differ mainly in where initial rendering work happens.", id: "CSR dan SSR terutama berbeda pada lokasi pekerjaan rendering awal." },
      { en: "Neither is always faster; evaluate the complete data, rendering, and interaction path.", id: "Tidak ada yang selalu lebih cepat; nilai seluruh alur data, rendering, dan interaksi." },
      { en: "Choose per route, then verify the decision with real measurements and maintenance evidence.", id: "Pilih per route, lalu buktikan keputusan melalui pengukuran nyata dan pengalaman maintenance." }
    ],
    references: [
      { label: "web.dev — Rendering on the Web", href: "https://web.dev/articles/rendering-on-the-web" },
      { label: "MDN — Client-side web APIs", href: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs" },
      { label: "Next.js — Server and Client Components", href: "https://nextjs.org/docs/app/getting-started/server-and-client-components" }
    ],
    related: ["csr", "ssr", "hydration", "ssr-ssg-isr", "seo-frontend"],
    practiceQuestions: [
      { en: "Which route in your current product would benefit most from moving initial rendering to the other side, and why?", id: "Route mana pada produk Anda yang paling mungkin memperoleh manfaat jika rendering awal dipindahkan ke sisi lain, dan mengapa?" },
      { en: "Which measurements would distinguish a slow server from slow hydration or slow client data fetching?", id: "Pengukuran apa yang dapat membedakan server lambat, hydration lambat, dan client data fetching yang lambat?" }
    ]
  },
  {
    slug: "ssr-ssg-isr",
    term: "SSR vs SSG vs ISR",
    category: { en: "Rendering & Delivery", id: "Rendering & Delivery" },
    title: { en: "SSR vs SSG vs ISR", id: "SSR vs SSG vs ISR" },
    summary: { en: "How request-time rendering, build-time generation, and incremental regeneration trade freshness for latency, cacheability, and operational complexity.", id: "Cara rendering saat request, pembuatan saat build, dan regenerasi bertahap menukar freshness dengan latency, kemudahan caching, serta kompleksitas operasional." },
    readingTime: { en: "15 min", id: "15 menit" },
    keywords: ["ssr vs ssg", "ssg vs isr", "static generation", "incremental static regeneration", "revalidation", "rendering strategy"],
    question: { en: "When would you choose SSR, SSG, or ISR?", id: "Kapan Anda memilih SSR, SSG, atau ISR?" },
    definition: [
      { en: "SSR means Server-Side Rendering: HTML is produced when a request needs it. SSG means Static Site Generation: HTML is produced ahead of visitors, commonly during a build. ISR means Incremental Static Regeneration: generated pages can be replaced after deployment according to a time limit or an explicit invalidation signal.", id: "SSR (Server-Side Rendering) menghasilkan HTML ketika request membutuhkannya. SSG (Static Site Generation) menghasilkan HTML sebelum pengunjung datang, biasanya saat build. ISR (Incremental Static Regeneration) menyajikan halaman yang sudah dibuat, lalu dapat menggantinya dengan versi baru setelah deployment berdasarkan batas waktu atau perintah invalidation." }
    ],
    why: [
      { en: "No delivery strategy maximizes freshness, low latency, low compute cost, simple operations, and personalization simultaneously. These approaches place the rendering work at different moments so teams can choose which constraint to optimize.", id: "Tidak ada satu strategi yang sekaligus memberikan data paling mutakhir, latency rendah, biaya komputasi kecil, operasional sederhana, dan personalisasi penuh. Ketiganya menempatkan pekerjaan rendering pada waktu yang berbeda agar tim dapat menentukan prioritas." }
    ],
    theory: [
      { en: "With SSR, a request may wait for data and rendering before HTML can be returned, although caches and streaming may change the observed timeline. With SSG, that work is paid during build and the result can be served from a CDN. With ISR, a cached page has a freshness policy and regeneration mechanism; users may receive cached content while newer output is produced.", id: "Pada SSR, request mungkin harus menunggu data dan proses rendering sebelum HTML dikirim, meskipun cache dan streaming dapat mengubah alurnya. Pada SSG, biaya tersebut dibayar saat build dan hasilnya dapat disajikan dari CDN. Pada ISR, halaman cache memiliki aturan freshness dan mekanisme regenerasi; pengguna dapat menerima versi cache sementara versi baru sedang dibuat." },
      { en: "ISR is not a property of static files alone. It requires a platform runtime and cache coordination after deployment. In Next.js, ISR is explicitly unavailable with output: export.", id: "ISR bukan kemampuan yang dimiliki file statis dengan sendirinya. ISR membutuhkan runtime platform dan koordinasi cache setelah deployment. Pada Next.js, ISR tidak tersedia ketika menggunakan output: export." }
    ],
    analogy: [
      { en: "Imagine a bakery. One baker starts each cake after a customer orders it. Another prepares the popular cakes before opening. A third prepares them before opening but replaces a cake when it becomes old or a manager asks for a fresh batch. These are like SSR, SSG, and ISR: work happens at request time, before visitors arrive, or through later replacement. The bakery comparison cannot capture every platform rule or cache detail.", id: "Bayangkan sebuah toko roti. Tukang roti pertama mulai membuat kue setelah pelanggan memesannya. Tukang roti kedua menyiapkan kue populer sebelum toko buka. Tukang roti ketiga juga menyiapkannya lebih awal, tetapi mengganti kue ketika sudah lama atau ketika pemilik meminta batch baru. Ini mirip SSR, SSG, dan ISR: pekerjaan dilakukan saat diminta, sebelum pengunjung datang, atau melalui penggantian berikutnya. Analogi toko roti tidak mencakup semua aturan platform atau detail cache." }
    ],
    realExample: [
      { en: "A corporate policy page can use SSG and update with each release. A catalog with thousands of pages and periodic price changes may use ISR if stale tolerance and invalidation are defined. A checkout summary based on the current user and inventory may use SSR or client fetching because its response cannot be safely shared as one static page.", id: "Halaman kebijakan perusahaan dapat memakai SSG dan diperbarui setiap release. Katalog dengan ribuan halaman serta perubahan harga berkala dapat memakai ISR jika toleransi data lama dan aturan invalidation sudah jelas. Ringkasan checkout yang bergantung pada pengguna serta stok saat ini lebih sesuai dengan SSR atau client fetching karena responsnya tidak aman untuk dibagikan sebagai satu halaman statis." }
    ],
    code: {
      label: { en: "Next.js route-level intent", id: "Maksud rendering pada route Next.js" }, language: "tsx",
      value: `// SSG: generated during build when data is build-time safe
export default async function PolicyPage() {
  const policy = await getPolicy();
  return <Policy document={policy} />;
}

// ISR needs a supporting server runtime; it does not work with output: "export"
export const revalidate = 3600;`
    },
    codeExplanation: [
      { en: "PolicyPage can be generated during the build when getPolicy uses build-time-safe data. Adding revalidate asks a supporting Next.js server runtime to regenerate the cached route after its freshness window. That second behavior does not work with output: export because a directory of static files has no running process that can rebuild the page.", id: "PolicyPage dapat dibuat saat build jika getPolicy menggunakan data yang tersedia pada waktu build. revalidate meminta runtime server Next.js yang mendukungnya untuk membuat ulang route cache setelah batas waktunya. Perilaku kedua tidak dapat berjalan bersama output: export karena kumpulan file statis tidak memiliki proses aktif yang dapat membuat ulang halaman." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "SSR", id: "SSR" }, { en: "SSG", id: "SSG" }, { en: "ISR", id: "ISR" }],
      rows: [
        [{ en: "Generation", id: "Waktu pembuatan" }, { en: "Request time", id: "Saat request" }, { en: "Build time", id: "Saat build" }, { en: "Ahead of request, then regenerated", id: "Sebelum request, lalu dibuat ulang" }],
        [{ en: "Freshness", id: "Freshness" }, { en: "Can use current request data", id: "Dapat memakai data request saat ini" }, { en: "As fresh as the deployed build", id: "Sesuai build yang sedang aktif" }, { en: "Defined by revalidation policy", id: "Ditentukan oleh aturan revalidation" }],
        [{ en: "Typical latency", id: "Latency umum" }, { en: "Includes server work unless cached", id: "Mencakup pekerjaan server kecuali di-cache" }, { en: "Fast static delivery", id: "Pengiriman file statis yang cepat" }, { en: "Usually static delivery with regeneration cost", id: "Umumnya statis dengan biaya regenerasi" }],
        [{ en: "Operational need", id: "Kebutuhan operasional" }, { en: "Server runtime", id: "Runtime server" }, { en: "Static host", id: "Static host" }, { en: "Runtime plus coordinated cache", id: "Runtime dan cache terkoordinasi" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "SSR for request-specific HTML; SSG for stable shared content; ISR for mostly static content with an explicit update policy.", id: "SSR untuk HTML yang bergantung pada request; SSG untuk konten bersama yang stabil; ISR untuk konten relatif statis dengan aturan pembaruan yang jelas." },
        { en: "Mix strategies by route according to content and infrastructure constraints.", id: "Gabungkan strategi pada route yang berbeda sesuai sifat konten dan batasan infrastruktur." }
      ],
      poor: [
        { en: "ISR when the platform only serves static files or when stale content is unacceptable.", id: "ISR ketika platform hanya menyajikan file statis atau data lama tidak dapat ditoleransi." },
        { en: "SSR for identical content that could be safely generated and cached once.", id: "SSR untuk konten identik yang sebenarnya aman dibuat dan di-cache satu kali." }
      ]
    },
    mistakes: [
      { en: "Assuming SSR is automatically faster. Slow data can worsen server response time, and hydration can still add client work.", id: "Menganggap SSR otomatis lebih cepat. Data yang lambat dapat memperburuk waktu respons server, dan hydration tetap dapat menambah pekerjaan di browser." },
      { en: "Using ISR without defining acceptable staleness, invalidation ownership, and behavior when regeneration fails.", id: "Menggunakan ISR tanpa menentukan toleransi data lama, pemilik invalidation, serta perilaku ketika regenerasi gagal." }
    ],
    seniorPerspective: [
      { en: "Make the freshness contract observable. Record what triggers updates, maximum acceptable staleness, cache keys, fallback behavior, and how rollback works. A rendering label is incomplete without its cache and failure model.", id: "Buat kontrak freshness dapat diamati. Catat pemicu pembaruan, batas maksimum data lama, cache key, fallback, dan proses rollback. Nama strategi rendering belum lengkap tanpa model cache dan kegagalannya." }
    ],
    keyPoints: [
      { en: "The central distinction is when HTML is generated and how it becomes fresh again.", id: "Perbedaan utamanya adalah kapan HTML dibuat dan bagaimana konten tersebut diperbarui." },
      { en: "ISR requires a runtime; it is not available in a pure Next.js static export.", id: "ISR memerlukan runtime; fitur ini tidak tersedia pada static export Next.js murni." }
    ],
    references: [
      { label: "Next.js — Incremental Static Regeneration", href: "https://nextjs.org/docs/app/guides/incremental-static-regeneration" },
      { label: "Next.js — Static Exports", href: "https://nextjs.org/docs/app/guides/static-exports" },
      { label: "web.dev — Rendering on the Web", href: "https://web.dev/articles/rendering-on-the-web" }
    ],
    related: ["csr-vs-ssr", "ssr", "hydration", "seo-frontend", "nextjs-vs-nuxt"],
    practiceQuestions: [
      { en: "How stale may a product page be before the business risk outweighs CDN speed?", id: "Berapa lama halaman produk boleh menampilkan data lama sebelum risikonya lebih besar daripada manfaat CDN?" },
      { en: "Why can two SSR pages have very different performance?", id: "Mengapa dua halaman yang sama-sama memakai SSR dapat memiliki performa yang sangat berbeda?" }
    ]
  },
  {
    slug: "server-vs-client-components",
    term: "Server vs Client Components",
    category: { en: "Rendering & Delivery", id: "Rendering & Delivery" },
    title: { en: "Server Components vs Client Components", id: "Server Components vs Client Components" },
    summary: { en: "How React splits component work across server and browser environments—and why this boundary is separate from SSR versus CSR.", id: "Cara React membagi pekerjaan komponen antara server dan browser, serta alasan batas ini berbeda dari perbandingan SSR dan CSR." },
    readingTime: { en: "16 min", id: "16 menit" },
    keywords: ["react server components", "rsc", "client components", "use client", "server component vs client component", "ssr"],
    question: { en: "Are Server Components the same as SSR?", id: "Apakah Server Components sama dengan SSR?" },
    definition: [
      { en: "A React Server Component is a component whose implementation runs in a server environment. It can read server-side data and secrets, but it cannot use browser state, effects, or click handlers. Its rendered result is sent in the RSC payload. RSC stands for React Server Components; the payload is React's serialized description of the server-rendered component tree.", id: "React Server Component adalah komponen yang implementasinya berjalan di lingkungan server. Komponen ini dapat membaca data serta secret server, tetapi tidak dapat memakai state browser, effect, atau click handler. Hasil render-nya dikirim melalui RSC payload. RSC merupakan singkatan dari React Server Components, sedangkan payload tersebut adalah representasi component tree hasil server yang dapat dipahami React." },
      { en: "A Client Component begins at a 'use client' boundary. It can use state, effects, events, and browser APIs. API means Application Programming Interface; here it includes browser capabilities such as localStorage and geolocation. The boundary also causes imported modules below it to join the client JavaScript graph.", id: "Client Component dimulai pada batas 'use client'. Komponen ini dapat memakai state, effect, event, dan API browser. API adalah Application Programming Interface; dalam konteks ini contohnya localStorage dan geolocation. Modul yang diimpor di bawah batas tersebut juga masuk ke kumpulan JavaScript client." }
    ],
    why: [
      { en: "Traditional interactive React applications send most component code to the browser even when some code only formats server data. RSC lets teams keep non-interactive work and sensitive data access on the server while sending JavaScript only for interactive islands.", id: "Aplikasi React interaktif tradisional mengirim sebagian besar kode komponen ke browser, termasuk kode yang hanya mengolah data server. RSC memungkinkan pekerjaan non-interaktif dan akses data sensitif tetap berada di server, sedangkan JavaScript dikirim hanya untuk bagian yang membutuhkan interaksi." }
    ],
    theory: [
      { en: "On an initial Next.js load, Server Components render into an RSC payload. Next.js combines that payload with Client Component references to prerender HTML. In the browser, HTML gives an immediate preview, the RSC payload reconciles the trees, and JavaScript hydrates Client Components. On later navigations, the RSC payload can update the tree without shipping Server Component code.", id: "Pada initial load Next.js, Server Components dirender menjadi RSC payload. Next.js menggabungkannya dengan referensi Client Components untuk membuat HTML awal. Di browser, HTML menampilkan pratinjau, RSC payload merekonsiliasi tree, lalu JavaScript melakukan hydration pada Client Components. Pada navigasi berikutnya, RSC payload dapat memperbarui tree tanpa mengirim kode Server Component." },
      { en: "The boundary is transitive for imports: once a module is marked 'use client', its imported modules join the client graph. Server-rendered children can still be passed into a Client Component as serializable composition, which is different from importing a Server Component into that client module.", id: "Batas tersebut berlaku pada rangkaian import: setelah sebuah modul diberi 'use client', modul yang diimpornya masuk ke client graph. Server-rendered children tetap dapat dikirim ke Client Component melalui composition yang dapat diserialisasi; ini berbeda dari mengimpor Server Component ke dalam modul client." }
    ],
    analogy: [
      { en: "Imagine a restaurant kitchen and dining room. The kitchen can reach the pantry and prepare ingredients, while the dining room can hear a guest ask for more water. They have different jobs and cannot directly share every object: the kitchen sends a finished dish that the dining room can carry. In an application, server components do private preparation and client components handle immediate interaction. The boundary is not a wall in a restaurant; it is a runtime boundary with rules about what data can cross it.", id: "Bayangkan dapur dan ruang makan sebuah restoran. Dapur dapat mengambil bahan dari gudang, sedangkan ruang makan dapat mendengar pelanggan meminta air. Keduanya memiliki tugas berbeda dan tidak dapat saling membagikan semua benda; dapur mengirim hidangan yang bisa dibawa ke meja. Dalam aplikasi, komponen server menyiapkan data privat dan komponen client menangani interaksi langsung. Batas ini bukan dinding restoran, melainkan batas runtime dengan aturan tentang data yang boleh melintas." }
    ],
    realExample: [
      { en: "A product page can keep database access, price formatting, and description rendering in Server Components. A small AddToCart Client Component receives a serializable product ID and handles clicks and optimistic feedback. Marking the entire page 'use client' would unnecessarily move more code into the client graph.", id: "Halaman produk dapat mempertahankan akses database, pemformatan harga, dan deskripsi di Server Components. Komponen kecil AddToCart menjadi Client Component yang menerima product ID dan menangani klik serta feedback optimistis. Memberi 'use client' pada seluruh halaman akan memindahkan lebih banyak kode ke client graph tanpa kebutuhan." }
    ],
    code: {
      label: { en: "A narrow interactive boundary", id: "Batas interaktif yang sempit" }, language: "tsx",
      value: `// app/products/[id]/page.tsx — Server Component
export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct((await params).id);
  return <><ProductDetails product={product} /><AddToCart id={product.id} /></>;
}

// add-to-cart.tsx — Client Component
"use client";
export function AddToCart({ id }: { id: string }) {
  const [pending, setPending] = useState(false);
  return <button onClick={() => add(id, setPending)} disabled={pending}>Add</button>;
}`
    },
    codeExplanation: [
      { en: "ProductPage stays on the server, so getProduct and the non-interactive product details do not need to become browser JavaScript. AddToCart is a narrow client boundary because it owns state and a click handler. Only serializable data—in this case the product ID—crosses that boundary.", id: "ProductPage tetap berada di server sehingga getProduct dan detail produk yang tidak interaktif tidak perlu menjadi JavaScript browser. AddToCart menjadi client boundary yang sempit karena memiliki state dan click handler. Hanya data yang dapat diserialisasi, dalam contoh ini product ID, yang melewati batas tersebut." }
    ],
    comparison: {
      headers: [{ en: "Capability", id: "Kemampuan" }, { en: "Server Component", id: "Server Component" }, { en: "Client Component", id: "Client Component" }],
      rows: [
        [{ en: "Execution", id: "Eksekusi" }, { en: "Server/build environment", id: "Lingkungan server/build" }, { en: "Browser; may be prerendered initially", id: "Browser; dapat dipra-render pada initial load" }],
        [{ en: "State and events", id: "State dan event" }, { en: "Not browser state or handlers", id: "Tidak untuk state browser atau handler" }, { en: "Supported", id: "Didukung" }],
        [{ en: "Secrets/direct data access", id: "Secret/akses data langsung" }, { en: "Can remain server-only", id: "Dapat tetap di server" }, { en: "Must not contain secrets", id: "Tidak boleh memuat secret" }],
        [{ en: "Client JavaScript", id: "JavaScript client" }, { en: "Implementation is not shipped", id: "Implementasi tidak dikirim" }, { en: "Included from the client boundary", id: "Dikirim mulai dari client boundary" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Server Components for data access, static content, large server-only dependencies, and non-interactive composition.", id: "Server Components untuk akses data, konten statis, dependency besar yang hanya diperlukan server, dan composition non-interaktif." },
        { en: "Client Components for events, browser APIs, stateful widgets, and effects.", id: "Client Components untuk event, API browser, widget dengan state, dan effect." }
      ],
      poor: [
        { en: "Adding 'use client' high in the tree merely because one nested button is interactive.", id: "Menambahkan 'use client' di bagian atas tree hanya karena ada satu tombol interaktif di dalamnya." },
        { en: "Moving database or secret-bearing modules across the client boundary.", id: "Memindahkan modul database atau secret melewati batas client." }
      ]
    },
    mistakes: [
      { en: "Equating Server Components with request-time SSR. They may run during build-time prerendering too.", id: "Menyamakan Server Components dengan SSR saat request. Server Components juga dapat berjalan saat prerendering pada build." },
      { en: "Assuming Client Components render only in the browser. Frameworks can prerender their initial HTML, then hydrate them.", id: "Menganggap Client Components hanya dirender di browser. Framework dapat membuat HTML awalnya lebih dahulu, kemudian melakukan hydration." }
    ],
    seniorPerspective: [
      { en: "Treat 'use client' as an architectural boundary, not a component label. Review what crosses it, keep props serializable, protect server-only modules, and measure the resulting client graph. Prefer composition over pushing providers and interactivity to the root.", id: "Perlakukan 'use client' sebagai batas arsitektur, bukan sekadar label komponen. Tinjau data yang melewatinya, pastikan props dapat diserialisasi, lindungi modul server-only, dan ukur client graph yang dihasilkan. Utamakan composition daripada mendorong provider serta interaktivitas ke root." }
    ],
    keyPoints: [
      { en: "RSC versus Client Components describes an execution and module boundary; SSR versus CSR describes rendering delivery.", id: "RSC versus Client Components menjelaskan batas eksekusi dan modul; SSR versus CSR menjelaskan cara rendering dikirim." },
      { en: "Use narrow client boundaries and compose the two models.", id: "Gunakan batas client yang sempit dan kombinasikan kedua model." }
    ],
    references: [
      { label: "React — Server Components", href: "https://react.dev/reference/rsc/server-components" },
      { label: "Next.js — Server and Client Components", href: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
      { label: "Next.js — use client", href: "https://nextjs.org/docs/app/api-reference/directives/use-client" }
    ],
    related: ["ssr", "csr", "hydration", "nextjs-vs-nuxt"],
    practiceQuestions: [
      { en: "Why can a Client Component appear as HTML before its JavaScript runs?", id: "Mengapa Client Component dapat terlihat sebagai HTML sebelum JavaScript-nya berjalan?" },
      { en: "Where would you place the client boundary on a mostly static page with one interactive filter?", id: "Di mana Anda menempatkan client boundary pada halaman yang sebagian besar statis tetapi memiliki satu filter interaktif?" }
    ]
  },
  {
    slug: "client-vs-server-state",
    term: "Client State vs Server State",
    category: { en: "State Management", id: "State Management" },
    title: { en: "Client State vs Server State", id: "Client State vs Server State" },
    summary: { en: "Why modal visibility and API data have different ownership, synchronization, caching, and failure concerns even when both appear as variables in a component.", id: "Alasan state modal dan data API memiliki kepemilikan, sinkronisasi, caching, serta risiko kegagalan yang berbeda meskipun keduanya tampak sebagai variabel di dalam komponen." },
    readingTime: { en: "14 min", id: "14 menit" },
    keywords: ["client state", "server state", "react query", "tanstack query", "cache", "global state", "remote data"],
    question: { en: "What is the difference between client state and server state?", id: "Apa perbedaan client state dan server state?" },
    definition: [
      { en: "Client state is information owned by the interface currently running in the browser: whether a dialog is open, which row is selected, or what the user has typed but not saved. Server state comes from an API, database, or another service. The browser only holds a temporary copy and cannot assume that copy is still current.", id: "Client state adalah informasi yang dimiliki antarmuka di browser, misalnya apakah dialog sedang terbuka, baris mana yang dipilih, atau apa yang sudah diketik tetapi belum disimpan. Server state berasal dari API, database, atau layanan lain. Browser hanya memegang salinan sementara dan tidak dapat menganggap salinan tersebut selalu mutakhir." },
      { en: "A cache stores a reusable copy of server data. Synchronization is the work of keeping that copy reasonably aligned with its source through refetching, invalidation, and mutation results. This is why server state has different problems from ordinary component state.", id: "Cache menyimpan salinan data server agar dapat digunakan kembali. Sinkronisasi adalah proses menjaga salinan tersebut tetap selaras dengan sumbernya melalui refetch, invalidation, dan hasil mutation. Karena itu, server state memiliki masalah yang berbeda dari state komponen biasa." }
    ],
    why: [
      { en: "Treating remote data as ordinary global state forces application code to rebuild a cache: request deduplication, stale policies, background refresh, cancellation, retries, optimistic updates, and garbage collection. Separating the two clarifies which problems a tool must solve.", id: "Memperlakukan data remote sebagai global state biasa membuat aplikasi harus membangun sistem cache sendiri: request deduplication, aturan stale, background refresh, cancellation, retry, optimistic update, dan garbage collection. Memisahkan keduanya memperjelas masalah yang harus diselesaikan oleh sebuah tool." }
    ],
    theory: [
      { en: "A server-state cache commonly keys each resource or query, records freshness, shares in-flight work across observers, and invalidates affected keys after mutations. Client state instead follows UI ownership and component lifetime unless the product explicitly needs persistence or sharing.", id: "Cache server state biasanya memberi key pada setiap resource atau query, mencatat freshness, berbagi request yang sedang berjalan kepada beberapa observer, lalu melakukan invalidation setelah mutation. Client state mengikuti kepemilikan UI dan umur komponen, kecuali produk memang membutuhkan persistence atau penggunaan bersama." },
      { en: "The boundary is contextual. A shopping-cart draft stored only in one browser is client state; once the server persists and synchronizes it across devices, the canonical cart becomes server state while local optimistic changes remain client-side projections.", id: "Batasnya bergantung pada konteks. Draft keranjang yang hanya tersimpan di satu browser merupakan client state. Setelah server menyimpan dan menyinkronkannya lintas perangkat, keranjang utama menjadi server state, sedangkan perubahan optimistis lokal tetap menjadi proyeksi sementara di client." }
    ],
    analogy: [
      { en: "Imagine two notes in your workspace. You control a note that says which drawer you opened, but a stock sheet copied from a warehouse can become outdated when another worker sells an item. The first note is yours to change immediately; the second must be checked and refreshed. Client state and server state have that difference: one belongs to the current interface, while the other reflects information whose source can change elsewhere.", id: "Bayangkan dua catatan di ruang kerja. Anda mengendalikan catatan yang menyebut laci mana yang dibuka, tetapi salinan daftar stok gudang dapat kedaluwarsa ketika pekerja lain menjual barang. Catatan pertama dapat langsung Anda ubah; catatan kedua perlu diperiksa dan diperbarui. Client state dan server state memiliki perbedaan serupa: yang satu milik tampilan saat ini, sedangkan yang lain mencerminkan informasi yang sumbernya dapat berubah di tempat lain." }
    ],
    realExample: [
      { en: "In a shipment screen, the selected table row and open confirmation dialog are client state. The shipment record and tracking history are server state. A mutation can optimistically display a new status, but the server response remains authoritative and errors require rollback or reconciliation.", id: "Pada halaman pengiriman, baris tabel yang dipilih dan dialog konfirmasi yang terbuka merupakan client state. Data pengiriman serta riwayat pelacakan merupakan server state. Mutation dapat menampilkan status baru secara optimistis, tetapi respons server tetap menjadi sumber kebenaran dan kegagalan memerlukan rollback atau rekonsiliasi." }
    ],
    code: {
      label: { en: "Different owners, different tools", id: "Pemilik berbeda, tool berbeda" }, language: "tsx",
      value: `const [isDialogOpen, setDialogOpen] = useState(false); // client state

const shipmentQuery = useQuery({                    // server state
  queryKey: ["shipment", shipmentId],
  queryFn: ({ signal }) => fetchShipment(shipmentId, signal),
  staleTime: 30_000,
});`
    },
    codeExplanation: [
      { en: "isDialogOpen belongs entirely to this interface, so useState is enough. The shipment query represents remote data. Its query key identifies the cached record, staleTime states how long it may be treated as fresh, and signal allows the request to be cancelled when it is no longer needed.", id: "isDialogOpen sepenuhnya dimiliki antarmuka ini sehingga useState sudah cukup. Query shipment mewakili data remote. queryKey menjadi identitas record di cache, staleTime menentukan berapa lama data dianggap masih segar, dan signal memungkinkan request dibatalkan ketika tidak lagi diperlukan." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "Client state", id: "Client state" }, { en: "Server state", id: "Server state" }],
      rows: [
        [{ en: "Authority", id: "Sumber kebenaran" }, { en: "Current UI", id: "UI saat ini" }, { en: "Remote system", id: "Sistem remote" }],
        [{ en: "Typical examples", id: "Contoh umum" }, { en: "Draft, modal, tab, selection", id: "Draft, modal, tab, pilihan" }, { en: "Orders, users, inventory", id: "Pesanan, pengguna, stok" }],
        [{ en: "Main concern", id: "Perhatian utama" }, { en: "Ownership and transitions", id: "Kepemilikan dan transisi" }, { en: "Freshness and synchronization", id: "Freshness dan sinkronisasi" }],
        [{ en: "Failure model", id: "Model kegagalan" }, { en: "Usually local logic", id: "Umumnya logic lokal" }, { en: "Network, authorization, partial failure", id: "Jaringan, otorisasi, kegagalan parsial" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Keep transient UI state near the component that owns it; use a server-state cache when several consumers need remote data lifecycle management.", id: "Tempatkan UI state sementara dekat komponen pemiliknya; gunakan cache server state ketika beberapa consumer membutuhkan pengelolaan lifecycle data remote." },
        { en: "Adopt a query library when caching, deduplication, invalidation, and mutation coordination are repeated product needs.", id: "Gunakan query library ketika caching, deduplication, invalidation, dan koordinasi mutation berulang kali dibutuhkan produk." }
      ],
      poor: [
        { en: "Putting every API response into a global store without a freshness policy.", id: "Memasukkan semua respons API ke global store tanpa aturan freshness." },
        { en: "Adding a query library for one fixed request with no sharing or caching need.", id: "Menambahkan query library untuk satu request tetap yang tidak perlu dibagikan atau di-cache." }
      ]
    },
    mistakes: [
      { en: "Calling all state in the browser client state. Location does not determine ownership.", id: "Menganggap seluruh state di browser sebagai client state. Lokasi penyimpanan tidak menentukan kepemilikan." },
      { en: "Copying query results into another store, creating two sources of truth and unclear invalidation.", id: "Menyalin hasil query ke store lain sehingga muncul dua sumber kebenaran dan aturan invalidation menjadi tidak jelas." }
    ],
    seniorPerspective: [
      { en: "Define ownership, consistency expectations, stale tolerance, and mutation recovery before selecting tools. Review offline needs, authorization changes, cache scope, personally identifiable data, and whether persistence can expose another user's data on a shared device.", id: "Tentukan kepemilikan, kebutuhan konsistensi, toleransi data lama, dan pemulihan mutation sebelum memilih tool. Tinjau kebutuhan offline, perubahan otorisasi, cakupan cache, data pribadi, serta risiko persistence menampilkan data pengguna lain pada perangkat bersama." }
    ],
    keyPoints: [
      { en: "Server state is a synchronized cache of externally owned data, not merely global state.", id: "Server state adalah cache tersinkronisasi dari data milik sistem lain, bukan sekadar global state." },
      { en: "State tools should follow ownership and lifecycle rather than variable location.", id: "Pemilihan tool state harus mengikuti kepemilikan dan lifecycle, bukan lokasi variabel." }
    ],
    references: [
      { label: "TanStack Query — Overview", href: "https://tanstack.com/query/latest/docs/framework/react/overview" },
      { label: "React — Choosing the State Structure", href: "https://react.dev/learn/choosing-the-state-structure" }
    ],
    related: ["context-vs-state-management", "react-vs-vue", "csr"],
    practiceQuestions: [
      { en: "Who owns the truth for each state value in your current feature?", id: "Siapa pemilik sumber kebenaran untuk setiap state pada fitur Anda saat ini?" },
      { en: "What cache invalidation bugs could appear if API data is copied into a global store?", id: "Bug cache invalidation apa yang dapat muncul jika data API disalin ke global store?" }
    ]
  },
  {
    slug: "context-vs-state-management",
    term: "Context vs State Library",
    category: { en: "State Management", id: "State Management" },
    title: { en: "Context API vs Dedicated State Management", id: "Context API vs Dedicated State Management" },
    summary: { en: "How to decide whether React Context is sufficient or a dedicated store is justified by update patterns, tooling, and domain complexity.", id: "Cara menentukan apakah React Context sudah cukup atau dedicated store diperlukan karena pola pembaruan, tooling, dan kompleksitas domain." },
    readingTime: { en: "14 min", id: "14 menit" },
    keywords: ["context api vs redux", "context vs zustand", "react context", "global state", "state library", "usecontext", "usereducer"],
    question: { en: "When is Context enough, and when would you introduce a state library?", id: "Kapan Context sudah cukup, dan kapan Anda memakai state management library?" },
    definition: [
      { en: "React Context API lets a component read a value from the nearest Provider without passing that value through every intermediate component. API means Application Programming Interface: the official functions and component contracts used to access a capability. State may live in useState or useReducer inside the Provider, but Context itself is primarily a distribution mechanism, not a complete state architecture.", id: "React Context API memungkinkan komponen membaca nilai dari Provider terdekat tanpa meneruskan nilai tersebut melalui setiap komponen di tengah. API merupakan singkatan dari Application Programming Interface, yaitu fungsi dan kontrak resmi untuk memakai suatu kemampuan. State dapat disimpan dengan useState atau useReducer di dalam Provider, tetapi Context terutama bertugas mendistribusikan nilai, bukan menyediakan arsitektur state yang lengkap." },
      { en: "A dedicated library such as Redux Toolkit or Zustand establishes an external store and APIs for reading and updating it. Libraries differ substantially; compare their subscription model, conventions, ecosystem, and operational cost rather than grouping them as one solution.", id: "Library seperti Redux Toolkit atau Zustand menyediakan external store beserta API untuk membaca dan memperbaruinya. Masing-masing memiliki karakter berbeda; bandingkan model subscription, konvensi, ekosistem, dan biaya operasionalnya, bukan menganggap semuanya satu solusi yang sama." }
    ],
    why: [
      { en: "Prop drilling can obscure dependencies, but making everything global creates a larger hidden dependency graph. The decision is about ownership, update frequency, consumer distribution, and debugging—not simply avoiding props.", id: "Prop drilling dapat menyamarkan dependency, tetapi menjadikan semua state global justru membentuk dependency graph tersembunyi yang lebih besar. Keputusan ini berkaitan dengan kepemilikan, frekuensi pembaruan, sebaran consumer, dan debugging; bukan sekadar menghindari props." }
    ],
    theory: [
      { en: "When a provider value changes, consumers that read that context are eligible to rerender. Splitting contexts, stabilizing values, or moving fast-changing state to a selector-based store can narrow updates. Optimization should follow profiling, because extra providers and memoization also add complexity.", id: "Ketika nilai provider berubah, consumer yang membaca context tersebut dapat melakukan render ulang. Memisahkan context, menjaga kestabilan value, atau memindahkan state yang sering berubah ke store berbasis selector dapat mempersempit pembaruan. Optimasi sebaiknya mengikuti hasil profiling karena provider dan memoization tambahan juga menambah kompleksitas." },
      { en: "A store can decouple subscriptions from the component tree and expose selectors so a component observes only a slice. Redux emphasizes explicit events and reducers with strong tooling; Zustand offers a smaller unopinionated store API. Neither replaces a server-state cache automatically.", id: "Store dapat memisahkan subscription dari component tree serta menyediakan selector agar komponen hanya mengamati bagian tertentu. Redux menekankan event dan reducer yang eksplisit dengan tooling kuat, sedangkan Zustand menawarkan API store yang lebih ringan. Keduanya tidak otomatis menggantikan cache server state." }
    ],
    analogy: [
      { en: "Imagine an office. For a simple emergency notice, one announcement heard by everyone nearby is convenient. For a busy operation, teams need a shared board where each person watches only the information they need and changes can be recorded. Context is like the announcement; a dedicated state-management tool is like the organized board. The best choice depends on how much information changes and how much control the team needs.", id: "Bayangkan sebuah kantor. Untuk pengumuman sederhana, satu pemberitahuan yang terdengar oleh semua orang di sekitar cukup praktis. Untuk pekerjaan yang sibuk, setiap tim membutuhkan papan bersama dan cukup memantau informasi yang relevan; perubahan juga dapat dicatat. Context mirip pengumuman, sedangkan alat state management khusus mirip papan yang teratur. Pilihan terbaik bergantung pada banyaknya perubahan dan tingkat kendali yang dibutuhkan." }
    ],
    realExample: [
      { en: "Theme and locale fit small Context providers because updates are infrequent and many descendants need them. A visual workflow editor with selected nodes, undo/redo, keyboard commands, and cross-panel coordination may justify a store with selectors and devtools. API entities still belong in a query cache unless the product has a specific reason to mirror them.", id: "Tema dan bahasa cocok ditempatkan pada Context kecil karena jarang berubah dan dibutuhkan banyak turunan. Editor workflow dengan node terpilih, undo/redo, shortcut, dan koordinasi antar-panel dapat membenarkan penggunaan store dengan selector serta devtools. Entity dari API tetap lebih tepat berada di query cache kecuali ada alasan khusus untuk menyalinnya." }
    ],
    code: {
      label: { en: "A focused Context boundary", id: "Context dengan tanggung jawab terbatas" }, language: "tsx",
      value: `const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>("id");
  const value = useMemo(() => ({ locale, setLocale }), [locale]);
  return <LocaleContext value={value}>{children}</LocaleContext>;
}`
    },
    codeExplanation: [
      { en: "LocaleProvider owns the current locale and exposes it to descendants without repeated props. useMemo keeps the Provider value stable when locale has not changed. This pattern is suitable for a small shared concern; it does not automatically add selectors, persistence, action history, or server-data caching.", id: "LocaleProvider menyimpan bahasa aktif dan membagikannya kepada komponen turunan tanpa props berulang. useMemo menjaga value Provider tetap stabil ketika locale tidak berubah. Pola ini sesuai untuk kebutuhan bersama yang kecil, tetapi tidak otomatis menyediakan selector, persistence, riwayat action, atau caching data server." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "Context + reducer", id: "Context + reducer" }, { en: "Dedicated store", id: "Dedicated store" }],
      rows: [
        [{ en: "Primary purpose", id: "Tujuan utama" }, { en: "Distribute values through a tree", id: "Menyalurkan nilai dalam tree" }, { en: "Manage and subscribe to shared state", id: "Mengelola dan berlangganan shared state" }],
        [{ en: "Targeted subscriptions", id: "Subscription terarah" }, { en: "Requires careful context design", id: "Memerlukan desain context yang cermat" }, { en: "Selectors are commonly built in", id: "Umumnya menyediakan selector" }],
        [{ en: "Debug tooling", id: "Tooling debugging" }, { en: "Build or add separately", id: "Dibangun atau ditambahkan terpisah" }, { en: "Often available by ecosystem", id: "Sering tersedia dari ekosistem" }],
        [{ en: "Cost", id: "Biaya" }, { en: "No extra dependency; local conventions needed", id: "Tanpa dependency; butuh konvensi internal" }, { en: "Dependency and concepts; stronger shared conventions", id: "Dependency dan konsep tambahan; konvensi lebih kuat" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Context for stable cross-cutting values or a bounded screen with understandable reducer transitions.", id: "Context untuk nilai lintas aplikasi yang stabil atau satu layar terbatas dengan transisi reducer yang mudah dipahami." },
        { en: "A dedicated store for complex shared client state, targeted subscriptions, devtools, middleware, or persistence requirements.", id: "Dedicated store untuk client state bersama yang kompleks, targeted subscription, devtools, middleware, atau persistence." }
      ],
      poor: [
        { en: "A global store for local form input or a dialog used by one component.", id: "Global store untuk input form lokal atau dialog yang hanya digunakan satu komponen." },
        { en: "Context as a homemade server cache with manual retries and invalidation.", id: "Context sebagai server cache buatan sendiri dengan retry dan invalidation manual." }
      ]
    },
    mistakes: [
      { en: "Saying Context replaces Redux in every case. They overlap in some simple use cases but expose different capabilities and update models.", id: "Mengatakan Context selalu menggantikan Redux. Keduanya tumpang tindih pada kebutuhan sederhana, tetapi memiliki kemampuan dan model pembaruan yang berbeda." },
      { en: "Choosing a store before separating client state from server state and URL state.", id: "Memilih store sebelum memisahkan client state, server state, dan URL state." }
    ],
    seniorPerspective: [
      { en: "Define a state inventory and ownership map before standardizing a library. Evaluate test isolation, debugging workflow, migration path, bundle impact, persistence security, and whether multiple microfrontends can safely share the same store contract.", id: "Susun inventaris state dan peta kepemilikannya sebelum menetapkan library. Pertimbangkan isolasi testing, alur debugging, jalur migrasi, dampak bundle, keamanan persistence, serta kemampuan beberapa microfrontend berbagi kontrak store dengan aman." }
    ],
    keyPoints: [
      { en: "Context distributes dependencies; a dedicated library supplies a broader state-management system.", id: "Context mendistribusikan dependency; dedicated library menyediakan sistem state management yang lebih luas." },
      { en: "Use the least powerful tool that keeps ownership, updates, and debugging clear.", id: "Gunakan tool paling sederhana yang tetap membuat kepemilikan, pembaruan, dan debugging jelas." }
    ],
    references: [
      { label: "React — Passing Data Deeply with Context", href: "https://react.dev/learn/passing-data-deeply-with-context" },
      { label: "React — Scaling Up with Reducer and Context", href: "https://react.dev/learn/scaling-up-with-reducer-and-context" },
      { label: "Redux — Style Guide", href: "https://redux.js.org/style-guide/" },
      { label: "Zustand — Introduction", href: "https://zustand.docs.pmnd.rs/getting-started/introduction" }
    ],
    related: ["client-vs-server-state", "react-vs-vue", "feature-vs-layer-architecture"],
    practiceQuestions: [
      { en: "Which shared values in your application change often enough to need selector-based subscriptions?", id: "Nilai bersama apa dalam aplikasi Anda yang berubah cukup sering sehingga membutuhkan subscription berbasis selector?" },
      { en: "What debugging capability would justify adding a store library to your current project?", id: "Kemampuan debugging apa yang dapat membenarkan penambahan store library pada project Anda?" }
    ]
  },
  {
    slug: "feature-vs-layer-architecture",
    term: "Feature-based vs Layer-based",
    category: { en: "Frontend Architecture", id: "Arsitektur Frontend" },
    title: { en: "Feature-based vs Layer-based Architecture", id: "Arsitektur Feature-based vs Layer-based" },
    summary: { en: "How organizing code by business capability or technical role changes navigation, coupling, ownership, and scaling—and why most mature applications use a deliberate hybrid.", id: "Dampak pengorganisasian kode berdasarkan fitur bisnis atau peran teknis terhadap navigasi, coupling, ownership, dan skala, serta alasan banyak aplikasi matang menggunakan pendekatan hybrid." },
    readingTime: { en: "15 min", id: "15 menit" },
    keywords: ["feature based architecture", "layer based structure", "frontend folder structure", "scalable frontend", "clean architecture", "project structure"],
    question: { en: "Would you organize a frontend by feature or by technical layer?", id: "Apakah Anda menyusun project frontend berdasarkan fitur atau technical layer?" },
    definition: [
      { en: "A layer-based structure groups files by technical responsibility: components with components, API services with services, hooks with hooks. A feature-based structure groups files by the product capability they change together: orders, billing, identity, or shipment tracking.", id: "Struktur layer-based mengelompokkan file berdasarkan tanggung jawab teknis: component bersama component, API service bersama service, dan hook bersama hook. Struktur feature-based mengelompokkan file berdasarkan kapabilitas produk yang berubah bersama, seperti order, billing, identity, atau shipment tracking." },
      { en: "Folder names alone do not create architecture. Architecture also includes public APIs, permitted dependency directions, ownership, runtime boundaries, and how violations are detected. A public API (Application Programming Interface) here means the small set of exports another module is allowed to use—not a network endpoint.", id: "Nama folder saja tidak membentuk arsitektur. Arsitektur juga mencakup public API, arah dependency yang diizinkan, ownership, batas runtime, serta cara mendeteksi pelanggaran. Public API (Application Programming Interface) dalam konteks ini berarti sekumpulan kecil export yang boleh digunakan modul lain, bukan endpoint jaringan." }
    ],
    why: [
      { en: "Project structure is a navigation and coupling tool. As a codebase grows, the useful question becomes which files change together and which teams own them. Colocation can reduce search time and accidental cross-feature impact, while shared layers reduce justified duplication.", id: "Struktur project merupakan alat untuk navigasi dan mengelola coupling. Ketika codebase membesar, pertanyaan pentingnya adalah file mana yang sering berubah bersama dan tim mana yang memilikinya. Colocation dapat mengurangi waktu pencarian serta dampak lintas fitur yang tidak disengaja, sedangkan shared layer mengurangi duplikasi yang memang layak disatukan." }
    ],
    theory: [
      { en: "Layer-based systems optimize for technical consistency: a developer knows where all services live. Feature-based systems optimize for change locality: a developer can understand one capability without traversing the whole repository. The better axis depends on team topology, domain boundaries, and change frequency.", id: "Sistem layer-based mengutamakan konsistensi teknis: developer mengetahui lokasi semua service. Sistem feature-based mengutamakan kedekatan perubahan: developer dapat memahami satu kapabilitas tanpa menjelajahi seluruh repository. Sumbu yang lebih sesuai bergantung pada struktur tim, batas domain, dan frekuensi perubahan." },
      { en: "A practical hybrid often has app-level composition, feature modules, domain entities, and a constrained shared area. Dependencies should normally point inward toward stable contracts, while features should not import private internals from sibling features.", id: "Pendekatan hybrid yang realistis biasanya memiliki composition pada level app, modul fitur, entity domain, dan area shared yang dibatasi. Dependency sebaiknya mengarah pada kontrak yang stabil, sedangkan satu fitur tidak boleh mengimpor bagian internal fitur lain." }
    ],
    analogy: [
      { en: "Imagine a workshop fulfilling custom orders. You can keep all hammers in one room, all saws in another, and all screws in a third; tools are easy to find by type, but one order requires many trips. Or you can give each product team a workbench with the tools it uses, while truly shared machines stay in one common area. Layer-based and feature-based architecture make that same choice about organizing code and change.", id: "Bayangkan bengkel yang mengerjakan pesanan khusus. Anda dapat menyimpan semua palu di satu ruangan, semua gergaji di ruangan lain, dan semua sekrup di ruangan ketiga; alat mudah dicari berdasarkan jenisnya, tetapi satu pesanan membutuhkan banyak perjalanan. Atau setiap tim produk dapat memiliki meja kerja dengan alat yang sering digunakan, sementara mesin yang benar-benar dipakai bersama tetap di area umum. Arsitektur layer-based dan feature-based membuat pilihan serupa saat mengatur kode dan perubahan." }
    ],
    realExample: [
      { en: "Adding shipment cancellation in a layer-based project might touch components/CancelDialog, hooks/useCancelShipment, services/shipmentApi, stores/shipment, and tests elsewhere. In a feature module, those files can live under features/cancel-shipment with a small public export. Truly generic Button and HTTP client code remain shared.", id: "Menambahkan pembatalan pengiriman pada project layer-based dapat menyentuh components/CancelDialog, hooks/useCancelShipment, services/shipmentApi, stores/shipment, dan test di lokasi lain. Dalam modul fitur, file tersebut dapat berada di features/cancel-shipment dengan public export yang kecil. Button generik dan HTTP client yang benar-benar digunakan bersama tetap berada di area shared." }
    ],
    code: {
      label: { en: "A pragmatic hybrid structure", id: "Contoh struktur hybrid" }, language: "text",
      value: `src/
  app/                 # routing, providers, application composition
  features/
    cancel-shipment/
      ui/
      model/
      api/
      index.ts          # explicit public API
  entities/
    shipment/
  shared/
    ui/
    lib/

# Rule: features import shared/entities, not sibling internals.`
    },
    codeExplanation: [
      { en: "cancel-shipment keeps the UI, state model, API calls, and tests that change with that capability close together. index.ts defines the small surface other modules may use. shared contains only genuinely cross-feature building blocks. The comment describes a dependency rule; in a larger team, that rule can also be documented and enforced with lint or module-boundary tooling.", id: "cancel-shipment menempatkan UI, model state, pemanggilan API, dan test yang berubah bersama dalam lokasi berdekatan. index.ts menjadi public API kecil yang boleh dipakai modul lain. shared hanya menampung building block yang benar-benar digunakan lintas fitur. Komentar tersebut merupakan aturan dependency; pada tim besar, aturan ini dapat didokumentasikan dan ditegakkan dengan lint atau tooling batas modul." }
    ],
    comparison: {
      headers: [{ en: "Aspect", id: "Aspek" }, { en: "Layer-based", id: "Layer-based" }, { en: "Feature-based", id: "Feature-based" }],
      rows: [
        [{ en: "Grouping axis", id: "Dasar pengelompokan" }, { en: "Technical role", id: "Peran teknis" }, { en: "Business capability", id: "Kapabilitas bisnis" }],
        [{ en: "Change locality", id: "Kedekatan perubahan" }, { en: "Often spread across folders", id: "Sering tersebar di banyak folder" }, { en: "Usually colocated", id: "Umumnya berdekatan" }],
        [{ en: "Early-stage simplicity", id: "Kesederhanaan awal" }, { en: "High", id: "Tinggi" }, { en: "Requires identifying feature boundaries", id: "Memerlukan identifikasi batas fitur" }],
        [{ en: "Common failure", id: "Kegagalan umum" }, { en: "Large generic folders and hidden coupling", id: "Folder generik membesar dan coupling tersembunyi" }, { en: "Duplicated helpers and cross-feature imports", id: "Helper terduplikasi dan import lintas fitur" }]
      ]
    },
    whenToUse: {
      good: [
        { en: "Layer-based for small applications, libraries, or codebases whose technical roles are the clearest stable boundary.", id: "Layer-based untuk aplikasi kecil, library, atau codebase yang batas paling stabilnya adalah peran teknis." },
        { en: "Feature-based for products with distinct capabilities, parallel teams, and changes that repeatedly cross technical layers.", id: "Feature-based untuk produk dengan kapabilitas jelas, beberapa tim paralel, dan perubahan yang berulang kali melintasi technical layer." }
      ],
      poor: [
        { en: "Creating dozens of one-file feature folders before domain boundaries are understood.", id: "Membuat puluhan folder fitur berisi satu file sebelum batas domain dipahami." },
        { en: "Moving everything reused twice into shared, turning shared into an ownerless dependency hub.", id: "Memindahkan semua kode yang dipakai dua kali ke shared hingga menjadi pusat dependency tanpa pemilik." }
      ]
    },
    mistakes: [
      { en: "Treating a copied folder template as architecture without enforcing dependency rules or public APIs.", id: "Menganggap template folder sebagai arsitektur tanpa aturan dependency atau public API." },
      { en: "Demanding zero duplication. A small duplication can preserve boundaries better than a premature shared abstraction.", id: "Menuntut tidak ada duplikasi sama sekali. Duplikasi kecil kadang lebih baik untuk menjaga batas daripada abstraksi shared yang terlalu dini." }
    ],
    seniorPerspective: [
      { en: "Use repository evidence: examine files that change together, code-review ownership, cyclic imports, test setup cost, and onboarding paths. Migrate incrementally around stable seams, document dependency rules, and automate only rules the team can explain.", id: "Gunakan bukti dari repository: periksa file yang sering berubah bersama, ownership code review, cyclic import, biaya setup test, dan jalur onboarding. Lakukan migrasi bertahap pada batas yang stabil, dokumentasikan aturan dependency, dan otomatisasi hanya aturan yang dapat dijelaskan tim." }
    ],
    keyPoints: [
      { en: "Feature and layer structures optimize different navigation and change patterns.", id: "Struktur feature dan layer mengoptimalkan pola navigasi serta perubahan yang berbeda." },
      { en: "A deliberate hybrid with clear dependency boundaries is often more practical than a pure model.", id: "Pendekatan hybrid dengan batas dependency yang jelas sering lebih realistis daripada model yang sepenuhnya murni." }
    ],
    references: [
      { label: "Redux — Style Guide: Feature Folders", href: "https://redux.js.org/style-guide/#structure-files-as-feature-folders-with-single-file-logic" },
      { label: "React — Thinking in React", href: "https://react.dev/learn/thinking-in-react" },
      { label: "Next.js — Project Structure", href: "https://nextjs.org/docs/app/getting-started/project-structure" }
    ],
    related: ["clean-architecture-frontend", "context-vs-state-management", "client-vs-server-state", "react-vs-vue", "nextjs-vs-nuxt"],
    practiceQuestions: [
      { en: "Which files in your current repository repeatedly change together but live far apart?", id: "File apa dalam repository Anda yang sering berubah bersama tetapi lokasinya berjauhan?" },
      { en: "What should be public from a feature module, and how would you prevent access to its internals?", id: "Bagian apa yang seharusnya menjadi public API sebuah modul fitur, dan bagaimana Anda mencegah akses ke bagian internalnya?" }
    ]
  }
];
