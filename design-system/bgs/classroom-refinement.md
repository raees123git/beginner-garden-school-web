# Classroom photograph refinement

Source: public/images/class.jpeg (unchanged).
Output: public/images/class-refined.webp — 1586 × 992, approximately 225 KiB.

Created using the built-in image_gen editing tool. The right-side completion is AI-generated reconstruction, not recovered photographic information. The source remains available for comparison. The edit retains the original classroom composition and recognizable students, with a wider right margin and brighter exposure; generative editing can introduce subtle differences in existing details.

The website renders the entire derived composition using next/image with intrinsic dimensions, responsive sizes and lazy loading. No additional CSS crop or color filter is applied.

## Final editing prompt

Use case: identity-preserve.
Asset type: authentic classroom photograph, non-destructive website edit.
Input image 1 is the EDIT TARGET, not inspiration for a replacement.
Primary request: extend ONLY the RIGHT edge of this photograph by approximately 20% of its original width, completing the partially cropped students at the right edge. Preserve the entire original scene and original left/top/bottom framing. Output a wider landscape photograph, not a new scene.
Keep the existing children, their recognizable faces, expressions, ages, poses, clothing and headscarves unchanged. Keep the desk, books, wall, blue table, open door, floor, shoes and room geometry exactly as in the source. Do not add any additional students or new objects. Seamlessly continue the cropped rightmost boy's head and shoulder and the existing white/green headscarves and bodies into the new right margin, with plausible anatomy, natural fabric and consistent perspective; continue the existing wall/floor behind them. Leave some breathing space past these existing students.
Allow only modest global exposure/white-balance correction to make the dim photograph clearer, retaining natural texture and documentary authenticity. No beautification, facial reconstruction within existing image, dramatic lighting, artificial sharpness, glamorization, stylization, new furnishings, watermarks, labels or captions. Preserve source content as faithfully as possible. This is restrained right-edge outpainting, not regeneration of the original photograph.

## Verification

- ESLint, TypeScript (`tsc --noEmit`) and production build: passed.
- Headless Chrome screenshots reviewed at 1440, 900, 390 and 320 px. Full image aspect ratio retained; no horizontal overflow.
- Keyboard link focus visible; reduced motion disables reveal movement; normal reveal completes. No browser runtime exceptions observed.
- Web Interface Guidelines review: `src/components/home/learning-section.tsx` and `learning-section.module.css` pass applicable checks (image description, intrinsic dimensions, lazy loading, responsive layout, semantic headings, hidden decorative icons, visible keyboard focus and reduced motion).
- Original JPEG SHA-256 verified unchanged: `ef34e0f47a51949bfde12838e25278d3eec827b1d8f11ca69fa46da0caace975`.

## Lower-edge refinement

Current homepage asset: public/images/class-refined-full.webp. Created with the built-in image_gen tool from the approved class-refined.webp. The earlier derived asset and original class.jpeg are preserved. This version widens the foreground view to complete the existing students’ headscarves, shoulders, upper backs and table. The added areas are synthetic reconstruction; generated edits can introduce subtle differences in existing details. The entire image is displayed at its intrinsic aspect ratio without additional cropping.

### Lower-edge editing prompt

Use case: identity-preserve.
Input image 1 is the EDIT TARGET: the approved refined school classroom photograph.
Make one targeted edit: extend the canvas DOWNWARD by approximately 35–45% of the current height, completing the students and table cut off by the bottom edge. Preserve the full existing image and already completed right edge. Do not crop, zoom in, compress, change the camera angle, or replace the scene.
Continue the existing foreground child's white headscarf at bottom center/left, showing the complete back of her head, shoulders and upper back naturally as she faces the table. Continue the existing foreground student at lower right with her striped-edge headscarf, shoulders and upper back. Continue the existing boy's lower-left torso only as needed. Preserve their modest school uniforms, positions, poses, hands and reading activity. Show enough of each existing foreground student so their heads and shoulders are not sliced by the new bottom boundary; leave a little breathing room around the group. Continue the wooden table and existing illustrated books, patterned mat and floor with consistent geometry, texture and lighting.
Strict invariants: keep all already visible faces, expressions, clothing, children, room, blue desk, open door, books and composition as unchanged as possible. Preserve the current natural exposure and color. No added students, no invented face for the child seen only from behind, no rearranging, no beautification, no new furnishings, no stylization, no artificial sharpness, no labels or text overlays. This is conservative bottom-edge photographic outpainting, not a new classroom photograph.

Lower-edge verification: ESLint and TypeScript passed. Desktop (1440 px) and mobile (390 px) screenshots reviewed: full composition retained, no horizontal overflow or runtime exceptions. Relevant Web Interface Guidelines checks pass for the unchanged semantic image/frame implementation.
