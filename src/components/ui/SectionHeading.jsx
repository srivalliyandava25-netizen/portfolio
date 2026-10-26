import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  icon,
}) {
  const isCenter = align === 'center';
  return (
    <Reveal className={`flex flex-col gap-3 ${isCenter ? 'items-center text-center' : 'items-start'}`}>
      <span className="eyebrow">
        {icon}
        {eyebrow}
      </span>
      <h2
        className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight"
        style={{ lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-muted text-base sm:text-lg max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
          style={{ lineHeight: 1.6 }}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
