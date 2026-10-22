import type { Metadata } from "next";
import Link from "next/link";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { OUR_HOMES } from "@/lib/gallery";
import { FILES } from "@/lib/site";

export const metadata: Metadata = {
  title: "OUR HOMES | Aacropolishomes",
  description: "Edmonton’s custom home builder for over 30 years — known for exceptional craftsmanship, industry-leading expertise, and an unwavering commitment to our clients.",
};

function Strip({ names }: { names: string[] }) {
  return <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))" }}>{names.map((n) => <Img key={n} name={n} w={400} h={300} />)}</div>;
}

export default function OurHomes() {
  return (
    <Page>
      <section className="section wrap">
        <h2>ESTATE HOMES</h2>
        <p>Our team collaborates closely with clients to bring their vision to life, ensuring every detail—from the architectural style to the finishes—exudes elegance and sophistication.</p>
        <p>With a commitment to exceptional quality and an eye for luxury, we create spaces that inspire and elevate everyday living.</p>
        <p>Our blend of luxury, quality and value has served us, and our clients well.</p>
        <Strip names={OUR_HOMES.estate} />
      </section>
      <section className="section alt"><div className="wrap">
        <h2>ESTATE DUPLEX BUNGALOWS</h2>
        <p>Executive style bungalow duplexes built by Aacropolis Homes are functional, beautiful, and designed for you.</p>
        <p><Link className="btn" href="/quick-possession">View available duplex bungalows</Link><Link className="btn" href="/show-homes">Visit bungalow duplex showhome</Link></p>
        <Strip names={OUR_HOMES.duplex} />
      </div></section>
      <section className="section wrap">
        <h2>INFILL HOMES</h2>
        <p>Beyond building in prestigious new communities we have experience building on acreages as well as infill homes in mature neighbourhoods.</p>
        <p>Whether you are coming to us with a property and a floorplan or starting from scratch, we will guide you through the infill process.</p>
        <p>We can help navigate through demolition, permitting and planning for your dream home in a mature neighbourhood.</p>
        <Strip names={OUR_HOMES.infill} />
      </section>
      <section className="section alt"><div className="wrap">
        <h2>ACREAGE HOMES</h2>
        <p>If you want room to expand and nestle into nature, our experience building acreage homes is invaluable. Navigating services, land preparation and home design all in one place, resulting in your dream acreage property</p>
        <Strip names={OUR_HOMES.acreage} />
      </div></section>
      <section className="section wrap">
        <h2>REAR LANE HOMES</h2>
        <p><strong>2 lots now remain in Keswick on the River for this product line!</strong></p>
        <p>Immediate possession available.</p>
        <p><a className="btn" href={FILES.loannaBrochure}>View available rear lane home</a><Link className="btn" href="/blog/rear-lane-attached-homes-in-keswick-on-the-river">Read more about rear lane homes</Link></p>
      </section>
    </Page>
  );
}
