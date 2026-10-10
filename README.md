# Beginner Garden School & Academy

A bright, welcoming school website built with Next.js App Router, TypeScript,
Tailwind CSS, Motion for React, and Lucide React.

## Development

- Run `npm run dev` and open http://localhost:3000.
- Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` to verify changes.
- Run `npm start` after a successful build to preview production behavior.

The project uses the installed Next.js 16 documentation in
`node_modules/next/dist/docs`. Read relevant guides before changing framework APIs.
Google Fonts are self-hosted by `next/font`; a first build requires network access
for font downloads. Visitors do not make Google Fonts requests.

## Current scope

The foundation and homepage are implemented. School life and Admissions & contact
are minimal navigable placeholders. A full gallery, inquiry form, contact actions,
and interactive uniform viewer are reserved for later approved phases.

The homepage includes the open-book hero, a student-activities photo carousel, learning introduction,
principal section, gallery preview, admissions invitation, and shared navigation/footer.
Abstract artwork is labeled as temporary. No school people, statistics, admissions
requirements, contact details, or uniform designs have been invented.

## Content and assets

- `src/content/school.ts`: identity, navigation, and the nullable principal message.
- `src/content/gallery.ts`: typed gallery photographs; publish only approved entries.
- `src/content/student-activities.ts`: the 14 supplied activity photographs and descriptive album captions.
- `src/content/uniforms.ts`: future uniform assets, with optional real GLB/GLTF URLs.
- `src/types/content.ts`: shared content contracts.
- `public/images/school-badge.jpeg`: unchanged official badge.
- `src/app/globals.css`: semantic palette, layout, type, spacing, and motion tokens.

Use real, school-approved copy and photographs. The principal section accepts her
name, title, paragraphs, and portrait together. Gallery entries require dimensions,
alt text, a caption, category, and publication approval. Obtain appropriate permission
before publishing identifiable children. The original badge must remain unchanged.

## Accessibility and interaction

The layout supports small phones, tablets, and desktops. Navigation uses native
links and a progressively enhanced disclosure menu, with active-page indication,
Escape dismissal, and focus handling. Content is visible without JavaScript. Motion
is limited to the hero and selected section reveals; reduced motion is respected.
The image preview uses Next.js image optimization and lazy loading below the fold.

Read `AGENTS.md` and `design-system/bgs/MASTER.md` for approved project guidance.
