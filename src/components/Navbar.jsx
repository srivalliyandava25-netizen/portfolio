import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { navItems, profile, socials } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const active = useActiveSection(navItems.map((n) => n.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b backdrop-blur-xl bg-cream-50/80 dark:bg-ink-950/80 border-ink-200/70 dark:border-ink-800'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold"
          aria-label={`${profile.name} — home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-900 text-accent-400 dark:bg-accent-500 dark:text-white shadow-sm">
            {profile.initials}
          </span>
          <span className="hidden sm:block font-display tracking-tight text-ink-900 dark:text-white">
            {profile.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-accent-700 dark:text-accent-200'
                    : 'text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-accent-500/10 ring-1 ring-accent-500/25 transition-all duration-300" />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-200 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary px-4 py-2.5 text-xs"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-100"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page pb-6 pt-2">
          <div className="card p-3">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink-700 dark:text-ink-100 hover:bg-cream-100 dark:hover:bg-ink-800/60"
                  >
                    {item.label}
                    <ArrowUpRight size={16} className="text-ink-300" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-2 border-t border-ink-100 dark:border-ink-800 pt-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300"
                >
                  <s.icon size={18} />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary ml-auto px-4 py-2.5 text-xs"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
