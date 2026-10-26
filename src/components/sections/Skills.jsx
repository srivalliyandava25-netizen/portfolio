import { Code2 } from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 scroll-mt-20 section-tint">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          icon={<Code2 size={14} />}
          title="A focused full-stack toolkit"
          description="The technologies I am actively learning and using to build, style, and ship web applications — grouped by where they fit in the stack."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 90}>
              <div className="card card-hover group h-full overflow-hidden">
                {/* Category header */}
                <div className="flex items-center gap-3 border-b border-ink-100 dark:border-ink-800 px-5 py-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-300 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <group.icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 dark:text-white">
                      {group.title}
                    </h3>
                    <p className="text-xs text-muted">{group.blurb}</p>
                  </div>
                </div>

                {/* Tech tiles */}
                <ul className="grid gap-px p-3">
                  {group.skills.map((skill, si) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-cream-50 dark:hover:bg-ink-900/60 hover:translate-x-0.5"
                      style={{ transitionDelay: `${si * 30}ms` }}
                    >
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: `${skill.accent}14`,
                          color: skill.accent,
                        }}
                      >
                        <skill.icon size={17} />
                      </span>
                      <span className="text-sm font-medium text-ink-700 dark:text-ink-200">
                        {skill.name}
                      </span>
                      <span
                        className="ml-auto h-1.5 w-1.5 rounded-full opacity-40 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ backgroundColor: skill.accent }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
