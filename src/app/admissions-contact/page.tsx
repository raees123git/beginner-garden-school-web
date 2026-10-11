import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { admissionsIntroduction, contactLinks, schoolContact } from "@/content/admissions-contact";
import { school } from "@/content/school";
import styles from "./admissions-contact.module.css";

export const metadata: Metadata = {
  title: "Admissions & Contact",
  description: `Contact ${school.name} in Rawalpindi to inquire about admissions. Call ${schoolContact.phone}, email the school, or find directions.`,
};

export default function AdmissionsContactPage() {
  const [emailName, emailDomain] = schoolContact.email.split("@");

  return (
    <main id="main-content" tabIndex={-1} className={styles.page}>
      <section aria-labelledby="admissions-heading" className={styles.hero}>
        <Container className="grid items-center gap-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:gap-9 md:py-16 lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <p className="mb-5! flex items-center gap-3 text-base font-semibold text-(--green)">
              <span className="h-px w-7 bg-(--green)" aria-hidden="true" />Admissions & contact
            </p>
            <h1 id="admissions-heading" className={styles.headline}>{admissionsIntroduction.heading}</h1>
            <p className="mt-6! max-w-xl text-lg leading-relaxed text-(--muted) lg:text-xl">{admissionsIntroduction.description}</p>
            <a href="#contact" className="action-link action-link--primary mt-7">Contact Our School<ArrowDown size={18} aria-hidden="true" /></a>
            <nav aria-label="Quick contact" className="mt-5 flex flex-wrap gap-x-7 gap-y-1">
              <a href={contactLinks.phone} className="text-link"><Phone size={17} aria-hidden="true" />Call Us</a>
              <a href={contactLinks.email} className="text-link"><Mail size={18} aria-hidden="true" />Email Us</a>
            </nav>
          </div>
          <div className={styles.bookComposition}>
            <svg viewBox="0 0 400 310" fill="none" className={styles.bookArt} aria-hidden="true">
              <circle cx="207" cy="109" r="67" fill="var(--leaf)" />
              <path d="M207 18V5M275 45l10-10M302 111h14M139 45l-10-10M111 111H97" stroke="var(--green)" strokeWidth="3" strokeLinecap="round" />
              <path d="M47 146c56-20 105-10 153 20v116c-48-30-97-40-153-20V146Z" fill="var(--blue)" />
              <path d="M353 146c-56-20-105-10-153 20v116c48-30 97-40 153-20V146Z" fill="var(--green)" />
              <path d="M58 132c53-18 98-9 142 20v115c-44-29-89-38-142-20V132Z" fill="var(--white)" stroke="var(--blue)" strokeWidth="2" />
              <path d="M342 132c-53-18-98-9-142 20v115c44-29 89-38 142-20V132Z" fill="var(--mint)" stroke="var(--green)" strokeWidth="2" />
              <path d="M83 163c33-6 61-1 89 13M83 187c33-6 61-1 89 13M83 211c23-4 43-3 63 3" stroke="var(--sky-bright)" strokeWidth="5" strokeLinecap="round" />
              <path d="M228 176c28-14 56-19 89-13M228 200c28-14 56-19 89-13M228 224c20-10 40-15 63-15" stroke="var(--leaf)" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className={styles.bookCaption}>
              <p className="font-(family-name:--font-display) text-[27px] font-semibold leading-tight tracking-tight text-(--green)">{school.motto}</p>
              <p className="mt-2! max-w-64 text-base leading-snug text-(--muted)">{school.purpose}</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" tabIndex={-1} aria-labelledby="first-step-heading" className={styles.contact}>
        <Container>
          <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <h2 id="first-step-heading" className="max-w-80">{admissionsIntroduction.nextStepHeading}</h2>
            <p className="max-w-2xl text-lg leading-relaxed text-(--muted)">{admissionsIntroduction.nextStepDescription}</p>
          </div>

          <Reveal className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
            <article className={styles.callCard}>
              <div className="flex items-center gap-3">
                <span className={styles.callIcon}><Phone size={23} aria-hidden="true" /></span>
                <h3 className="text-[23px]!">Call Us</h3>
              </div>
              <div className="my-8 md:my-12">
                <p className={styles.phoneNumber} translate="no">{schoolContact.phone}</p>
                <p className="mt-4! max-w-80 text-lg leading-relaxed">A conversation is a good place to begin. Ask us about taking the next step at BGS.</p>
              </div>
              <a href={contactLinks.phone} className={`action-link action-link--light ${styles.callAction}`}>Call Now<Phone size={18} aria-hidden="true" /></a>
            </article>

            <div className="grid min-w-0 gap-4 md:gap-6">
              <article className={styles.emailCard}>
                <div className="flex items-center gap-3"><Mail size={23} className="text-(--blue)" aria-hidden="true" /><h3 className="text-[23px]!">Email Us</h3></div>
                <p className={styles.emailAddress} translate="no">{emailName}<wbr />@{emailDomain}</p>
                <a href={contactLinks.email} className="text-link mt-3">Send Email<ArrowUpRight size={18} aria-hidden="true" /></a>
              </article>
              <article className={styles.visitCard}>
                <div className="flex items-center gap-3 text-(--green)"><MapPin size={23} aria-hidden="true" /><h3 className="text-[23px]!">Visit Our School</h3></div>
                <address className="mt-4 max-w-md text-lg leading-relaxed not-italic text-(--muted)">{schoolContact.address}</address>
                <a href={contactLinks.maps} className="text-link mt-3">Get Directions<ArrowUpRight size={18} aria-hidden="true" /></a>
              </article>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="location-heading" className={styles.location}>
        <Container>
          <div className="grid gap-8 border-t border-(--border) py-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-16">
            <div>
              <h2 id="location-heading" className="max-w-96">Find Us in Rawalpindi</h2>
              <p className="mt-5! max-w-sm text-lg text-(--muted)">Planning a visit? Call our school to discuss your visit before setting out.</p>
            </div>
            <div className={styles.addressPanel}>
              <MapPin size={29} strokeWidth={1.6} className="mb-5 text-(--blue)" aria-hidden="true" />
              <p className="font-(family-name:--font-display) text-[24px] font-semibold leading-tight tracking-tight" translate="no">{schoolContact.schoolName}</p>
              <address className="mt-4 max-w-md text-lg leading-relaxed not-italic text-(--muted)">{schoolContact.address}</address>
              <a href={contactLinks.maps} className="action-link action-link--secondary mt-6">Open in Google Maps<ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
