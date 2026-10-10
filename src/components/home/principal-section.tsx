import Image from "next/image";
import { Fragment } from "react";
import { BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { principalMessage, principalPortrait, school } from "@/content/school";
import styles from "./principal-section.module.css";

export function PrincipalSection() {
  const message = principalMessage;
  const portrait = message?.portrait ?? principalPortrait;

  return (
    <section className={styles.section} aria-labelledby="principal-heading">
      <Container>
        <Reveal className={styles.grid}>
          <figure className={styles.portrait}>
            <div className={styles.mount}>
              <Image src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height}
                sizes="(max-width: 480px) calc(100vw - 66px), (max-width: 767px) 434px, (max-width: 1100px) 42vw, 434px"
                className={styles.photo} loading="lazy" />
              <div className={styles.portraitFooter}>
                <span className={styles.identity}>{message?.name ?? "The Principal"}{message?.name && <span>{message.title}</span>}</span>
                <span className={styles.motto}><BookOpen size={19} strokeWidth={1.5} aria-hidden="true" />{school.motto}</span>
              </div>
            </div>
          </figure>

          <div className={styles.copy}>
            <h2 id="principal-heading">Message from<br />the Principal</h2>
            {message ? (
              <>
                <div className={styles.message}>
                  {message.paragraphs.map((paragraph, index) => index === message.paragraphs.length - 1 ? (
                    <p key={index} className={styles.closing}><strong>{paragraph}</strong></p>
                  ) : (
                    <p key={index}>{paragraph.split(school.motto).map((part, partIndex) => (
                      <Fragment key={partIndex}>
                        {partIndex > 0 && <strong className={styles.mottoHighlight}>{school.motto}</strong>}{part}
                      </Fragment>
                    ))}</p>
                  ))}
                </div>
                <p className={styles.signature}>{message.attribution}</p>
              </>
            ) : (
              <>
                <p className={styles.introduction}>A personal welcome to our school community.</p>
                <div className={styles.pending}>
                  <span className={styles.pageFold} aria-hidden="true" />
                  <h3>Principal’s message to follow</h3>
                  <p>Her welcome to parents and students will appear here once the school provides her final message.</p>
                  <p className={styles.pendingNote}>Her name will be added with the approved message.</p>
                </div>
                <p className={styles.schoolName} translate="no">{school.name}</p>
              </>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
