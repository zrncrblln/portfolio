import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".scroll-reveal");
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add("revealed");
              }, i * 80);
            });
            // Also reveal the container itself if it has the class
            if (entry.target.classList.contains("scroll-reveal")) {
              entry.target.classList.add("revealed");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const activeId = useRef<string>("");

  const getActiveId = useCallback(() => activeId.current, []);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;

      // Use the offset point from the top of the viewport as reference
      const referencePoint = scrollY + offset;

      let current = "";

      // Find the LAST section whose top is above the reference point
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;

          // Check if we've scrolled past this section's top
          if (sectionTop <= referencePoint) {
            current = id;
          }
        }
      }

      // Fallback: if no section is found, use the first one
      if (!current && sectionIds.length > 0) {
        current = sectionIds[0];
      }

      activeId.current = current;
      // Dispatch custom event for nav to listen
      window.dispatchEvent(new CustomEvent("scrollspy", { detail: current }));
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return getActiveId;
}
