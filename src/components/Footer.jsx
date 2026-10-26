import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { profile, navItems } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-ink-200/70 dark:border-ink-800 bg-cream-50/60 dark:bg-ink-950">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-900 text-accent-400 dark:bg-accent-500 dark:text-white shadow-sm">
                {profile.initials}
              </span>
              <span className="font-display text-base font-semibold text-ink-900 dark:text-white">
                {profile.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted" style={{ lineHeight: 1.65 }}>
              {profile.title} building responsive, real-world web applications with React.js, Node.js and Express.js.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300 hover:-translate-y-0.5 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300 hover:-translate-y-0.5 transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Navigate</p>
            <ul className="mt-4 grid gap-2.5">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors link-underline w-fit"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">Let's talk</p>
            <p className="mt-4 text-sm text-muted" style={{ lineHeight: 1.6 }}>
              Open to internships and entry-level full-stack roles.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-300 hover:gap-3 transition-all"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-ink-100 dark:border-ink-800 pt-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">Built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
