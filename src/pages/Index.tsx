import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollSpy } from "@/hooks/useScrollReveal";

// SECTIONS array must match the DOM order (top to bottom)
const SECTIONS = [
  "hero",
  "about",
  "skills",
  "work",
  "experience",
  "certifications",
  "contact",
];

const Index = () => {
  useScrollSpy(SECTIONS, 100);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
