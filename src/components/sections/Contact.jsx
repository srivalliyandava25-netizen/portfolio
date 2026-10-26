import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { profile, socials } from '@/data/portfolio';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-20">
      <div className="container-page">
        <div className="card relative overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Decorative */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/10 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-[#7c5ce0]/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <SectionHeading
                eyebrow="Contact"
                icon={<Mail size={14} />}
                title="Let's build something together"
                description="I'm open to internships and entry-level full-stack roles. Reach out — I respond to every message."
              />

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary px-6 py-3.5">
                  Send an email
                  <ArrowUpRight size={16} />
                </a>
                <button onClick={copyEmail} className="btn-ghost px-6 py-3.5">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied!' : 'Copy email'}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ContactRow
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={Github}
                label="GitHub"
                value="@srivalliyandava"
                href={profile.github}
                external
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="in/srivalliyandava"
                href={profile.linkedin}
                external
              />
              <ContactRow icon={MapPin} label="Location" value={profile.location} />
            </div>
          </div>

          <div className="relative mt-10 flex flex-wrap items-center gap-3 border-t border-ink-100 dark:border-ink-800 pt-6">
            <span className="text-sm text-muted">Find me on</span>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 dark:border-ink-800 text-ink-500 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-300 hover:-translate-y-0.5 transition-all"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-xl border border-ink-200 dark:border-ink-800 bg-white/60 dark:bg-ink-900/40 px-4 py-3.5 transition-all hover:border-accent-400 hover:shadow-sm">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-300">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
        <p className="truncate text-sm font-medium text-ink-800 dark:text-ink-100">{value}</p>
      </div>
      {href && (
        <ArrowUpRight
          size={16}
          className="ml-auto text-ink-300 transition-transform group-hover:-translate-y-0.5 group-hover:text-accent-600"
        />
      )}
    </div>
  );
  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    <a href={href} className="block">
      {inner}
    </a>
  );
}
