"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/** Client-side redirect for old Wix URLs. basePath is handled by Next's router and Link. */
export default function Redirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => { router.replace(to); }, [router, to]);
  return (
    <main className="section wrap center">
      <p>This page has moved. <Link href={to}>Continue to the new page</Link>.</p>
    </main>
  );
}
