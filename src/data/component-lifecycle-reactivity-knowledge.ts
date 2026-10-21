import type { KnowledgeEntry } from "@/data/frontend-knowledge";

export const componentLifecycleReactivityKnowledge: KnowledgeEntry = {
  slug: "component-lifecycle-reactivity",
  term: "Component Lifecycle & Reactivity",
  category: { en: "Frontend Fundamentals", id: "Fundamental Frontend" },
  title: {
    en: "Component Lifecycle & Reactivity",
    id: "Siklus Hidup Komponen dan Reaktivitas"
  },
  summary: {
    en: "Understand how components enter, update within, and leave the UI—and how tracked data changes cause dependent UI to update.",
    id: "Pahami bagaimana komponen masuk, berubah selama berada, dan keluar dari UI—serta bagaimana perubahan data yang dilacak memperbarui UI terkait."
  },
  readingTime: { en: "15 min", id: "15 menit" },
  keywords: [
    "component lifecycle",
    "reactivity",
    "mount update unmount",
    "react useeffect cleanup",
    "vue lifecycle hooks",
    "ref reactive",
    "render commit",
    "dependency tracking"
  ],
  question: {
    en: "How do component stages differ from the reactive changes that update an interface?",
    id: "Apa perbedaan antara tahapan hidup komponen dan perubahan reaktif yang memperbarui antarmuka?"
  },
  definition: [
    {
      en: "A UI component is a reusable unit that describes part of an interface. Its lifecycle is the sequence of stages it passes through while it exists: creation and initialization, initial rendering and mounting, later updates, and cleanup during unmounting. Mounting means the component has been added to the rendered UI; unmounting means it has been removed.",
      id: "Komponen UI adalah unit reusable yang menggambarkan sebagian antarmuka. Siklus hidup atau lifecycle adalah rangkaian tahap yang dilalui selama komponen itu ada: pembuatan dan inisialisasi, rendering awal dan mounting, pembaruan berikutnya, lalu cleanup saat unmounting. Mounting berarti komponen telah ditambahkan ke UI yang dirender; unmounting berarti komponen telah dihapus."
    },
    {
      en: "Reactivity is a different concept. It describes how a framework tracks data and dependencies, notices relevant changes, schedules dependent computation or rendering, and updates the affected UI. Conceptually: reactive data changes → dependent work is scheduled → the affected UI is updated.",
      id: "Reaktivitas adalah konsep yang berbeda. Reaktivitas menjelaskan cara framework melacak data dan dependency, mengetahui perubahan yang relevan, menjadwalkan komputasi atau rendering yang bergantung padanya, lalu memperbarui UI yang terdampak. Secara konsep: data reaktif berubah → pekerjaan terkait dijadwalkan → UI yang terdampak diperbarui."
    },
    {
      en: "Lifecycle and reactivity interact, but they are not interchangeable. A reactive state change can cause an existing component to update without remounting it. A lifecycle hook or effect performs work at a framework-defined stage or synchronizes with specified dependencies. Exact names, scheduling, and rendering behavior differ across frameworks and environments.",
      id: "Lifecycle dan reaktivitas saling berhubungan, tetapi bukan hal yang sama. Perubahan state reaktif dapat memperbarui komponen yang sudah ada tanpa melakukan remount. Lifecycle hook atau effect menjalankan pekerjaan pada tahap yang ditentukan framework atau melakukan sinkronisasi berdasarkan dependency tertentu. Nama, jadwal, dan perilaku rendering berbeda di setiap framework dan lingkungan."
    }
  ],
  why: [
    {
      en: "This distinction helps engineers predict behavior instead of memorizing hook names. It explains why a component may render again without losing local state, why an old subscription must be stopped before a new one starts, and why a value derived from current state usually belongs in rendering rather than in an effect.",
      id: "Perbedaan ini membantu engineer memprediksi perilaku tanpa sekadar menghafal nama hook. Kita dapat memahami mengapa komponen bisa render ulang tanpa kehilangan local state, mengapa subscription lama harus dihentikan sebelum yang baru dimulai, dan mengapa nilai turunan dari state saat ini biasanya dihitung saat rendering, bukan di dalam effect."
    },
    {
      en: "Clear mental models also improve debugging and performance. Teams can separate a harmless render calculation from an actual DOM commit, find leaked timers or listeners, and investigate which dependency caused expensive reactive work without applying optimization blindly.",
      id: "Model mental yang jelas juga membantu debugging dan performa. Tim dapat membedakan perhitungan render yang aman dari perubahan DOM yang benar-benar di-commit, menemukan timer atau listener yang bocor, dan menyelidiki dependency yang memicu pekerjaan reaktif mahal tanpa melakukan optimasi secara membabi buta."
    }
  ],
  analogy: [
    {
      en: "Imagine preparing a guest room. You initialize it by gathering clean sheets and supplies. The room is mounted when it is ready and opened for the guest. When the guest asks for another blanket or the temperature changes, you update the room. After the guest leaves, you remove temporary equipment, return keys, and clean up.",
      id: "Bayangkan menyiapkan kamar tamu. Anda melakukan inisialisasi dengan menyediakan seprai bersih dan perlengkapan. Kamar dianggap mounted ketika sudah siap dan dibuka untuk tamu. Saat tamu meminta selimut tambahan atau suhu berubah, Anda memperbarui kondisi kamar. Setelah tamu pergi, Anda melepas perlengkapan sementara, mengembalikan kunci, dan melakukan cleanup."
    },
    {
      en: "A sensor that adjusts the room temperature when its reading changes resembles reactivity: one tracked value affects a dependent result. The analogy is limited because software frameworks may batch changes, calculate work without committing it, preserve component identity across renders, or deliberately repeat setup and cleanup checks in development.",
      id: "Sensor yang menyesuaikan suhu kamar ketika nilainya berubah menyerupai reaktivitas: satu nilai yang dilacak memengaruhi hasil yang bergantung padanya. Analogi ini terbatas karena framework dapat menggabungkan beberapa perubahan, menghitung render tanpa melakukan commit, mempertahankan identitas komponen di antara render, atau sengaja mengulang setup dan cleanup saat development."
    }
  ],
  analogyConclusion: [
    {
      en: "The room's arrival-to-departure stages represent lifecycle. The sensor's response to changing input represents reactivity. An update can happen many times during one stay without preparing an entirely new room.",
      id: "Tahap sejak kamar disiapkan hingga tamu pergi mewakili lifecycle. Respons sensor terhadap perubahan input mewakili reaktivitas. Update dapat terjadi berkali-kali selama satu masa menginap tanpa menyiapkan kamar baru dari awal."
    }
  ],
  analogyMapping: [
    {
      en: "Preparing supplies maps to initialization, opening the room to mounting, adjustments to updates, and removing temporary equipment to cleanup on unmount. The sensor reading is reactive data and the temperature adjustment is dependent work. Unlike a room, a framework controls scheduling and may skip, batch, restart, or narrow work according to its rendering model.",
      id: "Menyiapkan perlengkapan mewakili inisialisasi, membuka kamar mewakili mounting, penyesuaian mewakili update, dan melepas perlengkapan sementara mewakili cleanup saat unmount. Nilai sensor adalah data reaktif, sedangkan penyesuaian suhu adalah pekerjaan yang bergantung padanya. Berbeda dari kamar, framework mengendalikan penjadwalan dan dapat melewati, menggabungkan, mengulang, atau membatasi pekerjaan sesuai model rendering-nya."
    }
  ],
  theory: [
    {
      en: "Creation establishes a component instance or render context and initializes its state. Initial rendering calculates the UI, and mounting makes the framework's committed result part of the active interface. Updates happen when relevant state, inputs, context, or tracked dependencies change. Unmounting removes the component and should release resources it owns, such as subscriptions, timers, observers, and event listeners.",
      id: "Creation membentuk instance komponen atau konteks render serta menginisialisasi state. Rendering awal menghitung UI, sedangkan mounting menjadikan hasil commit framework sebagai bagian dari antarmuka aktif. Update terjadi ketika state, input, context, atau dependency yang dilacak berubah. Unmounting menghapus komponen dan harus melepaskan resource yang dimilikinya, seperti subscription, timer, observer, dan event listener."
    },
    {
      en: "Rendering and changing the Document Object Model (DOM) are not identical. A framework can call component code to calculate a possible next UI, compare or schedule work, and then commit only the required host-environment changes. A render may therefore produce no visible DOM change. Framework scheduling can also batch several state updates into less work.",
      id: "Rendering dan mengubah Document Object Model (DOM) bukan hal yang sama. Framework dapat menjalankan kode komponen untuk menghitung kemungkinan UI berikutnya, membandingkan atau menjadwalkan pekerjaan, lalu hanya melakukan commit terhadap perubahan yang diperlukan di lingkungan tujuan. Karena itu, render bisa saja tidak menghasilkan perubahan DOM yang terlihat. Framework juga dapat menggabungkan beberapa perubahan state agar pekerjaannya lebih sedikit."
    },
    {
      en: "Reactive systems connect a source value with the computations that read it. When that source changes, the framework invalidates or schedules the dependents it knows about. Different frameworks discover dependencies differently: some rely on explicit state setters and component rendering, while others track reads through reactive wrappers. A change does not automatically rerender every component; identity, ownership, dependency tracking, memoization, and scheduler decisions determine the affected work.",
      id: "Sistem reaktif menghubungkan nilai sumber dengan komputasi yang membacanya. Saat sumber berubah, framework menandai atau menjadwalkan ulang bagian yang diketahui bergantung pada nilai tersebut. Setiap framework menemukan dependency dengan cara berbeda: ada yang memakai state setter eksplisit dan rendering komponen, ada pula yang melacak pembacaan melalui wrapper reaktif. Satu perubahan tidak otomatis merender ulang semua komponen; identitas, ownership, pelacakan dependency, memoization, dan scheduler menentukan pekerjaan yang terdampak."
    },
    {
      en: "Consider a shipment status panel. When it first appears, it renders the current status and may subscribe to an external status feed. A local toggle changes reactive state and updates its details without mounting a new panel. A new shipmentId input changes what the panel renders and requires the old subscription to stop before a new one starts. Removing the panel runs final cleanup. The text update is ordinary reactive rendering; managing the external subscription is lifecycle-related synchronization.",
      id: "Bayangkan panel status pengiriman. Saat pertama muncul, panel merender status saat ini dan mungkin berlangganan ke sumber status eksternal. Toggle lokal mengubah state reaktif dan memperbarui detail tanpa melakukan mounting panel baru. Input shipmentId yang baru mengubah isi panel serta mengharuskan subscription lama berhenti sebelum subscription baru dimulai. Menghapus panel menjalankan cleanup terakhir. Perubahan teks adalah rendering reaktif biasa; pengelolaan subscription eksternal adalah sinkronisasi yang berkaitan dengan lifecycle."
    },
    {
      en: "In React, rendering calls components to calculate UI, then the commit phase applies necessary changes. Rendering code should be pure: given the same inputs, it should calculate output without unintended side effects. useEffect runs after a commit to synchronize with an external system. React compares declared dependencies; when one changes, it runs the previous cleanup before the new setup, and it runs final cleanup on unmount. Development Strict Mode may run an extra setup-and-cleanup cycle to expose missing cleanup, so an effect must not rely on running exactly once.",
      id: "Di React, tahap rendering menjalankan komponen untuk menghitung UI, lalu tahap commit menerapkan perubahan yang diperlukan. Kode rendering harus pure: input yang sama menghasilkan perhitungan output tanpa side effect yang tidak disengaja. useEffect berjalan setelah commit untuk melakukan sinkronisasi dengan sistem eksternal. React membandingkan dependency yang dideklarasikan; ketika salah satunya berubah, cleanup sebelumnya berjalan sebelum setup baru, dan cleanup terakhir berjalan saat unmount. Strict Mode di development dapat menjalankan siklus setup dan cleanup tambahan untuk menemukan cleanup yang hilang, sehingga effect tidak boleh bergantung pada asumsi bahwa ia hanya berjalan sekali."
    },
    {
      en: "In Vue, refs and reactive objects participate in dependency tracking. Reading reactive state during component rendering records a dependency; changing it schedules dependent effects, including the component update. ref() wraps a value behind .value in JavaScript and works for primitives or objects. reactive() returns a reactive proxy for an object and has identity and destructuring caveats. Lifecycle hooks such as onMounted and onUnmounted run at defined stages, but they are not one-to-one equivalents of every React Effect pattern.",
      id: "Di Vue, ref dan object reactive menjadi bagian dari dependency tracking. Membaca state reaktif saat komponen dirender mencatat dependency; mengubahnya menjadwalkan effect terkait, termasuk update komponen. ref() membungkus nilai melalui .value di JavaScript dan dapat dipakai untuk primitive maupun object. reactive() mengembalikan proxy reaktif untuk object serta memiliki konsekuensi terkait identity dan destructuring. Lifecycle hook seperti onMounted dan onUnmounted berjalan pada tahap tertentu, tetapi bukan padanan satu-banding-satu untuk setiap pola Effect di React."
    }
  ],
  realExample: [
    {
      en: "The examples below render a counter and start one interval owned by the component. Changing count is reactive: the displayed value updates while the same component remains mounted. The interval is an external resource, so setup has matching cleanup. The displayed doubled value is calculated directly from count instead of being copied into another state variable through an effect.",
      id: "Contoh di bawah merender counter dan menjalankan satu interval yang dimiliki komponen. Perubahan count bersifat reaktif: nilai tampilan diperbarui sementara komponen yang sama tetap mounted. Interval adalah resource eksternal, sehingga setup memiliki cleanup yang sesuai. Nilai dua kali lipat dihitung langsung dari count, bukan disalin ke state lain melalui effect."
    },
    {
      en: "React and Vue reach a similar product result through different APIs and runtime models. The useful comparison is responsibility: render derived UI from current data, synchronize genuine external resources at the appropriate boundary, and undo owned work when it is replaced or removed.",
      id: "React dan Vue menghasilkan perilaku produk yang serupa melalui API dan model runtime yang berbeda. Perbandingan yang berguna terletak pada tanggung jawabnya: render UI turunan dari data saat ini, sinkronkan resource eksternal pada batas yang tepat, dan batalkan pekerjaan yang dimiliki ketika diganti atau dihapus."
    }
  ],
  code: {
    label: { en: "Reactive counters with timer cleanup in React and Vue", id: "Counter reaktif dengan cleanup timer di React dan Vue" },
    language: "tsx + vue",
    value: `// React: Counter.tsx
import { useEffect, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const doubled = count * 2; // Derive during rendering.

  useEffect(() => {
    const timerId = window.setInterval(() => {
      console.log("Counter is active");
    }, 5_000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
    <button onClick={() => setCount((current) => current + 1)}>
      Count: {count}; doubled: {doubled}
    </button>
  );
}

<!-- Vue: Counter.vue -->
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";

const count = ref(0);
const doubled = computed(() => count.value * 2);
let timerId: number | undefined;

onMounted(() => {
  timerId = window.setInterval(() => {
    console.log("Counter is active");
  }, 5_000);
});

onUnmounted(() => {
  if (timerId !== undefined) window.clearInterval(timerId);
});
</script>

<template>
  <button @click="count++">
    Count: {{ count }}; doubled: {{ doubled }}
  </button>
</template>`
  },
  codeExplanation: [
    {
      en: "In React, setCount schedules another render. React calculates doubled from the current count and commits any required text change. The Effect owns the timer; its returned function clears that timer during cleanup. In development Strict Mode, React can perform an extra setup-cleanup-setup check, and this symmetric cleanup keeps the behavior safe.",
      id: "Di React, setCount menjadwalkan render berikutnya. React menghitung doubled dari count saat ini lalu melakukan commit untuk perubahan teks yang diperlukan. Effect memiliki timer; fungsi yang dikembalikannya membersihkan timer saat cleanup. Dalam Strict Mode development, React dapat menjalankan pemeriksaan setup-cleanup-setup tambahan, dan cleanup yang simetris membuat perilakunya tetap aman."
    },
    {
      en: "In Vue, ref makes count reactive and computed tracks count as its dependency. The template automatically unwraps both refs. Updating count schedules the dependent rendering, while onMounted and onUnmounted define the timer's setup and cleanup. Neither example needs an effect or watcher merely to calculate doubled.",
      id: "Di Vue, ref membuat count reaktif dan computed melacak count sebagai dependency. Template otomatis membuka nilai kedua ref tersebut. Perubahan count menjadwalkan rendering terkait, sedangkan onMounted dan onUnmounted menentukan setup serta cleanup timer. Kedua contoh tidak membutuhkan effect atau watcher hanya untuk menghitung doubled."
    }
  ],
  comparison: {
    headers: [
      { en: "Concern", id: "Aspek" },
      { en: "React", id: "React" },
      { en: "Vue", id: "Vue" }
    ],
    rows: [
      [
        { en: "Reactive update", id: "Update reaktif" },
        { en: "A state update schedules rendering; React later commits required changes", id: "Update state menjadwalkan rendering; React kemudian melakukan commit yang diperlukan" },
        { en: "Tracked reactive dependencies schedule dependent effects and component updates", id: "Dependency reaktif yang dilacak menjadwalkan effect dan update komponen terkait" }
      ],
      [
        { en: "External synchronization", id: "Sinkronisasi eksternal" },
        { en: "useEffect setup and returned cleanup, governed by dependencies", id: "Setup useEffect dan cleanup yang dikembalikan, mengikuti dependency" },
        { en: "Lifecycle hooks, watchers, or watchEffect depending on the responsibility", id: "Lifecycle hook, watcher, atau watchEffect sesuai tanggung jawabnya" }
      ],
      [
        { en: "Derived value", id: "Nilai turunan" },
        { en: "Calculate during render; memoize only when there is a measured reason", id: "Hitung saat render; lakukan memoization hanya jika ada alasan terukur" },
        { en: "Use computed for cached reactive derivation when appropriate", id: "Gunakan computed untuk turunan reaktif yang di-cache jika sesuai" }
      ],
      [
        { en: "Lifecycle vocabulary", id: "Istilah lifecycle" },
        { en: "Render and commit phases; Effects have their own synchronization lifecycle", id: "Fase render dan commit; Effect memiliki lifecycle sinkronisasinya sendiri" },
        { en: "Explicit hooks such as onMounted, onUpdated, and onUnmounted", id: "Hook eksplisit seperti onMounted, onUpdated, dan onUnmounted" }
      ]
    ]
  },
  whenToUse: {
    good: [
      { en: "Subscribe to and unsubscribe from an external system whose lifetime follows the component or an input.", id: "Berlangganan dan berhenti dari sistem eksternal yang masa aktifnya mengikuti komponen atau sebuah input." },
      { en: "Attach and remove browser event listeners, observers, or third-party widgets.", id: "Memasang dan melepas event listener browser, observer, atau widget pihak ketiga." },
      { en: "Start a timer and guarantee that it is cleared when obsolete or when the component leaves.", id: "Menjalankan timer dan memastikan timer dibersihkan ketika tidak relevan atau saat komponen keluar." },
      { en: "Synchronize current component data with a browser API that exists outside declarative rendering.", id: "Menyinkronkan data komponen saat ini dengan browser API yang berada di luar rendering deklaratif." }
    ],
    poor: [
      { en: "A value can be calculated directly from current props or state during rendering.", id: "Sebuah nilai dapat dihitung langsung dari props atau state saat ini ketika rendering." },
      { en: "Logic is caused by one explicit user event and belongs in that event handler.", id: "Logika dipicu oleh satu event pengguna yang jelas dan seharusnya berada di event handler tersebut." },
      { en: "An effect only copies one state value into another, creating an extra render and another source of truth.", id: "Effect hanya menyalin satu nilai state ke state lain sehingga membuat render tambahan dan sumber kebenaran baru." },
      { en: "A lifecycle hook is being added only to imitate another framework's API names.", id: "Lifecycle hook ditambahkan hanya untuk meniru nama API framework lain." }
    ]
  },
  mistakes: [
    {
      en: "Assuming every render is a remount. An update can call component rendering again while preserving its identity and local state; a changed key or conditional removal can create a genuine unmount and mount.",
      id: "Menganggap setiap render sebagai remount. Update dapat menjalankan rendering komponen kembali sambil mempertahankan identitas dan local state; perubahan key atau penghapusan kondisional dapat menyebabkan unmount dan mount yang sebenarnya."
    },
    {
      en: "Treating rendering as an immediate DOM mutation. Frameworks calculate and schedule before committing necessary host changes, and some calculated work may never become visible.",
      id: "Menganggap rendering langsung mengubah DOM. Framework melakukan perhitungan dan penjadwalan sebelum melakukan commit terhadap perubahan yang diperlukan, dan sebagian hasil perhitungan mungkin tidak pernah terlihat."
    },
    {
      en: "Assuming an effect runs exactly once everywhere. Development checks, changed dependencies, remounts, and framework behavior can run setup again. Write setup and cleanup so repetition is safe.",
      id: "Menganggap effect selalu berjalan tepat satu kali di semua lingkungan. Pemeriksaan development, perubahan dependency, remount, dan perilaku framework dapat menjalankan setup kembali. Tulis setup dan cleanup agar pengulangan tetap aman."
    },
    {
      en: "Forgetting to stop subscriptions, timers, observers, or listeners. The old resource can keep running, duplicate work, retain memory, or update the wrong screen.",
      id: "Lupa menghentikan subscription, timer, observer, atau listener. Resource lama dapat terus berjalan, menggandakan pekerjaan, menahan memori, atau memperbarui layar yang salah."
    },
    {
      en: "Using an effect or watcher for a value that can be derived during rendering. This creates avoidable synchronization, extra updates, and opportunities for stale state.",
      id: "Menggunakan effect atau watcher untuk nilai yang dapat diturunkan saat rendering. Cara ini menciptakan sinkronisasi yang tidak perlu, update tambahan, dan peluang munculnya state usang."
    },
    {
      en: "Confusing reactive state with lifecycle hooks. State represents changing data; hooks and Effects coordinate work at stages or synchronization boundaries.",
      id: "Mencampuradukkan state reaktif dengan lifecycle hook. State merepresentasikan data yang berubah; hook dan Effect mengoordinasikan pekerjaan pada tahap atau batas sinkronisasi tertentu."
    },
    {
      en: "Assuming one state change rerenders every component. Trace the owner, consumers, tracked reads, keys, and framework scheduling before drawing that conclusion.",
      id: "Menganggap satu perubahan state merender ulang semua komponen. Telusuri pemilik state, consumer, pembacaan yang dilacak, key, dan penjadwalan framework sebelum mengambil kesimpulan."
    }
  ],
  seniorPerspective: [
    {
      en: "Debug from evidence. Identify whether the problem is repeated rendering, an expensive calculation, a DOM commit, or external synchronization. Use framework developer tools and targeted logging to inspect changed props, state, dependencies, mount and cleanup events. Avoid adding memoization until a measured cost and stable dependency boundary justify it.",
      id: "Lakukan debugging berdasarkan bukti. Tentukan apakah masalahnya berupa rendering berulang, perhitungan mahal, DOM commit, atau sinkronisasi eksternal. Gunakan developer tools framework dan logging terarah untuk memeriksa props, state, dependency, mount, dan cleanup yang berubah. Hindari memoization sebelum ada biaya terukur dan batas dependency yang stabil."
    },
    {
      en: "Unstable object or function identities can cause Effects, watchers, memoized work, or children to update more often than intended. First simplify data flow, keep render code pure, declare real dependencies, and split unrelated synchronization processes. Optimize only the remaining hot path; extra caching also has complexity and memory cost.",
      id: "Identitas object atau function yang tidak stabil dapat membuat Effect, watcher, pekerjaan memoized, atau child lebih sering diperbarui dari yang diperlukan. Sederhanakan alur data terlebih dahulu, jaga kode render tetap pure, deklarasikan dependency yang sebenarnya, dan pisahkan proses sinkronisasi yang tidak terkait. Optimalkan hanya hot path yang tersisa; caching tambahan juga memiliki biaya kompleksitas dan memori."
    }
  ],
  keyPoints: [
    {
      en: "Lifecycle describes when a component enters, changes during, and leaves the UI; reactivity describes how tracked changes propagate to dependent work and UI.",
      id: "Lifecycle menjelaskan kapan komponen masuk, berubah selama berada, dan keluar dari UI; reaktivitas menjelaskan cara perubahan yang dilacak merambat ke pekerjaan serta UI terkait."
    },
    {
      en: "An update is not automatically a remount, and a render calculation is not automatically a DOM change.",
      id: "Update tidak otomatis berarti remount, dan perhitungan render tidak otomatis berarti perubahan DOM."
    },
    {
      en: "Use lifecycle-related synchronization for external resources with symmetric cleanup; derive ordinary values directly from current reactive data.",
      id: "Gunakan sinkronisasi terkait lifecycle untuk resource eksternal dengan cleanup yang simetris; turunkan nilai biasa langsung dari data reaktif saat ini."
    }
  ],
  references: [
    { label: "React — Render and Commit", href: "https://react.dev/learn/render-and-commit" },
    { label: "React — Lifecycle of Reactive Effects", href: "https://react.dev/learn/lifecycle-of-reactive-effects" },
    { label: "React — You Might Not Need an Effect", href: "https://react.dev/learn/you-might-not-need-an-effect" },
    { label: "Vue — Reactivity Fundamentals", href: "https://vuejs.org/guide/essentials/reactivity-fundamentals.html" },
    { label: "Vue — Lifecycle Hooks", href: "https://vuejs.org/guide/essentials/lifecycle.html" },
    { label: "Vue — Reactivity in Depth", href: "https://vuejs.org/guide/extras/reactivity-in-depth.html" }
  ],
  related: ["react-vs-vue", "hydration", "server-vs-client-components", "client-vs-server-state", "api-integration-data-flow"],
  practiceQuestions: [
    {
      en: "When this value changes, is the component updating in place or genuinely unmounting and mounting again?",
      id: "Saat nilai ini berubah, apakah komponen diperbarui di tempat atau benar-benar mengalami unmount dan mount kembali?"
    },
    {
      en: "Is this code deriving UI from current data, responding to a user event, or synchronizing with an external system?",
      id: "Apakah kode ini menurunkan UI dari data saat ini, merespons event pengguna, atau melakukan sinkronisasi dengan sistem eksternal?"
    },
    {
      en: "Which resource does this component own, and what exact cleanup makes setup safe to repeat?",
      id: "Resource apa yang dimiliki komponen ini, dan cleanup apa yang membuat setup aman untuk diulang?"
    }
  ]
};
