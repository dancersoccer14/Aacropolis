import type { Metadata } from "next";
import Page from "@/components/Page";
import Img from "@/components/Img";
import ReferralForm from "@/components/ReferralForm";
import { SHOWHOME_IMAGES } from "@/lib/gallery";

// Wix slug: /copy-of-about (redirected here)
export const metadata: Metadata = { title: "Aacropolis Homes Promotions | Edmonton Home Builder" };

export default function Promotions() {
  return (
    <Page title="REFERRAL">
      <section className="section wrap two">
        <div className="prose">
          <p><strong>The referral of your friends &amp; family is the greatest compliment you could give us!</strong></p>
          <p>Refer a Friend to Aacropolis Homes &amp; Receive $2,000 ...<br />Existing Aacropolis Home Owners Receive $3,000!</p>
          <p>Do you know someone in the market for a new home?</p>
          <p>Refer a purchaser to Aacropolis Homes and become eligible to receive a referral fee.</p>
          <p>Bring your friend in to an existing Aacropolis Show Home and make sure you register (both you and your friend).</p>
          <p>If your friend purchases, you will receive the referral bonus when they move into their new home.</p>
          <p className="small">Some conditions apply.</p>
        </div>
        <Img name={SHOWHOME_IMAGES.referral} w={760} alt="Custom Home" />
      </section>
      <section className="section alt"><div className="wrap center">
        <h2>REGISTER HERE TO RECEIVE A $2,000 DISCOUNT OFF YOUR NEW AACROPOLIS HOME</h2>
        <ReferralForm />
      </div></section>
    </Page>
  );
}
