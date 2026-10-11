import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { featuredSchoolLifePhotos, schoolLifePhotos } from "@/content/school-life";

export function SchoolLifePhotos() {
  return (
    <div id="school-life-photographs" className="life-photo-spread">
      {schoolLifePhotos.map(photo => {
        const featured = featuredSchoolLifePhotos.has(photo.id);
        return (
          <figure key={photo.id} id={`moment-${photo.id}`} className="life-photo" data-category={photo.category} data-featured={featured || undefined}>
            <a href={photo.src} data-photo-id={photo.id} aria-label={`View photograph: ${photo.caption}`} aria-haspopup="dialog" className="life-photo-link group relative block rounded-2xl">
              <div className="life-photo-window overflow-hidden rounded-2xl bg-(--mint)">
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height}
                  sizes={featured ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 64px), 1000px" : "(max-width: 767px) 46vw, (max-width: 1100px) 44vw, 540px"}
                  loading="lazy" />
              </div>
              <span className="life-expand absolute bottom-3 right-3 grid size-11 place-items-center rounded-full bg-white text-(--green) shadow-sm" aria-hidden="true"><Maximize2 size={18} /></span>
            </a>
            <figcaption className="mt-3 flex items-start gap-2 text-[14px] font-semibold leading-snug text-(--green) md:text-[17px]"><span className="mt-2 h-0.5 w-4 shrink-0 rounded-full bg-(--blue)" aria-hidden="true" />{photo.caption}</figcaption>
          </figure>
        );
      })}
    </div>
  );
}
