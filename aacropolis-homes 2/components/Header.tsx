import Link from "next/link";
import { NAV } from "@/lib/site";
import { LOGO } from "@/lib/gallery";
import { wix } from "@/lib/site";

export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`site-header${overlay ? "" : " solid"}`}>
      <div className="wrap">
        <Link href="/" aria-label="Aacropolis Homes">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wix(LOGO, 185)} alt="Aacropolis Homes" width={185} height={65} />
        </Link>
        <nav aria-label="Main">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
