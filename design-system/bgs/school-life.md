# School Life at BGS — implementation and image review

## Delivered scope

The user's current brief explicitly approves the full School Life gallery,
filters and lightbox, extending the earlier placeholder-only scope. The homepage,
shared navbar/footer, badge, design tokens, and Admissions & contact placeholder
are preserved. There was no existing uniform showcase on this page. No uniforms,
backend, CMS, database, additional route, or dependency were added.

## Collection

- Source files inspected: **39**. Every image was visually reviewed in contact sheets;
  sideways frames and ambiguous nearby celebration frames were also opened individually.
- Valid, unique photographs included: **39**.
- Corrupt/unreadable files: **0**. Exact file/pixel duplicates: **0**.
- Similar photographs are retained because students' poses or framing differ.
- All 39 originals remain byte-identical to their SHA-256 digests.
- Categories: learning & creating **13**, play & movement **10**, celebrations **12**,
  together at BGS **4**. All moments contains all 39 unique photographs.
- The introduction reprises one photograph as an album cover; the album itself
  contains each of the 39 unique photographs once. The cover is also selectable.

## Design and interactions

The composition starts with a large title and an authentic classroom cover image.
On phones, the cover appears before the filters rather than being pushed below
them. The album alternates staggered portrait pairs, quieter supporting landscapes,
and seven large photographic moments. All photos retain their complete source
proportions at rest. Captions sit outside the photos and remain visible on touch.

The existing palette is retained: blue #0077A8, green #1C6548, ink #123B56,
paper #F7FBFC, sky #DFF2F8, white #FFFFFF. Bricolage Grotesque remains the heading
and featured-caption face; Source Sans 3 remains the body and controls face.
Tailwind utilities provide layout and control styles; page-owned CSS handles the
editorial spread, filter visibility, safe areas and viewer. Existing tokens are used
without changing their values.

Filters wrap rather than forcing horizontal scrolling. They expose pressed states,
counts, and a live result summary. URL query parameters preserve categories and
selected photos; Back restores the previous filter or closes an opened viewer.
Invalid category/photo parameters safely fall back to the collection.

The viewer uses a native modal dialog with containment framing, previous/next
buttons, a current/total indicator, Escape, arrow keys, a visible close button,
and horizontal touch swipes. Tab and Shift+Tab stay within the viewer. Background
scrolling is locked; closing restores both scroll position and thumbnail focus.
Direct photo links are supported, including filtered collections.

Only the viewer loads Motion and its component code on activation. Motion is used
for brief photo crossfades; category changes have a brief interruptible opacity
transition. Reduced motion disables these effects. There is no autoplay, parallax,
scroll hijacking or continuous animation.

## Image processing

Optimized copies live in `public/images/school-life/`. The reproducible TypeScript
pipeline is `scripts/optimize-school-life.mts`:

```powershell
node --experimental-strip-types scripts/optimize-school-life.mts
```

This uses Sharp already installed with Next.js. The pipeline checks the source
inventory, unique output names, duplicate decoded pixels, and source hashes.
It normalizes EXIF orientation and manually rotates the two sideways group
photographs 270 degrees. Each photo has individually reviewed exposure, contrast,
gamma and saturation settings. Conservative sharpening is reduced for the dimmer
photos. WebP quality 80 / effort 6, sRGB output, and a maximum 1600-pixel edge
keep full-size viewer assets reasonable. There is no enlargement or permanent crop.

Total source bytes: **6,952,037**. Total optimized bytes: **6,303,420**.
Responsive Next.js Image derivatives are smaller than these viewer-source files.
The cover is the only eager/high-priority photo; all album photos use native lazy
loading, intrinsic dimensions, and responsive sizes.

No generated detail, face modification, object replacement, artificial upscaling,
or aggressive noise removal was used. Original blur, glare, clipped highlights,
and camera-edge crops cannot be recovered. Strong smoothing would discard genuine
facial detail, so it was omitted. The very small fine-pointer hover zoom temporarily
trims image edges; the viewer always shows the full photograph.

