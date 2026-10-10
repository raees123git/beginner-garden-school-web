import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, HeartHandshake } from "lucide-react";
import classroom from "../../../public/images/class-refined-full.webp";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { learning } from "@/content/learning";
import styles from "./learning-section.module.css";

export function LearningSection() {
  return (
    <section className={styles.section} aria-labelledby="learning-heading">
      <Container className={styles.grid}>
        <Reveal className={styles.visual}>
          <figure className={styles.frame}>
            <div className={styles.viewport}>
              <Image src={classroom} alt="Students gathered around a table reading illustrated books together."
                sizes="(max-width: 767px) calc(100vw - 74px), (max-width: 1100px) 48vw, 630px"
                className={styles.photo} loading="lazy" />
            </div>
          </figure>
        </Reveal>

        <div className={styles.copy}>
          <h2 id="learning-heading">Room to learn.<br />Space to grow.</h2>
          <p className={styles.description}>{learning.description}</p>
          <ul className={styles.values}>
            {learning.values.map((value, index) => (
              <li className={styles.value} key={value.title}>
                {index === 0 ? <BookOpen size={25} strokeWidth={1.5} aria-hidden="true" /> : <HeartHandshake size={25} strokeWidth={1.5} aria-hidden="true" />}
                <div><h3>{value.title}</h3><p>{value.description}</p></div>
              </li>
            ))}
          </ul>
          <Link href="/school-life" className="text-link">Discover school life<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </Container>
    </section>
  );
}
