import { useEffect } from "react";

/**
 * Observes all elements with a [data-reveal] attribute and adds the
 * "revealed" class when they scroll into view. Each element is observed
 * only once, so the entrance animation plays a single time.
 *
 * Stagger individual items by setting a --delay custom property:
 *   <div data-reveal style={{ "--delay": "0.2s" }}>
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;

    // Respect reduced-motion – reveal everything instantly.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