## Original-to-optimized mapping

Original folder: `public/school-life-images/`.
Output folder: `public/images/school-life/`.

| Original filename | Optimized filename | Output pixels | KiB |
| --- | --- | --- | ---: |
| WhatsApp Image 2026-10-11 at 23.16.19.jpeg | balloons-in-the-courtyard.webp | 960 ? 1280 | 283 |
| WhatsApp Image 2026-10-11 at 23.16.22.jpeg | balloons-held-high.webp | 960 ? 1280 | 212 |
| WhatsApp Image 2026-10-11 at 23.18.41 (1).jpeg | balancing-a-balloon.webp | 960 ? 1280 | 208 |
| WhatsApp Image 2026-10-11 at 23.18.41 (2).jpeg | balloon-game-classmates.webp | 960 ? 1280 | 181 |
| WhatsApp Image 2026-10-11 at 23.18.41.jpeg | courtyard-smiles.webp | 960 ? 1280 | 269 |
| WhatsApp Image 2026-10-11 at 23.18.42 (1).jpeg | classroom-artwork.webp | 960 ? 1280 | 137 |
| WhatsApp Image 2026-10-11 at 23.18.42 (2).jpeg | art-around-the-table.webp | 1200 ? 1600 | 158 |
| WhatsApp Image 2026-10-11 at 23.18.42.jpeg | artwork-in-the-courtyard.webp | 960 ? 1280 | 154 |
| WhatsApp Image 2026-10-11 at 23.18.43 (1).jpeg | choosing-books-together.webp | 1200 ? 1600 | 124 |
| WhatsApp Image 2026-10-11 at 23.18.43 (2).jpeg | bookshelf-classmates.webp | 1280 ? 960 | 120 |
| WhatsApp Image 2026-10-11 at 23.18.43.jpeg | learning-around-the-desks.webp | 1280 ? 960 | 153 |
| WhatsApp Image 2026-10-11 at 23.18.44 (1).jpeg | trophies-and-paper-crowns.webp | 1280 ? 960 | 205 |
| WhatsApp Image 2026-10-11 at 23.18.44.jpeg | celebration-from-the-courtyard.webp | 960 ? 1280 | 187 |
| WhatsApp Image 2026-10-11 at 23.18.45 (1).jpeg | celebration-group-trophies.webp | 1280 ? 960 | 183 |
| WhatsApp Image 2026-10-11 at 23.18.45 (2).jpeg | certificates-in-the-courtyard.webp | 1280 ? 960 | 266 |
| WhatsApp Image 2026-10-11 at 23.18.45.jpeg | students-with-certificates.webp | 960 ? 1280 | 192 |
| WhatsApp Image 2026-10-11 at 23.18.46 (1).jpeg | courtyard-group-exercise.webp | 960 ? 1280 | 144 |
| WhatsApp Image 2026-10-11 at 23.18.46 (2).jpeg | raised-hands-in-the-courtyard.webp | 960 ? 1280 | 208 |
| WhatsApp Image 2026-10-11 at 23.18.46.jpeg | celebration-trophies-held-high.webp | 1280 ? 960 | 204 |
| WhatsApp Image 2026-10-11 at 23.18.47 (1).jpeg | exercise-beneath-the-trees.webp | 960 ? 1280 | 249 |
| WhatsApp Image 2026-10-11 at 23.18.47.jpeg | balloons-and-celebration.webp | 960 ? 1280 | 86 |
| WhatsApp Image 2026-10-11 at 23.18.48 (1).jpeg | showing-our-number-cards.webp | 1200 ? 1600 | 168 |
| WhatsApp Image 2026-10-11 at 23.18.48 (2).jpeg | picture-cards-in-a-row.webp | 1600 ? 1200 | 80 |
| WhatsApp Image 2026-10-11 at 23.18.48.jpeg | exercise-with-classmates.webp | 960 ? 1280 | 177 |
| WhatsApp Image 2026-10-11 at 23.18.49 (1).jpeg | counting-with-classmates.webp | 1200 ? 1600 | 150 |
| WhatsApp Image 2026-10-11 at 23.18.49 (2).jpeg | a-turn-on-the-slide.webp | 1600 ? 1200 | 199 |
| WhatsApp Image 2026-10-11 at 23.18.49.jpeg | learning-cards-on-display.webp | 1600 ? 1200 | 80 |
| WhatsApp Image 2026-10-11 at 23.18.50 (1).jpeg | play-around-the-red-table.webp | 1280 ? 960 | 121 |
| WhatsApp Image 2026-10-11 at 23.18.50.jpeg | little-hands-big-discoveries.webp | 1280 ? 960 | 135 |
| WhatsApp Image 2026-10-11 at 23.18.51 (1).jpeg | classmates-by-the-colorful-wall.webp | 960 ? 1280 | 72 |
| WhatsApp Image 2026-10-11 at 23.18.51 (2).jpeg | school-group-close-up.webp | 1280 ? 720 | 148 |
| WhatsApp Image 2026-10-11 at 23.18.51.jpeg | building-and-playing-together.webp | 1280 ? 960 | 113 |
| WhatsApp Image 2026-10-11 at 23.18.52 (1).jpeg | our-school-community.webp | 1280 ? 720 | 162 |
| WhatsApp Image 2026-10-11 at 23.18.52.jpeg | two-classmates-in-the-courtyard.webp | 720 ? 1280 | 148 |
| WhatsApp Image 2026-10-11 at 23.18.53 (1).jpeg | green-and-white-on-the-steps.webp | 749 ? 999 | 94 |
| WhatsApp Image 2026-10-11 at 23.18.53 (2).jpeg | flags-and-handmade-cards.webp | 999 ? 749 | 104 |
| WhatsApp Image 2026-10-11 at 23.18.53.jpeg | celebrating-on-the-steps.webp | 749 ? 999 | 90 |
| WhatsApp Image 2026-10-11 at 23.18.54 (1).jpeg | handmade-flags-and-smiles.webp | 999 ? 749 | 91 |
| WhatsApp Image 2026-10-11 at 23.18.54.jpeg | a-row-of-green-and-white.webp | 999 ? 749 | 103 |

