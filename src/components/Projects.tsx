import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

interface Project {
  index: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  image: string;
  category: string;
  features: string[];
  techStack: { label: string; details: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  screenshots: string[];
}

const PROJECTS: Project[] = [
  {
    index: "01",
    name: "WU-P Pocket Guide",
    shortDesc:
      "Campus PWA serving 5,000+ students with AI chatbot and interactive maps.",
    fullDesc:
      "A comprehensive Progressive Web App designed to enhance the campus experience for students, faculty, and visitors of Wesleyan University-Philippines. It serves as a centralized hub for university information, combining real-time announcements, interactive navigation, educational guides, emergency alerts, and an AI-powered chatbot into a single, user-friendly platform.",
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
    features: [
      "Centralized Announcements: Aggregates and filters posts from multiple WU-P-related Facebook pages",
      "Interactive Campus Map: Detailed map with routing functionality using Leaflet.js",
      "Guides Section: Comprehensive guides with step-by-step instructions for university processes",
      "Emergency Alerts: Real-time push notifications powered by OneSignal",
      "Wesley Chatbot: AI assistant built with OpenAI's API",
      "Advanced Search: Fuzzy search capabilities using Fuse.js",
      "Admin Panel: Secure dashboard for content management",
      "PWA Support: Installable as a mobile app with offline capabilities",
    ],
    techStack: [
      { label: "Backend", details: "Laravel 10 (PHP 8.2+)" },
      { label: "Database", details: "MySQL with Laravel migrations" },
      { label: "Authentication", details: "Laravel Sanctum" },
      { label: "Maps", details: "Leaflet.js with routing machine" },
      { label: "AI", details: "OpenAI API (GPT-3.5)" },
      { label: "Notifications", details: "OneSignal Push Notifications" },
      { label: "PWA", details: "Laravel PWA package" },
      { label: "Queue", details: "Redis/Predis for background jobs" },
    ],
    liveDemoUrl: "https://wup-pocket-guide.example.com",
    githubUrl: "https://github.com/example/wup-pocket-guide",
    screenshots: [project1, project1, project1],
  },
  {
    index: "02",
    name: "iSyn-app Automation Platform",
    shortDesc:
      "Financial management system — 30% faster queries across 10,000+ records.",
    fullDesc:
      "A comprehensive financial management system designed to streamline business operations and improve efficiency. The platform handles over 10,000 records with optimized queries, resulting in 30% faster data retrieval and improved workflow automation.",
    tags: ["PHP", "MySQL", "Bootstrap 5", "Chart.js", "jQuery"],
    image: project2,
    category: "PHP",
    features: [
      "Financial Transaction Management",
      "Automated Report Generation",
      "Real-time Data Analytics with Chart.js",
      "User Role Management",
      "Invoice Generation and Tracking",
      "Expense Categorization",
      "Dashboard with Key Metrics",
      "Data Export Capabilities",
    ],
    techStack: [
      { label: "Backend", details: "PHP 8.x" },
      { label: "Database", details: "MySQL" },
      { label: "Frontend", details: "Bootstrap 5" },
      { label: "Charts", details: "Chart.js" },
      { label: "DOM", details: "jQuery" },
    ],
    liveDemoUrl: "https://isyn-app.example.com",
    githubUrl: "https://github.com/example/isyn-app",
    screenshots: [project2, project2, project2],
  },
  {
    index: "03",
    name: "Automate — School Management System",
    shortDesc:
      "Multi-role academic platform with secure auth and grade tracking.",
    fullDesc:
      "A comprehensive school management system providing academic platform functionality with secure authentication and efficient grade tracking. Designed for educational institutions to manage student information, grades, and administrative processes efficiently.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: project3,
    category: "PHP",
    features: [
      "Multi-role Authentication (Admin, Teacher, Student)",
      "Grade Management and Tracking",
      "Student Information System",
      "Class Schedule Management",
      "Attendance Tracking",
      "Academic Reports Generation",
      "Parent Portal Access",
      "Document Management",
    ],
    techStack: [
      { label: "Backend", details: "PHP" },
      { label: "Database", details: "MySQL" },
      { label: "Frontend", details: "Bootstrap" },
      { label: "JavaScript", details: "Vanilla JS" },
    ],
    liveDemoUrl: "https://automate-sms.example.com",
    githubUrl: "https://github.com/example/automate-sms",
    screenshots: [project3, project3, project3],
  },
  {
    index: "04",
    name: "Cybersecurity Awareness Landing Page",
    shortDesc:
      "WCAG 2.1 AA compliant. 95+ Google Lighthouse score. CI/CD deployed.",
    fullDesc:
      "A modern, accessible landing page dedicated to cybersecurity awareness. Built with strict adherence to WCAG 2.1 AA guidelines and optimized for performance, achieving a 95+ Google Lighthouse score. Deployed with continuous integration and deployment pipelines.",
    tags: ["React", "TypeScript", "Framer Motion", "GitHub Actions"],
    image: project4,
    category: "React",
    features: [
      "WCAG 2.1 AA Compliant",
      "95+ Google Lighthouse Score",
      "Responsive Design",
      "Smooth Animations with Framer Motion",
      "CI/CD Deployment with GitHub Actions",
      "SEO Optimized",
      "Accessibility-first Approach",
      "Interactive Security Tips",
    ],
    techStack: [
      { label: "Framework", details: "React 18" },
      { label: "Language", details: "TypeScript" },
      { label: "Styling", details: "Tailwind CSS" },
      { label: "Animations", details: "Framer Motion" },
      { label: "CI/CD", details: "GitHub Actions" },
      { label: "Hosting", details: "Vercel/Netlify" },
    ],
    liveDemoUrl: "https://cybersecurity-awareness.example.com",
    githubUrl: "https://github.com/example/cybersecurity-awareness",
    screenshots: [project4, project4, project4],
  },
  {
    index: "05",
    name: "Movie Library App",
    shortDesc:
      "Movie discovery app with real-time TMDB API data and 50,000+ entries.",
    fullDesc:
      "A feature-rich movie discovery application that integrates with the TMDB API to provide access to over 50,000 movie entries. Users can explore, search, and discover movies with detailed information, trailers, cast details, and personalized recommendations.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    image: project5,
    category: "React",
    features: [
      "Real-time TMDB API Integration",
      "50,000+ Movie Entries",
      "Advanced Search & Filters",
      "Movie Details & Cast Info",
      "Watchlist Management",
      "Favorites Collection",
      "Trending Movies Section",
      "Genre-based Browsing",
    ],
    techStack: [
      { label: "Framework", details: "React 18" },
      { label: "Language", details: "TypeScript" },
      { label: "Styling", details: "Tailwind CSS" },
      { label: "Build Tool", details: "Vite" },
      { label: "API", details: "TMDB (The Movie Database)" },
      { label: "State", details: "React Context + Hooks" },
    ],
    liveDemoUrl: "https://movie-library.example.com",
    githubUrl: "https://github.com/example/movie-library",
    screenshots: [project5, project5, project5],
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
  onViewProject,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  onViewProject: (project: Project) => void;
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
      className={`group relative bg-card border border-border rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
        index === 0 ? "md:col-span-2" : ""
      }`}
      onClick={() => onViewProject(project)}
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
        {project.shortDesc}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsSheetOpen(true);
  };

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
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
                  <ProjectCard
                    key={project.index}
                    project={project}
                    index={i}
                    onViewProject={handleViewProject}
                  />
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

      {/* Project Details Slide-over Panel - Responsive */}
      <Sheet open={isSheetOpen} onOpenChange={handleCloseSheet}>
        <SheetContent
          side="right"
          className="w-full sm:w-[85vw] md:w-[600px] lg:w-[700px] max-w-[95vw] overflow-y-auto"
        >
          {selectedProject && (
            <ProjectDetailsContent
              project={selectedProject}
              onClose={handleCloseSheet}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

// Project Details Content Component (inside Sheet)
function ProjectDetailsContent({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot(
      (prev) =>
        (prev - 1 + project.screenshots.length) % project.screenshots.length,
    );
  };

  return (
    <div className="mt-4">
      {/* Screenshot Carousel */}
      <div className="relative">
        <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl bg-muted">
          <img
            src={project.screenshots[currentScreenshot]}
            alt={`${project.name} screenshot ${currentScreenshot + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        {project.screenshots.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevScreenshot();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextScreenshot();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentScreenshot(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentScreenshot
                      ? "bg-primary"
                      : "bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Project Title */}
      <div className="mt-6">
        <span className="text-sm text-muted-foreground">#{project.index}</span>
        <h2 className="text-xl sm:text-2xl font-bold mt-1">{project.name}</h2>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Full Description */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">About</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.fullDesc}
        </p>
      </div>

      {/* Features List */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3">Key Features</h3>
        <ul className="space-y-2">
          {project.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-3">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-3">
          {project.techStack.map((tech, idx) => (
            <div key={idx} className="bg-muted/50 rounded-lg p-3">
              <p className="text-xs text-muted-foreground">{tech.label}</p>
              <p className="text-sm font-medium mt-1">{tech.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        {project.liveDemoUrl && (
          <Button asChild className="flex-1">
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
