import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONTENT } from '../data/siteContent';

interface HeaderProps {
  onOpenCollaborate: (presetTopic?: string) => void;
}

export function Header({ onOpenCollaborate }: HeaderProps) {
  const { brand, navigation } = SITE_CONTENT;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`w-full z-30 transition-all duration-300 ${
        scrolled
          ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#E8E8E8] text-[#111111]'
          : 'absolute top-0 left-0 right-0 bg-transparent text-white'
      }`}
    >
      <div className="mx-auto flex h-16 md:h-[72px] max-w-[1200px] items-center justify-between px-6 md:px-10">
        {/* Brand Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
        >
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-sm border transition-colors ${
              scrolled
                ? 'border-[#111111] bg-[#111111] text-white'
                : 'border-white/80 bg-white/10 text-white'
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
              <circle cx="5" cy="5" r="1.6" fill="currentColor" />
              <circle cx="11" cy="5" r="1.6" fill="currentColor" />
              <circle cx="8" cy="11" r="1.6" fill="currentColor" />
              <path
                d="M5 5L11 5L8 11Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>{brand.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegación principal"
          className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1 transition-colors ${
            scrolled
              ? 'bg-transparent'
              : 'bg-black/25 backdrop-blur-md border border-white/15'
          }`}
        >
          {navigation.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                scrolled
                  ? 'text-[#333333] hover:text-[#111111] hover:bg-[#F5F7FA]'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenCollaborate()}
            className={`hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2 text-[12px] font-semibold tracking-[0.04em] uppercase transition-colors cursor-pointer ${
              scrolled
                ? 'bg-[#111111] text-white hover:bg-[#2A2A2A]'
                : 'bg-white text-[#111111] hover:bg-white/90'
            }`}
          >
            {navigation.ctaLabel}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
            className={`inline-flex md:hidden h-10 w-10 items-center justify-center rounded-full border transition-colors cursor-pointer ${
              scrolled
                ? 'border-[#E8E8E8] text-[#111111] hover:bg-[#F5F7FA]'
                : 'border-white/35 bg-black/25 text-white hover:bg-black/40'
            }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E8E8] bg-white text-[#111111] shadow-lg">
          <nav
            aria-label="Navegación móvil"
            className="mx-auto flex max-w-[1200px] flex-col px-6 py-5"
          >
            {navigation.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-[#F0F0F0] py-3.5 text-[15px] font-medium text-[#111111] hover:text-[#426FCE]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCollaborate();
              }}
              className="mt-5 w-full rounded-full bg-[#111111] py-3 text-[13px] font-semibold tracking-[0.04em] uppercase text-white hover:bg-[#2A2A2A] cursor-pointer"
            >
              {navigation.ctaLabel}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
