// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// The public site URL. Override in production via the SITE_URL env var so
// canonical links, sitemap and JSON-LD resolve to the live domain.
const site = process.env.SITE_URL ?? "https://virtuousafricasafaris.com";

// https://astro.build/config
export default defineConfig({
  site,
  // `static` output prerenders every page to HTML. The three /api/* endpoints
  // opt into on-demand rendering (`prerender = false`) so their POST handlers
  // can run — that requires an adapter, hence @astrojs/node in standalone mode.
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/api/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
