import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, wix } from "@/lib/site";
import { HERO } from "@/lib/gallery";

// Hidden page: the Wix "copy-of-home-1" page canonicalises here (QR / digital sign landing page).
export const metadata: Metadata = {
  alternates: { canonical: "/digitalwelcome" },
  robots: { index: false },
};

export default function DigitalWelcome() {
  return (
    <>
      <Header overlay />
      <main>
        <section className="hero" style={{ backgroundImage: `url(${wix(HERO, 1500)})` }}>
          <div>
            <h1>WELCOME</h1>
            <p>Interested in the lot you see? Let&apos;s talk.</p>
            <a className="btn solid" href={SITE.phoneHref}>Call Us</a>
            <a className="btn" href={SITE.mapUrl}>Visit Us</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
