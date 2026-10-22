import { createClient, OAuthStrategy } from "@wix/sdk";
import { posts as wixPosts } from "@wix/blog";
import { LOCAL_POSTS, type Post } from "./posts";

/**
 * Headless Wix blog access.
 * - Set WIX_CLIENT_ID (Wix dashboard > Settings > Headless Settings) to enable.
 * - Without it, the site renders the local copy in lib/posts.ts.
 * Runs at BUILD time (GitHub Actions), so new Wix posts appear after the next deploy.
 * NOTE: written against the @wix/blog Posts API but not run against a live Wix project.
 */
function client() {
  const clientId = process.env.WIX_CLIENT_ID;
  if (!clientId) return null;
  return createClient({ modules: { posts: wixPosts }, auth: OAuthStrategy({ clientId }) });
}

/** Wix SDK returns "wix:image://v1/<file>/<name>#..." or a full URL; return a file name or URL. */
function normImage(v: unknown): string {
  if (!v) return "";
  if (typeof v === "object") v = (v as { url?: string }).url ?? "";
  const s = String(v);
  const hit = s.match(/^wix:image:\/\/v1\/([^/#]+)/);
  return hit ? hit[1] : s;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapPost(p: any): Post {
  return {
    slug: p.slug,
    title: p.title,
    date: p.firstPublishedDate ? new Date(p.firstPublishedDate).toISOString() : "",
    updated: p.lastPublishedDate ? new Date(p.lastPublishedDate).toISOString() : undefined,
    image: normImage(p.media?.wixMedia?.image),
    excerpt: p.excerpt ?? "",
    // Rich content (Ricos) needs @wix/ricos to render fully; plain text is used here.
    body: String(p.contentText ?? p.excerpt ?? "").split(/\n{2,}/).filter(Boolean),
  };
}

export async function getPosts(): Promise<Post[]> {
  const c = client();
  if (!c) return LOCAL_POSTS;
  try {
    const { items } = await c.posts.queryPosts().descending("firstPublishedDate").find();
    return items.length ? items.map(mapPost) : LOCAL_POSTS;
  } catch (e) {
    console.error("Wix blog fetch failed, using local posts", e);
    return LOCAL_POSTS;
  }
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await getPosts()).find((p) => p.slug === slug);
}
