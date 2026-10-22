import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { wix } from "@/lib/site";
import { HERO } from "@/lib/gallery";

export default function Home() {
  return (
    <>
      <Header overlay />
      <main>
        <section className="hero" style={{ backgroundImage: `url(${wix(HERO, 1500)})` }}>
          <div>
            <p style={{ letterSpacing: ".3em" }}>EDMONTON HOME BUILDER</p>
            <h1>Better living starts with us.</h1>
            <Link className="btn solid" href="/show-homes">Visit Show Home</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
