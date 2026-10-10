import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Container } from "./container";
import { school } from "@/content/school";

export function ComingSoonPage({ title, description }: { title: string; description: string }) {
  return <main id="main-content" tabIndex={-1} className="coming-soon"><Container><div className="coming-soon-panel">
    <span className="coming-soon-icon"><BookOpen size={38} strokeWidth={1.4} aria-hidden="true" /></span>
    <p className="coming-soon-status">More to come</p><h1>{title}</h1><p className="lead">{description}</p><p className="coming-soon-motto">{school.motto}</p><Link className="text-link" href="/"><ArrowLeft size={18} aria-hidden="true" />Back to home</Link>
  </div></Container></main>;
}
