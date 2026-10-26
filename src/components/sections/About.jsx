import { Quote, Sparkles } from 'lucide-react';
import { profile, languages } from '@/data/portfolio';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <span className="eyebrow">
              <Sparkles size={14} />
              About
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight"
              style={{ lineHeight: 1.1 }}
            >
              A student who ships, learns, and improves.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <p className="text-muted text-base sm:text-lg" style={{ lineHeight: 1.7 }}>
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={140}>
              <figure className="card relative p-6 pl-8">
                <Quote
                  size={22}
                  className="absolute -left-2 top-6 text-accent-400/70"
                  aria-hidden
                />
                <blockquote
                  className="text-ink-800 dark:text-ink-100 text-base sm:text-lg font-medium"
                  style={{ lineHeight: 1.6 }}
                >
                  "My goal is to become a Full Stack Developer — to build impactful real-world
                  applications and continuously improve my technical skills."
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted">
                  — {profile.name}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">Languages</span>
                {languages.map((lang) => (
                  <span key={lang} className="chip">
                    {lang}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
