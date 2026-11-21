import { SITE_CONTENT } from '../data/siteContent';
import { PrimaryButton } from './ui/PrimaryButton';

interface FeaturedProjectProps {
  onOpenProject: () => void;
}

export function FeaturedProject({ onOpenProject }: FeaturedProjectProps) {
  const { featuredProject } = SITE_CONTENT;

  return (
    <section
      aria-label="Proyecto destacado: Redes que sostienen"
      className="w-full bg-[#F5F7FA] py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-2xl min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex flex-col items-center justify-center text-center px-6 py-16 bg-[#181818]">
          <img
            src={featuredProject.image}
            alt={featuredProject.imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/58 to-black/52"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center max-w-[660px]">
            {/* Minimal white geometric network emblem echoing the reference centerpiece */}
            <div className="mb-5 text-white/95" aria-hidden="true">
              <svg viewBox="0 0 48 36" className="h-10 w-12" fill="none">
                <circle cx="10" cy="24" r="3.5" fill="currentColor" />
                <circle cx="24" cy="9" r="3.5" fill="currentColor" />
                <circle cx="38" cy="24" r="3.5" fill="currentColor" />
                <circle cx="24" cy="27" r="2.8" fill="currentColor" opacity="0.85" />
                <path
                  d="M10 24L24 9L38 24M10 24L24 27L38 24M24 9V27"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="text-[34px] sm:text-[46px] md:text-[56px] font-normal leading-[1.08] tracking-[-0.025em] text-white">
              {featuredProject.title}
            </h2>

            <p className="mt-4 max-w-[540px] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-white/90">
              {featuredProject.description}
            </p>

            <div className="mt-7">
              <PrimaryButton variant="white" size="md" onClick={onOpenProject}>
                {featuredProject.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
