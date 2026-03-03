import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-padding">
      <div className="content-wrapper text-center" ref={ref}>
        <p className="scroll-reveal section-label">// CONTACT</p>
        <h2 className="scroll-reveal font-display text-[36px] md:text-[48px] font-semibold text-foreground">
          Let's build something great.
        </h2>
        <p className="scroll-reveal mt-4 text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
          I'm open to full-time roles, freelance projects, and collaborations.
          If you have something in mind, reach out.
        </p>
        <div className="scroll-reveal mt-8">
          <a
            href="mailto:zorencorbillon@gmail.com"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-accent text-foreground font-body font-medium text-sm transition-all duration-200 hover:brightness-110"
          >
            Send an Email
          </a>
        </div>
        <div className="scroll-reveal mt-8 flex items-center justify-center gap-6">
          <a href="https://github.com/zrncrblln" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/zoren-corbillon-96719a138" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Linkedin size={20} />
          </a>
          <a href="mailto:zorencorbillon@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
