export const SITE = {
  name: "Aacropolis Homes",
  url: "https://www.aacropolishomes.com",
  phone: "(825) 510-2298",
  phoneHref: "tel:+18255102298",
  email: "sales@aacropolishomes.com",
  salesManagerEmail: "casey@aacropolishomes.com",
  mapUrl: "https://maps.app.goo.gl/Y2CTzXy8F17ZEzSH6",
  instagram: "https://www.instagram.com/aacropolishomes/",
  facebook: "https://www.facebook.com/AacropolisHomes/",
  description:
    "Aacropolis Homes Ltd. is the premier custom home builder in the Edmonton, AB region.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Show Homes", href: "/show-homes" },
  { label: "About", href: "/about" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Our Homes", href: "/our-homes" },
  { label: "Quick Possession", href: "/quick-possession" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Promotions", href: "/promotions" },
  { label: "Video Tours", href: "/video-tours" },
];

/** Brochures still live on Wix. Download them and move to /public/files before cancelling Wix. */
export const FILES = {
  eleanorBrochure: "https://www.aacropolishomes.com/_files/ugd/d4109a_275f2b98ddb243f2875863abed8d33b0.pdf",
  eleanorIIIBrochure: "https://www.aacropolishomes.com/_files/ugd/4c621c_78bf6f4f26e04b6c91513ffe603d0815.pdf",
  loannaBrochure: "https://www.aacropolishomes.com/_files/ugd/4c621c_d7940dc9044a40e88a5296f48dae3c39.pdf",
  riversteadMap: "https://www.aacropolishomes.com/_files/ugd/4c621c_299af459fbf4429e85466a68029e5886.pdf",
};

/** Wix CDN image helper. Pass the full media file name. */
export function wix(name: string, w = 1000, h?: number) {
  const size = h ? `w_${w},h_${h}` : `w_${w}`;
  return `https://static.wixstatic.com/media/${name}/v1/${h ? "fill" : "fit"}/${size},al_c,q_85/${name}`;
}
export const m = (id: string) => `4c621c_${id}`;
