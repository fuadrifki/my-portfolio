import type { KnowledgeEntry } from "@/data/frontend-knowledge";

export const apiIntegrationKnowledge: KnowledgeEntry = {
  slug: "api-integration-data-flow",
  term: "API Integration & Frontend Data Flow",
  category: { en: "Frontend Architecture", id: "Arsitektur Frontend" },
  title: {
    en: "API Integration & Frontend Data Flow",
    id: "Integrasi API dan Alur Data pada Frontend"
  },
  summary: {
    en: "Follow data from a user action through an API and back to the interface, then decide where request logic, validation, and UI states belong.",
    id: "Ikuti perjalanan data dari tindakan pengguna menuju API lalu kembali ke antarmuka, serta tentukan tempat yang tepat untuk logika request, validasi, dan state UI."
  },
  readingTime: { en: "16 min", id: "16 menit" },
  keywords: [
    "api integration",
    "frontend data flow",
    "http request",
    "fetch",
    "api client",
    "service layer",
    "repository",
    "loading error empty state",
    "race condition"
  ],
  question: {
    en: "When a user opens a page or performs an action, how should data travel between the UI, API, and backend?",
    id: "Saat pengguna membuka halaman atau melakukan tindakan, bagaimana seharusnya data mengalir antara UI, API, dan backend?"
  },
  definition: [
    {
      en: "An API (Application Programming Interface) is a contract that lets one software system request data or an operation from another. A frontend commonly consumes an HTTP API through an endpoint: an address such as /api/orders/42 with an agreed method, input, and output. The frontend sends an HTTP request; the server returns an HTTP response containing a status code, headers, and sometimes a payload such as JSON (JavaScript Object Notation).",
      id: "API (Application Programming Interface) adalah kontrak yang memungkinkan satu sistem meminta data atau operasi dari sistem lain. Frontend biasanya memakai API berbasis HTTP melalui endpoint, yaitu alamat seperti /api/orders/42 dengan method, input, dan output yang disepakati. Frontend mengirim HTTP request; server mengembalikan HTTP response yang berisi status code, header, dan kadang payload seperti JSON (JavaScript Object Notation)."
    },
    {
      en: "API integration is the complete workflow around that exchange, not merely calling fetch(). It includes choosing when to request, constructing safe input, handling the response, translating external data into application concepts, representing progress and failure in the UI, and keeping later requests from showing stale results.",
      id: "Integrasi API mencakup seluruh alur pertukaran tersebut, bukan sekadar memanggil fetch(). Di dalamnya ada keputusan kapan request dikirim, cara menyusun input yang aman, penanganan response, penerjemahan data eksternal menjadi konsep aplikasi, penyajian proses dan kegagalan di UI, serta pencegahan agar request yang datang terlambat tidak menampilkan data usang."
    },
    {
      en: "The frontend owns interaction, presentation, and honest feedback about the request. The backend owns authoritative business rules, authorization, durable data, and validation at the trust boundary. Frontend validation can improve usability, but it cannot replace backend validation because browser code and requests can be modified by a user.",
      id: "Frontend bertanggung jawab atas interaksi, presentasi, dan feedback yang jujur tentang request. Backend bertanggung jawab atas business rule yang menjadi acuan, authorization, data permanen, dan validasi pada batas kepercayaan. Validasi frontend dapat memperbaiki pengalaman pengguna, tetapi tidak menggantikan validasi backend karena kode browser dan request dapat diubah oleh pengguna."
    }
  ],
  why: [
    {
      en: "A visible data path makes change safer. Engineers can locate the request, contract conversion, and UI transition without searching through unrelated rendering code. The same boundaries also make it easier to test API behavior separately from presentation and to give users consistent loading, empty, and error experiences.",
      id: "Alur data yang terlihat jelas membuat perubahan lebih aman. Engineer dapat menemukan request, konversi kontrak, dan perubahan UI tanpa menelusuri banyak kode rendering yang tidak terkait. Batas yang sama juga memudahkan pengujian perilaku API secara terpisah dari presentasi serta menjaga pengalaman loading, kosong, dan error tetap konsisten."
    },
    {
      en: "A defined contract gives frontend and backend engineers a shared point of discussion: endpoint, method, authentication, request shape, response shape, status codes, and compatibility. When a defect appears, the team can ask which boundary broke instead of treating the entire screen as one opaque operation.",
      id: "Kontrak yang jelas memberi frontend dan backend titik diskusi yang sama: endpoint, method, authentication, bentuk request, bentuk response, status code, dan kompatibilitas. Ketika defect muncul, tim dapat mencari batas mana yang bermasalah daripada menganggap seluruh layar sebagai satu operasi yang sulit ditelusuri."
    }
  ],
  analogy: [
    {
      en: "Imagine ordering food at a restaurant. You choose a meal and tell the waiter. The waiter records the order in a form the kitchen understands, the kitchen checks ingredients and prepares it, and the waiter brings either the meal or a useful update if it is unavailable. You should not have to walk into the kitchen, and the dining table should not contain the restaurant's preparation rules.",
      id: "Bayangkan memesan makanan di restoran. Anda memilih menu lalu menyampaikannya kepada pelayan. Pelayan mencatat pesanan dalam bentuk yang dipahami dapur, dapur memeriksa bahan dan menyiapkannya, lalu pelayan membawa makanan atau memberi kabar yang berguna jika menu tidak tersedia. Anda tidak perlu masuk ke dapur, dan meja makan tidak seharusnya menyimpan aturan proses memasak restoran."
    },
    {
      en: "The analogy helps show responsibilities and a round trip, but it stops being accurate when software adds caching, retries, parallel requests, cancellation, authentication, and responses arriving in a different order. An API is also a machine-readable contract, not a person who can infer an unclear request.",
      id: "Analogi ini membantu menjelaskan pembagian tanggung jawab dan perjalanan bolak-balik, tetapi tidak lagi tepat ketika software memakai cache, retry, request paralel, cancellation, authentication, atau response yang tiba tidak sesuai urutan. API juga merupakan kontrak yang dibaca mesin, bukan manusia yang dapat menebak maksud request yang tidak jelas."
    }
  ],
  analogyConclusion: [
    {
      en: "A reliable experience depends on a clear order, a clear handoff, and useful feedback while the result is being prepared or cannot be delivered.",
      id: "Pengalaman yang andal membutuhkan pesanan yang jelas, serah-terima yang jelas, serta feedback yang berguna selama hasil diproses atau ketika hasil tidak dapat diberikan."
    }
  ],
  analogyMapping: [
    {
      en: "The customer's choice is the user interaction. The table and menu are the UI component. The waiter is application logic or a data-fetching function that constructs the request. The kitchen is backend processing. The kitchen's result is the API response, and serving the meal is the UI update. Unlike the analogy, the frontend must explicitly handle transport failures, untrusted payloads, cancellation, and competing responses.",
      id: "Pilihan pelanggan mewakili interaksi pengguna. Meja dan menu mewakili komponen UI. Pelayan mewakili application logic atau fungsi data fetching yang menyusun request. Dapur mewakili proses backend. Hasil dari dapur adalah API response, sedangkan penyajian makanan adalah pembaruan UI. Berbeda dari analogi, frontend harus secara eksplisit menangani kegagalan jaringan, payload yang belum dipercaya, cancellation, dan response yang saling bersaing."
    }
  ],
  theory: [
    {
      en: "A typical flow is: user interaction → UI component → application logic or data-fetching function → API request → backend authentication, validation, and processing → API response → response parsing and validation → UI state update. Opening a page can start the same flow without a click. Depending on the rendering strategy, the request may begin in the browser, on an application server, or during a build; the responsibilities still need clear boundaries.",
      id: "Alur yang umum adalah: interaksi pengguna → komponen UI → application logic atau fungsi data fetching → API request → authentication, validasi, dan proses di backend → API response → parsing dan validasi response → pembaruan state UI. Membuka halaman dapat memulai alur yang sama tanpa klik. Bergantung pada strategi rendering, request bisa dimulai di browser, application server, atau saat build; pembagian tanggung jawabnya tetap perlu jelas."
    },
    {
      en: "A component should usually decide what the user sees and which user event starts work. A hook or composable can coordinate framework lifecycle, request state, caching tools, and cancellation. An API client or service module handles transport details such as the base URL, headers, methods, status checks, and conversion from a response contract. A repository can hide several data sources behind domain-oriented operations, but it is valuable only when that boundary protects real complexity or replaceability.",
      id: "Komponen biasanya menentukan apa yang dilihat pengguna dan event mana yang memulai proses. Hook atau composable dapat mengoordinasikan lifecycle framework, request state, tool caching, dan cancellation. API client atau service module menangani detail transport seperti base URL, header, method, pemeriksaan status, dan konversi dari kontrak response. Repository dapat menyembunyikan beberapa sumber data di balik operasi yang berorientasi domain, tetapi baru berguna jika batas tersebut melindungi kompleksitas atau kebutuhan penggantian yang nyata."
    },
    {
      en: "Request state is more than success or failure. Before a request, a screen may be idle. During it, the UI can show loading feedback while preserving useful existing data. Success may contain records or a valid empty result. An HTTP error means the server replied with a non-success status; a network error means no usable HTTP response arrived. Timeouts are normally implemented by the application, and cancellation is useful when a component is no longer interested in the result.",
      id: "State request lebih luas daripada sukses atau gagal. Sebelum request, layar dapat berada pada kondisi idle. Saat proses berjalan, UI dapat menampilkan feedback loading sambil mempertahankan data lama yang masih berguna. Response sukses dapat berisi data atau hasil kosong yang valid. HTTP error berarti server menjawab dengan status tidak sukses; network error berarti tidak ada HTTP response yang dapat digunakan. Timeout biasanya diterapkan oleh aplikasi, sedangkan cancellation berguna ketika komponen tidak lagi membutuhkan hasilnya."
    },
    {
      en: "fetch() rejects for failures such as a network problem or an aborted request, but a 404 or 500 response still fulfills its Promise. Code must inspect response.ok or response.status. If two requests compete—for example, a user changes a search term quickly—the older response may arrive last. Abort the obsolete request, attach a request identifier, or use a data-fetching library that prevents stale results from overwriting current intent.",
      id: "fetch() menolak Promise untuk kegagalan seperti masalah jaringan atau request yang dibatalkan, tetapi response 404 atau 500 tetap membuat Promise fulfilled. Kode harus memeriksa response.ok atau response.status. Jika dua request bersaing—misalnya pengguna cepat mengganti kata pencarian—response lama dapat tiba paling akhir. Batalkan request yang sudah tidak relevan, gunakan request identifier, atau pakai library data fetching yang mencegah hasil usang menimpa kebutuhan terbaru."
    }
  ],
  realExample: [
    {
      en: "A shipment page receives an ID from navigation and asks a shipment service for details. The service builds the endpoint, sends the request, checks the HTTP result, validates the unknown JSON at runtime, and returns a domain-shaped Shipment. The page controller decides whether to show a skeleton, shipment details, an empty or not-found message, or a retry action. The component does not need to know the response envelope or authorization header format.",
      id: "Halaman pengiriman menerima ID dari navigasi lalu meminta detail kepada shipment service. Service menyusun endpoint, mengirim request, memeriksa hasil HTTP, memvalidasi JSON yang masih bertipe unknown saat runtime, lalu mengembalikan Shipment dengan bentuk yang dipakai aplikasi. Controller halaman menentukan apakah UI menampilkan skeleton, detail pengiriman, pesan kosong atau tidak ditemukan, maupun tombol retry. Komponen tidak perlu mengetahui bentuk response envelope atau format authorization header."
    },
    {
      en: "The same service can be called from server-side or client-side application logic if its dependencies and credentials are appropriate for that runtime. Secrets must stay in a trusted server environment; values shipped to browser JavaScript are visible to users. Authentication proves identity, while backend authorization must still decide whether that identity may access a resource.",
      id: "Service yang sama dapat dipanggil dari application logic di server atau client jika dependency dan credential-nya sesuai dengan runtime tersebut. Secret harus tetap berada di lingkungan server yang tepercaya; nilai yang dikirim dalam JavaScript browser dapat dilihat pengguna. Authentication membuktikan identitas, sedangkan authorization di backend tetap harus menentukan apakah identitas tersebut boleh mengakses resource."
    }
  ],
  code: {
    label: { en: "Typed transport, runtime validation, and a UI-facing caller", id: "Transport bertipe, validasi runtime, dan caller untuk UI" },
    language: "ts",
    value: `type Shipment = {
  id: string;
  status: "created" | "in_transit" | "delivered";
};

type ShipmentResponse = {
  data: Shipment;
};

class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

function isShipmentResponse(value: unknown): value is ShipmentResponse {
  if (typeof value !== "object" || value === null || !("data" in value)) {
    return false;
  }

  const data = value.data;
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof data.id === "string" &&
    "status" in data &&
    ["created", "in_transit", "delivered"].includes(String(data.status))
  );
}

export async function getShipment(
  id: string,
  signal?: AbortSignal,
): Promise<Shipment> {
  const response = await fetch(\`/api/shipments/\${encodeURIComponent(id)}\`, {
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    throw new ApiError("Could not load shipment", response.status);
  }

  const body: unknown = await response.json();
  if (!isShipmentResponse(body)) {
    throw new Error("Shipment response has an unexpected shape");
  }

  return body.data;
}

type LoadState =
  | { status: "loading" }
  | { status: "success"; shipment: Shipment }
  | { status: "error"; message: string };

export async function loadShipment(
  id: string,
  signal?: AbortSignal,
): Promise<LoadState> {
  try {
    const shipment = await getShipment(id, signal);
    return { status: "success", shipment };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error; // Cancellation is control flow, not a user-facing failure.
    }

    const message =
      error instanceof ApiError && error.status === 404
        ? "Shipment not found"
        : "Unable to load shipment. Please try again.";

    return { status: "error", message };
  }
}`
  },
  codeExplanation: [
    {
      en: "getShipment owns API communication, including URL encoding, the success-status check, parsing, and contract validation. loadShipment translates expected failures into a small UI-facing state while deliberately rethrowing cancellation so the caller does not show a false error. A real screen would set loading before awaiting, render success or error afterward, and abort or ignore an obsolete request during cleanup.",
      id: "getShipment menangani komunikasi API, termasuk encoding URL, pemeriksaan status sukses, parsing, dan validasi kontrak. loadShipment menerjemahkan kegagalan yang diperkirakan menjadi state kecil untuk UI, tetapi sengaja melempar ulang cancellation agar caller tidak menampilkan error palsu. Layar nyata akan menetapkan loading sebelum await, menampilkan hasil sukses atau error setelahnya, lalu membatalkan atau mengabaikan request yang tidak relevan saat cleanup."
    },
    {
      en: "ShipmentResponse documents the expected contract at compile time. It does not validate server data at runtime because TypeScript types are erased when code is compiled. The type guard performs a small runtime check; larger or shared contracts may justify a schema-validation library and generated types.",
      id: "ShipmentResponse mendokumentasikan kontrak yang diharapkan saat compile time. Type tersebut tidak memvalidasi data server pada runtime karena type TypeScript dihapus ketika kode dikompilasi. Type guard melakukan pemeriksaan runtime sederhana; kontrak yang lebih besar atau dipakai bersama mungkin lebih cocok memakai schema validation library dan type hasil generate."
    }
  ],
  comparison: {
    headers: [
      { en: "Approach", id: "Pendekatan" },
      { en: "Useful when", id: "Berguna ketika" },
      { en: "Trade-off", id: "Trade-off" }
    ],
    rows: [
      [
        { en: "fetch() in a component", id: "fetch() di komponen" },
        { en: "A small, local request has no reuse and little transformation", id: "Request kecil dan lokal tidak dipakai ulang serta hanya membutuhkan sedikit transformasi" },
        { en: "Fast to start, but transport details can crowd UI code and become duplicated", id: "Cepat dibuat, tetapi detail transport dapat memenuhi kode UI dan mudah terduplikasi" }
      ],
      [
        { en: "Shared API client or service", id: "API client atau service bersama" },
        { en: "Several callers share endpoints, headers, errors, or response mapping", id: "Beberapa caller memakai endpoint, header, error, atau pemetaan response yang sama" },
        { en: "Adds a boundary and naming decisions, but centralizes repeated integration behavior", id: "Menambah batas dan keputusan penamaan, tetapi memusatkan perilaku integrasi yang berulang" }
      ],
      [
        { en: "Data-access or repository layer", id: "Data-access atau repository layer" },
        { en: "Domain operations combine sources, hide persistence, or need stable test seams", id: "Operasi domain menggabungkan beberapa sumber, menyembunyikan persistence, atau membutuhkan batas test yang stabil" },
        { en: "Can protect the application from external change, but is ceremony when it only forwards one call", id: "Dapat melindungi aplikasi dari perubahan eksternal, tetapi menjadi beban jika hanya meneruskan satu pemanggilan" }
      ]
    ]
  },
  whenToUse: {
    good: [
      { en: "The frontend reads or changes data owned by a backend or third-party service.", id: "Frontend membaca atau mengubah data yang dimiliki backend maupun layanan pihak ketiga." },
      { en: "Several screens need consistent request construction, contract mapping, and failure handling.", id: "Beberapa layar membutuhkan penyusunan request, pemetaan kontrak, dan penanganan kegagalan yang konsisten." },
      { en: "A request has meaningful lifecycle, security, testing, or compatibility concerns.", id: "Sebuah request memiliki lifecycle, keamanan, pengujian, atau kebutuhan kompatibilitas yang penting." }
    ],
    poor: [
      { en: "Static local content has no remote owner or request lifecycle.", id: "Konten lokal yang statis tidak memiliki pemilik remote maupun lifecycle request." },
      { en: "A repository or several wrappers would only rename one trivial call without protecting a boundary.", id: "Repository atau beberapa wrapper hanya akan mengganti nama satu pemanggilan sederhana tanpa melindungi batas apa pun." },
      { en: "Server-only secrets would have to be exposed in browser code to make the chosen flow work.", id: "Secret khusus server harus dibuka di kode browser agar alur yang dipilih dapat berjalan." }
    ]
  },
  mistakes: [
    {
      en: "Copying the same request, header, parsing, and error logic into several components. Extract the stable integration behavior once duplication or inconsistent behavior appears.",
      id: "Menyalin request, header, parsing, dan logika error yang sama ke beberapa komponen. Ekstrak perilaku integrasi yang stabil ketika duplikasi atau inkonsistensi mulai muncul."
    },
    {
      en: "Assuming a fulfilled fetch() means success. Check the HTTP status before treating the payload as successful data, and distinguish that response from a network failure.",
      id: "Menganggap fetch() yang fulfilled selalu berarti sukses. Periksa status HTTP sebelum memperlakukan payload sebagai data sukses, dan bedakan response tersebut dari network failure."
    },
    {
      en: "Mixing extensive transport and mapping logic into presentation code, or creating many pass-through layers for a tiny feature. Move responsibilities only when the boundary makes change, reuse, or testing clearer.",
      id: "Mencampurkan terlalu banyak logika transport dan pemetaan ke kode presentasi, atau membuat banyak layer penerus untuk fitur kecil. Pindahkan tanggung jawab hanya jika batas itu memperjelas perubahan, reuse, atau pengujian."
    },
    {
      en: "Showing a spinner for every outcome and forgetting valid empty data, retryable errors, offline or timeout states, and cancellation. Design each state that changes what the user can understand or do.",
      id: "Menampilkan spinner untuk semua hasil lalu melupakan data kosong yang valid, error yang bisa di-retry, kondisi offline atau timeout, dan cancellation. Rancang setiap state yang memengaruhi pemahaman atau tindakan pengguna."
    },
    {
      en: "Keeping the same server entity in a query cache, a global store, and component state without synchronization rules. Choose an authoritative source and derive or copy data only for a defined reason.",
      id: "Menyimpan entity server yang sama di query cache, global store, dan state komponen tanpa aturan sinkronisasi. Pilih satu sumber acuan lalu turunkan atau salin data hanya untuk alasan yang jelas."
    },
    {
      en: "Letting an older request overwrite a newer result. Cancel obsolete work or compare request identity before committing the response to UI state.",
      id: "Membiarkan request lama menimpa hasil yang lebih baru. Batalkan proses yang tidak relevan atau bandingkan identitas request sebelum memasukkan response ke state UI."
    },
    {
      en: "Treating TypeScript declarations or frontend form checks as proof that input is safe. Validate untrusted data at runtime, and enforce business rules and authorization on the backend.",
      id: "Menganggap deklarasi TypeScript atau pemeriksaan form di frontend sebagai bukti bahwa input aman. Validasi data yang belum dipercaya saat runtime, serta tegakkan business rule dan authorization di backend."
    },
    {
      en: "Embedding private API keys or privileged credentials in browser bundles. Route privileged operations through a trusted server and return only safe errors to the UI.",
      id: "Menaruh private API key atau credential berhak akses tinggi di bundle browser. Jalankan operasi sensitif melalui server tepercaya dan kirim hanya error yang aman ke UI."
    }
  ],
  seniorPerspective: [
    {
      en: "Treat the API contract as a maintained boundary. Define consistent success and error shapes, test contract mapping and important UI states, and plan backward-compatible changes or coordinated versioning. Do not leak stack traces or sensitive details to users; keep diagnostic context in protected logs with request or trace identifiers.",
      id: "Perlakukan kontrak API sebagai batas yang harus dirawat. Tentukan bentuk sukses dan error yang konsisten, uji pemetaan kontrak serta state UI yang penting, lalu rencanakan perubahan yang backward-compatible atau versioning yang terkoordinasi. Jangan menampilkan stack trace atau detail sensitif kepada pengguna; simpan konteks diagnosis di log terlindungi dengan request atau trace identifier."
    },
    {
      en: "Authentication and authorization cross the flow but have different jobs. Send credentials only through appropriate channels, prevent unauthorized data from leaving the backend, and avoid logging tokens or sensitive payloads. Test the service with success, malformed data, relevant status codes, network failure, and cancellation; test the UI against the resulting states rather than every fetch detail.",
      id: "Authentication dan authorization melintasi alur yang sama, tetapi tugasnya berbeda. Kirim credential hanya melalui jalur yang sesuai, cegah data tanpa izin keluar dari backend, dan hindari pencatatan token atau payload sensitif. Uji service dengan response sukses, data tidak valid, status code yang relevan, network failure, dan cancellation; uji UI berdasarkan state yang dihasilkan, bukan setiap detail fetch."
    },
    {
      en: "Observe latency, error rate, and contract failures at useful boundaries. Reduce duplicate requests, cache according to freshness needs, paginate large collections, and avoid sending fields the screen does not need. Performance work must preserve correctness: a fast stale or unauthorized response is still a defect.",
      id: "Amati latency, error rate, dan kegagalan kontrak pada batas yang berguna. Kurangi request duplikat, gunakan cache sesuai kebutuhan freshness, lakukan pagination untuk koleksi besar, dan hindari pengiriman field yang tidak dibutuhkan layar. Optimasi performa harus tetap menjaga kebenaran: response usang atau tanpa izin yang cepat tetap merupakan defect."
    }
  ],
  keyPoints: [
    {
      en: "API integration is an end-to-end flow from user intent to backend processing and an honest UI result, not just a fetch() call.",
      id: "Integrasi API adalah alur lengkap dari kebutuhan pengguna ke proses backend hingga hasil UI yang jujur, bukan hanya pemanggilan fetch()."
    },
    {
      en: "Keep presentation, request coordination, transport details, and domain boundaries separate only as far as the application's real complexity requires.",
      id: "Pisahkan presentasi, koordinasi request, detail transport, dan batas domain hanya sejauh yang benar-benar dibutuhkan kompleksitas aplikasi."
    },
    {
      en: "Design for loading, success, empty data, HTTP errors, network failures, cancellation, and stale responses before those cases reach production.",
      id: "Rancang kondisi loading, sukses, data kosong, HTTP error, network failure, cancellation, dan response usang sebelum kasus tersebut muncul di production."
    }
  ],
  references: [
    { label: "MDN — Using the Fetch API", href: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
    { label: "MDN — HTTP response status codes", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" },
    { label: "MDN — AbortController", href: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController" },
    { label: "TypeScript Handbook — TypeScript for the New Programmer", href: "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html" }
  ],
  related: ["promise", "async-await", "client-vs-server-state", "feature-vs-layer-architecture", "clean-architecture-frontend"],
  practiceQuestions: [
    {
      en: "Which code on this screen is presentation, request coordination, transport, and contract mapping—and are any responsibilities needlessly mixed?",
      id: "Kode mana di layar ini yang menangani presentasi, koordinasi request, transport, dan pemetaan kontrak—serta adakah tanggung jawab yang tidak perlu tercampur?"
    },
    {
      en: "Would a service or repository protect real reuse and change, or would it only add another pass-through file?",
      id: "Apakah service atau repository melindungi reuse dan perubahan yang nyata, atau hanya menambah file penerus?"
    },
    {
      en: "What should the user see for loading, empty data, an HTTP error, a network failure, a timeout, cancellation, and an obsolete response?",
      id: "Apa yang perlu dilihat pengguna saat loading, data kosong, HTTP error, network failure, timeout, cancellation, dan response yang sudah tidak relevan?"
    }
  ]
};
