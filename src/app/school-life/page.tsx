import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SchoolLifeGallery } from "@/components/school-life/school-life-gallery";
import { SchoolLifePhotos } from "@/components/school-life/school-life-photos";
import { schoolLifeCategories, schoolLifeIntroduction, schoolLifePhotos } from "@/content/school-life";
import "./school-life.css";

export const metadata: Metadata = {
  title: "School Life",
  description: "Explore authentic photographs of learning, creating, playing, and celebrating at Beginner Garden School & Academy.",
};

export default function SchoolLifePage() {
  const cover = schoolLifePhotos.find(photo => photo.id === "little-hands-big-discoveries")!;
  return (
    <main id="main-content" tabIndex={-1} className="school-life-page">
      <Container>
        <SchoolLifeGallery photos={schoolLifePhotos} categories={schoolLifeCategories} introduction={
        <header className="school-life-intro grid items-center gap-7 pb-10 pt-9 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:pb-16 md:pt-16">
          <div className="min-w-0">
            <h1>School Life<br />at BGS</h1>
            <div className="mt-5 max-w-xl md:mt-7">
              <p className="text-[17px] leading-relaxed text-(--muted) md:text-xl">{schoolLifeIntroduction}</p>
              <a href="#album" className="text-link mt-5 text-(--green)">Explore the moments<ArrowDown size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="life-cover min-w-0">
            <a href={cover.src} data-photo-id={cover.id} aria-label={`View photograph: ${cover.caption}`} aria-haspopup="dialog" className="life-photo-link relative block rounded-3xl">
              <div className="life-photo-window overflow-hidden rounded-3xl bg-(--mint)">
                <Image src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 50vw, 650px" loading="eager" fetchPriority="high" />
              </div>
              <span className="life-expand absolute bottom-3 right-3 grid size-11 place-items-center rounded-full bg-white text-(--green) shadow-sm" aria-hidden="true"><Maximize2 size={18} /></span>
            </a>
            <figcaption className="mt-4 font-(family-name:--font-display) text-lg font-medium text-(--green)">{cover.caption}</figcaption>
          </figure>
        </header>
        }>
          <SchoolLifePhotos />
        </SchoolLifeGallery>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-(--border) py-8 text-(--green)">
          <p className="font-(family-name:--font-display) text-xl">Learn and Serve.</p>
          <Link href="/admissions-contact" className="text-link">Admissions & contact<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </Container>
    </main>
  );
}
