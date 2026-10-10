<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


## Beginner Garden School & Academy

### Scope and identity
- Maintain exactly three main pages: Home (/), School life (/school-life), and Admissions & contact (/admissions-contact).
- Current approved implementation scope: foundation and complete homepage. Keep the other two pages as minimal navigable placeholders until the user approves further work.
- Official name: Beginner Garden School & Academy. Abbreviation: BGS. Motto: Learn and Serve.
- Purpose: helping make good-quality education accessible to everyone.
- Preserve public/images/school-badge.jpeg unchanged. Display the entire badge at its intrinsic aspect ratio, without filters, cropping, or recoloring.

### Design and content
- Follow the approved bright, welcoming, open-book visual direction. Blue and green lead; red is selective.
- Keep semantic design tokens in src/app/globals.css and approved school content in src/content. Use Bricolage Grotesque for headings and Source Sans 3 for body copy.
- Give the hero the strongest composition. Vary section layouts rather than repeating identical cards.
- Never invent school statistics, awards, facilities, programs, testimonials, people, principal messages, uniforms, admissions requirements, or contact details.
- Label missing content and temporary artwork clearly. Use authentic photography cleared for publication, including appropriate permission for identifiable children.
- Principal content must use her real, approved name, words, and portrait. Missing content remains absent in the typed data.

### Architecture and accessibility
- Prefer Server Components. Keep client boundaries limited to actual interaction and purposeful motion.
- Read the installed Next.js documentation before framework-specific changes. Avoid deprecated APIs.
- Use next/font and next/image, intrinsic dimensions, appropriate alt text, responsive sizes, and lazy loading below the fold.
- Keep navigation and content usable without JavaScript. Use semantic links and buttons, visible focus, a skip link, and accessible contrast.
- Support mobile, tablet, desktop, keyboard navigation, browser zoom, and reduced-motion preferences. Never hide essential content behind animation.
- Keep motion restrained. Avoid autoplay, continuous decorative motion, scroll hijacking, and layout-shifting hover effects.
- Do not add a CMS, database, or dependency without a concrete requirement.

### Future features
- Full School life content, gallery filters/lightbox, full Admissions & contact content, and interactive 3D uniforms require further user approval.
- Uniform models must represent actual approved garments. A photograph is not a 3D model. Later, evaluate model-viewer and lazy-load its runtime and real GLB/GLTF assets only on activation.
- Do not render an inquiry form until a real submission destination, validation, error handling, and delivery are configured.
- Render phone, WhatsApp, directions, and social actions only when official details are supplied.

### Verification
- Run ESLint, TypeScript checks, and a production build before delivery.
- Visually inspect mobile and desktop when browser tools are available; also check tablet widths, keyboard navigation, reduced motion, and horizontal overflow.
- Review UI changes against the installed web-design-guidelines skill and fix applicable findings.
- Preserve existing user work and useful repository instructions.
