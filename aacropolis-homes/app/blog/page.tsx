import type { Metadata } from "next";
import Link from "next/link";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { getPosts } from "@/lib/wix";

export const metadata: Metadata = { title: "BLOG | Aacropolishomes" };
export const revalidate = 300;

export default async function Blog() {
  const posts = await getPosts();
  return (
    <Page title="AACROPOLIS HOMES BLOG">
      <section className="section wrap">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))" }}>
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <Img name={p.image} w={600} h={450} alt={p.title} />
              <h3><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
              <p>{p.excerpt}</p>
              <p className="small">{new Date(p.date).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}</p>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
