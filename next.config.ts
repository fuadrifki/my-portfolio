import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    agentUpgrade: "security",
  },

  // Static export: `next build` emits a fully static site into `out/`,
  // which is what Cloudflare Pages serves.
  //
  // NOTE: `cacheComponents` (and therefore `partialPrefetching`, which
  // requires it) is intentionally NOT enabled. `cacheComponents` turns on
  // Partial Prerendering (PPR), and Next.js forbids PPR in export mode
  // (`Invariant: PPR cannot be enabled in export mode`). This portfolio has
  // no dynamic server content and uses no Cache Components features, so
  // static export is the correct target.
  output: "export",
  // Static export has no Image Optimization API, so serve images as-is.
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/**"),
      new URL("https://cdn.simpleicons.org/**"),
      new URL("https://kiro.dev/favicon.ico"),
      new URL("https://flagcdn.com/id.svg")
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