## Individual review and adjustments

Settings are listed as brightness / gamma / contrast / saturation. These are
subtle tonal corrections, not fabricated improvements to facial detail.

| Optimized photo | Visual review and framing decision | Settings |
| --- | --- | --- |
| balloons-in-the-courtyard.webp | Balanced outdoor light; preserve the full circle of students and both balloons. | 1.025 / 1.02 / 1.02 / 1 |
| balloons-held-high.webp | Lively, clear expressions; retain raised hands and foreground children. | 1.02 / 1.02 / 1.025 / 0.99 |
| balancing-a-balloon.webp | Good portrait activity framing; preserve the full student and balloon. | 1.025 / 1.02 / 1.02 / 1 |
| balloon-game-classmates.webp | Slightly shaded faces; retain classmates and the central student. | 1.035 / 1.02 / 1.025 / 1 |
| courtyard-smiles.webp | Strong warm expressions and balanced light; a larger supporting portrait. | 1.02 / 1.02 / 1.025 / 1 |
| classroom-artwork.webp | Dim classroom, slight warm cast; preserve artwork and faces without smoothing. | 1.055 / 1.02 / 1.025 / 0.98 |
| art-around-the-table.webp | Indoor shadows and some softness; retain all students and the papers. | 1.04 / 1.02 / 1.02 / 0.99 |
| artwork-in-the-courtyard.webp | Clear portrait group; full-height framing preserves students and artwork. | 1.025 / 1.02 / 1.025 / 1 |
| choosing-books-together.webp | Soft detail and warm indoor light; gently brighten without claiming a library facility. | 1.055 / 1.02 / 1.02 / 0.98 |
| bookshelf-classmates.webp | Good landscape context; retain both bookcases and all four children. | 1.035 / 1.02 / 1.025 / 0.99 |
| learning-around-the-desks.webp | Dark upper-left background and uneven indoor light; feature the complete classroom scene. | 1.06 / 1.04 / 1.025 / 0.98 |
| trophies-and-paper-crowns.webp | Shadowed celebration group; brighten gently and retain banner and foreground subjects. | 1.07 / 1.06 / 1.025 / 1 |
| celebration-from-the-courtyard.webp | Wide portrait scene with foreground attendees; preserve the full event context. | 1.025 / 1.02 / 1.02 / 0.99 |
| celebration-group-trophies.webp | Engaging full-group landscape; wider composition than the other trophy photographs. | 1.06 / 1.04 / 1.025 / 1 |
| certificates-in-the-courtyard.webp | Clear broad group scene; preserve all certificates without inferring awards or event names. | 1.035 / 1.02 / 1.025 / 0.99 |
| students-with-certificates.webp | Closer portrait scene; retain students, certificates and trophies. | 1.035 / 1.02 / 1.02 / 1 |
| courtyard-group-exercise.webp | Bright upper background and shaded faces; no global exposure boost beyond a small correction. | 1.02 / 1.02 / 1.025 / 0.99 |
| raised-hands-in-the-courtyard.webp | Uneven sunlight; preserve raised arms and the closest student's face. | 1.015 / 1.02 / 1.025 / 0.99 |
| celebration-trophies-held-high.webp | A distinct nearby frame of the celebration; poses differ, so retain it. | 1.06 / 1.04 / 1.025 / 1 |
| exercise-beneath-the-trees.webp | Bright highlights, natural shade; preserve complete portrait framing. | 1.025 / 1.02 / 1.02 / 1 |
| balloons-and-celebration.webp | Dim indoor light and softness; light sharpening only, no invented detail. | 1.07 / 1.03 / 1.02 / 0.98 |
| showing-our-number-cards.webp | Indoor portrait composition; preserve every number card and child. | 1.045 / 1.02 / 1.025 / 1 |
| picture-cards-in-a-row.webp | Soft fine detail; subtle contrast and conservative sharpening. | 1.035 / 1.02 / 1.02 / 0.99 |
| exercise-with-classmates.webp | Strong sunlight from the upper right; retain hands, faces and group. | 1.015 / 1.02 / 1.025 / 0.99 |
| counting-with-classmates.webp | Balanced but slightly dim indoor scene; keep all cards and students. | 1.04 / 1.02 / 1.025 / 1 |
| a-turn-on-the-slide.webp | Hard sunlight and rich reds; restrained saturation, full group framing. | 1.015 / 1.02 / 1.015 / 0.98 |
| learning-cards-on-display.webp | Related but distinct frame from picture-cards-in-a-row; retain all children. | 1.04 / 1.02 / 1.02 / 0.99 |
| play-around-the-red-table.webp | Good landscape, slightly shaded faces and strong reds; balance without oversaturating. | 1.04 / 1.02 / 1.025 / 0.97 |
| little-hands-big-discoveries.webp | Strongest welcoming classroom feature: clear faces, colorful shared activity, balanced composition. | 1.035 / 1.02 / 1.025 / 0.97 |
| classmates-by-the-colorful-wall.webp | Slightly dim portrait with empty upper wall; retain full original framing. | 1.05 / 1.02 / 1.02 / 0.99 |
| school-group-close-up.webp | Pixel data is sideways without corrective EXIF; rotate counterclockwise and keep all visible faces. | 1.025 / 1.02 / 1.025 / 1 |
| building-and-playing-together.webp | A quieter landscape learning scene; mild exposure correction, preserve all students. | 1.04 / 1.02 / 1.025 / 0.99 |
| our-school-community.webp | Sideways pixel data; rotate counterclockwise, balanced outdoor group feature. | 1.025 / 1.02 / 1.025 / 1 |
| two-classmates-in-the-courtyard.webp | Neutral sunlight, sharp subjects; preserve full-height portrait. | 1.025 / 1.02 / 1.02 / 1 |
| green-and-white-on-the-steps.webp | Upper-right haze and bright light; slightly lower brightness rather than lifting exposure. | 0.99 / 1.02 / 1.035 / 0.98 |
| flags-and-handmade-cards.webp | Bright skin highlights and vivid greens; restrained color correction. | 0.995 / 1.02 / 1.025 / 0.98 |
| celebrating-on-the-steps.webp | Different poses from green-and-white-on-the-steps; upper-right glare cannot be restored. | 0.99 / 1.02 / 1.035 / 0.98 |
| handmade-flags-and-smiles.webp | Clear close faces, bright exposure; retain handmade work and natural skin texture. | 0.995 / 1.02 / 1.025 / 0.98 |
| a-row-of-green-and-white.webp | Strong landscape group; vivid greens balanced slightly, preserve every face. | 1.005 / 1.02 / 1.025 / 0.98 |

