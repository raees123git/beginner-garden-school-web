export type SchoolPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: "Activities" | "Events" | "Classrooms" | "Celebrations";
  approvedForPublication: boolean;
};

export type PrincipalMessage = {
  name: string | null;
  title: string;
  paragraphs: readonly string[];
  attribution: string;
  portrait: { src: string; width: number; height: number; alt: string };
};

// The optional model is data only. No 3D runtime is loaded in this phase.
export type UniformAsset = {
  id: string;
  name: string;
  description: string;
  poster: { src: string; width: number; height: number; alt: string };
  modelSrc?: string;
};
