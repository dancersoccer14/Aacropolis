import type { Metadata } from "next";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { SHOWHOME_IMAGES } from "@/lib/gallery";

export const metadata: Metadata = { title: "About Aacropolis Homes | Edmonton Home Builder" };

export default function About() {
  return (
    <Page title="ABOUT AACROPOLIS HOMES">
      <section className="section wrap two">
        <div className="prose">
          <p>For over three decades, Aacropolis Homes Ltd. has been dedicated to creating unique designs, achieving both impeccable style and superior craftsmanship for a discerning clientele.</p>
          <p>Our blend of luxury, quality and value has served us, and our clients well. Beyond building in prestigious new communities we have experience building on acreages as well as infill homes in mature neighbourhoods.</p>
          <p>Talk to us today regarding your dream build.</p>
        </div>
        <Img name={SHOWHOME_IMAGES.about} w={760} alt="Great Room Custom Home" />
      </section>
    </Page>
  );
}