## Architecture and files

- `src/app/school-life/page.tsx`: static Server Component, introduction, metadata,
  and existing navigation destination.
- `src/app/school-life/school-life.css`: isolated page selectors and responsive viewer.
- `src/components/school-life/school-life-photos.tsx`: server-rendered photos, captions,
  native fallback links, and Next.js Image delivery.
- `src/components/school-life/school-life-gallery.tsx`: focused client boundary for
  filters, URL state, and delegated activation of real native links.
- `src/components/school-life/photo-viewer.tsx`: dynamically loaded modal and gestures.
- `src/types/school-life.ts`: typed public photo data.
- `src/content/school-life.ts`: approved introduction, categories, photo sequence,
  and featured-photo choices.
- `src/content/school-life-source.json`: individual visual review and processing settings.
- `src/content/school-life-manifest.json`: exact source mapping, source hashes, dimensions,
  file sizes, captions, alt descriptions and processing metadata. Only required display
  fields cross the client boundary.
- `scripts/optimize-school-life.mts`: nondestructive processing pipeline.

The route remains statically prerendered. With JavaScript disabled, all 39 photos,
captions and image links remain available; filters are disabled with an explanatory
noscript message. Clicking a photo opens its WebP directly.

## Verification

- ESLint: passed. TypeScript (`tsc --noEmit`): passed. Production build: passed.
- Production Chrome checks at **320, 375, 390, 430, 768, and 1440 CSS pixels**:
  all 39 photos decode, all filters select the correct category, no page overflow,
  no clipped controls, and intrinsic photo ratios are retained. Filter targets
  are at least 44 pixels; viewer controls are at least 48 pixels.
