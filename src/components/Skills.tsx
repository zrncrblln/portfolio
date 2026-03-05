import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SKILLS = [
  {
    category: "Frontend",
    tags: [
      "React",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap 5",
      "Alpine.js",
      "PWA",
    ],
  },
  {
    category: "Backend",
    tags: ["PHP", "Laravel", "Node.js", "RESTful APIs", "Redis", "Apache"],
  },
  {
    category: "Database",
    tags: ["MySQL", "SQL", "Query Optimization", "Database Indexing"],
  },
  {
    category: "Tools & DevOps",
    tags: [
      "Git",
      "GitHub Actions (CI/CD)",
      "Vite",
      "Heroku",
      "OpenAI API",
      "Google Cloud Vision API",
    ],
  },
  {
    category: "AI & Automation",
    tags: [
      "ChatGPT",
      "Google Gemini",
      "DeepSeek",
      "Claude",
      "GitHub Copilot",
      "Workflow Automation",
    ],
  },
  {
    category: "Design & Content",
    tags: [
      "Canva",
      "CapCut",
      "Responsive UI Design",
      "Social Media Content Creation",
      "Brand Identity Design",
    ],
  },
  {
    category: "VA & Productivity",
    tags: [
      "Google Workspace",
      "Microsoft Office",
      "Trello",
      "Clockify",
      "Calendly",
      "Sprout Social",
      "Zoom",
      "Slack",
      "Microsoft Teams",
      "Dropbox",
    ],
  },
  {
    category: "Hardware & Technical Repair",
    tags: [
      "Smartphone",
      "Laptop",
      "Tablet",
      "Printer Repair",
      "Hardware Troubleshooting",
      "Component Replacement",
      "Motorcycle Maintenance & Repair",
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();
  const [openCategory, setOpenCategory] = useState<string | null>("Frontend");

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section id="skills" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// SKILLS</p>
        <h2 className="scroll-reveal section-heading">
          Technical Proficiencies
        </h2>

        <div className="mt-12 flex flex-col gap-4">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="scroll-reveal border border-border rounded-lg overflow-hidden bg-card/50"
            >
              <button
                onClick={() => toggleCategory(group.category)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-accent/10 transition-colors"
              >
                <span className="font-mono text-sm text-foreground uppercase tracking-wider">
                  {group.category}
                </span>
                <span className="text-muted-foreground text-xs">
                  {openCategory === group.category ? "−" : "+"}
                </span>
              </button>
              {openCategory === group.category && (
                <div className="px-4 pb-4 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-xs py-1 px-2.5">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
