export type SchoolLifeCategory = "learning" | "play" | "celebrations" | "together";

export type SchoolLifePhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: SchoolLifeCategory;
};
