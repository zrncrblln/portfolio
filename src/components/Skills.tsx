import { useScrollReveal } from '@/hooks/useScrollReveal';

const SKILLS = [
  {
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap 5', 'Alpine.js', 'PWA'],
  },
  {
    category: 'Backend',
    tags: ['PHP', 'Laravel', 'Node.js', 'RESTful APIs', 'Redis', 'Apache'],
  },
  {
    category: 'Database',
    tags: ['MySQL', 'SQL', 'Query Optimization', 'Database Indexing'],
  },
  {
    category: 'Tools',
    tags: ['Git', 'GitHub Actions (CI/CD)', 'Vite', 'OpenAI API', 'Google Cloud Vision API', 'Heroku'],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section-padding">
      <div className="content-wrapper" ref={ref}>
        <p className="scroll-reveal section-label">// SKILLS</p>
        <h2 className="scroll-reveal section-heading">Technical Proficiencies</h2>

        <div className="mt-12 space-y-8">
          {SKILLS.map((group) => (
            <div key={group.category} className="scroll-reveal flex flex-col md:flex-row gap-4 md:gap-8">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-24 shrink-0 pt-1.5">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
