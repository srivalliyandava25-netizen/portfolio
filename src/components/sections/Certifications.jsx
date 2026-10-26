import { Award, BookOpen } from 'lucide-react';
import { certifications } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 scroll-mt-20 section-tint">
      <div className="container-page">
        <SectionHeading
          eyebrow="Certifications & Courses"
          icon={<Award size={15} />}
          title="Continuous, structured learning"
          description="A mix of hands-on coding practice and university-backed coursework that rounds out my full-stack foundation."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div className="card card-hover group h-full p-5 sm:p-6 flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-300 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <BookOpen size={20} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-900 dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{c.provider}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
