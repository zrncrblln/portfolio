import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-2.png";
import Hero3DBackground from "./Hero3DBackground";

export default function Hero() {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-accent/[0.05] z-0" />

      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[120px] pointer-events-none z-0" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />

      <div className="content-wrapper relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="flex flex-col items-start" ref={ref}>
            <div className="scroll-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium font-body">
                Available for work
              </span>
            </div>

            <p className="scroll-reveal section-label text-accent">
              // FULL STACK DEVELOPER
            </p>

            <h1 className="scroll-reveal font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground mt-4">
              Zoren
              <br />
              Corbillon
            </h1>

            <p className="scroll-reveal mt-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-[500px]">
              Building digital experiences with clean code, scalable systems,
              and thoughtful interfaces.
            </p>

            <div className="scroll-reveal flex flex-wrap gap-4 mt-10">
              <a
                href="#work"
                className="inline-flex items-center px-8 py-4 rounded-full bg-accent text-foreground font-body font-semibold text-base transition-all duration-300 hover:brightness-110 hover:scale-105 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]"
              >
                View My Work →
              </a>
              <a
                href="/cv"
                className="inline-flex items-center px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-body font-semibold text-base transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
              >
                Download CV
              </a>
            </div>

            <div className="scroll-reveal mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold font-display text-foreground">
                  1+
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Years Exp.
                </p>
              </div>
              <div className="w-px h-12 bg-foreground/20" />
              <div>
                <p className="text-3xl font-bold font-display text-foreground">
                  5
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Projects
                </p>
              </div>
              <div className="w-px h-12 bg-foreground/20" />
              <div>
                <p className="text-3xl font-bold font-display text-foreground">
                  PH
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Location
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Logo with glow effect */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] rounded-full bg-accent/[0.15] blur-[80px] animate-pulse" />
            </div>

            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full border border-accent/20 animate-[spin_22.5s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-accent/10 border-dashed animate-[spin_33.75s_linear_infinite_reverse]" />
            </div>

            {/* Logo container */}
            <div className="relative z-10">
              <img
                src={isDark ? logoDark : logo}
                alt="Zoren Corbillon"
                className="w-72 h-72 object-contain drop-shadow-2xl animate-float-slow transition-all duration-500 ease-in-out"
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-accent/60 animate-[bounce_4.5s_ease-in-out_infinite]" />
            <div className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-accent/40 animate-[bounce_6s_ease-in-out_infinite_1s]" />
            <div className="absolute top-1/3 left-5 w-2 h-2 rounded-full bg-accent/30 animate-[bounce_7.5s_ease-in-out_infinite_0.5s]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[bounce_2s_ease-in-out_infinite]">
        <span className="text-xs text-muted-foreground font-body uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-accent animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
