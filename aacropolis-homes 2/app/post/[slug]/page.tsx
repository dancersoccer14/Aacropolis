import type { Metadata } from "next";
import Redirect from "@/components/Redirect";
import { getPosts } from "@/lib/wix";

export const metadata: Metadata = { robots: { index: false } };

export async function generateStaticParams() {
  return (await getPosts()).map((p) => ({ slug: p.slug }));
}

export default async function OldPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Redirect to={`/blog/${slug}/`} />;
}
