import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and
 * adds the "visible" CSS class when the element enters the viewport.
 *
 * @param {object} options  IntersectionObserver options
 * @returns {React.RefObject}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
