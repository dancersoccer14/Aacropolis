import type { Metadata } from "next";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { SHOWHOME_IMAGES } from "@/lib/gallery";
import { FILES, SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Aacropolis Homes Quick Possession | Edmonton Home Builder" };

function Home({ img, status, ok, name, sqft, addr, brochure }: { img: string; status: string; ok?: boolean; name: string; sqft: string; addr: string; brochure?: string }) {
  return (
    <section className="section wrap two">
      <Img name={img} w={860} alt={name} />
      <div>
        <p><span className={`badge${ok ? " ok" : ""}`}>{status}</span></p>
        <h2>{name}</h2>
        <p>{sqft}<br />{addr}<br />Edmonton, AB</p>
        <p>Phone: <a href="tel:+18255102298">825.510.2298</a><br />Area Sales Manager: <a href={`mailto:${SITE.salesManagerEmail}`}>{SITE.salesManagerEmail}</a></p>
        {brochure && <a className="btn" href={brochure}>Download information brochure</a>}
      </div>
    </section>
  );
}

export default function QuickPossession() {
  return (
    <Page title="QUICK POSSESSION HOMES">
      <Home img={SHOWHOME_IMAGES.eleanorIII} status="SHOW HOME FOR SALE" ok name="ELEANOR III" sqft="1,598 Sq.Ft." addr="4621 Knight Point SW" brochure={FILES.eleanorIIIBrochure} />
      <Home img={SHOWHOME_IMAGES.loanna} status="SHOW HOME FOR SALE" ok name="LOANNA" sqft="2,371 Sq.Ft." addr="4541 Knight Wynd SW" brochure={FILES.loannaBrochure} />
      <Home img={SHOWHOME_IMAGES.eleanorDuplex} status="SOLD" name="ELEANOR" sqft="1,581 Sq.Ft." addr="4616 Knight Point SW" />
    </Page>
  );
}
