import { ArrowDown, ArrowUpRight, Github, Linkedin, Sparkles, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { Aurora } from '@/components/ui/Aurora';
import { useTypewriter } from '@/hooks/useTypewriter';

const heroStats = [
  { value: '8.9', label: 'CGPA', sub: '/ 10' },
  { value: '2', label: 'Projects', sub: 'shipped' },
  { value: '10+', label: 'Tools', sub: 'in toolkit' },
  { value: '3', label: 'Languages', sub: 'spoken' },
];

const focusWords = ['React.js', 'Node.js', 'Express.js', 'responsive UIs', 'full-stack apps'];
const roles = ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'Gen AI Developer'];

export function Hero() {
  const typed = useTypewriter(focusWords);
  const role = useTypewriter(roles, { typeSpeed: 75, deleteSpeed: 38, pause: 1800 });
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">
      {/* Background layers */}
      <Aurora />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_72%)]" />
      <div className="absolute -top-32 left-1/2 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent-400/10 blur-3xl dark:bg-accent-500/10" />
      <div className="absolute right-[-10%] top-24 -z-10 h-72 w-72 rounded-full bg-[#7c5ce0]/10 blur-3xl" />

      <div className="container-page grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-ink-200 dark:border-ink-800 bg-white/70 dark:bg-ink-900/60 px-3 py-1.5 text-xs font-medium text-ink-600 dark:text-ink-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to internship &amp; entry-level roles
            <span className="text-ink-300 dark:text-ink-600">·</span>
            <MapPin size={12} className="text-ink-400" />
            <span className="text-ink-500 dark:text-ink-300">Andhra Pradesh, India</span>
          </span>

          <h1
            className="mt-6 font-bold tracking-tight text-ink-950 dark:text-white animate-fade-up"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', lineHeight: 1.04 }}
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
            <span
              className="caret block mt-2 text-accent-600 dark:text-accent-300 min-h-[1.6em]"
              style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)', letterSpacing: '-0.01em' }}
            >
              {role}
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-muted animate-fade-up"
            style={{ fontSize: 'clamp(1rem, 1.4vw, 1.125rem)', lineHeight: 1.7, animationDelay: '120ms' }}
          >
            {profile.shortBio}
          </p>

          {/* Live typing line */}
          <p
            className="mt-4 animate-fade-up text-sm font-medium text-ink-600 dark:text-ink-200"
            style={{ animationDelay: '180ms' }}
          >
            <span className="text-muted">Currently building &amp; learning </span>
            <span className="caret text-accent-600 dark:text-accent-300">{typed}</span>
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <a href="#projects" className="btn-primary px-6 py-3.5">
              View My Projects
              <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost px-6 py-3.5">
              Contact Me
            </a>
          </div>

          {/* Stat strip */}
          <dl
            className="mt-10 grid grid-cols-4 gap-3 sm:gap-4 animate-fade-up w-full max-w-md"
            style={{ animationDelay: '260ms' }}
          >
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dd
                  className="flex items-baseline gap-0.5 font-display font-bold text-ink-900 dark:text-white"
                  style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)' }}
                >
                  {s.value}
                  <span className="text-xs font-medium text-muted">{s.sub}</span>
                </dd>
                <dt className="mt-0.5 text-xs font-medium text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>

          <div
            className="mt-8 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: '320ms' }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              <Github size={18} className="transition-transform group-hover:-translate-y-0.5" />
              <span className="link-underline">GitHub</span>
            </a>
            <span className="h-4 w-px bg-ink-200 dark:bg-ink-700" />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              <Linkedin size={18} className="transition-transform group-hover:-translate-y-0.5" />
              <span className="link-underline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: visual */}
        <HeroVisual />
      </div>

      <a
        href="#about"
        className="mt-14 mx-auto hidden sm:flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
      >
        <ArrowDown size={14} className="animate-bounce" />
        Scroll
      </a>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-in" style={{ animationDelay: '320ms' }}>
      <div className="relative mx-auto w-full max-w-sm">
        {/* Main card: code/editor window */}
        <div className="card relative overflow-hidden p-0 shadow-glow">
          <div className="flex items-center gap-2 border-b border-ink-100 dark:border-ink-800 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs font-medium text-ink-400">developer.ts</span>
          </div>
          <pre className="px-5 py-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
            <code>
              <span className="text-accent-600 dark:text-accent-300">const</span>{' '}
              <span className="text-ink-800 dark:text-white">developer</span>{' '}
              <span className="text-ink-400">=</span> {'{'}
              {'\n'}
              {'  '}<span className="text-ink-500">name</span>:{' '}
              <span className="text-emerald-600 dark:text-emerald-400">'Srivalli Yandava'</span>,{'\n'}
              {'  '}<span className="text-ink-500">role</span>:{' '}
              <span className="text-emerald-600 dark:text-emerald-400">'Full Stack Developer'</span>,{'\n'}
              {'  '}<span className="text-ink-500">stack</span>:[
              <span className="text-emerald-600 dark:text-emerald-400">'React'</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400">'Node'</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400">'Express'</span>],{'\n'}
              {'  '}<span className="text-ink-500">learning</span>:{' '}
              <span className="text-amber-600 dark:text-amber-400">true</span>,{'\n'}
              {'  '}<span className="text-ink-500">openToWork</span>:{' '}
              <span className="text-amber-600 dark:text-amber-400">true</span>,{'\n'}
              {'}'}
            </code>
          </pre>
        </div>

        {/* Floating skill chip */}
        <div className="absolute -left-6 top-1/3 -translate-y-1/2 animate-float">
          <div className="card flex items-center gap-2 px-3 py-2 shadow-card">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-300">
              <Sparkles size={14} />
            </span>
            <span className="text-xs font-semibold text-ink-700 dark:text-ink-100">React.js</span>
          </div>
        </div>

        {/* Floating education chip */}
        <div className="absolute -right-4 bottom-6 animate-float" style={{ animationDelay: '1.2s' }}>
          <div className="card flex items-center gap-2 px-3 py-2 shadow-card">
            <span className="text-xs font-semibold text-ink-700 dark:text-ink-100">CGPA 8.9</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
        </div>

        {/* Decorative ring */}
        <div className="absolute -z-10 -right-10 -top-10 h-32 w-32 rounded-full border border-dashed border-ink-200 dark:border-ink-700 animate-marquee-spin" />
      </div>
    </div>
  );
}
