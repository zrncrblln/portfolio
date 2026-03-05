import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2,
  Server,
  Database,
  Workflow,
  Layout,
  Smartphone,
} from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Building responsive, performant user interfaces with React, TypeScript, and modern CSS frameworks like Tailwind CSS.",
    features: [
      "Responsive Web Design",
      "Single Page Applications",
      "Interactive UI/UX",
      "Performance Optimization",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Creating robust server-side applications with PHP, Laravel, and Node.js for scalable and secure solutions.",
    features: [
      "RESTful API Development",
      "Authentication & Authorization",
      "Server Configuration",
      "Third-party Integrations",
    ],
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web application development combining frontend and backend technologies for complete solutions.",
    features: [
      "Custom Web Applications",
      "PWA Development",
      "E-commerce Solutions",
      "CMS Development",
    ],
  },
  {
    icon: Workflow,
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs that connect frontend applications with backend services.",
    features: [
      "API Design & Architecture",
      "Integration with AI Services",
      "Webhook Implementation",
      "API Documentation",
    ],
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing efficient database schemas and optimizing queries for better application performance.",
    features: [
      "Database Architecture",
      "Query Optimization",
      "Data Migration",
      "Database Indexing",
    ],
  },
  {
    icon: Smartphone,
    title: "Technical Consultation",
    description:
      "Providing expert advice on technology choices, architecture decisions, and best practices.",
    features: [
      "Code Review",
      "Technical Strategy",
      "Performance Audits",
      "Team Collaboration",
    ],
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// SERVICES</p>
        <h2 className="scroll-reveal section-heading">What I Can Do For You</h2>
        <p className="scroll-reveal mt-4 text-muted-foreground text-base max-w-2xl leading-relaxed">
          Offering a range of development services tailored to bring your ideas
          to life with clean code and scalable solutions.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="scroll-reveal group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div className="mt-6">
                <span className="text-sm text-foreground font-medium inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
