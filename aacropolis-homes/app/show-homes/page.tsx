import type { Metadata } from "next";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { SHOWHOME_IMAGES } from "@/lib/gallery";
import { FILES, SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Aacropolis Homes Showhomes | Edmonton Home Builder" };

export default function ShowHomes() {
  return (
    <Page title="SHOW HOMES">
      <section className="section wrap two">
        <Img name={SHOWHOME_IMAGES.eleanorDuplex} w={860} alt="Luxury Bungalow Duplex" />
        <div>
          <p><span className="badge ok">SHOW HOME OPEN &amp; FOR SALE</span></p>
          <h2>ALMOST SOLD OUT! One luxury duplex bungalow available for quick possession.</h2>
          <h3>KESWICK ELEANOR Duplex Bungalow<br />4621 Knight Point SW, Edmonton, AB</h3>
          <p><strong>SHOW HOME NOW OPEN!</strong><br />Monday–Thurs: 3–8PM<br />Sat–Sun: Noon–5PM<br />Closed Friday</p>
          <p>Phone: <a href="tel:+18255102298">825.510.2298</a><br />Email: <a href={`mailto:${SITE.salesManagerEmail}`}>{SITE.salesManagerEmail}</a></p>
          <a className="btn" href={SITE.mapUrl}>Click for location</a>
          <a className="btn" href={FILES.eleanorBrochure}>Download information brochure</a>
        </div>
      </section>
      <section className="section alt"><div className="wrap two">
        <Img name={SHOWHOME_IMAGES.loanna} w={860} alt="4541 Knight Wynd SW Loanna" />
        <div>
          <p><span className="badge">SOLD</span></p>
          <h2>KESWICK LOANNA</h2>
          <p>Rear Attached Garage – 2,371 Sq. Ft<br />4541 Knight Wynd SW<br />Edmonton, AB</p>
          <p>Phone: <a href="tel:+18255102298">825.510.2298</a><br />Email: <a href={`mailto:${SITE.salesManagerEmail}`}>{SITE.salesManagerEmail}</a></p>
          <a className="btn" href="https://maps.app.goo.gl/Mi17zPMm1fSr8Ton7">Click for location</a>
          <a className="btn" href={FILES.loannaBrochure}>Download information brochure</a>
        </div>
      </div></section>
      <section className="section wrap two">
        <Img name={SHOWHOME_IMAGES.riverstead} w={600} alt="Keswick on the River" />
        <div>
          <h2>RIVERSTEAD LOTS NOW AVAILABLE</h2>
          <p>Contact Casey to discuss Stage 52, 55 and 56 river lots!</p>
          <p>Phone: <a href="tel:+18255102298">825.510.2298</a><br />Area Sales Manager: <a href={`mailto:${SITE.salesManagerEmail}?subject=Riverstead`}>{SITE.salesManagerEmail}</a></p>
          <a className="btn" href={FILES.riversteadMap}>Overall map</a>
        </div>
      </section>
    </Page>
  );
}
