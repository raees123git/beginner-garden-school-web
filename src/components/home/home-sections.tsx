import Link from "next/link";
import { ArrowUpRight, BookOpen, HeartHandshake, MoveDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ActionLink } from "@/components/ui/action-link";
import { school } from "@/content/school";
import { HeroBadge } from "./hero-badge";

export { PrincipalSection } from "./principal-section";
export { LearningSection } from "./learning-section";
export { GalleryPreview } from "./gallery-preview";

export function Hero() {
  return <section className="hero" aria-labelledby="hero-heading">
    <Container className="hero-grid">
      <div className="hero-copy">
        <p className="hero-welcome"><span aria-hidden="true" />Welcome to Beginner Garden</p>
        <h1 id="hero-heading">A good education opens possibilities.</h1>
        <p className="hero-description">Every beginning holds potential. Our purpose is to help make good-quality education accessible to everyone.</p>
        <div className="hero-actions"><ActionLink href="/school-life">Explore school life<ArrowUpRight size={19} aria-hidden="true" /></ActionLink><Link href="/admissions-contact" className="text-link">Admissions & contact</Link></div>
        <a href="#student-activities" className="hero-discover"><span className="discover-icon"><MoveDown size={18} aria-hidden="true" /></span>See our students in action</a>
      </div>
      <HeroBadge />
    </Container>
    <Container><div className="hero-footnote"><p><BookOpen size={21} aria-hidden="true" />{school.motto}</p><span>A beginning full of possibility.</span></div></Container>
  </section>;
}

export function AdmissionsCallout() {
  return <section className="admissions-section" aria-labelledby="admissions-heading"><Container><div className="admissions-callout">
    <div className="admissions-symbol" aria-hidden="true"><HeartHandshake size={40} strokeWidth={1.3} /></div>
    <div className="admissions-copy"><h2 id="admissions-heading">Every possibility<br />has a beginning.</h2><p>Get to know Beginner Garden School & Academy.<br className="desktop-break" /> Your next step starts with a little information.</p></div>
    <ActionLink href="/admissions-contact" variant="light">Admissions & contact<ArrowUpRight size={19} aria-hidden="true" /></ActionLink>
    <div className="callout-book-lines" aria-hidden="true"><span /><span /><span /></div>
  </div></Container></section>;
}
