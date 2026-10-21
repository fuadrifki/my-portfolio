import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fuadrifki.pages.dev"),
  title: {
    default: "Fuad Rifqi Zamzami — Frontend Engineer",
    template: "%s · Fuad Rifqi Zamzami"
  },
  description:
    "Frontend engineer building maintainable web and mobile applications with JavaScript, TypeScript, Vue, React, Next.js, and Nuxt.js.",
  icons: {
    icon: "/favicon.svg"
  },
  keywords: [
    "Fuad Rifqi Zamzami",
    "Frontend Engineer",
    "Senior Frontend Developer",
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "React",
    "Next.js",
    "Nuxt.js",
    "React Native",
    "Tailwind CSS"
  ],
  authors: [{ name: "Fuad Rifqi Zamzami" }],
  creator: "Fuad Rifqi Zamzami",
  openGraph: {
    type: "website",
    title: "Fuad Rifqi Zamzami — Frontend Engineer",
    description:
      "Frontend engineer building maintainable web and mobile applications with JavaScript, TypeScript, Vue, React, Next.js, and Nuxt.js.",
    siteName: "Fuad Rifqi Zamzami"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuad Rifqi Zamzami — Frontend Engineer",
    description:
      "Frontend engineer building maintainable web and mobile applications with JavaScript, TypeScript, Vue, React, Next.js, and Nuxt.js."
  }
};

const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}var l=localStorage.getItem('portfolio-locale');if(l==='en'||l==='id'){document.documentElement.lang=l;}}catch(e){}})();`;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-(--bg) text-(--ink) antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
