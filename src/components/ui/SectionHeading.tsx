import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'statement' | 'section';
  align?: 'left' | 'center';
  tone?: 'dark' | 'white';
  className?: string;
}

export function SectionHeading({
  children,
  as: Tag = 'h2',
  size = 'section',
  align = 'left',
  tone = 'dark',
  className = '',
}: SectionHeadingProps) {
  const sizeClass =
    size === 'statement'
      ? 'text-[30px] sm:text-[38px] md:text-[44px] leading-[1.16] tracking-[-0.025em] font-normal'
      : 'text-[28px] sm:text-[32px] md:text-[36px] leading-[1.16] tracking-[-0.02em] font-normal';

  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const toneClass = tone === 'white' ? 'text-white' : 'text-[#111111]';

  return (
    <Tag className={`${sizeClass} ${alignClass} ${toneClass} ${className}`}>
      {children}
    </Tag>
  );
}
