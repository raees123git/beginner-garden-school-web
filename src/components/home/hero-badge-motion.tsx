"use client";

import { useEffect, type ReactNode } from "react";
import { domAnimation, LazyMotion, useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import styles from "./hero-badge.module.css";

export function BadgeMotion({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion !== false) return;
    const entrance = animate(scope.current, {
      opacity: [0.75, 1],
      transform: ["translateY(16px) rotate(3deg)", "translateY(0px) rotate(0deg)"],
    }, { duration: 0.85, ease: [0.22, 1, 0.36, 1] });
    return () => entrance.stop();
  }, [animate, reducedMotion, scope]);

  // Keep the vector server-rendered and visible without JavaScript; animate its wrappers.
  return (
    <div ref={scope} className={styles.entrance}>
      <LazyMotion features={domAnimation} strict>
        <m.div className={styles.surface} initial={false}
          whileHover={reducedMotion === false ? { y: -5, rotate: -1.5 } : undefined}
          transition={{ type: "spring", stiffness: 160, damping: 24 }}>
          {children}
        </m.div>
      </LazyMotion>
    </div>
  );
}
