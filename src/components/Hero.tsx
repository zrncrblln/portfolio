import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative amber ellipse */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/[0.12] blur-[120px] pointer-events-none" />

      <div className="content-wrapper relative z-10" ref={ref}>
        <p className="scroll-reveal section-label">// FULL STACK DEVELOPER</p>
        <h1 className="scroll-reveal font-display text-[48px] md:text-[72px] font-bold leading-[1.05] text-foreground mt-4">
          Building<br />
          Digital<br />
          Experiences.
        </h1>
        <p className="scroll-reveal mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-[520px]">
          Clean code. Scalable systems. Thoughtful interfaces.<br />
          Based in Philippines — open to remote opportunities.
        </p>

        <div className="scroll-reveal flex flex-wrap gap-4 mt-10">
          <a
            href="#work"
            className="inline-flex items-center px-7 py-3 rounded-full bg-accent text-foreground font-body font-medium text-sm transition-all duration-200 hover:brightness-110"
          >
            View My Work →
          </a>
          <a
            href="/cv"
            className="inline-flex items-center px-7 py-3 rounded-full border border-foreground text-foreground font-body font-medium text-sm transition-all duration-200 hover:bg-foreground hover:text-background"
          >
            Download CV
          </a>
        </div>

        <div className="scroll-reveal mt-8 flex flex-wrap items-center gap-3 text-muted-foreground text-sm font-body">
          <span>1+ Yrs Experience</span>
          <span className="text-border">·</span>
          <span>5 Projects Shipped</span>
          <span className="text-border">·</span>
          <span>React & Laravel</span>
          <span className="text-border">·</span>
          <span>📍 Philippines</span>
        </div>
      </div>
    </section>
  );
}
