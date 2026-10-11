import { school } from "./school";

// Official contact details supplied by the school. Additional admissions facts
// (fees, deadlines, classes, requirements, and hours) are not yet confirmed.
export const schoolContact = {
  schoolName: school.name,
  phone: "0341 5270537",
  internationalPhone: "+923415270537",
  email: "naseemakhter445@gmail.com",
  address: "Beginner Garden School, St#6, Lakhan Mor, Girja Road, Rawalpindi, Punjab, Pakistan",
} as const;

export const contactLinks = {
  phone: `tel:${schoolContact.internationalPhone}`,
  email: `mailto:${schoolContact.email}`,
  // An address search, without unverified coordinates or a claimed entrance pin.
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolContact.address)}`,
} as const;

export const admissionsIntroduction = {
  heading: "A Brighter Future Begins Here.",
  description: `Every child deserves the opportunity to learn, grow, and build a brighter future. At ${school.name}, we believe quality education should be within everyone’s reach.`,
  nextStepHeading: "Taking the First Step",
  nextStepDescription: `We welcome parents and guardians who would like to learn more about ${school.name}. Contact our school to inquire about admissions, available classes, and enrollment requirements.`,
} as const;
