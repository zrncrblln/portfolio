import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Workflow,
  Layout,
  Smartphone,
  ClipboardList,
  Headphones,
  Calendar,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    icon: ClipboardList,
    title: "Virtual Assistant Services",
    description:
      "Professional administrative support to help streamline your business operations and boost productivity.",
    features: [
      "Email Management",
      "Data Entry & Research",
      "Document Preparation",
      "Social Media Management",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Providing excellent customer service through various channels to ensure client satisfaction.",
    features: [
      "Live Chat Support",
      "Email Support",
      "Ticket Management",
      "Customer Relations",
    ],
  },
  {
    icon: Calendar,
    title: "Schedule Management",
    description:
      "Organizing and managing appointments, meetings, and calendars efficiently.",
    features: [
      "Calendar Coordination",
      "Meeting Setup",
      "Reminders & Follow-ups",
      "Travel Arrangements",
    ],
  },
];

// Calculate how many cards to show based on screen size
const getCardsPerSlide = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export default function Services() {
  const ref = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(SERVICES.length / cardsPerSlide);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  const getVisibleServices = () => {
    const start = currentIndex * cardsPerSlide;
    return SERVICES.slice(start, start + cardsPerSlide);
  };

  return (
    <section
      id="services"
      className="section-padding"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// SERVICES</p>
        <h2 className="scroll-reveal section-heading">What I Can Do For You</h2>
        <p className="scroll-reveal mt-4 text-muted-foreground text-base max-w-2xl leading-relaxed">
          Offering a range of development and virtual assistant services
          tailored to bring your ideas to life with clean code and scalable
          solutions.
        </p>

        {/* Carousel Container */}
        <div className="mt-12 relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 hidden md:flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 hidden md:flex"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Carousel Slides */}
          <div className="overflow-hidden px-4 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: direction === "next" ? 50 : -50,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction === "next" ? -50 : 50,
                }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getVisibleServices().map((service) => (
                  <div
                    key={service.title}
                    className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/30"
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "w-8 bg-accent"
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
