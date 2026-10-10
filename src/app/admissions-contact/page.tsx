import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ui/coming-soon-page";

export const metadata: Metadata = { title: "Admissions & contact" };

export default function AdmissionsContactPage() {
  return <ComingSoonPage title="A beginning at BGS" description="Thank you for your interest in Beginner Garden School & Academy. Official admissions requirements, contact details and directions will be shared here once confirmed by the school." />;
}
