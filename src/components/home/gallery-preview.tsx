import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { galleryIntroduction, schoolPhotos } from "@/content/gallery";
import styles from "./gallery-preview.module.css";

const imageSizes = [
  "(max-width: 480px) calc(100vw - 56px), (max-width: 639px) calc(100vw - 64px), (max-width: 1100px) 55vw, (max-width: 1336px) 54vw, 712px",
  "(max-width: 480px) 70vw, (max-width: 639px) 72vw, (max-width: 1336px) 24vw, 288px",
  "(max-width: 480px) 80vw, (max-width: 639px) 82vw, (max-width: 1336px) 36vw, 448px",
];

export function GalleryPreview() {
  const photos = schoolPhotos.filter(photo => photo.approvedForPublication).slice(0, 3);
  if (!photos.length) return null;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="gallery-heading">
      <Container>
        <div className={styles.heading}>
          <div className={styles.introduction}>
            <h2 id="gallery-heading">A glimpse of BGS</h2>
            <p>{galleryIntroduction}</p>
          </div>
          <Link href="/school-life" className={`text-link ${styles.explore}`}>
            Explore school life<ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <Reveal className={styles.gallery}>
          {photos.map((photo, index) => (
            <figure key={photo.id} className={styles.photo}>
              <div className={styles.imageWindow}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={imageSizes[index]}
                  loading="lazy"
                />
              </div>
              <figcaption><span aria-hidden="true" />{photo.caption}</figcaption>
            </figure>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
