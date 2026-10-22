import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Custom Home Builder | Aacropolis Homes | Edmonton | Aacropolishomes.com",
  description:
    "Aacropolis Homes is a custom home builder in Edmonton Alberta with 31 years of experience. Estate homes, duplex bungalow, infill, acreage homes, rear lane homes. (825) 510-2298 AacropolisHomes.com",
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
