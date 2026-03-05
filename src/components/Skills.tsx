import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code,
  Server,
  Database,
  Wrench,
  Bot,
  Palette,
  Briefcase,
  Cpu,
} from "lucide-react";

const SKILLS = [
  {
    category: "Frontend",
    icon: Code,
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
    icon: Server,
    tags: [
      "PHP",
      "Laravel",
      "Node.js",
      "Java",
      "C++",
      "RESTful APIs",
      "Redis",
      "Apache",
    ],
  },
  {
    category: "Database",
    icon: Database,
    tags: ["MySQL", "SQL", "Query Optimization", "Database Indexing"],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
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
    icon: Bot,
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
    icon: Palette,
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
    icon: Briefcase,
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
    category: "Hardware & Technical",
    icon: Cpu,
    tags: [
      "Smartphone",
      "Laptop",
      "Tablet",
      "Printer Repair",
      "Hardware Troubleshooting",
      "Component Replacement",
      "Motorcycle Maintenance",
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="skills" className="section-padding">
      <div className="content-wrapper">
        <p className="scroll-reveal section-label">// SKILLS</p>
        <h2 className="scroll-reveal section-heading">
          Technical Proficiencies
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group, index) => (
            <div
              key={group.category}
              className="scroll-reveal group border border-border rounded-xl bg-card/30 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <group.icon className="w-6 h-6 text-foreground transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-mono text-sm text-foreground uppercase tracking-wider flex items-center gap-2">
                    {group.category}
                    <span className="text-[10px] text-muted-foreground font-normal normal-case">
                      ({group.tags.length})
                    </span>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="tag-pill text-[11px] py-0.5 px-2 opacity-0 animate-fade-in"
                      style={{
                        animationDelay: `${index * 100 + tagIndex * 30}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
