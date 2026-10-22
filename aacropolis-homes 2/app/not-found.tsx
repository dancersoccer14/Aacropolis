import Link from "next/link";
import Page from "@/components/Page";

export default function NotFound() {
  return (
    <Page title="PAGE NOT FOUND">
      <section className="section wrap center">
        <p>Sorry, we couldn&apos;t find that page.</p>
        <Link className="btn solid" href="/">Back to home</Link>
      </section>
    </Page>
  );
}
