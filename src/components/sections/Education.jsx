import { GraduationCap, MapPin, Star } from 'lucide-react';
import { education } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Education"
          icon={<GraduationCap size={14} />}
          title="Currently studying Computer Science"
          description="Pursuing a Bachelor of Computer Applications while building practical full-stack skills on the side."
        />

        <div className="mt-12 grid gap-5">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 80}>
              <article className="card card-hover relative overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-accent-400 to-accent-600" />
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-300">
                      <GraduationCap size={22} />
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-ink-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-ink-500 dark:text-ink-300">
                        {edu.field}
                      </p>
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                        <MapPin size={14} className="text-accent-500" />
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <span className="chip">{edu.period}</span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      <Star size={14} className="fill-emerald-500 stroke-emerald-500" />
                      {edu.highlight}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
