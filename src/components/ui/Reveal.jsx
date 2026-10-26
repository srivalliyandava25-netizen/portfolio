import { useReveal } from '@/hooks/useReveal';

export function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const { ref, visible } = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
