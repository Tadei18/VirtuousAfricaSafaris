import type { APIRoute } from "astro";
import { siteUrl } from "@/lib/constants";

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteUrl}/sitemap-index.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
