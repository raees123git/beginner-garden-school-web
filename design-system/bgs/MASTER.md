# BGS approved design system

Approved direction: bright and welcoming, with a distinctive open-book hero inspired
by the school badge. This document records the user-approved direction, rather than
the generic palette returned by the UI/UX search tool.

## Identity

Beginner Garden School & Academy. BGS. Learn and Serve.
Purpose: helping make good-quality education accessible to everyone.
Preserve the original badge unchanged and show it at its intrinsic aspect ratio.

## Palette

- School blue: #0077A8
- Deep blue/ink: #123B56
- School green: #1C6548
- Leaf green: #A4CE39 (decorative fills with dark text)
- School red: #C62F32 (selective accents)
- Paper: #F7FBFC, with white as the principal canvas

Semantic surface, text, border, and hover tokens live in src/app/globals.css.
Normal text must meet 4.5:1 contrast; controls and focus indicators must be discernible.

## Typography and layout

Bricolage Grotesque headings; Source Sans 3 body, navigation, and captions.
Self-host through next/font. Fluid display type, sentence case, and short reading measures.
Use the 4/8/12/16/24/32/48/64/96 spacing scale and responsive page gutters.
Main content is capped at 1240px. Controls use 12px radii; images 24px; feature panels 32px.

The hero holds the boldest visual moment. Alternate editorial spreads, abstract/photo
frames, and a prominent principal section rather than a series of uniform cards.
Clearly label artwork and pending content. Replace them only with authentic assets.

## Motion and accessibility

Use opacity and transforms, with restrained 200ms interaction transitions and brief
hero/section entrances. Content is visible before hydration and without JavaScript.
Respect prefers-reduced-motion. No looping animation, autoplay, or scroll hijacking.
Use 44px targets, native semantics, keyboard-visible focus, and a skip link.

## Scope

Exactly three main routes: /, /school-life, /admissions-contact.
Only foundation and homepage are currently approved for full implementation.
The other routes remain minimal placeholders until further approval.
