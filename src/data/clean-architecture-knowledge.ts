import type { KnowledgeEntry } from "@/data/frontend-knowledge";

export const cleanArchitectureKnowledge: KnowledgeEntry = {
  slug: "clean-architecture-frontend",
  term: "Clean Architecture",
  category: { en: "Architecture & Design", id: "Arsitektur & Desain" },
  title: { en: "Clean Architecture in Frontend Applications", id: "Clean Architecture pada Aplikasi Frontend" },
  summary: {
    en: "A practical way to keep business rules separate from UI frameworks, network clients, and other details that are likely to change.",
    id: "Cara praktis untuk memisahkan aturan bisnis dari framework UI, HTTP client, dan detail lain yang mudah berubah."
  },
  readingTime: { en: "16 min", id: "16 menit" },
  keywords: ["clean architecture", "frontend architecture", "dependency rule", "use case", "repository", "domain", "typescript"],
  question: {
    en: "How can frontend business rules survive changes to frameworks and APIs?",
    id: "Bagaimana agar aturan bisnis frontend tidak ikut berubah saat framework atau API berubah?"
  },
  definition: [
    {
      en: "Clean Architecture is an approach popularized by Robert C. Martin for separating business rules from delivery mechanisms and infrastructure. Its central dependency rule says source-code dependencies should point toward the policies that change least, not outward toward frameworks, databases, or network details.",
      id: "Clean Architecture adalah pendekatan yang dipopulerkan Robert C. Martin untuk memisahkan aturan bisnis dari cara aplikasi ditampilkan dan terhubung ke infrastruktur. Aturan utamanya sederhana: dependency kode mengarah ke aturan yang paling stabil, bukan ke framework, database, atau detail jaringan yang lebih mudah berubah."
    },
    {
      en: "In frontend applications, this does not require reproducing every backend layer. The useful idea is to keep meaningful product rules independent from React, Vue, fetch, Axios, browser storage, and API response shapes when that separation reduces change cost.",
      id: "Di frontend, kita tidak harus menyalin semua layer yang biasa dipakai backend. Yang penting adalah memisahkan aturan produk yang bernilai dari React, Vue, fetch, Axios, browser storage, dan bentuk respons API ketika pemisahan itu memang membuat perubahan lebih aman."
    }
  ],
  why: [
    {
      en: "When a component validates business rules, reshapes API responses, chooses endpoints, and renders the screen at once, one small API or UI change can affect everything. Tests also need browser and network setup even when they only check a product rule.",
      id: "Masalah muncul ketika satu komponen sekaligus memvalidasi aturan bisnis, mengubah respons API, menentukan endpoint, dan menampilkan layar. Perubahan kecil pada UI atau API akhirnya menyentuh banyak hal. Test untuk aturan sederhana pun ikut membutuhkan browser atau jaringan."
    },
    {
      en: "Separating those responsibilities creates stable seams. A use case can be tested with a small fake repository, while React or Vue focuses on input and rendering and the REST implementation focuses on HTTP details.",
      id: "Dengan tanggung jawab yang terpisah, setiap bagian punya batas yang jelas. Use case bisa dites memakai repository palsu yang sederhana. React atau Vue cukup menangani input dan tampilan, sedangkan implementasi REST menangani urusan HTTP."
    }
  ],
  analogy: [
    {
      en: "Imagine a small delivery business. The company has one important rule: a parcel may be handed to a courier only after its address is complete and its delivery fee has been calculated. That rule belongs to the business. The staff may accept orders at a counter today, through a phone app tomorrow, or through a partner next year. They may record shipments in a notebook, spreadsheet, or new computer system. Those tools can change, but the rule for releasing a parcel stays the same. Staff at each counter follow the rule instead of inventing their own version.",
      id: "Bayangkan usaha pengiriman kecil. Ada satu aturan penting: paket baru boleh diberikan ke kurir setelah alamatnya lengkap dan ongkirnya sudah dihitung. Aturan ini milik bisnis. Hari ini pelanggan mungkin datang ke loket, besok memesan lewat aplikasi, dan tahun depan lewat mitra. Data paket juga bisa dicatat di buku, spreadsheet, atau sistem baru. Alatnya boleh berubah, tetapi aturan sebelum paket diserahkan tetap sama. Setiap loket memakai aturan yang sama, bukan membuat aturan sendiri-sendiri."
    }
  ],
  analogyConclusion: [
    {
      en: "The business rule stays in one place while counters and record-keeping tools can change around it. That prevents every new tool from creating a different version of the same rule.",
      id: "Aturan bisnis tetap berada di satu tempat, sementara loket dan alat pencatatan bisa diganti. Dengan begitu, setiap alat baru tidak membuat versi aturan yang berbeda-beda."
    }
  ],
  analogyMapping: [
    {
      en: "The parcel-release rule represents the domain rule. The staff procedure that checks and releases a parcel represents a use case. The counter or phone app represents the UI. The notebook or computer system represents infrastructure. Clean Architecture makes the UI and infrastructure depend on the business workflow, while the workflow does not need to know which counter or storage tool is currently used. Real applications still need practical boundaries; not every button click deserves its own layer.",
      id: "Aturan penyerahan paket mewakili domain rule. Langkah petugas untuk memeriksa lalu menyerahkan paket mewakili use case. Loket atau aplikasi telepon mewakili UI. Buku catatan atau sistem komputer mewakili infrastructure. Dalam Clean Architecture, UI dan infrastructure mengikuti alur bisnis, sedangkan alur bisnis tidak perlu tahu alat mana yang sedang dipakai. Namun, batasnya tetap harus masuk akal; tidak setiap klik tombol membutuhkan layer sendiri."
    }
  ],
  theory: [
    {
      en: "Entities or domain models hold stable business meaning and rules. Use cases coordinate a user goal, such as loading an eligible shipment or confirming a pickup. Interface adapters translate between external formats and the shapes the use case expects. Frameworks and infrastructure include UI libraries, routers, HTTP clients, browser APIs, and concrete data sources.",
      id: "Entity atau domain model menyimpan makna dan aturan bisnis yang stabil. Use case mengatur satu tujuan pengguna, misalnya mengambil shipment yang memenuhi syarat atau mengonfirmasi pickup. Interface adapter menerjemahkan format dari luar ke bentuk yang dibutuhkan use case. Framework dan infrastructure mencakup library UI, router, HTTP client, browser API, dan sumber data konkret."
    },
    {
      en: "The dependency rule is visible in imports. The use case may import a repository interface owned by the application core. A REST repository imports that interface and implements it. The core never imports fetch, Axios, React, or Vue. At runtime, composition code passes the concrete repository into the use case.",
      id: "Dependency rule terlihat dari arah import. Use case boleh mengimpor interface repository yang dimiliki core aplikasi. REST repository mengimpor interface tersebut lalu mengimplementasikannya. Core tidak mengimpor fetch, Axios, React, atau Vue. Saat aplikasi berjalan, composition code memasukkan repository konkret ke use case."
    }
  ],
  realExample: [
    {
      en: "A shipment screen needs to load a shipment and reject records without a usable destination. The component asks LoadShipment to perform that job. LoadShipment knows the ShipmentRepository contract and the domain rule, but not the endpoint. RestShipmentRepository calls the API and maps its transport response into a Shipment.",
      id: "Sebuah layar shipment perlu mengambil data lalu menolak record yang tidak memiliki tujuan yang bisa dipakai. Komponen meminta LoadShipment menjalankan pekerjaan tersebut. LoadShipment mengenal kontrak ShipmentRepository dan aturan domain, tetapi tidak tahu endpoint-nya. RestShipmentRepository memanggil API lalu mengubah respons transport menjadi Shipment."
    },
    {
      en: "React is only the presentation layer in this example. The same use case could be called from Vue, a background process, or a test without changing its business rule. This is an illustrative example and does not claim to describe Genesis or any internal Lion Parcel implementation.",
      id: "React hanya menjadi presentation layer pada contoh ini. Use case yang sama bisa dipanggil dari Vue, proses lain, atau test tanpa mengubah aturan bisnisnya. Contoh ini hanya ilustrasi dan tidak menggambarkan implementasi internal Genesis atau sistem Lion Parcel lainnya."
    }
  ],
  code: {
    label: { en: "UI, use case, contract, and REST implementation", id: "UI, use case, kontrak, dan implementasi REST" },
    language: "ts",
    value: `type Shipment = { id: string; destination: string };

interface ShipmentRepository {
  findById(id: string): Promise<Shipment>;
}

class LoadShipment {
  constructor(private shipments: ShipmentRepository) {}

  async execute(id: string) {
    const shipment = await this.shipments.findById(id);
    if (!shipment.destination.trim()) {
      throw new Error("Shipment has no destination");
    }
    return shipment;
  }
}

class RestShipmentRepository implements ShipmentRepository {
  async findById(id: string): Promise<Shipment> {
    const response = await fetch(\`/api/shipments/\${id}\`);
    if (!response.ok) throw new Error("Could not load shipment");
    const data = await response.json();
    return { id: data.id, destination: data.destination_address };
  }
}

// Composition root: concrete details are connected at the edge.
const loadShipment = new LoadShipment(new RestShipmentRepository());

// A React component can call: await loadShipment.execute(shipmentId)`
  },
  codeExplanation: [
    {
      en: "Shipment expresses the data the application needs. ShipmentRepository is a contract owned by the core. LoadShipment contains the workflow and rule. RestShipmentRepository handles fetch and the API field name. The composition root connects them, so the use case can be tested with a fake repository and no network.",
      id: "Shipment menyatakan data yang dibutuhkan aplikasi. ShipmentRepository adalah kontrak milik core. LoadShipment menyimpan alur dan aturan. RestShipmentRepository menangani fetch serta nama field dari API. Composition root menghubungkan semuanya, sehingga use case dapat dites memakai repository palsu tanpa jaringan."
    }
  ],
  comparison: {
    headers: [{ en: "Approach", id: "Pendekatan" }, { en: "What it organizes", id: "Yang diatur" }, { en: "What it does not guarantee", id: "Yang tidak otomatis terjamin" }],
    rows: [
      [{ en: "Layer-based folders", id: "Folder layer-based" }, { en: "Files by technical role", id: "File berdasarkan peran teknis" }, { en: "Inward dependency direction", id: "Arah dependency ke dalam" }],
      [{ en: "Feature-based folders", id: "Folder feature-based" }, { en: "Files by product capability", id: "File berdasarkan kapabilitas produk" }, { en: "Business rules independent from frameworks", id: "Aturan bisnis bebas dari framework" }],
      [{ en: "Clean Architecture", id: "Clean Architecture" }, { en: "Responsibilities and dependency direction", id: "Tanggung jawab dan arah dependency" }, { en: "A particular folder tree", id: "Satu bentuk folder tertentu" }]
    ]
  },
  whenToUse: {
    good: [
      { en: "Products with meaningful business rules that must survive UI and API changes.", id: "Produk dengan aturan bisnis penting yang harus tetap aman ketika UI atau API berubah." },
      { en: "Codebases where the same workflows need fast tests without rendering a framework or calling a network.", id: "Codebase yang membutuhkan test cepat untuk alur bisnis tanpa merender framework atau memanggil jaringan." },
      { en: "Applications with several data sources or delivery surfaces that share the same rules.", id: "Aplikasi dengan beberapa sumber data atau tampilan yang memakai aturan yang sama." }
    ],
    poor: [
      { en: "Small pages with little behavior beyond displaying API data.", id: "Halaman kecil yang hanya menampilkan data API dengan sedikit aturan." },
      { en: "Teams adding interfaces and classes before a real source of change or substitution exists.", id: "Tim yang menambah interface dan class sebelum ada kebutuhan perubahan atau penggantian yang nyata." },
      { en: "Situations where extra navigation and boilerplate cost more than the coupling they remove.", id: "Situasi ketika tambahan file dan boilerplate lebih mahal daripada coupling yang dihilangkan." }
    ]
  },
  mistakes: [
    { en: "Copying a four-circle diagram into folders and calling the result Clean Architecture without enforcing dependency direction.", id: "Menyalin diagram empat lingkaran menjadi folder lalu menyebutnya Clean Architecture tanpa menjaga arah dependency." },
    { en: "Creating repositories that only rename one API method and provide no stable contract, mapping, testing seam, or alternate implementation.", id: "Membuat repository yang hanya mengganti nama satu method API tanpa memberi kontrak stabil, mapping, kemudahan test, atau implementasi alternatif." },
    { en: "Putting framework types or raw API response shapes in the application core, which moves coupling inward again.", id: "Memasukkan type milik framework atau bentuk respons API mentah ke application core sehingga coupling kembali masuk ke dalam." },
    { en: "Giving every trivial interaction a use case and turning simple UI code into ceremony.", id: "Membuat use case untuk setiap interaksi kecil hingga kode UI sederhana menjadi penuh upacara." }
  ],
  seniorPerspective: [
    {
      en: "Architecture should pay rent. Introduce a boundary when it protects a valuable rule, supports a real replacement, or makes important tests simpler. Measure success by change safety and clarity, not by the number of layers.",
      id: "Arsitektur harus memberi manfaat yang nyata. Tambahkan batas ketika ia melindungi aturan penting, mendukung penggantian yang benar-benar mungkin terjadi, atau membuat test penting lebih sederhana. Ukur keberhasilannya dari keamanan perubahan dan kejelasan kode, bukan dari jumlah layer."
    }
  ],
  keyPoints: [
    { en: "Clean Architecture is primarily about responsibility and dependency direction, not folder names.", id: "Clean Architecture terutama membahas tanggung jawab dan arah dependency, bukan nama folder." },
    { en: "Business rules should not directly depend on UI frameworks or HTTP details.", id: "Aturan bisnis sebaiknya tidak bergantung langsung pada framework UI atau detail HTTP." },
    { en: "Use the smallest set of boundaries that protects meaningful behavior; simpler applications may need less structure.", id: "Gunakan batas sesedikit mungkin selama aturan penting tetap terlindungi; aplikasi sederhana mungkin tidak membutuhkan banyak struktur." }
  ],
  references: [
    { label: "The Clean Code Blog — The Clean Architecture", href: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html" },
    { label: "Martin Fowler — Presentation Domain Data Layering", href: "https://martinfowler.com/bliki/PresentationDomainDataLayering.html" },
    { label: "TypeScript Handbook — Interfaces", href: "https://www.typescriptlang.org/docs/handbook/interfaces.html" }
  ],
  related: ["feature-vs-layer-architecture", "client-vs-server-state", "server-vs-client-components"],
  practiceQuestions: [
    { en: "Which rule in your current frontend would still matter if React, Vue, or the API client changed?", id: "Aturan mana di frontend kamu yang tetap penting jika React, Vue, atau API client diganti?" },
    { en: "Does a proposed repository create a useful boundary, or does it only add another file to open?", id: "Apakah repository yang akan dibuat memberi batas yang berguna, atau hanya menambah satu file lagi untuk dibuka?" }
  ]
};
