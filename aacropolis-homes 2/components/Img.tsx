import { wix } from "@/lib/site";

/* Plain <img> from Wix's media CDN (resized on the fly), or any absolute URL. */
export default function Img({ name, w = 800, h, alt = "" }: { name: string; w?: number; h?: number; alt?: string }) {
  const src = name.startsWith("http") ? name : wix(name, w, h);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" />;
}
