import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface TextLinkProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: 'dark' | 'accent' | 'white';
  className?: string;
}

const TONE_CLASSES = {
  dark: 'text-[#111111] hover:text-[#426FCE]',
  accent: 'text-[#426FCE] hover:text-[#355BB5]',
  white: 'text-white hover:text-white/80',
};

export function TextLink({
  children,
  href,
  onClick,
  tone = 'dark',
  className = '',
}: TextLinkProps) {
  const baseClass = `group inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors duration-200 cursor-pointer ${TONE_CLASSES[tone]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={baseClass}>
        <span>{children}</span>
        <ArrowRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={baseClass}>
      <span>{children}</span>
      <ArrowRight
        className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </button>
  );
}
