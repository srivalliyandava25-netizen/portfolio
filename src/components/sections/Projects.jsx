import { Check, FolderGit2, ArrowUpRight, KanbanSquare, MessageSquare, Send, Database } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useTilt } from '@/hooks/useTilt';

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20 section-tint">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured Projects"
          icon={<FolderGit2 size={14} />}
          title="Things I've built"
          description="Two projects where I put React and full-stack integration into practice — from a three-stage issue tracker to a student feedback system with a real database."
        />
        <div className="mt-14 flex flex-col gap-8 sm:gap-10">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');
  const tilt = useTilt(6);
  return (
    <Reveal>
      <article
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        style={{ transformStyle: 'preserve-3d', ...tilt.style }}
        className={`card card-hover group relative grid gap-0 overflow-hidden lg:grid-cols-2 ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Editorial number */}
        <span className="pointer-events-none absolute right-5 top-5 z-10 font-display text-5xl font-bold text-ink-100 dark:text-ink-800/80 select-none">
          {num}
        </span>

        {/* Visual preview */}
        <div className="relative min-h-[18rem] sm:min-h-[22rem] overflow-hidden border-b lg:border-b-0 lg:border-r border-ink-100 dark:border-ink-800 bg-gradient-to-br from-cream-50 to-cream-100 dark:from-ink-900 dark:to-ink-950">
          {/* Browser chrome */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-ink-100/70 dark:border-ink-800/70 bg-white/60 dark:bg-ink-900/50 px-4 py-2 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            <span className="ml-2 h-4 w-28 rounded-full bg-ink-100/80 dark:bg-ink-800/60" />
          </div>
          {project.visual === 'tracker' ? (
            <TrackerPreview accent={project.accent} />
          ) : (
            <FeedbackPreview accent={project.accent} />
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className="grid h-10 w-10 place-items-center rounded-xl"
              style={{ backgroundColor: `${project.accent}1a`, color: project.accent }}
            >
              <project.icon size={20} />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
              {project.tagline}
            </span>
          </div>

          <h3 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-ink-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-muted text-base" style={{ lineHeight: 1.65 }}>
            {project.description}
          </p>

          <ul className="mt-5 grid gap-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-300">
                  <Check size={11} strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3 pt-1">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-4 py-2.5 text-xs"
              >
                View code
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <FolderGit2 size={14} />
                Source available on request
              </span>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-4 py-2.5 text-xs"
              >
                Live demo
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function FeedbackPreview({ accent }) {
  return (
    <div className="absolute inset-0 p-5 pt-12 sm:p-6 sm:pt-12">
      <div className="mx-auto max-w-sm h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg text-white" style={{ background: accent }}>
            <MessageSquare size={16} />
          </span>
          <div className="space-y-1">
            <div className="h-2.5 w-28 rounded-full bg-ink-200 dark:bg-ink-700" />
            <div className="h-1.5 w-20 rounded-full bg-ink-100 dark:bg-ink-800" />
          </div>
        </div>

        {/* Form card */}
        <div className="mt-4 rounded-xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 p-3.5 transition-transform duration-300 group-hover:-translate-y-0.5">
          <div className="space-y-2.5">
            <div>
              <div className="h-1.5 w-12 rounded-full bg-ink-200 dark:bg-ink-700" />
              <div className="mt-1.5 h-4 w-full rounded-md bg-cream-100 dark:bg-ink-800" />
            </div>
            <div>
              <div className="h-1.5 w-16 rounded-full bg-ink-200 dark:bg-ink-700" />
              <div className="mt-1.5 h-10 w-full rounded-md bg-cream-100 dark:bg-ink-800" />
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <span className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white" style={{ background: accent }}>
              <Send size={10} />
              Submit
            </span>
          </div>
        </div>

        {/* Flow: API -> DB */}
        <div className="mt-auto flex items-center justify-between rounded-xl border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 px-3 py-2.5">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-ink-500 dark:text-ink-300">
            <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
            REST API
          </span>
          <span className="h-px flex-1 mx-2 bg-gradient-to-r from-transparent via-ink-200 to-transparent dark:via-ink-700" />
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-ink-500 dark:text-ink-300">
            <Database size={11} />
            MongoDB
          </span>
        </div>
      </div>
    </div>
  );
}

function TrackerPreview({ accent }) {
  const cols = ['To Do', 'In Progress', 'Done'];
  return (
    <div className="absolute inset-0 p-5 pt-12 sm:p-6 sm:pt-12">
      <div className="mx-auto max-w-md h-full flex flex-col">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg text-white" style={{ background: accent }}>
            <KanbanSquare size={16} />
          </span>
          <div className="space-y-1">
            <div className="h-2.5 w-24 rounded-full bg-ink-200 dark:bg-ink-700" />
            <div className="h-1.5 w-16 rounded-full bg-ink-100 dark:bg-ink-800" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2.5 flex-1">
          {cols.map((c, i) => (
            <div key={c} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold text-ink-500 dark:text-ink-300">{c}</span>
                <span className="h-4 w-4 rounded-full bg-ink-100 dark:bg-ink-800" />
              </div>
              {[0, 1].map((n) => (
                <div
                  key={n}
                  className="rounded-lg border border-ink-100 dark:border-ink-800 bg-white dark:bg-ink-900 p-2 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ transitionDelay: `${(i * 2 + n) * 50}ms` }}
                >
                  <div className="h-1.5 w-3/4 rounded-full" style={{ background: `${accent}55` }} />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-ink-100 dark:bg-ink-800" />
                  <div className="mt-2 flex items-center gap-1">
                    <span className="h-3.5 w-3.5 rounded-full" style={{ background: accent }} />
                    <span className="h-1.5 w-8 rounded-full bg-ink-100 dark:bg-ink-800" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
