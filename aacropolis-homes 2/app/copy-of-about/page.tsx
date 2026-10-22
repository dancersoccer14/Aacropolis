import type { Metadata } from "next";
import Redirect from "@/components/Redirect";
export const metadata: Metadata = { robots: { index: false } };
export default function Old() { return <Redirect to="/promotions/" />; }
