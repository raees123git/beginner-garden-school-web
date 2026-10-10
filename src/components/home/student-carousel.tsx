"use client";

import Image from "next/image";
import styles from "./student-carousel.module.css";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { AnimatePresence, domAnimation, LazyMotion, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { ArrowLeft, ArrowRight, Images, Sparkle } from "lucide-react";
import type { StudentActivityPhoto } from "@/content/student-activities";

export function StudentCarousel({ photos }: { photos: readonly StudentActivityPhoto[] }) {
  const [{ index, direction }, setSelection] = useState({ index: 0, direction: 1 });
  const reducedMotion = useReducedMotion();
  const thumbnails = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const photo = photos[index];
  const count = photos.length;

  useEffect(() => {
    const rail = thumbnails.current;
    const selected = rail?.querySelector<HTMLButtonElement>('[aria-current="true"]');
    if (!rail || !selected) return;
    // Scroll only the horizontal thumbnail rail; never move the page vertically.
    rail.scrollTo({
      left: selected.offsetLeft - rail.clientWidth / 2 + selected.offsetWidth / 2,
      behavior: reducedMotion === false ? "smooth" : "instant",
    });
  }, [index, reducedMotion]);

  if (!photo) return null;

  function step(change: number) {
    setSelection(current => ({
      index: (current.index + change + count) % count,
      direction: change > 0 ? 1 : -1,
    }));
  }

  function select(next: number) {
    setSelection(current => ({ index: next, direction: next >= current.index ? 1 : -1 }));
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const focusedThumbnail = event.target instanceof HTMLElement
      ? event.target.closest<HTMLButtonElement>("button[data-photo-index]")
      : null;
    const position = focusedThumbnail ? Number(focusedThumbnail.dataset.photoIndex) : index;
    let nextIndex: number;
    switch (event.key) {
      case "ArrowRight": nextIndex = (position + 1) % count; break;
      case "ArrowLeft": nextIndex = (position - 1 + count) % count; break;
      case "Home": nextIndex = 0; break;
      case "End": nextIndex = count - 1; break;
      default: return;
    }
    event.preventDefault();
    select(nextIndex);
    if (focusedThumbnail) {
      thumbnails.current?.querySelector<HTMLButtonElement>(
        '[data-photo-index="' + nextIndex + '"]',
      )?.focus({ preventScroll: true });
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const x = event.clientX - start.x;
    const y = event.clientY - start.y;
    if (Math.abs(x) > 50 && Math.abs(x) > Math.abs(y) * 1.2) step(x < 0 ? 1 : -1);
  }

  const previous = photos[(index - 1 + count) % count];
  const next = photos[(index + 1) % count];

  return (
    <LazyMotion features={domAnimation} strict>
      <div className={styles["student-carousel"]} data-student-carousel role="region" aria-roledescription="carousel"
        aria-label="Student activities photo album" aria-describedby="album-instructions" tabIndex={0} onKeyDown={onKeyDown}>
        <div className={styles["album-stage"]}>
          <div className={styles["album-orbit"]} aria-hidden="true" />
          <span className={styles["album-note"]} aria-hidden="true">A little glimpse<br />of our world</span>
          <span className={styles["album-star"]} aria-hidden="true"><Sparkle size={44} strokeWidth={1.2} /></span>

          {count > 1 && <button type="button" className={`${styles["album-preview"]} ${styles["album-preview--previous"]}`} data-carousel-controls
            onClick={() => step(-1)} aria-label={`Previous photo: ${previous.title}`}>
            <div className={styles["album-preview-image"]}>
              <Image src={previous.src} alt="" fill sizes="220px" draggable={false} />
            </div>
            <span aria-hidden="true"><ArrowLeft size={16} />Previous memory</span>
          </button>}

          <div className={styles["album-main"]} onPointerDown={onPointerDown} onPointerUp={onPointerUp}
            onPointerCancel={() => { pointerStart.current = null; }}>
            <span className={styles["album-tape"]} aria-hidden="true" />
            <AnimatePresence initial={false} mode="wait">
              <m.figure key={photo.id} className={styles["album-slide"]} role="group"
                aria-roledescription="slide" aria-label={`${index + 1} of ${count}`}
                initial={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : direction * -16 }}
                transition={{ duration: reducedMotion ? 0 : 0.2, ease: "easeOut" }}>
                <div className={styles["album-image-wrap"]}>
                  <Image src={photo.src} alt={photo.alt} fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1100px) 65vw, 760px"
                    draggable={false} />
                </div>
                <figcaption className={styles["album-caption"]}>
                  <span className={styles["album-photo-number"]}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{photo.title}</h3>
                  <span className={styles["album-caption-mark"]} aria-hidden="true"><Images size={20} strokeWidth={1.5} /></span>
                </figcaption>
              </m.figure>
            </AnimatePresence>
          </div>

          {count > 1 && <button type="button" className={`${styles["album-preview"]} ${styles["album-preview--next"]}`} data-carousel-controls
            onClick={() => step(1)} aria-label={`Next photo: ${next.title}`}>
            <div className={styles["album-preview-image"]}>
              <Image src={next.src} alt="" fill sizes="220px" draggable={false} />
            </div>
            <span aria-hidden="true">Next memory<ArrowRight size={16} /></span>
          </button>}
        </div>

        {count > 1 && <div className={styles["album-toolbar"]} data-carousel-controls>
          <div className={styles["album-browse"]}><span className="small-dot" aria-hidden="true" />Our school, in moments</div>
          <div className={styles["album-controls"]}>
            <button type="button" className={styles["album-arrow"]} onClick={() => step(-1)} aria-label="Previous photograph"><ArrowLeft size={21} aria-hidden="true" /></button>
            <span className={styles["album-position"]} aria-hidden="true">{String(index + 1).padStart(2, "0")}<span>/</span>{String(count).padStart(2, "0")}</span>
            <button type="button" className={styles["album-arrow"]} onClick={() => step(1)} aria-label="Next photograph"><ArrowRight size={21} aria-hidden="true" /></button>
          </div>
        </div>}

        {count > 1 && <div className={styles["album-thumbnails"]} data-carousel-controls ref={thumbnails} role="group" aria-label="Choose a photograph">
          {photos.map((item, position) => (
            <button type="button" key={item.id} className={styles["album-thumbnail"]} data-photo-index={position}
              aria-label={`Photo ${position + 1}: ${item.title}`}
              aria-current={index === position ? "true" : undefined}
              onClick={() => select(position)}>
              <Image src={item.src} alt="" width={item.width} height={item.height}
                sizes="80px" draggable={false} />
              <span className={styles["album-thumbnail-number"]} aria-hidden="true">{String(position + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>}
        <p id="album-instructions" className={styles["album-instructions"]} data-carousel-controls>Swipe or drag the main photo left for the next memory, right for the previous. You can also use the buttons, thumbnails, or arrow keys.</p>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          Photo {index + 1} of {count}: {photo.title}
        </p>
        <noscript>
          <style>{'[data-student-carousel] [data-carousel-controls] { display: none; }'}</style>
          <p className={styles["album-noscript"]}>Enable JavaScript to browse the rest of the photo album.</p>
        </noscript>
      </div>
    </LazyMotion>
  );
}