- Mobile, tablet, desktop and viewer screenshots visually inspected.
- Previous/next buttons, left/right keys, Escape, Tab/Shift+Tab containment,
  keyboard activation, focus restoration and scroll restoration: passed.
- Actual emulated touchscreen swipe navigation: passed. Buttons remain available
  as gesture alternatives.
- Category changes do not reload the page; filter Back, viewer Back and direct
  category/photo URLs: passed.
- Landscape **844 × 390**, reduced motion, and a **720 CSS pixel / 2× scale** layout
  equivalent to 200% zoom on a 1440-pixel desktop: passed. Native desktop browser
  zoom was not separately automated.
- JavaScript disabled: all 39 server-rendered photos and links remain accessible.
- Runtime exceptions observed: none.
- Homepage and Admissions & contact route smoke checks: passed.
- A local warm-cache mobile render recorded **CLS 0**. This is a lab sanity check,
  not a field Core Web Vitals measurement. Physical mid-range phones, real cellular
  networks, Safari/Firefox, and production LCP/INP have not been measured here.
- Reviewed against the installed web-design-guidelines skill and its
  [current source](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md).
  Native semantics, keyboard/focus behavior, meaningful alt text, image sizing,
  lazy loading, visible captions, contrast, motion, touch targets, safe areas,
  URL state and overflow checks pass. The click handlers on wrapper elements
  delegate activation of native image links; the wrappers are not interactive controls.

Browser scripts, screenshots and machine-readable results are in the ignored
`node_modules/.cache/school-life-review/` directory. All usable, nonduplicate
source photographs are represented in the completed album.
