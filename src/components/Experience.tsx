import { useScrollReveal } from '@/hooks/useScrollReveal';

const ENTRIES = [
  {
    type: 'work',
    title: 'Web Developer Intern',
    org: 'AKSI iSynergies',
    date: 'June 2024 – August 2024',
    location: 'Cabanatuan City',
    bullets: [
      'Improved system reliability by 15% and data processing by 30% via database indexing and caching strategies',
      'Reduced task completion time by 20% through mobile-first responsive design using Bootstrap 5',
      'Collaborated in an Agile team of 4, participating in daily standups and code reviews',
      'Maintained 99.9% data accuracy across financial modules',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Computer Engineering',
    org: 'Wesleyan University – Philippines',
    date: 'Graduated August 2025',
    location: 'Cabanatuan City, Nueva Ecija',
    bullets: [],
  },
];

export default function Experience() {
  const ref = useScrollReveal();

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
                  <span className="text-muted-foreground font-normal"> — {entry.org}</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entry.date} · {entry.location}
                </p>
                {entry.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {entry.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-accent mt-0.5 shrink-0">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
