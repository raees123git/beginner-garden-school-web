import type { SchoolPhoto } from "@/types/content";

// Supplied and explicitly selected for homepage publication by the school.
export const galleryIntroduction =
  "A little glimpse into the moments, experiences, and memories that make our school special.";

export const schoolPhotos: readonly SchoolPhoto[] = [
  {
    id: "school-celebration",
    src: "/images/glimpse-optimized/school-celebration.webp",
    width: 1280,
    height: 960,
    alt: "Children gathered in front of a Beginner Garden School banner, holding colorful trophies and wearing paper crowns.",
    caption: "School celebrations",
    category: "Celebrations",
    approvedForPublication: true,
  },
  {
    id: "outdoor-exercise",
    src: "/images/glimpse-optimized/outdoor-exercise.webp",
    width: 960,
    height: 1280,
    alt: "Students in school uniform standing together in the courtyard with their arms raised overhead during a group exercise.",
    caption: "Moving together",
    category: "Activities",
    approvedForPublication: true,
  },
  {
    id: "students-together",
    src: "/images/glimpse-optimized/students-together.webp",
    width: 1280,
    height: 720,
    alt: "A group of younger and older students in school uniform posing in front of a green wall, with some wearing red sashes.",
    caption: "Together at BGS",
    category: "Activities",
    approvedForPublication: true,
  },
];
