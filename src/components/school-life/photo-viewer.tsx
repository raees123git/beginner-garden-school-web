"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { SchoolLifePhoto } from "@/types/school-life";

export default function PhotoViewer({ photos, selectedId, onNavigate, onClose, getReturnFocus }: {
  photos: readonly SchoolLifePhoto[];
  selectedId: string;
  onNavigate: (id: string) => void;
  onClose: () => void;
  getReturnFocus: () => HTMLAnchorElement | null;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const gesture = useRef<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();
  const [failedId, setFailedId] = useState<string | null>(null);
  const index = photos.findIndex(photo => photo.id === selectedId);
  const photo = photos[index];
  const callbacks = useRef({ onNavigate, photos, index });

  useEffect(() => { callbacks.current = { onNavigate, photos, index }; }, [onNavigate, photos, index]);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const previousFocus = getReturnFocus() ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    const y = window.scrollY;
    const body = document.body;
    const old = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow, paddingRight: body.style.paddingRight };
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + gap}px`;
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    element.showModal();
    closeButton.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "Tab") {
        const controls = [...element.querySelectorAll<HTMLElement>("button:not(:disabled), a[href]")];
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      const state = callbacks.current;
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        state.onNavigate(state.photos[(state.index + offset + state.photos.length) % state.photos.length].id);
      }
    };
    element.addEventListener("keydown", onKey);
    return () => {
      element.removeEventListener("keydown", onKey);
      element.close();
      Object.assign(body.style, old);
      window.scrollTo({ top: y, behavior: "instant" });
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [getReturnFocus]);

  function navigate(offset: number) {
    onNavigate(photos[(index + offset + photos.length) % photos.length].id);
  }

  function beginSwipe(event: TouchEvent<HTMLDivElement>) {
    gesture.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null;
  }

  function endSwipe(event: TouchEvent<HTMLDivElement>) {
    const start = gesture.current;
    gesture.current = null;
    if (!start || event.touches.length || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - start.x;
    const dy = event.changedTouches[0].clientY - start.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) navigate(dx < 0 ? 1 : -1);
  }

  return (
    <dialog ref={dialog} className="life-viewer" aria-labelledby="photo-viewer-title" aria-describedby="photo-viewer-caption"
      onCancel={event => { event.preventDefault(); onClose(); }}>
      <div className="life-viewer-shell">
        <div className="flex min-w-0 items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 id="photo-viewer-title" className="text-[18px]! font-semibold! tracking-normal!">School life at BGS</h2>
            <p className="mt-1 text-sm tabular-nums text-white/80" aria-live="polite" aria-atomic="true">Photograph {index + 1} of {photos.length}</p>
          </div>
          <button ref={closeButton} type="button" onClick={onClose} className="life-viewer-control" aria-label="Close photo viewer"><X size={23} aria-hidden="true" /></button>
        </div>
        <div className="life-viewer-stage" onTouchStart={beginSwipe} onTouchEnd={endSwipe} onTouchCancel={() => { gesture.current = null; }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div key={photo.id} className="absolute inset-0" initial={{ opacity: reduceMotion ? 1 : 0.6 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.18 }}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 100vw, 90vw" loading="eager" className="object-contain" draggable={false} onError={() => setFailedId(photo.id)} />
            </motion.div>
          </AnimatePresence>
          {failedId === photo.id ? <div className="absolute inset-0 grid place-items-center bg-(--ink) p-6 text-center"><p>This photograph could not load. <a className="underline underline-offset-4" href={photo.src} target="_blank" rel="noopener noreferrer">Open the photograph directly</a>, or try the next one.</p></div> : null}
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          <p id="photo-viewer-caption" className="text-center font-(family-name:--font-display) text-lg leading-snug sm:text-xl">{photo.caption}</p>
          <div className="flex items-center justify-between gap-3">
            <button type="button" className="life-viewer-control gap-1.5 px-3!" aria-label="Previous photograph" onClick={() => navigate(-1)} disabled={photos.length < 2}><ChevronLeft size={22} aria-hidden="true" /><span className="text-sm">Previous</span></button>
            <span className="text-center text-xs text-white/80">Swipe or use<br className="sm:hidden" /> the arrows</span>
            <button type="button" className="life-viewer-control gap-1.5 px-3!" aria-label="Next photograph" onClick={() => navigate(1)} disabled={photos.length < 2}><span className="text-sm">Next</span><ChevronRight size={22} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
