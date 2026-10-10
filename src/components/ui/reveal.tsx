"use client";

import { useEffect, type ReactNode } from "react";
import { useAnimate, useInView, useReducedMotion } from "motion/react";

// Content is visible in server HTML and with JavaScript disabled.
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const visible = useInView(scope, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!visible || reducedMotion !== false) return;
    const animation = animate(scope.current, {
      opacity: [0.75, 1],
      transform: ["translateY(14px)", "translateY(0px)"],
    }, { duration: 0.65, ease: [0.22, 1, 0.36, 1] });
    return () => animation.stop();
  }, [visible, reducedMotion, animate, scope]);

  return <div ref={scope} className={className}>{children}</div>;
}
