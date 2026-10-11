import manifest from "./school-life-manifest.json";
import type { SchoolLifeCategory, SchoolLifePhoto } from "@/types/school-life";

export const schoolLifeIntroduction =
  "Every school day brings opportunities to learn, discover, create, and grow. Explore the moments and experiences that make life at Beginner Garden School & Academy special.";

export const schoolLifeCategories = [
  { id: "all", label: "All moments" },
  { id: "learning", label: "Learning & creating" },
  { id: "play", label: "Play & movement" },
  { id: "celebrations", label: "Celebrations" },
  { id: "together", label: "Together at BGS" },
] as const;

// A deliberate sequence of featured landscapes and complementary portrait pairs.
const order = [5, 2, 11, 6, 7, 10, 14, 17, 20, 9, 26, 8, 15, 22, 25, 23, 27, 28, 32, 30, 1, 3, 4, 18, 24, 12, 13, 16, 19, 21, 33, 31, 34, 39, 36, 38, 35, 37, 29];

// Keep original names, processing settings, and review notes out of client props.
export const schoolLifePhotos: readonly SchoolLifePhoto[] = order.map(position => {
  const { id, src, width, height, alt, caption, category } = manifest[position - 1];
  return { id, src, width, height, alt, caption, category: category as SchoolLifeCategory };
});

export const featuredSchoolLifePhotos = new Set([
  "little-hands-big-discoveries", "learning-around-the-desks", "celebration-group-trophies",
  "a-turn-on-the-slide", "certificates-in-the-courtyard", "our-school-community", "a-row-of-green-and-white",
]);
