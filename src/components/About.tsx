import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Phone, MapPin, Mail, User, Briefcase, Code } from "lucide-react";
import profilePhotoLight from "@/assets/hero.png";
import profilePhotoDark from "@/assets/hero-2.png";

const INFO = [
  { label: "Name", value: "Zoren A. Corbillon" },
  { label: "Role", value: "Junior Full Stack Developer" },
  { label: "Stack", value: "React · Laravel · MySQL" },
  { label: "Location", value: "Rizal, Nueva Ecija, PH" },
  { label: "Email", value: "zorencorbillon@gmail.com" },
];

export default function About() {
  const ref = useScrollReveal();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// ABOUT</p>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-4">
          <div className="lg:col-span-3">
            <h2 className="scroll-reveal section-heading">About Me</h2>
            <div className="scroll-reveal mt-6 mb-6 w-32 h-32 rounded-2xl overflow-hidden border border-border shadow-md">
              <img
                src={isDark ? profilePhotoDark : profilePhotoLight}
                alt="Zoren Corbillon"
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
              />
            </div>
            <p className="scroll-reveal text-muted-foreground leading-[1.7] text-base">
              I'm Zoren, a Computer Engineer, Virtual Assistant and Junior Full
              Stack Developer who builds fast, scalable web applications with
              clean, maintainable code. I specialize in React and Laravel, with
              a strong focus on performance, responsive design, and meaningful
              user experiences.
            </p>
            <p className="scroll-reveal mt-4 text-muted-foreground leading-[1.7] text-base">
              Currently open to junior development roles, freelance projects,
              and remote VA opportunities.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="scroll-reveal bg-card border border-border rounded-2xl p-6 space-y-4">
              {INFO.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground flex items-center gap-1.5">
                    {item.label === "Name" && <User size={14} />}
                    {item.label === "Role" && <Briefcase size={14} />}
                    {item.label === "Stack" && <Code size={14} />}
                    {item.label === "Location" && <MapPin size={14} />}
                    {item.label === "Email" && <Mail size={14} />}
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="flex gap-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0 pt-0.5">
                  GitHub
                </span>
                <a
                  href="https://github.com/zrncrblln"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Github size={14} /> github.com/zrncrblln
                </a>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0 pt-0.5">
                  LinkedIn
                </span>
                <a
                  href="https://linkedin.com/in/zoren-corbillon-96719a138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Linkedin size={14} /> zoren-corbillon
                </a>
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0 pt-0.5">
                  WhatsApp
                </span>
                <a
                  href="https://wa.me/639166100257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                >
                  <Phone size={14} /> +639166100257
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
