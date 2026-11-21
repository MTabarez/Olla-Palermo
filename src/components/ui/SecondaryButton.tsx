import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type SecondaryVariant = 'light-outline' | 'dark-outline';
type ButtonSize = 'sm' | 'md';

interface BaseProps {
  variant?: SecondaryVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type SecondaryButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type SecondaryButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type SecondaryButtonProps = SecondaryButtonAsButton | SecondaryButtonAsAnchor;

const VARIANT_CLASSES: Record<SecondaryVariant, string> = {
  'light-outline':
    'border border-white/75 text-white bg-transparent hover:bg-white/15 hover:border-white',
  'dark-outline':
    'border border-[#E8E8E8] text-[#111111] bg-white hover:border-[#111111]',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[12px]',
  md: 'px-6 py-2.5 text-[13px]',
};

export function SecondaryButton(props: SecondaryButtonProps) {
  const {
    variant = 'dark-outline',
    size = 'md',
    children,
    className = '',
    ...rest
  } = props;

  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-colors duration-200 cursor-pointer',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
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
