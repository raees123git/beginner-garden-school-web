import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/coming-soon-page";

export const metadata: Metadata = { title: "School life" };

export default function SchoolLifePage() {
  return <ComingSoonPage title="School life at BGS" description="A closer look at our school community is on its way. Real school photographs and approved uniform details will be shared here when available." />;
}
