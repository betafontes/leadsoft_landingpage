"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delayMs?: number;
};

export function ScrollReveal({ children, delayMs = 0 }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsReducedMotion(reducedMotion);

    let frameRequested = false;
    const revealWhenInView = () => {
      if (frameRequested) return;
      frameRequested = true;

      window.requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top <= window.innerHeight * 0.88 && bounds.bottom >= 0) {
          setIsVisible(true);
          window.removeEventListener("scroll", revealWhenInView);
          window.removeEventListener("resize", revealWhenInView);
        }
        frameRequested = false;
      });
    };

    revealWhenInView();
    window.addEventListener("scroll", revealWhenInView, { passive: true });
    window.addEventListener("resize", revealWhenInView);

    return () => {
      window.removeEventListener("scroll", revealWhenInView);
      window.removeEventListener("resize", revealWhenInView);
    };
  }, []);

  const style: CSSProperties = {
    transitionProperty: isReducedMotion ? "opacity" : "opacity, transform",
    transitionDuration: isReducedMotion ? "500ms" : "900ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: isVisible ? `${delayMs}ms` : "0ms",
  };

  return (
    <div
      className={`scroll-reveal ${isVisible ? "is-visible translate-y-0 scale-100 opacity-100" : `${isReducedMotion ? "translate-y-0 scale-100" : "translate-y-8 scale-[0.99]"} opacity-0`}`}
      ref={elementRef}
      style={style}
    >
      {children}
    </div>
  );
}