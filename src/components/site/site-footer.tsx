import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigation, school } from "@/content/school";
import { SchoolBrand } from "./school-brand";

export function SiteFooter() {
  return <footer className="site-footer"><Container>
    <div className="footer-top">
      <div><SchoolBrand footer /><p className="footer-purpose">{school.purpose}</p></div>
      <nav aria-label="Footer navigation">{navigation.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <div className="footer-motto"><span>Our motto</span><p>{school.motto}</p></div>
    </div>
    <div className="footer-bottom"><span>© Beginner Garden School & Academy</span><span>A beginning full of possibility.</span></div>
  </Container></footer>;
}
