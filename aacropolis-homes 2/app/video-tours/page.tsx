import type { Metadata } from "next";
import Page from "@/components/Page";

// Wix slug: /copy-of-show-homes (redirected here)
export const metadata: Metadata = { title: "Aacropolis Homes Showhomes | Edmonton Home Builder" };

export default function VideoTours() {
  return (
    <Page title="VIDEO TOURS">
      <section className="section wrap center">
        <h2>SHOWHOME FOR SALE</h2>
        <p>Take a virtual tour of the community of Keswick</p>
        {/* TODO: the Wix page embeds video that did not appear in the text export.
            Paste the YouTube/Vimeo/Matterport embed here, e.g.
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" width="100%" height="480" allowFullScreen /> */}
        <p className="small">[Video embed placeholder]</p>
      </section>
    </Page>
  );
}
