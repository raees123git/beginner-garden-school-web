import styles from "./student-carousel.module.css";
import { Container } from "@/components/ui/container";
import { studentActivityPhotos } from "@/content/student-activities";
import { StudentCarousel } from "./student-carousel";

export function StudentActivitiesSection() {
  return (
    <section
      id="student-activities"
      className={`${styles["student-activities"]} section`}
      aria-labelledby="activities-heading"
    >
      <Container>
        <div className={styles["activities-heading"]}>
          <div>
            <p className={styles["activities-intro"]}><span aria-hidden="true" />The BGS photo album</p>
            <h2 id="activities-heading">Small moments.<br />Big discoveries.</h2>
          </div>
          <p className={styles["activities-description"]}>
            A window into student life at Beginner Garden.
            Browse the faces, creations and moments in our school album.
          </p>
        </div>
        <StudentCarousel photos={studentActivityPhotos} />
      </Container>
    </section>
  );
}
