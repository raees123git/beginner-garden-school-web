import { StudentActivitiesSection } from "@/components/home/student-activities-section";
import {
  AdmissionsCallout,
  GalleryPreview,
  Hero,
  LearningSection,
  PrincipalSection,
} from "@/components/home/home-sections";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <StudentActivitiesSection />
      <LearningSection />
      <PrincipalSection />
      <GalleryPreview />
      <AdmissionsCallout />
    </main>
  );
}
