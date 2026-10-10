import { BadgeMotion } from "./hero-badge-motion";
import styles from "./hero-badge.module.css";

// Hero-only artwork. The official JPEG remains the navbar and footer identity.
export function HeroBadge() {
  return (
    <figure className={styles.figure}>
      <BadgeMotion>
        <svg className={styles.artwork} viewBox="0 0 640 620" width="640" height="620"
          role="img" aria-labelledby="bgs-hero-badge-title bgs-hero-badge-description" focusable="false">
          <title id="bgs-hero-badge-title">Beginner Garden School &amp; Academy — Learn and Serve</title>
          <desc id="bgs-hero-badge-description">A modern interpretation of the school badge: a blue circular seal, BGS initials, a two-tone green open book, and a folded motto ribbon.</desc>
          <defs>
            <path id="bgs-hero-name-arc" d="M135 351 A196 196 0 1 1 505 351" />
            <linearGradient id="bgs-hero-paper" x1="230" y1="170" x2="410" y2="430" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--white)" />
              <stop offset="1" stopColor="var(--paper)" />
            </linearGradient>
            <filter id="bgs-hero-shadow" x="-30%" y="-100%" width="160%" height="300%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          {/* A quiet cast shadow and a slim, tangible edge, rather than a mockup. */}
          <ellipse cx="326" cy="559" rx="174" ry="13" fill="var(--ink)" opacity="0.1" filter="url(#bgs-hero-shadow)" />
          <circle cx="327" cy="299" r="232" fill="var(--blue-hover)" />
          <circle cx="320" cy="286" r="232" fill="var(--blue)" />
          <circle cx="320" cy="286" r="224" stroke="var(--white)" strokeOpacity="0.35" strokeWidth="1" fill="none" />

          {/* The full name follows the original seal's circular construction. */}
          <text className={styles.schoolName} fill="var(--white)" textAnchor="middle">
            <textPath href="#bgs-hero-name-arc" startOffset="50%">Beginner Garden School &amp; Academy</textPath>
          </text>

          <circle cx="320" cy="290" r="166" fill="var(--blue-hover)" />
          <circle cx="320" cy="283" r="166" fill="url(#bgs-hero-paper)" />
          <circle cx="320" cy="283" r="154" stroke="var(--border)" strokeWidth="1" fill="none" />
          <text x="320" y="197" textAnchor="middle" className={styles.initials} fill="var(--green)">BGS</text>

          {/* The distinctive V-shaped book retains its dark-left / leaf-right identity. */}
          <path d="M211 235 L320 298 L429 235 V364 L320 435 L211 364Z" fill="var(--green-hover)" />
          <path d="M211 225 L320 288 L429 225 V353 L320 424 L211 353Z" fill="var(--green)" />
          <path d="M218 217 L320 277 L422 217 V344 L320 409 L218 344Z" fill="var(--white)" stroke="var(--border)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M225 209 L320 266 L415 209 V336 L320 397 L225 336Z" fill="var(--paper)" stroke="var(--border)" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M232 201 L320 254 V383 L232 327Z" fill="var(--green)" />
          <path d="M320 254 L408 201 V327 L320 383Z" fill="var(--leaf)" />
          <path d="M320 254 V383" stroke="var(--green-hover)" strokeWidth="2" />
          <path d="M240 218 L307 258 M240 229 L307 269" stroke="var(--white)" strokeOpacity="0.28" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M333 260 L398 221 M333 271 L398 232" stroke="var(--green)" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />

          {/* A folded ribbon brings the motto forward, just as on the original. */}
          <path d="M144 420 L89 433 L107 462 L96 493 L161 481Z" fill="var(--green)" />
          <path d="M496 420 L551 433 L533 462 L544 493 L479 481Z" fill="var(--green)" />
          <path d="M144 420 L163 442 L161 481 L144 464Z M496 420 L477 442 L479 481 L496 464Z" fill="var(--green-hover)" />
          <path d="M144 420 Q320 477 496 420 V472 Q320 531 144 472Z" fill="var(--green-hover)" />
          <path d="M144 413 Q320 470 496 413 V465 Q320 524 144 465Z" fill="var(--white)" />
          <path d="M155 425 Q320 478 485 425 M155 455 Q320 508 485 455" stroke="var(--border)" strokeWidth="1" fill="none" />
          <path id="bgs-hero-motto-arc" d="M162 450 Q320 501 478 450" fill="none" />
          <text className={styles.motto} fill="var(--green)" textAnchor="middle">
            <textPath href="#bgs-hero-motto-arc" startOffset="50%">Learn and Serve</textPath>
          </text>
        </svg>
      </BadgeMotion>
    </figure>
  );
}
