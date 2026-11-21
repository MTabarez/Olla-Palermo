import { SITE_CONTENT } from '../data/siteContent';
import { PrimaryButton } from './ui/PrimaryButton';
import { SecondaryButton } from './ui/SecondaryButton';

interface HeroProps {
  onOpenCollaborate: (presetTopic?: string) => void;
}

export function Hero({ onOpenCollaborate }: HeroProps) {
  const { hero } = SITE_CONTENT;

  return (
    <section
      id="inicio"
      className="relative flex min-h-[68vh] md:min-h-[74vh] w-full items-end overflow-hidden bg-[#141414]"
    >
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Balanced dark overlay prioritizing left-side legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/35"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-10 pt-32 pb-14 md:pb-20">
        <div className="max-w-[840px]">
          <h1 className="text-[38px] sm:text-[50px] md:text-[60px] lg:text-[66px] font-light leading-[1.08] tracking-[-0.028em] text-white">
            {hero.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[540px] text-[15px] sm:text-[16px] md:text-[17px] font-normal leading-[1.6] text-white/85">
            {hero.supportingText}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <PrimaryButton variant="white" size="md" href="#que-hacemos">
              {hero.primaryCta}
            </PrimaryButton>
            <SecondaryButton
              variant="light-outline"
              size="md"
              onClick={() => onOpenCollaborate()}
            >
              {hero.secondaryCta}
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
