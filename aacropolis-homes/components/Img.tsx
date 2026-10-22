import { wix } from "@/lib/site";

/* Plain <img> served from Wix's media CDN with on-the-fly resizing. */
export default function Img({ name, w = 800, h, alt = "" }: { name: string; w?: number; h?: number; alt?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={wix(name, w, h)} alt={alt} loading="lazy" />;
}
