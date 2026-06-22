type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleColor = theme === 'dark' ? 'text-green-100/90' : 'text-gray-600';
  const eyebrowColor =
    theme === 'dark'
      ? 'text-green-300 border-green-700/50 bg-green-900/40'
      : 'text-brand-green border-brand-green/20 bg-brand-green/5';

  return (
    <div className={`mb-14 lg:mb-16 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
}
