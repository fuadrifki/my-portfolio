import type { KnowledgeEntry } from "@/data/frontend-knowledge";

export const microfrontendArchitectureKnowledge: KnowledgeEntry = {
  slug: "microfrontend-architecture",
  term: "Microfrontend Architecture",
  category: { en: "Frontend Architecture", id: "Arsitektur Frontend" },
  title: { en: "Microfrontend Architecture", id: "Arsitektur Microfrontend" },
  summary: {
    en: "Understand how independently owned frontend domains can form one product, what integration contracts they need, and when the operational cost is justified.",
    id: "Pahami bagaimana domain frontend yang dimiliki secara mandiri dapat membentuk satu produk, kontrak integrasi yang dibutuhkan, dan kapan biaya operasionalnya layak ditanggung."
  },
  readingTime: { en: "17 min", id: "17 menit" },
  keywords: [
    "microfrontend",
    "micro frontend architecture",
    "modular monolith",
    "independent deployment",
    "runtime integration",
    "module federation",
    "web components",
    "frontend platform",
    "domain ownership"
  ],
  question: {
    en: "When does splitting one product into independently owned frontend applications create more value than integration cost?",
    id: "Kapan memecah satu produk menjadi aplikasi frontend yang dimiliki secara mandiri memberi manfaat lebih besar daripada biaya integrasinya?"
  },
  definition: [
    {
      en: "Microfrontend architecture applies modular and distributed-system ideas to the frontend. One user experience is composed from smaller frontend applications or domains that can be developed, tested, and potentially released by different teams. It is an architectural approach, not a framework, library, repository layout, or requirement to use several UI technologies.",
      id: "Arsitektur microfrontend menerapkan gagasan modular dan sistem terdistribusi pada frontend. Satu pengalaman pengguna disusun dari beberapa aplikasi atau domain frontend yang lebih kecil, yang dapat dikembangkan, diuji, dan berpotensi dirilis oleh tim berbeda. Microfrontend adalah pendekatan arsitektur, bukan framework, library, susunan repository, atau kewajiban memakai beberapa teknologi UI."
    },
    {
      en: "A component usually encapsulates reusable UI behavior. A feature module groups code for one capability inside an application. A frontend application owns a runnable user experience. A microfrontend is normally an application-scale or domain-scale part with explicit ownership and integration contracts, designed for a meaningful degree of delivery independence. Organizations use these terms differently, so responsibilities and release behavior matter more than labels.",
      id: "Komponen biasanya membungkus perilaku UI yang reusable. Feature module mengelompokkan kode untuk satu kapabilitas di dalam aplikasi. Aplikasi frontend memiliki pengalaman pengguna yang dapat dijalankan. Microfrontend umumnya merupakan bagian berskala aplikasi atau domain dengan ownership dan kontrak integrasi yang jelas, serta dirancang untuk memiliki tingkat kemandirian delivery yang bermakna. Istilah di tiap organisasi dapat berbeda, sehingga tanggung jawab dan perilaku rilis lebih penting daripada label."
    },
    {
      en: "A reusable component is not automatically a microfrontend, and placing each page in a separate deployment does not automatically create good boundaries. Useful boundaries follow product domains, team ownership, change patterns, and operational needs. They should reduce costly coordination without breaking one user task into a network of tightly coupled fragments.",
      id: "Komponen reusable tidak otomatis menjadi microfrontend, dan menempatkan setiap halaman dalam deployment terpisah tidak otomatis menghasilkan batas yang baik. Batas yang berguna mengikuti domain produk, ownership tim, pola perubahan, dan kebutuhan operasional. Batas tersebut seharusnya mengurangi koordinasi yang mahal tanpa memecah satu tugas pengguna menjadi banyak fragmen yang saling bergantung erat."
    }
  ],
  why: [
    {
      en: "The main benefit is often organizational. Several teams can own distinct product domains, make local technical decisions, test their work, and move through separate delivery pipelines without waiting for one large coordinated frontend release. The approach can also support gradual replacement of a legacy application, because one domain can migrate while the remaining system continues to run.",
      id: "Manfaat utamanya sering bersifat organisasional. Beberapa tim dapat memiliki domain produk yang berbeda, mengambil keputusan teknis lokal, menguji pekerjaannya, dan bergerak melalui pipeline delivery terpisah tanpa menunggu satu rilis frontend besar yang terkoordinasi. Pendekatan ini juga dapat mendukung penggantian aplikasi legacy secara bertahap karena satu domain dapat dimigrasikan sementara bagian lain tetap berjalan."
    },
    {
      en: "Technical isolation may narrow builds, failures, and migrations, but it adds composition, compatibility, testing, monitoring, and platform work. Microfrontends cannot repair unclear product ownership, weak module design, or poor communication. A technical boundary only helps when teams have the authority and responsibility to operate inside it.",
      id: "Isolasi teknis dapat memperkecil cakupan build, kegagalan, dan migrasi, tetapi menambah pekerjaan composition, kompatibilitas, testing, monitoring, dan platform. Microfrontend tidak dapat memperbaiki ownership produk yang kabur, desain modul yang lemah, atau komunikasi yang buruk. Batas teknis hanya membantu ketika tim memiliki wewenang dan tanggung jawab untuk bekerja di dalamnya."
    }
  ],
  analogy: [
    {
      en: "Imagine a shopping mall. Visitors experience one destination with shared entrances, signs, security, and facilities, but individual stores have different owners, staff, inventory, and operating decisions. Mall management defines shared rules; each store operates its own domain. A broken store should ideally not close the entire mall.",
      id: "Bayangkan sebuah pusat perbelanjaan. Pengunjung merasakan satu tujuan dengan pintu masuk, petunjuk, keamanan, dan fasilitas bersama, tetapi setiap toko memiliki pemilik, staf, persediaan, dan keputusan operasional sendiri. Pengelola pusat perbelanjaan menetapkan aturan bersama; setiap toko menjalankan domainnya. Toko yang bermasalah idealnya tidak menutup seluruh pusat perbelanjaan."
    },
    {
      en: "The analogy breaks down because frontend parts share a browser, network, document, session, performance budget, and often JavaScript dependencies. One failing remote script can affect navigation or layout, and users expect a smoother journey between domains than they expect between unrelated stores. Software contracts and version combinations also change more frequently than physical mall facilities.",
      id: "Analogi ini memiliki batas karena bagian frontend berbagi browser, jaringan, document, session, performance budget, dan sering kali dependency JavaScript. Satu remote script yang gagal dapat memengaruhi navigasi atau layout, dan pengguna mengharapkan perpindahan antar-domain yang lebih mulus daripada perpindahan antar-toko. Kontrak software dan kombinasi versinya juga berubah lebih sering daripada fasilitas fisik."
    }
  ],
  analogyConclusion: [
    {
      en: "Independence works when each store owns a meaningful business area and the mall supplies a small, dependable platform. More storefronts are not useful if every decision still requires every owner.",
      id: "Kemandirian bekerja ketika setiap toko memiliki area bisnis yang bermakna dan pengelola menyediakan platform bersama yang kecil serta andal. Menambah jumlah toko tidak berguna jika setiap keputusan tetap membutuhkan semua pemilik."
    }
  ],
  analogyMapping: [
    {
      en: "The mall is the overall application experience. Stores are product domains or microfrontends, store owners are domain teams, and shared signs and facilities are navigation, design conventions, authentication support, and platform infrastructure. Agreements between stores and management represent integration and compatibility contracts.",
      id: "Pusat perbelanjaan mewakili pengalaman aplikasi secara keseluruhan. Toko mewakili domain produk atau microfrontend, pemilik toko mewakili tim domain, sedangkan petunjuk dan fasilitas bersama mewakili navigasi, konvensi desain, dukungan authentication, serta infrastruktur platform. Kesepakatan antara toko dan pengelola mewakili kontrak integrasi serta kompatibilitas."
    }
  ],
  theory: [
    {
      en: "A well-structured monolithic frontend can keep feature boundaries, tests, and ownership in one repository and produce one coordinated build and release. A modular monolith preserves those code boundaries without distributing runtime deployment. Microfrontends add stronger delivery or runtime boundaries when coordination itself has become a material bottleneck. Codebase size alone does not prove that distribution is needed.",
      id: "Frontend monolitik yang terstruktur baik dapat mempertahankan batas fitur, test, dan ownership dalam satu repository serta menghasilkan satu build dan rilis terkoordinasi. Modular monolith mempertahankan batas kode tersebut tanpa mendistribusikan deployment runtime. Microfrontend menambahkan batas delivery atau runtime yang lebih kuat ketika koordinasi sudah menjadi hambatan nyata. Besarnya codebase saja tidak membuktikan perlunya distribusi."
    },
    {
      en: "Build-time integration publishes independently maintained packages that the host consumes during its own build. It can separate source ownership and release packages, but users still receive the host's compiled release, so a package update normally needs a host rebuild and deployment. Runtime integration loads or composes separately built artifacts while the application runs. It enables greater release flexibility but adds remote availability, version negotiation, loading states, failure isolation, and security concerns.",
      id: "Integrasi build-time menerbitkan package yang dirawat secara mandiri lalu digunakan host ketika build. Cara ini dapat memisahkan ownership source dan rilis package, tetapi pengguna tetap menerima hasil kompilasi host sehingga update package biasanya membutuhkan build dan deployment host. Integrasi runtime memuat atau menyusun artifact terpisah ketika aplikasi berjalan. Cara ini memberi fleksibilitas rilis lebih besar, tetapi menambah persoalan ketersediaan remote, negosiasi versi, loading state, isolasi kegagalan, dan keamanan."
    },
    {
      en: "Route-level composition assigns major routes or product areas to separate applications. It creates a clear boundary and can be implemented at a gateway, server, edge layer, or client router, but shared layout, navigation transitions, session behavior, and cross-route state need deliberate design. Component-level composition embeds smaller parts on one page. Web Components can provide framework-neutral custom-element contracts, while Module Federation is one possible runtime module-loading mechanism. Neither tool defines team ownership, domain boundaries, release safety, or the complete architecture.",
      id: "Composition pada level route memberikan route utama atau area produk kepada aplikasi terpisah. Batasnya jelas dan dapat diterapkan di gateway, server, edge layer, atau client router, tetapi shared layout, transisi navigasi, perilaku session, dan state lintas route harus dirancang dengan sengaja. Composition pada level komponen menanamkan bagian yang lebih kecil di satu halaman. Web Components dapat menyediakan kontrak custom element yang netral terhadap framework, sedangkan Module Federation adalah salah satu mekanisme pemuatan module saat runtime. Keduanya tidak menentukan ownership tim, batas domain, keamanan rilis, atau keseluruhan arsitektur."
    },
    {
      en: "Independence has several dimensions. Organizational independence means a team can make decisions for a domain. Build independence means its artifact has a separate pipeline. Deployment independence means that artifact can reach production without rebuilding others. Runtime independence means parts can load, fail, or change without taking down the whole experience. A system may achieve some dimensions and not others; calling something a microfrontend does not guarantee all four.",
      id: "Kemandirian memiliki beberapa dimensi. Kemandirian organisasi berarti tim dapat mengambil keputusan untuk satu domain. Kemandirian build berarti artifact memiliki pipeline terpisah. Kemandirian deployment berarti artifact dapat mencapai production tanpa membangun ulang bagian lain. Kemandirian runtime berarti bagian dapat dimuat, gagal, atau berubah tanpa menjatuhkan seluruh pengalaman. Sebuah sistem dapat mencapai sebagian dimensi saja; menyebut sesuatu microfrontend tidak menjamin keempatnya."
    },
    {
      en: "Communication should use small explicit contracts: URL conventions for navigation, typed inputs or attributes, domain events for meaningful facts, and documented authentication context when appropriate. Avoid importing private internals or using one shared mutable global store as the default message bus. Frontend-to-frontend communication is also different from consuming backend APIs; both boundaries need their own ownership, error, and compatibility rules.",
      id: "Komunikasi sebaiknya memakai kontrak eksplisit yang kecil: konvensi URL untuk navigasi, input atau attribute bertipe, domain event untuk fakta yang bermakna, serta authentication context yang terdokumentasi jika diperlukan. Hindari mengimpor bagian internal atau memakai satu global store mutable sebagai message bus default. Komunikasi antar-frontend juga berbeda dari konsumsi API backend; kedua batas membutuhkan aturan ownership, error, dan kompatibilitas masing-masing."
    },
    {
      en: "Shared dependencies create a tension between reuse and autonomy. Sharing a framework runtime or design-system package can reduce duplicate bytes and visual drift, but strict singleton versions can couple releases. Bundling everything independently increases isolation but can duplicate large runtimes and produce inconsistent behavior. Teams should share stable contracts and intentional foundations, define supported version ranges, and avoid coupling domains through convenient internal utilities.",
      id: "Dependency bersama menciptakan tarik-menarik antara reuse dan otonomi. Berbagi framework runtime atau package design system dapat mengurangi duplikasi ukuran serta perbedaan visual, tetapi versi singleton yang ketat dapat mengikat rilis antar-tim. Membundel semuanya secara mandiri meningkatkan isolasi, tetapi dapat menduplikasi runtime besar dan menghasilkan perilaku yang tidak konsisten. Tim sebaiknya berbagi kontrak stabil dan fondasi yang disengaja, menentukan rentang versi yang didukung, serta menghindari coupling domain melalui utility internal yang sekadar praktis."
    }
  ],
  realExample: [
    {
      en: "Consider an illustrative commerce product. A catalog team owns browsing and product details, a checkout team owns cart-to-payment flow, and an account team owns profile and order history. An application shell supplies top-level navigation, route resolution, safe authentication context, design foundations, and failure fallbacks. Users see one product, while teams operate distinct domains.",
      id: "Bayangkan sebuah produk commerce sebagai contoh ilustratif. Tim katalog memiliki browsing dan detail produk, tim checkout memiliki alur dari cart sampai pembayaran, sedangkan tim akun memiliki profil dan riwayat pesanan. Application shell menyediakan navigasi tingkat atas, penyelesaian route, authentication context yang aman, fondasi desain, dan fallback kegagalan. Pengguna melihat satu produk, sementara tim mengoperasikan domain yang berbeda."
    },
    {
      en: "The catalog can navigate to /checkout with product identifiers through an agreed URL or send a documented add-to-cart event. Checkout should not import catalog internals or read its private store. Backend authorization still decides what the user may purchase or view. Contracts define navigation, shared session capabilities, analytics fields, UI compatibility, and what the shell displays if a domain artifact cannot load. These boundaries are examples, not a universal commerce blueprint.",
      id: "Katalog dapat mengarahkan pengguna ke /checkout dengan identifier produk melalui URL yang disepakati atau mengirim event add-to-cart yang terdokumentasi. Checkout tidak boleh mengimpor bagian internal katalog atau membaca store privatnya. Authorization backend tetap menentukan apa yang boleh dibeli atau dilihat pengguna. Kontrak menetapkan navigasi, kemampuan session bersama, field analytics, kompatibilitas UI, dan tampilan shell ketika artifact domain gagal dimuat. Batas ini adalah contoh, bukan pola wajib untuk semua aplikasi commerce."
    }
  ],
  code: {
    label: { en: "Illustrative route-level host contract", id: "Ilustrasi kontrak host pada level route" },
    language: "ts",
    value: `// Illustrative pseudocode: the loader depends on your platform and tooling.
type Microfrontend = {
  mount(target: HTMLElement, context: Readonly<AppContext>): () => void;
};

type AppContext = {
  locale: "en" | "id";
  navigate(path: string): void;
  reportError(error: unknown, domain: string): void;
};

type RouteRegistration = {
  matches(pathname: string): boolean;
  domain: "catalog" | "checkout" | "account";
  load(): Promise<Microfrontend>;
};

async function renderRoute(
  route: RouteRegistration,
  target: HTMLElement,
  context: Readonly<AppContext>,
): Promise<() => void> {
  target.replaceChildren(createLoadingMessage());

  try {
    const application = await route.load();
    target.replaceChildren();
    return application.mount(target, context);
  } catch (error) {
    context.reportError(error, route.domain);
    target.replaceChildren(createFailureMessage(route.domain));
    return () => {};
  }
}

// The host calls the returned function before mounting another route.
// Artifact URLs, integrity checks, retries, and version negotiation are
// production concerns intentionally omitted from this small example.`
  },
  codeExplanation: [
    {
      en: "The host depends on a small mount-and-cleanup contract instead of a remote application's private framework code. It provides narrow platform capabilities through AppContext, shows a loading state, reports a domain-tagged failure, and renders a fallback if loading fails. Calling the returned cleanup before switching routes prevents abandoned listeners or mounted trees.",
      id: "Host bergantung pada kontrak mount-dan-cleanup yang kecil, bukan pada kode framework privat milik aplikasi remote. Host menyediakan kemampuan platform yang terbatas melalui AppContext, menampilkan loading state, melaporkan kegagalan dengan label domain, dan merender fallback jika pemuatan gagal. Memanggil cleanup sebelum berganti route mencegah listener atau tree lama tetap aktif."
    },
    {
      en: "This is framework-neutral pseudocode, not production-ready configuration. A real implementation must define how artifacts are resolved and trusted, which contract versions are compatible, how rollbacks work, whether server rendering is required, and how navigation remains accessible. Module Federation, Web Components, server composition, or another loader could implement the load step with different constraints.",
      id: "Ini adalah pseudocode netral-framework, bukan konfigurasi siap production. Implementasi nyata harus menentukan cara artifact ditemukan dan dipercaya, versi kontrak yang kompatibel, mekanisme rollback, kebutuhan server rendering, serta cara menjaga navigasi tetap aksesibel. Module Federation, Web Components, server composition, atau loader lain dapat menerapkan langkah load dengan batasan yang berbeda."
    }
  ],
  comparison: {
    headers: [
      { en: "Concern", id: "Aspek" },
      { en: "Modular monolith", id: "Modular monolith" },
      { en: "Microfrontends", id: "Microfrontend" }
    ],
    rows: [
      [
        { en: "Build and release", id: "Build dan rilis" },
        { en: "Usually one coordinated artifact and release", id: "Biasanya satu artifact dan rilis terkoordinasi" },
        { en: "Can use separate artifacts and release paths, if infrastructure supports them", id: "Dapat memakai artifact dan jalur rilis terpisah jika infrastrukturnya mendukung" }
      ],
      [
        { en: "Ownership", id: "Ownership" },
        { en: "Clear module ownership within one application is possible", id: "Ownership modul yang jelas tetap dapat diterapkan dalam satu aplikasi" },
        { en: "Domain teams can own code, pipeline, integration, and operation", id: "Tim domain dapat memiliki kode, pipeline, integrasi, dan operasi" }
      ],
      [
        { en: "Integration", id: "Integrasi" },
        { en: "Mostly compile-time calls with one dependency graph", id: "Umumnya pemanggilan compile-time dalam satu dependency graph" },
        { en: "Explicit runtime or delivery contracts and additional failure modes", id: "Kontrak runtime atau delivery yang eksplisit serta mode kegagalan tambahan" }
      ],
      [
        { en: "Dependencies", id: "Dependency" },
        { en: "Central versions are simpler to align", id: "Versi terpusat lebih mudah diselaraskan" },
        { en: "Teams balance shared runtimes against duplication and release coupling", id: "Tim menyeimbangkan runtime bersama dengan duplikasi serta coupling rilis" }
      ],
      [
        { en: "Testing and operations", id: "Testing dan operasi" },
        { en: "Fewer deployed combinations and boundaries to observe", id: "Lebih sedikit kombinasi deployment dan batas yang harus diamati" },
        { en: "Needs contract, integration, end-to-end, version-combination, and cross-boundary monitoring", id: "Membutuhkan contract test, integration test, end-to-end test, pengujian kombinasi versi, dan monitoring lintas batas" }
      ]
    ]
  },
  whenToUse: {
    good: [
      { en: "Several stable teams have genuine end-to-end ownership of distinct product domains.", id: "Beberapa tim yang stabil memiliki ownership end-to-end atas domain produk yang berbeda." },
      { en: "Coordinated frontend releases create measured, recurring delivery bottlenecks.", id: "Rilis frontend terkoordinasi menimbulkan hambatan delivery yang terukur dan berulang." },
      { en: "Product areas need independent release cycles and can maintain small compatibility contracts.", id: "Area produk membutuhkan siklus rilis mandiri dan dapat menjaga kontrak kompatibilitas yang kecil." },
      { en: "A legacy frontend must be replaced incrementally behind clear route or domain boundaries.", id: "Frontend legacy perlu diganti secara bertahap melalui batas route atau domain yang jelas." },
      { en: "The organization can fund platform engineering, integration testing, monitoring, and incident ownership.", id: "Organisasi mampu mendukung platform engineering, integration testing, monitoring, dan ownership insiden." }
    ],
    poor: [
      { en: "One small team already coordinates changes and releases effectively.", id: "Satu tim kecil sudah dapat mengoordinasikan perubahan dan rilis dengan efektif." },
      { en: "The proposed boundaries follow visual widgets rather than durable product domains.", id: "Batas yang diusulkan mengikuti widget visual, bukan domain produk yang bertahan lama." },
      { en: "Every feature needs the same global state and changes with every other feature.", id: "Setiap fitur membutuhkan global state yang sama dan selalu berubah bersama fitur lain." },
      { en: "Runtime composition would add more availability and debugging risk than delivery independence is worth.", id: "Composition runtime menambah risiko availability dan debugging yang lebih besar daripada nilai kemandirian delivery." },
      { en: "The team lacks capacity to operate versioned contracts, pipelines, fallbacks, and cross-application observability.", id: "Tim tidak memiliki kapasitas untuk mengoperasikan kontrak berversi, pipeline, fallback, dan observability lintas aplikasi." }
    ]
  },
  mistakes: [
    {
      en: "Splitting every page or widget into a microfrontend. Too many boundaries increase network requests, pipelines, version combinations, and incident paths. Start from cohesive domains and split only where independence pays for itself.",
      id: "Memecah setiap halaman atau widget menjadi microfrontend. Terlalu banyak batas menambah network request, pipeline, kombinasi versi, dan jalur insiden. Mulailah dari domain yang cohesive dan pecah hanya ketika kemandirian memberi manfaat nyata."
    },
    {
      en: "Choosing boundaries only from the visible UI. A card may depend on several domains, while one domain may span routes. Map business ownership, data, changes, and release needs before choosing composition units.",
      id: "Menentukan batas hanya dari UI yang terlihat. Sebuah card dapat bergantung pada beberapa domain, sedangkan satu domain dapat mencakup banyak route. Petakan ownership bisnis, data, pola perubahan, dan kebutuhan rilis sebelum memilih unit composition."
    },
    {
      en: "Using one shared mutable store as the universal integration layer. This hides contracts and couples release timing. Prefer URLs, narrow inputs, and meaningful events; share state only when its ownership and compatibility are explicit.",
      id: "Menggunakan satu shared mutable store sebagai lapisan integrasi universal. Cara ini menyembunyikan kontrak dan mengikat waktu rilis. Utamakan URL, input terbatas, dan event yang bermakna; bagikan state hanya ketika ownership dan kompatibilitasnya jelas."
    },
    {
      en: "Sharing every dependency or sharing none. The first choice recreates coordinated upgrades; the second can duplicate framework runtimes and design behavior. Define a deliberate policy for stable platform dependencies and domain-private code.",
      id: "Membagikan semua dependency atau tidak berbagi sama sekali. Pilihan pertama menciptakan kembali upgrade terkoordinasi; pilihan kedua dapat menduplikasi framework runtime dan perilaku desain. Tetapkan kebijakan yang disengaja untuk dependency platform stabil dan kode privat domain."
    },
    {
      en: "Assuming separate builds equal independent user releases. Verify artifact publishing, host discovery, compatible contracts, progressive rollout, rollback, and what users receive when a remote is unavailable.",
      id: "Menganggap build terpisah sama dengan rilis pengguna yang mandiri. Pastikan publishing artifact, discovery oleh host, kontrak kompatibel, progressive rollout, rollback, dan pengalaman pengguna ketika remote tidak tersedia."
    },
    {
      en: "Duplicating navigation, authentication plumbing, analytics, or design foundations in every domain. Keep a small maintained platform where consistency is essential, without turning it into a central team that must approve every domain change.",
      id: "Menduplikasi navigasi, plumbing authentication, analytics, atau fondasi desain di setiap domain. Pertahankan platform kecil untuk bagian yang wajib konsisten tanpa menjadikannya tim pusat yang harus menyetujui setiap perubahan domain."
    },
    {
      en: "Introducing multiple frameworks for novelty rather than a migration or domain constraint. Technology freedom also increases runtime weight, accessibility variance, hiring needs, and debugging complexity.",
      id: "Memakai beberapa framework karena terlihat menarik, bukan karena kebutuhan migrasi atau batasan domain. Kebebasan teknologi juga menambah ukuran runtime, variasi aksesibilitas, kebutuhan keahlian, dan kompleksitas debugging."
    },
    {
      en: "Treating a frontend boundary as a security boundary. Browser code and separately loaded assets remain untrusted from the backend's perspective. Trusted services must enforce authorization and sensitive-data access.",
      id: "Menganggap batas frontend sebagai batas keamanan. Kode browser dan artifact yang dimuat terpisah tetap tidak tepercaya dari sudut pandang backend. Layanan tepercaya harus menegakkan authorization dan akses data sensitif."
    },
    {
      en: "Underestimating integration tests, observability, and ownership. Unit tests can pass while incompatible versions fail together. Assign responsibility for contracts, combination tests, dashboards, alerts, and cross-team incidents before adoption.",
      id: "Meremehkan integration test, observability, dan ownership. Unit test dapat lulus sementara versi yang tidak kompatibel gagal saat digabungkan. Tentukan tanggung jawab untuk kontrak, pengujian kombinasi, dashboard, alert, dan insiden lintas tim sebelum adopsi."
    }
  ],
  seniorPerspective: [
    {
      en: "Independent deployment is an operational capability, not a folder structure. A team must build and publish its artifact, prove compatibility, expose it safely to the host, release it to users, monitor it, and roll it back without requiring unrelated releases. Remote availability, cached old hosts, new remote versions, and partial rollouts create version combinations that contracts must tolerate.",
      id: "Independent deployment adalah kemampuan operasional, bukan susunan folder. Tim harus membangun dan menerbitkan artifact, membuktikan kompatibilitas, mengeksposnya dengan aman ke host, merilisnya kepada pengguna, memantaunya, dan melakukan rollback tanpa membutuhkan rilis lain. Ketersediaan remote, host lama yang masih ter-cache, versi remote baru, dan rollout parsial menghasilkan kombinasi versi yang harus ditoleransi kontrak."
    },
    {
      en: "Trust independently delivered assets only through controlled origins, integrity and content-security policies where applicable, dependency scanning, and reviewed pipelines. Authentication context may be shared as a narrow capability, but backend authorization remains authoritative. Correlate errors, versions, route transitions, and performance across shell and domains so one user journey can be reconstructed without exposing tokens or personal data.",
      id: "Percayai artifact yang dikirim secara mandiri hanya melalui origin terkontrol, kebijakan integrity dan content security jika sesuai, pemindaian dependency, dan pipeline yang ditinjau. Authentication context dapat dibagikan sebagai kemampuan terbatas, tetapi authorization backend tetap menjadi acuan. Hubungkan error, versi, perpindahan route, dan performa antara shell serta domain agar satu perjalanan pengguna dapat direkonstruksi tanpa membuka token atau data pribadi."
    },
    {
      en: "Use layered testing: each team owns unit and component tests, contract tests protect host-domain interfaces, a focused integration suite verifies supported combinations, and a small end-to-end suite protects critical journeys. Define graceful loading failures and rollback before the first independent release. The architecture is successful only if team flow improves without making user reliability worse.",
      id: "Gunakan testing berlapis: setiap tim memiliki unit dan component test, contract test melindungi interface host-domain, integration suite terarah memverifikasi kombinasi yang didukung, dan end-to-end suite kecil melindungi perjalanan kritis. Tentukan fallback kegagalan loading dan rollback sebelum rilis mandiri pertama. Arsitektur berhasil hanya jika alur kerja tim membaik tanpa menurunkan keandalan bagi pengguna."
    }
  ],
  keyPoints: [
    {
      en: "Microfrontends organize one frontend experience around independently owned domains; components and separate bundles alone do not create that architecture.",
      id: "Microfrontend menyusun satu pengalaman frontend berdasarkan domain yang dimiliki secara mandiri; komponen dan bundle terpisah saja tidak membentuk arsitektur tersebut."
    },
    {
      en: "Organizational, build, deployment, and runtime independence are different capabilities and must be evaluated separately.",
      id: "Kemandirian organisasi, build, deployment, dan runtime adalah kemampuan yang berbeda dan harus dievaluasi secara terpisah."
    },
    {
      en: "Explicit contracts, failure handling, compatibility, testing, and observability are the price of distributed frontend delivery.",
      id: "Kontrak eksplisit, penanganan kegagalan, kompatibilitas, testing, dan observability adalah biaya dari delivery frontend yang terdistribusi."
    },
    {
      en: "A modular monolith is a valid and often simpler answer when one release process and team structure are not real bottlenecks.",
      id: "Modular monolith adalah jawaban yang valid dan sering lebih sederhana ketika satu proses rilis serta struktur tim bukan hambatan nyata."
    }
  ],
  references: [
    { label: "Martin Fowler — Micro Frontends", href: "https://martinfowler.com/articles/micro-frontends.html" },
    { label: "webpack — Module Federation", href: "https://webpack.js.org/concepts/module-federation/" },
    { label: "MDN — Web Components", href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components" },
    { label: "MDN — Using custom elements", href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements" }
  ],
  related: [
    "feature-vs-layer-architecture",
    "clean-architecture-frontend",
    "design-systems-frontend",
    "api-integration-data-flow",
    "context-vs-state-management"
  ],
  practiceQuestions: [
    {
      en: "Which measured coordination problem would microfrontends solve that a modular monolith cannot solve simply enough?",
      id: "Masalah koordinasi terukur apa yang dapat diselesaikan microfrontend tetapi tidak dapat diselesaikan dengan cukup sederhana oleh modular monolith?"
    },
    {
      en: "Do proposed boundaries match stable product ownership, or are they merely convenient visual and repository divisions?",
      id: "Apakah batas yang diusulkan sesuai dengan ownership produk yang stabil, atau hanya pembagian visual dan repository yang praktis?"
    },
    {
      en: "Which independence is actually required—organizational, build, deployment, or runtime—and what new failure modes will it create?",
      id: "Kemandirian mana yang benar-benar dibutuhkan—organisasi, build, deployment, atau runtime—dan mode kegagalan baru apa yang akan muncul?"
    },
    {
      en: "Who owns the shell, contracts, compatibility tests, remote failures, monitoring, and cross-domain incidents?",
      id: "Siapa yang memiliki shell, kontrak, compatibility test, kegagalan remote, monitoring, dan insiden lintas domain?"
    }
  ]
};
