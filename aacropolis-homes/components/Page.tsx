import Header from "./Header";
import Footer from "./Footer";

export default function Page({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {title && (<div className="pagehead wrap"><h1>{title}</h1></div>)}
        {children}
      </main>
      <Footer />
    </>
  );
}
