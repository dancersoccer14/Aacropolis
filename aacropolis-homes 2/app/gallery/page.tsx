import type { Metadata } from "next";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { GALLERY } from "@/lib/gallery";

export const metadata: Metadata = { title: "Aacropolis Homes Photo Gallery | Edmonton Home Builder | AacropolisHomes.com" };

export default function Gallery() {
  return (
    <Page title="GALLERY">
      <section className="section wrap">
        <div className="grid">
          {GALLERY.map((g, i) => (<Img key={g} name={g} w={700} h={525} alt={`Aacropolis Homes photo ${i + 1}`} />))}
        </div>
      </section>
    </Page>
  );
}
