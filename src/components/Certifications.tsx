import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Shield, BarChart3, Code, Globe, Lock, Server, Award, Lightbulb } from 'lucide-react';

const CERTS = [
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'Cisco', icon: Shield },
  { name: 'Data Analytics Essentials', issuer: 'Cisco', icon: BarChart3 },
  { name: 'Python Essentials 1', issuer: 'Cisco', icon: Code },
  { name: 'Introduction to Data Science', issuer: 'Cisco', icon: Globe },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', icon: Lock },
  { name: 'Certified Data Center Technician (CDCT)', issuer: 'CompTIA', icon: Server },
  { name: 'Professionalism (US English)', issuer: 'Wadhwani Foundation', icon: Award },
  { name: 'Start-Up Mindset (US English)', issuer: 'Wadhwani Foundation', icon: Lightbulb },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// CERTIFICATIONS</p>
        <h2 className="scroll-reveal section-heading">Credentials</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.name} className="scroll-reveal bg-card border border-border rounded-xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <Icon size={20} className="text-accent mb-3" />
                <h3 className="text-sm font-body font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
