import type { Metadata } from "next";
import Page from "@/components/Page";
import Img from "@/components/Img";
import { SHOWHOME_IMAGES } from "@/lib/gallery";

export const metadata: Metadata = { title: "Aacropolis Homes Process | Edmonton Home Builder" };

const STEPS: { title: string; items: string[] }[] = [
  { title: "LOT SELECTION", items: ["Assist in finding the appropriate lot from our own inventory or elsewhere"] },
  { title: "INITIAL PROJECT ASSESSMENT", items: [
    "Approximate budget, construction timeline, possible costs that may arise and deposit structure will be discussed",
    "Budget pricing will be provided based on the level of specifications desired, approx size and features desired to gain a clear understanding of what the client is looking for",
    "Get a clear understanding of what to expect throughout the entire process." ] },
  { title: "DESIGN PROCESS", items: [
    "Upon budget & timeline approval, design deposit required",
    "Coordinate a series of meeting with Builder to start the design. Depending on complexity of custom plans, this could take approx 3 months" ] },
  { title: "SPECIFICATION REVIEW", items: [
    "Client and Builder to review the specifications, and identify any major changes desired they would like incorporated into the original agreement. This will allow for the pricing to be comprehensive and cover all of the elements that the client desires into the original purchase contract.",
    "Client still can make modifications to the actual product (i.e. cabinets, lighting, flooring, railing, colours, etc) going into their home when they visit trade partners." ] },
  { title: "ENTER INTO ANHWP CONTRACT", items: ["Upon approval of pricing client and builder will enter into an ANHWP Purchase Contract"] },
  { title: "SUBMISSION OF ARCHITECTURAL CONTROL", items: [
    "Client and Builder to choose all of the elements required for Architectural Approval",
    "Submit for approval to the developer" ] },
  { title: "APPLY FOR BUILDING PERMIT & START CONSTRUCTION", items: [
    "Upon Architectural Controls approval, plans will be submitted for a building permit and surveys,",
    "Construction will start.",
    "Client will meet with various trade partners to complete their final interior selections during first months",
    "Builder to facilitate process and provide guidance and assistance, as well coordinate walkthroughs of the home at various stages." ] },
  { title: "NOTICE OF POSSESSION, PRE-OCCUPANCY WALKTHROUGH, AND WALKTHROUGH", items: [
    "Approx 35 days before home is complete, client will be provided with a Possession Letter confirming the actual date for taking possession.",
    "Pre-possession walkthrough of the home approximately 1 week before possession.",
    "Builder to rectify any minor items that may need to be corrected.",
    "Client will be provided orientation of various components of their home such as plumbing systems, HVAC systems, alarm systems, home automation systems, etc." ] },
  { title: "FIRST YEAR, 6 MONTH & 12 MONTH POST POSSESSIONS WARRANTY WALKTHROUGH", items: [
    "2 walkthroughs during the first year post possession to insure everything is fine",
    "Make any minor adjustments as required",
    "Answer any questions a client may have on their home.",
    "2,5,10 warranty coverage through the ANHWP" ] },
];

export default function Process() {
  return (
    <Page title="THE PROCESS">
      <section className="section wrap two" style={{ alignItems: "start" }}>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="small">STEP {i + 1}</span>
              <h3>{s.title}</h3>
              <ul>{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </li>
          ))}
        </ol>
        <div style={{ display: "grid", gap: 16 }}>
          <Img name={SHOWHOME_IMAGES.plans} w={600} alt="plans" />
          <Img name={SHOWHOME_IMAGES.hammering} w={600} alt="Hammering" />
        </div>
      </section>
    </Page>
  );
}
