import type { PrincipalMessage } from "@/types/content";

export const school = {
  name: "Beginner Garden School & Academy",
  shortName: "BGS",
  motto: "Learn and Serve",
  purpose: "Helping make good-quality education accessible to everyone.",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/school-life", label: "School life" },
  { href: "/admissions-contact", label: "Admissions & contact" },
] as const;

// A separate, AI-edited presentation of the supplied principal.jpeg; never overwrite the source.
export const principalPortrait = {
  src: "/images/principal-portrait-wide.webp",
  width: 1122,
  height: 1402,
  alt: "An edited portrait of the principal seated at a wooden desk, wearing her navy embroidered shawl.",
  caption: "Portrait adapted with AI from a supplied photograph.",
} as const;

// Approved message supplied by the school. Her personal name has not been provided.
export const principalMessage: PrincipalMessage | null = {
  name: null,
  title: "Principal",
  paragraphs: [
    "At Beginner Garden School & Academy, we believe that every child deserves the opportunity to receive a quality education, regardless of their background or circumstances.",
    "Our vision goes beyond academic success. We aim to provide an environment where children are not only educated but also nurtured, guided, and encouraged to become confident, responsible, and compassionate individuals.",
    "We believe that every child has unique potential. As educators, our responsibility is to help them discover their abilities, develop strong values, and grow into individuals who can make a meaningful contribution to society.",
    'Guided by our motto, "Learn and Serve," we strive to make education a foundation for both personal growth and service to others.',
    "Our goal is simple: to give every child the opportunity to learn, grow, and build a brighter future.",
  ],
  attribution: "— Principal, Beginner Garden School & Academy",
  portrait: principalPortrait,
};
