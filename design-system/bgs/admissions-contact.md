# Admissions & Contact

## Direction

Use the approved BGS identity: blue `#0077a8`, green `#1c6548`, ink
`#123b56`, paper `#f7fbfc`, and leaf `#a4ce39`. Bricolage Grotesque
carries the expressive headings; Source Sans 3 keeps the body and actions readable.

The hero pairs a welcoming headline with an original, decorative open-book SVG
and the real school motto. On phones, the illustration becomes a compact horizontal
composition, keeping the contact actions ahead of it. Content remains left aligned;
the desktop book composition is centered. The contact section emphasizes calling,
with email and visiting in a complementary stack. The location section presents the
real address as a simple wayfinding panel.

```text
Phone                         Desktop
Headline + introduction       Headline + introduction | Book + motto
Contact CTA / Call / Email     Contact CTA / Call / Email
Small book + motto            Taking the First Step   | Introduction
Taking the First Step         Call Us                 | Email Us
Introduction                  Call Now                | Visit Our School
Call / Email / Visit           Find Us in Rawalpindi   | Address + Maps
Location + Maps
```

The UI/UX search suggested a generic blue/orange Swiss layout and different fonts.
The established school palette and fonts take precedence. The school-specific book
composition and varied contact hierarchy replace that generic direction. One existing
Motion reveal introduces the contact group; content stays visible in server HTML.

## Content and links

- Official information lives in `src/content/admissions-contact.ts`.
- Phone: `tel:+923415270537`; displayed as `0341 5270537`.
- Email: `mailto:naseemakhter445@gmail.com`.
- Address: Beginner Garden School, St#6, Lakhan Mor, Girja Road, Rawalpindi, Punjab, Pakistan.
- Maps uses an encoded address search, including the encoded `#` in `St#6`, following
  [Google's universal Maps URL syntax](https://developers.google.com/maps/documentation/urls/guide#search).
- No map coordinates, exact entrance marker, WhatsApp action, form, fees, deadlines,
  grades, hours, requirements, or admission availability have been assumed.
- The page is a static Server Component. Existing Motion supplies the only client
  boundary added to its content. No dependency or third-party embed was added.

## Verification

- ESLint, `tsc --noEmit`, production build, and `git diff --check`: pass.
- Chrome production-page inspection: 320, 375, 390, 430, 768, and 1440 CSS pixels.
  All page actions are at least 44 pixels high; no horizontal overflow at these widths.
- Additional checks: 844 × 390 landscape and reflow at 720 CSS pixels.
- Keyboard: skip link, contact anchor, subsequent contact actions, and visible focus pass.
- Reduced motion: native scrolling becomes immediate; contact reveal is disabled.
- JavaScript disabled: all content and seven contact/navigation actions remain available.
- Phone/email hrefs and full Google Maps query verified in the rendered DOM.
- Text contrast reviewed, including hover on tinted cards. Darker blue hover exceeds
  6:1 on both sky and mint. White focus outline is visible on the green call card.
- No runtime exceptions observed. Source hashes confirm existing homepage, School Life,
  shared components, content, styles, and school badge were preserved.

Web Interface Guidelines review, after fixes:

```text
src/app/admissions-contact/page.tsx:1 - pass
src/app/admissions-contact/admissions-contact.module.css:1 - pass
src/content/admissions-contact.ts:1 - pass
```

Phone/email destinations were inspected without placing a call or sending email.
The Maps link searches the supplied address; the exact entrance and Google's search
results were not independently verified. Browser checks used Chrome emulation,
rather than physical Android/iOS devices. Additional admissions details remain
unconfirmed and can be added after the school supplies them.
