"use client";

import dynamic from "next/dynamic";
import { useCallback, useRef, useSyncExternalStore, type MouseEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import type { SchoolLifePhoto } from "@/types/school-life";

const PhotoViewer = dynamic(() => import("./photo-viewer"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-50 grid place-items-center bg-(--ink) text-white" role="status">Opening photograph…</div>,
});

const urlEvent = "bgs-gallery-url";
function subscribe(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener(urlEvent, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(urlEvent, callback);
  };
}
const snapshot = () => window.location.search;
const serverSnapshot = () => "";
const clientReady = () => true;
const serverReady = () => false;

function updateUrl(changes: Record<string, string | null>, push = false) {
  const url = new URL(window.location.href);
  for (const [key, value] of Object.entries(changes)) {
    if (value === null) url.searchParams.delete(key);
    else url.searchParams.set(key, value);
  }
  const state = { ...window.history.state, bgsViewer: Boolean(changes.photo) };
  if (push) window.history.pushState(state, "", url);
  else window.history.replaceState(state, "", url);
  window.dispatchEvent(new Event(urlEvent));
}

type Category = { readonly id: string; readonly label: string };

export function SchoolLifeGallery({ photos, categories, introduction, children }: {
  photos: readonly SchoolLifePhoto[];
  categories: readonly Category[];
  introduction: ReactNode;
  children: ReactNode;
}) {
  const search = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const params = new URLSearchParams(search);
  const category = categories.some(c => c.id === params.get("category")) ? params.get("category")! : "all";
  const visible = category === "all" ? photos : photos.filter(photo => photo.category === category);
  const selected = photos.find(photo => photo.id === params.get("photo"));
  const viewerPhotos = selected && !visible.some(photo => photo.id === selected.id) ? photos : visible;
  const trigger = useRef<HTMLAnchorElement | null>(null);
  const getReturnFocus = useCallback(() => trigger.current, []);

  function openPhoto(event: MouseEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-photo-id]") : null;
    if (!target || !photos.some(photo => photo.id === target.dataset.photoId)) return;
    event.preventDefault();
    trigger.current = target;
    updateUrl({ photo: target.dataset.photoId! }, true);
  }

  function closeViewer() {
    if (window.history.state?.bgsViewer) window.history.back();
    else updateUrl({ photo: null });
  }

  function selectCategory(id: string) {
    updateUrl({ category: id === "all" ? null : id, photo: null }, true);
    const spread = document.getElementById("school-life-photographs");
    if (spread && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spread.getAnimations().forEach(animation => animation.cancel());
      spread.animate([{ opacity: 0.75 }, { opacity: 1 }], { duration: 200, easing: "ease-out" });
    }
  }

  return (
    <>
    <div onClick={openPhoto}>{introduction}</div>
    <div id="album" className="school-life-album scroll-mt-6" data-filter={category}>
      <div className="mb-8 flex flex-col gap-5 border-b border-(--border) pb-6 md:mb-12 md:gap-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-[30px]! md:text-[38px]!">Our photo album</h2>
          <p className="text-sm text-(--muted)" role="status" aria-live="polite" aria-atomic="true">
            {visible.length} {visible.length === 1 ? "photograph" : "photographs"}{category !== "all" ? ` of ${photos.length}` : " to explore"}
          </p>
        </div>
        <fieldset disabled={!ready} className="m-0 min-w-0 border-0 p-0">
          <legend className="sr-only">Filter school photographs</legend>
          <div className="flex flex-wrap gap-2">
            {categories.map(item => {
              const active = item.id === category;
              const count = item.id === "all" ? photos.length : photos.filter(photo => photo.category === item.id).length;
              return (
                <button key={item.id} type="button" aria-pressed={active} aria-controls="school-life-photographs"
                  className={`life-filter inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-3 py-2 text-[14px] font-semibold sm:px-4 sm:text-[15px] ${active ? "border-(--green) bg-(--green) text-white" : "border-(--border) bg-white text-(--ink) hover:border-(--green) hover:bg-(--mint)"}`}
                  onClick={() => selectCategory(item.id)}>
                  {active ? <Check size={14} aria-hidden="true" /> : null}
                  <span className="sm:hidden">{item.id === "together" ? "Together" : item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span><span className="text-xs tabular-nums opacity-80">{count}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
        <p className="text-sm text-(--muted)">Select a photograph to take a closer look.</p>
        <noscript><p className="text-sm text-(--muted)">All photographs are shown below. Each opens as a full photograph; category filters and the photo viewer use JavaScript.</p></noscript>
      </div>
      <div onClick={openPhoto}>{children}</div>
      {selected ? <PhotoViewer photos={viewerPhotos} selectedId={selected.id} onNavigate={id => updateUrl({ photo: id })} onClose={closeViewer} getReturnFocus={getReturnFocus} /> : null}
    </div>
    </>
  );
}
