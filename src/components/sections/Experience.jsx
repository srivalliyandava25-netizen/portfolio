import { Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience & Leadership"
          icon={<Briefcase size={14} />}
          title="Leading, mentoring, coordinating"
          description="Leadership experience at NavGurukul Foundation — the communication and ownership skills that carry directly into software teams."
        />

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400 via-accent-300 to-transparent dark:from-accent-500" />

          <div className="flex flex-col gap-6">
            {experience.map((item, i) => (
              <Reveal key={item.role} delay={i * 100}>
                <article className="relative pl-14">
                  {/* Node */}
                  <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 shadow-sm">
                    <item.icon size={18} className="text-accent-600 dark:text-accent-300" />
                  </span>

                  <div className="card card-hover p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-ink-900 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-300">
                          {item.org}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <span className="chip">{item.type}</span>
                        <span className="text-xs text-muted">{item.period}</span>
                      </div>
                    </div>

                    <ul className="mt-5 grid gap-2.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
