import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import Cat from "./Cat";
import CatHouse from "./CatHouse";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <footer ref={footerRef} className="border-t border-border py-8 relative">
        <CatHouse />
        <Cat containerRef={footerRef} />
        <div className="content-wrapper flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>
            <span className="font-display font-bold text-foreground">ZC</span> ·
            © 2025 Zoren Corbillon
          </span>
          <span className="text-xs">
            Designed & built with precision in the Philippines
          </span>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shadow-lg transition-all duration-200 ${
          showTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
