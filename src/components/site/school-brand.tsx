import Image from "next/image";
import Link from "next/link";
import badge from "../../../public/images/school-badge.jpeg";
import { school } from "@/content/school";

export function SchoolBrand({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`school-brand${footer ? " school-brand--footer" : ""}`} aria-label={`${school.name} — home`}>
      <Image src={badge} alt="" className="school-badge" sizes="64px" loading={footer ? "lazy" : "eager"} />
      <span className="brand-name" translate="no">Beginner Garden<span>School & Academy</span></span>
    </Link>
  );
}
