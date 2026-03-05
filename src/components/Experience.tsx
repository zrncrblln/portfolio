import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ENTRIES = [
  {
    type: "work",
    title: "Web Developer Intern",
    org: "AKSI iSynergies",
    date: "June 2024 – August 2024",
    location: "Cabanatuan City, Nueva Ecija, Philippines",
    bullets: [
      "Contributed to the development of iSynergies Management System — a comprehensive, web-based financial management platform built for cooperatives and financial institutions in Cabanatuan City. The system covers loan management, cashiering, general ledger, inventory tracking, and customer profiling, serving multiple user roles including Super Admin, Cashiering, and Bookkeeper.",
      "Improved system reliability by 15% and data processing speed by 30% through MySQL database indexing and caching strategies on the isyn_db backend",
      "Reduced task completion time by 20% by implementing mobile-first responsive design using Bootstrap 5 and Hope UI",
      "Developed and maintained core modules — Accounts Monitoring, Cashiering, and General Ledger — using PHP 7+, jQuery, and Chart.js for real-time financial dashboards",
      "Maintained 99.9% data accuracy across all financial modules through rigorous input validation, audit trail logging, and systematic QA testing",
      "Coordinated daily Agile standups for a team of 4, managed task assignments, tracked deliverables, and supported smooth communication between technical and non-technical stakeholders",
    ],
  },
  {
    type: "work",
    title: "Junior Web Developer",
    org: "Freelance",
    date: "June 2025 – Present",
    location: "Remote (Local Clients, Philippines)",
    bullets: [
      "Independently designing and building web solutions for local clients, handling projects end-to-end from requirements gathering to deployment.",
      "Developed responsive websites and landing pages tailored to client branding and business goals using HTML, CSS, JavaScript, and Bootstrap",
      "Built custom web applications to support client workflows, handling both frontend UI and backend logic",
      "Managed full client communication cycles — from scoping and proposals to revisions and delivery",
    ],
  },
  {
    type: "work",
    title: "Virtual Assistant",
    org: "Freelance",
    date: "June 2025 – Present",
    location: "Remote (Local Clients, Philippines)",
    bullets: [
      "Providing tech-savvy administrative support to local clients, leveraging a Computer Engineering background to adopt tools quickly and work efficiently across platforms.",
      "Managed social media accounts — content planning, posting calendars, caption writing, and campaign documentation aligned with brand voice and audience targets",
      "Conducted structured web research and data entry, compiling accurate, client-ready spreadsheets for lead prospecting, competitor analysis, and market research",
      "Handled email management and calendar coordination — inbox organization, professional correspondence, meeting scheduling, and appointment workflows using Google Workspace and Calendly",
      "Utilized AI productivity tools (ChatGPT, Gemini, DeepSeek, Claude, Kimi 2.5, Gemini, Grok, Open AI, Llama 4) to streamline research, content drafting, and workflow automation",
      "Produced reports, documentation, and visual assets using Photshop, FIgma, Capcut, Filmora,Canva, Trello, Clockify, and Google Workspace",
    ],
  },
  {
    type: "education",
    title: "B.S. Computer Engineering",
    org: "Wesleyan University – Philippines",
    date: "Graduated August 2025",
    location: "Cabanatuan City, Nueva Ecija",
    bullets: [],
  },
];

const OTHER_EXPERIENCE = [
  {
    title: "Gadget & Device Repair Technician",
    date: "2020 - Present · Ongoing",
    bullets: [
      "Diagnosed and repaired consumer devices including smartphones, laptops, tablets, and printers — handling hardware troubleshooting, component replacement, and software restoration for personal and community clients.",
    ],
  },
  {
    title: "Motorcycle Mechanic",
    date: "2022 - Present · Ongoing",
    bullets: [
      "Performed routine maintenance and mechanical repairs on motorcycles, developing strong diagnostic thinking, attention to detail, and hands-on problem-solving under real-world conditions.",
    ],
  },
  {
    title: "Family Business — Retail, Agriculture & Equipment Operations",
    date: "1997 - Present · Ongoing",
    bullets: [
      "Actively supported the family's multi-operation business covering a retail store, rice and vegetable farming, and agricultural harvesting using a reaper/combine harvester.",
      "Gained hands-on experience in inventory management, daily store operations, customer-facing retail, and coordinating seasonal agricultural workflows.",
    ],
  },
];

export default function Experience() {
  const ref = useScrollReveal();
  const [showOther, setShowOther] = useState(false);

  return (
    <section id="experience" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// EXPERIENCE</p>
        <h2 className="scroll-reveal section-heading">Background</h2>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-border" />

          <div className="space-y-12">
            {ENTRIES.map((entry, i) => (
              <div key={i} className="scroll-reveal relative pl-10">
                {/* Dot */}
                <div className="absolute left-[7px] top-2 w-[10px] h-[10px] rounded-full bg-accent border-2 border-background" />

                <h3 className="text-lg font-body font-semibold text-foreground">
                  {entry.title}
                  <span className="text-muted-foreground font-normal">
                    {" "}
                    — {entry.org}
                  </span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.date} · {entry.location}
                </p>
                {entry.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {entry.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Other Experience - Collapsible */}
            <div className="scroll-reveal relative pl-10">
              {/* Dot */}
              <div className="absolute left-[7px] top-2 w-[10px] h-[10px] rounded-full bg-accent border-2 border-background" />

              <button
                onClick={() => setShowOther(!showOther)}
                className="flex items-center gap-2 text-left w-full group"
              >
                <h3 className="text-lg font-body font-semibold text-foreground group-hover:text-accent transition-colors">
                  Other Experience
                </h3>
                <span className="text-muted-foreground text-sm">
                  {showOther ? "▲" : "▼"}
                </span>
              </button>

              {showOther && (
                <div className="mt-4 space-y-6 pl-4 border-l-2 border-border/50">
                  {OTHER_EXPERIENCE.map((item, i) => (
                    <div key={i}>
                      <h4 className="text-base font-body font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.date}
                      </p>
                      {item.bullets.length > 0 && (
                        <ul className="mt-2 space-y-2">
                          {item.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                            >
                              <span className="text-accent mt-0.5 shrink-0">
                                •
                              </span>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
