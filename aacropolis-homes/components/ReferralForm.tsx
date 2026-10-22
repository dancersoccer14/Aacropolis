"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * No backend yet: submitting opens the visitor's email client addressed to sales.
 * Replace with a Wix Forms / CRM submission (or an API route) when ready.
 */
export default function ReferralForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone")}`,
      `Lot type: ${f.get("lot")}`,
      `Price range: ${f.get("price")}`,
      `Stay informed: ${f.get("informed")}`,
      `Interested in: ${f.getAll("pref").join(", ")}`,
    ];
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent("$2,000 discount registration")}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <form className="ref" onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="phone" placeholder="Phone" />
      <input type="text" name="lot" placeholder="Lot Type" />
      <fieldset><legend>Price Range</legend>
        {["Under $700,000", "$700,000-$1 Million", "Over $1 Million"].map((p) => (
          <label key={p} style={{ display: "block" }}><input type="radio" name="price" value={p} /> {p}</label>
        ))}
      </fieldset>
      <fieldset><legend>I would like to stay informed on promotions, events &amp; show home updates:</legend>
        <label><input type="radio" name="informed" value="Yes" defaultChecked /> Yes</label>{" "}
        <label><input type="radio" name="informed" value="No" /> No</label>
      </fieldset>
      <fieldset><legend>I would prefer</legend>
        {["Acreage", "New community", "Infill", "Two Storey", "Bungalow", "Multi-level"].map((p) => (
          <label key={p} style={{ display: "block" }}><input type="checkbox" name="pref" value={p} /> {p}</label>
        ))}
      </fieldset>
      <button className="btn solid" type="submit">Submit</button>
      {sent && <p className="small">Thanks! Your email app should have opened. We&apos;ll be in touch soon.</p>}
    </form>
  );
}
