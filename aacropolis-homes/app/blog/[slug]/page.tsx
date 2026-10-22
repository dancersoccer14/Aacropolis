import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { getPost, getPosts } from "@/lib/wix";

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  const fmt = (d: string) => new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
  return (
    <Page>
      <article className="section wrap prose" style={{ maxWidth: 780 }}>
        <p><Link href="/blog">← All Posts</Link></p>
        <h1>{post.title}</h1>
        <p className="small">{fmt(post.date)}{post.updated ? ` · Updated ${fmt(post.updated)}` : ""}</p>
        <Img name={post.image} w={980} alt={post.title} />
        <div style={{ marginTop: 24 }}>
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
          {post.callout && <p><strong>{post.callout}</strong></p>}
        </div>
      </article>
    </Page>
  );
}
