import type { MetadataRoute } from "next";
import { SITE, NAV } from "@/lib/site";
import { getPosts } from "@/lib/wix";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = NAV.map((n) => ({ url: `${SITE.url}${n.href === "/" ? "" : n.href + "/"}` }));
  const posts = (await getPosts()).map((p) => ({ url: `${SITE.url}/blog/${p.slug}/`, lastModified: p.updated || p.date }));
  return [...pages, ...posts];
}
