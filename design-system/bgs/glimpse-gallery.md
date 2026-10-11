# A glimpse of BGS

## Direction

An editorial school album: one large celebration photograph on the left, a smaller
upright activity photograph at the upper right, and a landscape group portrait
below it. White photograph mounts, soft depth, and a pale blue page shape connect
the composition to the approved bright, welcoming, open-book direction. The hero
remains unchanged. Captions sit outside the photographs and remain visible on touch.

```text
Heading + introduction                       Explore school life
                                                [ exercise ]
  [                                      ]      [ portrait ]
  [       celebration photograph         ]
  [                                      ]   [ student group ]
```

On mobile, all three photographs form a single column with alternating widths.
The design deliberately uses the original image proportions rather than forcing
students into matching card crops. One existing Reveal animates the album as a
whole; the server HTML is visible before JavaScript. Fine-pointer hover adds a
1.5% image scale and a 2.5% tint, disabled for reduced motion. No essential information
depends on hover, animation, or JavaScript.

Existing palette: blue #0077A8, green #1C6548, ink #123B56, paper #F7FBFC,
sky #DFF2F8, and white #FFFFFF. Existing Bricolage Grotesque headings and
Source Sans 3 body/captions are retained. The new photograph shadow is a semantic
token in globals.css; gallery styles are scoped in a CSS Module.

## Photo review

All five originals in `public/glimpse-bgs-section-images/` were visually inspected.
The following names share the prefix `WhatsApp Image 2026-10-11 at `:

| Original suffix | Decision | Reason |
| --- | --- | --- |
| `22.40.05.jpeg` | Primary: School celebrations | Warm, colorful participation, trophies, and paper crowns; the banner gives clear school context. Shadows benefit from mild brightening. No event name or award claim is inferred. |
| `22.39.59.jpeg` | Supporting: Moving together | A distinct upright composition showing coordinated outdoor exercise. Preserves the raised hands, faces, and courtyard context. The bright upper background needs restraint. |
| `22.39.19.jpeg` | Supporting: Together at BGS | The clearest, most balanced group portrait, with younger and older students. Complements the two activity photographs. EXIF orientation 8 is baked into the landscape output. |
| `22.37.24.jpeg` | Not selected | A lively balloon game, but soft detail, uneven exposure, and a bright flare at the left reduce presentation quality. |
| `22.37.40.jpeg` | Not selected | A second balloon-game scene with substantial glare, blown foreground highlights, and several students in deep shadow. Less complementary than the chosen three. |

Normalized 32 × 32 grayscale comparisons against the existing student-activities
photographs found no duplicate of the selected images. The hero uses the badge;
the principal portrait is separate.

## Enhancement and assets

`node scripts/optimize-glimpse.mjs` reproduces the separate WebP outputs using
the Sharp package already supplied by Next.js. The script verifies the source
SHA-256 before and after processing. Original photographs and the badge are untouched.

| Output in `public/images/glimpse-optimized/` | Dimensions | Bytes | Brightness | Gamma | Contrast |
| --- | --- | ---: | ---: | ---: | ---: |
| `school-celebration.webp` | 1280 × 960 | 200528 | 1.07 | 1.06 | 1.025 |
| `outdoor-exercise.webp` | 960 × 1280 | 239782 | 1.025 | 1.02 | 1.02 |
| `students-together.webp` | 1280 × 720 | 160074 | 1.025 | 1.02 | 1.025 |

All outputs use restrained sharpening (sigma 0.5, m1 0.3, m2 0.6), unchanged
saturation, sRGB output, and WebP quality 80 / effort 6. No enlargement or
destructive cropping is used. Next.js Image supplies responsive variants and
native lazy loading, with width/height reserving layout space.

No generative enhancement, face modification, object replacement, artificial detail,
or smoothing was applied. Noise reduction was intentionally omitted to preserve
the available facial detail. Existing blur, compression, clipped highlights, and
subjects already cut by the original camera framing cannot be restored by these
adjustments. The full original framing is retained at rest; only the requested
very small hover scale temporarily trims the outer edges.

## Implementation files

- `src/components/home/gallery-preview.tsx` — new Server Component using the
  existing Reveal boundary, semantic figures, descriptive alt text, and native link.
- `src/components/home/gallery-preview.module.css` — isolated responsive composition.
- `src/content/gallery.ts` — selected photos, accurate captions, required introduction.
- `src/components/home/home-sections.tsx` — replaces the old inline gallery with its export.
- `src/app/globals.css` — new shadow token and removal of obsolete gallery-only styles.
- `scripts/optimize-glimpse.mjs` — reproducible, nondestructive image processing.
- Three WebP assets listed above, plus this review record.

No dependencies, routes, forms, gallery interactions, or other homepage sections
were added or changed.

## Verification

- `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `npm.cmd run build`: passed.
- Production browser checks at 320, 390, 640, 768, 1024, and 1440 CSS pixels:
  all three photographs load; intrinsic aspect ratios are retained; captions are
  visible; no page horizontal overflow or placeholder copy is present.
- Desktop (1440), tablet (768), and mobile (390) screenshots visually inspected:
  balanced framing, readable captions, and no additional face crops at rest.
- Keyboard Tab reaches Explore school life with a visible focus outline; Enter
  navigates to `/school-life`.
- Reduced motion: no active gallery animations and no image hover transform.
- Touch emulation at 390 CSS pixels: all captions visible, no hover dependency,
  and no horizontal overflow. Fine-pointer hover scales to 1.015; reduced motion
  returns the transform to none.
- A 720 CSS pixel / 2× scale viewport (the layout equivalent of 200% zoom on a
  1440-pixel desktop) fits without overflow. Native browser zoom was not separately driven.
- JavaScript disabled: photos, captions, and navigation remain visible and usable.
- No runtime exceptions observed.
- Reviewed against the installed web-design-guidelines skill and its
  [current guideline source](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md):
  semantic content, alt descriptions, image dimensions/lazy loading, keyboard focus,
  motion preferences, native navigation, and responsive overflow checks pass.

Browser review artifacts are kept in the ignored
`node_modules/.cache/glimpse-review/` directory.
