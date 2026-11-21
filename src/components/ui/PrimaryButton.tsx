import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'dark' | 'white' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

type PrimaryButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type PrimaryButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type PrimaryButtonProps = PrimaryButtonAsButton | PrimaryButtonAsAnchor;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  dark: 'bg-[#111111] text-white hover:bg-[#2A2A2A]',
  white: 'bg-white text-[#111111] hover:bg-white/90',
  accent: 'bg-[#426FCE] text-white hover:bg-[#355BB5]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[12px]',
  md: 'px-6 py-2.5 text-[13px]',
  lg: 'px-7 py-3 text-[14px]',
};

export function PrimaryButton(props: PrimaryButtonProps) {
  const {
    variant = 'dark',
    size = 'md',
    fullWidth = false,
    children,
    className = '',
    ...rest
  } = props;

  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
