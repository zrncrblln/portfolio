import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Work", href: "work" },
  { label: "Contact", href: "contact" },
];

// Smooth scroll function
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isMobile = useIsMobile();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (!isMobile && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isMobile, mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      setActiveSection((e as CustomEvent).detail);
    };
    window.addEventListener("scrollspy", handler);
    return () => window.removeEventListener("scrollspy", handler);
  }, []);

  return (
    <nav className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] sm:w-[95%] max-w-4xl">
      <div
        className={`overflow-hidden rounded-full transition-all duration-200 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.25),0_8px_48px_rgba(0,0,0,0.15)]"
            : "bg-background shadow-[0_4px_20px_rgba(0,0,0,0.15),0_8px_40px_rgba(0,0,0,0.1)]"
        }`}
      >
        <div className="flex items-center gap-1 border border-border px-3 sm:px-4 py-2">
          {/* Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-foreground text-background font-display text-sm font-bold shrink-0"
          >
            ZC
          </a>

          {/* Desktop Links - Centered with flex-1 */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-2 py-1.5 text-sm font-body transition-all duration-200 rounded-lg hover:bg-secondary/50 ${
                  activeSection === link.href
                    ? "text-accent font-medium"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Tablet Links - Visible on md but hidden on lg */}
          <div className="hidden md:flex lg:hidden flex-1 items-center justify-center gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-2 py-1.5 text-sm font-body transition-all duration-200 rounded-lg hover:bg-secondary/50 ${
                  activeSection === link.href
                    ? "text-accent font-medium"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle - Single Icon with Smooth Transition */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:flex items-center justify-center w-9 h-9 ml-2 lg:ml-4 rounded-full bg-secondary/50 hover:bg-secondary transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              {/* Sun Icon */}
              <Sun
                className={`absolute inset-0 h-5 w-5 text-foreground/80 transition-all duration-300 ${
                  darkMode
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              {/* Moon Icon */}
              <Moon
                className={`absolute inset-0 h-5 w-5 text-foreground/80 transition-all duration-300 ${
                  darkMode
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-0"
                }`}
              />
            </div>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground rounded-lg hover:bg-secondary/50 transition-colors duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - Animated */}
      <div
        className={`md:hidden mt-2 overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl bg-background/95 backdrop-blur-xl border border-border p-2 shadow-lg">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
                setMobileOpen(false);
              }}
              className={`block py-3 px-4 text-foreground font-body text-base rounded-xl hover:bg-secondary/50 hover:text-accent transition-all duration-200 ${
                activeSection === link.href ? "text-accent bg-secondary/30" : ""
              }`}
              style={{
                transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          {/* Mobile Dark Mode Toggle */}
          <div className="border-t border-border mt-2 pt-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-secondary/50 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              <span className="text-base font-body text-foreground">
                Dark Mode
              </span>
              <div className="relative w-5 h-5">
                <Sun
                  className={`absolute inset-0 h-5 w-5 text-foreground/80 transition-all duration-300 ${
                    darkMode
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute inset-0 h-5 w-5 text-foreground/80 transition-all duration-300 ${
                    darkMode
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
