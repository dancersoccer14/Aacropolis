import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a> &nbsp;|&nbsp; <a href={SITE.phoneHref}>{SITE.phone}</a></p>
        <p><a href={SITE.instagram}>Instagram</a> &nbsp;|&nbsp; <a href={SITE.facebook}>Facebook</a></p>
        <p>© Copyright 2018 Aacropolis Homes Ltd. Edmonton, Alberta</p>
      </div>
    </footer>
  );
}
