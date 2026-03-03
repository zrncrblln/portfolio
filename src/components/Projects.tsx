import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const PROJECTS = [
  {
    index: "01",
    name: "WU-P Pocket Guide",
    desc: "Campus PWA serving 5,000+ students with AI chatbot and interactive maps.",
    tags: [
      "Laravel",
      "MySQL",
      "Tailwind",
      "OpenAI API",
      "Leaflet.js",
      "OneSignal",
    ],
    image: project1,
    category: "Laravel",
  },
  {
    index: "02",
    name: "iSyn-app Automation Platform",
    desc: "Financial management system — 30% faster queries across 10,000+ records.",
    tags: ["PHP", "MySQL", "Bootstrap 5", "Chart.js", "jQuery"],
    image: project2,
    category: "PHP",
  },
  {
    index: "03",
    name: "Automate — School Management System",
    desc: "Multi-role academic platform with secure auth and grade tracking.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: project3,
    category: "PHP",
  },
  {
    index: "04",
    name: "Cybersecurity Awareness Landing Page",
    desc: "WCAG 2.1 AA compliant. 95+ Google Lighthouse score. CI/CD deployed.",
    tags: ["React", "TypeScript", "Framer Motion", "GitHub Actions"],
    image: project4,
    category: "React",
  },
  {
    index: "05",
    name: "Movie Library App",
    desc: "Movie discovery app with real-time TMDB API data and 50,000+ entries.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    image: project5,
    category: "React",
  },
];

// Extract unique categories from projects
const CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

// Loading skeleton component for a single project card
function ProjectSkeleton({ isLarge = false }: { isLarge?: boolean }) {
  return (
    <div
      className={`bg-card border border-border rounded-2xl p-8 ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      <Skeleton
        className={`w-full rounded-xl mb-5 ${isLarge ? "h-56 md:h-72" : "h-44"}`}
      />
      <Skeleton className="w-16 h-6 mb-2" />
      <Skeleton className="w-3/4 h-6 mb-2" />
      <Skeleton className="w-full h-4 mb-1" />
      <Skeleton className="w-2/3 h-4 mb-4" />
      <div className="flex flex-wrap gap-2 mt-4">
        <Skeleton className="w-16 h-6 rounded-full" />
        <Skeleton className="w-20 h-6 rounded-full" />
        <Skeleton className="w-14 h-6 rounded-full" />
      </div>
      <Skeleton className="w-28 h-5 mt-6" />
    </div>
  );
}

// Filter button component
function FilterButton({
  category,
  isActive,
  onClick,
}: {
  category: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-accent text-accent-foreground"
          : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      {category}
    </button>
  );
}

// Project card component
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
        index === 0 ? "md:col-span-2" : ""
      }`}
    >
      {/* Project thumbnail */}
      <div
        className={`w-full overflow-hidden rounded-xl mb-5 ${
          index === 0 ? "h-56 md:h-72" : "h-44"
        }`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Faded index */}
      <span className="absolute top-6 right-8 font-display text-[80px] font-bold text-foreground/[0.04] leading-none select-none">
        {project.index}
      </span>

      <h3 className="relative text-xl font-body font-semibold text-foreground">
        {project.name}
      </h3>
      <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
        {project.desc}
      </p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[12px] px-3 py-1 rounded-full bg-accent/10 text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative mt-6">
        <span className="text-sm text-foreground font-medium inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-foreground after:origin-bottom-right after:transition-transform after:duration-200 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
          View Project →
        </span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useScrollReveal();
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="work" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="section-label"
        >
          // WORK
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="section-heading"
        >
          Selected Projects
        </motion.h2>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            // Show skeletons while loading
            <>
              <ProjectSkeleton isLarge />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : (
            // Show filtered projects with animation
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.index} project={project} index={i} />
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* Empty state if no projects match filter */}
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
